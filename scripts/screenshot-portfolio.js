#!/usr/bin/env node
/*
  Screenshot all portfolio project pages.
  - Crawls /portfolio/ to discover project links
  - Visits each project page and saves a screenshot to src/assets/screenshots/<slug>.png

  Usage:
    BASE_URL=http://localhost:8080 node scripts/screenshot-portfolio.js
*/

const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';
const LIST_PATH = '/portfolio/';
const OUT_DIR = path.join(__dirname, '..', 'src', 'assets', 'screenshots');

function slugFromHref(href) {
  try {
    const u = new URL(href, BASE_URL);
    const parts = u.pathname.replace(/\/$/, '').split('/');
    return parts[parts.length - 1] || 'index';
  } catch (e) {
    return href.replace(/\/$/, '').split('/').filter(Boolean).pop() || 'index';
  }
}

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function waitForServer(url, { retries = 40, delayMs = 500 } = {}) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, { method: 'GET' });
      if (res.ok) return true;
    } catch (_) {}
    await new Promise(r => setTimeout(r, delayMs));
  }
  throw new Error(`Dev server not responding at ${url}`);
}

(async () => {
  await ensureDir(OUT_DIR);

  // Wait for dev server to be ready
  await waitForServer(new URL(LIST_PATH, BASE_URL).toString()).catch(err => {
    console.error(err.message);
    process.exit(1);
  });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  // Navigate to the portfolio listing and collect links
  const listUrl = new URL(LIST_PATH, BASE_URL).toString();
  await page.goto(listUrl, { waitUntil: 'networkidle' });
  const links = await page.$$eval('a[href^="/portfolio/"]', as =>
    Array.from(new Set(as.map(a => a.getAttribute('href'))))
  );

  if (!links || links.length === 0) {
    console.warn('No portfolio links found at', listUrl);
  }

  const results = [];
  for (const href of links) {
    if (!href || href === '/portfolio/') continue; // skip index
    const slug = slugFromHref(href);
    const url = new URL(href, BASE_URL).toString();
    const outPath = path.join(OUT_DIR, `${slug}.png`);

    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.screenshot({ path: outPath, fullPage: true });
      console.log(`✔ Saved ${outPath}`);
      results.push({ href, outPath, ok: true });
    } catch (err) {
      console.error(`✖ Failed ${href}:`, err.message);
      results.push({ href, outPath, ok: false, error: err.message });
    }
  }

  await browser.close();

  const okCount = results.filter(r => r.ok).length;
  console.log(`Done. ${okCount}/${results.length} screenshots saved to ${OUT_DIR}`);
})();

#!/usr/bin/env node
/*
  Screenshot external showcase sites listed in src/_data/showcase.yml
  - Reads YAML sections/items with fields: name, url, slug
  - De-duplicates by slug
  - Saves screenshots to src/assets/screenshots/showcase/<slug>.png

  Usage:
    node scripts/screenshot-showcase.js
    node scripts/screenshot-showcase.js --only-missing --retries=3
*/

const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const DATA_PATH = path.join(__dirname, '..', 'src', '_data', 'showcase.yml');
const OUT_DIR = path.join(__dirname, '..', 'src', 'assets', 'screenshots', 'showcase');

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

function loadShowcaseItems() {
  const raw = fs.readFileSync(DATA_PATH, 'utf8');
  const data = yaml.load(raw) || {};
  const sections = Array.isArray(data.sections) ? data.sections : [];
  const items = [];
  for (const section of sections) {
    const list = Array.isArray(section.items) ? section.items : [];
    for (const it of list) {
      if (!it || !it.url || !it.slug) continue;
      items.push({ name: it.name, url: it.url, slug: it.slug });
    }
  }
  // de-dupe by slug
  const unique = Object.values(
    items.reduce((acc, it) => {
      acc[it.slug] = acc[it.slug] || it;
      return acc;
    }, {})
  );
  return unique;
}

(function parseFlags() {
  const flags = { onlyMissing: false, retries: 2 };
  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i];
    if (arg === '--only-missing') flags.onlyMissing = true;
    else if (arg.startsWith('--retries=')) flags.retries = Math.max(0, parseInt(arg.split('=')[1], 10) || 2);
  }
  module.exports = { flags };
})();

async function screenshotWithRetries(browser, url, outPath, { retries = 2 } = {}) {
  let attempt = 0;
  let lastErr = null;
  while (attempt <= retries) {
    const context = await browser.newContext({
      viewport: { width: 1200, height: 800 },
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0 Safari/537.36',
    });
    const page = await context.newPage();
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 70000 });
      await page.waitForLoadState('networkidle', { timeout: 25000 }).catch(() => {});
      await page.waitForTimeout(500);
      await page.screenshot({ path: outPath, fullPage: false });
      await context.close();
      return true;
    } catch (err) {
      lastErr = err;
      await context.close().catch(() => {});
      if (attempt < retries) {
        const backoff = 500 * Math.pow(2, attempt);
        await new Promise(r => setTimeout(r, backoff));
      }
    }
    attempt++;
  }
  if (lastErr) throw lastErr;
  return false;
}

(async () => {
  await ensureDir(OUT_DIR);
  const items = loadShowcaseItems();
  if (items.length === 0) {
    console.error('No showcase items found in YAML.');
    process.exit(1);
  }

  const { flags } = module.exports;
  const browser = await chromium.launch();

  const results = [];
  for (const { slug, url } of items) {
    const outPath = path.join(OUT_DIR, `${slug}.png`);
    if (flags.onlyMissing && fs.existsSync(outPath)) {
      results.push({ slug, ok: true, skipped: true });
      continue;
    }
    try {
      await screenshotWithRetries(browser, url, outPath, { retries: flags.retries });
      console.log(`✔ Saved ${outPath}`);
      results.push({ slug, ok: true });
    } catch (err) {
      console.error(`✖ Failed ${slug} (${url}): ${err.message}`);
      results.push({ slug, ok: false, error: err.message });
    }
  }

  await browser.close();
  const ok = results.filter(r => r.ok).length;
  console.log(`Done. ${ok}/${results.length} screenshots saved to ${OUT_DIR}`);
})();

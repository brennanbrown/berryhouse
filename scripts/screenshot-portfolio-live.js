#!/usr/bin/env node
/*
  Screenshot live demo URLs for each portfolio item.
  - Reads front matter from src/portfolio/*.md
  - Uses links.demo as the target URL
  - Saves screenshots to src/assets/screenshots/<slug>-live.png

  Usage:
    node scripts/screenshot-portfolio-live.js
*/

const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const PORTFOLIO_DIR = path.join(__dirname, '..', 'src', 'portfolio');
const OUT_DIR = path.join(__dirname, '..', 'src', 'assets', 'screenshots');

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

function slugFromFile(filePath) {
  return path.basename(filePath, path.extname(filePath));
}

async function loadPortfolioDemos() {
  const entries = await fs.promises.readdir(PORTFOLIO_DIR);
  const mdFiles = entries.filter(f => f.endsWith('.md'));
  const items = [];
  for (const f of mdFiles) {
    const full = path.join(PORTFOLIO_DIR, f);
    const raw = await fs.promises.readFile(full, 'utf8');
    const fm = matter(raw);
    const slug = slugFromFile(f);
    const demo = fm.data?.links?.demo || null;
    if (demo) {
      items.push({ slug, demo });
    } else {
      console.warn(`Skipping ${f}: no links.demo in front matter`);
    }
  }
  return items;
}

(async () => {
  await ensureDir(OUT_DIR);
  const items = await loadPortfolioDemos();
  // Optional: filter by slug passed as first positional arg or --slug=<value>
  const arg = process.argv[2] || '';
  let slugArg = arg;
  if (!slugArg) {
    const slugFlag = (process.argv.find(a => a.startsWith('--slug=')) || '').split('=')[1];
    slugArg = slugFlag || '';
  }
  const filtered = slugArg ? items.filter(i => i.slug === slugArg) : items;
  if (slugArg && filtered.length === 0) {
    console.error(`No portfolio item found with slug: ${slugArg}`);
    process.exit(1);
  }

  if (items.length === 0) {
    console.error('No portfolio demo URLs found.');
    process.exit(1);
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1000, height: 1000 } });
  const page = await context.newPage();

  const results = [];
  for (const { slug, demo } of filtered) {
    const outPath = path.join(OUT_DIR, `${slug}-live.png`);
    try {
      await page.goto(demo, { waitUntil: 'domcontentloaded', timeout: 45000 });
      // Try to settle the page a bit
      await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
      await page.screenshot({ path: outPath, fullPage: false });
      console.log(`✔ Saved ${outPath}`);
      results.push({ slug, ok: true });
    } catch (err) {
      console.error(`✖ Failed ${slug} (${demo}): ${err.message}`);
      results.push({ slug, ok: false, error: err.message });
    }
  }

  await browser.close();
  const ok = results.filter(r => r.ok).length;
  console.log(`Done. ${ok}/${results.length} live screenshots saved to ${OUT_DIR}`);
})();

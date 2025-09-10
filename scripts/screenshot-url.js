#!/usr/bin/env node
/**
 * Capture a screenshot of any URL using Playwright Chromium.
 * Usage:
 *   node scripts/screenshot-url.js --url https://example.com --out screenshot.png --width 1280 --height 800
 * Defaults:
 *   url: required
 *   out: ./screenshot.png (repo root)
 *   width: 1280, height: 800
 */

const { chromium } = require('@playwright/test');
const path = require('path');

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const [key, val] = argv[i].split('=');
    if (key === '--url') args.url = val || argv[++i];
    else if (key === '--out') args.out = val || argv[++i];
    else if (key === '--width') args.width = parseInt(val || argv[++i], 10);
    else if (key === '--height') args.height = parseInt(val || argv[++i], 10);
  }
  return args;
}

(async () => {
  const { url, out, width = 1280, height = 800 } = parseArgs(process.argv);
  if (!url) {
    console.error('Error: --url is required');
    process.exit(1);
  }
  const outPath = path.resolve(process.cwd(), out || 'screenshot.png');

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width, height } });
  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    // Try to settle the page/network additionally
    await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});

    await page.screenshot({ path: outPath, fullPage: false });
    console.log(`✔ Saved screenshot: ${outPath}`);
  } catch (err) {
    console.error(`✖ Failed to capture ${url}: ${err.message}`);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();

#!/usr/bin/env node
/*
  Generates all icon formats from the source logo.
  Requires: sharp (install with: npm i -D sharp)
*/
const fs = require('fs');
const path = require('path');

async function ensureDir(p) {
  await fs.promises.mkdir(p, { recursive: true });
}

async function main() {
  const sharp = require('sharp');
  const root = process.cwd();
  const srcLogo = path.join(root, 'new-logo.png');
  const outDir = path.join(root, 'src', 'assets');

  try {
    await fs.promises.access(srcLogo, fs.constants.R_OK);
  } catch (e) {
    console.error('[icons] Source logo not found:', srcLogo);
    console.error('[icons] Please ensure new-logo.png exists in the project root.');
    process.exit(1);
  }

  await ensureDir(outDir);
  const logoBuffer = await fs.promises.readFile(srcLogo);

  // All the icon sizes we need
  const tasks = [
    // Favicons
    { file: 'favicon-16x16.png', size: 16 },
    { file: 'favicon-32x32.png', size: 32 },
    { file: 'favicon-48x48.png', size: 48 },
    { file: 'favicon.ico', size: 32, format: 'ico' },
    
    // Apple touch icons
    { file: 'apple-touch-icon.png', size: 180 },
    { file: 'apple-touch-icon-precomposed.png', size: 180 },
    
    // Android/PWA
    { file: 'icon-192x192.png', size: 192 },
    { file: 'icon-512x512.png', size: 512 },
    
    // Open Graph / Social sharing
    { file: 'og-default.png', size: 1200, width: 1200, height: 630 },
    
    // README / Footer logo
    { file: 'logo-footer.png', size: 64 },
    { file: 'logo-readme.png', size: 200 },
  ];

  for (const t of tasks) {
    const outPath = path.join(outDir, t.file);
    let pipeline = sharp(logoBuffer, { density: 300 });
    
    if (t.width && t.height) {
      // For OG image with specific dimensions
      pipeline = pipeline.resize(t.width, t.height, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      });
    } else {
      // Square images
      pipeline = pipeline.resize(t.size, t.size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      });
    }
    
    if (t.format === 'ico') {
      // For ICO format, we need to use a workaround
      await pipeline
        .png({ compressionLevel: 9 })
        .toFile(outPath.replace('.ico', '-temp.png'));
      
      // Rename temp file to .ico (browsers accept PNG data in .ico files)
      await fs.promises.rename(
        outPath.replace('.ico', '-temp.png'),
        outPath
      );
    } else {
      await pipeline
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toFile(outPath);
    }
    
    console.log('[icons] ✓ Generated:', path.relative(root, outPath));
  }
  
  console.log('\n[icons] ✅ All icons generated successfully!');
}

main().catch((err) => {
  console.error('[icons] ❌ Error:', err.message);
  process.exit(1);
});

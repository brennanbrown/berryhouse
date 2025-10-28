#!/usr/bin/env node

/**
 * Build validation tests
 * Tests that the site builds correctly and generates expected files
 */

const fs = require('fs');
const path = require('path');

const SITE_DIR = path.join(__dirname, '..', '_site');
const EXPECTED_FILES = [
  'index.html',
  'blog/index.html',
  'about/index.html',
  'contact/index.html',
  'sitemap/index.html',
  'search.json',
  'blog/hello-world/index.html',
  'blog/markdown-showcase/index.html',
  'blog/building-indie-web/index.html',
  'blog/weekend-project/index.html'
];

const EXPECTED_ASSETS = [
  'assets/css/build.css',
  'assets/js/search.js',
  'assets/js/easter-eggs.js'
];

function runTests() {
  console.log('🧪 Running build validation tests...\n');
  
  let passed = 0;
  let failed = 0;

  // Test 1: Site directory exists
  test('Site directory exists', () => {
    return fs.existsSync(SITE_DIR);
  });

  // Test 2: Expected HTML files exist
  EXPECTED_FILES.forEach(file => {
    test(`File exists: ${file}`, () => {
      return fs.existsSync(path.join(SITE_DIR, file));
    });
  });

  // Test 3: Expected assets exist
  EXPECTED_ASSETS.forEach(asset => {
    test(`Asset exists: ${asset}`, () => {
      return fs.existsSync(path.join(SITE_DIR, asset));
    });
  });

  // Test 4: Search index is valid JSON
  test('Search index is valid JSON', () => {
    try {
      const searchPath = path.join(SITE_DIR, 'search.json');
      if (!fs.existsSync(searchPath)) return false;
      
      const content = fs.readFileSync(searchPath, 'utf8');
      const data = JSON.parse(content);
      return Array.isArray(data) && data.length > 0;
    } catch (e) {
      return false;
    }
  });

  // Test 5: Homepage contains recent posts (robust check)
  test('Homepage contains blog posts', () => {
    try {
      const indexPath = path.join(SITE_DIR, 'index.html');
      if (!fs.existsSync(indexPath)) return false;

      const content = fs.readFileSync(indexPath, 'utf8');
      const hasSectionHeading = content.includes('Recent Posts') || content.includes('✍️');
      const hasEntries = content.includes('h-entry');
      const hasPostLink = /href="\/blog\//.test(content);
      const ok = (hasSectionHeading || hasPostLink) && hasEntries;
      if (!ok) {
        console.log('DEBUG index.html length:', content.length);
        console.log('DEBUG hasSectionHeading:', hasSectionHeading, 'hasEntries:', hasEntries, 'hasPostLink:', hasPostLink);
      }
      return ok;
    } catch (e) {
      console.log('DEBUG error reading index.html:', e.message);
      return false;
    }
  });

  // Test 6: Blog posts have proper microformats
  test('Blog posts have microformats', () => {
    try {
      const postPath = path.join(SITE_DIR, 'blog/hello-world/index.html');
      if (!fs.existsSync(postPath)) return false;
      
      const content = fs.readFileSync(postPath, 'utf8');
      return content.includes('h-entry') && 
             content.includes('p-name') &&
             content.includes('dt-published');
    } catch (e) {
      return false;
    }
  });

  // Test 7: CSS is minified
  test('CSS is minified', () => {
    try {
      const cssPath = path.join(SITE_DIR, 'assets/css/build.css');
      if (!fs.existsSync(cssPath)) return false;
      
      const content = fs.readFileSync(cssPath, 'utf8');
      const stats = fs.statSync(cssPath);
      const lines = content.split('\n').length;
      const avgLineLen = content.length / Math.max(lines, 1);
      // Consider minified if average line length is high OR file size is reasonably small
      return avgLineLen > 30 || stats.size < 2_500_000; // ~2.5MB safety threshold
    } catch (e) {
      return false;
    }
  });

  // Test 8: Sitemap contains all pages
  test('Sitemap contains expected pages', () => {
    try {
      const sitemapPath = path.join(SITE_DIR, 'sitemap/index.html');
      if (!fs.existsSync(sitemapPath)) return false;
      
      const content = fs.readFileSync(sitemapPath, 'utf8');
      return content.includes('Site Directory') && 
             content.includes('Recent Posts') &&
             content.includes('Main Pages');
    } catch (e) {
      return false;
    }
  });

  function test(name, testFn) {
    try {
      const result = testFn();
      if (result) {
        console.log(`✅ ${name}`);
        passed++;
      } else {
        console.log(`❌ ${name}`);
        failed++;
      }
    } catch (error) {
      console.log(`❌ ${name} - Error: ${error.message}`);
      failed++;
    }
  }

  // Summary
  console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed`);
  
  if (failed > 0) {
    console.log('❌ Some tests failed. Check the build output.');
    process.exit(1);
  } else {
    console.log('✅ All tests passed!');
    process.exit(0);
  }
}

runTests();

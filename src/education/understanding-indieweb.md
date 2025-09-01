---
layout: layouts/base.njk
title: Understanding the IndieWeb
description: Principles of the IndieWeb—own your content and identity—and how to participate.
permalink: /education/understanding-indieweb/
---

<section class="prose dark:prose-invert">
  <h1>Understanding the IndieWeb</h1>
  <p>The <strong>IndieWeb</strong> is a movement for a more independent, human-centric web. It encourages you to own your content, identity, and data—rather than relying solely on centralized platforms.</p>

  <h2>Core Principles</h2>
  <ul>
    <li><strong>Own your content</strong>: Publish on your site first, then syndicate elsewhere.</li>
    <li><strong>Own your identity</strong>: Your domain is your identity.</li>
    <li><strong>Make what you need</strong>: Build small tools and workflows that work for you.</li>
  </ul>

  <h2>Building blocks</h2>
  <ul>
    <li><strong>microformats2</strong>: Semantic HTML classes (like <code>h-entry</code>, <code>h-card</code>) so other tools can parse your posts and profile. See <a href="https://microformats.org/wiki/microformats2">docs</a>.</li>
    <li><strong>Webmention</strong>: A W3C recommendation for cross-site replies/likes. See <a href="https://www.w3.org/TR/webmention/">spec</a> and <a href="https://webmention.io/">webmention.io</a>.</li>
    <li><strong>IndieAuth</strong>: Sign-in using your domain. See <a href="https://indieauth.net/">indieauth.net</a>.</li>
    <li><strong>Feeds</strong>: Provide RSS/Atom/JSON Feed so people and services can follow you.</li>
    <li><strong>POSSE</strong>: Publish on your site, syndicate elsewhere (e.g., Mastodon/Twitter) and backfeed reactions.</li>
  </ul>

  <h2>Getting started (Eleventy)</h2>
  <ol>
    <li>Create your site with <a href="https://www.11ty.dev/">Eleventy</a>. Ensure posts use <code>h-entry</code> markup and your about/contact uses <code>h-card</code>.</li>
    <li>Add a feed (RSS/Atom/JSON). Eleventy has official <a href="https://www.11ty.dev/docs/plugins/rss/">RSS plugin</a>.</li>
    <li>Enable webmentions using <a href="https://webmention.io/">webmention.io</a> and render them during build (fetch JSON in a data file and display under posts).</li>
    <li>Optionally set up <a href="https://brid.gy/">Bridgy</a> for POSSE/backfeed and add <code>rel="me"</code> links to verified profiles.</li>
  </ol>

  <h2>Syndication tips</h2>
  <ul>
    <li>Keep canonical URLs pointing to your site.</li>
    <li>Post short notes/microblog entries to reduce friction.</li>
    <li>Prefer open platforms (Mastodon) and standards (ActivityPub, Webmention).</li>
  </ul>

  <h2>Resources</h2>
  <ul>
    <li><a href="https://indieweb.org/">IndieWeb Wiki</a></li>
    <li><a href="https://indiewebify.me/">indiewebify.me</a></li>
    <li><a href="https://webmention.io/">webmention.io</a></li>
    <li><a href="https://indieauth.net/">IndieAuth</a></li>
  </ul>
</section>

---
layout: layouts/base.njk
title: Exploring Digital Gardens
description: What digital gardens are, how they differ from blogs, and how to start your own.
permalink: /education/exploring-digital-gardens/
---

<section class="prose dark:prose-invert">
  <h1>Exploring Digital Gardens</h1>
  <p>A <strong>digital garden</strong> is a public knowledge base—notes that evolve over time. It’s less like a linear blog and more like a curated wiki of your ongoing learning.</p>

  <h2>Principles</h2>
  <ul>
    <li><strong>Evergreen</strong>: Notes are living documents updated over time.</li>
    <li><strong>Interlinked</strong>: Backlinks and related content foster discovery.</li>
    <li><strong>Low friction</strong>: Publish small, frequent updates.</li>
    <li><strong>Trust drafts</strong>: Share in-progress thinking; label note maturity.</li>
  </ul>

  <h2>Note types</h2>
  <ul>
    <li><strong>Seeds</strong>: brief ideas, quotes, highlights.</li>
    <li><strong>Saplings</strong>: a few paragraphs connecting sources and ideas.</li>
    <li><strong>Evergreens</strong>: refined, well-linked summaries or guides.</li>
  </ul>

  <h2>Workflow</h2>
  <ol>
    <li>Capture in a notes app (<a href="https://obsidian.md/">Obsidian</a>, <a href="https://bear.app/">Bear</a>).</li>
    <li>Refactor and link related notes; add tags and titles.</li>
    <li>Publish to your site as Markdown; keep permalinks stable.</li>
    <li>Revisit and upgrade note maturity over time.</li>
  </ol>

  <h2>Tooling</h2>
  <ul>
    <li><strong>Static site</strong>: <a href="https://www.11ty.dev/">Eleventy</a> or <a href="https://gohugo.io/">Hugo</a>.</li>
    <li><strong>Styling</strong>: <a href="https://tailwindcss.com/">Tailwind CSS</a>.</li>
    <li><strong>Graph/backlinks</strong> (optional): Obsidian’s graph view; or generate related posts via tags/links.</li>
  </ul>

  <h2>Publishing</h2>
  <ol>
    <li>Create a <code>/garden/</code> or <code>/notes/</code> section in your site.</li>
    <li>Use front matter for title, tags, and updated date.</li>
    <li>Host on <a href="https://www.netlify.com/">Netlify</a> or <a href="https://vercel.com/">Vercel</a> for easy CI/CD.</li>
  </ol>

  <h2>Resources</h2>
  <ul>
    <li><a href="https://maggieappleton.com/garden-history">A Brief History & Ethos of the Digital Garden</a></li>
    <li><a href="https://obsidian.md/">Obsidian</a> • <a href="https://bear.app/">Bear</a></li>
    <li><a href="https://www.11ty.dev/">Eleventy</a> • <a href="https://gohugo.io/">Hugo</a> • <a href="https://tailwindcss.com/">Tailwind CSS</a></li>
  </ul>
</section>

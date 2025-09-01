---
layout: layouts/base.njk
title: What is JAMstack?
description: A clear introduction to the JAMstack architecture—JavaScript, APIs, and Markup—and why it matters.
permalink: /education/what-is-jamstack/
---

<section class="prose dark:prose-invert">
  <h1>What is JAMstack?</h1>
  <p><strong>JAMstack</strong> stands for <em>JavaScript, APIs, and Markup</em>. It’s a modern web architecture focused on performance, security, and scalability.</p>

  <h2>Core Ideas</h2>
  <ul>
    <li><strong>Pre-rendered Markup</strong>: Pages are generated at build time for speed and reliability.</li>
    <li><strong>APIs</strong>: Server-side functionality is consumed via APIs (serverless or traditional).</li>
    <li><strong>JavaScript</strong>: Enhances interactivity on the client when needed.</li>
  </ul>

  <h2>Benefits</h2>
  <ul>
    <li>Faster load times and better Lighthouse scores</li>
    <li>Improved security surface (no always-on server)</li>
    <li>Lower hosting costs, simpler scaling</li>
    <li>Versioned, reproducible builds via CI</li>
  </ul>

  <h2>Architecture (at a glance)</h2>
  <p><em>Authoring</em> → Markdown/Nunjucks → <strong>Static Site Generator</strong> (e.g., <a href="https://www.11ty.dev/">Eleventy</a>, <a href="https://gohugo.io/">Hugo</a>) → Build pipeline (CI) → <strong>CDN</strong> (e.g., <a href="https://www.netlify.com/">Netlify</a>, <a href="https://vercel.com/">Vercel</a>) → Optional <strong>APIs</strong> (serverless functions, external services).</p>

  <h2>When to use JAMstack</h2>
  <ul>
    <li>Content-focused sites: blogs, docs, marketing, portfolios.</li>
    <li>Sites where reliability, speed, and security matter.</li>
    <li>Teams who prefer Git-based workflows and CI.</li>
  </ul>

  <h2>Common tooling</h2>
  <ul>
    <li><strong>Generators:</strong> <a href="https://www.11ty.dev/">Eleventy</a>, <a href="https://gohugo.io/">Hugo</a></li>
    <li><strong>Styling:</strong> <a href="https://tailwindcss.com/">Tailwind CSS</a></li>
    <li><strong>Hosting/CDN:</strong> <a href="https://www.netlify.com/">Netlify</a>, <a href="https://vercel.com/">Vercel</a></li>
    <li><strong>CMS (optional):</strong> <a href="https://www.netlifycms.org/">Netlify CMS</a>, <a href="https://decapcms.org/">Decap</a>, <a href="https://www.sanity.io/">Sanity</a></li>
  </ul>

  <h2>Deploying</h2>
  <ol>
    <li>Push your repo to <a href="https://github.com/">GitHub</a>.</li>
    <li>Connect to <a href="https://www.netlify.com/">Netlify</a> or <a href="https://vercel.com/">Vercel</a>.</li>
    <li>Set a build command (e.g., <code>npm run build</code>) and publish directory (e.g., <code>_site/</code> for Eleventy).</li>
  </ol>

  <h2>Further reading</h2>
  <ul>
    <li><a href="https://jamstack.org/">jamstack.org</a></li>
    <li><a href="https://www.11ty.dev/docs/">Eleventy docs</a></li>
    <li><a href="https://gohugo.io/documentation/">Hugo docs</a></li>
    <li><a href="https://www.netlify.com/blog/">Netlify blog</a></li>
  </ul>
</section>

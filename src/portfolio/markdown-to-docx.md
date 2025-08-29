---
layout: layouts/base.njk
title: Markdown to DOCX
description: A web app to convert Markdown files to DOCX while preserving structure.
permalink: /portfolio/markdown-to-docx/
tags: [portfolio]
technologies: [Python, JavaScript, Pandoc]
links:
  repo: https://github.com/brennanbrown/markdown-to-docx
  demo: https://md-to-doc.netlify.app
---

<section class="prose dark:prose-invert">
  <h1>{{ title }}</h1>
  <p>{{ description }}</p>
  <p><strong>Tech:</strong> {{ technologies | join(', ') }}</p>
  <p>
    <a href="{{ links.demo }}" target="_blank" rel="noopener">Live app</a> ·
    <a href="{{ links.repo }}" target="_blank" rel="noopener">Source</a>
  </p>
</section>

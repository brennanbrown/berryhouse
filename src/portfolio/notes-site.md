---
layout: layouts/base.njk
title: Notes (Public Knowledge Base)
description: A public domain repository of notes on software development topics, published as a static site.
permalink: /portfolio/notes-site/
tags: [portfolio]
technologies: [Jekyll, SCSS, Markdown]
links:
  repo: https://github.com/brennanbrown/notes
  demo: https://brennanbrown.github.io/notes
---

<section class="prose dark:prose-invert">
  <h1>{{ title }}</h1>
  <p>{{ description }}</p>
  <p><strong>Tech:</strong> {{ technologies | join(', ') }}</p>
  <p>
    <a href="{{ links.demo }}" target="_blank" rel="noopener">Live site</a> ·
    <a href="{{ links.repo }}" target="_blank" rel="noopener">Source</a>
  </p>
</section>

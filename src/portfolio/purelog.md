---
layout: layouts/base.njk
title: Purelog (Jekyll Theme)
description: A responsive sidebar Jekyll theme built on Pure.css for writers and bloggers.
permalink: /portfolio/purelog/
tags: [portfolio]
technologies: [Jekyll, Pure.css, Ruby]
links:
  repo: https://github.com/brennanbrown/purelog
  demo: https://purelog.netlify.app
---

<section class="prose dark:prose-invert">
  <h1>{{ title }}</h1>
  <p>{{ description }}</p>
  <p><strong>Tech:</strong> {{ technologies | join(', ') }}</p>
  <p>
    <a href="{{ links.demo }}" target="_blank" rel="noopener">Live demo</a> ·
    <a href="{{ links.repo }}" target="_blank" rel="noopener">Source</a>
  </p>
</section>

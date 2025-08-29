---
layout: layouts/base.njk
title: enjoyment-work (Jekyll Theme)
description: An academic, Roam-like Digital Garden Jekyll theme with Obsidian-friendly workflows.
permalink: /portfolio/enjoyment-work/
tags: [portfolio]
technologies: [Jekyll, SCSS, Bootstrap 4, Ruby, Obsidian]
links:
  repo: https://github.com/brennanbrown/enjoyment-work
  demo: https://enjoyment-work.netlify.app
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

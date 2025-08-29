---
layout: layouts/base.njk
title: Campfire (Hugo Theme)
description: A story-focused Hugo theme with readable typography and dark/light themes.
permalink: /portfolio/campfire-hugo-theme/
tags: [portfolio]
technologies: [Hugo, HTML, CSS]
links:
  repo: https://github.com/brennanbrown/Campfire-Hugo-Theme
  demo: https://campfire-hugo.netlify.app
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

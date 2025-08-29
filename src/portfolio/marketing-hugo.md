---
layout: layouts/base.njk
title: Marketing Portfolio (Hugo)
description: A Hugo-based marketing portfolio with case studies, hosted on Netlify.
permalink: /portfolio/marketing-hugo/
tags: [portfolio]
technologies: [Hugo, SCSS, Netlify, Forestry]
links:
  repo: https://github.com/brennanbrown/marketing
  demo: https://brennanbrown.ca
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

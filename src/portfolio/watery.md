---
layout: layouts/base.njk
title: Watery (Jekyll Theme)
description: A minimalist starter Jekyll theme using Water.css focused on speed and simplicity.
permalink: /portfolio/watery/
tags: [portfolio]
technologies: [Jekyll, Water.css, Ruby]
links:
  repo: https://github.com/brennanbrown/watery
  demo: https://watery.netlify.app/
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

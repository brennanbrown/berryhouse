---
layout: layouts/base.njk
title: WriteClub (MU Creative Writing)
description: Club website for MRU’s Creative Writing Club with resources and events.
permalink: /portfolio/writeclub/
tags: [portfolio]
technologies: [Jekyll, SCSS, Ruby]
links:
  repo: https://github.com/brennanbrown/WriteClub
  demo: https://writeclub.ca
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

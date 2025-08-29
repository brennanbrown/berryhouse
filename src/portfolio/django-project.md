---
layout: layouts/base.njk
title: Full‑stack Django Project
description: A Django app with PostgreSQL, GraphQL API, and Selenium tests.
permalink: /portfolio/django-project/
tags: [portfolio]
technologies: [Django, PostgreSQL, GraphQL, Selenium, Bootstrap]
links:
  repo: https://github.com/brennanbrown/django-project
  demo: https://github.com/brennanbrown/django-project
---

<section class="prose dark:prose-invert">
  <h1>{{ title }}</h1>
  <p>{{ description }}</p>
  <p><strong>Tech:</strong> {{ technologies | join(', ') }}</p>
  <p>
    <a href="{{ links.demo }}" target="_blank" rel="noopener">Project page</a> ·
    <a href="{{ links.repo }}" target="_blank" rel="noopener">Source</a>
  </p>
</section>

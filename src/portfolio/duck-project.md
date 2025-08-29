---
layout: layouts/base.njk
title: Duck Project (Node/Express)
description: A full-stack Node.js project covering front-end, back-end, and deployment.
permalink: /portfolio/duck-project/
tags: [portfolio]
technologies: [Node.js, Express, Bootstrap, JavaScript]
links:
  repo: https://github.com/brennanbrown/duck-project
  demo: https://duck-project.herokuapp.com
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

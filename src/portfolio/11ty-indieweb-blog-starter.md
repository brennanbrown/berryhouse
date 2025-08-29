---
layout: layouts/base.njk
title: 11ty Indie Web Blog Starter
description: A modern, feature-complete blog template built with Eleventy and Tailwind CSS, ready for IndieWeb.
permalink: /portfolio/11ty-indieweb-blog-starter/
tags: [portfolio]
technologies: [Eleventy, Tailwind CSS, Nunjucks, JavaScript]
links:
  repo: https://github.com/brennanbrown/11ty-Indie-Web-Blog-Starter
  demo: https://indieweb-blog-starter.netlify.app/
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

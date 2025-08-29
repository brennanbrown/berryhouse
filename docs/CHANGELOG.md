# Changelog — Strawberry Collective

All notable changes to this project will be documented in this file.

## [Unreleased]
- Project scaffolding and alignment work in progress per `_IMPORTANT/spec_sheet.md`.

## 2025-08-27
- Implemented data-driven navigation via `src/_data/navigation.json` and updated `base.njk` to render from data.
- Added new pages: `src/services.njk`, `src/education.njk`, `src/showcase.njk`.
- Added Education primers: `what-is-jamstack.md`, `understanding-indieweb.md`, `exploring-digital-gardens.md` under `src/education/`.
- Kept Notes and Journal sections; excluded Poetry from top navigation as per scope.
- Disabled Poetry section generation (`src/_data/site.json`, `src/poetry.json`, `src/poetry.njk`).
- Converted Portfolio to a collection and seeded entries from `_IMPORTANT/my_projects.md`:
  - enjoyment-work, purelog, watery (Jekyll themes)
  - Marketing portfolio (Hugo), Campfire (Hugo theme)
  - 11ty Indie Web Blog Starter
  - markdown-to-docx (web app), django-project, duck-project
  - notes site
- Mapped content to site pages:
  - `src/about.njk`: mission, vision, values, and bio content from `_IMPORTANT/about_me.md` and `_IMPORTANT/business_plan.md`.
  - `src/services.njk`: detailed service lists and dual‑audience pricing from `_IMPORTANT/business_plan.md`.
- Added testimonials system:
  - Data file `src/_data/testimonials.json` derived from `_IMPORTANT/testimonials.md`.
  - Reusable partial `src/_includes/partials/testimonials.njk` included on About and Services pages.

## 2025-08-26
- Added `_IMPORTANT/TODO.md` as the living implementation plan.
- Added `_IMPORTANT/CHANGELOG.md` and initialized sections.
- Reviewed key context docs: `spec_sheet.md`, `file_directory.md`, `business_plan.md`, `market_analysis.md`, `about_me.md`, `my_projects.md`.
- Planned next steps to propagate spec into Eleventy structure under `src/`.

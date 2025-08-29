# Changelog — Strawberry Collective

All notable changes to this project will be documented in this file.

## [Unreleased]
- Project scaffolding and alignment work in progress per `_IMPORTANT/spec_sheet.md`.

## 2025-08-28
- Homepage expansion (`src/index.njk`):
  - Added sections: What we do, Why Strawberry Collective, Our process, CTA band.
  - Widened hero text area; improved CTAs and quick links.
- Layout width improvements (`src/_includes/layouts/base.njk`):
  - Increased desktop max-widths for header, nav, main, and footer; removed `container` caps.
- Branding sweep to red:
  - Updated remaining purple accents to red in `src/assets/css/tailwind.css`, `src/search-results.njk`, `src/style.njk`, `src/categories.njk`, `src/sitemap.njk`, and partials.
- Page copy and CTAs refreshed:
  - `src/services.njk`, `src/about.njk`, `src/education.njk`, `src/showcase.njk`, `src/portfolio.njk`.
- Data & partials:
  - Added `src/_data/navigation.json` and wired navigation.
  - Added `src/_data/testimonials.json` and `src/_includes/partials/testimonials.njk`.
- Build/config:
  - Fixed Eleventy build by adding `head` Nunjucks filter in `.eleventy.js`.
- Assets & scripts:
  - Added default OG image and supporting assets; minor `scripts/fetch-assets.js` refinements.
- Docs & CI:
  - Moved TODO and CHANGELOG to `docs/`.
  - Added `docs/spec-sheet-for-theme.md`; removed outdated `docs/spec-sheet.md`.
  - Removed outdated GitHub Actions workflows.
  - Expanded `.gitignore`.

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

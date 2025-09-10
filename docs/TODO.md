# Berry House — Project TODO

This is a living task list to implement the spec in `_IMPORTANT/spec_sheet.md` across the 11ty codebase.

## Conventions
- Status: [ ] pending · [~] in progress · [x] done
- Keep entries concise. Link files like `src/...` or docs in `_IMPORTANT/`.

## 1) Information Architecture & Routing
- [x] Confirm top-level pages and routes: Home, About, Services, Portfolio, Education, Blog, Garden, Contact, Showcase (`src/`)  
  ↳ Stubs/pages added and wired: `services`, `education`, `showcase`; others already present
- [~] Define collections: Blog [x] done; Garden [ ] pending (`.eleventy.js` / `src/_data/`)
- [x] Add navigation data: `src/_data/navigation.*` (`navigation.json` + layout wired)

## 2) Content Drafting (from spec + business docs)
- [x] Home: headline, value prop, CTAs, recent posts (`src/index.njk`)
- [x] About: bio + mission/vision/values from `business_plan.md` and `about_me.md`
- [x] Services: dev + writing; dual-audience model details from `business_plan.md`
- [x] Portfolio: case-study template; seeded with items from `my_projects.md`
- [x] Education: JAMstack / IndieWeb / Digital Garden primers (hub page + primers)
- [ ] Blog: initial 2–3 posts (from existing `src/blog/` or drafts)
- [ ] Garden: initial 3 notes and backlinks
- [ ] Contact: forms + booking links
- [x] Showcase: curated sites; submission blurb (align with `showcase_recommendations.md`)

## 3) Components & Layout
- [x] Validate base layout and partials exist: `src/_includes/layouts/`, `partials/` (nav now data-driven)
- [ ] Build reusable components: card, button, post list, tag list
- [ ] Sidebar (mobile-first, hamburger reveal)

## 4) Styling & Branding
- [~] Tailwind theme: brand color updated to red; typography refinements pending
- [~] Add gradient utilities and examples (CTA band added; more examples pending)
- [ ] Emoji logo usage (🍓) and favicon pipeline (`scripts/generate-icons.js`)

## 5) Integrations
- [ ] Calendly embed/links (Services, Contact)
- [ ] Newsletter provider (Substack or Ghost) — subscribe component
- [ ] Discord, Patreon links in footer/header
- [ ] Analytics (Netlify Analytics or GA)

## 6) Performance, SEO, Accessibility
- [ ] Images: responsive + lazyload + WebP
- [x] Meta, sitemap, structured data; confirm feeds
- [ ] Pass existing Playwright a11y tests; add headings/nav landmark checks

## 7) CMS (Optional)
- [ ] Decide on Netlify CMS/other; if yes, add `src/admin/` and `config.yml`

## 8) Content Migration/Import
- [ ] Map `about_me.md` into About page sections
- [ ] Convert `my_projects.md` entries into portfolio items
- [ ] Cross-link Business Plan/Market Analysis snippets where relevant

## 9) Deployment
- [ ] Confirm Netlify settings (`netlify.toml`) and build command
- [ ] DNS/Domain mapping plan (later)

## 10) Documentation
- [x] Update `README.md` with project-specific instructions
- [x] Maintain `docs/CHANGELOG.md` entries per change

---

### Active Work
- [~] Replace placeholder URLs (Calendly, Discord, Patreon) and conduct final visual/a11y pass

### Parking Lot
- [ ] Microformats/webmentions (IndieWeb blocks)
- [ ] Optional ad-space module (off by default)

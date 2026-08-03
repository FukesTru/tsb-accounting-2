# TSB Accounting Solutions — Website

Marketing website for **TSB Accounting Solutions, LLC** (Lowell, AR) — accounting,
bookkeeping, and fractional CFO/controller services for Northwest Arkansas and
virtual clients nationwide.

Built with **Next.js 15 (App Router) + Tailwind CSS 4**, with scroll-triggered
animations, full local-SEO schema markup, and a data-driven page
architecture modeled on the 12 Point Construction reference site.
(Reviews/testimonials UI is intentionally absent for now — see checklist item 1.)

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve production build
```

## Page inventory (21 pages)

| Section | Routes |
| --- | --- |
| Core | `/`, `/about`, `/contact`, `/privacy`, `/terms`, `/sitemap` |
| Accounting & Advisory | `/services/accounting-advisory` + `construction-accounting`, `tax-planning`, `financial-statements`, `business-advisory` |
| Fractional CFO & Controller | `/services/fractional-cfo-controller` + `fractional-cfo`, `fractional-controller` |
| Bookkeeping | `/services/bookkeeping` + `monthly-bookkeeping`, `cleanup-catch-up` |
| Service areas | `/areas/lowell-ar`, `/areas/northwest-arkansas`, `/areas/bentonville-ar`, `/areas/rogers-ar` |
| Technical | `/sitemap.xml`, `/robots.txt` (auto-generated) |

## Where content lives

All copy and business data is centralized — edit the data, and every page,
menu, footer, and schema block updates:

- `src/lib/site.ts` — NAP, hours, GBP/Facebook links, stat badge, trust chips
- `src/lib/services.ts` — all service categories, sub-services, copy, FAQs
- `src/lib/areas.ts` — service-area pages
- `src/lib/testimonials.ts` — **placeholder** review cards

## 🚀 Pre-launch checklist (marked in code with ⚠️/TODO/PLACEHOLDER)

1. **Testimonials** — the reviews section and rating badges are currently
   REMOVED (per client direction) until real Google reviews exist. When ready,
   restore from git history (`src/lib/testimonials.ts`, `src/components/Stars.tsx`,
   and the homepage testimonials section, removed in this commit) and fill with
   real GBP reviews — or wire a live widget (Elfsight/EmbedSocial).
2. **Contact form & chat** — DONE: the contact form is a LeadConnector (GHL)
   embed (`src/components/ContactForm.tsx`, form ID `Hkp1qNjcnBasg0990Le0`)
   and the LeadConnector chat widget loads site-wide from `src/app/layout.tsx`
   (widget ID `6a68f6fd702ca026d57bd00b`). Configure SMS notifications to
   Victoria's phone inside the LeadConnector account (client requirement:
   text, not email). The floating mobile Call Now button sits bottom-LEFT so
   it doesn't collide with the chat bubble bottom-right.
3. **GA4** — replace `G-XXXXXXXXXX` in `src/app/layout.tsx` with the real
   Measurement ID (or remove the tag).
4. **Photos** — site now uses Unsplash stock (hotlinked from the Unsplash
   CDN; free license, commercial use OK). Service-card URLs live in
   `src/lib/services.ts`; the story/About portrait is in `src/lib/images.ts`
   and should be swapped for Victoria's real headshot when ready. Original
   SVG placeholders remain in `public/images/` as offline fallbacks.
5. **Logo** — the client's TSB logo (serif TSB, gold S, gold rules) is
   recreated as SVG in `src/components/Logo.tsx` (+ standalone assets in
   `public/images/logo-tsb*.svg`). If the client can share the original
   vector/PNG source, swap it in for pixel-perfect fidelity.
6. **Business hours** — confirm (`hours` in `src/lib/site.ts`).
7. **About bio & credentials** — Victoria to review/personalize
   (`src/app/about/page.tsx`); confirm exact CPA license/state wording.
8. **Construction niche prominence** — client's strongest niche. It now has a
   dedicated page (`/services/accounting-advisory/construction-accounting`)
   linked from menus/cards; if she wants it promoted to its own top-level nav
   tab or featured on the homepage hero, that's a small follow-up.
9. **Legal pages** — attorney review of `/privacy` and `/terms`; set effective dates.
10. **Brand fonts/colors** — if the client later supplies brand assets, override
    the tokens in `src/app/globals.css` (`@theme`).

> **Never publish** the EIN or driver's-license materials from the intake form —
> they are intentionally excluded from this codebase.

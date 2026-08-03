# TSB Accounting Solutions — Website

Marketing website for **TSB Accounting Solutions, LLC** (Lowell, AR) — accounting,
bookkeeping, and fractional CFO/controller services for Northwest Arkansas and
virtual clients nationwide.

Built with **Next.js 15 (App Router) + Tailwind CSS 4**, with scroll-triggered
fade-up animations, full local-SEO schema markup, and a data-driven page
architecture modeled on the 12 Point Construction reference site.

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

1. **Testimonials** — replace placeholders in `src/lib/testimonials.ts` with real
   Google reviews from the GBP (or wire a live reviews widget).
2. **Contact form** — set `FORM_ENDPOINT` in `src/components/ContactForm.tsx`.
   ⚠️ Client wants submissions delivered **to her phone by SMS/text, not email**
   (emails get lost in spam) — pick a handler with SMS notifications
   (e.g. Formspree/Zapier → Twilio). Until then the form shows a demo success
   state and sends nothing.
3. **GA4** — replace `G-XXXXXXXXXX` in `src/app/layout.tsx` with the real
   Measurement ID (or remove the tag).
4. **Photos** — swap the SVG placeholders in `public/images/` for real photos
   (keep filenames): service cards ×3, plus `story-office.svg` when Victoria's
   About/profile photo is ready.
5. **Logo** — client marked "I need one designed"; swap the text lockup in
   `src/components/Logo.tsx` when the final logo exists.
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

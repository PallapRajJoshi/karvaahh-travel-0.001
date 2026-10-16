# Karvaahh — Live to Travel

Website for **Karvaahh Tours & Travels** (https://karvaahh.in): Nepal, India and international tour packages, pilgrimages, treks and activities. Built with Next.js (App Router), React 19, TypeScript and Tailwind CSS 4.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server at http://localhost:3000 |
| `npm run build` | Production build (also type-checks) |
| `npm start` | Serve the production build |
| `npm run typecheck` | TypeScript check only |
| `npm run lint` | ESLint |
| `npm run check:site` | List broken internal links and missing images/videos |

Run `typecheck`, `lint` and `build` before deploying.

## Configuration

Copy `.env.example` to `.env.local` and fill it in. The contact form **will not deliver enquiries in production** until either `CONTACT_WEBHOOK_URL` or the three `RESEND_*`/`CONTACT_*` e-mail variables are set.

## Project layout

```
app/                 Routes (one folder per URL), metadata, sitemap.ts, robots.ts,
                     not-found.tsx, error.tsx, opengraph-image.tsx, icon.png
components/          UI, grouped by page/section (layout/ = navbar, footer, menus)
data/, content/      Page content and package data (edit text here, not in components)
lib/                 Shared logic and config
  site-config.ts       Brand name, site URL, default SEO title/description
  navigation-data.ts   Main menu, contact numbers, social links
  route-redirects.ts   Temporary redirects for linked URLs that have no page yet
  useClientValue.ts    Hook for browser-only values (dates, media queries)
types/               Shared TypeScript types
public/images/       Photos and graphics, organised by page
scripts/             Maintenance scripts (check-site.mjs)
```

## Common tasks

- **Change the site title/description:** `lib/site-config.ts` → `SEO_DEFAULTS`. Individual pages set their own `metadata` in their `page.tsx`.
- **Add a page:** create `app/<path>/page.tsx` with a `metadata` export. It is added to the sitemap automatically. If the path is listed in `lib/route-redirects.ts`, **delete that entry**, because redirects run before pages and would hide the new page.
- **Edit the menu:** `lib/navigation-data.ts`.
- **Add photos:** place them at the exact path the page references, then run `npm run check:site` to see what is still missing.
- **Enquiry deep links:** `/contact?trip=<slug>` (or `?destination=` / `?package=` / `?journey=`) pre-fills the contact form.

## Notes

- This Next.js version differs from older releases. Check `node_modules/next/dist/docs/` before using an unfamiliar API (see `AGENTS.md`).
- Structured data (JSON-LD) uses only real business facts. Never add made-up ratings or reviews.

# Manang Circuit Trek — `/packages/manang-circuit-trek`

A 16-day trek package page for the Manang valley, including Tilicho Lake and Thorong La (5,416 m).
It is statically prerendered, has no new dependencies, and uses one tiny client component.
It was verified with `tsc --noEmit` and `next build` on Next.js 16.3 (Turbopack), and screenshot-checked at 1440 px and 390 px with no horizontal overflow.

## Folder tree

```
app/packages/manang-circuit-trek/
  page.tsx                      ← metadata, canonical, OG/Twitter, JSON-LD (TouristTrip + BreadcrumbList + FAQPage)

components/packages/manang-circuit-trek/
  ManangCircuitTrekPage.tsx     ← assembly (section order lives here)
  manang-circuit-trek.css       ← page tokens (--mc-*) + primitives, scoped under .mc-page
  SectionHeading.tsx
  icons.tsx                     ← inline SVGs
  data/
    types.ts
    itinerary.ts                ← 16 days; drives itinerary, altitude chart and JSON-LD
    content.ts                  ← facts, highlights, inclusions, seasons, permits, safety, FAQ, related
  sections/
    Hero.tsx               hero.css
    InPageNav.tsx          in-page-nav.css      (sticky anchor bar, CSS only)
    Overview.tsx           overview.css         (story + highlights + quick-facts grid)
    AltitudeProfile.tsx    altitude-profile.css (server-rendered SVG chart + table view)
    Itinerary.tsx          itinerary.css        (<details> accordion + sticky plan card)
    DayHashOpener.tsx                           ("use client": opens #day-N on deep links)
    RouteHighlights.tsx    route-highlights.css
    BestTime.tsx           best-time.css
    Inclusions.tsx         inclusions.css
    PermitsSafety.tsx      permits-safety.css
    Faq.tsx                faq.css
    RelatedTrips.tsx       related-trips.css
    FinalCta.tsx           final-cta.css
```

Copy both folders into the project root. `@/` must map to the project root, as it does in the live project.

## Page structure and conversion path

Hero → sticky in-page nav → Overview → **Altitude profile** → **Itinerary + sticky "Get a quote" card** → Route highlights → When to go → What's included → Permits & safety → FAQ → Related trips → Final CTA.

Every CTA points to `TRIP.enquiryHref` = `/contact?trip=manang-circuit-trek` (defined once in `data/content.ts`).

### Signature feature: the altitude profile
The chart is a single-series SVG line of sleeping altitude, plus dashed "high point" spikes for Tilicho Lake and Thorong La and a band marking the Manang rest day.
- **No JS.** Hover and focus tooltips are CSS. Each point is a real link to `#day-N`, so it works from the keyboard and for screen readers (each point has an `aria-label`).
- There is a "View altitudes as a table" disclosure with the same data.
- The chart scrolls horizontally inside its frame below 680 px, so labels stay legible on phones.
- All numbers are computed from `itinerary.ts`, so editing a day updates the chart, the stats and the JSON-LD together.

## Assumptions to check

| Item | Assumption |
|---|---|
| Route | `/packages/manang-circuit-trek`, mirroring `/packages/kailash-mansarovar-yatra`. If your nav links elsewhere (e.g. `/activities/adventure/trekking/...`), rename the folder to match the exact slug (remember the Sudurpaschim 404). |
| Enquiry target | `/contact?trip=manang-circuit-trek`. Confirm `/contact` exists and ideally reads `?trip=` to pre-fill the form. This matters given the audit's dead-CTA finding. |
| Navbar height | `--mc-nav-offset: 72px` in `manang-circuit-trek.css`. The sticky sub-nav and anchor offsets use it. Set it to your real navbar height. |
| Fonts | `var(--font-playfair)` / `var(--font-inter)` from root-layout `next/font`, with name fallbacks. Adjust if your variable names differ. |
| Layout | Navbar/Footer come from the layout. The page renders `<main>` only. |
| `metadataBase` | Canonical and OG URLs are relative, so `metadataBase: new URL("https://karvaahh.in")` must be set in the root layout. JSON-LD uses absolute `https://karvaahh.in`. |
| Breadcrumb | Home → `/packages` → trip. Confirm `/packages` has an index page. If not, point the crumb at `/`. |
| Related links (guessed) | `/packages/annapurna-base-camp-trek`, `/spiritual-journeys/muktinath-yatra`, `/destinations/gandaki-province`. Swap for real pages, or remove, before launch. |

## Content: verify with operations before publishing

**Permits (checked Sep 2026, against 2026 permit guides):**
- ACAP costs NPR 3,000 for foreigners and NPR 1,000 for SAARC nationals.
- Licensed guides have been mandatory since 1 Apr 2023.
- TIMS is no longer required on Annapurna routes.

A "Checked September 2026" badge renders from `TRIP.verifiedOn`. Update it whenever you re-verify.

**Karvaahh-specific claims I wrote as placeholders. Please confirm or edit these in `content.ts`:**
- Group size ("private from 1 · groups up to 12") and the porter ratio (1 per 2, 20 kg)
- The full inclusions and exclusions list
- Nightly oximeter checks and the first-aid-trained guide claim
- Jomsom flight included (with road fallback) and hotel nights
- "No payment needed to enquire"

**Price:** the page shows "Tailored quote" and no figure. If you want an indicative band (as on the experience directory pages), add it to the plan card in `Itinerary.tsx` with a verified date and "subject to confirmation".

**Altitudes** are rounded, commonly published figures and are labelled "approximate" on the page.

## Changes from your brief (flagged deliberately)
- **"Manang Circuit" vs "Annapurna Circuit."** Most people search for "Annapurna Circuit with Tilicho Lake". The name "Manang Circuit" is kept, but that phrase is included in the keywords, and an FAQ explains the relationship. Consider putting it in the H1 subtitle too.
- **Copy tightened.** Your paragraph was reworked into a lead, two story paragraphs and scannable highlights. I also corrected two details:
  - Besisahar is a town, not a valley.
  - The Manang valley people are the Nyeshangte (Manangi). "Gurung and Tibetan-influenced" was too loose.
- **Itinerary added.** The brief had none, so I added 16 days. It uses the high route via Ghyaru and Ngawal, a Manang rest day, Tilicho via Shree Kharka, then Yak Kharka → Phedi → Thorong La → Muktinath → Jomsom flight. The FAQ explains the three-day-shorter option without Tilicho.
- **No scroll-reveal animation.** This is a long, content-heavy decision page, so content renders immediately. `prefers-reduced-motion` is still respected for the hover transitions.

## Image manifest → `public/images/treks/manang-circuit/`

| File | Subject | Size / crop |
|---|---|---|
| `hero-thorong-la.jpg` | Trekkers on Thorong La with prayer flags, peaks behind | 1920×1080+, subject in the upper 60% (the bottom is under the gradient) |
| `chame.jpg` | Chame village, forest, Annapurna II | 1200×900 (4:3) |
| `upper-pisang.jpg` | Upper Pisang monastery facing Annapurna II | 4:3 |
| `manang.jpg` | Manang village below the Gangapurna glacier | 4:3 |
| `tilicho-lake.jpg` | Tilicho Lake, turquoise water, ice walls | 4:3 |
| `thorong-la.jpg` | Pass signboard / chorten with flags | 4:3 |
| `muktinath.jpg` | Muktinath temple water spouts | 4:3 |

Related cards → `public/images/treks/related/`: `annapurna-base-camp.jpg`, `muktinath.jpg`, `gandaki.jpg` (16:10).

If an image is missing, its frame shows a forest-to-ochre gradient instead of an empty box.

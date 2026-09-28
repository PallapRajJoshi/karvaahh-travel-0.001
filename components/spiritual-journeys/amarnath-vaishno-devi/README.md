# Amarnath & Vaishno Devi Yatra — `/spiritual-journeys/amarnath-vaishno-devi-yatra`

Premium pilgrimage guide + package landing page for Karvaahh.
It was verified on Next.js 16.3.6 (Turbopack) with strict TypeScript and ESLint (`eslint-config-next`) at zero warnings.
The production build prerenders the route as static (○). At 375px and 1440px there is no horizontal overflow.

## Drop-in

```
app/spiritual-journeys/amarnath-vaishno-devi-yatra/page.tsx      ← route: metadata, canonical, OG, JSON-LD
components/spiritual-journeys/amarnath-vaishno-devi/
├── AmarnathVaishnoDeviPage.tsx   ← assembly (section order = user journey)
├── avd-base.css                  ← page-scoped tokens + primitives (.avd-page)
├── types.ts                      ← Destination, ItineraryDay, PilgrimageRoute, FAQ, TravelTip, …
├── actions.ts                    ← "use server" enquiry action  ← INTEGRATION POINT
├── Icon.tsx / SectionHeading.tsx / OfficialNotice.tsx
├── data/   images.ts · destinations.ts · routes.ts · itinerary.ts · faqs.ts · content.ts
├── seo/    structuredData.ts     ← BreadcrumbList, WebPage, TouristTrip, FAQPage
└── sections/                     ← one component + co-located CSS each
    Hero(+Breadcrumbs) · SectionNav* · Introduction · JourneyOverview(+AltitudeProfile)
    SacredDestinations(+DestinationCard) · SpiritualExperiences · AmarnathRoutes
    VaishnoDeviJourney · PilgrimageTransport · Registration · Preparation (Fitness/Safety/BestTime)
    TravelTips · SuggestedItinerary* · StayAndTravel (Accommodation/Transportation)
    PackageDetails · Audience (SuitableTravellers/PilgrimageComparison) · FAQ
    EnquirySection* · RelatedJourneys · MobileEnquiryBar*
```

`*` = client component. That is only four, and everything else is a server component.
The FAQ uses native `<details>`, so it needs zero JS and every answer stays in the HTML.

## Assumptions to check (all in one place)

| Assumption | Where | Action |
|---|---|---|
| `@/` maps to project root | route file | adjust imports if not |
| Navbar/Footer render at layout level; layout owns `<main>` | `AmarnathVaishnoDeviPage.tsx` | the page renders no `<main>` to avoid nesting |
| `metadataBase` set in root layout | route `metadata` | canonical/OG use relative paths |
| Organization/TravelAgency JSON-LD emitted globally with `@id` `https://karvaahh.in/#organization`, WebSite `/#website` | `seo/structuredData.ts` | match your global `@id`s |
| `NEXT_PUBLIC_SITE_URL` (falls back to `https://karvaahh.in`) | `seo/structuredData.ts` | set in env |
| Fonts exposed as `--font-playfair` / `--font-inter` via `next/font` | `avd-base.css` | rename vars if different (fallbacks exist) |
| Sticky site header height | `--site-header-height` (default `0px`) | set it on `:root` if your header is sticky, or the section nav slides under it |
| `/spiritual-journeys` index exists | breadcrumb, "View all" link | verify |
| `/contact` exists | `EnquirySection` `contactHref` prop | verify / pass the real URL |
| Related journeys: only `12-jyotirlinga-yatra` and `haridwar-rishikesh-yatra` | `data/content.ts → RELATED_JOURNEYS` | add Char Dham, Kedarnath, Muktinath, etc. **only once those routes exist** |

Note: `avd-base.css` declares `--avd-header-offset: var(--site-header-height, 4.5rem)`.
Change the fallback to `0px` if your header is not sticky.

## Enquiry integration

`actions.ts` validates every field on the server, including length caps, enums and phone/email format.
It also runs a honeypot, then POSTs JSON to `process.env.ENQUIRY_WEBHOOK_URL`.

- If the variable is unset or the request fails, the visitor sees an error message and a contact link. It **never shows a fake confirmation**.
- On success the message says "Enquiry sent… This is not a booking confirmation."
- If the site already has an enquiry handler, replace the body of `forwardEnquiry()` with a call to it.

Payload keys: `fullName, phone, email, travellers, travelDate, days, startCity, route (pahalgam|baltal|guidance), vaishnoDevi (include|amarnath-only|guidance), kashmirExtension (yes|no), accommodation (standard|comfort|premium|guidance), specialRequirements, message, source`.

## Image manifest — `public/images/spiritual-journeys/amarnath-vaishno-devi/`

| File | Use | Ratio / crop | Alt (in `data/images.ts`) |
|---|---|---|---|
| `hero-amarnath-himalaya.jpg` | Hero, `priority` | ≥2400px wide; subject upper-centre, dark lower-left for text | Pilgrims on trail beneath snow peaks |
| `og-amarnath-vaishno-devi.jpg` | OG/Twitter | exactly 1200×630 | — |
| `amarnath-cave.jpg` | Shrine card | 16:10 | Shri Amarnath Cave pilgrimage… |
| `vaishno-devi-trikuta.jpg` | Shrine card | 16:10 | Mata Vaishno Devi Temple… Trikuta Hills |
| `pahalgam-lidder-valley.jpg` | Base card + extension | 4:3 | Mountain landscape near Pahalgam… |
| `baltal-base.jpg` | Base card | 4:3 | Alpine valley at Baltal… |
| `katra-town.jpg` | Base card | 4:3 | Katra town… |
| `srinagar-dal-lake.jpg` | Extension | 4:3 | Houseboats on Dal Lake |
| `gulmarg-meadows.jpg`, `sonamarg-valley.jpg` | Compact extension cards | ~1:1 centre-safe | see file |
| `amarnath-route-trail.jpg` | Routes section backdrop (55% opacity) | wide landscape | decorative (`alt=""`) |
| `vaishno-devi-pathway.jpg` | Vaishno Devi journey | 4:3 | Pilgrims on the covered pathway… |

Related cards expect `/images/spiritual-journeys/12-jyotirlinga-yatra/hero.jpg` and `…/haridwar-rishikesh-yatra/hero.jpg`.
Point them at the real files in `data/images.ts → RELATED_IMAGES`.

Use real, licensed photography. For the Amarnath cave interior, confirm that photography rights are clear.

## Content accuracy

- **No invented prices.** The page also has no fees, dates, timings, distances (other than the brief's ~12–14 km for Vaishno Devi), hotel names or helicopter schedules.
- **Amarnath waypoints are names only**, in traditional order:
  - Pahalgam → Chandanwari → Sheshnag → Panchtarni
  - Baltal → Domail → Brari Marg → Sangam
- **Official sources, verified Sep 2026:**
  - Shri Amarnathji Shrine Board: https://jksasb.nic.in/
  - Shri Mata Vaishno Devi Shrine Board: https://www.maavaishnodevi.org/
- **Research notes (Sep 2026) — do not publish without re-verifying:**
  - The 2026 Amarnath Yatra ran 3 Jul–28 Aug.
  - Registration went through SASB and designated banks, with a Compulsory Health Certificate and an RFID card.
  - One secondary source reports no pilgrim helicopter service for Amarnath in 2026. The page's "never guaranteed" wording covers this.
  - Vaishno Devi registration is issued only by the Shrine Board at Katra, with an RFID Yatra card and time-limited route entry.
- **Update routine each season:** re-check the two URLs, the helicopter position and the registration wording in `data/content.ts`.

## Deviations from the brief (intentional)

1. **Itinerary is two tabbed plans** (Baltal 7 days / Pahalgam 9 days) instead of one 7-day plan. The Pahalgam route is traditionally walked over more than one day, so a single Day 4 from Pahalgam would mislead pilgrims. Both plans are labelled illustrative.
2. **Hero has two CTAs** ("Explore the Yatra", "Plan My Yatra"). "Enquire Now" duplicated "Plan My Pilgrimage" (same target), so it moved to the mobile sticky bar.
3. **One CTA name throughout:** "Plan My Yatra".
4. **The hero description is shortened.** The full brief text appears once, in the Introduction, to avoid duplicate copy.
5. **Added a sticky "On this page" nav** for a ~24,000px guide.
6. **Some sections share a view:** Inclusions and exclusions sit side by side, and the two registration sections sit together. Each keeps its own H2.
7. **"Explore" buttons scroll to sections on this page.** No detail pages exist yet, so this avoids the dead CTAs the audit flagged.
8. **Exclusions explicitly list official registration fees and medical certificates.** Some exclusions are merged into grouped lines.
9. **Srinagar and Gulmarg/Sonamarg are labelled "Optional extension"** on every card.
10. **The brief's all-caps eyebrow** is kept once (hero only). Section headings use sentence case.

## Accessibility & performance notes

- **Headings:** one H1, a logical H2/H3 order, and labelled landmarks.
- **Breadcrumb:** `aria-current="page"` on the last item.
- **Tabs:** the itinerary follows the WAI-ARIA tabs pattern (arrow keys, Home and End).
- **Tables:** focusable scroll regions with captions.
- **Colour is never used alone** — every shrine colour comes with a text label.
- **Motion:** respects `prefers-reduced-motion`.
- **Form:** all inputs are 16px (no iOS zoom), errors are announced, focus moves to the status message, and tap targets are ≥44px.
- **Images:** only the hero is `priority`; all others lazy-load with `sizes`.
- **JSON-LD:** `<` is escaped so content can't break out of the script tag.

# Bungee Jumping in Nepal — `/activities/adventure/bungee-jumping`

Verified in a clean Next.js 16 (Turbopack) + strict TypeScript sandbox: `tsc --noEmit` clean, `next build` prerenders the route as static, no horizontal overflow at 1440px or 390px.

## Files

```
app/activities/adventure/bungee-jumping/page.tsx        metadata + JSON-LD (WebPage, TouristAttraction x3, BreadcrumbList, FAQPage)
components/activities/adventure/bungee-jumping/
├── BungeeJumpingPage.tsx       assembly
├── bungee-jumping.css          all page styles, scoped under .bungee-page (tokens --bj-*)
├── shared.tsx                  SectionHeading, CtaLink, PinIcon
├── Reveal.tsx                  single IntersectionObserver (content visible without JS)
├── enquiryIntegration.ts       ⚠ integration placeholder — see below
├── data/bungeeJumpingData.ts   all content (data-driven)
└── sections/
    HeroSection, Breadcrumbs, FeaturedDestination, BungeeSiteCards, BungeeSiteCard,
    SiteComparison, AdventureProducts, AdventureProductCard, TransportSection,
    PokharaOptions, LastResortFeature, CanyonSwing, ComboProducts, PriceDriver,
    WhoIsThisFor, QuickFacts, ActivityGallery, HowItWorks, EnquiryForm,
    FAQSection, BrandFooter, MobileEnquiryBar
```

## Enquiry integration (not connected)

`enquiryIntegration.ts` → `submitBungeeEnquiry()`.
- Set `NEXT_PUBLIC_ENQUIRY_ENDPOINT` (JSON POST, 2xx = success), **or** replace the function body with the site's enquiry/WhatsApp helper.
- Until then the form says online enquiries aren't connected. It never shows a fake confirmation.
- Every "Ask About…/Plan…" CTA pre-selects Destination + Activity in the form via `data-enquiry-*` attributes.

## Assumptions to check

- Fonts: `var(--font-playfair)` / `var(--font-inter)` from root `next/font` — fall back to named families if your variables differ.
- Navbar/Footer render at layout level; the brand strip at the bottom is page content only.
- Canonical is absolute (`https://karvaahh.in/...`) so it doesn't depend on `metadataBase` (audit issue).
- Internal links assumed: `/`, `/activities`, `/activities/adventure` (breadcrumbs).
- Mobile sticky bar is `position: fixed` at `z-index: 40`; raise/lower against your navbar/WhatsApp button.

## Deviations from the brief

- **Prices shown.** The project rule is "no prices on activity pages"; this brief explicitly supplies indicative prices, so they're shown, always labelled *indicative* with confirm-before-booking notes. Transport (NPR 3,000–6,000) is shown separately and labelled as separate from activity prices.
- **Section order:** "Kushma From Pokhara" sits right after the Kushma products (keeps Kushma content together) instead of after the price driver.
- **Combo SKUs:** stored as `sku` in data and exposed as `data-sku` / anchor ids (e.g. `#combo-ksh-bng-swg`); not printed on the cards since codes mean nothing to travelers. SKU codes are placeholders — replace with real ones.
- **Section 17 (aerial comparison):** not duplicated. The ultralight component isn't visible from this build; if it's exported, import it in `BungeeJumpingPage.tsx` between `<HowItWorks />` and `<EnquiryForm />`.
- **One stylesheet** rather than CSS per section, to keep this page lightweight. Split per section if you want parity with province pages.
- Added: a to-scale "drop gauge" above the comparison table (cord lengths from the supplied heights), and a swing-vs-drop line diagram in Canyon Swing.
- JSON-LD: no ratings, reviews, offers, prices, geo coordinates, or availability.

## Image manifest — `public/images/activities/bungee-jumping/`

| File | Used in | Crop |
|---|---|---|
| kushma-bungee-jumping.jpg | Hero, OG | landscape ≥2400w; subject left-of-centre, sky/gorge right (the cord line sits right) |
| kaligandaki-gorge.jpg | Kushma feature (4:5), gallery | portrait-friendly |
| kushma-bungee.jpg | Kushma site card (16:11 / 21:9 tablet) | landscape |
| last-resort-bungee.jpg | Site card, Last Resort full-bleed bg, gallery | landscape, darkish |
| pokhara-bungee.jpg | Site card, gallery | landscape |
| kushma-bungee-jump.jpg | Gallery large tile (2×2) | landscape/square |
| kushma-canyon-swing.jpg | Gallery | square-ish |
| kushma-sky-cycling.jpg | Gallery | square-ish |
| kushma-sky-bridge.jpg | Gallery | square-ish |

Missing images fall back to a dark gorge-green surface, so layout holds.

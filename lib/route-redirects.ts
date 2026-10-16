/**
 * Temporary (307) redirects for URLs that are linked from the site — or may be
 * linked from outside — but do not have their own page yet. Each one sends the
 * visitor to the closest existing page instead of a 404.
 *
 * IMPORTANT: redirects run BEFORE page routing. When you build a real page for
 * any `source` below, DELETE its entry here or the new page will never show.
 *
 * Imported by next.config.ts. Keep this file free of `@/` imports.
 */

type Redirect = { source: string; destination: string; permanent: false };

const map: Record<string, string> = {
  /* ── Section hubs that don't exist yet ─────────────────────────── */
  "/activities": "/activities/adventure/hotspots",
  "/activities/adventure": "/activities/adventure/hotspots",
  "/adventure": "/activities/adventure/hotspots",
  "/activities/educational-corporate": "/activities/educational-corporate/educational-tours",
  "/spiritual-journeys": "/packages/spiritual-pilgrimage",
  "/offbeat-unexplored": "/packages/nepal/adventure-offbeat-tours",
  "/packages/nepal": "/packages",
  "/packages/international": "/packages",
  "/packages/karvaahh-specials": "/packages",
  "/packages/india-pilgrimage": "/packages/spiritual-pilgrimage",
  "/packages/international-pilgrimage": "/packages/kailash-mansarovar-yatra",
  "/experiences": "/packages",
  "/journeys": "/packages",
  "/experiences/himalayan-adventures": "/packages/nepal/trekking-hiking-packages",
  "/experiences/spiritual-journeys": "/packages/spiritual-pilgrimage",
  "/experiences/cultural-experiences": "/activities/culture-festival-experiences",
  "/experiences/wildlife-nature": "/activities/wildlife-nature",
  "/experiences/luxury-escapes": "/packages",
  "/experiences/family-holidays": "/packages",
  "/nepal-tours": "/packages",
  "/uttarakhand-tours": "/packages/uttarakhand",

  /* ── Planning, help and services → contact / homepage sections ── */
  "/plan-my-journey": "/contact",
  "/plan-your-journey": "/contact",
  "/faqs": "/contact#faq",
  "/reviews": "/about",
  "/blog": "/#travel-tips",
  "/services/visa-assistance": "/contact",
  "/services/international-flights": "/activities/flights/international-flights",

  /* ── Activities ─────────────────────────────────────────────────── */
  "/activities/adventure/kayaking": "/activities/adventure/rafting",
  "/activities/adventure/mountain-flight": "/activities/domestic-flights/mountain-scenic",
  "/activities/domestic-flights": "/activities/domestic-flights/mountain-scenic",
  "/activities/domestic-flights/lukla-scenic-flights": "/activities/flights/lukla-scenic-flights",
  "/activities/domestic-flights/pokhara-jomsom": "/activities/domestic-flights/mountain-scenic",
  "/activities/domestic-flights/leh-ladakh-scenic-flights": "/activities/flights/leh-ladakh-scenic-flights",
  "/activities/domestic-flights/domestic-india-flights": "/activities/flights/domestic-india-flights",
  "/activities/domestic-flights/international-flights": "/activities/flights/international-flights",
  "/activities/yoga-wellness": "/activities/wellness/yoga-wellness",

  /* ── Destinations ───────────────────────────────────────────────── */
  "/destinations/nepal": "/destinations",
  "/destinations/provinces": "/destinations",
  "/destinations/india": "/packages/north-india",
  "/destinations/kathmandu": "/destinations/bagmati-province",
  "/destinations/pokhara": "/destinations/gandaki-province",
  "/destinations/chitwan": "/activities/wildlife-nature",
  "/destinations/muktinath": "/spiritual-journeys/pashupatinath",
  "/destinations/kailash": "/packages/kailash-mansarovar-yatra",
  "/destinations/himalayas": "/packages/nepal/trekking-hiking-packages",
  "/destinations/himalayan-escapes": "/packages/nepal/trekking-hiking-packages",
  "/destinations/adventure-nepal": "/packages/nepal/adventure-offbeat-tours",
  "/destinations/offbeat-nepal": "/packages/nepal/adventure-offbeat-tours",
  "/destinations/spritual-nepal": "/packages/nepal/spiritual-pilgrimage-tours",
  "/destinations/spiritual-nepal": "/packages/nepal/spiritual-pilgrimage-tours",
  "/destinations/uttarakhand": "/packages/uttarakhand",
  "/destinations/delhi": "/packages/north-india",
  "/destinations/rajasthan": "/packages/historical-heritage",
  "/destinations/varanasi": "/packages/spiritual-pilgrimage",

  /* ── Offbeat ────────────────────────────────────────────────────── */
  "/offbeat-unexplored/tsum-valley": "/adventure/tsum-valley-trek",
  "/offbeat-unexplored/nar-phu-valley": "/packages/nepal/adventure-offbeat-tours",
  "/offbeat-unexplored/sailung": "/packages/nepal/adventure-offbeat-tours",

  /* ── Packages: old or alternative slugs ─────────────────────────── */
  "/packages/kailash-mansarovar": "/packages/kailash-mansarovar-yatra",
  "/packages/international-pilgrimage/kailash-mansarovar-yatra": "/packages/kailash-mansarovar-yatra",
  "/packages/char-dham-yatra": "/spiritual-journeys/char-dham-yatra-uttarakhand",
  "/packages/kedarnath-yatra": "/activities/char-dham-yatra",
  "/packages/muktinath-yatra": "/spiritual-journeys/pashupatinath",
  "/packages/himalayan-tours": "/packages/nepal/base-camp-treks",
  "/packages/nepal-tour-packages": "/packages/nepal/trekking-hiking-packages",
  "/packages/nepal-himalayan-escape": "/packages/nepal/trekking-hiking-packages",
  "/packages/annapurna-base-camp-trek": "/packages/nepal/base-camp-treks",
  "/packages/helicopter-yatra-packages": "/packages/nepal/helicopter-tours",
  "/packages/international/china": "/packages/international/asia",
  "/packages/international/argentina": "/packages/international/antarctica",
  "/packages/international/chile": "/packages/international/antarctica",
  "/packages/international/patagonia": "/packages/international/antarctica",

  /* ── Spiritual journeys: alternative slugs ──────────────────────── */
  "/spiritual-journeys/char-dham-yatra": "/spiritual-journeys/char-dham-yatra-uttarakhand",
  "/spiritual-journeys/kedarnath": "/activities/char-dham-yatra",
  "/spiritual-journeys/kedarnath-yatra": "/activities/char-dham-yatra",
  "/spiritual-journeys/badrinath": "/activities/char-dham-yatra",
  "/spiritual-journeys/badrinath-yatra": "/activities/char-dham-yatra",
  "/spiritual-journeys/muktinath": "/spiritual-journeys/pashupatinath",
  "/spiritual-journeys/muktinath-yatra": "/spiritual-journeys/pashupatinath",
  "/spiritual-journeys/kailash-mansarovar-yatra": "/spiritual-journeys/kailash-mansarovar",
  "/spiritual-journeys/panch-kailash-yatra": "/packages/panch-kailash-yatra",
  "/spiritual-journeys/panch-kedar-yatra": "/packages/panch-kailash-yatra",
  "/spiritual-journeys/janakpur-spiritual-journey": "/destinations/madhesh-province",
};

/** Wildcard groups: every child path goes to one page. */
const groups: Record<string, string> = {
  "/blog/:path+": "/#travel-tips",
  "/journeys/:path+": "/packages",
  "/experiences/:path+": "/packages",
  "/activities/wildlife-nature/:path+": "/activities/wildlife-nature",
  "/activities/yoga-wellness/:path+": "/activities/wellness/yoga-wellness",
  "/packages/international/south-africa/:path+": "/packages/international/south-africa",
};

export const routeRedirects: Redirect[] = [...Object.entries(map), ...Object.entries(groups)].map(
  ([source, destination]) => ({ source, destination, permanent: false }),
);

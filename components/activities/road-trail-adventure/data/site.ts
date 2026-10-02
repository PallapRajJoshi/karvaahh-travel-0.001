/**
 * Page-level constants. Edit here, not in components.
 */

/** Route slug. Must match the folder name under app/activities/. */
export const PAGE_SLUG = "road-trail-adventure";
export const PAGE_PATH = `/activities/${PAGE_SLUG}`;

export const SITE_NAME = "Karvaahh – Live to Travel";

export const PAGE_TITLE = "Road & Trail Adventures in Nepal | Karvaahh";
export const PAGE_DESCRIPTION =
  "Explore Nepal’s scenic road trips, Himalayan off-road adventures, motorcycle journeys, mountain biking, and trekking trails with Karvaahh – Live to Travel.";

export const PAGE_KEYWORDS = [
  "Road trips in Nepal",
  "Nepal adventure tours",
  "Himalayan road trips",
  "Nepal off-road jeep tours",
  "Upper Mustang jeep tour",
  "Muktinath road trip",
  "Nepal motorcycle tours",
  "Nepal trekking adventures",
  "Annapurna trekking trails",
  "Nepal mountain biking",
  "Jomsom road trip",
  "Manang road trip",
];

/** Breadcrumb trail. Internal targets are assumed: verify against the live site. */
export const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Activities", href: "/activities" },
  { name: "Road & Trail Adventure", href: PAGE_PATH },
] as const;

/** In-page anchors. Kept in one place so links and section ids never drift. */
export const ANCHORS = {
  highlight: "destination-highlight",
  categories: "choose-your-way",
  destinations: "destinations",
  roadTrips: "road-trips",
  trails: "trails",
  ride: "ride",
  offRoad: "off-road",
  styles: "travel-styles",
  itineraries: "itineraries",
  prepare: "prepare",
  why: "why-karvaahh",
  gallery: "gallery",
  responsible: "responsible",
  faq: "faq",
  inquiry: "plan-your-adventure",
} as const;

export const INQUIRY_ANCHOR = `#${ANCHORS.inquiry}`;

/**
 * Contact + inquiry wiring. All optional: set in .env.local.
 *
 *   NEXT_PUBLIC_INQUIRY_ENDPOINT  POST target for the existing inquiry/booking API
 *   NEXT_PUBLIC_CONTACT_EMAIL     fallback mailto address
 *   NEXT_PUBLIC_WHATSAPP_NUMBER   digits only with country code, e.g. 9779800000000
 *
 * The site audit found conflicting contact numbers, so this page reads one
 * source of truth instead of hard-coding any number or address.
 */
export const INQUIRY_ENDPOINT = process.env.NEXT_PUBLIC_INQUIRY_ENDPOINT ?? "";
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

/** Sticky in-page navigation entries. */
export const SUBNAV = [
  { label: "Experiences", id: ANCHORS.categories },
  { label: "Destinations", id: ANCHORS.destinations },
  { label: "Road trips", id: ANCHORS.roadTrips },
  { label: "Trails", id: ANCHORS.trails },
  { label: "Ride", id: ANCHORS.ride },
  { label: "4x4", id: ANCHORS.offRoad },
  { label: "Itineraries", id: ANCHORS.itineraries },
  { label: "Prepare", id: ANCHORS.prepare },
  { label: "FAQ", id: ANCHORS.faq },
  { label: "Plan", id: ANCHORS.inquiry },
] as const;

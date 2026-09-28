/**
 * Single source for URLs and brand facts used on this page.
 *
 * VERIFY before deploy: every value marked "VERIFY" was not confirmed against
 * the live project. Change it here and the whole page (links, breadcrumbs,
 * JSON-LD, CTAs) updates together.
 */
export const SITE_URL = "https://karvaahh.in";

export const BRAND = {
  name: "Karvaahh",
  slogan: "Live to Travel",
} as const;

/** The route this page is served from. Must match the folder name exactly. */
export const PAGE_PATH = "/spiritual-journeys/pashupatinath";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const ROUTES = {
  home: "/",
  /** VERIFY: hub page for spiritual journeys (used in breadcrumb). */
  spiritualJourneys: "/spiritual-journeys",
  /** VERIFY: the site's enquiry/contact route. Every CTA points here. */
  enquiry: "/contact",
  /** VERIFY: province slugs follow the `<name>-province` pattern. */
  bagmatiProvince: "/destinations/bagmati-province",
  gandakiProvince: "/destinations/gandaki-province",
} as const;

export const IMAGE_BASE = "/images/spiritual-journeys/pashupatinath-muktinath";

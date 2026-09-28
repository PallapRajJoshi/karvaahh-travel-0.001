/**
 * Every internal link this page uses, in one place.
 * ⚠ Verify each href against the live site before publishing (see README → "Link targets").
 */
export const SITE_URL = "https://karvaahh.in";

export const PAGE_PATH = "/adventure/api-nampa-base-camp-trek";

export const ROUTES = {
  home: "/",
  /** Existing adventure activities live under /activities/adventure/*. Swap to "/adventure" if that index exists. */
  adventureIndex: "/activities/adventure",
  contact: "/contact",
  sudurpaschimProvince: "/destinations/sudurpashchim-province",
  karnaliProvince: "/destinations/karnali-province",
  camping: "/activities/adventure/camping",
} as const;

/** Pre-filled inquiry links — the contact page can read `?trip=` / `?type=` if it supports it; otherwise they are harmless. */
export const INQUIRY = {
  custom: `${ROUTES.contact}?trip=api-nampa-base-camp-trek&type=custom`,
  general: `${ROUTES.contact}?trip=api-nampa-base-camp-trek`,
} as const;

/** In-page anchors (used by hero CTAs and the sticky section nav). */
export const ANCHORS = {
  overview: "overview",
  highlights: "highlights",
  itinerary: "itinerary",
  seasons: "best-time",
  preparation: "preparation",
  essentials: "essentials",
  packages: "packages",
  gallery: "gallery",
  faq: "faq",
} as const;

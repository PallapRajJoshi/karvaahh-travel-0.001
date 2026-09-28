/**
 * Everything that is route-, link- or verification-sensitive lives here,
 * so the operations team can change it without touching components.
 */

export const SITE_URL = "https://karvaahh.in";
export const PAGE_PATH = "/adventure/everest-three-passes-trek";
export const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

export const IMAGE_BASE = "/images/destinations/everest-three-passes";

/**
 * Internal link targets. VERIFY each against the live site before launch —
 * existing activity pages live under /activities/adventure/*, while this brief
 * asked for /adventure/*. See README → "Route taxonomy".
 */
export const LINKS = {
  home: "/",
  adventure: "/activities/adventure",
  contact: "/contact",
  /** Enquiry form with trip pre-selected. Change if the site uses another pattern. */
  customize: "/contact?trip=everest-three-passes-trek",
  packagesAnchor: "#packages",
  routeAnchor: "#route",
} as const;

/** Breadcrumb trail: Home → Adventure → Everest Three Passes Trek */
export const BREADCRUMBS = [
  { label: "Home", href: LINKS.home },
  { label: "Adventure", href: LINKS.adventure },
  { label: "Everest Three Passes Trek", href: PAGE_PATH },
] as const;

/**
 * Elevations in this page are widely published approximations.
 * While false, the UI prefixes them with "≈" and shows an "approximate" note.
 * Set true once a qualified trekking professional has signed them off.
 */
export const ELEVATIONS_VERIFIED = false;

/** Date the practical information was last reviewed. Shown on the page. */
export const INFO_LAST_REVIEWED = "September 2026";

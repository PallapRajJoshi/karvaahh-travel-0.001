/**
 * Route mapping layer.
 *
 * The hub never invents URLs. A destination gets a link only if a matching page
 * already exists in the project's `app/` folder (see discover-routes.ts):
 *
 *   1. ROUTE_OVERRIDES — explicit slug → path, for pages whose URL does not end
 *      in the destination slug (e.g. a yatra page covering two destinations).
 *      An override is ignored, with a build warning, if that page does not exist.
 *   2. Auto-discovery — any static page whose LAST URL segment equals the
 *      destination slug (or the slugified name / an alias) is linked, e.g.
 *      /offbeat-unexplored/rara-lake → rara-lake.
 *   3. Otherwise the card shows an "Enquire" call to action instead of a dead link.
 *
 * Dynamic routes cannot be enumerated from the file system. If a destination
 * page is served by a dynamic route (e.g. app/nepal/[slug]/page.tsx with
 * generateStaticParams) add it to ROUTE_OVERRIDES.
 */

export const SITE_URL = "https://karvaahh.in";

export const ROUTE_OVERRIDES: Record<string, string> = {
  jyotirlinga: "/spiritual-journeys/12-jyotirlinga-yatra",
  haridwar: "/spiritual-journeys/haridwar-rishikesh-yatra",
  rishikesh: "/spiritual-journeys/haridwar-rishikesh-yatra",
  "kailash-mansarovar": "/packages/kailash-mansarovar-yatra",
  // Add more here as pages are built, e.g.:
  // kathmandu: "/destinations/bagmati-province#kathmandu",
};

/**
 * When several existing pages end in the same segment, the page under the
 * earliest matching prefix wins (destination pages before packages).
 */
export const ROUTE_PREFIX_PRIORITY = [
  "/destinations/",
  "/offbeat-unexplored/",
  "/spiritual-journeys/",
  "/nepal/",
  "/india/",
  "/international/",
  "/activities/",
  "/packages/",
];

/**
 * Optional image overrides: slug → path under /public. Use this if the project
 * already stores destination photos somewhere else. Missing files are ignored.
 */
export const IMAGE_OVERRIDES: Record<string, string> = {
  // "kathmandu": "/images/nepal/kathmandu-hero.jpg",
};

export const IMAGE_DIR = "images/destinations";

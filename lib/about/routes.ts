/**
 * Every internal link used by the About page, in one file.
 *
 * Status of each path:
 *   CONFIRMED – existed in earlier Karvaahh builds (spiritual-journeys, activities/adventure/*, packages/*)
 *   ASSUMED   – an index/hub route that earlier builds linked to but that has not been
 *               verified against the live app. Run `node scripts/check-about-links.mjs`
 *               from the project root: it reports any path below with no matching page.
 *
 * Fix a dead link here once and the whole page follows.
 */
export const ROUTES = {
  /** ASSUMED – destinations hub (province pages live under /destinations/<province>) */
  destinations: "/destinations",
  /** ASSUMED – packages hub (CONFIRMED child: /packages/kailash-mansarovar-yatra) */
  packages: "/packages",
  /** ASSUMED – activities hub */
  activities: "/activities",
  /** ASSUMED – adventure hub (CONFIRMED children: paragliding, camping, ultra-light-flight) */
  adventure: "/activities/adventure",
  /** ASSUMED – spiritual hub (CONFIRMED child: /spiritual-journeys/12-jyotirlinga-yatra) */
  spiritual: "/spiritual-journeys",
  /** ASSUMED – flagged in the site audit; verify */
  contact: "/contact",
} as const;

/**
 * Enquiry link that carries what the visitor was looking at.
 * /contact ignores unknown query params safely; wire `interest` into the
 * enquiry form's default value whenever convenient.
 */
export function planHref(interest: string): string {
  return `${ROUTES.contact}?interest=${encodeURIComponent(interest)}`;
}

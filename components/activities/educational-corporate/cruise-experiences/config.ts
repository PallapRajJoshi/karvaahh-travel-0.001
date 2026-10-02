/**
 * Page-level configuration.
 *
 * ROUTE NOTE: the brief specifies the URL
 *   /activities/educational-corporate/cultural-exchange
 * but the content is "Cruise Experiences". The route folder in `app/` must
 * match the URL the site navigates to, so it is kept as specified. If the
 * slug is later changed (recommended: /activities/leisure/cruise-experiences),
 * update ROUTE_PATH below, rename the `app/` folder and add a 301 redirect.
 */
export const ROUTE_PATH =
  "/activities/educational-corporate/cultural-exchange";

/** Assumed to be set by the site's root layout (`metadataBase`). */
export const SITE_NAME = "Karvaahh – Live to Travel";

export const IMAGE_BASE = "/images/activities/cruise-experiences";

/** Internal link targets — inferred, verify against the live site map. */
export const LINKS = {
  contact: "/contact",
  activities: "/activities",
  destinations: "/destinations",
  packages: "/packages",
  pokhara: "/destinations/gandaki-province",
} as const;

export const INQUIRY_ANCHOR = "cruise-inquiry";
export const CATEGORIES_ANCHOR = "cruise-categories";

/**
 * Inquiry submission. There is no verified inquiry endpoint, so the form
 * posts to INQUIRY_ENDPOINT if set; otherwise it shows a clear "not yet
 * connected" state rather than pretending to submit. Replace with the site's
 * existing contact API when confirmed.
 */
export const INQUIRY_ENDPOINT: string | null = null;
/** Set to the verified public inquiry address (audit found conflicting contacts). */
export const INQUIRY_EMAIL: string | null = null;

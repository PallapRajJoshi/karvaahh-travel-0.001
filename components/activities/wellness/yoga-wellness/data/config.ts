/**
 * Page-level configuration. Everything an integrator may need to change lives here.
 */

/** Base path for this page. Must match the route folder exactly. */
export const PAGE_PATH = "/activities/wellness/yoga-wellness";

/** Set to false once real photos exist at the paths listed in the README manifest. */
export const USE_IMAGE_PLACEHOLDERS = true;

/**
 * Where the inquiry form POSTs JSON. ASSUMPTION: point this at the existing
 * Karvaahh inquiry endpoint. If the request fails, the form shows an honest
 * error and never a false success.
 */
export const INQUIRY_ENDPOINT = "/api/inquiries";

/** Internal link targets. ASSUMPTIONS — verify against the live route map. */
export const LINKS = {
  contact: "/contact",
  destinations: "/destinations",
  packages: "/packages",
  bagmati: "/destinations/bagmati-province",
  gandaki: "/destinations/gandaki-province",
  lumbini: "/destinations/lumbini-province",
  haridwarRishikesh: "/spiritual-journeys/haridwar-rishikesh-yatra",
  activities: "/activities",
  privacy: "/privacy-policy",
} as const;

export const SECTION_IDS = {
  experiences: "wellness-experiences",
  destinations: "wellness-destinations",
  styles: "retreat-styles",
  itineraries: "sample-itineraries",
  inquiry: "plan-your-retreat",
} as const;

/**
 * Every internal route this page links to lives here, so a wrong guess is a one-line fix.
 * ⚠️ Slugs marked GUESSED were inferred from the existing site structure and must be verified.
 */
export const LINKS = {
  contact: "/contact", // GUESSED
  activities: "/activities", // GUESSED
  packages: "/packages", // GUESSED (section exists; index page unverified)
  // Province destination pages: app/destinations/[province-slug]/page.tsx
  bagmati: "/destinations/bagmati-province", // GUESSED slug
  gandaki: "/destinations/gandaki-province", // GUESSED slug
  koshi: "/destinations/koshi-province", // GUESSED slug
  lumbini: "/destinations/lumbini-province", // GUESSED slug
  karnali: "/destinations/karnali-province", // GUESSED slug
  sudurpashchim: "/destinations/sudurpashchim-province", // slug spelling confirmed from earlier 404 fix
  rara: "/offbeat-unexplored/rara-lake", // existing page
} as const;

/** Where the inquiry form POSTs. The bundled route handler forwards to WILDLIFE_INQUIRY_WEBHOOK_URL. */
export const INQUIRY_ENDPOINT = "/api/wildlife-inquiry";

export const PAGE_PATH = "/activities/wildlife-nature";

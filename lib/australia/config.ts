// lib/australia/config.ts
// Australia-specific wiring. Routing and contact helpers are shared with the
// other international pages via lib/international/config.ts.

import { contact } from "@/lib/international/config";

export { INTERNATIONAL_HREF, SITE_URL, contact, destAnchor, enquireAbout, liveHref } from "@/lib/international/config";

export const AUSTRALIA_PATH = "/packages/international/australia";

export const AU_ENQUIRY = contact.whatsapp("Hello Karvaahh, I'd like help planning an Australia trip.");
export const AU_HONEYMOON_ENQUIRY = contact.whatsapp("Hello Karvaahh, we'd like to plan an Australia honeymoon.");
export const AU_VISA_ENQUIRY = contact.whatsapp("Hello Karvaahh, I'd like to ask about Australia visa guidance and document preparation.");

/**
 * Future dedicated pages. Each is only linked once it appears in LIVE_ROUTES
 * (lib/international/config.ts); until then the page falls back to WhatsApp
 * or to the matching section on this page.
 */
export const AU_LINKS = {
  visa: "/services/visa-assistance",
  flights: "/services/international-flights",
  contact: "/contact",
} as const;

/** Official sources for entry rules. Linked as references, never paraphrased as rules. */
export const OFFICIAL_LINKS = {
  visitorVisa: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600",
  visaFinder: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder",
  biosecurity: "https://www.agriculture.gov.au/biosecurity-trade/travelling/to-australia",
  parks: "https://parksaustralia.gov.au/",
} as const;

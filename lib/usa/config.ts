// lib/usa/config.ts
// USA-specific wiring. Routing and contact helpers are shared with the other
// international pages via lib/international/config.ts.

import { contact } from "@/lib/international/config";

export { INTERNATIONAL_HREF, SITE_URL, contact, destAnchor, enquireAbout, liveHref } from "@/lib/international/config";

export const USA_PATH = "/packages/international/usa";

export const USA_ENQUIRY = contact.whatsapp("Hello Karvaahh, I'd like help planning a USA trip.");
export const USA_HONEYMOON_ENQUIRY = contact.whatsapp("Hello Karvaahh, we'd like to plan a USA honeymoon.");
export const USA_VISA_ENQUIRY = contact.whatsapp("Hello Karvaahh, I'd like to ask about USA visa guidance and document preparation.");

/**
 * Future dedicated pages. Each is only linked once it appears in LIVE_ROUTES
 * (lib/international/config.ts); until then the page falls back to WhatsApp
 * or to the matching section on this page.
 */
export const USA_LINKS = {
  visa: "/services/visa-assistance",
  flights: "/services/international-flights",
  contact: "/contact",
} as const;

/** Official sources for entry rules. Linked as references, never paraphrased as rules. */
export const OFFICIAL_LINKS = {
  visitorVisa: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html",
  esta: "https://esta.cbp.dhs.gov/",
  nps: "https://www.nps.gov/",
  canada: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html",
} as const;

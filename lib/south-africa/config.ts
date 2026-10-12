// lib/south-africa/config.ts
// South Africa wiring. Routing and contact helpers are shared with the other
// international pages via lib/international/config.ts.

import { contact } from "@/lib/international/config";

export { INTERNATIONAL_HREF, SITE_URL, contact, destAnchor, liveHref } from "@/lib/international/config";

export const SA_PATH = "/packages/international/south-africa";

export const SA_ENQUIRY = contact.whatsapp("Hello Karvaahh, I'd like help planning a South Africa trip.");
export const SA_SAFARI_ENQUIRY = contact.whatsapp("Hello Karvaahh, I'd like to plan a South Africa safari.");
export const SA_HONEYMOON_ENQUIRY = contact.whatsapp("Hello Karvaahh, we'd like to plan a South Africa honeymoon.");
export const SA_VISA_ENQUIRY = contact.whatsapp("Hello Karvaahh, I'd like guidance on South Africa visa documents.");

/** WhatsApp link for a specific package, destination, route or experience. */
export const enquireSA = (subject: string) =>
  contact.whatsapp(`Hello Karvaahh, I'm interested in: ${subject} (South Africa). Please share details and help me customize it.`);

/**
 * Future dedicated pages. Linked only once each appears in LIVE_ROUTES
 * (lib/international/config.ts); until then links fall back to the matching
 * section on this page or WhatsApp.
 */
export const SA_LINKS = {
  international: "/packages",
  africa: "/packages/international/africa",
  capeTown: "/packages/international/south-africa/cape-town",
  kruger: "/packages/international/south-africa/kruger-safari",
  gardenRoute: "/packages/international/south-africa/garden-route",
  honeymoon: "/packages/honeymoon",
  family: "/packages/family",
  luxury: "/packages/luxury",
  visa: "/services/visa-assistance",
  flights: "/services/international-flights",
  antarctica: "/packages/international/antarctica",
  europe: "/packages/international/europe",
  usa: "/packages/international/usa",
  asia: "/packages/international/asia",
} as const;

/** Official sources, linked as references and never paraphrased as rules. */
export const OFFICIAL_LINKS = {
  dha: "https://www.dha.gov.za/",
  sanparks: "https://www.sanparks.org/",
  tourism: "https://www.southafrica.net/",
} as const;

// lib/antarctica/config.ts
// Antarctica-specific wiring. Routing and contact helpers are shared with the
// other international pages via lib/international/config.ts.

import { contact } from "@/lib/international/config";

export { INTERNATIONAL_HREF, SITE_URL, contact, destAnchor, enquireAbout, liveHref } from "@/lib/international/config";

export const ANTARCTICA_PATH = "/packages/international/antarctica";

export const ANTARCTICA_ENQUIRY = contact.whatsapp("Hello Karvaahh, I'd like help planning an Antarctica expedition.");
export const ANTARCTICA_HONEYMOON_ENQUIRY = contact.whatsapp("Hello Karvaahh, we'd like to plan an Antarctica honeymoon.");
export const ANTARCTICA_VISA_ENQUIRY = contact.whatsapp(
  "Hello Karvaahh, I'd like help with transit-country visas and documents for an Antarctica expedition.",
);

/** WhatsApp link for a specific expedition, region or extension. */
export const enquireExpedition = (subject: string) =>
  contact.whatsapp(`Hello Karvaahh, I'm interested in: ${subject}. Please share details and help me customize it.`);

/**
 * Future dedicated pages. Each is only linked once it appears in LIVE_ROUTES
 * (lib/international/config.ts); until then the link falls back to a
 * WhatsApp enquiry or the matching section on this page.
 */
export const ANTARCTICA_LINKS = {
  international: "/packages",
  southAmerica: "/packages/international/south-america",
  argentina: "/packages/international/argentina",
  chile: "/packages/international/chile",
  patagonia: "/packages/international/patagonia",
  flights: "/services/international-flights",
  visa: "/services/visa-assistance",
  honeymoon: "/packages/honeymoon",
  luxury: "/packages/luxury",
  wildlife: "/packages/wildlife",
  adventure: "/adventure",
  contact: "/contact",
} as const;

/** Official references. Linked, never paraphrased as rules. */
export const OFFICIAL_LINKS = {
  iaato: "https://iaato.org/visiting-antarctica/visitor-guidelines/",
  antarcticTreaty: "https://www.ats.aq/",
  argentinaVisa: "https://cancilleria.gob.ar/en/services/visas",
  chileVisa: "https://www.chile.gob.cl/",
} as const;

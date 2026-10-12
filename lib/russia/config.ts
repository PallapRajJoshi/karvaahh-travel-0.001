// lib/russia/config.ts
// Russia-specific wiring. Routing and contact helpers are shared with the other
// international pages via lib/international/config.ts.

import { contact } from "@/lib/international/config";

export { INTERNATIONAL_HREF, SITE_URL, contact, destAnchor, enquireAbout, liveHref } from "@/lib/international/config";

export const RUSSIA_PATH = "/packages/international/russia";

export const RUSSIA_ENQUIRY = contact.whatsapp("Hello Karvaahh, I'd like help planning a Russia trip.");
export const RUSSIA_HONEYMOON_ENQUIRY = contact.whatsapp("Hello Karvaahh, we'd like to plan a Russia honeymoon.");
export const RUSSIA_VISA_ENQUIRY = contact.whatsapp("Hello Karvaahh, I'd like to ask about visa / document assistance for Russia.");

export const LIMITED_NOTE = "Availability subject to current operating conditions";

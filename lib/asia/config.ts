// lib/asia/config.ts
// Asia-specific wiring for /packages/international/asia. Shared routing and
// contact helpers live in lib/international/config.ts.

import { contact } from "@/lib/international/config";

export { INTERNATIONAL_HREF, LIVE_ROUTES, SITE_URL, contact, destAnchor, enquireAbout, liveHref } from "@/lib/international/config";
export const ASIA_PATH = "/packages/international/asia";

/** Existing Karvaahh pages that are a better next step than an enquiry for some destinations. */
export const DESTINATION_SITE_LINKS: Record<string, { href: string; label: string }> = {
  nepal: { href: "/destinations", label: "Explore Nepal destinations" },
};

export const GENERAL_ENQUIRY = contact.whatsapp("Hello Karvaahh, I'd like help planning an Asia trip.");
export const VISA_ENQUIRY = contact.whatsapp("Hello Karvaahh, I'd like to ask about visa assistance for an Asia trip.");

/** Internal links block. In-page anchors stand in for country pages that are not live yet. */
export const internalLinks: { label: string; href: string }[] = [
  { label: "All Travel Packages", href: "/packages" },
  { label: "Nepal Packages", href: "/packages/nepal/spiritual-adventure-tours" },
  { label: "Nepal Destinations", href: "/destinations" },
  { label: "Helicopter Tours", href: "/activities/helicopter-tours" },
  { label: "Domestic Mountain Flights", href: "/activities/domestic-flights/mountain-scenic" },
  { label: "Kailash Mansarovar Yatra", href: "/packages/kailash-mansarovar-yatra" },
  { label: "Russia Tour Packages", href: "/packages/international/russia" },
];

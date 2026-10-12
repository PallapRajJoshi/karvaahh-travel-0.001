// lib/international/config.ts
// Shared routing + enquiry wiring for the international package pages
// (/packages/international/asia, /packages/international/russia, ...).

import { CONTACT, SITE_URL } from "@/components/activities/experience/site";
import { contactInfo } from "@/lib/navigation-data";

export { SITE_URL };

/**
 * Routes that exist in the app today. Destination/package `href`s in the data
 * are only rendered as links once they appear here, so no page ships a broken
 * link. Add e.g. "/packages/international/russia/moscow" when that page goes live.
 */
export const LIVE_ROUTES = new Set<string>([
  "/",
  "/packages",
  "/destinations",
  "/packages/international/asia",
  "/packages/international/russia",
  "/packages/international/europe",
  "/packages/international/usa",
  "/packages/international/antarctica",
  "/packages/international/south-africa",
  "/packages/international/australia",
  "/packages/nepal/spiritual-adventure-tours",
  "/packages/kailash-mansarovar-yatra",
  "/activities/helicopter-tours",
  "/activities/domestic-flights/mountain-scenic",
]);

export const liveHref = (href?: string) => (href && LIVE_ROUTES.has(href) ? href : undefined);

/**
 * Breadcrumb parent. /packages/international is not built yet, so this points
 * at the packages hub until it is added to LIVE_ROUTES.
 */
export const INTERNATIONAL_HREF = LIVE_ROUTES.has("/packages/international") ? "/packages/international" : "/packages";

export const contact = {
  whatsapp: CONTACT.whatsappHref,
  nepalPhoneHref: contactInfo.nepal.phoneHref,
  nepalPhone: contactInfo.nepal.phone,
  indiaPhoneHref: contactInfo.india.phoneHref,
  indiaPhone: contactInfo.india.phone,
};

export const enquireAbout = (subject: string) =>
  contact.whatsapp(`Hello Karvaahh, I'd like to plan a trip: ${subject}. Please help me customize it.`);

/** Anchor id for a destination card on a page. */
export const destAnchor = (id: string) => `dest-${id}`;

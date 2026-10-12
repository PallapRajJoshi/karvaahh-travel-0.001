// lib/europe/config.ts
// Routing + enquiry wiring for /packages/international/europe. Builds on the
// site-wide route list in lib/asia/config.ts so both hubs agree on what is live.

import { LIVE_ROUTES as SITE_ROUTES, SITE_URL, contact } from "@/lib/asia/config";

export { SITE_URL, contact };
export const EUROPE_PATH = "/packages/international/europe";

/**
 * Routes that exist in the app today. Country/package `href`s in data/europe are
 * linked only once they appear here, so the page never ships a broken link.
 * Add e.g. "/packages/international/europe/switzerland" when that page goes live.
 */
export const LIVE_ROUTES = new Set<string>([...SITE_ROUTES, "/packages/international/asia", EUROPE_PATH]);

export const liveHref = (href?: string) => (href && LIVE_ROUTES.has(href) ? href : undefined);

/** Breadcrumb parent. /packages/international is not built yet, so this falls back to the packages hub. */
export const INTERNATIONAL_HREF = LIVE_ROUTES.has("/packages/international") ? "/packages/international" : "/packages";

export const enquireAbout = (subject: string) =>
  contact.whatsapp(`Hello Karvaahh, I'd like to plan a Europe trip: ${subject}. Please help me customize it.`);

export const GENERAL_ENQUIRY = contact.whatsapp("Hello Karvaahh, I'd like help planning a Europe trip.");
export const HONEYMOON_ENQUIRY = contact.whatsapp("Hello Karvaahh, I'd like help planning a Europe honeymoon.");
export const VISA_ENQUIRY = contact.whatsapp("Hello Karvaahh, I'd like to ask about visa assistance for a Europe trip.");

/** Anchor id for a country card. Same "dest-" scheme as the Asia hub, so the shared SeasonSelector links work. */
export const countryAnchor = (id: string) => `dest-${id}`;

/**
 * Internal links block. Only routes that exist; Europe country pages are
 * reached through in-page anchors until their pages are built.
 */
export const internalLinks: { label: string; href: string }[] = [
  { label: "All Travel Packages", href: "/packages" },
  { label: "Asia Tour Packages", href: "/packages/international/asia" },
  { label: "Helicopter Tours", href: "/activities/helicopter-tours" },
  { label: "Domestic Mountain Flights", href: "/activities/domestic-flights/mountain-scenic" },
  { label: "Nepal Packages", href: "/packages/nepal/spiritual-adventure-tours" },
  { label: "Kailash Mansarovar Yatra", href: "/packages/kailash-mansarovar-yatra" },
].filter((l) => LIVE_ROUTES.has(l.href));

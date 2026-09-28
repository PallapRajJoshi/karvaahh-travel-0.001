import type { NavItem } from "./types";

export const SITE_URL = "https://karvaahh.in";
export const PAGE_PATH = "/spiritual-journeys/haridwar-rishikesh-yatra";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

/** All page imagery lives here. See README → Image manifest. */
export const IMG = "/images/spiritual-journeys/haridwar-rishikesh";

/**
 * ENQUIRY INTEGRATION POINT
 * The form POSTs JSON (see EnquiryPayload in EnquiryForm.tsx) to this endpoint.
 * Success is shown ONLY for a 2xx response. Point this at the site's existing
 * enquiry route, or create app/api/enquiry/route.ts. Verify before launch.
 */
export const ENQUIRY_ENDPOINT = "/api/enquiry";

/** Verify these routes exist in the live project before launch. */
export const ROUTES = {
  home: "/",
  spiritualJourneys: "/spiritual-journeys",
  contact: "/contact",
} as const;

export const BREADCRUMB_TRAIL: ReadonlyArray<{ name: string; href: string | null }> = [
  { name: "Home", href: ROUTES.home },
  { name: "Spiritual Journeys", href: ROUTES.spiritualJourneys },
  { name: "Haridwar & Rishikesh Yatra", href: null },
];

/** Section anchors — single source of truth for nav, CTAs and JSON-LD. */
export const SECTION = {
  intro: "about-the-yatra",
  overview: "yatra-overview",
  destinations: "explore-sacred-destinations",
  experiences: "sacred-experiences",
  itinerary: "suggested-itinerary",
  stays: "stays-and-travel",
  inclusions: "package-inclusions",
  exclusions: "package-exclusions",
  bestTime: "best-time-to-visit",
  tips: "travel-tips",
  travellers: "who-should-go",
  faq: "faqs",
  enquire: "enquire",
  related: "more-spiritual-journeys",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: SECTION.intro, label: "About" },
  { id: SECTION.destinations, label: "Destinations" },
  { id: SECTION.experiences, label: "Experiences" },
  { id: SECTION.itinerary, label: "Itinerary" },
  { id: SECTION.inclusions, label: "Inclusions" },
  { id: SECTION.bestTime, label: "Best time" },
  { id: SECTION.tips, label: "Travel tips" },
  { id: SECTION.faq, label: "FAQs" },
  { id: SECTION.enquire, label: "Enquire" },
];

export const HERO_IMAGE = {
  src: `${IMG}/hero-har-ki-pauri-ganga-aarti.webp`,
  alt: "Evening Ganga Aarti at Har Ki Pauri, Haridwar, with lamps raised over the river and devotees along the ghat steps",
};

export const INTRO_IMAGE = {
  src: `${IMG}/intro-rishikesh-ganga-foothills.webp`,
  alt: "The River Ganga flowing through Rishikesh between forested Himalayan foothills, with ashrams along the banks",
};

export const OG_IMAGE = {
  src: `${IMG}/og-haridwar-rishikesh-yatra.jpg`,
  alt: "Ganga Aarti at Har Ki Pauri, Haridwar — Haridwar & Rishikesh Spiritual Yatra by Karvaahh",
  width: 1200,
  height: 630,
};

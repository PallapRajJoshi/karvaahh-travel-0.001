import type { BreadcrumbItem, LinkTarget, SectionConfig } from "../types";
import { images } from "../data/images";

/**
 * Page-level configuration: URLs, links, section order/visibility,
 * hero + CTA copy and SEO strings. Content-heavy lists live in /data.
 */

/* ------------------------------------------------------------------ */
/* Site + routes                                                       */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Karvaahh",
  tagline: "Live to Travel",
  url: "https://karvaahh.in",
  path: "/packages/nepal/spiritual-adventure-tours",
} as const;

export const pageUrl = `${site.url}${site.path}`;

/**
 * Every outbound link on the page is defined here, once.
 * ⚠ Verify these routes exist on the live site before deploying (see README).
 */
export const links = {
  home: "/",
  packagesHub: "/packages",
  nepalPackages: "/packages/nepal",
  /** Enquiry / contact page. Package + intent are passed as query params. */
  enquiry: "/contact",
  contact: "/contact",
  spiritualJourneys: "/spiritual-journeys",
} as const;

/** Builds an enquiry URL that tells the sales team what the visitor was looking at. */
export function enquiryHref(params: { package?: string; intent?: "quote" | "custom" | "general" } = {}) {
  const query = new URLSearchParams({ source: "nepal-spiritual-adventure" });
  if (params.intent) query.set("intent", params.intent);
  if (params.package) query.set("package", params.package);
  return `${links.enquiry}?${query.toString()}`;
}

/* ------------------------------------------------------------------ */
/* Sections — reorder, hide or rename here                             */
/* ------------------------------------------------------------------ */

/**
 * The page renders these in order. Set `enabled: false` to hide a section;
 * move an entry to reorder. The sticky in-page nav is built from the same
 * list, so it always matches what's on the page.
 * Hero and breadcrumbs are fixed at the top and not part of this list.
 */
export const sections: SectionConfig[] = [
  { id: "overview", enabled: true, navLabel: "Overview" },
  { id: "sacred", enabled: true, navLabel: "Sacred Sites" },
  { id: "adventures", enabled: true, navLabel: "Adventures" },
  { id: "culture", enabled: true, navLabel: "Culture" },
  { id: "packages", enabled: true, navLabel: "Packages" },
  { id: "why", enabled: true },
  { id: "seasons", enabled: true, navLabel: "When to Go" },
  { id: "plan", enabled: true, navLabel: "Plan" },
  { id: "faq", enabled: true, navLabel: "FAQ" },
  { id: "cta", enabled: true },
];

/** Anchor ids used on the page. Kept stable so external links to #packages etc. keep working. */
export const anchorFor: Record<SectionConfig["id"], string> = {
  overview: "overview",
  sacred: "sacred-destinations",
  adventures: "himalayan-adventures",
  culture: "culture",
  packages: "packages",
  why: "why-karvaahh",
  seasons: "best-time-to-visit",
  plan: "plan-your-journey",
  faq: "faq",
  cta: "start-planning",
};

/* ------------------------------------------------------------------ */
/* Breadcrumbs                                                         */
/* ------------------------------------------------------------------ */

export const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: links.home },
  { label: "Packages", href: links.packagesHub },
  { label: "Nepal", href: links.nepalPackages },
  { label: "Spiritual & Adventure Tours" },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Spiritual & Adventure Tours",
  title: "Discover the Divine Beauty of Nepal",
  subtitle: "Sacred Journeys. Himalayan Adventures. Unforgettable Memories.",
  image: images.hero.main,
  primaryCta: { label: "Explore Nepal Tours", href: `#${anchorFor.packages}` } satisfies LinkTarget,
  secondaryCta: {
    label: "Customize Your Journey",
    href: enquiryHref({ intent: "custom" }),
  } satisfies LinkTarget,
  /** Quiet facts under the CTAs. Keep them verifiable. */
  facts: ["Hindu & Buddhist pilgrimage", "Himalayan treks", "Tailor-made itineraries"],
  scrollLabel: "Scroll to discover",
} as const;

/* ------------------------------------------------------------------ */
/* Overview                                                            */
/* ------------------------------------------------------------------ */

export const overview = {
  eyebrow: "Nepal, Sacred & Wild",
  title: "A Journey Beyond the Ordinary",
  body:
    "Discover the divine beauty of Nepal through an unforgettable journey blending sacred pilgrimages, Himalayan adventures, ancient heritage, and breathtaking natural landscapes. From the holy darshan of Pashupatinath, Muktinath, and Janaki Mandir to the spiritual serenity of Lumbini and Gosainkunda, experience Nepal’s rich Hindu and Buddhist traditions. Explore ancient monasteries, sacred lakes, traditional mountain villages, and scenic Himalayan trails while enjoying panoramic views of snow-capped peaks, peaceful valleys, and pristine rivers. Whether seeking spiritual blessings, cultural discovery, trekking adventures, or peaceful moments in nature, Nepal offers a meaningful journey for every traveler, with customizable tours, comfortable stays, and memorable experiences across its sacred and adventurous destinations.",
  pillars: [
    { label: "Sacred", text: "Temples, stupas & holy lakes" },
    { label: "Himalayan", text: "Treks from gentle to high-altitude" },
    { label: "Personal", text: "Every itinerary built around you" },
  ],
  cta: { label: "Plan My Nepal Journey", href: enquiryHref({ intent: "custom" }) } satisfies LinkTarget,
  secondaryCta: { label: "See sacred destinations", href: `#${anchorFor.sacred}` } satisfies LinkTarget,
  imageMain: images.overview.main,
  imageInset: images.overview.inset,
  insetCaption: "Prayer flags above the valley",
} as const;

/* ------------------------------------------------------------------ */
/* Section headings (copy lives here, lists live in /data)             */
/* ------------------------------------------------------------------ */

export const headings = {
  sacred: {
    eyebrow: "Pilgrimage & Heritage",
    title: "Explore Nepal’s Sacred Destinations",
    subtitle:
      "Discover sacred temples, holy lakes, ancient monasteries, and places of profound spiritual significance.",
  },
  adventures: {
    eyebrow: "Trekking & Exploration",
    title: "Adventure Meets the Himalayas",
    subtitle: "Experience Nepal’s magnificent mountain landscapes through unforgettable adventures.",
    note:
      "Durations and altitudes are typical ranges and vary with route and pace. Most trekking regions currently require a licensed guide for foreign trekkers; permit rules change, so we confirm current requirements when you book.",
  },
  culture: {
    eyebrow: "Living Traditions",
    title: "Experience the Soul of Nepal",
    subtitle:
      "Beyond the landmarks: rituals, monasteries, village hospitality and the quiet hours that make a journey meaningful.",
  },
  packages: {
    eyebrow: "Curated Journeys",
    title: "Discover Our Nepal Tour Packages",
    subtitle: "Find a journey that matches your interests, travel style, and schedule.",
    note:
      "Every package is tailored, so durations are indicative. Share your dates and group size and we’ll send an itinerary and quote.",
  },
  why: {
    eyebrow: "Travel with Karvaahh",
    title: "Why Travel to Nepal with Karvaahh?",
    subtitle: "What makes a Nepal journey feel effortless and meaningful.",
  },
  seasons: {
    eyebrow: "Seasons",
    title: "Choose the Perfect Season for Your Journey",
    subtitle: "Nepal is a year-round destination, but each season shapes the experience.",
    note:
      "Trekking conditions, weather, road access and pilgrimage accessibility vary by destination and altitude. Check conditions before you travel — we’ll advise on your specific route.",
  },
  plan: {
    eyebrow: "Essentials",
    title: "Plan Your Nepal Journey",
    subtitle: "The practical details, gathered in one place.",
  },
  faq: {
    eyebrow: "Questions",
    title: "Frequently Asked Questions",
    subtitle: "Can’t find your answer? Our team is happy to help.",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */

export const finalCta = {
  title: "Your Journey to Nepal Begins Here",
  subtitle:
    "Discover sacred destinations, explore breathtaking Himalayan landscapes, and create memories that last a lifetime.",
  image: images.cta.main,
  buttons: [
    { label: "Explore Tour Packages", href: `#${anchorFor.packages}` },
    { label: "Customize Your Trip", href: enquiryHref({ intent: "custom" }) },
    { label: "Contact Karvaahh", href: links.contact },
  ] satisfies LinkTarget[],
  brand: `${site.name} – ${site.tagline}`,
} as const;

/* ------------------------------------------------------------------ */
/* SEO                                                                 */
/* ------------------------------------------------------------------ */

export const seo = {
  title: "Nepal Spiritual & Adventure Tours | Sacred Pilgrimage & Himalayan Adventures – Karvaahh",
  description:
    "Discover Nepal’s sacred temples, Muktinath, Lumbini, Gosainkunda, and breathtaking Himalayan adventures with Karvaahh. Explore spiritual journeys, cultural experiences, and customized Nepal tour packages.",
  ogImage: images.social.og,
  /** Set to false to omit FAQPage JSON-LD (see README: FAQ rich results are limited). */
  faqStructuredData: true,
} as const;

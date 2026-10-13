/**
 * Page-level configuration for /packages/nepal/base-camp-treks:
 * URLs, anchors and SEO strings. Content lists live in /data.
 */

export const site = {
  name: "Karvaahh",
  tagline: "Live to Travel",
  url: "https://karvaahh.in",
  path: "/packages/nepal/base-camp-treks",
} as const;

export const pageUrl = `${site.url}${site.path}`;

/** In-page anchors. Kept stable so links to #treks, #packages etc. keep working. */
export const anchors = {
  treks: "base-camp-treks",
  highlights: "highlights",
  compare: "compare-treks",
  packages: "packages",
  guide: "preparation-guide",
  itinerary: "itineraries",
  faq: "faq",
} as const;

export const sectionNav = [
  { anchor: anchors.treks, label: "Treks" },
  { anchor: anchors.compare, label: "Compare" },
  { anchor: anchors.packages, label: "Packages" },
  { anchor: anchors.guide, label: "Prepare" },
  { anchor: anchors.itinerary, label: "Itineraries" },
  { anchor: anchors.faq, label: "FAQ" },
];

/**
 * Enquiry link pre-filled through the contact page's existing deep-link support
 * (lib/contact/prefill.ts reads `type` and `destination`).
 */
export function enquiryHref(destination?: string) {
  const query = new URLSearchParams({ type: "adventure-trekking" });
  if (destination) query.set("destination", destination);
  return `/contact?${query.toString()}`;
}

export const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  // No /packages/nepal index page exists yet, so this crumb is not a link.
  { label: "Nepal" },
  { label: "Base Camp Treks" },
];

export const seo = {
  title: "Nepal Base Camp Treks | Everest, Annapurna, Makalu & More – Karvaahh",
  description:
    "Compare Nepal’s base camp treks — Everest, Annapurna, Mardi Himal, Makalu, Kanchenjunga, Manaslu and Dhaulagiri. Typical durations, altitudes, seasons, preparation tips and tailor-made trekking packages with Karvaahh.",
  ogImage: {
    src: "/koshi/everest-base-camp.jpg",
    alt: "Everest, Nuptse and the Khumbu Glacier at dawn",
  },
} as const;

/**
 * Anchor offset so a section heading lands below the sticky site header
 * (measured: 93px mobile / 137px md+ when scrolled) plus the sticky tour
 * navigation (57px).
 */
export const ANCHOR = "scroll-mt-[156px] md:scroll-mt-[200px]";

export type NavItem = { id: string; label: string };

/** Sticky tour navigation: every possible section id, in page order. */
export const TOUR_NAV: NavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "highlights", label: "Highlights" },
  { id: "itinerary", label: "Itinerary" },
  { id: "route", label: "Route" },
  { id: "gallery", label: "Gallery" },
  { id: "inclusions", label: "Inclusions" },
  { id: "documents", label: "Documents" },
  { id: "preparation", label: "Preparation" },
  { id: "safety", label: "Safety" },
  { id: "faqs", label: "FAQs" },
  { id: "book", label: "Book / Enquire" },
];

/** The gallery is shown only once a tour has at least this many real photos. */
export const MIN_GALLERY_PHOTOS = 3;

export const SECTION_Y = "py-20 sm:py-24 lg:py-28";

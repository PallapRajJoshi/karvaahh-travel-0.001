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
  { id: "dhams", label: "The Dhams" },
  { id: "peaks", label: "Peaks" },
  { id: "route", label: "Route" },
  { id: "journey", label: "Journey" },
  { id: "itinerary", label: "Itinerary" },
  { id: "dates", label: "Dates" },
  { id: "inclusions", label: "Inclusions" },
  { id: "safety", label: "Before You Fly" },
  { id: "gallery", label: "Gallery" },
  { id: "faqs", label: "FAQs" },
  { id: "book", label: "Book / Enquire" },
];

/** The gallery is shown only once a tour has at least this many real photos. */
export const MIN_GALLERY_PHOTOS = 3;

export const SECTION_Y = "py-20 sm:py-24 lg:py-28";

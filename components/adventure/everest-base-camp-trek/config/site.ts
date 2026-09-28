/**
 * Page-level configuration: route, SEO, hero copy, CTAs, in-page navigation,
 * quick facts and section visibility/order. Edit here — not in components.
 */
import type { CtaLink, QuickFact, SectionId } from "../types";

export const IMG = "/images/destinations/everest-base-camp";

export const ebcSite = {
  siteUrl: "https://karvaahh.in",
  route: "/adventure/everest-base-camp-trek",
  brand: "Karvaahh",
  tagline: "Karvaahh – Live to Travel",

  seo: {
    title: "Everest Base Camp Trek | Himalayan Adventure in Nepal – Karvaahh",
    description:
      "Experience the Everest Base Camp Trek with Karvaahh. Explore Namche Bazaar, Tengboche, Everest Base Camp, Kala Patthar, and the breathtaking Khumbu Himalayas through customized trekking packages.",
    ogImage: `${IMG}/hero/everest-khumbu-panorama.jpg`,
    keywords: [
      "Everest Base Camp Trek",
      "EBC trek",
      "Kala Patthar",
      "Namche Bazaar",
      "Tengboche Monastery",
      "Khumbu trek",
      "Nepal trekking packages",
    ],
  },

  /**
   * Link targets. Several are INFERRED — verify they exist in the live project
   * before launch (see README → "Link targets to verify").
   */
  links: {
    home: "/",
    adventure: "/adventure",
    contact: "/contact",
    customize: "/contact?enquiry=everest-base-camp-trek",
    packagesAnchor: "#packages",
  },

  hero: {
    eyebrow: "Nepal Himalayan Adventure",
    title: "Everest Base Camp Trek",
    subtitle: "Journey to the Foot of the World's Highest Mountain",
    text: "Explore the legendary Khumbu region, discover Sherpa culture, and trek through spectacular Himalayan landscapes to Everest Base Camp.",
    image: {
      src: `${IMG}/hero/everest-khumbu-panorama.jpg`,
      alt: "Snow-covered Himalayan peaks of the Khumbu region rising above a glacial valley at first light",
      position: "50% 40%",
    },
    ctas: [
      { label: "Explore Trek Packages", href: "#packages", variant: "primary" },
      { label: "Customize Your Trek", href: "/contact?enquiry=everest-base-camp-trek", variant: "secondary" },
    ] satisfies CtaLink[],
  },

  /** Facts shown in the hero strip. Elevations are the commonly cited figures. */
  quickFacts: [
    { label: "Region", value: "Khumbu, Nepal" },
    { label: "Base Camp", value: "≈ 5,364 m" },
    { label: "Highest point", value: "Kala Patthar ≈ 5,545 m" },
    { label: "Typical duration", value: "12–16 days" },
    { label: "Grade", value: "Strenuous, high altitude" },
  ] satisfies QuickFact[],

  /** Sticky in-page navigation. Only links to sections that are enabled are rendered. */
  subnav: [
    { id: "overview", label: "Overview" },
    { id: "destinations", label: "Highlights" },
    { id: "packages", label: "Packages" },
    { id: "itinerary", label: "Itinerary" },
    { id: "seasons", label: "Best Time" },
    { id: "preparation", label: "Prepare" },
    { id: "faq", label: "FAQ" },
  ] as { id: SectionId; label: string }[],

  finalCta: {
    title: "Begin Your Journey to Everest Base Camp",
    subtitle:
      "Explore legendary Sherpa villages, discover the breathtaking beauty of the Khumbu Himalayas, and experience the unforgettable adventure of trekking to Everest Base Camp.",
    image: {
      src: `${IMG}/hero/ama-dablam-dusk.jpg`,
      alt: "Ama Dablam's sharp summit glowing at dusk above the Khumbu valley",
      position: "50% 35%",
    },
    ctas: [
      { label: "Explore Trek Packages", href: "#packages", variant: "primary" },
      { label: "Customize Your Trek", href: "/contact?enquiry=everest-base-camp-trek", variant: "secondary" },
      { label: "Contact Karvaahh", href: "/contact", variant: "ghost" },
    ] satisfies CtaLink[],
  },

  /** Related internal pages (verify slugs before launch). */
  related: [
    { label: "Adventure in Nepal", href: "/adventure" },
    { label: "Camping in Nepal", href: "/activities/adventure/camping" },
    { label: "Paragliding in Nepal", href: "/activities/adventure/paragliding" },
    { label: "Koshi Province", href: "/destinations/koshi-province" },
  ],
} as const;

/**
 * Section order and visibility. Reorder the array to reorder the page;
 * set `enabled: false` to hide a section without deleting code.
 */
export const ebcSections: { id: SectionId; enabled: boolean }[] = [
  { id: "hero", enabled: true },
  { id: "breadcrumb", enabled: true },
  { id: "subnav", enabled: true },
  { id: "overview", enabled: true },
  { id: "destinations", enabled: true },
  { id: "experience", enabled: true },
  { id: "culture", enabled: true },
  { id: "packages", enabled: true },
  { id: "itinerary", enabled: true },
  { id: "basecamp", enabled: true },
  { id: "gallery", enabled: true },
  { id: "why", enabled: true },
  { id: "seasons", enabled: true },
  { id: "preparation", enabled: true },
  { id: "faq", enabled: true },
  { id: "final-cta", enabled: true },
];

export const isSectionEnabled = (id: SectionId) => ebcSections.some((s) => s.id === id && s.enabled);

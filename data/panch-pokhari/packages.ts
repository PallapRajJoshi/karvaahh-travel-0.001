export type TravelPackage = {
  id: string;
  title: string;
  description: string;
  travelerType: string;
  /** Only rendered when a verified value is supplied — left undefined for now */
  duration?: string;
  ctaLabel: string;
  ctaHref: string;
};

/**
 * Package categories are drawn directly from the brief. No prices,
 * durations, accommodation names, or confirmed inclusions have been
 * invented — the brief is explicit that these must come from verified
 * Karvaahh data before publishing. Contact fallback copy is shown instead.
 */
export const travelPackages: TravelPackage[] = [
  {
    id: "panch-pokhari-trek",
    title: "Panch Pokhari Trek",
    description:
      "A multi-day trekking experience focused on the sacred lakes and Himalayan scenery.",
    travelerType: "Trekkers and adventure travelers",
    ctaLabel: "Customize Your Journey",
    ctaHref: "/contact?trip=panch-pokhari-trek",
  },
  {
    id: "panch-pokhari-spiritual-journey",
    title: "Panch Pokhari Spiritual Journey",
    description:
      "A pilgrimage-focused journey centered on the sacred lakes and cultural traditions.",
    travelerType: "Pilgrims and spiritual travelers",
    ctaLabel: "Customize Your Journey",
    ctaHref: "/contact?trip=panch-pokhari-spiritual-journey",
  },
  {
    id: "customized-panch-pokhari-adventure",
    title: "Customized Panch Pokhari Adventure",
    description:
      "A personalized itinerary with flexible pacing and suitable arrangements.",
    travelerType: "Independent and custom-itinerary travelers",
    ctaLabel: "Customize Your Journey",
    ctaHref: "/contact?trip=panch-pokhari-custom",
  },
  {
    id: "panch-pokhari-sindhupalchok-exploration",
    title: "Panch Pokhari & Sindhupalchok Exploration",
    description:
      "A broader regional journey incorporating verified nearby destinations.",
    travelerType: "Travelers wanting a wider regional itinerary",
    ctaLabel: "Customize Your Journey",
    ctaHref: "/contact?trip=panch-pokhari-sindhupalchok",
  },
];

export const packageFallbackNote =
  "Contact us for a customized itinerary and current pricing.";

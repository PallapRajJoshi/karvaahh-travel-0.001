// data/australia/collections.ts
// Honeymoon, Family and Luxury collections. Packages are picked by id from
// ./packages.ts; destinations by id from ./destinations.ts.

import type { AUImageId } from "./images";

export interface HotelCategory {
  id: string;
  label: string;
  text: string;
  expect: string[];
}

export interface AustraliaCollection {
  id: "honeymoon" | "family" | "luxury";
  eyebrow: string;
  title: string;
  intro: string;
  image: AUImageId;
  secondaryImage?: AUImageId;
  destinations: string[];
  /** Feature list ("what makes it a honeymoon"). */
  features: { title: string; text: string }[];
  packageIds: string[];
  packagesTitle: string;
  tone: "rose" | "sand" | "noir";
  /** Configurable hotel categories (luxury). */
  hotelCategories?: HotelCategory[];
  note?: string;
}

export const honeymoonCollection: AustraliaCollection = {
  id: "honeymoon",
  eyebrow: "Australia honeymoon",
  title: "Romance, Australian Style",
  intro:
    "Harbour sunsets in Sydney, a private boat on the reef, island resorts in the Whitsundays and fireplaces in Tasmania's wilderness. We design every honeymoon around the two of you.",
  image: "couple",
  secondaryImage: "heart-reef",
  destinations: ["sydney", "gold-coast", "whitsundays", "great-barrier-reef", "melbourne", "freycinet", "perth", "hamilton-island"],
  features: [
    { title: "Private reef cruises", text: "Small-group or private charters to the reef, on request." },
    { title: "Sunset cruises", text: "Sydney Harbour, Whitsunday sails or Broome's Cable Beach at dusk." },
    { title: "Island stays", text: "Hamilton Island and Whitsunday resorts with reef on the doorstep." },
    { title: "Scenic drives", text: "The Great Ocean Road or Tasmania's east coast, with a driver if you prefer." },
    { title: "Premium hotels", text: "Harbour views, boutique lodges and adults-focused resorts." },
    { title: "Private transfers", text: "A driver at each arrival: no queues, no shuttles." },
  ],
  packageIds: ["syd-gc-honeymoon-6n", "mel-gor-honeymoon-7n", "cns-whit-honeymoon-7n", "syd-cns-8n", "syd-gc-cns-9n", "au-lux-honeymoon-10n", "gbr-honeymoon", "tas-honeymoon"],
  packagesTitle: "Australia honeymoon packages",
  tone: "rose",
};

export const familyCollection: AustraliaCollection = {
  id: "family",
  eyebrow: "Family Australia",
  title: "Big Adventures, Easy Pace",
  intro: "Beaches, wildlife, theme parks and the reef, planned so that children, parents and grandparents all enjoy the trip.",
  image: "family",
  secondaryImage: "kangaroo",
  destinations: ["sydney", "gold-coast", "melbourne", "cairns", "great-barrier-reef", "hobart"],
  features: [
    { title: "Manageable itineraries", text: "Fewer hotel changes, short travel days and time to rest." },
    { title: "Family rooms", text: "Connecting rooms, apartments and resorts with kids' facilities." },
    { title: "Theme parks", text: "Gold Coast parks planned by age and height; tickets added on request." },
    { title: "Wildlife", text: "Kangaroos, koalas and penguins at accredited sanctuaries and parks." },
    { title: "Beaches", text: "Patrolled beaches between the flags, with surf-school options." },
    { title: "Interactive attractions", text: "Aquariums, science centres and glass-bottom boats for non-swimmers." },
  ],
  packageIds: ["syd-gc-family-7n", "mel-gc-family-8n", "syd-gc-cns-9n", "au-family-10n", "qld-family", "syd-family"],
  packagesTitle: "Australia family packages",
  tone: "sand",
  note: "Theme-park, zoo and attraction tickets are separate unless explicitly included in your package.",
};

export const luxuryCollection: AustraliaCollection = {
  id: "luxury",
  eyebrow: "Australia luxury",
  title: "Australia, Privately Yours",
  intro:
    "Harbour-view suites, private yachts, island resorts, scenic flights over the reef and luxury lodges in the wilderness and the outback, with a private driver or guide wherever you want one.",
  image: "sydney-night",
  secondaryImage: "seaplane",
  destinations: ["sydney", "whitsundays", "hamilton-island", "great-barrier-reef", "margaret-river", "freycinet", "uluru"],
  features: [
    { title: "Sydney Harbour hotels", text: "Rooms that look straight across to the Opera House and Bridge." },
    { title: "Private yacht & harbour experiences", text: "Charters for sunset, dinner or a day on the water, on request." },
    { title: "Whitsunday luxury resorts", text: "Including Hamilton Island, with reef and Whitehaven close by." },
    { title: "Reef scenic flights", text: "Helicopter or seaplane over Heart Reef, where operating." },
    { title: "Luxury lodges", text: "Wilderness and coastal lodges in Tasmania, Kangaroo Island and Margaret River." },
    { title: "Private outback experiences", text: "Desert dining, private guiding and stargazing at Uluru, on request." },
  ],
  packageIds: ["au-luxury", "syd-luxury", "sa-luxury", "au-lux-honeymoon-10n", "whit-reef-7n"],
  packagesTitle: "Australia luxury packages",
  tone: "noir",
  hotelCategories: [
    { id: "4-star", label: "4-Star", text: "Comfortable, well-located hotels with reliable service: the best value for most itineraries.", expect: ["Central locations", "Modern rooms", "Breakfast options", "Family rooms where available"] },
    { id: "5-star", label: "5-Star", text: "International five-star hotels in the best addresses, including harbour views in Sydney.", expect: ["Premium locations & views", "Club or upgraded rooms on request", "Spa & fine dining", "Concierge service"] },
    { id: "boutique", label: "Boutique", text: "Smaller, characterful stays: design hotels, heritage buildings and vineyard retreats.", expect: ["Distinctive design", "Personal service", "Local food & wine", "Great for couples"] },
    { id: "luxury-resort", label: "Luxury Resort", text: "Island, rainforest and outback resorts where the setting is the experience.", expect: ["Island & reef access", "Pools & spa", "Curated experiences", "Ideal for honeymoons"] },
  ],
};

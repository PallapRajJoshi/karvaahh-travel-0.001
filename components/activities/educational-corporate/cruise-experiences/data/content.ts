import type { Category, Destination, Experience } from "./types";

export const HERO_IMAGE = {
  file: "hero-cruise-golden-hour.jpg",
  alt: "A luxury cruise ship sailing across deep blue ocean waters at golden hour",
  placeholderLabel: "Hero — luxury cruise ship at golden hour",
};

export const INTRO_IMAGE = {
  file: "intro-cruise-scenic.jpg",
  alt: "A cruise ship sailing through a scenic coastal destination",
  placeholderLabel: "Intro — cruise ship in scenic waters",
};

export const SIGNATURE_IMAGE = {
  file: "signature-onboard.jpg",
  alt: "Guests relaxing on the deck of a cruise vessel at sunset",
  placeholderLabel: "Signature — onboard deck at sunset",
};

export const FINAL_IMAGE = {
  file: "final-sunset-cruise.jpg",
  alt: "A cruise vessel silhouetted against a sunset sky over open water",
  placeholderLabel: "Final CTA — sunset cruise",
};

export const CATEGORIES: Category[] = [
  {
    id: "ocean",
    title: "Luxury Ocean Cruises",
    description:
      "Experience expansive ocean horizons, premium onboard hospitality, elegant dining, entertainment, and unforgettable journeys across international coastlines.",
    cruiseType: "Luxury Ocean Cruise",
    image: {
      file: "category-ocean.jpg",
      alt: "A luxury cruise ship sailing across a deep blue ocean",
      placeholderLabel: "Luxury cruise ship on open ocean",
    },
  },
  {
    id: "sunset",
    title: "Romantic Sunset Sailing",
    description:
      "Enjoy intimate sailing experiences with golden sunsets, calm waters, beautiful coastlines, and memorable moments for couples and honeymooners.",
    cruiseType: "Sunset Sailing",
    image: {
      file: "category-sunset-sailing.jpg",
      alt: "A sailboat on a sunset-lit sea",
      placeholderLabel: "Sailboat on a sunset sea",
    },
  },
  {
    id: "river",
    title: "River Cruises",
    description:
      "Discover cultural landscapes, historic riverfronts, peaceful waterways, and scenic destinations through relaxing river journeys.",
    cruiseType: "River Cruise",
    image: {
      file: "category-river.jpg",
      alt: "A passenger cruise boat travelling along a scenic river",
      placeholderLabel: "Passenger boat on a scenic river",
    },
  },
  {
    id: "island",
    title: "Island-Hopping Cruises",
    description:
      "Explore beautiful islands, hidden bays, turquoise waters, and coastal communities through a journey filled with exploration and relaxation.",
    cruiseType: "Island-Hopping Cruise",
    image: {
      file: "category-island-hopping.jpg",
      alt: "A small cruise vessel surrounded by tropical islands",
      placeholderLabel: "Small vessel among tropical islands",
    },
  },
  {
    id: "lake",
    title: "Scenic Lake Cruises",
    description:
      "Enjoy peaceful lake journeys surrounded by mountains, forested shores, and tranquil natural landscapes.",
    cruiseType: "Lake Cruise",
    image: {
      file: "category-lake-phewa.jpg",
      alt: "A sightseeing boat on Phewa Lake in Pokhara",
      placeholderLabel: "Sightseeing boat on Phewa Lake",
    },
  },
  {
    id: "harbour",
    title: "Coastal and Harbour Cruises",
    description:
      "Discover iconic skylines, vibrant waterfronts, coastal architecture, and spectacular city views from the water.",
    cruiseType: "Coastal and Harbour Cruise",
    image: {
      file: "category-harbour.jpg",
      alt: "A luxury boat sailing along a marina with a city skyline behind",
      placeholderLabel: "Boat on a marina or Mediterranean harbour",
    },
  },
];

export const DESTINATIONS: Destination[] = [
  {
    id: "ha-long-bay",
    name: "Ha Long Bay",
    region: "Vietnam",
    heading: "A Journey Through Emerald Waters",
    description:
      "Towering limestone karsts, emerald waters and peaceful bays, explored on scenic overnight cruises.",
    signature: "Overnight cruising among limestone islands",
    bestFor: "Couples, families and leisure travelers",
    highlights: [
      "Scenic cruising through limestone formations",
      "Kayaking and water activities where offered",
      "Sunset views from the vessel",
      "Onboard dining and cultural experiences",
      "Island and cave excursions where available",
    ],
    formValue: "Ha Long Bay, Vietnam",
    image: {
      file: "dest-ha-long-bay.jpg",
      alt: "Traditional-style cruise boats sailing between limestone islands in Ha Long Bay",
      placeholderLabel: "Ha Long Bay — boats among limestone islands",
    },
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Backwaters",
    region: "India",
    heading: "Serenity Along the Backwaters",
    description:
      "Tranquil waterways, lush landscapes and palm-lined shores, best known for traditional houseboat journeys.",
    signature: "Houseboat journey through quiet canals",
    bestFor: "Couples, honeymooners and slow-travel seekers",
    highlights: [
      "Houseboat journeys through peaceful canals",
      "Traditional Kerala cuisine where offered",
      "Village and waterfront scenery",
      "Relaxation and nature photography",
      "Cultural exploration along the backwaters",
    ],
    formValue: "Kerala Backwaters, India",
    vesselNote:
      "Houseboats are a distinct experience from ocean or river cruise ships.",
    image: {
      file: "dest-kerala-backwaters.jpg",
      alt: "A traditional Kerala houseboat among coconut palms and green waterways",
      placeholderLabel: "Kerala — houseboat among coconut palms",
    },
  },
  {
    id: "ganges",
    name: "Ganges River",
    region: "India",
    heading: "A Cultural Journey Along the Sacred River",
    description:
      "River journeys and sightseeing with a focus on cultural heritage, riverside landscapes and spiritual traditions.",
    signature: "Riverfront sightseeing by boat near historic ghats",
    bestFor: "Cultural and heritage travelers",
    highlights: [
      "Scenic river journeys where available",
      "Historic riverfront architecture",
      "Cultural and heritage exploration",
      "Riverside sunrise and sunset views",
      "Local experiences and guided sightseeing where offered",
    ],
    formValue: "Ganges River, India",
    vesselNote:
      "Experiences differ by stretch of river and operator; not every section offers the same service.",
    image: {
      file: "dest-ganges.jpg",
      alt: "A boat on the Ganges with historic ghats in the background",
      placeholderLabel: "Ganges — boat with historic ghats",
    },
  },
  {
    id: "mediterranean",
    name: "Mediterranean Coastline",
    region: "Southern Europe & beyond",
    heading: "Discover the Mediterranean by Sea",
    description:
      "Coastal cities, historic harbours, island landscapes and scenic ocean voyages across the Mediterranean region.",
    signature: "Port-to-port coastal sightseeing",
    bestFor: "Couples, families and leisure travelers",
    highlights: [
      "Coastal sightseeing",
      "Historic port cities",
      "Island and beach excursions",
      "Mediterranean dining experiences",
      "Scenic sea views and onboard relaxation",
    ],
    formValue: "Mediterranean Coastline",
    image: {
      file: "dest-mediterranean.jpg",
      alt: "A cruise ship near a Mediterranean coastal town with colourful waterfront buildings",
      placeholderLabel: "Mediterranean — ship near a coastal town",
    },
  },
  {
    id: "dubai",
    name: "Dubai",
    region: "United Arab Emirates",
    heading: "Modern Luxury on Iconic Waters",
    description:
      "Waterfront skyline views, marina cruises, yacht experiences and evening sightseeing journeys.",
    signature: "Dubai Marina evening cruise",
    bestFor: "Couples, groups and city-break travelers",
    highlights: [
      "Dubai Marina sightseeing cruises",
      "Sunset and evening cruises",
      "Skyline and waterfront photography",
      "Onboard dining where offered",
      "Private yacht experiences where available",
    ],
    formValue: "Dubai, UAE",
    image: {
      file: "dest-dubai.jpg",
      alt: "A luxury yacht near Dubai Marina with the illuminated skyline",
      placeholderLabel: "Dubai — yacht near the illuminated marina",
    },
  },
  {
    id: "pokhara",
    name: "Pokhara",
    region: "Nepal",
    heading: "Peaceful Lake Journeys Beneath the Himalayas",
    description:
      "Tranquil boating on Phewa Lake with hill and mountain scenery and relaxed lakeside exploration.",
    signature: "Traditional boat ride on Phewa Lake",
    bestFor: "Families, couples and nature lovers",
    highlights: [
      "Scenic boating on Phewa Lake",
      "Views of the surrounding hills and Himalayan landscapes when visible",
      "Lakeside sightseeing",
      "Photography and relaxation",
      "Cultural visits around the lake where relevant",
    ],
    formValue: "Pokhara, Nepal",
    vesselNote:
      "Local sightseeing boats on the lake are a different experience from a luxury cruise ship. Mountain views depend on weather.",
    image: {
      file: "dest-pokhara-phewa.jpg",
      alt: "A traditional wooden boat on Phewa Lake with the Annapurna range beyond",
      placeholderLabel: "Pokhara — wooden boat on Phewa Lake",
    },
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "dining",
    title: "Onboard Dining",
    description:
      "Discover culinary experiences ranging from local specialties to international dining, depending on the cruise.",
    icon: "dining",
  },
  {
    id: "culture",
    title: "Cultural Performances",
    description:
      "Experience regional music, cultural shows, and onboard entertainment where offered.",
    icon: "culture",
  },
  {
    id: "wellness",
    title: "Wellness and Relaxation",
    description:
      "Enjoy peaceful surroundings, spa or wellness facilities where available, and time to unwind.",
    icon: "wellness",
  },
  {
    id: "water",
    title: "Water Activities",
    description:
      "Explore activities such as kayaking, swimming, snorkeling, or other water experiences where permitted and offered.",
    icon: "water",
  },
  {
    id: "excursion",
    title: "Shore Excursions",
    description:
      "Discover historic landmarks, local communities, scenic islands, and cultural attractions through excursions.",
    icon: "excursion",
  },
  {
    id: "horizon",
    title: "Sunrise and Sunset Views",
    description:
      "Capture beautiful colors across the horizon and enjoy the changing scenery throughout the journey.",
    icon: "horizon",
  },
];

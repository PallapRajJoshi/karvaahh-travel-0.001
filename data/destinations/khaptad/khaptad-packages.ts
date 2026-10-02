// Khaptad tour package showcase. No fabricated prices, hotel names, or dates —
// each package links to a "View Details" / "Customize Your Trip" flow for real data.

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  description: string;
  keyExperiences: string[];
  travelerProfile: string;
}

export const khaptadPackages: TourPackage[] = [
  {
    id: "nature-escape",
    title: "Khaptad National Park Nature Escape",
    duration: "Customizable, short getaway",
    description: "A focused introduction to Khaptad's alpine meadows and forest trails.",
    keyExperiences: ["Khaptad Patans", "Khaptad Baba Ashram", "Nature walks"],
    travelerProfile: "First-time visitors and nature lovers with limited time",
  },
  {
    id: "spiritual-meditation",
    title: "Khaptad Spiritual & Meditation Journey",
    duration: "Customizable",
    description: "A slower-paced journey centered on Khaptad's spiritual landmarks and meditative surroundings.",
    keyExperiences: ["Khaptad Baba Ashram", "Tribeni Dham", "Sahasralinga", "Meditation"],
    travelerProfile: "Spiritual travelers and those seeking quiet reflection",
  },
  {
    id: "trekking-adventure",
    title: "Khaptad Trekking Adventure",
    duration: "Customizable",
    description: "Trail-focused travel through Khaptad's meadows, ridgelines, and forest landscapes.",
    keyExperiences: ["Forest & meadow trails", "Sahasralinga hike", "Scenic viewpoints"],
    travelerProfile: "Trekkers and offbeat adventure travelers",
  },
  {
    id: "wildlife-photography",
    title: "Khaptad Wildlife & Photography Tour",
    duration: "Customizable",
    description: "A journey built around responsible wildlife observation and landscape photography.",
    keyExperiences: ["Birdwatching", "Wildlife photography", "Landscape photography"],
    travelerProfile: "Photographers and wildlife enthusiasts",
  },
  {
    id: "forest-meadow",
    title: "Khaptad Forest & Meadow Exploration",
    duration: "Customizable",
    description: "An immersive route through Khaptad's oak and rhododendron forests and open Patans.",
    keyExperiences: ["Rhododendron forests", "Khaptad Patans", "Nature walks"],
    travelerProfile: "Nature lovers and slow-travel enthusiasts",
  },
  {
    id: "cultural-journey",
    title: "Khaptad & Far-Western Nepal Cultural Journey",
    duration: "Customizable",
    description: "A journey pairing Khaptad's landscapes with the culture of the surrounding far-western districts.",
    keyExperiences: ["Sacred landmarks", "Local communities", "Regional cultural experiences"],
    travelerProfile: "Cultural travelers and offbeat explorers",
  },
  {
    id: "badimalika-extended",
    title: "Khaptad & Badimalika Extended Adventure",
    duration: "Customizable, extended itinerary",
    description:
      "An extended journey combining Khaptad with Badimalika Temple, subject to verified routes and trekking logistics.",
    keyExperiences: ["Khaptad Patans", "Khaptad Baba Ashram", "Badimalika Temple (route-dependent)"],
    travelerProfile: "Experienced trekkers seeking a longer far-western Nepal journey",
  },
];

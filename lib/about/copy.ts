import type { Pillar, TimelineStep } from "./types";

/** Editable copy for the narrative sections. Supplied wording is kept verbatim. */

export const hero = {
  eyebrow: "About Karvaahh",
  /** Rendered word-by-word; `accent` word is set in italic gold. */
  headingWords: ["Travel", "Beyond", "Destinations"],
  accentWord: "Beyond",
  lead: "Journeys that connect you with places, people, culture and experiences.",
  description:
    "Karvaahh – Live to Travel is a travel company built around one simple belief: travel should be more than reaching a destination. It should become a story you remember for a lifetime.",
  primaryCta: "Explore Our Journeys",
  secondaryCta: "Plan Your Trip",
} as const;

export const intro = {
  eyebrow: "Who We Are",
  title: "Travel Designed Around You",
  paragraphs: [
    "Karvaahh – Live to Travel is a travel and tour company focused on creating meaningful journeys across Nepal, India and international destinations.",
    "From Himalayan adventures and spiritual pilgrimages to family holidays, luxury escapes, corporate travel and customized experiences, we bring together destination knowledge, local expertise and thoughtful planning.",
    "Every journey is designed around the traveler — their time, interests, comfort, budget and reason for travelling.",
  ],
  statement: "Your journey. Your pace. Your story.",
} as const;

export const story = {
  eyebrow: "Our Story",
  title: "How Karvaahh Began",
  paragraphs: [
    "Karvaahh was born from a passion for travel and a deep connection with the destinations of the Himalayas.",
    "With Nepal as our home and the Himalayas as our inspiration, we wanted to create a travel experience that combines local knowledge with professional travel planning.",
    "From helping travelers discover Nepal's hidden landscapes to organizing spiritual journeys, family holidays, adventure trips and customized experiences, Karvaahh continues to grow around one idea — making travel more meaningful.",
  ],
} as const;

export const timeline: TimelineStep[] = [
  { id: "beginning", title: "The Beginning", text: "Born from a passion for travel." },
  { id: "exploring", title: "Exploring Nepal", text: "Building destination knowledge through real journeys and local connections." },
  { id: "beyond", title: "Growing Beyond Borders", text: "Expanding travel experiences across India and international destinations." },
  { id: "building", title: "Building Karvaahh", text: "Creating a modern travel brand focused on personalized experiences." },
  { id: "continues", title: "The Journey Continues", text: "Helping more travelers discover the world." },
];

export const philosophy = {
  eyebrow: "Our Philosophy",
  title: "Live to Travel",
  statementLines: ["Travel is not just about where you go.", "It's about what you feel along the way."],
  text: "At Karvaahh, we believe the best journeys create memories, connections and stories. That's why we look beyond standard itineraries and focus on the complete travel experience.",
} as const;

export const pillars: Pillar[] = [
  { id: "discover", title: "Discover", text: "Explore destinations beyond the obvious and experience their true character." },
  { id: "connect", title: "Connect", text: "Connect with local culture, people, traditions and landscapes." },
  { id: "experience", title: "Experience", text: "Turn every journey into an experience worth remembering." },
];

export const commitment = {
  eyebrow: "Our Commitment",
  title: "Our Commitment to Every Traveler",
  paragraphs: [
    "We believe every traveler deserves clear communication, thoughtful planning and genuine support.",
    "Our commitment is to understand your journey before recommending it — from the places you want to see to the experiences you want to have.",
    "Whether you're travelling for adventure, spirituality, family, celebration, business or simply the joy of discovering somewhere new, we aim to make the journey smooth, meaningful and memorable.",
  ],
  highlightLines: ["Travel with confidence.", "Explore with curiosity.", "Return with memories."],
} as const;

export const finalCta = {
  title: "Where Will Your Story Take You?",
  text: "From the Himalayas to the world, let Karvaahh help you turn your next trip into a journey worth remembering.",
  primaryCta: "Explore Destinations",
  secondaryCta: "Plan My Journey",
} as const;

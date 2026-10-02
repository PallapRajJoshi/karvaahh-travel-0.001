import type { PackageOption } from "./types";

/**
 * Section 15 — Tour packages. No fabricated prices, hotel names, departure
 * dates, or confirmed availability. Per build-practices content rule (Sep
 * 2026 pricing convention on experience directory pages), indicative price
 * bands are NOT added here since this is a destination page, not an
 * experience directory page — kept consistent with the brief's explicit
 * "do not display fabricated prices" instruction. Flag for verification.
 */
export const packages: PackageOption[] = [
  {
    id: "tsho-rolpa-lake-trek",
    title: "Tsho Rolpa Lake Trek",
    duration: "7–9 Days",
    description: "The core Rolwaling Valley trek to the glacial lake, via Bedhing and Na Village.",
    experiences: ["Lakeside exploration", "Village culture", "Mountain photography"],
    travelerProfile: "Experienced trekkers comfortable with high-altitude multi-day trekking",
    technical: false,
  },
  {
    id: "rolwaling-cultural-trek",
    title: "Rolwaling Valley Cultural Trek",
    duration: "5–6 Days",
    description: "A gentler focus on the lower and mid-valley — village life, culture, and landscapes.",
    experiences: ["Sherpa village walks", "Local hospitality", "Valley scenery"],
    travelerProfile: "Travelers seeking culture and scenery without extended high-altitude trekking",
    technical: false,
  },
  {
    id: "nature-photography-journey",
    title: "Tsho Rolpa Nature & Photography Journey",
    duration: "6–8 Days",
    description: "A pace built around light, landscape, and wildlife observation through the valley and lake basin.",
    experiences: ["Golden-hour photography", "Glacial landscapes", "Alpine nature"],
    travelerProfile: "Photographers and nature enthusiasts comfortable with moderate trekking",
    technical: false,
  },
  {
    id: "bedhing-na-trek",
    title: "Bedhing & Na Village Trek",
    duration: "4–5 Days",
    description: "A village-focused itinerary reaching Na without pushing on to the lake basin.",
    experiences: ["Village architecture", "Cultural immersion", "Acclimatization trekking"],
    travelerProfile: "First-time high-altitude trekkers wanting a shorter introduction",
    technical: false,
  },
  {
    id: "high-altitude-adventure",
    title: "Rolwaling High-Altitude Adventure",
    duration: "8–10 Days",
    description: "An adventure-paced itinerary through the full valley to the lake and surrounding viewpoints.",
    experiences: ["Extended acclimatization", "Glacier-edge viewpoints", "Remote camping"],
    travelerProfile: "Fit trekkers seeking a more immersive high-altitude itinerary",
    technical: false,
  },
  {
    id: "tashi-lapcha-expedition",
    title: "Tashi Lapcha Pass Expedition",
    duration: "12–16 Days",
    description: "A technical high-altitude crossing linking Rolwaling with the Everest region.",
    experiences: ["Technical pass crossing", "Expedition-style camping", "Everest-region descent"],
    travelerProfile: "Technically experienced mountaineers/trekkers with prior high-altitude expedition experience — not suitable for beginners",
    technical: true,
  },
  {
    id: "extended-everest-trek",
    title: "Extended Rolwaling & Everest Region Trek",
    duration: "14–18 Days",
    description: "The full traverse from Rolwaling through Tashi Lapcha Pass into the Khumbu/Everest region.",
    experiences: ["Cross-regional traverse", "Sherpa heritage in two regions", "High Himalayan panoramas"],
    travelerProfile: "Experienced high-altitude trekkers with technical pass-crossing capability — not suitable for beginners",
    technical: true,
  },
];

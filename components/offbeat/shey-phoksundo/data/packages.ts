import type { PackageItem } from "./types";

// Section 15: Tour Packages. Durations are "suggested"/customizable; no prices,
// hotel names, departure dates, or confirmed availability are shown.
export const PACKAGES: PackageItem[] = [
  {
    id: "lake-short-escape",
    title: "Shey Phoksundo Lake Short Escape",
    duration: "Suggested 4 days",
    description:
      "A compact introduction to Phoksundo Lake and Ringmo Village for travelers with limited time.",
    experiences: ["Phoksundo Lake", "Ringmo Village", "Lakeside photography"],
    suitedFor: "First-time visitors and travelers with limited time",
  },
  {
    id: "lake-photography-tour",
    title: "Phoksundo Lake Nature & Photography Tour",
    duration: "Suggested 5–6 days",
    description:
      "A slower-paced journey built around capturing the lake's turquoise waters and surrounding landscapes.",
    experiences: ["Phoksundo Lake", "Suligad River", "Photography-focused pacing"],
    suitedFor: "Photographers and nature enthusiasts",
  },
  {
    id: "lower-dolpo-trekking",
    title: "Lower Dolpo Trekking Adventure",
    duration: "Suggested 7–9 days",
    description:
      "A multi-day trek through the valleys and villages surrounding Phoksundo Lake.",
    experiences: ["Phoksundo Lake", "Ringmo Village", "Tshowa Bon Monastery", "Lower Dolpo valleys"],
    suitedFor: "Trekkers seeking a deeper regional experience",
  },
  {
    id: "upper-dolpo-cultural-expedition",
    title: "Upper Dolpo Cultural Expedition",
    duration: "Suggested 12–18 days",
    description:
      "An extended expedition into the restricted-area terrain of Upper Dolpo's cultural landscapes.",
    experiences: ["Shey Gompa", "Crystal Mountain", "Saldang", "Dho Tarap"],
    suitedFor: "Experienced trekkers prepared for high-altitude, restricted-area travel",
  },
  {
    id: "shey-gompa-crystal-mountain-trek",
    title: "Shey Gompa & Crystal Mountain Trek",
    duration: "Suggested 12–15 days",
    description:
      "A focused Upper Dolpo route centered on Shey Gompa and the sacred Crystal Mountain.",
    experiences: ["Shey Gompa", "Crystal Mountain", "High-altitude trekking"],
    suitedFor: "Trekkers with a cultural and spiritual focus",
  },
  {
    id: "saldang-dho-tarap-cultural-journey",
    title: "Saldang & Dho Tarap Cultural Journey",
    duration: "Suggested 14–18 days",
    description:
      "A cultural journey connecting the distinctive settlements of Saldang and Dho Tarap.",
    experiences: ["Saldang", "Dho Tarap", "Traditional Dolpo village life"],
    suitedFor: "Travelers seeking immersive cultural exploration",
  },
  {
    id: "extended-wilderness-expedition",
    title: "Extended Dolpo Wilderness Expedition",
    duration: "Suggested 16–21 days",
    description:
      "A comprehensive expedition spanning Lower and Upper Dolpo's landscapes and settlements.",
    experiences: ["Phoksundo Lake", "Shey Gompa", "Crystal Mountain", "Saldang", "Dho Tarap"],
    suitedFor: "Experienced adventurers seeking the full Dolpo wilderness experience",
  },
];

export const PACKAGES_NOTE =
  "All durations are suggested and customizable. Prices, exact departure dates, and availability are confirmed at the time of inquiry.";

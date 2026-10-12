// data/asia-regions.ts
// Regions used to group destinations on /packages/international/asia.
// Order here is the order regions appear on the page.

export type AsiaRegionId = "southeast-asia" | "south-asia" | "middle-east-west-asia" | "central-asia" | "east-asia";

export interface AsiaRegion {
  id: AsiaRegionId;
  name: string;
  /** Short line under the region heading. */
  tagline: string;
  /** Two colours for the region's accent gradient and image fallback. */
  tone: [string, string];
}

export const asiaRegions: AsiaRegion[] = [
  {
    id: "southeast-asia",
    name: "Southeast Asia",
    tagline: "Islands, street food, temples and easy multi-country holidays.",
    tone: ["#0f4c5c", "#2a9d8f"],
  },
  {
    id: "south-asia",
    name: "South Asia",
    tagline: "Himalayan kingdoms, heritage cities and Indian Ocean islands, close to home.",
    tone: ["#5b2a1c", "#c26a2e"],
  },
  {
    id: "middle-east-west-asia",
    name: "Middle East & West Asia",
    tagline: "Desert cities, Caucasus mountains and the crossroads of two continents.",
    tone: ["#5c3b12", "#c9973f"],
  },
  {
    id: "central-asia",
    name: "Central Asia",
    tagline: "Silk Road cities, alpine lakes and wide-open steppe.",
    tone: ["#23395b", "#4f7cac"],
  },
  {
    id: "east-asia",
    name: "East Asia",
    tagline: "Ancient capitals, neon cities, seasonal landscapes and efficient travel.",
    tone: ["#3d1f3a", "#a14a6e"],
  },
];

export const regionById = (id: AsiaRegionId) => asiaRegions.find((r) => r.id === id)!;

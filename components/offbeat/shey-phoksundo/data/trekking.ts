import type { TrekkingTier } from "./types";

// Section 7: Trekking & Hiking in Dolpo, organized into three tiers.
// No distances, elevation gains, durations, or difficulty ratings are invented,
// per the brief's explicit constraint.

export const TREKKING_TIERS: TrekkingTier[] = [
  {
    id: "short-nature-walks",
    title: "Short Nature Walks",
    tagline: "Lakeside exploration and nearby village walks",
    description:
      "Gentle trails around Phoksundo Lake and Ringmo Village suited to travelers with limited time who still want to experience the lake's scenery up close.",
    routePoints: ["Phoksundo Lake shoreline", "Ringmo Village"],
  },
  {
    id: "lower-dolpo-treks",
    title: "Lower Dolpo Treks",
    tagline: "Multi-day journeys around Phoksundo Lake and surrounding valleys",
    description:
      "Extended routes through the valleys and settlements surrounding Phoksundo Lake, offering a deeper look at the region's landscapes and communities.",
    routePoints: ["Phoksundo Lake and surrounding valleys", "Trails around the lake"],
  },
  {
    id: "upper-dolpo-expeditions",
    title: "Upper Dolpo Expeditions",
    tagline: "Extended high-altitude trekking through remote settlements and cultural landscapes",
    description:
      "Journeys into the high, restricted-area terrain of Upper Dolpo, connecting Shey Gompa, Crystal Mountain, Saldang, Dho Tarap, and remote village-to-village routes.",
    routePoints: ["Shey Gompa and Crystal Mountain exploration", "Saldang and Dho Tarap cultural trekking routes", "Remote village-to-village journeys"],
    note:
      "Upper Dolpo routes require more extensive planning, suitable acclimatization, and verification of restricted-area permit requirements.",
  },
];

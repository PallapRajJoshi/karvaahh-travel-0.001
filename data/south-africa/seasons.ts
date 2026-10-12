// data/south-africa/seasons.ts
// Seasonal explorer: southern-hemisphere seasons × experiences. Typical
// patterns only; there is no single best month for the whole country.

import type { SAImageId } from "./images";

export const SEASON_NOTE =
  "South Africa's regions have different climates: Cape Town has winter rain, while the safari regions have summer rain. The best time depends on what you want to do, and conditions vary year to year.";

export type SeasonId = "summer" | "autumn" | "winter" | "spring";
export type SeasonExperience = "safari" | "cape-town" | "garden-route" | "whales" | "winelands" | "durban";

export const seasonExperienceLabels: Record<SeasonExperience, string> = {
  safari: "Safari",
  "cape-town": "Cape Town",
  "garden-route": "Garden Route",
  whales: "Whale watching",
  winelands: "Winelands",
  durban: "Durban & KZN",
};

export const saSeasons: { id: SeasonId; label: string; months: string; image: SAImageId; mood: string; notes: Record<SeasonExperience, string> }[] = [
  {
    id: "summer", label: "Summer", months: "Typically Dec – Feb", image: "camps-bay-beach",
    mood: "Long, warm days on the Cape coast; green, lush bush in the safari regions.",
    notes: {
      safari: "Green season: lush bush, newborn animals and excellent birding. Thicker vegetation and afternoon storms can make game viewing more variable.",
      "cape-town": "Warm, dry and often windy. Peak beach season and busiest time for hotels.",
      "garden-route": "Beach season and school holidays; book early.",
      whales: "Typically outside the main southern right whale season.",
      winelands: "Vines in full leaf; harvest typically begins late in summer.",
      durban: "Hot and humid with summer rain.",
    },
  },
  {
    id: "autumn", label: "Autumn", months: "Typically Mar – May", image: "vineyard-sunset",
    mood: "Settled weather in the Cape, harvest colours and the bush starting to dry.",
    notes: {
      safari: "Rains easing; vegetation begins to thin as winter approaches.",
      "cape-town": "Often calm, warm and less crowded: a favourite shoulder season.",
      "garden-route": "Mild and quieter after the summer holidays.",
      whales: "Whales typically begin arriving towards the end of autumn or early winter.",
      winelands: "Harvest season and autumn colours in the vineyards.",
      durban: "Warm, with less humidity.",
    },
  },
  {
    id: "winter", label: "Winter", months: "Typically Jun – Aug", image: "elephant-waterhole",
    mood: "Dry season in the bush and rainy, green days in the Cape.",
    notes: {
      safari: "Dry season: thinner bush and animals often gather near water, which typically makes game viewing easier. Mornings and evenings are cold.",
      "cape-town": "Cooler with rainy spells; quieter and greener.",
      "garden-route": "Mild days with some rain; whale season begins.",
      whales: "Southern right whales are typically present along the Cape coast.",
      winelands: "Quiet, green and cosy; vines are dormant.",
      durban: "Mild, dry and sunny: a pleasant winter escape.",
    },
  },
  {
    id: "spring", label: "Spring", months: "Typically Sep – Nov", image: "pretoria-jacaranda",
    mood: "Wildflowers, jacarandas and some of the best months for whales.",
    notes: {
      safari: "Still dry early in spring, with the first rains typically from October or November.",
      "cape-town": "Warming up, with wildflowers in parts of the Western Cape.",
      "garden-route": "Green, fresh and less crowded.",
      whales: "Often a strong period for whale watching around Hermanus; sightings are never guaranteed.",
      winelands: "New growth on the vines and spring festivals where scheduled.",
      durban: "Warm and increasingly humid.",
    },
  },
];

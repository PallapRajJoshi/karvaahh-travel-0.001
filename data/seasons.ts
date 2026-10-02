export interface Season {
  id: string;
  name: string;
  months: string;
  description: string;
  recommended: boolean;
}

// Source: brief §13 "Best Time to Visit Saipal Base Camp". No weather or
// visibility guarantees are stated, per the brief's instruction.
export const seasons: Season[] = [
  {
    id: "spring",
    name: "Spring",
    months: "March to May",
    description:
      "A commonly preferred period for Himalayan trekking, with seasonal vegetation and potentially suitable conditions. Higher elevations may still experience cold weather and snow.",
    recommended: true,
  },
  {
    id: "summer-monsoon",
    name: "Summer / Monsoon",
    months: "June to August",
    description: "Rainfall, slippery trails, cloud cover, and landslide risks may affect road access and trekking conditions.",
    recommended: false,
  },
  {
    id: "autumn",
    name: "Autumn",
    months: "September to November",
    description:
      "Often a popular Himalayan trekking season, with potentially clearer mountain views. Conditions vary, and early autumn may still experience rain.",
    recommended: true,
  },
  {
    id: "winter",
    name: "Winter",
    months: "December to February",
    description: "Cold temperatures, snow, and difficult access may make high-altitude trekking challenging or unsafe.",
    recommended: false,
  },
];

export const seasonNote =
  "Spring and autumn are commonly preferred planning seasons, but the actual expedition window depends on current weather, trail conditions, access, and local guidance.";

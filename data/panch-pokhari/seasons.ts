import type { IconName } from "@/components/shared/Icon";

export type Season = {
  id: string;
  name: string;
  months: string;
  icon: IconName;
  body: string;
};

export const seasons: Season[] = [
  {
    id: "spring",
    name: "Spring",
    months: "March to May",
    icon: "sun",
    body: "A popular trekking period with milder conditions at lower elevations and seasonal vegetation. Higher-altitude weather can still be unpredictable.",
  },
  {
    id: "summer",
    name: "Summer / Monsoon",
    months: "June to August",
    icon: "cloud-rain",
    body: "Rainfall, slippery trails, cloud cover, and possible landslides can affect access. Conditions should be checked carefully before travel.",
  },
  {
    id: "autumn",
    name: "Autumn",
    months: "September to November",
    icon: "leaf",
    body: "Often a popular trekking season with potentially clearer mountain views, although conditions vary and early autumn may still experience rain.",
  },
  {
    id: "winter",
    name: "Winter",
    months: "December to February",
    icon: "snowflake",
    body: "Cold temperatures, snow, and trail conditions may make high-altitude access difficult or unsafe.",
  },
];

export const seasonRecommendation =
  "Spring and autumn are commonly preferred, but actual travel dates should be confirmed based on weather, trail conditions, and local guidance.";

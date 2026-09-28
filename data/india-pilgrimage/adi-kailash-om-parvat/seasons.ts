import type { Season } from "./types";

/**
 * Seasonal guidance. Written as general patterns, not promises.
 * Review each year once the administration announces the season.
 */
export const seasons: Season[] = [
  {
    id: "spring",
    name: "Spring",
    months: "March – May",
    icon: "leaf",
    outlook: "mixed",
    outlookLabel: "Season typically opens late spring",
    description:
      "Snow lingers in the high valleys early in spring. The pilgrimage season generally opens later in the season, once roads are cleared and permits are being issued.",
    points: ["Cold nights and lingering snow at altitude", "Opening dates vary year to year"],
  },
  {
    id: "summer",
    name: "Summer",
    months: "June – August",
    icon: "cloud",
    outlook: "caution",
    outlookLabel: "Monsoon caution",
    description:
      "Early summer can be a good window. From the onset of the monsoon, heavy rain can trigger landslides and road closures on mountain routes, and cloud often hides the peaks.",
    points: ["Build buffer days into any monsoon itinerary", "Views of the peaks are less reliable"],
  },
  {
    id: "autumn",
    name: "Autumn",
    months: "September – November",
    icon: "sun",
    outlook: "favourable",
    outlookLabel: "Often clearer skies",
    description:
      "After the monsoon, skies are often clearer and views of Adi Kailash and Om Parvat can be at their best. It grows colder quickly, and the season generally closes as winter approaches.",
    points: ["Often the clearest mountain views", "Very cold nights later in the season"],
  },
  {
    id: "winter",
    name: "Winter",
    months: "December – February",
    icon: "snow",
    outlook: "closed",
    outlookLabel: "Generally not accessible",
    description:
      "Heavy snow and extreme cold make the high route generally inaccessible, and the yatra is not usually undertaken in winter.",
    points: ["Not recommended for the yatra", "Lower Kumaon remains open for other journeys"],
  },
];

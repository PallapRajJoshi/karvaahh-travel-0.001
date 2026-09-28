import type { Season } from "./types";

/**
 * General seasonal guidance. Conditions vary year to year —
 * nothing here guarantees access, weather, flights or road conditions.
 */
export const seasons: Season[] = [
  {
    id: "spring",
    name: "Spring",
    months: "March – May",
    verdict: "Popular",
    tone: "good",
    summary:
      "Warming days and longer light. Views are often good early in the day; afternoon wind and haze build as the season goes on.",
    lower: "Orchards around Marpha come into blossom and villages are busy. Nights can still be cold in early March.",
    upper: "A favoured time for Lo Manthang. Festivals such as Tiji often fall in spring — dates follow the lunar calendar.",
  },
  {
    id: "monsoon",
    name: "Summer / Monsoon",
    months: "June – August",
    verdict: "Plan carefully",
    tone: "mixed",
    summary:
      "Mustang lies in the Himalayan rain shadow, so it stays far drier than most of Nepal. The challenge is getting there: routes south of the region see heavy rain.",
    lower: "Some rain and cloud. Flights to Jomsom are often delayed and roads may be affected by landslides — allow spare days.",
    upper: "Usually dry and green in the fields, which makes it a genuine monsoon option once you are through the lower valley.",
  },
  {
    id: "autumn",
    name: "Autumn",
    months: "September – November",
    verdict: "Popular",
    tone: "good",
    summary:
      "Generally settled weather and the clearest mountain views of the year. Nights get steadily colder towards November.",
    lower: "Apple harvest around Marpha and busy trails to Muktinath. Book stays early in peak weeks.",
    upper: "Crisp, clear days — excellent for photography. Expect cold mornings and evenings in the higher villages.",
  },
  {
    id: "winter",
    name: "Winter",
    months: "December – February",
    verdict: "Limited",
    tone: "caution",
    summary:
      "Very cold, with snow possible — especially at higher points. Services thin out and travel can be restricted by weather.",
    lower: "Jomsom and Muktinath can still be visited with good preparation, but snow and cold may disrupt plans.",
    upper: "Many residents move south for the winter and some lodges close. Treat Upper Mustang as largely off-season.",
  },
];

export const seasonsNote =
  "The best period depends on your route, the weather, road conditions and permit requirements. We confirm current conditions before you book and again before you travel.";

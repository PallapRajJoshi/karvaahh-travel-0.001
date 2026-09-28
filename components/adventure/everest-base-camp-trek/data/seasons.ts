import type { Season } from "../types";

export const seasonsNote =
  "Conditions vary with elevation and year-to-year weather. Mountain weather can change within hours, so every Everest itinerary should keep at least one flexible day.";

export const seasons: Season[] = [
  {
    id: "spring",
    name: "Spring",
    months: "March – May",
    rating: "recommended",
    ratingLabel: "Popular season",
    summary: "Milder temperatures, blooming rhododendrons and the atmosphere of the climbing season at Base Camp.",
    points: ["Generally stable trekking conditions", "Rhododendron forests in bloom lower down", "Haze can build in the afternoons", "Busy trails and lodges — plan early"],
  },
  {
    id: "monsoon",
    name: "Summer / Monsoon",
    months: "June – August",
    rating: "challenging",
    ratingLabel: "Plan with care",
    summary: "Green valleys and quiet trails, but frequent rain and cloud that often hides the peaks.",
    points: ["Regular rainfall and muddy, slippery trails", "Lukla flight delays and cancellations are more likely", "Mountain views often obscured", "Leeches possible at lower elevations"],
  },
  {
    id: "autumn",
    name: "Autumn",
    months: "September – November",
    rating: "recommended",
    ratingLabel: "Popular season",
    summary: "Often the clearest skies of the year after the monsoon clears, with crisp days and cold nights.",
    points: ["Generally favourable trekking conditions", "Typically excellent mountain visibility", "Colder nights at higher camps", "Peak demand — book flights and lodges early"],
  },
  {
    id: "winter",
    name: "Winter",
    months: "December – February",
    rating: "challenging",
    ratingLabel: "For experienced trekkers",
    summary: "Quiet trails and sharp views, with very cold temperatures and the chance of heavy snow.",
    points: ["Temperatures well below freezing at altitude", "Snowfall can make sections difficult or impassable", "Some high lodges may close", "Shorter days — plan conservative stages"],
  },
];

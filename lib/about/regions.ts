import { planHref, ROUTES } from "./routes";
import type { Region } from "./types";

export const destinationsCopy = {
  eyebrow: "Where We Travel",
  title: "From the Himalayas to the World",
  sub: "Start close to home. Travel wherever your curiosity takes you.",
} as const;

/**
 * Place names are shown as plain text on purpose: they only become links once a
 * dedicated page exists. Add `href` support to a place by turning the string into
 * { name, href } when those routes are confirmed.
 */
export const regions: Region[] = [
  {
    id: "nepal",
    label: "Nepal",
    tagline: "Our home ground.",
    places: ["Kathmandu", "Pokhara", "Chitwan", "Muktinath", "Mustang", "Ghandruk", "Lumbini", "Janakpur", "Everest Region", "Annapurna Region"],
    andMore: false,
    imageKey: "region-nepal",
    ctaLabel: "Explore Nepal destinations",
    ctaHref: ROUTES.destinations,
  },
  {
    id: "india",
    label: "India",
    tagline: "Mountains, heritage and sacred cities.",
    places: ["Uttarakhand", "Himachal Pradesh", "Rajasthan", "Goa", "Kerala", "Delhi", "Agra", "Varanasi", "Ayodhya", "Kashmir"],
    andMore: false,
    imageKey: "region-india",
    ctaLabel: "Plan a trip to India",
    ctaHref: planHref("india-tours"),
  },
  {
    id: "asia",
    label: "Asia",
    tagline: "Islands, cities and temples.",
    places: ["Thailand", "Bali", "Singapore", "Malaysia", "Vietnam", "Japan", "South Korea", "Dubai"],
    andMore: true,
    imageKey: "region-asia",
    ctaLabel: "Plan a trip to Asia",
    ctaHref: planHref("asia"),
  },
  {
    id: "europe",
    label: "Europe",
    tagline: "Alpine passes and old-world cities.",
    places: ["France", "Switzerland", "Italy", "Spain", "Greece", "Netherlands", "Germany"],
    andMore: true,
    imageKey: "region-europe",
    ctaLabel: "Plan a trip to Europe",
    ctaHref: planHref("europe"),
  },
  {
    id: "international",
    label: "International",
    tagline: "And wherever else curiosity points.",
    places: ["USA", "Australia", "South Africa", "Russia"],
    andMore: true,
    imageKey: "region-international",
    ctaLabel: "Plan an international trip",
    ctaHref: planHref("international-tours"),
  },
];

import type { TrekPackage } from "../types";
import { IMG } from "../config/site";

/**
 * Package catalogue. NO prices, dates, availability or inclusions are asserted here.
 * - Leave `price.amount` undefined → card shows "Request a Quote".
 * - When you add a verified price, also set `verifiedOn` (ISO date); the card then
 *   shows "From ₹X · verified <date> · subject to confirmation".
 * - Replace `duration` placeholders once each itinerary is finalised.
 */
const QUOTE = { currency: "INR", basis: "per person" } as const;
const TBC_DURATION = "On enquiry";

export const packages: TrekPackage[] = [
  {
    slug: "everest-base-camp-classic-trek",
    title: "Everest Base Camp Classic Trek",
    mode: "standard",
    category: "Classic Teahouse Trek",
    duration: TBC_DURATION,
    difficulty: "Strenuous",
    maxAltitude: "≈ 5,364 m",
    description:
      "The time-honoured route on foot from Lukla to Base Camp and back, with acclimatisation days built in at Namche and Dingboche.",
    route: ["Lukla", "Namche", "Tengboche", "Dingboche", "Lobuche", "Gorakshep", "EBC"],
    price: QUOTE,
    image: { src: `${IMG}/packages/ebc-classic.jpg`, alt: "Trekkers on the stone trail towards Everest Base Camp" },
    featured: true,
  },
  {
    slug: "everest-base-camp-kala-patthar-trek",
    title: "Everest Base Camp Trek with Kala Patthar",
    mode: "standard",
    category: "Classic Trek + Summit Viewpoint",
    duration: TBC_DURATION,
    difficulty: "Strenuous",
    maxAltitude: "≈ 5,545 m",
    description:
      "The classic route plus the pre-dawn climb to Kala Patthar for the trek's clearest view of Everest's summit.",
    route: ["Lukla", "Namche", "Tengboche", "Dingboche", "Gorakshep", "EBC", "Kala Patthar"],
    price: QUOTE,
    image: { src: `${IMG}/packages/ebc-kala-patthar.jpg`, alt: "Everest summit at sunrise from Kala Patthar" },
  },
  {
    slug: "everest-base-camp-helicopter-return",
    title: "Everest Base Camp Trek with Helicopter Return",
    mode: "helicopter",
    category: "Trek In · Fly Out",
    duration: TBC_DURATION,
    difficulty: "Strenuous (ascent on foot)",
    maxAltitude: "≈ 5,545 m",
    description:
      "Trek the full ascent at a safe pace, then return by helicopter from the upper Khumbu instead of retracing the trail.",
    route: ["Lukla", "Namche", "Dingboche", "Gorakshep", "EBC", "Heli → Kathmandu"],
    modeNote: "Helicopter flights are weather-dependent and subject to operator availability; the ascent is always on foot.",
    price: QUOTE,
    image: { src: `${IMG}/packages/ebc-helicopter.jpg`, alt: "Helicopter above the Khumbu valley with snow peaks behind" },
  },
  {
    slug: "everest-base-camp-luxury-lodge-trek",
    title: "Everest Base Camp Luxury Lodge Trek",
    mode: "luxury",
    category: "Premium Lodge Trek",
    duration: TBC_DURATION,
    difficulty: "Strenuous",
    maxAltitude: "≈ 5,364 m",
    description:
      "The same trail with the most comfortable lodging available on each night, plus added support and a gentler pace.",
    route: ["Lukla", "Phakding", "Namche", "Tengboche", "Dingboche", "EBC"],
    modeNote: "Premium lodges are found on the lower and middle trail; the highest nights use the best available teahouses.",
    price: QUOTE,
    image: { src: `${IMG}/packages/ebc-luxury-lodge.jpg`, alt: "Warm lodge dining room with mountain views in the Khumbu" },
  },
  {
    slug: "everest-base-camp-private-guided-trek",
    title: "Everest Base Camp Private Guided Trek",
    mode: "private",
    category: "Private Departure",
    duration: TBC_DURATION,
    difficulty: "Strenuous",
    maxAltitude: "≈ 5,545 m",
    description:
      "Your own guide and porter team, your own dates and a pace set around your group — ideal for families and friends.",
    route: ["Lukla", "Namche", "Tengboche", "Dingboche", "Lobuche", "EBC"],
    price: QUOTE,
    image: { src: `${IMG}/packages/ebc-private.jpg`, alt: "Small group of trekkers with a guide on a suspension bridge" },
  },
  {
    slug: "customized-everest-himalayan-adventure",
    title: "Customized Everest Himalayan Adventure",
    mode: "custom",
    category: "Tailor-Made Journey",
    duration: "Built around your dates",
    difficulty: "Varies by route",
    maxAltitude: "Depends on route",
    description:
      "Combine EBC with Gokyo, Thame or a cultural stay in Kathmandu — we plan the route, pace and comfort level with you.",
    route: ["Your route", "Your pace", "Your dates"],
    price: QUOTE,
    image: { src: `${IMG}/packages/ebc-custom.jpg`, alt: "Map and trekking gear laid out for planning a Himalayan route" },
  },
];

export const packageModeLabel: Record<TrekPackage["mode"], string> = {
  standard: "On foot",
  helicopter: "Helicopter-assisted",
  luxury: "Luxury lodges",
  private: "Private",
  custom: "Custom",
};

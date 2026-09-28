/**
 * Route options. Never present a route as guaranteed or open — keep the
 * `availability` line honest and update it each season.
 */
import { ctas } from "../config";
import type { TravelRoute } from "../types";
import { IMG } from "./content";

const R = `${IMG}/routes`;

export const routes: TravelRoute[] = [
  {
    id: "overland",
    title: "Overland Route via Nepal and Tibet",
    mode: "Overland",
    overview:
      "Drive north from Kathmandu to the Rasuwagadhi–Kerung crossing, then across the Tibetan plateau via Saga to Mansarovar — a steady climb that doubles as acclimatisation.",
    transitPoints: ["Kathmandu", "Syabrubesi", "Rasuwagadhi / Kerung", "Saga", "Lake Mansarovar", "Darchen"],
    duration: "Typically 12–15 days",
    image: { src: `${R}/overland-route.jpg`, alt: "Winding mountain road leading towards the Kerung border" },
    availability: "Operates in season when the border and permits are open.",
    href: "#package-overland",
  },
  {
    id: "helicopter-assisted",
    title: "Helicopter-Assisted Route via Nepal and Tibet",
    mode: "Helicopter-assisted",
    overview:
      "Fly to Nepalgunj and on to Simikot in Humla, take a helicopter to Hilsa on the border, then continue by road via Purang (Taklakot) to Mansarovar.",
    transitPoints: ["Kathmandu or Lucknow", "Nepalgunj", "Simikot", "Hilsa", "Purang (Taklakot)", "Lake Mansarovar"],
    duration: "Typically 9–12 days",
    image: { src: `${R}/helicopter-route.jpg`, alt: "Helicopter landing pad in the remote Humla valley" },
    availability: "Where operationally available. Flights and helicopters are weather-dependent, especially in the monsoon.",
    href: "#package-helicopter-assisted",
  },
  {
    id: "custom",
    title: "Customized Pilgrimage Route",
    mode: "Private / flexible",
    overview:
      "Combine routes, add rest days, or pair Kailash with Muktinath or other pilgrimages. We design the journey around your dates, health and priorities.",
    transitPoints: ["Your start city", "Route of your choice", "Extra acclimatisation", "Optional add-ons"],
    duration: null,
    image: { src: `${R}/custom-route.jpg`, alt: "Map and prayer beads laid out for planning a pilgrimage" },
    availability: "Subject to the same permits and seasonal conditions as all routes.",
    href: ctas.customize.href,
  },
];

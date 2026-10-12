// data/australia/circuits.ts
// Multi-city journeys, drawn as animated route maps with a timeline. Stops
// reference destinations by id (name and position come from there); a stop
// that is not a destination gives its own name and coords. Durations are
// suggested templates; the leg mode is the usual option, confirmed at quote.
// Flight legs are drawn as dashed arcs so the scale of Australia stays visible.

import type { AustraliaTravelStyle } from "./travel-styles";

export type LegMode = "flight" | "road" | "rail" | "ferry";

export interface CircuitStop {
  /** Destination id from ./destinations.ts. */
  destination?: string;
  /** Required when `destination` is not set; overrides the destination name otherwise. */
  name?: string;
  coords?: [number, number];
  /** Suggested nights here. */
  nights?: number;
  /** How you usually arrive at this stop from the previous one. */
  by?: LegMode;
  note?: string;
}

export interface AustraliaCircuit {
  id: string;
  title: string;
  duration: string;
  stops: CircuitStop[];
  transport: string[];
  styles: AustraliaTravelStyle[];
  description: string;
  /** Matching template in ./packages.ts, if any. */
  packageId?: string;
  /** Listed in "Multi-City Australia Circuits" (others only appear inside a section). */
  listed?: boolean;
}

export const australiaCircuits: AustraliaCircuit[] = [
  {
    id: "syd-mel", title: "Sydney → Melbourne", duration: "6N/7D", listed: true, packageId: "syd-mel-7n",
    stops: [
      { destination: "sydney", nights: 3, note: "Harbour, Opera House, Bondi" },
      { destination: "melbourne", nights: 3, by: "flight", note: "About 1.5 hours by air; laneways, food, culture" },
    ],
    transport: ["Domestic flight", "Airport transfers"], styles: ["city-break", "food-wine", "honeymoon", "family"],
    description: "The two great cities. Driving takes 9–10 hours on the inland highway, so most short trips fly.",
  },
  {
    id: "syd-gc", title: "Sydney → Gold Coast", duration: "6N/7D", listed: true, packageId: "syd-gc-6n",
    stops: [
      { destination: "sydney", nights: 3, note: "Harbour and city icons" },
      { destination: "gold-coast", nights: 3, by: "flight", note: "About 1.5 hours by air; beaches and theme parks" },
    ],
    transport: ["Domestic flight", "Private transfers"], styles: ["family", "beach", "city-break", "honeymoon"],
    description: "Harbour city to surf coast. The road trip is roughly 850 km, so a flight saves a full day.",
  },
  {
    id: "syd-gc-cns", title: "Sydney → Gold Coast → Cairns", duration: "9N/10D", listed: true, packageId: "syd-gc-cns-9n",
    stops: [
      { destination: "sydney", nights: 3 },
      { destination: "gold-coast", nights: 3, by: "flight", note: "Beaches, hinterland, optional theme parks" },
      { destination: "cairns", nights: 3, by: "flight", note: "Reef day and rainforest" },
    ],
    transport: ["Domestic flights", "Airport transfers", "Reef boat"], styles: ["family", "honeymoon", "beach", "reef"],
    description: "City, surf and reef: the east coast's highlights with two short flights.",
  },
  {
    id: "syd-mel-gc", title: "Sydney → Melbourne → Gold Coast", duration: "9N/10D", listed: true, packageId: "syd-mel-gc-9n",
    stops: [
      { destination: "sydney", nights: 3 },
      { destination: "melbourne", nights: 3, by: "flight" },
      { destination: "gold-coast", nights: 3, by: "flight", note: "Ending on the beach" },
    ],
    transport: ["Domestic flights", "Airport transfers"], styles: ["city-break", "family", "shopping", "beach"],
    description: "Australia's big three for first-time visitors.",
  },
  {
    id: "mel-gor-syd", title: "Melbourne → Great Ocean Road → Sydney", duration: "7N/8D", listed: true,
    stops: [
      { destination: "melbourne", nights: 2 },
      { name: "Lorne", coords: [-38.54, 143.97], nights: 1, by: "road", note: "Surf Coast and rainforest" },
      { name: "Port Campbell", coords: [-38.62, 142.99], nights: 1, by: "road", note: "Twelve Apostles at sunset" },
      { destination: "melbourne", by: "road", note: "Inland return, roughly 3 hours" },
      { destination: "sydney", nights: 3, by: "flight" },
    ],
    transport: ["Private driver or rental car", "Domestic flight"], styles: ["road-trip", "honeymoon", "nature", "city-break"],
    description: "Drive the coast, then fly to Sydney rather than spend two days on the highway.",
  },
  {
    id: "syd-cns-whit", title: "Sydney → Cairns → Whitsundays", duration: "9N/10D", listed: true,
    stops: [
      { destination: "sydney", nights: 3 },
      { destination: "cairns", nights: 3, by: "flight", note: "About 3 hours by air; reef and rainforest" },
      { destination: "whitsundays", nights: 3, by: "flight", note: "Routing varies; sometimes via Brisbane" },
    ],
    transport: ["Domestic flights", "Reef boat", "Ferry"], styles: ["honeymoon", "reef", "island", "luxury"],
    description: "The harbour, then two very different stretches of the Great Barrier Reef.",
  },
  {
    id: "per-mr-rot", title: "Perth → Margaret River → Rottnest", duration: "7N/8D", listed: true,
    stops: [
      { destination: "perth", nights: 2 },
      { destination: "margaret-river", nights: 3, by: "road", note: "About 3 hours south" },
      { name: "Fremantle", coords: [-32.06, 115.74], by: "road", note: "Port town and ferry terminal" },
      { destination: "rottnest-island", nights: 2, by: "ferry", note: "Around 30 minutes by fast ferry" },
    ],
    transport: ["Private driver or rental car", "Ferry"], styles: ["food-wine", "wildlife", "beach", "road-trip"],
    description: "Western Australia's south-west: wine country, then a car-free island.",
  },
  {
    id: "adl-ki", title: "Adelaide → Kangaroo Island", duration: "5N/6D", listed: true, packageId: "adl-ki-5n",
    stops: [
      { destination: "adelaide", nights: 2 },
      { name: "Cape Jervis", coords: [-35.6, 138.1], by: "road", note: "About 2 hours from Adelaide" },
      { destination: "kangaroo-island", nights: 2, by: "ferry", note: "Short ferry crossing (or fly from Adelaide)" },
      { destination: "adelaide", nights: 1, by: "flight" },
    ],
    transport: ["Ferry", "Short flight", "Private driver"], styles: ["wildlife", "nature", "food-wine", "island"],
    description: "A city of food and festivals, and an island of wildlife and wild coast.",
  },
  {
    id: "drw-kak-kat", title: "Darwin → Kakadu → Katherine", duration: "6N/7D", listed: true,
    stops: [
      { destination: "darwin", nights: 2 },
      { destination: "kakadu", nights: 2, by: "road", note: "About 3 hours east" },
      { destination: "katherine", nights: 2, by: "road", note: "Nitmiluk Gorge" },
      { destination: "darwin", by: "road", note: "About 3.5 hours north" },
    ],
    transport: ["Private driver", "Guided tour", "4WD where needed"], styles: ["outback", "nature", "adventure", "wildlife"],
    description: "The Top End loop. Best in the dry season; some sites close in the wet.",
  },
  {
    id: "alice-uluru-kings", title: "Alice Springs → Uluru → Kings Canyon", duration: "5N/6D", listed: true, packageId: "red-centre-6n",
    stops: [
      { destination: "alice-springs", nights: 2 },
      { destination: "uluru", nights: 2, by: "road", note: "About 450 km, roughly 5 hours (or fly)" },
      { destination: "kings-canyon", nights: 1, by: "road", note: "About 300 km" },
      { destination: "alice-springs", by: "road", note: "Long return drive; flights out of Uluru are an alternative" },
    ],
    transport: ["Guided tour", "Rental car", "Domestic flights"], styles: ["outback", "adventure", "road-trip", "nature"],
    description: "The Red Centre loop: big distances, remote roads and unforgettable skies.",
  },
  {
    id: "tas-circuit", title: "Tasmania Complete Circuit", duration: "8N/9D", listed: true, packageId: "tas-road-7n",
    stops: [
      { destination: "hobart", nights: 2, note: "Port Arthur day trip" },
      { destination: "freycinet", nights: 2, by: "road", note: "About 2.5 hours" },
      { destination: "bay-of-fires", nights: 1, by: "road" },
      { name: "Launceston", coords: [-41.44, 147.14], nights: 1, by: "road" },
      { destination: "cradle-mountain", nights: 2, by: "road", note: "About 2 hours" },
    ],
    transport: ["Rental car or private driver", "Domestic flights in/out"], styles: ["road-trip", "nature", "food-wine", "wildlife"],
    description: "The whole island: fly into Hobart, out of Launceston or Devonport.",
  },
  // Not listed: drawn on the main map and in sections.
  {
    id: "east-coast", title: "Sydney → Gold Coast → Cairns → Melbourne", duration: "12N/13D",
    stops: [
      { destination: "melbourne" },
      { destination: "sydney", by: "flight" },
      { destination: "gold-coast", by: "flight" },
      { destination: "cairns", by: "flight" },
    ],
    transport: ["Domestic flights"], styles: ["city-break", "beach", "reef"],
    description: "The classic east-coast arc.",
  },
  {
    id: "perth-uluru", title: "Perth → Uluru → Sydney", duration: "Flexible",
    stops: [
      { destination: "perth" },
      { destination: "uluru", by: "flight" },
      { destination: "sydney", by: "flight" },
    ],
    transport: ["Domestic flights"], styles: ["outback"],
    description: "Coast to centre to coast.",
  },
];

export const circuitById = (id: string) => australiaCircuits.find((c) => c.id === id);
export const listedCircuits = australiaCircuits.filter((c) => c.listed);

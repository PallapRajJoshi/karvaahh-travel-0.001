// data/usa/circuits.ts
// Multi-city journeys. Shown in the circuit builder and as animated route maps
// inside the regional sections. Durations are suggested templates; transport
// per leg is the usual option, confirmed when the trip is quoted.

import type { TravelStyle } from "./travel-styles";

export type LegMode = "flight" | "rail" | "road" | "cruise";

export interface CircuitStop {
  name: string;
  coords: [number, number];
  /** Suggested nights here. */
  nights?: number;
  /** How you usually arrive at this stop from the previous one. */
  by?: LegMode;
  note?: string;
}

export interface USACircuit {
  id: string;
  title: string;
  duration: string;
  stops: CircuitStop[];
  transport: string[];
  styles: TravelStyle[];
  description: string;
  /** Matching template in ./packages.ts, if any. */
  packageId?: string;
  /** Listed in "Multi-City USA Circuits" (others only appear inside a regional section). */
  listed?: boolean;
}

const C = {
  nyc: [40.71, -74.01],
  dc: [38.9, -77.04],
  philly: [39.95, -75.17],
  boston: [42.36, -71.06],
  niagara: [43.09, -79.07],
  orlando: [28.54, -81.38],
  miami: [25.76, -80.19],
  chicago: [41.88, -87.63],
  denver: [39.74, -104.99],
  vegas: [36.17, -115.14],
  gc: [36.06, -112.14],
  page: [36.91, -111.46],
  zion: [37.3, -113.03],
  bryce: [37.59, -112.19],
  la: [34.05, -118.24],
  sf: [37.77, -122.42],
  yosemite: [37.75, -119.59],
  honolulu: [21.31, -157.86],
  maui: [20.8, -156.33],
} satisfies Record<string, [number, number]>;

export const usaCircuits: USACircuit[] = [
  {
    id: "ny-dc-niagara", title: "New York → Washington DC → Niagara Falls", duration: "7N/8D", listed: true, packageId: "nyc-dc-niagara-7n",
    stops: [
      { name: "New York", coords: C.nyc, nights: 3, note: "Manhattan icons, Liberty ferry area, Broadway" },
      { name: "Washington DC", coords: C.dc, nights: 2, by: "rail", note: "National Mall, memorials, Smithsonian" },
      { name: "Niagara Falls", coords: C.niagara, nights: 2, by: "flight", note: "U.S. side viewpoints, seasonal boat" },
    ],
    transport: ["Intercity rail", "Domestic flight", "Private transfers"], styles: ["family", "city-break", "senior-friendly"],
    description: "The most-requested East Coast journey: skyline, monuments and the falls.",
  },
  {
    id: "ny-orlando-miami", title: "New York → Orlando → Miami", duration: "10N/11D", listed: true, packageId: "nyc-orlando-miami-10n",
    stops: [
      { name: "New York", coords: C.nyc, nights: 4, note: "City sightseeing and shopping" },
      { name: "Orlando", coords: C.orlando, nights: 4, by: "flight", note: "Theme-park days (tickets quoted separately)" },
      { name: "Miami", coords: C.miami, nights: 2, by: "road", note: "South Beach and Art Deco" },
    ],
    transport: ["Domestic flight", "Private transfers"], styles: ["family", "theme-parks", "beach"],
    description: "City energy, theme-park magic and Florida beaches.",
  },
  {
    id: "ny-la-lv-sf", title: "New York → Los Angeles → Las Vegas → San Francisco", duration: "12N/13D", listed: true,
    stops: [
      { name: "New York", coords: C.nyc, nights: 4 },
      { name: "Los Angeles", coords: C.la, nights: 3, by: "flight", note: "Coast-to-coast flight" },
      { name: "Las Vegas", coords: C.vegas, nights: 2, by: "flight" },
      { name: "San Francisco", coords: C.sf, nights: 3, by: "flight" },
    ],
    transport: ["Domestic flights", "Private transfers"], styles: ["city-break", "family", "honeymoon"],
    description: "Both coasts and the desert in between, linked by short domestic flights.",
  },
  {
    id: "la-lv-gc", title: "Los Angeles → Las Vegas → Grand Canyon", duration: "7N/8D", listed: true,
    stops: [
      { name: "Los Angeles", coords: C.la, nights: 3 },
      { name: "Las Vegas", coords: C.vegas, nights: 3, by: "flight" },
      { name: "Grand Canyon", coords: C.gc, nights: 1, by: "road", note: "South Rim; return to Las Vegas" },
    ],
    transport: ["Domestic flight", "Chauffeur", "Coach"], styles: ["city-break", "national-parks", "honeymoon"],
    description: "Hollywood, the Strip and the canyon rim.",
  },
  {
    id: "ca-lv-gc", title: "California → Las Vegas → Grand Canyon", duration: "11N/12D", listed: true, packageId: "california-lv-10n",
    stops: [
      { name: "San Francisco", coords: C.sf, nights: 3 },
      { name: "Yosemite", coords: C.yosemite, nights: 1, by: "road", note: "Seasonal road access" },
      { name: "Los Angeles", coords: C.la, nights: 3, by: "road" },
      { name: "Las Vegas", coords: C.vegas, nights: 3, by: "flight" },
      { name: "Grand Canyon", coords: C.gc, nights: 1, by: "road" },
    ],
    transport: ["Chauffeur", "Rental car", "Domestic flight"], styles: ["road-trip", "national-parks", "family"],
    description: "California's cities and parks, then the desert.",
  },
  {
    id: "ny-boston-dc", title: "New York → Boston → Washington DC", duration: "7N/8D", listed: true,
    stops: [
      { name: "New York", coords: C.nyc, nights: 3 },
      { name: "Boston", coords: C.boston, nights: 2, by: "rail", note: "Freedom Trail, Harvard" },
      { name: "Washington DC", coords: C.dc, nights: 2, by: "rail" },
    ],
    transport: ["Intercity rail", "Private transfers"], styles: ["city-break", "senior-friendly", "private"],
    description: "The Northeast Corridor by train, city centre to city centre.",
  },
  {
    id: "ny-chicago-la", title: "New York → Chicago → Los Angeles", duration: "9N/10D", listed: true,
    stops: [
      { name: "New York", coords: C.nyc, nights: 3 },
      { name: "Chicago", coords: C.chicago, nights: 3, by: "flight", note: "Architecture and the lakefront" },
      { name: "Los Angeles", coords: C.la, nights: 3, by: "flight" },
    ],
    transport: ["Domestic flights", "Private transfers"], styles: ["city-break", "shopping", "photography"],
    description: "Three great American cities, east to west.",
  },
  {
    id: "ca-hawaii", title: "California → Hawaii", duration: "11N/12D", listed: true,
    stops: [
      { name: "San Francisco", coords: C.sf, nights: 3 },
      { name: "Los Angeles", coords: C.la, nights: 3, by: "flight" },
      { name: "Honolulu", coords: C.honolulu, nights: 3, by: "flight", note: "Flight over the Pacific" },
      { name: "Maui", coords: C.maui, nights: 2, by: "flight" },
    ],
    transport: ["Domestic flights", "Inter-island flight", "Private transfers"], styles: ["honeymoon", "beach", "luxury"],
    description: "The Golden State, then island time.",
  },
  {
    id: "florida-ny", title: "Florida → New York", duration: "9N/10D", listed: true,
    stops: [
      { name: "Miami", coords: C.miami, nights: 3 },
      { name: "Orlando", coords: C.orlando, nights: 3, by: "road" },
      { name: "New York", coords: C.nyc, nights: 3, by: "flight" },
    ],
    transport: ["Private transfers", "Domestic flight"], styles: ["family", "beach", "city-break"],
    description: "Start in the sun and finish with the skyline.",
  },
  {
    id: "southwest-parks", title: "Southwest National Parks Circuit", duration: "9N/10D", listed: true, packageId: "southwest-roadtrip",
    stops: [
      { name: "Las Vegas", coords: C.vegas, nights: 2 },
      { name: "Zion", coords: C.zion, nights: 2, by: "road" },
      { name: "Bryce Canyon", coords: C.bryce, nights: 1, by: "road" },
      { name: "Page", coords: C.page, nights: 2, by: "road", note: "Antelope Canyon & Horseshoe Bend" },
      { name: "Grand Canyon", coords: C.gc, nights: 2, by: "road" },
    ],
    transport: ["Rental car", "Chauffeur", "Escorted group"], styles: ["national-parks", "road-trip", "adventure", "photography"],
    description: "Five great landscapes on one loop. Park access and permits vary by season.",
  },
  {
    id: "coast-to-coast", title: "USA Coast-to-Coast Journey", duration: "16N/17D", listed: true, packageId: "usa-highlights-12n",
    stops: [
      { name: "New York", coords: C.nyc, nights: 4 },
      { name: "Washington DC", coords: C.dc, nights: 2, by: "rail" },
      { name: "Chicago", coords: C.chicago, nights: 2, by: "flight" },
      { name: "Denver", coords: C.denver, nights: 2, by: "flight" },
      { name: "Las Vegas", coords: C.vegas, nights: 2, by: "flight" },
      { name: "Los Angeles", coords: C.la, nights: 2, by: "flight" },
      { name: "San Francisco", coords: C.sf, nights: 2, by: "flight" },
    ],
    transport: ["Intercity rail", "Domestic flights", "Private transfers"], styles: ["city-break", "photography", "group"],
    description: "Atlantic to Pacific, with the Rockies and the desert on the way.",
  },
  // Section-only routes
  {
    id: "ny-dc-philly", title: "New York → Philadelphia → Washington DC", duration: "6N/7D", packageId: "nyc-dc-philly",
    stops: [
      { name: "New York", coords: C.nyc, nights: 3 },
      { name: "Philadelphia", coords: C.philly, nights: 1, by: "rail" },
      { name: "Washington DC", coords: C.dc, nights: 2, by: "rail" },
    ],
    transport: ["Intercity rail"], styles: ["city-break", "senior-friendly"],
    description: "America's founding story along the rail corridor.",
  },
  {
    id: "ny-boston", title: "New York → Boston", duration: "5N/6D", packageId: "nyc-boston",
    stops: [
      { name: "New York", coords: C.nyc, nights: 3 },
      { name: "Boston", coords: C.boston, nights: 2, by: "rail" },
    ],
    transport: ["Intercity rail"], styles: ["city-break"],
    description: "Skyscrapers to cobbled streets.",
  },
  {
    id: "lv-gc-zion", title: "Las Vegas → Grand Canyon → Zion", duration: "7N/8D", packageId: "vegas-gc-zion-7n",
    stops: [
      { name: "Las Vegas", coords: C.vegas, nights: 2 },
      { name: "Grand Canyon", coords: C.gc, nights: 2, by: "road" },
      { name: "Page", coords: C.page, nights: 1, by: "road" },
      { name: "Zion", coords: C.zion, nights: 2, by: "road" },
    ],
    transport: ["Chauffeur", "Rental car"], styles: ["national-parks", "road-trip"],
    description: "Canyon country in a week.",
  },
  {
    id: "la-lv-sf", title: "Los Angeles → Las Vegas → San Francisco", duration: "9N/10D", packageId: "la-lv-sf-9n",
    stops: [
      { name: "Los Angeles", coords: C.la, nights: 3, note: "Hollywood, Santa Monica, theme-park option" },
      { name: "Las Vegas", coords: C.vegas, nights: 3, by: "flight", note: "The Strip + Grand Canyon day" },
      { name: "San Francisco", coords: C.sf, nights: 3, by: "flight", note: "Golden Gate, Wharf, wine country" },
    ],
    transport: ["Domestic flights", "Private transfers"], styles: ["city-break", "family", "honeymoon"],
    description: "The flagship West Coast journey.",
  },
];

export const circuitById = (id: string) => usaCircuits.find((c) => c.id === id);
export const listedCircuits = usaCircuits.filter((c) => c.listed);

export const nightsTotal = (c: USACircuit) => c.stops.reduce((n, s) => n + (s.nights ?? 0), 0);

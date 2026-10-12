// data/usa/roadTrips.ts
// Road-trip routes. Distances and drive times are approximate totals for the
// main route before detours and stops; they are planning guides, not promises.
// Road conditions, closures and seasonal access change and are checked before travel.

import type { USAImageId } from "./images";

export type TravelMode = "self-drive" | "chauffeur" | "escorted" | "flights";

export const travelModes: { id: TravelMode; label: string; text: string }[] = [
  { id: "self-drive", label: "Self-drive", text: "Rental car with a planned route and booked stops. Driving rules and licence requirements apply." },
  { id: "chauffeur", label: "Private chauffeur", text: "Your own driver and vehicle, so nobody has to drive on unfamiliar roads." },
  { id: "escorted", label: "Escorted group", text: "Join a guided coach or small-group tour on popular routes." },
  { id: "flights", label: "Domestic flights", text: "Fly the long legs and drive only the scenic parts." },
];

export interface USARoadTrip {
  id: string;
  title: string;
  image?: USAImageId;
  stops: { name: string; coords: [number, number] }[];
  distance: string;
  driveTime: string;
  duration: string;
  season: string;
  modes: TravelMode[];
  description: string;
  notes?: string[];
}

export const usaRoadTrips: USARoadTrip[] = [
  {
    id: "pch", title: "Pacific Coast Highway", image: "big-sur",
    stops: [
      { name: "San Francisco", coords: [37.77, -122.42] },
      { name: "Monterey", coords: [36.6, -121.89] },
      { name: "Big Sur", coords: [36.27, -121.81] },
      { name: "Santa Barbara", coords: [34.42, -119.7] },
      { name: "Los Angeles", coords: [34.05, -118.24] },
    ],
    distance: "approx. 750 km (470 mi)", driveTime: "approx. 10–12 hours of driving", duration: "4–6 days",
    season: "Spring to autumn; coastal fog is common in early summer",
    modes: ["self-drive", "chauffeur", "escorted"],
    description: "Cliffs, coves and coastal towns on one of the world's great drives.",
    notes: ["Sections of Highway 1 around Big Sur can close after landslides; routes are checked before travel."],
  },
  {
    id: "california-coast", title: "California Coast", image: "san-diego",
    stops: [
      { name: "San Diego", coords: [32.72, -117.16] },
      { name: "Los Angeles", coords: [34.05, -118.24] },
      { name: "Santa Barbara", coords: [34.42, -119.7] },
      { name: "Big Sur", coords: [36.27, -121.81] },
      { name: "San Francisco", coords: [37.77, -122.42] },
    ],
    distance: "approx. 1,000 km (620 mi)", driveTime: "approx. 13–15 hours of driving", duration: "7–9 days",
    season: "Year-round; spring and autumn are ideal",
    modes: ["self-drive", "chauffeur", "flights"],
    description: "The whole Southern and Central California coast, beach towns to the Golden Gate.",
  },
  {
    id: "vegas-utah", title: "Las Vegas → Grand Canyon → Utah Parks", image: "monument-road",
    stops: [
      { name: "Las Vegas", coords: [36.17, -115.14] },
      { name: "Grand Canyon", coords: [36.06, -112.14] },
      { name: "Page", coords: [36.91, -111.46] },
      { name: "Bryce Canyon", coords: [37.59, -112.19] },
      { name: "Zion", coords: [37.3, -113.03] },
      { name: "Las Vegas", coords: [36.17, -115.14] },
    ],
    distance: "approx. 1,300 km (810 mi)", driveTime: "approx. 15–17 hours of driving", duration: "7–9 days",
    season: "Spring and autumn; summer is very hot, winter can bring snow at altitude",
    modes: ["self-drive", "chauffeur", "escorted"],
    description: "Canyons, hoodoos and slot canyons in a desert loop.",
    notes: ["Some areas need timed entry, shuttle tickets or permits, which vary by season."],
  },
  {
    id: "yellowstone-teton", title: "Yellowstone → Grand Teton", image: "teton",
    stops: [
      { name: "Salt Lake City", coords: [40.76, -111.89] },
      { name: "Jackson", coords: [43.48, -110.76] },
      { name: "Grand Teton", coords: [43.79, -110.68] },
      { name: "Yellowstone", coords: [44.43, -110.59] },
    ],
    distance: "approx. 900–1,100 km (560–680 mi) incl. park loops", driveTime: "approx. 12–15 hours of driving", duration: "6–8 days",
    season: "Late May to September; most park roads close to cars in winter",
    modes: ["self-drive", "chauffeur", "escorted"],
    description: "Geysers, wildlife and mountain lakes in two neighbouring parks.",
    notes: ["Wildlife viewing needs patience and distance; park rules on approaching animals apply."],
  },
  {
    id: "florida-keys", title: "Florida Keys", image: "florida-keys",
    stops: [
      { name: "Miami", coords: [25.76, -80.19] },
      { name: "Key Largo", coords: [25.09, -80.45] },
      { name: "Marathon", coords: [24.71, -81.09] },
      { name: "Key West", coords: [24.56, -81.78] },
    ],
    distance: "approx. 260 km (160 mi)", driveTime: "approx. 3.5–4.5 hours of driving", duration: "2–4 days",
    season: "December to April; hurricane season runs June to November",
    modes: ["self-drive", "chauffeur", "escorted"],
    description: "The Overseas Highway hops island to island over turquoise water.",
  },
  {
    id: "new-england", title: "New York → New England", image: "new-england",
    stops: [
      { name: "New York", coords: [40.71, -74.01] },
      { name: "Boston", coords: [42.36, -71.06] },
      { name: "Portland (Maine)", coords: [43.66, -70.26] },
      { name: "Acadia", coords: [44.39, -68.2] },
      { name: "Vermont", coords: [44.47, -72.69] },
      { name: "New York", coords: [40.71, -74.01] },
    ],
    distance: "approx. 1,500 km (930 mi)", driveTime: "approx. 18–21 hours of driving", duration: "7–10 days",
    season: "Late September to mid-October for autumn foliage (timing varies each year); summer for the coast",
    modes: ["self-drive", "chauffeur", "escorted"],
    description: "Lighthouses, lobster towns and blazing autumn colour.",
  },
  {
    id: "southwest-np", title: "Southwest National Parks", image: "arches",
    stops: [
      { name: "Las Vegas", coords: [36.17, -115.14] },
      { name: "Zion", coords: [37.3, -113.03] },
      { name: "Bryce Canyon", coords: [37.59, -112.19] },
      { name: "Arches & Canyonlands", coords: [38.57, -109.55] },
      { name: "Monument Valley", coords: [36.99, -110.1] },
      { name: "Grand Canyon", coords: [36.06, -112.14] },
      { name: "Las Vegas", coords: [36.17, -115.14] },
    ],
    distance: "approx. 2,200–2,500 km (1,370–1,550 mi)", driveTime: "approx. 26–30 hours of driving", duration: "10–14 days",
    season: "Spring and autumn",
    modes: ["self-drive", "chauffeur", "escorted", "flights"],
    description: "The grand tour of Utah and Arizona's parks.",
    notes: ["Timed-entry systems and seasonal closures apply at some parks; we check them for your dates."],
  },
];

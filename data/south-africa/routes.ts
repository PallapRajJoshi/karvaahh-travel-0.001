// data/south-africa/routes.ts
// Multi-city circuits and road trips. Stops are destination ids so routes draw
// on the map. Durations and drive times are approximate and exclude stops.

import type { SouthAfricaTravelStyle } from "./types";

export interface SACircuit {
  id: string;
  name: string;
  stops: string[];
  duration: string;
  transport: string;
  styles: SouthAfricaTravelStyle[];
  highlights: string[];
  /** Legs flown rather than driven (index of the leg's start stop). */
  flightLegs?: number[];
}

export const saCircuits: SACircuit[] = [
  { id: "ct-wine-kruger", name: "Cape Town → Winelands → Kruger", stops: ["cape-town", "stellenbosch", "kruger"], duration: "8–10 nights", transport: "Road + domestic flight", styles: ["safari", "food-wine", "honeymoon", "luxury"], highlights: ["Table Mountain", "Estate tastings", "Big Five game drives"], flightLegs: [1] },
  { id: "ct-gr-safari", name: "Cape Town → Garden Route → Safari", stops: ["cape-town", "knysna", "plettenberg-bay", "addo"], duration: "9–11 nights", transport: "Self-drive or chauffeur", styles: ["road-trip", "safari", "family", "nature"], highlights: ["Peninsula", "Lagoons and beaches", "Malaria-free safari"] },
  { id: "ct-jnb-kruger", name: "Cape Town → Johannesburg → Kruger", stops: ["cape-town", "johannesburg", "kruger"], duration: "7–9 nights", transport: "Domestic flights + road", styles: ["safari", "city-tour", "culture"], highlights: ["Two cities", "Kruger game drives"], flightLegs: [0] },
  { id: "ct-gr-addo", name: "Cape Town → Garden Route → Addo", stops: ["cape-town", "hermanus", "knysna", "addo"], duration: "9–10 nights", transport: "Self-drive or chauffeur", styles: ["road-trip", "safari", "nature", "photography"], highlights: ["Whale coast", "Knysna", "Addo elephants"] },
  { id: "jnb-panorama-kruger", name: "Johannesburg → Panorama Route → Kruger", stops: ["johannesburg", "panorama-route", "blyde-river-canyon", "kruger"], duration: "5–7 nights", transport: "Self-drive or private road transfer", styles: ["road-trip", "safari", "nature"], highlights: ["God's Window", "Blyde River Canyon", "Kruger"] },
  { id: "jnb-sun-pilanesberg", name: "Johannesburg → Sun City → Pilanesberg", stops: ["johannesburg", "sun-city", "pilanesberg"], duration: "4–5 nights", transport: "Road transfers", styles: ["family", "safari", "luxury"], highlights: ["Resort days", "Malaria-free Big Five reserve"] },
  { id: "dur-drak", name: "Durban → Drakensberg", stops: ["durban", "drakensberg"], duration: "5–6 nights", transport: "Road transfer or self-drive", styles: ["beach", "adventure", "nature"], highlights: ["Indian Ocean", "Mountain hikes"] },
  { id: "ct-herm-gr", name: "Cape Town → Hermanus → Garden Route", stops: ["cape-town", "hermanus", "mossel-bay", "knysna", "plettenberg-bay"], duration: "7–9 nights", transport: "Self-drive or chauffeur", styles: ["road-trip", "nature", "honeymoon", "beach"], highlights: ["Seasonal whales", "Coastal drives", "Beaches"] },
  { id: "ct-jnb-kruger-sun", name: "Cape Town → Johannesburg → Kruger → Sun City", stops: ["cape-town", "johannesburg", "kruger", "sun-city"], duration: "10–12 nights", transport: "Domestic flights + road", styles: ["family", "safari", "city-tour"], highlights: ["Cape Town", "Kruger", "Sun City resort"], flightLegs: [0] },
  { id: "ct-gr-addo-jnb", name: "Cape Town → Garden Route → Addo → Johannesburg", stops: ["cape-town", "knysna", "addo", "johannesburg"], duration: "11–13 nights", transport: "Road + domestic flight", styles: ["road-trip", "safari", "city-tour"], highlights: ["Coast", "Addo", "Fly north to Johannesburg"], flightLegs: [2] },
];

export type TravelMode = "self-drive" | "chauffeur" | "guided" | "escorted";

export const travelModes: { id: TravelMode; label: string; text: string }[] = [
  { id: "self-drive", label: "Self-drive", text: "Your own rental car and pace. Requires a valid licence and, for many visitors, an International Driving Permit. Driving is on the left." },
  { id: "chauffeur", label: "Private chauffeur", text: "A private driver-guide and vehicle: relaxed, flexible and ideal for wine country." },
  { id: "guided", label: "Guided tour", text: "A private or small-group guide who handles the driving and the stories." },
  { id: "escorted", label: "Escorted group", text: "Fixed-date group departures where available, with a tour leader." },
];

export interface RoadTrip {
  id: string;
  name: string;
  stops: string[];
  duration: string;
  scenicStops: string[];
  driveTime?: string;
  styles: SouthAfricaTravelStyle[];
  season: string;
  /** Modes that suit this route. */
  modes: TravelMode[];
}

export const roadTrips: RoadTrip[] = [
  { id: "ct-gr", name: "Cape Town → Garden Route", stops: ["cape-town", "mossel-bay", "knysna", "plettenberg-bay"], duration: "5–7 days", scenicStops: ["Route 62 or N2", "Wilderness lakes", "Knysna Heads"], driveTime: "~6–7 hrs total to Plettenberg Bay", styles: ["road-trip", "nature", "beach"], season: "Year-round", modes: ["self-drive", "chauffeur", "guided", "escorted"] },
  { id: "ct-herm-gr", name: "Cape Town → Hermanus → Garden Route", stops: ["cape-town", "hermanus", "mossel-bay", "knysna"], duration: "6–8 days", scenicStops: ["Clarence Drive", "Hermanus cliff path", "Cape Agulhas detour"], driveTime: "~1.5 hrs to Hermanus, then ~4 hrs to Mossel Bay", styles: ["road-trip", "wildlife", "nature"], season: "June–November for whales", modes: ["self-drive", "chauffeur", "guided"] },
  { id: "ct-wine", name: "Cape Town → Winelands", stops: ["cape-town", "stellenbosch", "franschhoek"], duration: "1–3 days", scenicStops: ["Helshoogte Pass", "Franschhoek valley"], driveTime: "~45–75 min", styles: ["food-wine", "honeymoon", "luxury"], season: "Year-round", modes: ["chauffeur", "guided"] },
  { id: "jnb-panorama", name: "Johannesburg → Panorama Route → Kruger", stops: ["johannesburg", "panorama-route", "blyde-river-canyon", "kruger"], duration: "3–5 days", scenicStops: ["Dullstroom", "God's Window", "Three Rondavels"], driveTime: "~5 hrs to Graskop", styles: ["road-trip", "nature", "safari"], season: "Year-round", modes: ["self-drive", "chauffeur", "guided", "escorted"] },
  { id: "dur-drak", name: "Durban → Drakensberg", stops: ["durban", "drakensberg"], duration: "3–5 days", scenicStops: ["Midlands Meander", "Valley viewpoints"], driveTime: "~3–4 hrs", styles: ["road-trip", "adventure", "nature"], season: "Spring and autumn", modes: ["self-drive", "chauffeur", "guided"] },
  { id: "gr-addo", name: "Garden Route → Addo", stops: ["plettenberg-bay", "addo"], duration: "2–3 days", scenicStops: ["Tsitsikamma", "Storms River"], driveTime: "~3 hrs", styles: ["road-trip", "safari", "family"], season: "Year-round", modes: ["self-drive", "chauffeur", "guided"] },
  { id: "western-cape", name: "Western Cape Scenic Journey", stops: ["cape-town", "franschhoek", "oudtshoorn", "knysna", "hermanus"], duration: "8–10 days", scenicStops: ["Mountain passes", "Klein Karoo", "Coastal return"], styles: ["road-trip", "nature", "food-wine", "photography"], season: "Spring and autumn", modes: ["self-drive", "chauffeur"] },
];

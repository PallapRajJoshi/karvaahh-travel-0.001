// data/south-africa/gateways.ts
// Departure cities and transport. No airlines, schedules or direct routes
// are claimed; connections are confirmed per booking.

import type { FeatureItem } from "./types";

export const departureCities = [
  { id: "ktm", city: "Kathmandu", country: "Nepal" },
  { id: "del", city: "Delhi", country: "India" },
  { id: "bom", city: "Mumbai", country: "India" },
  { id: "blr", city: "Bengaluru", country: "India" },
  { id: "ccu", city: "Kolkata", country: "India" },
  { id: "other", city: "Other gateways", country: "" },
];

export const FLIGHTS_NOTE =
  "We never assume a direct flight. Routings, airlines and connections depend on your city and dates, and are confirmed when we plan your trip.";

export const arrivalGateways = [
  { id: "jnb", name: "Johannesburg", text: "The main international hub; ideal for Kruger, Sun City and onward flights." },
  { id: "cpt", name: "Cape Town", text: "Arrive direct to the Cape where routings allow, or connect via Johannesburg." },
  { id: "dur", name: "Durban", text: "For KwaZulu-Natal and the Drakensberg, usually via a connection." },
];

export const journeyChain = ["International flight", "Cape Town / Johannesburg", "Domestic flight", "Safari lodge", "Road transfer"];

export const transportOptions: FeatureItem[] = [
  { id: "intl", title: "International flights", text: "Routed via hubs that suit your city and dates.", icon: "plane" },
  { id: "domestic", title: "Domestic flights", text: "Cape Town, Johannesburg, Durban, George, Gqeberha and safari airports.", icon: "plane" },
  { id: "airport", title: "Private airport transfers", text: "Met on arrival, door to door.", icon: "car" },
  { id: "chauffeur", title: "Chauffeur services", text: "Private driver-guides for touring days.", icon: "users" },
  { id: "rental", title: "Rental cars", text: "For self-drive routes; licence requirements apply.", icon: "car" },
  { id: "road", title: "Guided road transfers", text: "Between cities, parks and lodges.", icon: "map" },
  { id: "coach", title: "Coaches", text: "For groups and escorted departures.", icon: "users" },
  { id: "safari", title: "Safari transfers", text: "Light aircraft or road transfers to lodges, where available.", icon: "binoculars" },
];

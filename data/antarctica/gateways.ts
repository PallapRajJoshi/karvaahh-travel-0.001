// data/antarctica/gateways.ts
// Ushuaia gateway, departure cities in Nepal/India and the transport chain.
// No flight schedules, airlines, hotels or direct routes are claimed; each
// item describes what Karvaahh coordinates, and the specifics are confirmed
// per booking.

import type { ExperienceItem } from "./types";

export const ushuaiaServices: ExperienceItem[] = [
  { id: "pre", title: "Pre-expedition stay", text: "At least one night before embarkation is strongly recommended in case of flight delays.", icon: "hotel" },
  { id: "transfers", title: "Airport transfers", text: "Airport to hotel, and hotel to pier on embarkation day.", icon: "compass" },
  { id: "hotel", title: "Hotel accommodation", text: "Category matched to your preference, confirmed at booking.", icon: "sparkles" },
  { id: "embark", title: "Expedition embarkation", text: "Check-in timings and luggage rules as set by your operator.", icon: "ship" },
  { id: "post", title: "Post-expedition stay", text: "A night to rest before the long journey home.", icon: "sun" },
  { id: "extensions", title: "South America extensions", text: "Patagonia, Buenos Aires or Chile before or after.", icon: "map" },
];

export interface DepartureCity {
  id: string;
  city: string;
  country: "Nepal" | "India" | "Other";
  /** Indicative connection pattern, never a specific flight. */
  via: string;
}

export const departureCities: DepartureCity[] = [
  { id: "ktm", city: "Kathmandu", country: "Nepal", via: "Usually via a hub in the Middle East, India or Asia, then onward connections" },
  { id: "del", city: "Delhi", country: "India", via: "Usually via a Middle East or European hub, then onward to South America" },
  { id: "bom", city: "Mumbai", country: "India", via: "Usually via a Middle East, African or European hub" },
  { id: "blr", city: "Bengaluru", country: "India", via: "Usually via a Middle East or European hub" },
  { id: "ccu", city: "Kolkata", country: "India", via: "Usually via a Middle East or Asian hub" },
  { id: "other", city: "Other airports", country: "Other", via: "Chennai, Hyderabad, Pokhara and others, routed through suitable hubs" },
];

/** The journey chain for the Nepal/India visualisation. */
export const journeyStages = (city: string) => [
  { id: "origin", label: city, sub: "Departure city" },
  { id: "hub", label: "International hub", sub: "One or more connections" },
  { id: "sa", label: "South America", sub: "Typically Buenos Aires or Santiago" },
  { id: "gateway", label: "Ushuaia", sub: "Or Punta Arenas for air-cruises" },
  { id: "antarctica", label: "Antarctica", sub: "Expedition voyage" },
];

export const NO_DIRECT_FLIGHTS =
  "Journeys from Nepal and India to South America typically involve one or more connections; we never assume a direct flight. Routings, airlines and connection times are confirmed when we plan your trip.";

/** Transport chain + logistics cards. */
export const transportSteps: ExperienceItem[] = [
  { id: "intl", title: "International flight", text: "From Nepal or India to South America, via one or more hubs.", icon: "plane" },
  { id: "gateway", title: "South America gateway", text: "A domestic flight on to Ushuaia (or Punta Arenas), with an overnight buffer.", icon: "map" },
  { id: "embark", title: "Expedition embarkation", text: "Transfer to the pier and board your expedition vessel.", icon: "anchor" },
  { id: "antarctica", title: "Antarctica", text: "Ship-based exploration with Zodiac landings where permitted.", icon: "snowflake" },
  { id: "return", title: "Return", text: "Disembark, rest a night, and fly home or start an extension.", icon: "compass" },
];

export const logistics: ExperienceItem[] = [
  { id: "intl", title: "International flights", text: "Routed via hubs that suit your city, dates and visa situation.", icon: "plane" },
  { id: "domestic", title: "Domestic South America flights", text: "Connections to Ushuaia or Punta Arenas, timed with buffers.", icon: "map" },
  { id: "transfers", title: "Transfers", text: "Airport, hotel and pier transfers in each city.", icon: "compass" },
  { id: "ships", title: "Expedition ships", text: "Matched to your style, budget and cabin preference.", icon: "ship" },
  { id: "zodiacs", title: "Zodiac boats", text: "Provided by your operator for landings and cruising.", icon: "waves" },
  { id: "air", title: "Air-cruise flights", text: "Flights over the Drake, where operationally available.", icon: "plane" },
  { id: "stays", title: "Pre/post accommodation", text: "Hotels before and after the voyage, in your chosen category.", icon: "hotel" },
];

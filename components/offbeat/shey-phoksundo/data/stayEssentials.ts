import type { AccommodationOption, EssentialItem, PermitNote } from "./types";

// Section 13: Accommodation & Stay Options — no hotel names, ratings, facilities, or
// prices are invented.
export const ACCOMMODATION_OPTIONS: AccommodationOption[] = [
  {
    id: "local-lodges-guesthouses",
    title: "Local Lodges & Guesthouses",
    description: "Simple lodging available along the more accessible parts of the route.",
    image: "/images/offbeat/shey-phoksundo/accommodation/local-lodges.jpg",
    alt: "Local lodge in the Dolpo region",
  },
  {
    id: "basic-mountain-accommodation",
    title: "Basic Mountain Accommodation",
    description: "Modest accommodation suited to the remote, high-altitude setting.",
    image: "/images/offbeat/shey-phoksundo/accommodation/mountain-accommodation.jpg",
    alt: "Basic mountain accommodation in a Dolpo settlement",
  },
  {
    id: "community-homestays",
    title: "Community-Based Homestays",
    description: "Where available, homestays offer a closer connection to local life.",
    image: "/images/offbeat/shey-phoksundo/accommodation/community-homestays.jpg",
    alt: "Community homestay setting in a Dolpo village",
  },
  {
    id: "authorized-camping",
    title: "Camping in Authorized Areas",
    description: "Camping is possible in designated and authorized areas of the park.",
    image: "/images/offbeat/shey-phoksundo/accommodation/authorized-camping.jpg",
    alt: "Camping tents in an authorized area near Phoksundo Lake",
  },
  {
    id: "supported-trekking-camps",
    title: "Supported Trekking-Camp Arrangements",
    description: "For extended expeditions, supported camp arrangements can be organized.",
    image: "/images/offbeat/shey-phoksundo/accommodation/trekking-camps.jpg",
    alt: "Supported trekking camp arrangement for an extended Dolpo expedition",
  },
];

export const ACCOMMODATION_NOTE =
  "Accommodation and amenities may be limited in remote Dolpo.";

// Section 14: Travel Essentials, Permits & Safety
export const ESSENTIALS_CHECKLIST: EssentialItem[] = [
  { id: "warm-layers", label: "Warm layered clothing" },
  { id: "waterproof-jacket", label: "Waterproof jacket and weather protection" },
  { id: "trekking-boots", label: "Comfortable trekking boots" },
  { id: "sun-protection", label: "Sun protection and sunglasses" },
  { id: "first-aid", label: "Personal medication and first-aid supplies" },
  { id: "water-bottle", label: "Reusable water bottle and water purification supplies" },
  { id: "power-bank-maps", label: "Power bank and offline maps" },
  { id: "cash", label: "Cash for remote areas" },
  { id: "trekking-camping-gear", label: "Suitable trekking and camping equipment" },
  { id: "advance-confirmation", label: "Advance confirmation of transport and accommodation" },
  { id: "altitude-awareness", label: "Awareness of altitude, weather, and remote-area conditions" },
];

export const PERMIT_NOTES: PermitNote[] = [
  { id: "park-entry", text: "Entry to Shey Phoksundo National Park may require applicable permits." },
  { id: "restricted-area", text: "Certain Upper Dolpo trekking routes are subject to restricted-area permit requirements." },
  { id: "verify-requirements", text: "Permit rules, fees, documentation, and guide requirements must be verified before travel." },
  { id: "follow-regulations", text: "Visitors should follow national park regulations and local access restrictions." },
];

export const HIGH_ALTITUDE_SAFETY =
  "Gradual acclimatization, suitable physical preparation, local guidance, and contingency planning are all important for remote high-altitude travel in the Dolpo region.";

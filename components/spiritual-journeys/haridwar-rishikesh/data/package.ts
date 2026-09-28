import type { OverviewFact, ServiceLine } from "./types";

export const OVERVIEW_FACTS: OverviewFact[] = [
  { label: "Destination", value: "Haridwar & Rishikesh" },
  { label: "State", value: "Uttarakhand, India" },
  { label: "Tour category", value: "Spiritual & religious pilgrimage" },
  {
    label: "Main attractions",
    value: "Har Ki Pauri, Triveni Ghat, Parmarth Niketan, Neelkanth Mahadev Temple",
  },
  {
    label: "Main experiences",
    value: "Ganga Aarti, temple visits, ashram visits, spiritual reflection",
  },
  { label: "Ideal for", value: "Families, devotees, senior travellers, spiritual seekers" },
  { label: "Duration", value: "Customisable, based on the selected package" },
  { label: "Starting point", value: "As per the selected package" },
  { label: "Accommodation", value: "Selected hotels, as specified in your package" },
  { label: "Transport", value: "Private vehicle, as per the package" },
];

export const ACCOMMODATION: { intro: string; lines: ServiceLine[] } = {
  intro:
    "You stay in selected hotels in Haridwar and Rishikesh. The hotel category, room type and meal plan follow the package you choose, and specific properties are confirmed only at booking.",
  lines: [
    { text: "Twin-sharing and triple-sharing rooms, where available", packageDependent: true },
    { text: "Hotel category according to your selected package", packageDependent: true },
    { text: "Meal plan according to your selected package", packageDependent: true },
    { text: "Check-in and check-out follow each hotel's standard policy", packageDependent: false },
    { text: "All rooms are subject to availability at the time of booking", packageDependent: false },
  ],
};

export const TRANSPORT: { intro: string; lines: ServiceLine[] } = {
  intro:
    "A private vehicle with a driver can be arranged for the whole journey, sized to your group and chosen package.",
  lines: [
    { text: "Pickup and drop-off at designated points", packageDependent: false },
    { text: "Sightseeing transfers as per the itinerary", packageDependent: false },
    { text: "Vehicle category according to group size and package", packageDependent: true },
    {
      text: "Driver allowance, fuel, parking and applicable road taxes, when included in your package",
      packageDependent: true,
    },
  ],
};

/**
 * Consolidated from the brief: the repeated accommodation, meals and
 * coordination lines are merged so no inclusion appears twice.
 */
export const INCLUSIONS: string[] = [
  "Accommodation in selected hotels on a twin- or triple-sharing basis, as specified in your package",
  "Breakfast and dinner as per the selected package",
  "Private transportation throughout the itinerary",
  "Pickup and drop-off at the designated starting and ending points",
  "Sightseeing and transfers mentioned in the itinerary",
  "Driver allowance, fuel, parking and applicable road taxes",
  "Help with planning temple visits and pilgrimage arrangements, where applicable",
  "Tour coordinator or driver assistance and basic travel coordination throughout the journey",
  "Permits and entry fees only where specifically listed in your package",
];

export const INCLUSIONS_NOTE =
  "Temple entry, special darshan, puja and rituals are not included unless your package confirms them in writing.";

export const EXCLUSIONS: string[] = [
  "Train or flight tickets, unless specifically mentioned",
  "Personal expenses such as laundry, phone calls, room service and shopping",
  "Lunch, snacks and beverages, unless specifically included",
  "Temple donations, special darshan, puja and ritual expenses",
  "Adventure activities such as river rafting, bungee jumping and camping",
  "Local guide, porter and optional transport charges",
  "Travel insurance and medical expenses",
  "Extra accommodation or transport caused by weather, road closures, delays or other unforeseen events",
  "Costs arising from government restrictions, changed operating conditions or itinerary changes",
  "Tips and gratuities",
  "Anything not listed under package inclusions",
];

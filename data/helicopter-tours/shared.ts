/* ============================================================
   HELICOPTER TOURS — SHARED CONTENT BLOCKS
   ------------------------------------------------------------
   Company-level and operational content that is the same for
   every destination. Destination files compose these instead of
   repeating them, and override any line that differs.
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";

/** Verified Karvaahh information only — no counts, ratings, awards or records. */
export const karvaahhTrust: HelicopterTour["trust"] = {
  title: "Karvaahh – Live to Travel",
  intro: "Karvaahh Tours & Travels is a Nepal and India travel specialist with teams in Kathmandu and Delhi NCR.",
  points: [
    { title: "Nepal & India travel specialists", text: "Himalayan journeys from Mustang and Muktinath to Everest and Kailash." },
    { title: "Customised Himalayan journeys", text: "Private and group travel planned around your dates." },
    { title: "Local travel assistance", text: "A Nepal-based team that coordinates permits and operators for you." },
  ],
};

export const standardExclusions: string[] = [
  "Personal expenses",
  "Meals unless included",
  "Accommodation unless included",
  "Travel insurance",
  "Additional transportation",
  "Additional services",
  "Weather-related operational costs where applicable",
];

export const standardInclusions: HelicopterTour["inclusions"] = [
  { text: "Helicopter flight according to the selected package", status: "included" },
  { text: "Scenic Himalayan sightseeing", status: "included" },
  { text: "Ground transfers where included", status: "package" },
  { text: "Applicable permits / fees where included", status: "package" },
  { text: "Travel assistance where specified", status: "package" },
];

type BeforeYouFly = { permits: string; landing?: string; route?: string; altitude?: string };

/** The ten "Before You Fly" cards, with destination-specific permit, landing, route and altitude lines. */
export function beforeYouFly({ permits, landing, route, altitude }: BeforeYouFly): HelicopterTour["safety"]["points"] {
  return [
    { icon: "cloud", title: "Weather", text: "Mountain flights are highly weather dependent and may be delayed, rerouted or rescheduled." },
    {
      icon: "mountainSnow",
      title: "Altitude",
      text: altitude ?? "Parts of the flight reach high altitude. Consult a doctor if you have heart, lung or blood-pressure conditions.",
    },
    { icon: "luggage", title: "Baggage", text: "Carry only a small bag with essentials. The operator confirms the allowance before the flight." },
    { icon: "passport", title: "Identification", text: "Carry a valid passport or government ID; foreign nationals may need additional documents." },
    { icon: "weight", title: "Weight limits", text: "Passenger and total weight limits apply and can change with altitude and conditions." },
    { icon: "file", title: "Permits", text: permits },
    { icon: "mapPin", title: "Landing", text: landing ?? "Landing is never guaranteed and is possible only at approved locations, when conditions allow." },
    { icon: "route", title: "Flight route", text: route ?? "The actual route depends on weather, air traffic, aviation regulations and the operator." },
    { icon: "shield", title: "Safety", text: "The pilot's and operator's decisions on safety are final." },
    { icon: "umbrella", title: "Insurance", text: "Travel insurance that covers helicopter travel and high altitude is strongly recommended." },
  ];
}

export const standardTravelerTypes: HelicopterTour["travelerTypes"]["items"] = [
  { icon: "camera", title: "Photography Enthusiasts", text: "Rare aerial angles over peaks, valleys and villages." },
  { icon: "mountainSnow", title: "Adventure Travellers", text: "Reach high Himalayan country in a single day." },
  { icon: "shield", title: "Luxury Travellers", text: "A private, premium Himalayan experience." },
  { icon: "users", title: "Families", text: "See the mountains together without long treks." },
  { icon: "heart", title: "Couples", text: "An unforgettable shared journey above the clouds." },
  { icon: "landmark", title: "Culture Lovers", text: "Glimpse mountain heritage, monasteries and villages." },
  { icon: "compass", title: "Himalayan Explorers", text: "Discover regions few visitors ever reach." },
  { icon: "clock", title: "Short-Stay Travellers", text: "A major Himalayan experience in hours, not days." },
];

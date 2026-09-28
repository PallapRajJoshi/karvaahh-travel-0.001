import type { TrekPackage } from "./types";

/**
 * Verified trek packages only. While this array is empty, the page shows a
 * "Request a Customized Trek Package" card instead of invented offers.
 *
 * Example entry (do NOT publish without verified details and a dated price):
 *
 * {
 *   id: "classic-17",
 *   title: "Everest Three Passes — Classic",
 *   durationDays: 17,
 *   difficulty: "Challenging",
 *   routeSummary: "Kongma La → EBC & Kala Patthar → Cho La → Gokyo → Renjo La",
 *   accommodation: "Tea houses on trek; 3-star hotel in Kathmandu",
 *   inclusions: ["Licensed guide", "Permits", "Domestic flights"],
 *   exclusions: ["International flights", "Travel insurance", "Personal expenses"],
 *   price: { amount: 185000, currency: "INR", basis: "per person, twin share", verifiedOn: "2026-09-01" },
 *   detailsHref: "/packages/everest-three-passes-classic",
 * }
 */
export const packages: TrekPackage[] = [];

/** Shown when `packages` is empty. */
export const customPackage = {
  title: "Request a Customized Trek Package",
  body:
    "Tell us your dates, trekking experience and preferred pace. We'll propose a Three Passes itinerary with the right acclimatisation and buffer days, and confirm what's included — subject to guide, lodge and flight availability for your dates.",
  points: [
    "Private or small-group departures",
    "Extra acclimatisation or buffer days",
    "Direction of travel and side trips planned around you",
    "Clear inclusions and exclusions before you commit",
  ],
};

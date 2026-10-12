// data/australia/travel-styles.ts
// ONE travel-style taxonomy for the Australia page. The destination filters,
// the travel-style filter, destination / package / experience cards and the
// trip builder all use these ids.

export type AustraliaTravelStyle =
  | "honeymoon"
  | "family"
  | "luxury"
  | "budget"
  | "group"
  | "private"
  | "senior-friendly"
  | "adventure"
  | "beach"
  | "wildlife"
  | "reef"
  | "diving"
  | "road-trip"
  | "nature"
  | "outback"
  | "food-wine"
  | "shopping"
  | "city-break"
  | "cruise"
  | "island"
  | "educational"
  | "custom";

/** Display order of the "Australia by Travel Style" filter. */
export const travelStyles: { id: AustraliaTravelStyle; label: string }[] = [
  { id: "honeymoon", label: "Honeymoon" },
  { id: "family", label: "Family" },
  { id: "luxury", label: "Luxury" },
  { id: "budget", label: "Budget" },
  { id: "group", label: "Group Tours" },
  { id: "private", label: "Private Tours" },
  { id: "senior-friendly", label: "Senior-Friendly" },
  { id: "adventure", label: "Adventure" },
  { id: "beach", label: "Beach Holidays" },
  { id: "wildlife", label: "Wildlife" },
  { id: "reef", label: "Reefs & Marine" },
  { id: "diving", label: "Diving & Snorkelling" },
  { id: "road-trip", label: "Road Trips" },
  { id: "nature", label: "Nature" },
  { id: "outback", label: "Outback" },
  { id: "food-wine", label: "Food & Wine" },
  { id: "shopping", label: "Shopping" },
  { id: "city-break", label: "City Breaks" },
  { id: "cruise", label: "Cruises" },
  { id: "island", label: "Island Holidays" },
  { id: "educational", label: "Educational Tours" },
  { id: "custom", label: "Customized Australia Tours" },
];

/**
 * "Explore Australia Destinations" discovery chips: a friendlier subset of the
 * same taxonomy, so a chip here and a chip in the travel-style filter are the
 * same filter.
 */
export const destinationFilters: { id: AustraliaTravelStyle; label: string }[] = [
  { id: "city-break", label: "Cities" },
  { id: "beach", label: "Beaches" },
  { id: "island", label: "Islands" },
  { id: "wildlife", label: "Wildlife" },
  { id: "nature", label: "Nature" },
  { id: "adventure", label: "Adventure" },
  { id: "outback", label: "Outback" },
  { id: "reef", label: "Great Barrier Reef & Reefs" },
  { id: "honeymoon", label: "Honeymoon" },
  { id: "family", label: "Family" },
  { id: "luxury", label: "Luxury" },
  { id: "road-trip", label: "Road Trips" },
];

const LABELS = Object.fromEntries(travelStyles.map((s) => [s.id, s.label])) as Record<AustraliaTravelStyle, string>;
export const styleLabel = (id: AustraliaTravelStyle) => LABELS[id];

// data/usa/travel-styles.ts
// ONE travel-style taxonomy for the USA page. The style filter, destination
// cards, package cards and the trip builder all use these ids.

export type TravelStyle =
  | "honeymoon"
  | "family"
  | "luxury"
  | "budget"
  | "group"
  | "private"
  | "senior-friendly"
  | "adventure"
  | "road-trip"
  | "national-parks"
  | "theme-parks"
  | "beach"
  | "shopping"
  | "city-break"
  | "cruise"
  | "photography"
  | "wildlife"
  | "winter"
  | "summer"
  | "customized";

export const travelStyles: { id: TravelStyle; label: string }[] = [
  { id: "honeymoon", label: "Honeymoon" },
  { id: "family", label: "Family" },
  { id: "luxury", label: "Luxury" },
  { id: "budget", label: "Budget" },
  { id: "group", label: "Group Tours" },
  { id: "private", label: "Private Tours" },
  { id: "senior-friendly", label: "Senior-Friendly" },
  { id: "adventure", label: "Adventure" },
  { id: "road-trip", label: "Road Trips" },
  { id: "national-parks", label: "National Parks" },
  { id: "theme-parks", label: "Theme Parks" },
  { id: "beach", label: "Beach Holidays" },
  { id: "shopping", label: "Shopping" },
  { id: "city-break", label: "City Breaks" },
  { id: "cruise", label: "Cruise" },
  { id: "photography", label: "Photography" },
  { id: "wildlife", label: "Wildlife" },
  { id: "winter", label: "Winter Holidays" },
  { id: "summer", label: "Summer Holidays" },
  { id: "customized", label: "Customized Tours" },
];

const LABELS = Object.fromEntries(travelStyles.map((s) => [s.id, s.label])) as Record<TravelStyle, string>;
export const styleLabel = (id: TravelStyle) => LABELS[id];

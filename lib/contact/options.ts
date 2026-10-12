/**
 * Option lists for the enquiry form. Values are stable slugs (safe to use in
 * URLs like /contact?type=spiritual-pilgrimage); labels are display text.
 */

export const TRAVEL_TYPES = [
  { value: "nepal-tours", label: "Nepal Tours" },
  { value: "india-tours", label: "India Tours" },
  { value: "international", label: "International Tours" },
  { value: "spiritual-pilgrimage", label: "Spiritual & Pilgrimage Tours" },
  { value: "adventure-trekking", label: "Adventure & Trekking" },
  { value: "family", label: "Family Holidays" },
  { value: "honeymoon", label: "Honeymoon" },
  { value: "corporate", label: "Corporate Tours" },
  { value: "educational", label: "Educational Tours" },
  { value: "destination-wedding", label: "Destination Wedding" },
  { value: "yoga-wellness", label: "Yoga & Wellness" },
  { value: "customized", label: "Customized Tour" },
  { value: "other", label: "Other" },
] as const;

export const CONTACT_METHODS = [
  { value: "phone", label: "Phone" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "email", label: "Email" },
] as const;

export const TRAVELER_COUNTS = [
  { value: "1", label: "1 traveler" },
  { value: "2", label: "2 travelers" },
  { value: "3", label: "3 travelers" },
  { value: "4", label: "4 travelers" },
  { value: "5", label: "5 travelers" },
  { value: "6", label: "6 travelers" },
  { value: "7-10", label: "7–10 travelers" },
  { value: "11-20", label: "11–20 travelers" },
  { value: "21+", label: "21+ travelers (group)" },
] as const;

/**
 * Qualitative tiers on purpose: no currency or price is implied anywhere.
 * Swap for numeric ranges once you decide on a currency and bands.
 */
export const BUDGETS = [
  { value: "not-sure", label: "Not sure yet" },
  { value: "economy", label: "Economy" },
  { value: "comfortable", label: "Comfortable" },
  { value: "premium", label: "Premium" },
  { value: "luxury", label: "Luxury" },
] as const;

/** Suggestions for the free-text Country field (any country can still be typed). */
export const COUNTRY_SUGGESTIONS = [
  "Nepal",
  "India",
  "Bangladesh",
  "Bhutan",
  "Sri Lanka",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "New Zealand",
  "United Arab Emirates",
  "Qatar",
  "Saudi Arabia",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Japan",
  "South Korea",
  "China",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Switzerland",
  "Israel",
  "Russia",
  "Brazil",
  "South Africa",
] as const;

export type TravelTypeValue = (typeof TRAVEL_TYPES)[number]["value"];
export type ContactMethodValue = (typeof CONTACT_METHODS)[number]["value"];
export type TravelerCountValue = (typeof TRAVELER_COUNTS)[number]["value"];
export type BudgetValue = (typeof BUDGETS)[number]["value"];

export const TRAVEL_TYPE_VALUES: readonly string[] = TRAVEL_TYPES.map((o) => o.value);
export const CONTACT_METHOD_VALUES: readonly string[] = CONTACT_METHODS.map((o) => o.value);
export const TRAVELER_COUNT_VALUES: readonly string[] = TRAVELER_COUNTS.map((o) => o.value);
export const BUDGET_VALUES: readonly string[] = BUDGETS.map((o) => o.value);

export function travelTypeLabel(value: string): string {
  return TRAVEL_TYPES.find((o) => o.value === value)?.label ?? value;
}

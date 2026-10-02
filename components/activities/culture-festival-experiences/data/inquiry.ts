import type { InterestId } from "../types";

export const INQUIRY_HEADING = "Plan Your Cultural Journey Through Nepal";
export const INQUIRY_LEDE =
  "Tell us what inspires you — festivals, heritage cities, traditional arts, local communities, or a personalized cultural journey. Our team can help you plan an experience around your interests and travel dates.";
export const INQUIRY_CTA = "Plan My Cultural Journey";

export const INTEREST_OPTIONS: { id: InterestId; label: string }[] = [
  { id: "festivals", label: "Festivals & Celebrations" },
  { id: "heritage", label: "Heritage & Architecture" },
  { id: "music-dance", label: "Traditional Music & Dance" },
  { id: "food", label: "Local Food & Culinary Experiences" },
  { id: "community", label: "Community & Cultural Experiences" },
  { id: "arts-crafts", label: "Arts & Crafts" },
  { id: "spiritual", label: "Spiritual & Religious Heritage" },
  { id: "custom", label: "Customized Cultural Journey" },
];

/** `value` is what CTA prefills refer to. Edit labels freely. */
export const DESTINATION_OPTIONS: { value: string; label: string }[] = [
  { value: "", label: "Select a destination" },
  { value: "kathmandu", label: "Kathmandu Valley (Kathmandu)" },
  { value: "bhaktapur", label: "Bhaktapur" },
  { value: "patan", label: "Patan" },
  { value: "terai", label: "Terai region (Tharu communities)" },
  { value: "himalaya", label: "Himalayan or hill region (Sherpa / Gurung)" },
  { value: "unsure", label: "Not sure yet — suggest something" },
  { value: "other", label: "Somewhere else (tell us below)" },
];

export const DURATION_OPTIONS: { value: string; label: string }[] = [
  { value: "", label: "Select a duration" },
  { value: "3d", label: "3 days / 2 nights" },
  { value: "5d", label: "5 days / 4 nights" },
  { value: "7d", label: "7 days / 6 nights" },
  { value: "longer", label: "Longer than 7 days" },
  { value: "unsure", label: "Not sure yet" },
];

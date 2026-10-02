import type { Option } from "./types";

export const DESTINATION_OPTIONS: Option[] = [
  { value: "chitwan", label: "Chitwan National Park" },
  { value: "bardia", label: "Bardia National Park" },
  { value: "koshi-tappu", label: "Koshi Tappu Wildlife Reserve" },
  { value: "shuklaphanta", label: "Shuklaphanta National Park" },
  { value: "sagarmatha", label: "Sagarmatha National Park" },
  { value: "langtang", label: "Langtang National Park" },
  { value: "rara", label: "Rara National Park" },
  { value: "undecided", label: "Other / Not Decided" },
];

export const EXPERIENCE_OPTIONS: Option[] = [
  { value: "jungle-safari", label: "Jungle Safari" },
  { value: "birdwatching", label: "Birdwatching" },
  { value: "wildlife-photography", label: "Wildlife Photography" },
  { value: "nature-walks", label: "Nature Walks and Forest Trails" },
  { value: "canoeing-wetland", label: "Canoeing and Wetland Exploration" },
  { value: "himalayan-escape", label: "Himalayan Nature Escape" },
  { value: "lakeside", label: "Lakeside Nature Experience" },
  { value: "family-holiday", label: "Family Wildlife Holiday" },
  { value: "eco-journey", label: "Eco-Conscious Nature Journey" },
  { value: "other", label: "Other / Not Decided" },
];

export const PURPOSE_OPTIONS: Option[] = [
  { value: "Family", label: "Family" },
  { value: "Photography", label: "Photography" },
  { value: "Adventure", label: "Adventure" },
  { value: "Nature", label: "Nature" },
  { value: "Group", label: "Group" },
  { value: "Other", label: "Other" },
];

export const DURATION_OPTIONS: Option[] = [
  { value: "2-3 days", label: "2–3 days" },
  { value: "4-5 days", label: "4–5 days" },
  { value: "6-8 days", label: "6–8 days" },
  { value: "9+ days", label: "9 days or more" },
  { value: "not-sure", label: "Not sure yet" },
];

export const ACCOMMODATION_OPTIONS: Option[] = [
  { value: "budget", label: "Budget lodge / guesthouse" },
  { value: "mid-range", label: "Mid-range hotel or resort" },
  { value: "premium", label: "Premium / boutique lodge" },
  { value: "homestay", label: "Homestay / community stay" },
  { value: "no-preference", label: "No preference" },
];

export const COUNTRY_CODES: Option[] = [
  { value: "+977", label: "Nepal +977" },
  { value: "+91", label: "India +91" },
  { value: "+1", label: "USA / Canada +1" },
  { value: "+44", label: "UK +44" },
  { value: "+61", label: "Australia +61" },
  { value: "+49", label: "Germany +49" },
  { value: "+33", label: "France +33" },
  { value: "+65", label: "Singapore +65" },
  { value: "+971", label: "UAE +971" },
  { value: "+81", label: "Japan +81" },
  { value: "+86", label: "China +86" },
  { value: "other", label: "Other (include in number)" },
];

export const PLAN_LABEL = (list: Option[], value: string) => list.find((o) => o.value === value)?.label ?? value;

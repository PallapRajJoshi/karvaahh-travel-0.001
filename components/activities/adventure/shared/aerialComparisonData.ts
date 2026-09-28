/* Shared by all four aerial activity pages:
   paragliding, ultra-light-flight, hot-air-balloon, mountain-flight.
   Factual comparison only — no ranking, no "best". */

export type AerialActivityId =
  | "paragliding"
  | "ultra-light"
  | "hot-air-balloon"
  | "mountain-flight";

export interface AerialActivity {
  id: AerialActivityId;
  name: string;
  href: string;
}

export const AERIAL_ACTIVITIES: AerialActivity[] = [
  { id: "paragliding", name: "Paragliding", href: "/activities/adventure/paragliding" },
  { id: "ultra-light", name: "Ultra-light", href: "/activities/adventure/ultra-light-flight" },
  { id: "hot-air-balloon", name: "Hot air balloon", href: "/activities/adventure/hot-air-balloon" },
  { id: "mountain-flight", name: "Mountain flight", href: "/activities/adventure/mountain-flight" },
];

export const AERIAL_ROWS: { label: string; values: Record<AerialActivityId, string> }[] = [
  {
    label: "Where",
    values: {
      paragliding: "Sarangkot & 7 others",
      "ultra-light": "Pokhara only",
      "hot-air-balloon": "Pokhara",
      "mountain-flight": "Kathmandu",
    },
  },
  {
    label: "Engine",
    values: {
      paragliding: "None",
      "ultra-light": "Yes",
      "hot-air-balloon": "Burner",
      "mountain-flight": "Jet aircraft",
    },
  },
  {
    label: "Time aloft",
    values: {
      paragliding: "15–45 min",
      "ultra-light": "15–60 min",
      "hot-air-balloon": "45–60 min",
      "mountain-flight": "55–60 min",
    },
  },
  {
    label: "Adrenaline",
    values: {
      paragliding: "Medium–high",
      "ultra-light": "Low–medium",
      "hot-air-balloon": "Very low",
      "mountain-flight": "None",
    },
  },
  {
    label: "Best for",
    values: {
      paragliding: "Thrill + view",
      "ultra-light": "Steady photography",
      "hot-air-balloon": "Sunrise, couples, nervous flyers",
      "mountain-flight": "Everest, seniors, families",
    },
  },
  {
    label: "From",
    values: {
      paragliding: "US$70",
      "ultra-light": "US$90",
      "hot-air-balloon": "NPR 8,000",
      "mountain-flight": "US$215",
    },
  },
];

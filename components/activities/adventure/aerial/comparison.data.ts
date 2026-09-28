import type { AerialActivityKey } from "./types";

/**
 * Shared comparison block — rendered identically on all four aerial pages.
 * Edit here once; every page updates. No ranking, no "best" labels.
 */

export const AERIAL_COMPARISON_HEADING = "Pokhara & Nepal Aerial Experiences";

/**
 * `live`: set true once that page ships. Only live pages get a header link,
 * so the table never points at a 404.
 */
export const AERIAL_COLUMNS: { key: AerialActivityKey; label: string; href: string; live: boolean }[] = [
  { key: "paragliding", label: "Paragliding", href: "/activities/adventure/paragliding", live: true },
  { key: "ultra-light", label: "Ultra-Light", href: "/activities/adventure/ultra-light-flight", live: true },
  { key: "hot-air-balloon", label: "Hot Air Balloon", href: "/activities/adventure/hot-air-balloon", live: false },
  { key: "mountain-flight", label: "Mountain Flight", href: "/activities/adventure/mountain-flight", live: false },
];

export const AERIAL_ROWS: { label: string; values: Record<AerialActivityKey, string> }[] = [
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

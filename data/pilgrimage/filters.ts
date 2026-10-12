/* ============================================================
   NEPAL PILGRIMAGE — REGIONS & FILTERS
   ------------------------------------------------------------
   Labels for every filter, plus the quick-filter categories,
   defined as data rules over destination/package fields.
   ============================================================ */

import type {
  AccessId,
  DifficultyId,
  DurationId,
  FaithId,
  PackageStyleId,
  PilgrimageDestination,
  PilgrimageTypeId,
  RegionId,
  TravelStyleId,
} from "./types";

export const REGIONS: Record<RegionId, { label: string; short: string; href?: string }> = {
  "kathmandu-valley": { label: "Kathmandu Valley", short: "Kathmandu Valley", href: "/destinations/bagmati-province" },
  bagmati: { label: "Bagmati / Central Nepal", short: "Central Nepal", href: "/destinations/bagmati-province" },
  madhesh: { label: "Madhesh / Southern Nepal", short: "Madhesh", href: "/destinations/madhesh-province" },
  koshi: { label: "Koshi / Eastern Nepal", short: "Eastern Nepal", href: "/destinations/koshi-province" },
  gandaki: { label: "Gandaki / Western Nepal", short: "Gandaki", href: "/destinations/gandaki-province" },
  lumbini: { label: "Lumbini / Western Nepal", short: "Lumbini", href: "/destinations/lumbini-province" },
  karnali: { label: "Karnali / Mid-Western Nepal", short: "Karnali", href: "/destinations/karnali-province" },
  sudurpashchim: { label: "Sudurpashchim / Far-Western Nepal", short: "Far West", href: "/destinations/sudurpaschim-province" },
};

export const FAITHS: Record<FaithId, string> = {
  hindu: "Hindu",
  buddhist: "Buddhist",
  "hindu-buddhist": "Hindu-Buddhist",
  kirat: "Kirat / Other Heritage",
};

export const PILGRIMAGE_TYPES: Record<PilgrimageTypeId, string> = {
  temple: "Temple",
  "shakti-peeth": "Shakti Peeth",
  "devi-temple": "Devi / Bhagawati Temple",
  "shiva-shrine": "Shiva Shrine",
  "vishnu-shrine": "Vishnu Shrine",
  stupa: "Buddhist Stupa",
  monastery: "Monastery",
  "sacred-lake": "Sacred Lake",
  ashram: "Ashram",
  birthplace: "Birthplace",
  confluence: "River / Confluence",
  "spiritual-mountain": "Spiritual Mountain",
  ramayana: "Ramayana Heritage",
  heritage: "Heritage Town",
};

export const TRAVEL_STYLES: Record<TravelStyleId, string> = {
  road: "Road Yatra",
  "flight-road": "Flight + Road",
  helicopter: "Helicopter",
  trek: "Trek / Pilgrimage Trek",
  "senior-friendly": "Senior-Friendly",
  family: "Family",
  private: "Private",
  group: "Group",
};

export const DURATIONS: Record<DurationId, string> = {
  "1-2": "1–2 Days",
  "3-4": "3–4 Days",
  "5-7": "5–7 Days",
  "8-10": "8–10 Days",
  "10+": "10+ Days",
};

export const DIFFICULTY: Record<DifficultyId, string> = {
  easy: "Easy",
  moderate: "Moderate",
  difficult: "Difficult",
  "high-altitude": "High Altitude",
};

export const ACCESS: Record<AccessId, { label: string; tone: "ok" | "info" | "warn" }> = {
  "easy-access": { label: "Easy Access", tone: "ok" },
  "road-access": { label: "Road Access", tone: "ok" },
  "flight-road": { label: "Flight + Road", tone: "info" },
  "helicopter-available": { label: "Helicopter Available", tone: "info" },
  "trekking-required": { label: "Trekking Required", tone: "warn" },
  "high-altitude": { label: "High Altitude", tone: "warn" },
  "weather-dependent": { label: "Weather Dependent", tone: "warn" },
  "difficult-access": { label: "Difficult Access", tone: "warn" },
  "restricted-entry": { label: "Entry Restrictions", tone: "info" },
};

/* ---------- Quick filters (below the hero) ---------- */

type Rule = Partial<{
  faith: FaithId[];
  types: PilgrimageTypeId[];
  styles: TravelStyleId[];
  difficulty: DifficultyId[];
  durations: DurationId[];
}>;

export type QuickCategory = { id: string; label: string; rule?: Rule; /** Jump to a section instead of filtering. */ anchor?: string };

export const QUICK_CATEGORIES: QuickCategory[] = [
  { id: "hindu", label: "Hindu Pilgrimage", rule: { faith: ["hindu", "hindu-buddhist"] } },
  { id: "buddhist", label: "Buddhist Pilgrimage", rule: { faith: ["buddhist", "hindu-buddhist"] } },
  { id: "shiva", label: "Shiva Temples", rule: { types: ["shiva-shrine"] } },
  { id: "vishnu", label: "Vishnu Temples", rule: { types: ["vishnu-shrine"] } },
  { id: "shakti", label: "Shakti Peeth", rule: { types: ["shakti-peeth"] } },
  { id: "monastery", label: "Buddhist Monasteries", rule: { types: ["monastery"] } },
  { id: "lake", label: "Sacred Lakes", rule: { types: ["sacred-lake"] } },
  { id: "ramayana", label: "Ramayana & Mithila", rule: { types: ["ramayana"] } },
  { id: "himalayan", label: "Himalayan Pilgrimage", rule: { difficulty: ["high-altitude"] } },
  { id: "shiva-journeys", label: "Jyotirlinga-inspired Shiva Journeys", rule: { types: ["shiva-shrine"] } },
  { id: "family", label: "Family Pilgrimage", rule: { styles: ["family"] } },
  { id: "senior", label: "Senior-Friendly Yatra", rule: { styles: ["senior-friendly"] } },
  { id: "short", label: "Short Pilgrimage", rule: { durations: ["1-2", "3-4"] } },
  { id: "multi", label: "Multi-Destination Yatra", anchor: "#combinations" },
  { id: "custom", label: "Customized Spiritual Tours", anchor: "#builder" },
];

export function matchesRule(d: PilgrimageDestination, rule?: Rule) {
  if (!rule) return true;
  if (rule.faith && !rule.faith.some((f) => d.faith.includes(f))) return false;
  if (rule.types && !rule.types.some((t) => d.pilgrimageTypes.includes(t))) return false;
  if (rule.styles && !rule.styles.some((s) => d.travelStyles.includes(s))) return false;
  if (rule.difficulty && !rule.difficulty.includes(d.difficulty)) return false;
  if (rule.durations && (!d.recommendedDuration || !rule.durations.includes(d.recommendedDuration))) return false;
  return true;
}

/* ---------- Package styles ("Choose your pilgrimage style") ---------- */

export const PACKAGE_STYLES: Record<PackageStyleId, string> = {
  "temple-darshan": "Temple Darshan",
  retreat: "Spiritual Retreat",
  hindu: "Hindu Yatra",
  buddhist: "Buddhist Pilgrimage",
  family: "Family Pilgrimage",
  senior: "Senior-Friendly Yatra",
  couple: "Couple / Private Yatra",
  group: "Group Yatra",
  festival: "Festival Yatra",
  road: "Road Yatra",
  flight: "Flight Yatra",
  helicopter: "Helicopter Yatra",
  luxury: "Luxury Pilgrimage",
  budget: "Budget Pilgrimage",
};

/* ---------- Map filters ---------- */

export const MAP_FILTERS: { id: string; label: string; rule: Rule }[] = [
  { id: "all", label: "All", rule: {} },
  { id: "hindu", label: "Hindu", rule: { faith: ["hindu", "hindu-buddhist"] } },
  { id: "buddhist", label: "Buddhist", rule: { faith: ["buddhist", "hindu-buddhist"] } },
  { id: "shakti", label: "Shakti", rule: { types: ["shakti-peeth", "devi-temple"] } },
  { id: "shiva", label: "Shiva", rule: { types: ["shiva-shrine"] } },
  { id: "vishnu", label: "Vishnu", rule: { types: ["vishnu-shrine"] } },
  { id: "monastery", label: "Monastery", rule: { types: ["monastery", "stupa"] } },
  { id: "lake", label: "Sacred Lake", rule: { types: ["sacred-lake"] } },
];

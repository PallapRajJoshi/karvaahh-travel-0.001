import { packages } from "@/data/packages";
import type {
  Badge,
  Country,
  MealPlan,
  PackageCategory,
  PackagePrice,
  Season,
  Transport,
  TravelPackage,
  TravelStyle,
} from "@/data/package-types";
import { showDraftPackages } from "./config";

/* ───────────────────────── labels ───────────────────────── */

export const CATEGORY_META: Record<PackageCategory, { label: string; style: string; blurb: string }> = {
  spiritual: { label: "Spiritual", style: "Spiritual Journeys", blurb: "Walk ancient pilgrimage routes and discover sacred places across Nepal and India." },
  adventure: { label: "Adventure", style: "Adventure Escapes", blurb: "High passes, wild rivers and roads that keep going after the tarmac ends." },
  family: { label: "Family", style: "Family Holidays", blurb: "Easier pacing and stops the whole family will enjoy." },
  honeymoon: { label: "Honeymoon", style: "Honeymoon Journeys", blurb: "Quiet stays and unhurried days for two." },
  wildlife: { label: "Wildlife", style: "Wildlife Adventures", blurb: "Jungle safaris and national parks, paired with culture on the way." },
  luxury: { label: "Luxury", style: "Luxury Getaways", blurb: "Comfort-first stays and a slower, more private way to travel." },
  corporate: { label: "Corporate", style: "Corporate Travel", blurb: "Team retreats and incentive trips." },
  educational: { label: "Educational", style: "Educational Tours", blurb: "Heritage, culture and learning journeys for student and study groups." },
  wedding: { label: "Destination Weddings", style: "Destination Weddings", blurb: "Celebrations set against the mountains." },
  wellness: { label: "Wellness", style: "Wellness Retreats", blurb: "Yoga towns, riverside calm and slower days." },
  trekking: { label: "Trekking", style: "Trekking Expeditions", blurb: "Classic Himalayan trails, from short treks to high-altitude routes." },
  beach: { label: "Beach", style: "Beach Holidays", blurb: "Sun, sand and easy days by the sea." },
  "road-trip": { label: "Road Trips", style: "Road Trips", blurb: "Long mountain roads with flexible stops." },
  helicopter: { label: "Helicopter Tours", style: "Helicopter Tours", blurb: "The Himalaya from above, for travellers short on time." },
  offbeat: { label: "Offbeat", style: "Offbeat Adventures", blurb: "Lesser-known places away from the usual circuit." },
};

export const BADGE_LABEL: Record<Badge, string> = {
  "best-seller": "Best Seller",
  popular: "Popular",
  spiritual: "Spiritual",
  signature: "Signature",
  new: "New",
  seasonal: "Seasonal",
  family: "Family",
  honeymoon: "Honeymoon",
  adventure: "Adventure",
  offbeat: "Offbeat",
};

export const STYLE_LABEL: Record<TravelStyle, string> = {
  private: "Private",
  group: "Group",
  family: "Family",
  couple: "Couple",
  solo: "Solo",
  corporate: "Corporate",
};

export const MEAL_LABEL: Record<MealPlan, string> = {
  breakfast: "Breakfast",
  "breakfast-dinner": "Breakfast + Dinner",
  map: "MAP",
  cp: "CP",
  "full-board": "Full Board",
};

export const TRANSPORT_LABEL: Record<Transport, string> = {
  "private-car": "Private car",
  suv: "SUV",
  "4x4": "4x4",
  "tourist-bus": "Tourist bus",
  flight: "Flight",
  helicopter: "Helicopter",
};

export const SEASON_LABEL: Record<Season, string> = {
  summer: "Summer",
  monsoon: "Monsoon",
  autumn: "Autumn",
  winter: "Winter",
  spring: "Spring",
  dashain: "Dashain",
  "tihar-diwali": "Tihar / Diwali",
  holi: "Holi",
  "new-year": "New Year",
  "buddha-jayanti": "Buddha Jayanti",
  shivaratri: "Shivaratri",
};

export const SEASON_ORDER: Season[] = [
  "spring", "summer", "monsoon", "autumn", "winter",
  "dashain", "tihar-diwali", "holi", "new-year", "buddha-jayanti", "shivaratri",
];

export const COUNTRIES: Country[] = ["Nepal", "India", "International"];

export const DURATION_BUCKETS = [
  { id: "2-4", label: "2–4 days", min: 2, max: 4 },
  { id: "5-7", label: "5–7 days", min: 5, max: 7 },
  { id: "8-10", label: "8–10 days", min: 8, max: 10 },
  { id: "11-14", label: "11–14 days", min: 11, max: 14 },
  { id: "15+", label: "15+ days", min: 15, max: Infinity },
] as const;

export type SortKey = "featured" | "popular" | "price-asc" | "price-desc" | "duration" | "newest";

export const SORT_OPTIONS: { id: SortKey; label: string }[] = [
  { id: "featured", label: "Featured" },
  { id: "popular", label: "Popular" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "duration", label: "Duration: shortest first" },
  { id: "newest", label: "Newest" },
];

/* ───────────────────────── data access ───────────────────────── */

export function getPackages(): TravelPackage[] {
  return packages.filter((p) => p.status === "live" || showDraftPackages);
}

export function byCountry(list: TravelPackage[], country: Country) {
  return list.filter((p) => p.country === country);
}

export function byCategory(list: TravelPackage[], category: PackageCategory) {
  return list.filter((p) => p.categories.includes(category));
}

/* ───────────────────────── filtering ───────────────────────── */

export interface FilterState {
  q: string;
  countries: string[];
  categories: string[];
  durations: string[];
  styles: string[];
  meals: string[];
  transports: string[];
  maxPrice: number | null;
  sort: SortKey;
}

export const DEFAULT_FILTERS: FilterState = {
  q: "",
  countries: [],
  categories: [],
  durations: [],
  styles: [],
  meals: [],
  transports: [],
  maxPrice: null,
  sort: "featured",
};

export function durationBucketId(days: number | undefined): string | undefined {
  if (!days) return undefined;
  return DURATION_BUCKETS.find((b) => days >= b.min && days <= b.max)?.id;
}

export function searchText(p: TravelPackage): string {
  return [
    p.name, p.country, p.region, ...p.destinations, ...(p.route ?? []),
    ...p.categories.map((c) => CATEGORY_META[c].label), ...(p.tags ?? []),
    ...(p.bestFor ?? []),
  ].filter(Boolean).join(" ").toLowerCase();
}

export function matchesQuery(p: TravelPackage, q: string): boolean {
  const tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (!tokens.length) return true;
  const h = searchText(p);
  return tokens.every((t) => h.includes(t));
}

export function matchesText(text: string, q: string): boolean {
  const tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
  return tokens.length > 0 && tokens.every((t) => text.includes(t));
}

const anyOf = (selected: string[], values: readonly string[] | undefined) =>
  !selected.length || (values ? values.some((v) => selected.includes(v)) : false);

export function applyFilters(list: TravelPackage[], f: FilterState): TravelPackage[] {
  return list.filter((p) => {
    if (!matchesQuery(p, f.q)) return false;
    if (f.countries.length && !f.countries.includes(p.country)) return false;
    if (!anyOf(f.categories, p.categories)) return false;
    if (f.durations.length) {
      const id = durationBucketId(p.duration?.days);
      if (!id || !f.durations.includes(id)) return false;
    }
    if (!anyOf(f.styles, p.travelStyle)) return false;
    if (f.meals.length && (!p.mealPlan || !f.meals.includes(p.mealPlan))) return false;
    if (!anyOf(f.transports, p.transport)) return false;
    if (f.maxPrice !== null) {
      if (!p.price || p.price.currency !== "INR" || p.price.amount > f.maxPrice) return false;
    }
    return true;
  });
}

export function sortPackages(list: TravelPackage[], sort: SortKey): TravelPackage[] {
  const arr = [...list];
  const priceOf = (p: TravelPackage) => (p.price?.currency === "INR" ? p.price.amount : undefined);
  const missingLast = (a?: number, b?: number, dir = 1) =>
    a === undefined && b === undefined ? 0 : a === undefined ? 1 : b === undefined ? -1 : (a - b) * dir;
  switch (sort) {
    case "featured":
      return arr.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    case "popular":
      return arr.sort((a, b) => Number(!!b.popular) - Number(!!a.popular));
    case "price-asc":
      return arr.sort((a, b) => missingLast(priceOf(a), priceOf(b), 1));
    case "price-desc":
      return arr.sort((a, b) => missingLast(priceOf(a), priceOf(b), -1));
    case "duration":
      return arr.sort((a, b) => missingLast(a.duration?.days, b.duration?.days, 1));
    case "newest":
      return arr.sort((a, b) => b.addedAt.localeCompare(a.addedAt));
  }
}

/* ───────────────────────── facets (only options that exist) ───────────────────────── */

export interface Facet {
  id: string;
  label: string;
  count: number;
}

function facet<T extends string>(list: TravelPackage[], pick: (p: TravelPackage) => readonly T[] | T | undefined, labels: Record<string, string>, order?: readonly string[]): Facet[] {
  const counts = new Map<string, number>();
  for (const p of list) {
    const v = pick(p);
    const arr = v === undefined ? [] : Array.isArray(v) ? v : [v as T];
    for (const x of new Set(arr)) counts.set(x, (counts.get(x) ?? 0) + 1);
  }
  const keys = order ? order.filter((k) => counts.has(k)) : [...counts.keys()];
  return keys.map((id) => ({ id, label: labels[id] ?? id, count: counts.get(id) ?? 0 }));
}

export interface Facets {
  countries: Facet[];
  categories: Facet[];
  durations: Facet[];
  styles: Facet[];
  meals: Facet[];
  transports: Facet[];
  price: { min: number; max: number } | null;
}

export function buildFacets(list: TravelPackage[]): Facets {
  const labelMap = (o: Record<string, string>) => o;
  const catLabels = Object.fromEntries(Object.entries(CATEGORY_META).map(([k, v]) => [k, v.label]));
  const bucketLabels = Object.fromEntries(DURATION_BUCKETS.map((b) => [b.id, b.label]));
  const prices = list.filter((p) => p.price?.currency === "INR").map((p) => p.price!.amount);
  return {
    countries: facet(list, (p) => p.country, labelMap({ Nepal: "Nepal", India: "India", International: "International" }), COUNTRIES),
    categories: facet(list, (p) => p.categories, catLabels, Object.keys(CATEGORY_META)),
    durations: facet(list, (p) => durationBucketId(p.duration?.days), bucketLabels, DURATION_BUCKETS.map((b) => b.id)),
    styles: facet(list, (p) => p.travelStyle, STYLE_LABEL, Object.keys(STYLE_LABEL)),
    meals: facet(list, (p) => p.mealPlan, MEAL_LABEL, Object.keys(MEAL_LABEL)),
    transports: facet(list, (p) => p.transport, TRANSPORT_LABEL, Object.keys(TRANSPORT_LABEL)),
    price: prices.length >= 2 && Math.min(...prices) !== Math.max(...prices)
      ? { min: Math.min(...prices), max: Math.max(...prices) }
      : null,
  };
}

/* ───────────────────────── formatting ───────────────────────── */

const BASIS_LABEL: Record<PackagePrice["basis"], string> = {
  "per-person": "per person",
  "per-couple": "per couple",
  "per-journey": "per journey",
};

export function formatMoney(amount: number, currency: PackagePrice["currency"]): string {
  return new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPrice(p: TravelPackage): { label: string; amount: string | null; basis: string | null } {
  if (!p.price) return { label: "Pricing", amount: null, basis: null };
  return { label: "Starting from", amount: formatMoney(p.price.amount, p.price.currency), basis: BASIS_LABEL[p.price.basis] };
}

export function durationLabel(p: TravelPackage): string | null {
  return p.duration ? `${p.duration.nights}N / ${p.duration.days}D` : null;
}

export function includesLine(p: TravelPackage): string[] {
  const out: string[] = [];
  if (p.accommodation) out.push(p.accommodation);
  if (p.mealPlan) out.push(MEAL_LABEL[p.mealPlan]);
  if (p.transport?.length) out.push(p.transport.map((t) => TRANSPORT_LABEL[t]).join(" / "));
  if (p.permits?.length) out.push(`${p.permits.join(", ")} permit`);
  return out;
}

export function routeText(p: TravelPackage): string | null {
  const r = p.route ?? (p.destinations.length > 1 ? p.destinations : undefined);
  return r && r.length ? r.join(" → ") : null;
}

/** Search suggestions that are guaranteed to return results. */
export function suggestionsFor(list: TravelPackage[], candidates: string[]): string[] {
  return candidates.filter((c) => list.some((p) => matchesQuery(p, c))).slice(0, 6);
}

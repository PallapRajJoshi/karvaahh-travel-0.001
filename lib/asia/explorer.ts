// lib/asia/explorer.ts
// Shared client state for the Asia page. The hero planner, travel-style chips,
// style cards, map and destination explorer all read/write this one store, so
// the mostly server-rendered page needs no context provider.

import { useSyncExternalStore } from "react";
import type { AsiaDestination, BudgetLevel } from "@/data/asia-destinations";
import type { AsiaRegionId } from "@/data/asia-regions";
import type { TravelStyleId } from "@/data/travel-styles";

export type DurationBucket = "short" | "medium" | "long";

export interface ExplorerState {
  region: AsiaRegionId | "all";
  style: TravelStyleId | "all";
  budget: BudgetLevel | "all";
  duration: DurationBucket | "all";
  featured: boolean;
  /** Free text from the hero planner, matched against country and city names. */
  query: string;
  /** Trip details captured by the hero planner, used to prefill the trip builder. */
  plan: { date: string; travelers: string };
}

export const DEFAULT_STATE: ExplorerState = {
  region: "all",
  style: "all",
  budget: "all",
  duration: "all",
  featured: false,
  query: "",
  plan: { date: "", travelers: "" },
};

export const DURATIONS: { id: DurationBucket; label: string }[] = [
  { id: "short", label: "Up to 5 days" },
  { id: "medium", label: "6–8 days" },
  { id: "long", label: "9+ days" },
];

export const BUDGETS: { id: BudgetLevel; label: string }[] = [
  { id: "budget", label: "Budget" },
  { id: "mid-range", label: "Mid-range" },
  { id: "premium", label: "Premium" },
  { id: "luxury", label: "Luxury" },
];

let state = DEFAULT_STATE;
const listeners = new Set<() => void>();

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export function setExplorer(patch: Partial<ExplorerState>) {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}

export function resetFilters() {
  setExplorer({ region: "all", style: "all", budget: "all", duration: "all", featured: false, query: "" });
}

export function useExplorer() {
  return useSyncExternalStore(subscribe, () => state, () => DEFAULT_STATE);
}

export const hasActiveFilters = (s: ExplorerState) =>
  s.region !== "all" || s.style !== "all" || s.budget !== "all" || s.duration !== "all" || s.featured || s.query.trim() !== "";

const fits = (d: AsiaDestination, bucket: DurationBucket) => {
  const [min, max] = d.days;
  if (bucket === "short") return min <= 5;
  if (bucket === "medium") return min <= 8 && max >= 6;
  return max >= 9;
};

export function matches(d: AsiaDestination, s: ExplorerState) {
  if (s.region !== "all" && d.region !== s.region) return false;
  if (s.style !== "all" && !d.travelStyles.includes(s.style)) return false;
  if (s.budget !== "all" && d.budgetLevel !== s.budget) return false;
  if (s.duration !== "all" && !fits(d, s.duration)) return false;
  if (s.featured && !d.featured) return false;
  const q = s.query.trim().toLowerCase();
  if (q && ![d.country, ...d.cities].some((n) => n.toLowerCase().includes(q))) return false;
  return true;
}

/** Smoothly bring a section into view (instant for reduced motion). */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

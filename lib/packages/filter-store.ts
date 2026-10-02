"use client";

import { useSyncExternalStore } from "react";
import { DEFAULT_FILTERS, type FilterState, type SortKey } from "./query";

/**
 * Tiny external store so the hero search, category pills, travel-style cards and
 * the All Packages explorer can share one filter state without wrapping the
 * (mostly server-rendered) page in a context provider.
 *
 * Filters are mirrored to the URL (?q=&category=…) so a filtered view can be
 * shared. The canonical URL stays /packages.
 */

type ListKey = "countries" | "categories" | "durations" | "styles" | "meals" | "transports";

const URL_KEYS: Record<ListKey, string> = {
  countries: "country",
  categories: "category",
  durations: "duration",
  styles: "style",
  meals: "meal",
  transports: "transport",
};

let state: FilterState = DEFAULT_FILTERS;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function writeUrl() {
  if (typeof window === "undefined") return;
  const p = new URLSearchParams();
  if (state.q) p.set("q", state.q);
  (Object.keys(URL_KEYS) as ListKey[]).forEach((k) => {
    if (state[k].length) p.set(URL_KEYS[k], state[k].join(","));
  });
  if (state.maxPrice !== null) p.set("max", String(state.maxPrice));
  if (state.sort !== "featured") p.set("sort", state.sort);
  const qs = p.toString();
  const next = `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash}`;
  if (next !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
    window.history.replaceState(null, "", next);
  }
}

/** Non-JS fallback href for a filter preset, e.g. /packages?category=spiritual#all-packages */
export function buildFilterHref(patch: Partial<FilterState>, base = "/packages"): string {
  const p = new URLSearchParams();
  if (patch.q) p.set("q", patch.q);
  (Object.keys(URL_KEYS) as ListKey[]).forEach((k) => {
    const v = patch[k];
    if (v && v.length) p.set(URL_KEYS[k], v.join(","));
  });
  const qs = p.toString();
  return `${base}${qs ? `?${qs}` : ""}#${RESULTS_ANCHOR}`;
}

export function getFilters(): FilterState {
  return state;
}

export function setFilters(patch: Partial<FilterState>) {
  state = { ...state, ...patch };
  writeUrl();
  emit();
}

export function toggleFilter(key: ListKey, value: string) {
  const cur = state[key];
  setFilters({ [key]: cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value] } as Partial<FilterState>);
}

export function resetFilters() {
  setFilters({ ...DEFAULT_FILTERS });
}

export function hydrateFiltersFromUrl() {
  const p = new URLSearchParams(window.location.search);
  const list = (k: string) => (p.get(k) ?? "").split(",").filter(Boolean);
  const max = Number(p.get("max"));
  state = {
    ...DEFAULT_FILTERS,
    q: p.get("q") ?? "",
    countries: list("country"),
    categories: list("category"),
    durations: list("duration"),
    styles: list("style"),
    meals: list("meal"),
    transports: list("transport"),
    maxPrice: Number.isFinite(max) && max > 0 ? max : null,
    sort: (p.get("sort") as SortKey) || "featured",
  };
  emit();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

export function useFilters(): FilterState {
  return useSyncExternalStore(subscribe, getFilters, () => DEFAULT_FILTERS);
}

export function activeFilterCount(f: FilterState): number {
  return (
    f.countries.length + f.categories.length + f.durations.length + f.styles.length +
    f.meals.length + f.transports.length + (f.maxPrice !== null ? 1 : 0)
  );
}

export const RESULTS_ANCHOR = "all-packages";

export function scrollToResults() {
  document.getElementById(RESULTS_ANCHOR)?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start",
  });
}

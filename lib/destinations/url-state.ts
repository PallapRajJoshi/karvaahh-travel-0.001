"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import { DEFAULT_PARAMS, type ExplorerParams } from "./present";
import { EXPERIENCE_BY_ID, REGION_BY_ID } from "./taxonomy";
import type { CountryId, ExperienceId, RegionId, SortId } from "./types";

/**
 * Explorer state lives in the URL (?country=nepal&exp=spiritual&region=europe&sort=az&q=…)
 * so filtered views are shareable and survive refresh. Reading goes through
 * useSyncExternalStore with an empty server snapshot, so the statically rendered
 * HTML is always the default view and hydration never mismatches.
 */

const EVENT = "karvaahh:explorer-params";
const COUNTRIES: readonly string[] = ["nepal", "india", "international"];
const SORTS: readonly string[] = ["featured", "popular", "az", "new"];

function subscribe(onChange: () => void): () => void {
  window.addEventListener("popstate", onChange);
  window.addEventListener(EVENT, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(EVENT, onChange);
  };
}

const getSnapshot = () => window.location.search;
const getServerSnapshot = () => "";

export function parseParams(search: string): ExplorerParams {
  const sp = new URLSearchParams(search);
  const country = sp.get("country");
  const exp = sp.get("exp");
  const region = sp.get("region");
  const sort = sp.get("sort");
  return {
    country: country && COUNTRIES.includes(country) ? (country as CountryId) : undefined,
    exp: exp && exp in EXPERIENCE_BY_ID ? (exp as ExperienceId) : undefined,
    region: region && region in REGION_BY_ID ? (region as RegionId) : undefined,
    sort: sort && SORTS.includes(sort) ? (sort as SortId) : DEFAULT_PARAMS.sort,
    q: (sp.get("q") ?? "").slice(0, 80),
  };
}

function serialize(p: ExplorerParams): string {
  const sp = new URLSearchParams();
  if (p.country) sp.set("country", p.country);
  if (p.exp) sp.set("exp", p.exp);
  if (p.region) sp.set("region", p.region);
  if (p.sort !== DEFAULT_PARAMS.sort) sp.set("sort", p.sort);
  if (p.q.trim()) sp.set("q", p.q.trim());
  const s = sp.toString();
  return s ? `?${s}` : "";
}

/** Stable key describing the active filters (used to reset paging and re-run transitions). */
export function paramsKey(p: ExplorerParams): string {
  return serialize(p) || "?";
}

export function useExplorerParams(): [ExplorerParams, (patch: Partial<ExplorerParams>) => void, () => void] {
  const search = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const params = useMemo(() => parseParams(search), [search]);

  const update = useCallback((patch: Partial<ExplorerParams>) => {
    const current = parseParams(window.location.search);
    const next: ExplorerParams = { ...current, ...patch };
    const url = `${window.location.pathname}${serialize(next)}${window.location.hash}`;
    window.history.replaceState(window.history.state, "", url);
    window.dispatchEvent(new Event(EVENT));
  }, []);

  const clear = useCallback(() => {
    window.history.replaceState(window.history.state, "", `${window.location.pathname}${window.location.hash}`);
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return [params, update, clear];
}

export const EXPLORER_ANCHOR = "explore";

/** Smoothly brings the explorer into view (instant when the user prefers reduced motion). */
export function scrollToExplorer(): void {
  const el = document.getElementById(EXPLORER_ANCHOR);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

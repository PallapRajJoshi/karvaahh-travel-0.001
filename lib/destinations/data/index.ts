import type { CountryId, Destination, ExperienceId, RegionId } from "../types";
import { ADDED, COPY } from "./copy";
import {
  ADVENTURE_PICKS,
  COUNTRY_PICKS,
  FEATURED,
  HERO_SUGGESTIONS,
  OFFBEAT_PICKS,
  POPULAR,
  SPIRITUAL_PICKS,
  WILDLIFE_PICKS,
} from "./collections";
import { INDIA } from "./india";
import { INTERNATIONAL } from "./international";
import { NEPAL } from "./nepal";

const featured = new Set<string>(FEATURED);
const popular = new Set<string>(POPULAR);

/** Canonical, flagged, copy-enriched list. Order here is the "Featured" sort base. */
export const DESTINATIONS: Destination[] = [...NEPAL, ...INDIA, ...INTERNATIONAL].map((d) => ({
  ...d,
  featured: featured.has(d.slug),
  popular: popular.has(d.slug),
  added: ADDED[d.slug],
  copy: COPY[d.slug] ? { short: COPY[d.slug] } : undefined,
}));

export const DESTINATION_BY_SLUG: ReadonlyMap<string, Destination> = new Map(
  DESTINATIONS.map((d) => [d.slug, d]),
);

// ---------------------------------------------------------------------------
// Integrity checks — run once on import (build time for the server, module
// load for the client). Cheap, and they turn data typos into loud failures.
// ---------------------------------------------------------------------------
function validate(): void {
  const errors: string[] = [];
  const seen = new Set<string>();
  const names = new Map<string, string>();
  for (const d of DESTINATIONS) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(d.slug)) errors.push(`bad slug "${d.slug}"`);
    if (seen.has(d.slug)) errors.push(`duplicate slug "${d.slug}"`);
    seen.add(d.slug);
    const key = `${d.country}:${d.name.toLowerCase()}`;
    if (names.has(key)) errors.push(`duplicate name "${d.name}" (${names.get(key)} / ${d.slug})`);
    names.set(key, d.slug);
    if (d.experiences.length === 0) errors.push(`"${d.slug}" has no experiences`);
    if (d.regions.length === 0) errors.push(`"${d.slug}" has no region`);
  }
  const lists: Record<string, readonly string[]> = {
    FEATURED,
    POPULAR,
    HERO_SUGGESTIONS,
    OFFBEAT_PICKS,
    SPIRITUAL_PICKS,
    ADVENTURE_PICKS,
    WILDLIFE_PICKS,
    ...Object.fromEntries(Object.entries(COUNTRY_PICKS).map(([k, v]) => [`COUNTRY_PICKS.${k}`, v])),
  };
  for (const [list, slugs] of Object.entries(lists)) {
    for (const slug of slugs) if (!seen.has(slug)) errors.push(`${list} references unknown slug "${slug}"`);
  }
  for (const slug of Object.keys(COPY)) if (!seen.has(slug)) errors.push(`COPY has unknown slug "${slug}"`);
  for (const slug of Object.keys(ADDED)) if (!seen.has(slug)) errors.push(`ADDED has unknown slug "${slug}"`);
  if (errors.length) throw new Error(`[destinations] data errors:\n - ${errors.join("\n - ")}`);
}
validate();

// ---------------------------------------------------------------------------
// Lookups
// ---------------------------------------------------------------------------
export function pick(slugs: readonly string[]): Destination[] {
  return slugs.map((s) => DESTINATION_BY_SLUG.get(s)).filter((d): d is Destination => Boolean(d));
}

export function countBy(country?: CountryId): number {
  return country ? DESTINATIONS.filter((d) => d.country === country).length : DESTINATIONS.length;
}

export function countExperience(id: ExperienceId, country?: CountryId): number {
  return DESTINATIONS.filter((d) => d.experiences.includes(id) && (!country || d.country === country)).length;
}

export function countRegion(id: RegionId, country?: CountryId): number {
  return DESTINATIONS.filter((d) => d.regions.includes(id) && (!country || d.country === country)).length;
}

export {
  ADVENTURE_PICKS,
  COUNTRY_PICKS,
  FEATURED,
  HERO_SUGGESTIONS,
  OFFBEAT_PICKS,
  POPULAR,
  SPIRITUAL_PICKS,
  WILDLIFE_PICKS,
};
export { CONTACT_HREF, KNOWN_PAGES, PLAN_TRIP_HREF } from "./collections";

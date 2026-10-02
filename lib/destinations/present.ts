import { CONTACT_HREF, DESTINATIONS, FEATURED, POPULAR } from "./data";
import { COUNTRIES, EXPERIENCE_BY_ID, REGION_BY_ID } from "./taxonomy";
import type {
  ArtTheme,
  CountryId,
  Destination,
  DestinationType,
  ExperienceId,
  RegionId,
  ResolveContext,
  SortId,
} from "./types";

// ---------------------------------------------------------------------------
// Presentation helpers (pure — safe on server and client)
// ---------------------------------------------------------------------------

export const TYPE_LABEL: Record<DestinationType, string> = {
  city: "City",
  region: "Region",
  country: "Country",
  trek: "Trek",
  temple: "Sacred site",
  park: "National park",
  lake: "Lake",
  beach: "Beach",
  valley: "Valley",
  peak: "Peak",
  village: "Village",
  island: "Island",
  route: "Journey",
};

export const COUNTRY_LABEL: Record<CountryId, string> = Object.fromEntries(
  COUNTRIES.map((c) => [c.id, c.label]),
) as Record<CountryId, string>;

export function primaryCategory(d: Destination): string {
  return EXPERIENCE_BY_ID[d.experiences[0]].label;
}

export function tagLabels(d: Destination, max = 2): string[] {
  return d.experiences.slice(0, max).map((e) => EXPERIENCE_BY_ID[e].short);
}

/** Breadcrumb-style path: Nepal → Gandaki Province → Mustang → Muktinath. */
export function trail(d: Destination): string[] {
  const out: string[] = [COUNTRY_LABEL[d.country]];
  if (d.country === "international") {
    out.push(REGION_BY_ID[d.regions[0]].label);
    if (d.parent) out.push(d.parent);
  } else {
    if (d.area) out.push(d.area);
    if (d.parent) out.push(d.parent);
  }
  out.push(d.name);
  return out;
}

export function locationLine(d: Destination): string {
  const t = trail(d);
  return t.slice(1, -1).join(" · ") || COUNTRY_LABEL[d.country];
}

const DESERT = new Set(["rann-of-kutch", "jaisalmer", "wadi-rum", "oman", "jodhpur"]);

export function artTheme(d: Destination): ArtTheme {
  if (DESERT.has(d.slug)) return "desert";
  if (d.type === "beach" || d.type === "island" || d.experiences[0] === "beach") return "beach";
  if (d.type === "park" || d.experiences[0] === "wildlife") return "wildlife";
  if (d.type === "lake") return "lake";
  if (d.type === "temple" || d.experiences[0] === "spiritual") return "spiritual";
  if (d.regions[0] === "himalayas" || d.type === "trek" || d.type === "peak") return "himalaya";
  return "city";
}

export function enquireHref(d: Destination): string {
  return `${CONTACT_HREF}?destination=${encodeURIComponent(d.slug)}`;
}

export function ctaLabel(d: Destination, hasPage: boolean): string {
  return hasPage ? `Explore ${d.name}` : `Plan ${d.name}`;
}

// ---------------------------------------------------------------------------
// Search + filter + sort
// ---------------------------------------------------------------------------

export function norm(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const FEATURED_RANK = new Map<string, number>(FEATURED.map((s, i) => [s, i]));
const POPULAR_RANK = new Map<string, number>(POPULAR.map((s, i) => [s, i]));
const UNRANKED = 9999;

interface IndexEntry {
  d: Destination;
  order: number;
  featuredRank: number;
  popularRank: number;
  name: string;
  aliases: string[];
  context: string;
}

const INDEX: IndexEntry[] = DESTINATIONS.map((d, order) => ({
  d,
  order,
  featuredRank: FEATURED_RANK.get(d.slug) ?? UNRANKED,
  popularRank: POPULAR_RANK.get(d.slug) ?? UNRANKED,
  name: norm(d.name),
  aliases: d.aliases.map(norm),
  context: norm(
    [
      d.parent,
      d.area,
      COUNTRY_LABEL[d.country],
      ...d.regions.map((r) => REGION_BY_ID[r].label),
      ...d.experiences.map((e) => EXPERIENCE_BY_ID[e].label),
      TYPE_LABEL[d.type],
    ]
      .filter(Boolean)
      .join(" "),
  ),
}));

function scoreEntry(e: IndexEntry, q: string, words: string[]): number {
  if (e.name === q) return 100;
  if (e.aliases.includes(q)) return 95;
  if (e.name.startsWith(q)) return 85;
  if (e.aliases.some((a) => a.startsWith(q))) return 80;
  const nameWords = e.name.split(" ");
  if (words.every((w) => nameWords.some((nw) => nw.startsWith(w)))) return 70;
  if (e.name.includes(q)) return 60;
  if (e.aliases.some((a) => a.includes(q))) return 55;
  // every typed word must appear somewhere (name, alias or context)
  const hay = `${e.name} ${e.aliases.join(" ")} ${e.context}`;
  if (words.every((w) => hay.includes(w))) return e.context.includes(q) ? 40 : 30;
  return 0;
}

/** Ranked matches for a free-text query. */
export function searchDestinations(query: string, limit = 8): Destination[] {
  const q = norm(query);
  if (q.length < 2) return [];
  const words = q.split(" ");
  return INDEX.map((e) => ({ e, s: scoreEntry(e, q, words) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.e.featuredRank - b.e.featuredRank || a.e.popularRank - b.e.popularRank || a.e.order - b.e.order)
    .slice(0, limit)
    .map((x) => x.e.d);
}

export interface ExplorerParams {
  country?: CountryId;
  exp?: ExperienceId;
  region?: RegionId;
  sort: SortId;
  q: string;
}

export const DEFAULT_PARAMS: ExplorerParams = { sort: "featured", q: "" };

export function filterDestinations(p: ExplorerParams): Destination[] {
  const q = norm(p.q);
  const words = q.split(" ").filter(Boolean);
  const scored = INDEX.map((e) => ({ e, s: q.length >= 2 ? scoreEntry(e, q, words) : 1 })).filter(({ e, s }) => {
    if (s === 0) return false;
    const d = e.d;
    if (p.country && d.country !== p.country) return false;
    if (p.exp && !d.experiences.includes(p.exp)) return false;
    if (p.region && !d.regions.includes(p.region)) return false;
    return true;
  });

  const base = (a: { e: IndexEntry }, b: { e: IndexEntry }) => a.e.order - b.e.order;
  const byFeatured = (a: { e: IndexEntry }, b: { e: IndexEntry }) => a.e.featuredRank - b.e.featuredRank;
  const byPopular = (a: { e: IndexEntry }, b: { e: IndexEntry }) => a.e.popularRank - b.e.popularRank;

  scored.sort((a, b) => {
    if (q.length >= 2 && p.sort === "featured" && a.s !== b.s) return b.s - a.s;
    switch (p.sort) {
      case "az":
        return a.e.d.name.localeCompare(b.e.d.name);
      case "popular":
        return byPopular(a, b) || base(a, b);
      case "new":
        return (b.e.d.added ?? "").localeCompare(a.e.d.added ?? "") || byFeatured(a, b) || byPopular(a, b) || base(a, b);
      default:
        return byFeatured(a, b) || byPopular(a, b) || base(a, b);
    }
  });
  return scored.map((x) => x.e.d);
}

export function hasPage(d: Destination, ctx: ResolveContext): boolean {
  return Boolean(ctx.routes[d.slug]);
}

export type { RegionId };

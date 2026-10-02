import type {
  CountryId,
  Destination,
  DestinationType,
  ExperienceId,
  ProvinceId,
  RegionId,
} from "../types";

/**
 * Compact row format so hundreds of destinations stay readable and reviewable.
 *
 * Experience letters
 *   S spiritual   A adventure    T trekking    W wildlife     N nature
 *   C culture     H heritage     F family      M honeymoon    O corporate
 *   E educational D wedding      B beach       L luxury       X offbeat
 *   R road trip   P helicopter   Y wellness    G photography  V festival
 *
 * Region codes
 *   hm himalayas   sa south asia      se southeast asia   me middle east
 *   eu europe      af africa          am americas         oc australia & NZ
 */
const EXP: Record<string, ExperienceId> = {
  S: "spiritual",
  A: "adventure",
  T: "trekking",
  W: "wildlife",
  N: "nature",
  C: "culture",
  H: "heritage",
  F: "family",
  M: "honeymoon",
  O: "corporate",
  E: "educational",
  D: "wedding",
  B: "beach",
  L: "luxury",
  X: "offbeat",
  R: "road-trip",
  P: "helicopter",
  Y: "wellness",
  G: "photography",
  V: "festival",
};

const REG: Record<string, RegionId> = {
  hm: "himalayas",
  sa: "south-asia",
  se: "southeast-asia",
  me: "middle-east",
  eu: "europe",
  af: "africa",
  am: "americas",
  oc: "oceania",
};

export interface RowOpts {
  /** type override */
  t?: DestinationType;
  /** parent place, e.g. "France" */
  p?: string;
  /** region codes, space separated; first is primary */
  r?: string;
  /** aliases used by search */
  a?: string[];
  /** area override */
  ar?: string;
  /** province override (Nepal) */
  pr?: ProvinceId | null;
  /** flag for an editor to double-check */
  rv?: boolean;
}

export type Row = readonly [slug: string, name: string, exps: string, opts?: RowOpts];

export interface GroupDefaults {
  country: CountryId;
  area?: string;
  pr?: ProvinceId;
  r: string;
  t: DestinationType;
}

function parseExperiences(letters: string, slug: string): ExperienceId[] {
  const out: ExperienceId[] = [];
  for (const ch of letters) {
    const id = EXP[ch];
    if (!id) throw new Error(`[destinations] unknown experience letter "${ch}" in "${slug}"`);
    if (!out.includes(id)) out.push(id);
  }
  return out;
}

function parseRegions(codes: string, slug: string): RegionId[] {
  return codes.split(/\s+/).filter(Boolean).map((c) => {
    const id = REG[c];
    if (!id) throw new Error(`[destinations] unknown region code "${c}" in "${slug}"`);
    return id;
  });
}

/** Expands rows into canonical Destination records (flags are applied later). */
export function group(defaults: GroupDefaults, rows: readonly Row[]): Destination[] {
  return rows.map(([slug, name, exps, o = {}]) => {
    const experiences = parseExperiences(exps, slug);
    const province = o.pr === null ? undefined : (o.pr ?? defaults.pr);
    return {
      slug,
      name,
      country: defaults.country,
      area: o.ar ?? defaults.area,
      parent: o.p,
      province,
      regions: parseRegions(o.r ?? defaults.r, slug),
      type: o.t ?? defaults.t,
      experiences,
      aliases: o.a ?? [],
      featured: false,
      popular: false,
      offbeat: experiences.includes("offbeat"),
      needsReview: o.rv ? true : undefined,
    };
  });
}

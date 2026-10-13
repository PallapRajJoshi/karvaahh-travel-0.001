import { packages as ebcPackages } from "@/components/adventure/everest-base-camp-trek/data/packages";
import { heroFacts as manangFacts, routeHighlights as manangStops, TRIP as MANANG } from "@/components/packages/manang-circuit-trek/data/content";
import { packages as langtangPackages, ROUTE as LANGTANG_ROUTE } from "@/data/adventure/langtang-valley-trek";
import * as I from "./images";
import type { FeaturedPackage } from "./types";

/**
 * Featured trekking packages, read from each trek's own package data so
 * names, durations and grades stay in one place. No package has a verified
 * price yet, so every card is priced on request. Images use real photos of
 * the route (the source pages' own package photos are not in /public yet).
 */
const EBC_ROUTE = "/adventure/everest-base-camp-trek";
const fact = (label: string) => manangFacts.find((f) => f.label === label)?.value;

function ebc(slug: string): FeaturedPackage | null {
  const p = ebcPackages.find((x) => x.slug === slug);
  if (!p) return null;
  return {
    id: p.slug,
    name: p.title,
    destination: "Everest Region",
    summary: p.description,
    highlights: p.route,
    duration: p.duration,
    difficulty: p.difficulty,
    maxAltitude: p.maxAltitude,
    image: I.everestBaseCamp,
    href: `${EBC_ROUTE}#packages`,
    ctaLabel: "View Package",
    badge: p.featured ? "Signature Trek" : undefined,
  };
}

function langtang(id: string): FeaturedPackage | null {
  const p = langtangPackages.find((x) => x.id === id);
  if (!p) return null;
  return {
    id: p.id,
    name: p.title,
    destination: "Langtang Region",
    summary: "A steady climb from forest to glacier through Tamang villages to Kyanjin Gompa, close to Kathmandu.",
    highlights: p.route.split(" · "),
    duration: p.duration,
    difficulty: p.difficulty,
    image: id === "langtang-classic" ? I.langtang : I.tamangVillage,
    href: `${LANGTANG_ROUTE}#packages`,
    ctaLabel: "View Package",
  };
}

const manang: FeaturedPackage = {
  id: MANANG.slug,
  name: MANANG.name,
  destination: "Annapurna Region",
  summary: `${MANANG.subtitle}: the Manang valley, an acclimatisation day, Tilicho Lake and the Thorong La crossing to Muktinath.`,
  highlights: manangStops.map((s) => s.name),
  duration: fact("Duration"),
  difficulty: fact("Grade"),
  maxAltitude: fact("High point"),
  image: I.manang,
  href: MANANG.path,
  ctaLabel: "View Itinerary",
  badge: "Full Itinerary",
};

const threePasses: FeaturedPackage = {
  id: "everest-three-passes",
  name: "Everest Three Passes Trek",
  destination: "Everest Region",
  summary: "A customised Three Passes itinerary with the right acclimatisation and buffer days, planned around your experience and dates.",
  highlights: ["Kongma La", "Cho La", "Renjo La", "Everest Base Camp", "Gokyo Lakes"],
  duration: "17 days (sample)",
  difficulty: "Challenging",
  image: I.gokyoRi,
  href: "/adventure/everest-three-passes-trek#packages",
  ctaLabel: "Request This Trek",
  badge: "Tailor-Made",
};

export const FEATURED_PACKAGES: FeaturedPackage[] = [
  ebc("everest-base-camp-classic-trek"),
  manang,
  langtang("langtang-classic"),
  ebc("everest-base-camp-kala-patthar-trek"),
  threePasses,
  langtang("langtang-tserko-ri"),
].filter((p): p is FeaturedPackage => Boolean(p));

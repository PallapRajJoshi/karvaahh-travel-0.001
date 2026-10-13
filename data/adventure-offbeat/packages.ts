/* ============================================================
   NEPAL ADVENTURE & OFFBEAT TOURS — PACKAGES
   ------------------------------------------------------------
   Every card links to an existing Karvaahh trek, destination or
   activity page. Duration and difficulty appear only where that
   page confirms them; otherwise the card says the itinerary is
   planned around the traveller.

   PRICES: never invented. Add `price` only when Karvaahh confirms it.
   ============================================================ */

import * as I from "./images";
import type { AdventurePackage, PackageThemeId } from "./types";

export const PACKAGE_THEMES: Record<PackageThemeId, { label: string; intro: string }> = {
  offbeat: { label: "Offbeat Nepal Tours", intro: "Wilderness destinations most itineraries never reach." },
  himalayan: { label: "Himalayan Adventure Trips", intro: "Multi-day treks through high valleys and over passes." },
  lakes: { label: "Remote Lakes & Nature", intro: "Journeys built around Nepal's high and hidden lakes." },
  camping: { label: "Camping Experiences", intro: "Nights under the stars at suitable, permitted sites." },
  road: { label: "Mountain Road Trips", intro: "Overland journeys by jeep, car or motorbike." },
  custom: { label: "Customized Adventures", intro: "Your interests, dates and pace — planned by our team." },
};

type Input = Omit<AdventurePackage, "active"> & Partial<Pick<AdventurePackage, "active">>;
const p = (input: Input): AdventurePackage => ({ active: true, ...input });

export const PACKAGES: AdventurePackage[] = [
  /* ---------- Remote lakes ---------- */
  p({
    id: "rara-lake",
    title: "Rara Lake Wilderness Journey",
    theme: "lakes",
    destinations: ["Mugu", "Rara National Park", "Murma Top"],
    highlights: ["Lakeshore trails", "Murma Top viewpoint", "Birdwatching & photography"],
    image: I.rara,
    href: "/offbeat-unexplored/rara-lake",
  }),
  p({
    id: "shey-phoksundo",
    title: "Shey Phoksundo & Dolpo",
    theme: "lakes",
    destinations: ["Juphal", "Ringmo", "Phoksundo Lake"],
    highlights: ["Turquoise Phoksundo Lake", "Ringmo village & Bon heritage", "Phoksundo Waterfall"],
    image: I.upperDolpo,
    href: "/offbeat-unexplored/shey-phoksundo",
  }),
  p({
    id: "panch-pokhari",
    title: "Panch Pokhari Sacred Lakes Trek",
    theme: "lakes",
    destinations: ["Sindhupalchok", "Panch Pokhari"],
    highlights: ["Five sacred alpine lakes", "Rhododendron forest", "Tamang & Sherpa villages"],
    image: I.panchPokhari,
    href: "/offbeat-unexplored/panch-pokhari",
  }),

  /* ---------- Offbeat ---------- */
  p({
    id: "tsho-rolpa",
    title: "Tsho Rolpa & Rolwaling Valley",
    theme: "offbeat",
    destinations: ["Dolakha", "Beding", "Na", "Tsho Rolpa"],
    highlights: ["Glacial lake at ≈ 4,580 m", "Sherpa settlements", "Quiet Rolwaling trails"],
    image: I.tshoRolpa,
    href: "/offbeat-unexplored/tsho-rolpa-lake",
  }),
  p({
    id: "khaptad",
    title: "Khaptad National Park Escape",
    theme: "offbeat",
    destinations: ["Khaptad Patans", "Khaptad Baba Ashram", "Tribeni Dham"],
    highlights: ["High meadows", "Oak & rhododendron forest", "Spiritual heritage"],
    image: I.khaptad,
    href: "/offbeat-unexplored/khaptad-national-park",
  }),
  p({
    id: "dhorpatan",
    title: "Dhorpatan Highland Wilderness",
    theme: "offbeat",
    destinations: ["Baglung", "Dhorpatan Valley"],
    highlights: ["Alpine meadows", "Magar hill villages", "Wildlife & birdlife"],
    image: I.dhorpatanValley,
    href: "/offbeat-unexplored/dhorpatan-hunting-reserve",
  }),
  p({
    id: "saipal",
    title: "Saipal Base Camp Expedition",
    theme: "offbeat",
    destinations: ["Bajhang", "Saipal Base Camp"],
    highlights: ["Mount Saipal (7,031 m)", "Remote Bajhang valleys", "Expedition-style trekking"],
    image: I.saipal,
    href: "/offbeat-unexplored/saipal-base-camp",
  }),

  /* ---------- Himalayan adventure ---------- */
  p({
    id: "mustang-circuit",
    title: "Mustang Circuit",
    theme: "himalayan",
    destinations: ["Jomsom", "Kagbeni", "Lo Manthang", "Muktinath"],
    highlights: ["Walled city of Lo Manthang", "Chhosar sky caves", "Marpha apple orchards"],
    difficulty: "Moderate",
    image: I.upperMustang,
    href: "/adventure/mustang-circuit-trek",
  }),
  p({
    id: "manang-circuit",
    title: "Manang Circuit with Tilicho Lake",
    theme: "himalayan",
    destinations: ["Manang", "Tilicho Lake", "Thorong La", "Muktinath"],
    highlights: ["Tilicho Lake side trip", "Thorong La (5,416 m)", "Acclimatisation day in Manang"],
    duration: "16 days",
    difficulty: "Challenging",
    image: I.manang,
    href: "/packages/manang-circuit-trek",
  }),
  p({
    id: "tsum-valley",
    title: "Tsum Valley Trek",
    theme: "himalayan",
    destinations: ["Gorkha", "Chumling", "Chhokang", "Nile", "Mu Gompa"],
    highlights: ["Mu Gompa (≈ 3,700 m)", "Rachen Gompa", "Mani walls & chortens"],
    difficulty: "Moderate",
    image: I.manaslu,
    href: "/adventure/tsum-valley-trek",
  }),
  p({
    id: "api-nampa",
    title: "Api Nampa Base Camp Trek",
    theme: "himalayan",
    destinations: ["Darchula", "Api Nampa Conservation Area"],
    highlights: ["Base camp below Mount Api", "Far-western wilderness", "Few other trekkers"],
    difficulty: "Challenging",
    image: I.apiNampa,
    href: "/adventure/api-nampa-base-camp-trek",
  }),
  p({
    id: "langtang",
    title: "Langtang Valley Trek",
    theme: "himalayan",
    destinations: ["Rasuwa", "Langtang Valley", "Kyanjin Gompa"],
    highlights: ["Tamang villages", "Kyanjin Gompa", "Optional Tserko Ri climb"],
    difficulty: "Moderate",
    image: I.langtang,
    href: "/adventure/langtang-valley-trek",
  }),
  p({
    id: "three-passes",
    title: "Everest Three Passes Trek",
    theme: "himalayan",
    destinations: ["Khumbu", "Gokyo", "Everest Base Camp"],
    highlights: ["Three high passes", "Gokyo lakes", "Quieter side valleys of Khumbu"],
    difficulty: "Challenging",
    image: I.everestRegion,
    href: "/adventure/everest-three-passes-trek",
  }),

  /* ---------- Camping & road trips ---------- */
  p({
    id: "camping",
    title: "Camping Destinations in Nepal",
    theme: "camping",
    destinations: ["Ghandruk", "Ghalegaun", "Rara Lake", "Upper Mustang"],
    highlights: ["Hill, lake & high-altitude sites", "Mountain-view campsites", "Responsible camping practice"],
    image: I.ghaleGaun,
    href: "/activities/adventure/camping",
  }),
  p({
    id: "road-trail",
    title: "Road & Trail Adventures",
    theme: "road",
    destinations: ["Upper Mustang", "Muktinath & Jomsom", "Manang", "Ghandruk"],
    highlights: ["Jeep & motorbike journeys", "Mountain villages en route", "Road + trek combinations"],
    image: I.muktinathRoad,
    href: "/activities/road-trail-adventure",
  }),
  p({
    id: "custom",
    title: "Plan Your Custom Adventure",
    theme: "custom",
    destinations: ["Anywhere in Nepal"],
    highlights: ["Your dates & pace", "Private or small group", "Route, permits & logistics planned"],
    image: I.highTrail,
    href: "/contact",
  }),
];

export const activePackages = () => PACKAGES.filter((x) => x.active);

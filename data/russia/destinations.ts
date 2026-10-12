// data/russia/destinations.ts
// CMS-ready Russia destinations.
//
// operationalStatus (set by Karvaahh, not hard-coded in the UI):
//   "active"   – shown and bookable
//   "limited"  – shown with "Availability subject to current operating conditions",
//                and offered as an availability check rather than a booking
//   "inactive" – hidden from every list, map and filter
// The statuses below are starting defaults; review them against current flight
// connectivity, operating conditions, safety advice and entry rules.
//
// `href` is the future destination page. It is only linked once listed in
// LIVE_ROUTES (lib/international/config.ts). Package counts are derived from
// ./packages.ts, never typed in here.

import type { RussiaExperienceId } from "./experiences";
import type { RussiaImageId } from "./images";
import type { RussiaRegionId } from "./regions";

export type OperationalStatus = "active" | "limited" | "inactive";
export type SeasonId = "spring" | "summer" | "autumn" | "winter";

export interface RussiaDestination {
  id: string;
  name: string;
  slug: string;
  region: RussiaRegionId;
  image?: RussiaImageId;
  description: string;
  attractions: string[];
  travelStyles: RussiaExperienceId[];
  idealSeason?: SeasonId[];
  recommendedDuration?: string;
  featured?: boolean;
  operationalStatus: OperationalStatus;
  /** Part of a wider destination (Suzdal → Golden Ring). Filters on the parent include it. */
  partOf?: string;
  /** Shown in the quick destination filter bar. */
  quickFilter?: boolean;
  /** Section on this page that tells the destination's full story. */
  sectionId?: string;
  /** [latitude, longitude]; omit to keep it off the map. */
  coords?: [number, number];
  /** Short positioning line for the "Other Russia experiences" collection. */
  positioning?: string;
  href?: string;
}

const BASE = "/packages/international/russia";

export const russiaDestinations: RussiaDestination[] = [
  {
    id: "moscow",
    name: "Moscow",
    slug: "moscow",
    region: "western-russia",
    image: "moscow",
    description: "Russia's capital: Red Square, the Kremlin, grand metro stations, theatres and riverside parks.",
    attractions: ["Red Square", "Saint Basil's Cathedral", "Kremlin", "Moscow Metro", "GUM", "Bolshoi Theatre", "Cathedral of Christ the Saviour", "Arbat Street", "Zaryadye Park", "Sparrow Hills"],
    travelStyles: ["capitals", "city-break", "history", "museums", "architecture", "religious-heritage", "winter", "family", "luxury", "budget", "photography", "honeymoon", "private", "train"],
    idealSeason: ["spring", "summer", "autumn", "winter"],
    recommendedDuration: "3–5 days",
    featured: true,
    operationalStatus: "active",
    quickFilter: true,
    sectionId: "moscow",
    coords: [55.75, 37.62],
    href: `${BASE}/moscow`,
  },
  {
    id: "saint-petersburg",
    name: "Saint Petersburg",
    slug: "saint-petersburg",
    region: "western-russia",
    image: "saint-petersburg",
    description: "Imperial palaces, canals and the Hermitage, with the long light of the White Nights in early summer.",
    attractions: ["Hermitage Museum", "Winter Palace", "Palace Square", "Church of the Savior on Spilled Blood", "Peter and Paul Fortress", "Nevsky Prospect", "St Isaac's Cathedral", "Kazan Cathedral", "Peterhof Palace", "Catherine Palace"],
    travelStyles: ["capitals", "city-break", "history", "museums", "architecture", "religious-heritage", "honeymoon", "family", "luxury", "photography", "winter", "private", "train"],
    idealSeason: ["spring", "summer", "autumn"],
    recommendedDuration: "3–4 days",
    featured: true,
    operationalStatus: "active",
    quickFilter: true,
    sectionId: "saint-petersburg",
    coords: [59.94, 30.31],
    href: `${BASE}/saint-petersburg`,
  },
  {
    id: "golden-ring",
    name: "Golden Ring",
    slug: "golden-ring",
    region: "western-russia",
    description: "A circuit of historic towns north-east of Moscow, known for monasteries, kremlins and wooden architecture.",
    attractions: ["Suzdal", "Vladimir", "Sergiev Posad", "Yaroslavl", "Rostov Veliky", "Kostroma", "Pereslavl-Zalessky"],
    travelStyles: ["history", "architecture", "religious-heritage", "photography", "private", "budget"],
    idealSeason: ["summer", "autumn", "winter"],
    recommendedDuration: "2–4 days",
    featured: true,
    operationalStatus: "active",
    quickFilter: true,
    sectionId: "golden-ring",
    coords: [56.9, 40.2],
    href: `${BASE}/golden-ring`,
  },
  {
    id: "suzdal",
    name: "Suzdal",
    slug: "suzdal",
    region: "western-russia",
    description: "A small Golden Ring town of white-stone churches, monasteries and wooden houses.",
    attractions: ["Suzdal Kremlin", "Museum of Wooden Architecture", "Saviour Monastery of St Euthymius"],
    travelStyles: ["history", "architecture", "religious-heritage", "photography"],
    idealSeason: ["summer", "autumn", "winter"],
    recommendedDuration: "1–2 days",
    operationalStatus: "active",
    partOf: "golden-ring",
    href: `${BASE}/golden-ring/suzdal`,
  },
  {
    id: "vladimir",
    name: "Vladimir",
    slug: "vladimir",
    region: "western-russia",
    description: "One of medieval Russia's capitals, often paired with Suzdal.",
    attractions: ["Golden Gate", "Assumption Cathedral", "Cathedral of Saint Demetrius"],
    travelStyles: ["history", "architecture", "religious-heritage"],
    idealSeason: ["summer", "autumn"],
    recommendedDuration: "1 day",
    operationalStatus: "active",
    partOf: "golden-ring",
    href: `${BASE}/golden-ring/vladimir`,
  },
  {
    id: "kazan",
    name: "Kazan",
    slug: "kazan",
    region: "volga",
    description: "Where Russian, Tatar and Islamic cultural traditions meet on the Volga.",
    attractions: ["Kazan Kremlin", "Kul Sharif Mosque", "Bauman Street", "Palace of Agriculture", "Tatar cuisine", "Volga riverfront"],
    travelStyles: ["history", "architecture", "religious-heritage", "family", "city-break", "photography", "train"],
    idealSeason: ["spring", "summer", "autumn"],
    recommendedDuration: "2–3 days",
    featured: true,
    operationalStatus: "active",
    quickFilter: true,
    sectionId: "kazan",
    coords: [55.79, 49.12],
    href: `${BASE}/kazan`,
  },
  {
    id: "nizhny-novgorod",
    name: "Nizhny Novgorod",
    slug: "nizhny-novgorod",
    region: "volga",
    description: "A kremlin above the meeting of the Volga and Oka rivers.",
    attractions: ["Nizhny Novgorod Kremlin", "Chkalov Staircase", "Volga cable car", "Bolshaya Pokrovskaya Street"],
    travelStyles: ["history", "architecture", "city-break", "photography"],
    idealSeason: ["summer", "autumn"],
    recommendedDuration: "1–2 days",
    operationalStatus: "active",
    coords: [56.33, 44.0],
    positioning: "Volga views and a riverside kremlin, an easy add-on from Moscow.",
    href: `${BASE}/nizhny-novgorod`,
  },
  {
    id: "sochi",
    name: "Sochi",
    slug: "sochi",
    region: "south",
    description: "Black Sea beaches in summer and Caucasus ski slopes at Krasnaya Polyana in winter.",
    attractions: ["Black Sea coastline", "Krasnaya Polyana", "Rosa Khutor", "Caucasus mountains", "Sochi Arboretum"],
    travelStyles: ["beach", "ski", "nature", "family", "honeymoon", "winter", "luxury"],
    idealSeason: ["summer", "winter"],
    recommendedDuration: "4–6 days",
    featured: true,
    operationalStatus: "active",
    quickFilter: true,
    sectionId: "sochi",
    coords: [43.6, 39.73],
    href: `${BASE}/sochi`,
  },
  {
    id: "murmansk",
    name: "Murmansk",
    slug: "murmansk",
    region: "arctic-north",
    image: "aurora",
    description: "An Arctic port city and base for Northern Lights trips onto the Kola Peninsula and to Teriberka.",
    attractions: ["Northern Lights (seasonal)", "Kola Peninsula", "Teriberka", "Arctic coastline", "Snow activities where available"],
    travelStyles: ["northern-lights", "winter", "nature", "photography", "honeymoon"],
    idealSeason: ["winter"],
    recommendedDuration: "3–4 days",
    featured: true,
    operationalStatus: "active",
    quickFilter: true,
    sectionId: "murmansk",
    coords: [68.97, 33.08],
    href: `${BASE}/murmansk`,
  },
  {
    id: "lake-baikal",
    name: "Lake Baikal",
    slug: "lake-baikal",
    region: "siberia",
    image: "lake-baikal",
    description: "The world's deepest lake: clear ice in winter, island trips and lakeside villages in summer.",
    attractions: ["Listvyanka", "Olkhon Island", "Baikal ice (winter)", "Circum-Baikal Railway", "Local Buryat culture"],
    travelStyles: ["baikal", "nature", "winter", "photography", "trans-siberian", "train"],
    idealSeason: ["summer", "winter"],
    recommendedDuration: "4–6 days",
    featured: true,
    operationalStatus: "active",
    quickFilter: true,
    sectionId: "lake-baikal",
    coords: [53.2, 107.4],
    href: `${BASE}/lake-baikal`,
  },
  {
    id: "irkutsk",
    name: "Irkutsk",
    slug: "irkutsk",
    region: "siberia",
    description: "The gateway city for Lake Baikal, with wooden merchant houses and a riverside centre.",
    attractions: ["130th Quarter", "Angara embankment", "Wooden lace houses", "Taltsy open-air museum"],
    travelStyles: ["baikal", "history", "trans-siberian", "train", "nature"],
    idealSeason: ["summer", "winter"],
    recommendedDuration: "1–2 days",
    operationalStatus: "active",
    quickFilter: true,
    sectionId: "lake-baikal",
    coords: [52.29, 104.28],
    href: `${BASE}/irkutsk`,
  },
  {
    id: "yekaterinburg",
    name: "Yekaterinburg",
    slug: "yekaterinburg",
    region: "urals",
    description: "The main city of the Urals, on the boundary between Europe and Asia.",
    attractions: ["Europe–Asia boundary", "Church on the Blood", "Historic Square", "Ural mineral museums"],
    travelStyles: ["history", "city-break", "trans-siberian", "train"],
    idealSeason: ["summer", "autumn"],
    recommendedDuration: "2 days",
    operationalStatus: "limited",
    quickFilter: true,
    coords: [56.84, 60.6],
    positioning: "Ural region and history, and a classic Trans-Siberian stop.",
    href: `${BASE}/yekaterinburg`,
  },
  {
    id: "novosibirsk",
    name: "Novosibirsk",
    slug: "novosibirsk",
    region: "siberia",
    description: "Siberia's largest city, known for its opera house and as a rail hub.",
    attractions: ["Opera and Ballet Theatre", "Ob River", "Akademgorodok"],
    travelStyles: ["city-break", "trans-siberian", "train"],
    idealSeason: ["summer"],
    recommendedDuration: "1–2 days",
    operationalStatus: "limited",
    coords: [55.03, 82.92],
    positioning: "A Siberian city stop on long-distance rail journeys.",
    href: `${BASE}/novosibirsk`,
  },
  {
    id: "krasnoyarsk",
    name: "Krasnoyarsk",
    slug: "krasnoyarsk",
    region: "siberia",
    description: "A Yenisei River city beside the rock pillars of Stolby Nature Reserve.",
    attractions: ["Stolby Nature Reserve", "Yenisei River", "Krasnoyarsk Dam viewpoint"],
    travelStyles: ["nature", "trans-siberian", "train", "photography"],
    idealSeason: ["summer"],
    recommendedDuration: "1–2 days",
    operationalStatus: "limited",
    coords: [56.01, 92.85],
    positioning: "River landscapes and rock formations on the Yenisei.",
    href: `${BASE}/krasnoyarsk`,
  },
  {
    id: "altai",
    name: "Altai Mountains",
    slug: "altai",
    region: "siberia",
    description: "Remote mountains, river valleys and lakes in southern Siberia.",
    attractions: ["Chuysky Trakt", "Katun River", "Mountain lakes", "Rock art sites"],
    travelStyles: ["nature", "photography", "private"],
    idealSeason: ["summer"],
    recommendedDuration: "5–7 days",
    operationalStatus: "limited",
    quickFilter: true,
    coords: [50.5, 86.5],
    positioning: "Mountains, nature and outdoor experiences.",
    href: `${BASE}/altai`,
  },
  {
    id: "vladivostok",
    name: "Vladivostok",
    slug: "vladivostok",
    region: "far-east",
    description: "A Pacific port city of bridges, bays and Far East seafood at the end of the Trans-Siberian line.",
    attractions: ["Golden Horn Bay", "Russky Bridge", "Eagle's Nest viewpoint", "Seafront promenade"],
    travelStyles: ["city-break", "trans-siberian", "train", "photography"],
    idealSeason: ["summer", "autumn"],
    recommendedDuration: "2–3 days",
    operationalStatus: "limited",
    quickFilter: true,
    coords: [43.12, 131.89],
    positioning: "Coastal and Russian Far East experiences.",
    href: `${BASE}/vladivostok`,
  },
  {
    id: "khabarovsk",
    name: "Khabarovsk",
    slug: "khabarovsk",
    region: "far-east",
    description: "A Far East city on the Amur River.",
    attractions: ["Amur embankment", "Muravyov-Amursky Street", "Regional museum"],
    travelStyles: ["city-break", "trans-siberian", "train"],
    idealSeason: ["summer"],
    recommendedDuration: "1–2 days",
    operationalStatus: "limited",
    coords: [48.48, 135.08],
    positioning: "Amur River city on the eastern rail route.",
    href: `${BASE}/khabarovsk`,
  },
  {
    id: "kamchatka",
    name: "Kamchatka",
    slug: "kamchatka",
    region: "far-east",
    description: "Petropavlovsk-Kamchatsky and a peninsula of volcanoes, hot springs and wildlife.",
    attractions: ["Avachinsky volcano area", "Hot springs", "Pacific coastline", "Wildlife viewing (seasonal)"],
    travelStyles: ["nature", "photography", "private"],
    idealSeason: ["summer"],
    recommendedDuration: "6–8 days",
    operationalStatus: "limited",
    quickFilter: true,
    coords: [53.02, 158.65],
    positioning: "Volcanoes, wilderness and adventure.",
    href: `${BASE}/kamchatka`,
  },
  {
    id: "kaliningrad",
    name: "Kaliningrad",
    slug: "kaliningrad",
    region: "baltic",
    description: "A Baltic exclave with European-influenced architecture and the Curonian Spit dunes nearby.",
    attractions: ["Königsberg Cathedral", "Fishing Village", "Curonian Spit", "Amber Museum"],
    travelStyles: ["history", "architecture", "nature", "city-break"],
    idealSeason: ["summer"],
    recommendedDuration: "2–3 days",
    operationalStatus: "limited",
    coords: [54.71, 20.51],
    positioning: "Baltic and European-influenced heritage.",
    href: `${BASE}/kaliningrad`,
  },
];

/** Never render inactive destinations. */
export const visibleDestinations = russiaDestinations.filter((d) => d.operationalStatus !== "inactive");

export const russiaDestinationById = (id: string) => russiaDestinations.find((d) => d.id === id);

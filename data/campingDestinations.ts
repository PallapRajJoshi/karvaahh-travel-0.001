import { campingImages, type ImageTone } from "./campingImages";

/* ------------------------------------------------------------------ */
/* Types                                                                */
/* ------------------------------------------------------------------ */

export type Difficulty = "Easy" | "Moderate" | "Challenging";

export type CategoryId =
  | "weekend"
  | "hilltop"
  | "lakeside"
  | "himalayan"
  | "village"
  | "forest"
  | "jungle"
  | "glamping"
  | "adventure"
  | "romantic"
  | "family"
  | "group"
  | "photography"
  | "wellness";

export type RegionFilterId =
  | "all"
  | "kathmandu"
  | "annapurna"
  | "everest"
  | "langtang"
  | "manaslu"
  | "mustang"
  | "makalu"
  | "kanchenjunga"
  | "dolpo"
  | "farwest"
  | "eastern"
  | "midhills";

/** Masonry footprint on desktop. `feature` = 2×2, `wide` = full row. */
export type CardSize = "standard" | "feature" | "wide";

export type CampingDestination = {
  name: string;
  slug: string;
  /** Human-readable region shown on the card. */
  region: string;
  /** Key used by the sticky filter bar. */
  filterRegion: Exclude<RegionFilterId, "all">;
  category: CategoryId[];
  /** Short camping-type label shown as the first tag. */
  campingType: string;
  difficulty: Difficulty;
  bestSeason: string;
  description: string;
  image: string;
  imageAlt: string;
  tone: ImageTone;
  size: CardSize;
  /** On-page section the card's Explore link scrolls to. */
  sectionAnchor: string;
};

/**
 * Destination detail pages (/activities/adventure/camping/[slug]) are not
 * built yet. While this is false, "Explore" links scroll to the matching
 * region section on this page instead of pointing at a 404.
 */
export const DESTINATION_PAGES_LIVE = false;

export const destinationHref = (d: CampingDestination) =>
  DESTINATION_PAGES_LIVE
    ? `/activities/adventure/camping/${d.slug}`
    : `#${d.sectionAnchor}`;

/* ------------------------------------------------------------------ */
/* Filter bar                                                           */
/* ------------------------------------------------------------------ */

export const regionFilters: { id: RegionFilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "kathmandu", label: "Kathmandu Valley" },
  { id: "annapurna", label: "Pokhara & Annapurna" },
  { id: "everest", label: "Everest" },
  { id: "langtang", label: "Langtang" },
  { id: "manaslu", label: "Manaslu" },
  { id: "mustang", label: "Mustang" },
  { id: "makalu", label: "Makalu" },
  { id: "kanchenjunga", label: "Kanchenjunga" },
  { id: "dolpo", label: "Dolpo" },
  { id: "farwest", label: "Rara & Far West" },
  { id: "eastern", label: "Eastern Nepal" },
  { id: "midhills", label: "Midhills & Terai" },
];

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

type Seed = Omit<CampingDestination, "image" | "imageAlt"> & { alt: string };

const seeds: Seed[] = [
  {
    name: "Nagarkot", slug: "nagarkot", region: "Kathmandu Valley", filterRegion: "kathmandu",
    category: ["weekend", "hilltop", "himalayan", "family", "romantic", "group", "glamping", "photography"],
    campingType: "Hilltop camping", difficulty: "Easy", bestSeason: "Oct – Apr",
    description: "Wake up above the Kathmandu Valley with Himalayan sunrise views.",
    tone: "dusk", size: "feature", sectionAnchor: "weekend",
    alt: "Tents on the Nagarkot ridge at sunrise with the Himalaya on the horizon",
  },
  {
    name: "Chitlang", slug: "chitlang", region: "Makwanpur, near Kathmandu", filterRegion: "kathmandu",
    category: ["weekend", "village", "family", "romantic", "group", "glamping"],
    campingType: "Village camping", difficulty: "Easy", bestSeason: "Sep – May",
    description: "A quiet farming valley on the old trade route, an easy drive from the city.",
    tone: "forest", size: "standard", sectionAnchor: "weekend",
    alt: "Terraced fields and farmhouses in the Chitlang valley",
  },
  {
    name: "Markhu", slug: "markhu", region: "Makwanpur, near Kathmandu", filterRegion: "kathmandu",
    category: ["weekend", "lakeside", "family", "romantic", "group"],
    campingType: "Lakeside camping", difficulty: "Easy", bestSeason: "Sep – May",
    description: "Pitch beside the Indrasarovar reservoir, framed by forested hills.",
    tone: "lake", size: "standard", sectionAnchor: "lakes",
    alt: "Calm Indrasarovar lake at Markhu surrounded by green hills",
  },
  {
    name: "Kakani", slug: "kakani", region: "Nuwakot, near Kathmandu", filterRegion: "kathmandu",
    category: ["weekend", "hilltop", "forest", "family", "group"],
    campingType: "Forest ridge camping", difficulty: "Easy", bestSeason: "Oct – Apr",
    description: "Pine-and-rhododendron ridges with a view north to the Ganesh range.",
    tone: "forest", size: "standard", sectionAnchor: "weekend",
    alt: "Pine forest ridge at Kakani with mountains in the distance",
  },
  {
    name: "Daman", slug: "daman", region: "Makwanpur", filterRegion: "kathmandu",
    category: ["weekend", "hilltop", "himalayan", "romantic", "family", "group"],
    campingType: "Panorama camping", difficulty: "Easy", bestSeason: "Oct – Apr",
    description: "A high roadside ridge known for one of the widest Himalayan panoramas.",
    tone: "snow", size: "standard", sectionAnchor: "weekend",
    alt: "Wide Himalayan panorama seen from the Daman ridge",
  },
  {
    name: "Kalinchowk", slug: "kalinchowk", region: "Dolakha", filterRegion: "kathmandu",
    category: ["hilltop", "himalayan", "adventure", "group", "photography", "wellness"],
    campingType: "High-hill camping", difficulty: "Moderate", bestSeason: "Oct – May",
    description: "A cold, high shrine hill with close views of Gaurishankar and Rolwaling.",
    tone: "snow", size: "standard", sectionAnchor: "himalayan",
    alt: "Snow-dusted Kalinchowk hilltop with prayer flags",
  },
  {
    name: "Sailung", slug: "sailung", region: "Dolakha & Ramechhap", filterRegion: "kathmandu",
    category: ["hilltop", "himalayan", "adventure", "group", "photography"],
    campingType: "Meadow camping", difficulty: "Moderate", bestSeason: "Oct – May",
    description: "Rolling grassy domes and a long line of peaks on the northern horizon.",
    tone: "snow", size: "standard", sectionAnchor: "himalayan",
    alt: "Grassy hills of Sailung with a Himalayan skyline",
  },
  {
    name: "Panch Pokhari", slug: "panch-pokhari", region: "Sindhupalchok", filterRegion: "langtang",
    category: ["lakeside", "himalayan", "adventure", "group", "photography", "wellness"],
    campingType: "Alpine lake camping", difficulty: "Challenging", bestSeason: "Apr – May, Oct – Nov",
    description: "Five sacred alpine lakes on a less-walked route north-east of Kathmandu.",
    tone: "lake", size: "standard", sectionAnchor: "himalayan",
    alt: "Alpine lakes of Panch Pokhari below rocky ridges",
  },
  {
    name: "Gosaikunda", slug: "gosaikunda", region: "Langtang, Rasuwa", filterRegion: "langtang",
    category: ["lakeside", "himalayan", "adventure", "photography", "wellness"],
    campingType: "Sacred lake camping", difficulty: "Challenging", bestSeason: "Apr – May, Sep – Nov",
    description: "A high sacred lake surrounded by stark, silent mountain walls.",
    tone: "lake", size: "feature", sectionAnchor: "langtang",
    alt: "Gosaikunda lake at high altitude with surrounding peaks",
  },
  {
    name: "Langtang", slug: "langtang", region: "Rasuwa", filterRegion: "langtang",
    category: ["himalayan", "adventure", "village"],
    campingType: "Valley trek camping", difficulty: "Moderate", bestSeason: "Mar – May, Oct – Nov",
    description: "Glacial valley country with Tamang villages close to Kathmandu.",
    tone: "snow", size: "standard", sectionAnchor: "langtang",
    alt: "The Langtang valley with snow peaks and yak pastures",
  },
  {
    name: "Pokhara", slug: "pokhara", region: "Kaski, Gandaki", filterRegion: "annapurna",
    category: ["weekend", "lakeside", "family", "romantic", "group", "glamping"],
    campingType: "Lakeside camping", difficulty: "Easy", bestSeason: "Oct – May",
    description: "Base yourself by the lakes with Machhapuchhre rising behind the city.",
    tone: "lake", size: "standard", sectionAnchor: "annapurna",
    alt: "Phewa Lake in Pokhara with Machhapuchhre reflected",
  },
  {
    name: "Sarangkot", slug: "sarangkot", region: "Pokhara", filterRegion: "annapurna",
    category: ["hilltop", "himalayan", "romantic", "family", "group", "photography", "glamping"],
    campingType: "Sunrise camping", difficulty: "Easy", bestSeason: "Oct – Apr",
    description: "A short climb above Pokhara for first light on the Annapurna range.",
    tone: "dusk", size: "standard", sectionAnchor: "annapurna",
    alt: "Sunrise over the Annapurna range from Sarangkot",
  },
  {
    name: "Australian Camp", slug: "australian-camp", region: "Annapurna", filterRegion: "annapurna",
    category: ["hilltop", "himalayan", "family", "photography"],
    campingType: "Himalayan view camping", difficulty: "Easy", bestSeason: "Oct – May",
    description: "A grassy ridge that works as a gentle first taste of the Annapurna foothills.",
    tone: "snow", size: "standard", sectionAnchor: "annapurna",
    alt: "Tents on the grassy Australian Camp ridge facing Annapurna",
  },
  {
    name: "Ghandruk", slug: "ghandruk", region: "Annapurna", filterRegion: "annapurna",
    category: ["village", "himalayan", "family", "romantic", "group", "photography"],
    campingType: "Gurung village camping", difficulty: "Moderate", bestSeason: "Oct – May",
    description: "Stone-roofed Gurung village with Annapurna South and Hiunchuli up close.",
    tone: "earth", size: "feature", sectionAnchor: "village",
    alt: "Stone houses of Ghandruk with Annapurna South behind",
  },
  {
    name: "Ghalegaun", slug: "ghalegaun", region: "Lamjung", filterRegion: "annapurna",
    category: ["village", "himalayan", "family", "romantic", "group"],
    campingType: "Cultural village camping", difficulty: "Easy", bestSeason: "Oct – May",
    description: "A hilltop Gurung community known for its homestay culture and mountain views.",
    tone: "earth", size: "standard", sectionAnchor: "village",
    alt: "Ghalegaun village on a ridge with Lamjung Himal behind",
  },
  {
    name: "Sikles", slug: "sikles", region: "Kaski", filterRegion: "annapurna",
    category: ["village", "himalayan", "group", "adventure"],
    campingType: "Village trail camping", difficulty: "Moderate", bestSeason: "Oct – May",
    description: "One of the larger Gurung villages, set under the Lamjung and Annapurna II walls.",
    tone: "earth", size: "standard", sectionAnchor: "village",
    alt: "Sikles village terraces beneath snow peaks",
  },
  {
    name: "Mardi Himal", slug: "mardi-himal", region: "Annapurna", filterRegion: "annapurna",
    category: ["himalayan", "adventure", "photography"],
    campingType: "Ridge trek camping", difficulty: "Moderate", bestSeason: "Mar – May, Oct – Nov",
    description: "A narrow ridge trail climbing straight toward Machhapuchhre.",
    tone: "snow", size: "wide", sectionAnchor: "annapurna",
    alt: "Mardi Himal ridge trail leading toward Machhapuchhre",
  },
  {
    name: "Annapurna Base Camp", slug: "annapurna-base-camp", region: "Annapurna Sanctuary", filterRegion: "annapurna",
    category: ["himalayan", "adventure"],
    campingType: "Sanctuary camping", difficulty: "Challenging", bestSeason: "Mar – May, Oct – Nov",
    description: "An amphitheatre of peaks at the head of the Modi Khola valley.",
    tone: "snow", size: "feature", sectionAnchor: "annapurna",
    alt: "Annapurna Base Camp surrounded by a ring of mountains",
  },
  {
    name: "Everest Base Camp", slug: "everest-base-camp", region: "Khumbu, Solukhumbu", filterRegion: "everest",
    category: ["himalayan", "adventure", "photography"],
    campingType: "High-altitude trek camping", difficulty: "Challenging", bestSeason: "Mar – May, Oct – Nov",
    description: "The Khumbu glacier's edge, at the foot of the world's highest mountain.",
    tone: "snow", size: "feature", sectionAnchor: "everest",
    alt: "Khumbu glacier and icefall near Everest Base Camp",
  },
  {
    name: "Gokyo Lakes", slug: "gokyo-lakes", region: "Khumbu, Solukhumbu", filterRegion: "everest",
    category: ["lakeside", "himalayan", "adventure", "photography"],
    campingType: "Glacial lake camping", difficulty: "Challenging", bestSeason: "Mar – May, Oct – Nov",
    description: "A chain of turquoise lakes beside the Ngozumpa glacier.",
    tone: "lake", size: "standard", sectionAnchor: "everest",
    alt: "Turquoise Gokyo lake beneath Cho Oyu",
  },
  {
    name: "Jomsom", slug: "jomsom", region: "Lower Mustang", filterRegion: "mustang",
    category: ["himalayan", "adventure"],
    campingType: "Trans-Himalayan camping", difficulty: "Moderate", bestSeason: "Mar – Nov",
    description: "The windswept Kali Gandaki valley between Dhaulagiri and Nilgiri.",
    tone: "earth", size: "standard", sectionAnchor: "mustang",
    alt: "The Kali Gandaki riverbed at Jomsom with Nilgiri above",
  },
  {
    name: "Muktinath", slug: "muktinath", region: "Lower Mustang", filterRegion: "mustang",
    category: ["himalayan", "wellness", "village"],
    campingType: "Pilgrimage camping", difficulty: "Moderate", bestSeason: "Mar – Nov",
    description: "A sacred temple complex high in the valley below Thorong La.",
    tone: "earth", size: "standard", sectionAnchor: "mustang",
    alt: "Muktinath temple with arid mountains behind",
  },
  {
    name: "Upper Mustang", slug: "upper-mustang", region: "Mustang", filterRegion: "mustang",
    category: ["himalayan", "adventure", "village", "photography"],
    campingType: "Desert-plateau camping", difficulty: "Challenging", bestSeason: "Mar – Nov",
    description: "Eroded cliffs, walled Lo Manthang and a rain-shadow sky.",
    tone: "earth", size: "wide", sectionAnchor: "mustang",
    alt: "Red eroded cliffs of Upper Mustang under a clear sky",
  },
  {
    name: "Chitwan", slug: "chitwan", region: "Chitwan, Terai", filterRegion: "midhills",
    category: ["jungle", "family", "glamping"],
    campingType: "Jungle camping", difficulty: "Easy", bestSeason: "Oct – Mar",
    description: "Grasslands and sal forest on the edge of Nepal's best-known national park.",
    tone: "forest", size: "standard", sectionAnchor: "jungle",
    alt: "Rapti river and grasslands at the edge of Chitwan National Park",
  },
  {
    name: "Bardiya", slug: "bardiya", region: "Bardiya, western Terai", filterRegion: "midhills",
    category: ["jungle", "adventure"],
    campingType: "Wilderness safari camping", difficulty: "Easy", bestSeason: "Oct – Apr",
    description: "Quieter riverine forest in the far west of the lowlands.",
    tone: "forest", size: "standard", sectionAnchor: "jungle",
    alt: "Karnali river bank inside Bardiya forest",
  },
  {
    name: "Rara Lake", slug: "rara-lake", region: "Mugu, Karnali", filterRegion: "farwest",
    category: ["lakeside", "himalayan", "adventure", "photography", "wellness"],
    campingType: "Remote lake camping", difficulty: "Moderate", bestSeason: "Apr – Jun, Sep – Nov",
    description: "Nepal's largest lake, ringed by pine and very few people.",
    tone: "lake", size: "wide", sectionAnchor: "farwest",
    alt: "Deep blue Rara Lake surrounded by pine forest",
  },
  {
    name: "Phoksundo Lake", slug: "phoksundo-lake", region: "Dolpo", filterRegion: "dolpo",
    category: ["lakeside", "himalayan", "adventure", "photography"],
    campingType: "Alpine lake camping", difficulty: "Challenging", bestSeason: "May – Oct",
    description: "Turquoise water below Ringmo village in Shey Phoksundo National Park.",
    tone: "lake", size: "feature", sectionAnchor: "farwest",
    alt: "Turquoise Phoksundo Lake with cliffs and Ringmo village",
  },
  {
    name: "Tilicho Lake", slug: "tilicho-lake", region: "Manang", filterRegion: "annapurna",
    category: ["lakeside", "himalayan", "adventure", "photography"],
    campingType: "High-altitude lake camping", difficulty: "Challenging", bestSeason: "Apr – May, Oct – Nov",
    description: "One of the highest lakes in the world, reached on a side trip from Manang.",
    tone: "lake", size: "standard", sectionAnchor: "lakes",
    alt: "Tilicho Lake below glaciated peaks",
  },
  {
    name: "Manaslu", slug: "manaslu", region: "Gorkha", filterRegion: "manaslu",
    category: ["himalayan", "adventure"],
    campingType: "Expedition-style camping", difficulty: "Challenging", bestSeason: "Mar – May, Sep – Nov",
    description: "A restricted-area circuit through deep gorges to the Larkya La.",
    tone: "snow", size: "standard", sectionAnchor: "manaslu",
    alt: "Manaslu peak above the Budhi Gandaki valley",
  },
  {
    name: "Makalu Base Camp", slug: "makalu-base-camp", region: "Sankhuwasabha", filterRegion: "makalu",
    category: ["himalayan", "adventure"],
    campingType: "Remote base camp camping", difficulty: "Challenging", bestSeason: "Apr – May, Oct – Nov",
    description: "Long, wild approach through the Barun valley to the world's fifth-highest peak.",
    tone: "snow", size: "standard", sectionAnchor: "makalu",
    alt: "Makalu rising above the upper Barun valley",
  },
  {
    name: "Kanchenjunga", slug: "kanchenjunga", region: "Taplejung", filterRegion: "kanchenjunga",
    category: ["himalayan", "adventure", "photography"],
    campingType: "Remote wilderness camping", difficulty: "Challenging", bestSeason: "Apr – May, Oct – Nov",
    description: "The far eastern giant, approached through forests and high yak pastures.",
    tone: "snow", size: "wide", sectionAnchor: "kanchenjunga",
    alt: "Kanchenjunga massif above glacier moraine",
  },
  {
    name: "Khaptad", slug: "khaptad", region: "Far Western Nepal", filterRegion: "farwest",
    category: ["forest", "wellness", "adventure"],
    campingType: "Plateau meadow camping", difficulty: "Moderate", bestSeason: "Mar – May, Sep – Nov",
    description: "Rolling grassland plateau and forest known for its calm and spiritual history.",
    tone: "forest", size: "standard", sectionAnchor: "farwest",
    alt: "Open meadows of the Khaptad plateau",
  },
  {
    name: "Sandakpur", slug: "sandakpur", region: "Ilam", filterRegion: "eastern",
    category: ["hilltop", "himalayan", "photography"],
    campingType: "Summit view camping", difficulty: "Moderate", bestSeason: "Oct – Apr",
    description: "A border summit with views across to Kanchenjunga and, on clear days, beyond.",
    tone: "dusk", size: "standard", sectionAnchor: "eastern",
    alt: "Sunrise over Kanchenjunga from Sandakpur",
  },
  {
    name: "Antu Danda", slug: "antu-danda", region: "Ilam", filterRegion: "eastern",
    category: ["hilltop", "romantic", "photography"],
    campingType: "Sunrise camping", difficulty: "Easy", bestSeason: "Oct – Apr",
    description: "Tea-country hill famous in the east for its sunrise.",
    tone: "dusk", size: "standard", sectionAnchor: "eastern",
    alt: "Sunrise over the hills of Antu Danda in Ilam",
  },
  {
    name: "Bandipur", slug: "bandipur", region: "Tanahun", filterRegion: "midhills",
    category: ["village", "hilltop", "family", "romantic", "group", "photography"],
    campingType: "Heritage town camping", difficulty: "Easy", bestSeason: "Oct – May",
    description: "A preserved Newar hill town with long views over the Marsyangdi valley.",
    tone: "earth", size: "standard", sectionAnchor: "village",
    alt: "Old Newar houses on the main street of Bandipur",
  },
  {
    name: "Tansen", slug: "tansen", region: "Palpa", filterRegion: "midhills",
    category: ["village", "hilltop"],
    campingType: "Hill town camping", difficulty: "Easy", bestSeason: "Oct – Apr",
    description: "Old Palpa bazaar and Srinagar hill above a sea of morning cloud.",
    tone: "earth", size: "standard", sectionAnchor: "village",
    alt: "Morning cloud below the hills of Tansen",
  },
  {
    name: "Lumbini", slug: "lumbini", region: "Rupandehi", filterRegion: "midhills",
    category: ["wellness", "family"],
    campingType: "Spiritual & wellness stays", difficulty: "Easy", bestSeason: "Oct – Mar",
    description: "Birthplace of the Buddha — quiet gardens and monastic zones.",
    tone: "earth", size: "standard", sectionAnchor: "village",
    alt: "Monastic garden pathway in Lumbini",
  },
  {
    name: "Dolpo", slug: "dolpo", region: "Karnali", filterRegion: "dolpo",
    category: ["himalayan", "adventure", "village", "photography"],
    campingType: "Expedition camping", difficulty: "Challenging", bestSeason: "May – Oct",
    description: "High, remote Bon and Buddhist country crossed by long camping treks.",
    tone: "earth", size: "standard", sectionAnchor: "farwest",
    alt: "Barren high valleys of Dolpo with a distant gompa",
  },
  {
    name: "Humla", slug: "humla", region: "Karnali", filterRegion: "farwest",
    category: ["himalayan", "adventure", "village"],
    campingType: "Remote trail camping", difficulty: "Challenging", bestSeason: "May – Oct",
    description: "Nepal's far north-west corner, on the old route toward Tibet.",
    tone: "earth", size: "standard", sectionAnchor: "farwest",
    alt: "Trail through the arid Limi valley in Humla",
  },
  {
    name: "Tsum Valley", slug: "tsum-valley", region: "Gorkha", filterRegion: "manaslu",
    category: ["himalayan", "village", "wellness", "adventure"],
    campingType: "Sacred valley camping", difficulty: "Challenging", bestSeason: "Mar – May, Sep – Nov",
    description: "A hidden Buddhist valley branching off the Manaslu trail.",
    tone: "snow", size: "standard", sectionAnchor: "manaslu",
    alt: "Chortens and mani walls in the Tsum Valley",
  },
];

export const campingDestinations: CampingDestination[] = seeds.map(({ alt, ...d }) => ({
  ...d,
  image: campingImages.destination(d.slug),
  imageAlt: alt,
}));

/* ------------------------------------------------------------------ */
/* Filtering & search                                                   */
/* ------------------------------------------------------------------ */

export type DestinationQuery = {
  region?: RegionFilterId;
  category?: CategoryId | null;
  difficulty?: Difficulty | null;
  search?: string;
};

const normalise = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

export function filterDestinations(
  list: CampingDestination[],
  { region = "all", category = null, difficulty = null, search = "" }: DestinationQuery,
): CampingDestination[] {
  const q = normalise(search);
  return list.filter((d) => {
    if (region !== "all" && d.filterRegion !== region) return false;
    if (category && !d.category.includes(category)) return false;
    if (difficulty && d.difficulty !== difficulty) return false;
    if (q) {
      const hay = normalise(`${d.name} ${d.region} ${d.campingType}`);
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export const countByCategory = (id: CategoryId) =>
  campingDestinations.filter((d) => d.category.includes(id)).length;

export const byDifficulty = (level: Difficulty) =>
  campingDestinations.filter((d) => d.difficulty === level);

export const getDestination = (slug: string) =>
  campingDestinations.find((d) => d.slug === slug);

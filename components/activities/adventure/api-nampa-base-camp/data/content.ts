import { IMAGES } from "./images";
import { ANCHORS, ROUTES } from "./routes";
import type {
  Advisory,
  Experience,
  GalleryImage,
  HeroBadge,
  Highlight,
  InfoPoint,
  Peak,
  PrepItem,
  QuickFact,
  RelatedLink,
  Season,
  StayType,
  TravelInfoCard,
} from "./types";

/* ───────────────────────── Hero ───────────────────────── */

export const HERO = {
  eyebrow: ["Nepal", "Far-Western Himalayas", "Remote Wilderness Trek"],
  title: "Api Nampa Base Camp Trek",
  subtitle: "Discover the Untouched Wilderness of Far-Western Nepal",
  text: "Journey through remote Himalayan valleys, pristine forests, alpine meadows, and dramatic mountain landscapes toward the spectacular base camp of Mount Api.",
  primaryCta: { label: "Explore Trek Packages", href: `#${ANCHORS.packages}` },
  secondaryCta: { label: "Discover the Journey", href: `#${ANCHORS.itinerary}` },
  /** Mount Api summit — decorative coordinate line. */
  coordinates: "30°00′N · 80°56′E",
  image: IMAGES.hero,
};

/** Configurable — values reflect the sample framework, not a fixed departure. */
export const HERO_BADGES: HeroBadge[] = [
  { label: "Duration", value: "≈ 12 days", note: "sample framework" },
  { label: "Difficulty", value: "Challenging", note: "remote, high altitude" },
  { label: "Highest point", value: "≈ 4,100 m", note: "base camp area · verify" },
];

/* ─────────────────────── Advisory ─────────────────────── */

/**
 * Time-sensitive. Set `active: false` once roads and trails in the
 * Chaulani (Chameliya) valley are confirmed clear.
 */
export const ADVISORY: Advisory = {
  active: true,
  title: "Check current conditions before you plan",
  body: "Darchula was hit by severe flooding in late August 2026, and a landslide partially blocked the Chaulani (Chameliya) River in Api Himal Rural Municipality in early September. Road and trail access in the valley may be affected — talk to us for the latest ground report before fixing dates.",
  reviewed: "2026-09-27",
};

/* ─────────────────────── Overview ─────────────────────── */

export const OVERVIEW = {
  label: "An Extraordinary Journey into Nepal’s Remote Western Himalayas",
  title: "Discover the Untouched Beauty of Api Nampa",
  /** Supplied copy — keep verbatim. */
  paragraph:
    "Api Nampa Base Camp Trek is an extraordinary Himalayan adventure in the remote far-western region of Nepal, offering a unique blend of untouched wilderness, dramatic mountain scenery, and authentic Himalayan culture. Nestled within the spectacular Api Nampa Conservation Area in Darchula district, this off-the-beaten-path trekking destination takes you through pristine forests, traditional mountain villages, lush alpine meadows, and rugged high-altitude landscapes. Trek through the scenic Chameliya River valley toward Api Himal Base Camp (approximately 3,900–4,100 m), surrounded by the majestic peaks of Mount Api (7,132 m), Mount Nampa, and the surrounding Himalayan ranges. Explore the breathtaking beauty of Kalidhunga Lake, Dhauli Odar, and remote alpine pastures, while discovering the traditional lifestyle and warm hospitality of local communities. Experience spectacular glacier views, diverse Himalayan flora and fauna, peaceful camping under star-filled skies, and the serenity of one of Nepal's least-explored trekking regions. Combining wilderness exploration, cultural discovery, and challenging high-altitude trekking, Api Nampa Base Camp offers an unforgettable adventure for travelers seeking authentic Himalayan experiences away from crowded trails.",
  image: IMAGES.overview,
  imageCaption: "Api Himal, Darchula district — placeholder until the final panorama is supplied",
};

export const QUICK_FACTS: QuickFact[] = [
  { label: "Region", value: "Darchula, Sudurpashchim", note: "far-western Nepal" },
  { label: "Protected area", value: "Api Nampa Conservation Area", note: "est. 2010 · ≈ 1,903 km²" },
  { label: "Signature peak", value: "Mount Api · 7,132 m" },
  { label: "Best windows", value: "Spring & autumn", note: "conditions vary" },
  { label: "Style", value: "Tea houses, homestays & camping", note: "varies by route" },
  { label: "Permits", value: "Required", note: "confirm before departure" },
];

/* ─────────────────────── Highlights ─────────────────────── */

export const HIGHLIGHTS: Highlight[] = [
  {
    id: "mount-api",
    title: "Mount Api",
    description: "The majestic 7,132 m summit that rises above the remote landscapes of far-western Nepal.",
    image: IMAGES.mountApi,
    href: "#peaks",
  },
  {
    id: "base-camp",
    title: "Api Himal Base Camp",
    description: "Glacial moraine, big-mountain walls and silence — the dramatic goal of the trek.",
    image: IMAGES.baseCamp,
  },
  {
    id: "mount-nampa",
    title: "Mount Nampa",
    description: "The rugged companion peak that gives the Api Nampa region half its name.",
    image: IMAGES.mountNampa,
    href: "#peaks",
  },
  {
    id: "kalidhunga",
    title: "Kalidhunga Lake",
    description: "A sacred alpine lake set in high Himalayan terrain near the base camp.",
    image: IMAGES.kalidhunga,
  },
  {
    id: "dhauli-odar",
    title: "Dhauli Odar",
    description: "A distinctive rock-sheltered landmark and staging point below the high ground.",
    image: IMAGES.dhauliOdar,
  },
  {
    id: "chameliya",
    title: "Chameliya River Valley",
    description: "Rivers, forests and hill settlements along the valley locally known as the Chaulani.",
    image: IMAGES.chameliya,
  },
  {
    id: "conservation",
    title: "Api Nampa Conservation Area",
    description: "A protected Himalayan landscape of forest, grassland and high mountain habitat.",
    image: IMAGES.conservation,
    href: "#conservation",
  },
  {
    id: "meadows",
    title: "Alpine Meadows & Pastures",
    description: "Open high grasslands where herders graze in summer and the views widen.",
    image: IMAGES.meadows,
  },
  {
    id: "villages",
    title: "Remote Himalayan Villages",
    description: "Traditional settlements where the trail still passes front doors and fields.",
    image: IMAGES.village,
    href: "#culture",
  },
  {
    id: "camping",
    title: "Wilderness Camping",
    description: "Quiet nights in the high country under some of Nepal’s darkest skies.",
    image: IMAGES.camping,
    href: ROUTES.camping,
  },
];

/* ─────────────────────── Experiences ─────────────────────── */

export const EXPERIENCES: Experience[] = [
  {
    id: "remote-trekking",
    kicker: "The trail",
    title: "Remote Himalayan Trekking",
    description:
      "Journey through isolated trails, mountain valleys, pristine forests and rugged high-altitude landscapes — days where you may meet more herders than trekkers.",
    points: ["Few trekkers, even in peak season", "Forest-to-moraine change in a single route"],
    image: IMAGES.forestTrail,
  },
  {
    id: "base-camp",
    kicker: "The goal",
    title: "Api Himal Base Camp Adventure",
    description:
      "Explore the surroundings of Api Himal Base Camp and feel the scale of the western Himalayas, with glacier and ice-wall views close at hand.",
    points: ["Time to explore, not just arrive", "Scenic viewpoints subject to conditions"],
    image: IMAGES.baseCamp,
  },
  {
    id: "lakes",
    kicker: "The water",
    title: "Alpine Lake Exploration",
    description:
      "Walk up to Kalidhunga Lake and other natural landmarks of the upper valley — places held sacred locally and best visited quietly.",
    points: ["Sacred site — follow local guidance", "Weather decides the day’s plan"],
    image: IMAGES.kalidhunga,
  },
  {
    id: "camping",
    kicker: "The night",
    title: "Wilderness Camping",
    description:
      "Where facilities run out, organised camps take over — pitched only at suitable locations, in suitable weather, and within local regulations.",
    points: ["Leave-no-trace camping", "Star-filled skies away from light pollution"],
    image: IMAGES.camping,
  },
  {
    id: "wildlife",
    kicker: "The wild",
    title: "Himalayan Wildlife and Flora",
    description:
      "The conservation area protects forest, grassland and alpine habitat. Look for rhododendron forest in spring and signs of wildlife — sightings are a gift, never a promise.",
    points: ["Habitat for tahr, musk deer and monal", "Sightings are never guaranteed"],
    image: IMAGES.conservation,
  },
  {
    id: "culture",
    kicker: "The people",
    title: "Traditional Mountain Culture",
    description:
      "Stay with and learn from the communities of Darchula — their homes, fields, food and the seasonal rhythm that ties them to these mountains.",
    points: ["Homestay evenings where available", "Respectful, guide-led visits"],
    image: IMAGES.villageLife,
  },
  {
    id: "photography",
    kicker: "The light",
    title: "Himalayan Photography",
    description:
      "Capture ice-clad peaks, mossy forests, meadows, glaciers and night skies — with early starts rewarded by the clearest light.",
    points: ["Dawn light on Api", "Astrophotography at dark camps"],
    image: IMAGES.photography,
  },
];

/* ─────────────────────── Peaks ─────────────────────── */

/**
 * The original brief listed “Ganesh Himal” — that range is in central Nepal,
 * ~500 km east, and is not visible from this route. Replaced with peaks
 * that actually surround the Api Nampa region. Verify visibility per stop.
 */
export const PEAKS: Peak[] = [
  {
    id: "api",
    name: "Mount Api",
    elevation: "7,132 m",
    elevationVerified: true,
    range: "Gurans Himal · Yoka Pahar section",
    description:
      "The highest peak of far-western Nepal and the anchor of the whole region — a broad, glaciated massif that dominates the upper valley and gives the base camp its name.",
    visibility: "Seen increasingly from the upper valley; closest from the base camp area.",
    image: IMAGES.mountApi,
  },
  {
    id: "nampa",
    name: "Mount Nampa",
    elevation: "6,755 m",
    elevationVerified: false,
    range: "Gurans Himal",
    description:
      "Api’s rugged neighbour, a steep ice-and-rock peak that shares its name with the conservation area and is rarely seen by anyone but locals.",
    visibility: "Visible from selected high points — confirm viewpoints with your guide.",
    image: IMAGES.mountNampa,
  },
  {
    id: "byas-rishi",
    name: "Bobaye & the Byas Rishi Himal",
    elevation: "6,808 m",
    elevationVerified: true,
    range: "Byas Rishi Himal (Darchula–Bajhang)",
    description:
      "The wider ice wall of the Byas Rishi Himal, crowned by Bobaye, frames the region’s northern skyline and ties Api Nampa to the high ranges of Bajhang.",
    visibility: "Only from specific ridges and clear days — not along the whole route.",
    image: IMAGES.byasRishi,
  },
];

/* ─────────────────────── Conservation ─────────────────────── */

export const CONSERVATION = {
  title: "Explore the Wilderness of Api Nampa Conservation Area",
  intro:
    "Established in 2010 and covering roughly 1,903 km² of Darchula district, the Api Nampa Conservation Area spans an extraordinary altitude range — from warm river valleys around 500 m to the summit of Api at 7,132 m. It is managed with the communities who live inside it.",
  stats: [
    { value: "2010", label: "Year established" },
    { value: "≈ 1,903 km²", label: "Protected area" },
    { value: "518 – 7,132 m", label: "Altitude range" },
  ],
  points: [
    {
      id: "landscapes",
      title: "Protected Himalayan landscapes",
      body: "Glaciers, moraine, cliffs and high ridges — the upper Api massif is some of the least-disturbed mountain terrain in Nepal.",
    },
    {
      id: "forests",
      title: "Forest ecosystems",
      body: "Broadleaf, rhododendron and conifer forests change with every few hundred metres of height gained.",
    },
    {
      id: "meadows",
      title: "High meadows & habitats",
      body: "A central grassland plateau mixes with forest, creating the open pastures that make this region feel so wide.",
    },
    {
      id: "wildlife",
      title: "Wildlife & biodiversity",
      body: "Recorded species include Himalayan tahr, musk deer, goral, serow and Himalayan monal. Wildlife is shy — sightings are never guaranteed.",
    },
    {
      id: "rivers",
      title: "River valleys & glacial landscapes",
      body: "Glacier-fed streams feed the Chameliya (Chaulani), which joins the Mahakali on the Nepal–India border.",
    },
    {
      id: "responsible",
      title: "Trek responsibly",
      body: "Carry out all waste, keep to trails, never disturb wildlife, and use permitted camp spots only.",
    },
  ] satisfies InfoPoint[],
  image: IMAGES.conservation,
};

/* ─────────────────────── Culture ─────────────────────── */

export const CULTURE = {
  title: "Discover the Traditional Life of Far-Western Nepal",
  intro:
    "The trail to Api passes through villages whose lives are shaped by altitude and season. Customs differ from one community to the next — the best way to understand them is to ask, listen and follow your local guide’s lead.",
  points: [
    {
      id: "settlements",
      title: "Mountain settlements",
      body: "Stone-and-timber houses, terraced fields and water-driven mills cling to the valley sides of Darchula.",
    },
    {
      id: "hospitality",
      title: "Hospitality & village life",
      body: "Homestay evenings around the family hearth are often the most memorable part of the journey.",
    },
    {
      id: "food",
      title: "Regional food",
      body: "Expect simple, local, seasonal meals — what’s served depends on the household, the harvest and the altitude.",
    },
    {
      id: "traditions",
      title: "Community traditions",
      body: "Local festivals and sacred sites follow their own calendars. Ask before photographing people, shrines or ceremonies.",
    },
    {
      id: "land",
      title: "People and place",
      body: "Seasonal grazing, forest use and farming tie communities closely to the land the conservation area protects.",
    },
    {
      id: "respect",
      title: "Travel respectfully",
      body: "Dress modestly, spend locally, and remember you are a guest in someone’s home and working landscape.",
    },
  ] satisfies InfoPoint[],
  images: [IMAGES.village, IMAGES.villageLife],
};

/* ─────────────────────── Seasons ─────────────────────── */

export const SEASONS: Season[] = [
  {
    id: "spring",
    name: "Spring",
    months: "Mar – May",
    verdict: "Recommended window",
    tone: "good",
    body: "Warming days, flowering forests and lingering snow on high ground. Haze can build later in the season.",
    points: ["Rhododendron forests in bloom", "Snow may remain near base camp early on"],
  },
  {
    id: "autumn",
    name: "Autumn",
    months: "Sep – Nov",
    verdict: "Recommended window",
    tone: "good",
    body: "Often the most popular Himalayan season for its settled weather and crisp views — though visibility and conditions still vary year to year.",
    points: ["Often clearer post-monsoon skies", "Colder nights as November approaches"],
  },
  {
    id: "winter",
    name: "Winter",
    months: "Dec – Feb",
    verdict: "Experienced parties only",
    tone: "caution",
    body: "Very cold temperatures, possible heavy snow and short days make the high ground seriously challenging.",
    points: ["Snow can block upper trails", "Specialist gear and support needed"],
  },
  {
    id: "monsoon",
    name: "Monsoon",
    months: "Jun – Aug",
    verdict: "Generally avoided",
    tone: "avoid",
    body: "Heavy rainfall brings wet, slippery trails, leeches, landslides and frequent disruption to roads into Darchula.",
    points: ["High landslide & flood risk", "Transport delays are common"],
  },
];

export const SEASON_NOTE =
  "Local weather, trail accessibility and camping conditions change year to year. We never guarantee clear skies or safe conditions — we plan around them.";

/* ─────────────────────── Preparation ─────────────────────── */

export const DIFFICULTY = {
  rating: "Challenging",
  summary:
    "A remote wilderness trek with long walking days, steep and sometimes rough trails, and nights at altitude far from medical help. Best suited to fit trekkers with previous multi-day Himalayan experience.",
  scale: 4,
  scaleMax: 5,
};

export const PREP_ITEMS: PrepItem[] = [
  { id: "fitness", group: "body", title: "Endurance & experience", body: "Train for consecutive 5–7 hour days on steep ground. Previous multi-day trekking experience is strongly advised." },
  { id: "acclimatisation", group: "body", title: "Acclimatisation", body: "Ascend gradually, build in rest days and turn back if symptoms worsen. No itinerary removes altitude risk." },
  { id: "hydration", group: "body", title: "Hydration & nutrition", body: "Drink often, treat all water, and carry energy food — supplies are limited beyond the last villages." },
  { id: "footwear", group: "gear", title: "Footwear & layers", body: "Broken-in waterproof boots and a layering system from warm valley days to freezing high nights." },
  { id: "weather", group: "gear", title: "Rain & cold protection", body: "Waterproof shell, insulated jacket, gloves and a warm sleeping bag rated well below freezing." },
  { id: "camping", group: "gear", title: "Camping readiness", body: "Some nights may be in tents or very basic shelters — be ready for simple, shared conditions." },
  { id: "first-aid", group: "safety", title: "First aid & medication", body: "Carry a personal first-aid kit and any medication you need, and consult your doctor about altitude before departure." },
  { id: "insurance", group: "safety", title: "Travel insurance", body: "Choose cover that explicitly includes trekking at your planned altitude and helicopter evacuation." },
  { id: "comms", group: "safety", title: "Emergency communication", body: "Mobile signal is patchy or absent in the upper valley. Plan satellite or guide-carried communication and an evacuation route." },
  { id: "guide", group: "support", title: "Local guide & support", body: "Experienced local guides and porters make remote logistics, route-finding and village stays far safer and richer." },
  { id: "environment", group: "support", title: "Leave no trace", body: "Pack out all waste, use established camp spots and never burn plastic." },
];

export const SAFETY_CARD = {
  title: "Remote Wilderness Safety",
  body: "Api Nampa Base Camp Trek involves remote terrain, potentially challenging high-altitude conditions, and limited access to medical facilities. Weather changes, altitude-related illness, and logistical constraints can create serious risks. Travelers should plan with qualified local support and maintain flexibility in their itinerary.",
};

/* ─────────────────────── Essentials ─────────────────────── */

export const TRAVEL_INFO: TravelInfoCard[] = [
  {
    id: "conservation-entry",
    title: "Conservation area entry",
    body: "Entry to the Api Nampa Conservation Area requires a permit. Fees and issuing offices change — we confirm the current requirement when you book.",
    changesOften: true,
  },
  {
    id: "permits",
    title: "Trekking permits & local fees",
    body: "Depending on route and current rules, additional authorisations may apply, such as TIMS or local municipality entry fees.",
    changesOften: true,
  },
  {
    id: "guides",
    title: "Guide regulations",
    body: "Nepal’s guide requirements for trekkers are subject to change. Given how remote this route is, we recommend a licensed local guide regardless.",
    changesOften: true,
  },
  {
    id: "getting-there",
    title: "Getting to the far west",
    body: "The usual approach is a flight or long drive from Kathmandu to Dhangadhi, followed by one or more days by road into Darchula district.",
    items: ["Flight or bus to Dhangadhi", "Road journey north into Darchula", "Allow buffer days for delays"],
  },
  {
    id: "trailhead",
    title: "Trailhead access",
    body: "Local jeep access toward the trailhead depends on road conditions, which can change quickly after rain or landslides.",
    changesOften: true,
  },
  {
    id: "stays",
    title: "Camping & accommodation",
    body: "A mix of basic tea houses, village homestays and organised camps. Facilities are simple and vary by season.",
  },
  {
    id: "connectivity",
    title: "Connectivity",
    body: "Expect limited or no mobile data beyond the lower villages, and unreliable electricity for charging.",
    items: ["Carry a power bank", "Download offline maps"],
  },
  {
    id: "emergency",
    title: "Emergency & evacuation",
    body: "Medical facilities are far away. Emergency evacuation usually means helicopter support, which depends on weather and insurance.",
  },
  {
    id: "money",
    title: "Insurance & cash",
    body: "Carry enough Nepali rupees for the whole trek — there are no ATMs in the upper valley — and keep insurance documents to hand.",
  },
  {
    id: "waste",
    title: "Responsible trekking",
    body: "Carry out all waste, avoid single-use plastic and respect sacred sites such as Kalidhunga Lake.",
  },
];

export const ESSENTIALS_NOTE =
  "Permits, fees, guide rules and access conditions change. Always confirm the latest requirements with us or the relevant authority before departure.";

/* ─────────────────────── Accommodation ─────────────────────── */

export const STAYS: StayType[] = [
  {
    id: "lodges",
    title: "Local lodges & guesthouses",
    body: "Simple family-run lodges in the lower valley, where available.",
    image: IMAGES.chameliya,
  },
  {
    id: "homestays",
    title: "Village homestays",
    body: "Sleep and eat with a local household — basic, warm and personal.",
    image: IMAGES.village,
  },
  {
    id: "camping",
    title: "Organised camping",
    body: "Crew-supported camps where there are no buildings, at permitted spots only.",
    image: IMAGES.camping,
  },
  {
    id: "meals",
    title: "Mountain meals",
    body: "Dal bhat, local produce and hot tea — simple food that fits the altitude.",
    image: IMAGES.meadows,
  },
];

export const STAYS_NOTE =
  "Accommodation availability, camp locations, facilities and food vary by route, season and local conditions. We confirm arrangements for your dates when planning.";

/* ─────────────────────── Gallery ─────────────────────── */

export const GALLERY: GalleryImage[] = [
  { ...IMAGES.mountApi, caption: "Mount Api", shape: "tall" },
  { ...IMAGES.baseCamp, caption: "Api Himal Base Camp", shape: "wide" },
  { ...IMAGES.mountNampa, caption: "Mount Nampa", shape: "square" },
  { ...IMAGES.kalidhunga, caption: "Kalidhunga Lake", shape: "square" },
  { ...IMAGES.dhauliOdar, caption: "Dhauli Odar", shape: "tall" },
  { ...IMAGES.chameliya, caption: "Chameliya River valley", shape: "wide" },
  { ...IMAGES.meadows, caption: "Alpine pastures", shape: "square" },
  { ...IMAGES.waterfall, caption: "Forest trail & waterfall", shape: "tall" },
  { ...IMAGES.village, caption: "Mountain village, Darchula", shape: "square" },
  { ...IMAGES.starryNight, caption: "Wilderness camp at night", shape: "wide" },
];

/* ─────────────────────── Related / CTA ─────────────────────── */

export const RELATED: RelatedLink[] = [
  {
    label: "Sudurpashchim Province",
    href: ROUTES.sudurpaschimProvince,
    description: "The wider far west — Khaptad, Shuklaphanta and more.",
  },
  {
    label: "Camping in Nepal",
    href: ROUTES.camping,
    description: "How organised wilderness camping works across the Himalaya.",
  },
  {
    label: "Karnali Province",
    href: ROUTES.karnaliProvince,
    description: "Rara, Dolpo and Nepal’s other great remote landscapes.",
  },
];

export const CTA = {
  title: "Discover the Untouched Himalayas of Api Nampa",
  text: "Journey into Nepal’s remote far-western wilderness, explore pristine alpine landscapes, discover traditional mountain villages, and experience the extraordinary beauty of the Api Nampa region.",
  image: IMAGES.cta,
};

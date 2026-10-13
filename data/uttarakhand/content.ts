/* ============================================================
   UTTARAKHAND TOUR PACKAGES — PAGE CONTENT
   ------------------------------------------------------------
   Content for /packages/uttarakhand.

   ACCURACY RULES (keep when editing):
   - Links point only at pages that exist in this project. A
     destination without its own page offers an enquiry instead.
   - Char Dham packages, durations and itineraries are read from
     data/char-dham; Haridwar & Rishikesh and Adi Kailash mirror the
     facts on their own pages. No price, hotel, inclusion, schedule
     or travel time is invented here.
   - Beliefs are described as tradition, not fact.
   - No opening dates, permit rules, road conditions or access are
     guaranteed.
   ============================================================ */

import type { RelatedTour } from "@/components/activities/experience/product-types";
import { PACKAGES as CD_PACKAGES, itineraryOptions, journey } from "@/data/char-dham/content";
import { INCLUSIONS as HR_INCLUSIONS } from "@/components/spiritual-journeys/haridwar-rishikesh/data/package";
import type { Destination, DhamStop, Escape, Faq, FilterId, GuideBlock, ItineraryPreview, Season, UttarakhandPackage } from "./types";
import * as I from "./images";

export const PAGE_PATH = "/packages/uttarakhand";
export const PAGE_TITLE = "Uttarakhand Tour Packages";

export const SEO = {
  title: "Uttarakhand Tour Packages | Char Dham, Kedarnath, Rishikesh, Mussoorie & Nainital | Karvaahh",
  socialTitle: "Uttarakhand Tour Packages — Karvaahh Travels",
  description:
    "Discover Uttarakhand with Karvaahh: the Char Dham Yatra, Kedarnath and Badrinath, Haridwar and Rishikesh, Mussoorie, Nainital, Auli, Chopta, Jim Corbett and the Valley of Flowers. Genuine packages and customised Himalayan journeys.",
  keywords: [
    "Uttarakhand tour packages",
    "Char Dham Yatra package",
    "Kedarnath Badrinath tour",
    "Haridwar Rishikesh tour",
    "Mussoorie Nainital holiday",
    "Auli Chopta trip",
    "Uttarakhand family holiday",
    "Adi Kailash Om Parvat yatra",
  ],
  ogImage: { src: I.og.src, alt: I.og.alt },
};

const CHAR_DHAM = "/activities/char-dham-yatra";
const HARIDWAR_RISHIKESH = "/spiritual-journeys/haridwar-rishikesh-yatra";
const ADI_KAILASH = "/packages/india-pilgrimage/adi-kailash-om-parvat";
export const CUSTOM_ENQUIRY = "/contact?type=uttarakhand";

/* ============================================================
   DESTINATION FILTERS (labels; membership lives on each place)
   ============================================================ */

export const FILTERS: { id: FilterId | "all"; label: string }[] = [
  { id: "all", label: "All Destinations" },
  { id: "spiritual", label: "Spiritual & Pilgrimage" },
  { id: "hill", label: "Hill Stations" },
  { id: "adventure", label: "Adventure & Trekking" },
  { id: "nature", label: "Nature & Wildlife" },
  { id: "lakes", label: "Lakes & Scenic Views" },
  { id: "family", label: "Family Holidays" },
];

/* ============================================================
   DESTINATIONS
   ------------------------------------------------------------
   Altitudes for the four Dhams come from data/char-dham.
   ============================================================ */

const elevation = (name: string) => journey?.stages.find((s) => s.name === name)?.elevation;
const SEASONAL = "Seasonal: the shrine closes each winter; opening and closing dates are announced every year.";

const place = (x: Omit<Destination, "active">): Destination => ({ active: true, ...x });

export const DESTINATIONS: Destination[] = [
  /* ---------- Char Dham ---------- */
  place({
    id: "kedarnath",
    name: "Kedarnath",
    location: "Rudraprayag · Garhwal Himalaya",
    group: "char-dham",
    text: "The stone temple of Lord Shiva stands at the head of the Mandakini valley, ringed by snow peaks. Pilgrims reach it on foot from Gaurikund, by pony or palanquin, or by helicopter service where available — a journey as memorable as the darshan itself.",
    tags: ["Char Dham", "Jyotirlinga", "Himalayan Trek"],
    filters: ["spiritual", "adventure"],
    image: I.kedarnathTemple,
    fact: elevation("Kedarnath"),
    note: SEASONAL,
    link: { href: `${CHAR_DHAM}/kedarnath`, label: "Explore Destination" },
    tourType: "Kedarnath Yatra",
  }),
  place({
    id: "badrinath",
    name: "Badrinath",
    location: "Chamoli · Garhwal Himalaya",
    group: "char-dham",
    text: "Dedicated to Lord Vishnu as Badrinarayan, the temple stands on the Alaknanda between the Nar and Narayan ranges. Pilgrims bathe at the Tapt Kund hot spring before darshan, and Mana village lies close by.",
    tags: ["Char Dham", "Vishnu Temple", "Road Accessible"],
    filters: ["spiritual", "family"],
    image: I.badrinathTemple,
    fact: elevation("Badrinath"),
    note: SEASONAL,
    link: { href: `${CHAR_DHAM}/badrinath`, label: "Explore Destination" },
    tourType: "Kedarnath & Badrinath",
  }),
  place({
    id: "gangotri",
    name: "Gangotri",
    location: "Uttarkashi · Garhwal Himalaya",
    group: "char-dham",
    text: "The temple of Goddess Ganga stands on the Bhagirathi among deodar and pine forests. Tradition links it to the descent of the Ganga, and the drive through the Harsil valley is among the loveliest in the Himalaya.",
    tags: ["Char Dham", "Ganga Traditions", "Scenic Drive"],
    filters: ["spiritual", "lakes"],
    image: I.gangotriTemple,
    fact: elevation("Gangotri"),
    note: SEASONAL,
    link: { href: `${CHAR_DHAM}/gangotri`, label: "Explore Destination" },
    tourType: "Char Dham Yatra",
  }),
  place({
    id: "yamunotri",
    name: "Yamunotri",
    location: "Uttarkashi · Garhwal Himalaya",
    group: "char-dham",
    text: "Set in a narrow gorge, the temple of Goddess Yamuna is traditionally the first Dham of the yatra. Pilgrims walk, ride a pony or take a palanquin from Janki Chatti to reach it.",
    tags: ["Char Dham", "Yamuna Traditions", "Mountain Walk"],
    filters: ["spiritual", "adventure"],
    image: I.yamunotriTemple,
    fact: elevation("Yamunotri"),
    note: SEASONAL,
    link: { href: `${CHAR_DHAM}/yamunotri`, label: "Explore Destination" },
    tourType: "Char Dham Yatra",
  }),

  /* ---------- Spiritual towns ---------- */
  place({
    id: "haridwar",
    name: "Haridwar",
    location: "Haridwar · Ganga plains",
    group: "spiritual",
    text: "Where the Ganga leaves the mountains, Haridwar's ghats fill each evening for the Ganga Aarti at Har Ki Pauri. Temples, ashrams and bathing ghats make it a pilgrimage in its own right and the traditional gateway to the Char Dham.",
    tags: ["Ganga Aarti", "Har Ki Pauri", "Temple Visits"],
    filters: ["spiritual", "family"],
    image: I.haridwar,
    fact: "Year-round destination",
    link: { href: HARIDWAR_RISHIKESH, label: "Explore Destination" },
    tourType: "Haridwar & Rishikesh",
  }),
  place({
    id: "rishikesh",
    name: "Rishikesh",
    location: "Dehradun & Tehri · Himalayan foothills",
    group: "spiritual",
    text: "Riverside ashrams, the evening aarti at Triveni Ghat and the suspension bridges over the Ganga give Rishikesh its unhurried, reflective rhythm. It is also known for yoga and meditation, with river rafting available seasonally from licensed operators.",
    tags: ["Ashrams", "Yoga & Meditation", "River Rafting"],
    filters: ["spiritual", "adventure", "family"],
    image: I.rishikesh,
    fact: "Year-round destination",
    link: { href: HARIDWAR_RISHIKESH, label: "Explore Destination" },
    tourType: "Haridwar & Rishikesh",
  }),
  place({
    id: "devprayag",
    name: "Devprayag",
    location: "Tehri Garhwal · Char Dham road",
    group: "spiritual",
    text: "At Devprayag the Alaknanda and Bhagirathi meet, and from here the river is traditionally called the Ganga. Pilgrims pause at the sangam and the old Raghunath temple on the road towards Badrinath and Kedarnath.",
    tags: ["River Confluence", "Panch Prayag", "Char Dham Route"],
    filters: ["spiritual", "lakes"],
    image: I.devprayag,
    fact: "On the Rishikesh – Badrinath road",
    link: { href: `${CHAR_DHAM}/by-road`, label: "Explore Char Dham by Road" },
    tourType: "Char Dham Yatra",
  }),
  place({
    id: "adi-kailash",
    name: "Adi Kailash & Om Parvat",
    location: "Pithoragarh · Kumaon Himalaya",
    group: "spiritual",
    text: "Revered as Chhota Kailash, Adi Kailash rises above Parvati Sarovar near the Indo-Tibetan border, while Om Parvat is known for the ॐ shape traced by snow on its face. A remote, high-altitude yatra through the valleys of the Kumaon Himalaya.",
    tags: ["Shiva Pilgrimage", "High Altitude", "Remote Himalaya"],
    filters: ["spiritual", "adventure", "lakes"],
    image: I.adiKailash,
    fact: "Inner Line Permit required",
    note: "Permits are issued at Dharchula; access depends on weather and current regulations.",
    link: { href: ADI_KAILASH, label: "Explore Destination" },
    tourType: "Adi Kailash & Om Parvat",
  }),

  /* ---------- Hill stations ---------- */
  place({
    id: "mussoorie",
    name: "Mussoorie",
    location: "Dehradun · Garhwal foothills",
    group: "hill",
    text: "A classic hill station above Dehradun, with ridge-top walks, Landour's quiet lanes and long views towards the snow peaks on clear days. It pairs naturally with a Haridwar and Rishikesh journey.",
    tags: ["Hill Station", "Mountain Views", "Heritage Walks"],
    filters: ["hill", "lakes", "family"],
    image: I.mussoorie,
    fact: "Easy road access from Dehradun",
    link: { href: HARIDWAR_RISHIKESH, label: "Add to Haridwar & Rishikesh" },
    tourType: "Mussoorie & Nainital holiday",
  }),
  place({
    id: "nainital",
    name: "Nainital",
    location: "Nainital · Kumaon hills",
    group: "hill",
    text: "Kumaon's best-known hill town wraps around Naini Lake, with boating, the Naina Devi temple and viewpoints over the surrounding ridges. Nearby lakes and forest walks make it an easy family favourite.",
    tags: ["Lake Town", "Boating", "Viewpoints"],
    filters: ["hill", "lakes", "family"],
    image: I.nainital,
    fact: "Nearest railhead: Kathgodam",
    tourType: "Mussoorie & Nainital holiday",
  }),
  place({
    id: "auli",
    name: "Auli",
    location: "Chamoli · near Joshimath",
    group: "hill",
    text: "Open slopes above Joshimath look out across a wide arc of Garhwal peaks. In winter Auli is known for snow and skiing when conditions allow; in summer the meadows are green and quiet.",
    tags: ["Himalayan Panoramas", "Seasonal Snow", "Alpine Meadows"],
    filters: ["hill", "adventure", "lakes"],
    image: I.auli,
    fact: "Snow is seasonal and weather-dependent",
    tourType: "Auli mountain escape",
  }),
  place({
    id: "chopta",
    name: "Chopta",
    location: "Rudraprayag · Garhwal Himalaya",
    group: "hill",
    text: "Meadows and rhododendron forests surround this small mountain stop, the starting point for the trail to Tungnath — the highest of the Panch Kedar temples — and on to the Chandrashila summit.",
    tags: ["Trekking", "Forest Trails", "Panch Kedar"],
    filters: ["adventure", "nature", "lakes"],
    image: I.chopta,
    fact: "Moderate trek to Tungnath",
    note: "Trails can be snowbound in winter; conditions are confirmed before travel.",
    tourType: "Chopta & Tungnath trek",
  }),
  place({
    id: "lansdowne",
    name: "Lansdowne",
    location: "Pauri Garhwal",
    group: "hill",
    text: "A quiet cantonment town among oak and pine forests, far from the busier hill stations. Gentle walks, old churches and wide valley views make it a restful weekend escape.",
    tags: ["Quiet Hill Town", "Forest Walks", "Relaxed Escape"],
    filters: ["hill", "nature", "family"],
    image: I.lansdowne,
    fact: "Easy, relaxed pace",
    tourType: "Uttarakhand family holiday",
  }),
  place({
    id: "munsiyari",
    name: "Munsiyari",
    location: "Pithoragarh · Kumaon Himalaya",
    group: "hill",
    text: "A remote mountain town facing the five summits of the Panchachuli massif. Village life, forest walks and big Himalayan views reward the long drive into eastern Kumaon.",
    tags: ["Panchachuli Views", "Village Life", "Remote Escape"],
    filters: ["hill", "adventure", "lakes"],
    image: I.munsiyari,
    fact: "Long mountain drive",
    tourType: "Customized Himalayan tour",
  }),
  place({
    id: "ranikhet-almora",
    name: "Ranikhet & Almora",
    location: "Almora · Kumaon hills",
    group: "hill",
    text: "Pine-covered ridges, old bazaars and traditional Kumaoni settlements define these neighbouring hill towns. Almora is a centre of Kumaoni culture, and the stone temples of Jageshwar lie a short drive away.",
    tags: ["Kumaoni Culture", "Mountain Views", "Heritage Temples"],
    filters: ["hill", "spiritual", "family"],
    image: I.ranikhetAlmora,
    fact: "Easy road access",
    tourType: "Customized Himalayan tour",
  }),

  /* ---------- Wildlife & nature ---------- */
  place({
    id: "jim-corbett",
    name: "Jim Corbett National Park",
    location: "Nainital & Pauri · Terai foothills",
    group: "wildlife",
    text: "India's oldest national park protects sal forest, grassland and river valleys at the foot of the Himalaya. Regulated jeep safaris, birdwatching and riverside stays focus on conservation as much as sightings.",
    tags: ["Wildlife Safari", "Birdwatching", "Conservation"],
    filters: ["nature", "family"],
    image: I.corbett,
    fact: "Nearest railhead: Ramnagar",
    note: "Safari zones open seasonally and permits are booked through the official system; sightings are never guaranteed.",
    tourType: "Jim Corbett wildlife holiday",
  }),
  place({
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    location: "Chamoli · Garhwal Himalaya",
    group: "wildlife",
    text: "A protected national park and UNESCO World Heritage Site where alpine meadows bloom with wildflowers in the short summer season. It is reached on foot from Ghangaria, often combined with Hemkund Sahib.",
    tags: ["National Park", "Alpine Meadows", "Trekking"],
    filters: ["nature", "adventure", "lakes"],
    image: I.valleyOfFlowers,
    fact: "Moderate trek from Govindghat",
    note: "Open seasonally; entry is regulated by the forest department.",
    tourType: "Valley of Flowers trek",
  }),
  place({
    id: "pangot",
    name: "Pangot",
    location: "Nainital · Kumaon hills",
    group: "wildlife",
    text: "A small forest village above Nainital known to birdwatchers for its oak and rhododendron woodland. Early-morning walks along quiet roads are the main way to explore.",
    tags: ["Birdwatching", "Forest Walks", "Quiet Stay"],
    filters: ["nature"],
    image: I.pangot,
    fact: "Short drive from Nainital",
    tourType: "Uttarakhand nature escape",
  }),
];

/* ============================================================
   CHAR DHAM YATRA — FEATURED
   ============================================================ */

const DHAM_HREF: Record<string, string> = {
  Yamunotri: `${CHAR_DHAM}/yamunotri`,
  Gangotri: `${CHAR_DHAM}/gangotri`,
  Kedarnath: `${CHAR_DHAM}/kedarnath`,
  Badrinath: `${CHAR_DHAM}/badrinath`,
};

export const DHAMS: DhamStop[] = (journey?.stages ?? []).map((s) => ({
  name: s.name,
  deity: s.kicker?.split("·")[1]?.trim() ?? "",
  elevation: s.elevation ?? "",
  text: s.text,
  image: s.image,
  href: DHAM_HREF[s.name] ?? CHAR_DHAM,
}));

export const CHAR_DHAM_INTRO = [
  "For centuries pilgrims have travelled to the four Himalayan shrines of Uttarakhand — the sources of the Yamuna and the Ganga, the abode of Lord Shiva at Kedarnath and the abode of Lord Vishnu at Badrinath. Tradition holds that the yatra is made from west to east, beginning at Yamunotri and ending at Badrinath.",
  "The journey is as much about the Himalaya as the temples: river valleys, confluence towns and mountain roads lead to shrines set among snow peaks above 3,000 m.",
];

export const CHAR_DHAM_NOTES = [
  { icon: "calendar" as const, title: "Seasonal temple access", text: "The four shrines close each winter. Opening and closing dates are announced every year, so we confirm them for your dates." },
  { icon: "mountainSnow" as const, title: "High altitude", text: "All four Dhams sit above roughly 3,000 m. Consult a doctor before travelling, especially with heart or breathing conditions." },
  { icon: "footprints" as const, title: "Physical demands", text: "Kedarnath and Yamunotri involve a walk, pony, palanquin or helicopter service. Long days on mountain roads add up." },
  { icon: "rain" as const, title: "Weather & roads", text: "Rain and landslides can close roads or ground helicopters at any time, especially in the monsoon. Plans may change on the ground." },
  { icon: "file" as const, title: "Registration", text: "Pilgrim registration set by the Uttarakhand authorities may be required. We confirm current requirements when planning." },
];

/* ============================================================
   FIND YOUR KIND OF HIMALAYAN ESCAPE
   ============================================================ */

export const ESCAPES: Escape[] = [
  {
    id: "spiritual",
    eyebrow: "Spiritual Journeys",
    title: "Sacred Temples & River Towns",
    text: "From the Char Dham shrines to the ghats of Haridwar and the ashrams of Rishikesh, Uttarakhand is shaped by pilgrimage. We plan darshan, aarti and quiet time by the river around your pace.",
    points: ["Char Dham & Do Dham yatras", "Ganga Aarti at Har Ki Pauri", "Adi Kailash & Om Parvat in Kumaon"],
    where: "Kedarnath, Badrinath, Haridwar, Rishikesh, Devprayag",
    image: I.charDhamPanorama,
    link: { href: CHAR_DHAM, label: "Explore Char Dham Yatra" },
    tourType: "Char Dham Yatra",
  },
  {
    id: "hills",
    eyebrow: "Hill Station Holidays",
    title: "Cool Air, Long Views",
    text: "Ridge-top walks in Mussoorie, boating on Naini Lake and the quiet forests of Lansdowne — easy, relaxed holidays that suit families and first-time visitors to the mountains.",
    points: ["Mussoorie with Haridwar & Rishikesh", "Nainital and the Kumaon lakes", "Lansdowne, Ranikhet and Almora on request"],
    where: "Mussoorie, Nainital, Lansdowne, Ranikhet, Almora",
    image: I.nainital,
    tourType: "Mussoorie & Nainital holiday",
  },
  {
    id: "adventure",
    eyebrow: "Adventure & Trekking",
    title: "Trails, Rivers & Snow",
    text: "Walk to Tungnath and Chandrashila from Chopta, see the Valley of Flowers in bloom, raft the Ganga near Rishikesh or find seasonal snow at Auli. Activities run with licensed operators and only when the season allows.",
    points: ["Chopta – Tungnath – Chandrashila", "Valley of Flowers in season", "Rafting near Rishikesh, seasonal"],
    where: "Chopta, Auli, Valley of Flowers, Rishikesh",
    image: I.chopta,
    tourType: "Chopta & Tungnath trek",
  },
  {
    id: "wildlife",
    eyebrow: "Nature & Wildlife",
    title: "Forests at the Foot of the Himalaya",
    text: "Regulated safaris in Jim Corbett National Park and early birding walks around Pangot. We follow park rules and conservation guidelines — sightings are a privilege, never a promise.",
    points: ["Jim Corbett jeep safaris", "Birdwatching near Nainital", "Riverside and forest stays"],
    where: "Jim Corbett, Pangot, Valley of Flowers",
    image: I.corbett,
    tourType: "Jim Corbett wildlife holiday",
  },
  {
    id: "wellness",
    eyebrow: "Yoga & Wellness",
    title: "Stillness by the Ganga",
    text: "Rishikesh is known for its yoga and meditation traditions. We add classes or ashram visits where established centres welcome visitors, as part of our yoga and wellness journeys.",
    points: ["Yoga and meditation sessions", "Ashram visits and riverside aarti", "Slow, restorative pacing"],
    where: "Rishikesh",
    image: I.rishikeshYoga,
    link: { href: "/activities/wellness/yoga-wellness", label: "Explore Yoga & Wellness" },
    tourType: "Yoga & wellness",
  },
  {
    id: "views",
    eyebrow: "Lakes & Mountain Viewpoints",
    title: "Panoramas Worth the Drive",
    text: "The Panchachuli peaks from Munsiyari, sweeping Garhwal views from Auli and the confluence at Devprayag — for travellers who simply want to sit with the mountains.",
    points: ["Panchachuli from Munsiyari", "Garhwal peaks from Auli", "Lakes around Nainital"],
    where: "Munsiyari, Auli, Nainital, Devprayag",
    image: I.munsiyari,
    tourType: "Customized Himalayan tour",
  },
];

/* ============================================================
   FEATURED PACKAGES (existing Karvaahh products only)
   ------------------------------------------------------------
   Char Dham: read from data/char-dham PACKAGES.
   Haridwar & Rishikesh: inclusions as published on its page.
   Adi Kailash: duration and price are quote-only on its page.
   ============================================================ */

const CD_STANDARD = ["Accommodation as per selected package", "Meals as per selected package"];

const charDham = (key: keyof typeof CD_PACKAGES, x: Pick<UttarakhandPackage, "id" | "title" | "kind" | "destinations" | "tourType"> & { inclusions?: string[] }): UttarakhandPackage => {
  const p = CD_PACKAGES[key];
  return {
    ...x,
    duration: p.duration ?? "Customised",
    highlights: p.points ?? [],
    inclusions: x.inclusions ?? CD_STANDARD,
    price: p.price && !/request/i.test(p.price) ? p.price : undefined,
    image: p.image ?? I.charDhamPanorama,
    href: p.href ?? CHAR_DHAM,
  };
};

export const PACKAGES: UttarakhandPackage[] = [
  charDham("road", {
    id: "char-dham-road",
    title: "Char Dham Yatra by Road",
    kind: "Char Dham",
    destinations: ["Haridwar", "Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    inclusions: ["Private vehicle with driver", ...CD_STANDARD],
    tourType: "Char Dham Yatra",
  }),
  charDham("helicopter", {
    id: "char-dham-helicopter",
    title: "Char Dham Yatra by Helicopter",
    kind: "Char Dham",
    destinations: ["Dehradun", "Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    inclusions: ["Helicopter flights as per the selected itinerary", "Ground transfers where applicable", ...CD_STANDARD],
    tourType: "Char Dham Yatra",
  }),
  charDham("doDham", {
    id: "do-dham",
    title: "Kedarnath & Badrinath Do Dham Yatra",
    kind: "Do Dham",
    destinations: ["Haridwar", "Guptkashi", "Kedarnath", "Badrinath"],
    tourType: "Kedarnath & Badrinath",
  }),
  {
    id: "haridwar-rishikesh",
    title: "Haridwar & Rishikesh Spiritual Tour",
    kind: "Spiritual",
    destinations: ["Haridwar", "Rishikesh"],
    duration: "Customisable",
    highlights: ["Ganga Aarti at Har Ki Pauri", "Triveni Ghat & riverside ashrams", "Optional Mussoorie extension"],
    inclusions: HR_INCLUSIONS.slice(0, 3),
    image: I.haridwar,
    href: HARIDWAR_RISHIKESH,
    tourType: "Haridwar & Rishikesh",
  },
  charDham("family", {
    id: "family-char-dham",
    title: "Family Char Dham Yatra",
    kind: "Family",
    destinations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    inclusions: ["Private vehicles", ...CD_STANDARD],
    tourType: "Uttarakhand family holiday",
  }),
  {
    id: "adi-kailash",
    title: "Adi Kailash & Om Parvat Yatra",
    kind: "Kumaon pilgrimage",
    destinations: ["Kathgodam", "Dharchula", "Gunji", "Jolingkong", "Nabidhang"],
    duration: "Duration on request",
    highlights: ["Darshan of Adi Kailash (Chhota Kailash)", "Om Parvat from Nabidhang", "Paced around acclimatisation & permits"],
    inclusions: [],
    image: I.adiKailash,
    href: ADI_KAILASH,
    tourType: "Adi Kailash & Om Parvat",
  },
];

/* ============================================================
   ITINERARIES
   ------------------------------------------------------------
   Samples: Karvaahh's published Char Dham itineraries.
   Ideas: illustrative outlines only — stages, not a schedule.
   ============================================================ */

const toSteps = (steps: { title: string; text: string }[]) => steps.map((s) => ({ title: s.title.replace(/^Day \d+ · /, ""), text: s.text }));

export const ITINERARIES: ItineraryPreview[] = [
  {
    id: "do-dham",
    title: "Kedarnath & Badrinath Pilgrimage",
    status: "sample",
    duration: "Sample 4N / 5D",
    summary: itineraryOptions.doDham.summary,
    unit: "Day",
    steps: toSteps(itineraryOptions.doDham.steps),
    notice: itineraryOptions.doDham.notice ?? "",
    link: { href: `${CHAR_DHAM}/do-dham`, label: "Full Do Dham details" },
    tourType: "Kedarnath & Badrinath",
  },
  {
    id: "char-dham-road",
    title: "Complete Char Dham Yatra",
    status: "sample",
    duration: "Sample 9N / 10D",
    summary: itineraryOptions.road.summary,
    unit: "Day",
    steps: toSteps(itineraryOptions.road.steps),
    notice: itineraryOptions.road.notice ?? "",
    link: { href: `${CHAR_DHAM}/by-road`, label: "Full Char Dham details" },
    tourType: "Char Dham Yatra",
  },
  {
    id: "haridwar-rishikesh-mussoorie",
    title: "Haridwar, Rishikesh & Mussoorie",
    status: "idea",
    duration: "Customisable",
    summary: "Riverside aarti and ashrams followed by cooler days in the hills — the most popular way to combine a pilgrimage with a holiday.",
    unit: "Stage",
    steps: [
      { title: "Haridwar", text: "Har Ki Pauri and the evening Ganga Aarti." },
      { title: "Rishikesh", text: "Triveni Ghat, riverside ashrams and the suspension bridges." },
      { title: "Dehradun", text: "An easy stop on the way up into the hills." },
      { title: "Mussoorie", text: "Ridge walks and mountain viewpoints before the return." },
    ],
    notice: "Illustrative itinerary idea — days, hotels and travel times are confirmed with you before booking.",
    link: { href: HARIDWAR_RISHIKESH, label: "Explore Haridwar & Rishikesh" },
    tourType: "Haridwar & Rishikesh",
  },
  {
    id: "chopta-tungnath",
    title: "Chopta, Tungnath & Chandrashila",
    status: "idea",
    duration: "On request",
    summary: "A short Himalayan walk to the highest of the Panch Kedar temples and the summit viewpoint above it.",
    unit: "Stage",
    steps: [
      { title: "Rishikesh / Haridwar", text: "Start in the foothills." },
      { title: "Drive to Chopta", text: "Up through the Alaknanda and Mandakini valleys." },
      { title: "Tungnath & Chandrashila", text: "Walk to the temple and on to the summit, weather permitting." },
      { title: "Return", text: "Back down the valleys to the foothills." },
    ],
    notice: "Illustrative itinerary idea — trail conditions, fitness and season decide the plan; nothing here is a fixed schedule.",
    tourType: "Chopta & Tungnath trek",
  },
  {
    id: "nainital-kumaon",
    title: "Nainital & the Kumaon Hills",
    status: "idea",
    duration: "On request",
    summary: "A gentle family holiday among the lakes and pine ridges of Kumaon, with an optional safari in Jim Corbett.",
    unit: "Stage",
    steps: [
      { title: "Kathgodam", text: "Arrive at the railhead for Kumaon." },
      { title: "Nainital", text: "Naini Lake, boating and viewpoints." },
      { title: "Ranikhet or Almora", text: "Pine forests, bazaars and Kumaoni culture." },
      { title: "Jim Corbett (optional)", text: "A regulated safari where permits are available." },
    ],
    notice: "Illustrative itinerary idea — safari permits, days and stays are confirmed for your dates.",
    tourType: "Mussoorie & Nainital holiday",
  },
];

/* ============================================================
   BEST TIME TO VISIT
   ============================================================ */

export const SEASONS: Season[] = [
  {
    id: "spring",
    name: "Spring",
    months: "March – April",
    icon: "leaf",
    text: "Generally a good time for sightseeing and nature, with rhododendrons in flower on many ridges. Conditions vary with altitude — higher areas can still hold snow.",
    goodFor: ["Hill stations", "Haridwar & Rishikesh", "Chopta & forest walks"],
  },
  {
    id: "summer",
    name: "Summer",
    months: "May – June",
    icon: "sun",
    text: "Popular for hill stations and the start of the Char Dham season once the shrines open. Visitor numbers and weather vary, so book early.",
    goodFor: ["Char Dham Yatra", "Mussoorie & Nainital", "Auli meadows"],
  },
  {
    id: "monsoon",
    name: "Monsoon",
    months: "July – September",
    icon: "rain",
    text: "Heavy rain can trigger landslides, road closures and trekking hazards. The Valley of Flowers blooms in this season, but every plan depends on local advisories.",
    goodFor: ["Valley of Flowers (in season)", "Flexible, weather-aware travellers"],
    caution: "Check local advisories before and during travel.",
  },
  {
    id: "autumn",
    name: "Autumn",
    months: "October – November",
    icon: "mountainSnow",
    text: "Often the clearest mountain views of the year and comfortable days for outdoor experiences, subject to weather and route conditions before the shrines close.",
    goodFor: ["Mountain viewpoints", "Char Dham before closure", "Trekking"],
  },
  {
    id: "winter",
    name: "Winter",
    months: "December – February",
    icon: "snow",
    text: "Good for lower-altitude towns and seasonal snow at places like Auli. High-altitude routes face severe cold, snow and closures.",
    goodFor: ["Haridwar & Rishikesh", "Auli snow (when conditions allow)", "Jim Corbett"],
    caution: "The four Char Dham shrines are closed in winter.",
  },
];

export const SEASON_NOTE =
  "Char Dham temple access is seasonal. Opening and closing dates are announced every year and must be confirmed for your intended travel dates.";

/* ============================================================
   PRACTICAL TRAVEL GUIDE
   ============================================================ */

export const GUIDE: GuideBlock[] = [
  {
    id: "reach",
    title: "How to Reach",
    icon: "plane",
    points: [
      "Dehradun's Jolly Grant Airport serves Rishikesh, Haridwar and the Garhwal hills; Pantnagar Airport serves Kumaon.",
      "Railheads include Haridwar, Dehradun and Rishikesh for Garhwal, Kathgodam for Nainital and Kumaon, and Ramnagar for Jim Corbett.",
      "Good road connections link Delhi with Haridwar, Dehradun and the Kumaon foothills.",
    ],
  },
  {
    id: "around",
    title: "Getting Around",
    icon: "car",
    points: [
      "Most journeys use a private vehicle with driver, sized to your group.",
      "Mountain roads are winding and slow — distances look short on a map but take time.",
      "Helicopter services for Kedarnath and the Char Dham run through authorised operators, subject to weather.",
    ],
  },
  {
    id: "packing",
    title: "Packing for Mountain Weather",
    icon: "luggage",
    points: [
      "Warm layers and a rain jacket — shrines and high viewpoints are cold even in summer.",
      "Comfortable walking shoes that slip off easily at temples.",
      "Personal medicines, sunscreen, sunglasses and a reusable water bottle.",
    ],
  },
  {
    id: "fitness",
    title: "Preparing for High Altitude",
    icon: "heart",
    points: [
      "Consult a doctor before travelling above 3,000 m, especially with heart or breathing conditions.",
      "Walk regularly in the weeks before a yatra or trek.",
      "Rest between long travel days, drink water and ascend gradually.",
    ],
  },
  {
    id: "permits",
    title: "Permits & Registration",
    icon: "file",
    points: [
      "Char Dham pilgrims may need registration set by the Uttarakhand authorities.",
      "Adi Kailash and Om Parvat require an Inner Line Permit, issued at Dharchula.",
      "National parks such as Jim Corbett and the Valley of Flowers need entry or safari permits.",
    ],
  },
  {
    id: "responsible",
    title: "Responsible Travel",
    icon: "leaf",
    points: [
      "Carry your waste back and avoid single-use plastic on trails and at shrines.",
      "Keep distance from wildlife, stay on marked trails and follow park rules.",
      "Support local guides, homestays and businesses.",
    ],
  },
  {
    id: "etiquette",
    title: "Temple Etiquette",
    icon: "landmark",
    points: [
      "Dress modestly and remove shoes where asked.",
      "Photography is restricted inside many sanctums — follow signs and ask first.",
      "Speak quietly and respect queues, rituals and temple staff.",
    ],
  },
  {
    id: "conditions",
    title: "Weather & Road Conditions",
    icon: "cloud",
    points: [
      "Weather can change quickly at altitude; plans may change on the ground.",
      "Landslides can close roads, particularly during the monsoon.",
      "We monitor conditions and build buffer time into mountain itineraries.",
    ],
  },
];

/* ============================================================
   FAQ
   ============================================================ */

export const FAQS: Faq[] = [
  {
    question: "What are the best places to visit in Uttarakhand?",
    answer:
      "For pilgrimage, the Char Dham shrines of Yamunotri, Gangotri, Kedarnath and Badrinath, along with Haridwar, Rishikesh and Devprayag. For hill holidays, Mussoorie, Nainital, Lansdowne, Ranikhet and Almora. For mountains and nature, Auli, Chopta, Munsiyari, the Valley of Flowers and Jim Corbett National Park.",
  },
  {
    question: "What is the Char Dham Yatra?",
    answer:
      "A traditional Hindu pilgrimage to four Himalayan shrines in Uttarakhand: Yamunotri (Goddess Yamuna), Gangotri (Goddess Ganga), Kedarnath (Lord Shiva) and Badrinath (Lord Vishnu). It is traditionally made from west to east and can be travelled by road or helicopter.",
  },
  {
    question: "When is the best time to visit Uttarakhand?",
    answer:
      "It depends on where you go. Spring and autumn suit most sightseeing and mountain views; summer is popular for hill stations and the Char Dham; the monsoon brings landslide risk; and winter suits lower-altitude towns and seasonal snow, while high routes may be closed.",
  },
  {
    question: "How many days are required for a Char Dham pilgrimage?",
    answer:
      "Our sample road itinerary is 9 nights / 10 days from Haridwar, and our sample helicopter itinerary is 5 nights / 6 days from Dehradun. The Do Dham (Kedarnath and Badrinath) sample is 4 nights / 5 days. Actual duration depends on your pace, the season and conditions on the ground.",
  },
  {
    question: "Are Kedarnath and Badrinath open throughout the year?",
    answer:
      "No. Both shrines close each winter because of snow and severe conditions, and worship continues at lower-altitude winter seats. Opening and closing dates are announced every year, so we confirm them for your travel dates.",
  },
  {
    question: "Which hill stations are suitable for families?",
    answer:
      "Mussoorie and Nainital are easy, well-connected family favourites. Lansdowne, Ranikhet and Almora are quieter alternatives, and Jim Corbett adds a regulated wildlife safari.",
  },
  {
    question: "Can I combine Haridwar, Rishikesh, and Mussoorie in one trip?",
    answer:
      "Yes. Mussoorie is a popular extension to our Haridwar & Rishikesh tour, with Dehradun on the way. The number of days, hotels and sightseeing are tailored to your group.",
  },
  {
    question: "What should I pack for a Himalayan pilgrimage?",
    answer:
      "Warm layers and a rain jacket, comfortable walking shoes that are easy to remove, modest clothing for temples, personal medicines, sunscreen and sunglasses, and copies of your ID and any registration documents.",
  },
  {
    question: "Are customized Uttarakhand tour packages available?",
    answer:
      "Yes. Every journey can be tailored — destinations, pace, hotels, road or helicopter travel where available, and combinations such as a pilgrimage with a hill-station holiday. Destinations without a published package, like Auli, Chopta or Jim Corbett, are planned on request.",
  },
  {
    question: "How can I enquire about Karvaahh Uttarakhand packages?",
    answer:
      "Use the Enquire button on any package, message us on WhatsApp, or send your details through our contact page. Share your preferred destinations, dates, number of travellers and any mobility needs, and we will suggest an itinerary and quote.",
  },
];

/* ============================================================
   RELATED
   ============================================================ */

export const RELATED: RelatedTour[] = [
  { title: "Char Dham Yatra", text: "Yamunotri, Gangotri, Kedarnath and Badrinath by road or helicopter.", href: CHAR_DHAM, image: I.charDhamPanorama },
  { title: "Haridwar & Rishikesh Yatra", text: "Ganga Aarti, ashrams and temples in the foothills.", href: HARIDWAR_RISHIKESH, image: I.haridwar },
  { title: "Adi Kailash & Om Parvat", text: "A remote Shiva pilgrimage in the Kumaon Himalaya.", href: ADI_KAILASH, image: I.adiKailash },
  { title: "Spiritual & Pilgrimage Tours", text: "Sacred journeys across Nepal and India.", href: "/packages/spiritual-pilgrimage", image: I.kedarnathTemple },
];

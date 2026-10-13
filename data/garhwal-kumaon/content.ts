/* ============================================================
   GARHWAL & KUMAON GRAND HIMALAYAN CIRCUIT — CONTENT
   ------------------------------------------------------------
   Images reuse the planned Uttarakhand / Char Dham files; new
   planned files live in /public/images/uttarakhand/. A designed
   placeholder shows until each file is added (see
   components/activities/experience/resolve-images.ts).
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";
import * as CD from "@/data/char-dham/images";
import * as U from "@/data/uttarakhand/images";

export const PAGE_PATH = "/packages/karvaahh-specials/garhwal-kumaon-circuit";
export const PAGE_TITLE = "Garhwal & Kumaon Grand Himalayan Circuit";

export const SEO = {
  title: "Garhwal & Kumaon Grand Himalayan Circuit | Karvaahh",
  description:
    "Explore Uttarakhand with Karvaahh's Garhwal and Kumaon tour packages featuring Char Dham pilgrimage, Himalayan trekking, wildlife, ancient temples and scenic mountain villages.",
  socialTitle: "Garhwal & Kumaon Grand Himalayan Circuit — Karvaahh Specials",
};

const planned = (file: string, label: string, alt: string): PageImage => ({ src: `/images/uttarakhand/${file}`, label, alt });

export const IMAGES = {
  hero: U.hero,
  cta: U.charDhamPanorama,
  tungnath: planned("tungnath-chandrashila-summit.jpg", "Tungnath & Chandrashila", "The stone Tungnath temple on a high ridge with Chandrashila summit above it"),
  binsar: planned("binsar-wildlife-sanctuary-oak-forest.jpg", "Binsar", "Oak and rhododendron forest of Binsar Wildlife Sanctuary with Himalayan peaks beyond"),
  jageshwar: planned("jageshwar-dham-stone-temples.jpg", "Jageshwar Dham", "The cluster of ancient stone temples of Jageshwar Dham among deodar trees"),
  kausani: planned("kausani-himalayan-panorama.jpg", "Kausani", "Sunrise over the Trishul and Nanda Devi range seen from the ridge at Kausani"),
  darma: planned("darma-valley-panchachuli-meadows.jpg", "Darma Valley", "Remote meadows and stone villages of the Darma Valley below the Panchachuli peaks"),
};

/* ---------- Destinations mosaic ---------- */

export type Region = "garhwal" | "kumaon";
export type Destination = { name: string; text: string; region: Region; image: PageImage; optional?: boolean };

export const DESTINATIONS: Destination[] = [
  { name: "Haridwar & Rishikesh", region: "garhwal", image: U.haridwar, text: "The gateway on the Ganga — evening aarti at Har Ki Pauri, ashrams and forested ghats where the river leaves the hills." },
  { name: "Yamunotri & Gangotri", region: "garhwal", image: CD.gangotriTemple, text: "Sources of the Yamuna and the Ganga, reached through deep gorges and the apple orchards of the Harsil valley." },
  { name: "Kedarnath & Badrinath", region: "garhwal", image: CD.kedarnathTemple, text: "Shiva's high shrine below the Kedar peaks and Vishnu's temple on the Alaknanda, near the village of Mana." },
  { name: "Joshimath & Auli", region: "garhwal", image: U.auli, text: "An old monastic town and the open slopes above it, facing Nanda Devi across the valley." },
  { name: "Tungnath & Chandrashila", region: "garhwal", image: IMAGES.tungnath, text: "Among the highest Shiva temples in the world, with a short summit beyond for a sweeping Himalayan sunrise." },
  { name: "Nainital & Almora", region: "kumaon", image: U.nainital, text: "A lake town ringed by hills and a ridge-top cultural capital of Kumaoni crafts, bazaars and temples." },
  { name: "Kausani & Binsar", region: "kumaon", image: U.ranikhetAlmora, text: "A 300-km Himalayan panorama from Kausani and quiet oak forest trails inside Binsar Wildlife Sanctuary." },
  { name: "Jageshwar Dham", region: "kumaon", image: IMAGES.jageshwar, text: "More than a hundred carved stone temples standing together in a deodar grove — Kumaon's great heritage site." },
  { name: "Pithoragarh & Munsiyari", region: "kumaon", image: U.munsiyari, text: "The far-east frontier of Kumaon, ending at a village that faces the five summits of Panchachuli." },
  { name: "Darma Valley", region: "kumaon", image: IMAGES.darma, optional: true, text: "A remote border valley of Rung villages and alpine meadows — permits and road conditions permitting." },
];

/* ---------- Three featured packages ---------- */

export type Experience = "adventure" | "spiritual" | "wildlife";
export type CircuitPackage = {
  id: Experience;
  label: string;
  title: string;
  duration: string;
  difficulty: string;
  text: string;
  highlights: string[];
  extension: string;
  recommendation: string;
  image: PageImage;
};

export const PACKAGES: CircuitPackage[] = [
  {
    id: "adventure",
    label: "Adventure",
    title: "Adventure & Trekking Expedition",
    duration: "28–30 days",
    difficulty: "Moderate to challenging",
    text: "Himalayan trails, high viewpoints, old forests and remote villages — the circuit walked as much as driven.",
    highlights: ["Kedarnath trek", "Tungnath–Chandrashila summit", "Auli and Binsar forest trails", "Munsiyari and Panchachuli views"],
    extension: "Valley of Flowers & Hemkund Sahib",
    recommendation: "For fit travellers who want to earn their views. Expect long trail days at altitude — we build in rest and acclimatisation.",
    image: IMAGES.tungnath,
  },
  {
    id: "spiritual",
    label: "Spiritual",
    title: "Spiritual & Cultural Himalayan Yatra",
    duration: "27–30 days",
    difficulty: "Varies by pilgrimage trek",
    text: "The four Dhams, sacred river confluences and the temple towns of Kumaon, paced for darshan and reflection.",
    highlights: ["Yamunotri, Gangotri, Kedarnath & Badrinath", "Haridwar and Rishikesh aarti", "Devprayag confluence", "Jageshwar Dham temple cluster"],
    extension: "Additional Panch Kedar temples",
    recommendation: "For pilgrims and culture-seekers. Pony, palki and helicopter options can soften the Yamunotri and Kedarnath treks where available.",
    image: CD.kedarnathTemple,
  },
  {
    id: "wildlife",
    label: "Wildlife",
    title: "Wildlife & Adventure Mix",
    duration: "25–28 days",
    difficulty: "Easy to moderate, optional hikes",
    text: "Safari jeeps, birdwatching forests and gentle hill stations, with Himalayan views from every ridge.",
    highlights: ["Jim Corbett National Park safaris", "Binsar birding and forest walks", "Nainital, Almora and Kausani", "Munsiyari village stays"],
    extension: "Auli & Darma Valley",
    recommendation: "For families and nature lovers who prefer comfortable days. Hikes stay optional, and safari zones depend on the park's seasonal openings.",
    image: U.corbett,
  },
];

/* ---------- Regional itinerary ---------- */

export type Day = { day: number; stay: string; title: string; text: string; optional?: boolean };

export const ITINERARY: Record<Region, { label: string; span: string; intro: string; days: Day[] }> = {
  garhwal: {
    label: "Garhwal",
    span: "Approx. 14–16 days",
    intro: "The pilgrimage heart of Uttarakhand — the Char Dham, the Ganga's confluences and the high meadows of Chopta and Auli.",
    days: [
      { day: 1, stay: "Haridwar", title: "Arrive on the Ganga", text: "Arrival and transfer. Evening Ganga Aarti at Har Ki Pauri." },
      { day: 2, stay: "Rishikesh", title: "Rishikesh ashrams & ghats", text: "Riverside walks, the suspension bridges and Triveni Ghat aarti." },
      { day: 3, stay: "Barkot", title: "Into the Yamuna valley", text: "Scenic drive via the Mussoorie hills to the Yamuna valley." },
      { day: 4, stay: "Barkot", title: "Yamunotri Dham", text: "Trek from Janki Chatti to Yamunotri; pony or palki available." },
      { day: 5, stay: "Uttarkashi", title: "Bhagirathi valley", text: "Drive to Uttarkashi and visit the Kashi Vishwanath temple." },
      { day: 6, stay: "Harsil", title: "Gangotri Dham", text: "Darshan at Gangotri, then settle into the Harsil valley." },
      { day: 7, stay: "Harsil", title: "Harsil valley", text: "Orchards, deodar forest and the villages of Mukhba and Dharali." },
      { day: 8, stay: "Guptkashi", title: "Across Tehri to Mandakini", text: "Long mountain drive via Tehri lake to Guptkashi." },
      { day: 9, stay: "Kedarnath", title: "Kedarnath trek", text: "Trek from Gaurikund to Kedarnath; evening aarti at the temple." },
      { day: 10, stay: "Guptkashi", title: "Morning darshan & descent", text: "Early darshan, then walk down to Gaurikund." },
      { day: 11, stay: "Chopta", title: "Chopta meadows", text: "Drive to Chopta through oak and rhododendron forest." },
      { day: 12, stay: "Chopta", title: "Tungnath & Chandrashila", text: "Pre-dawn hike to Tungnath and on to Chandrashila summit." },
      { day: 13, stay: "Badrinath", title: "Badrinath Dham & Mana", text: "Drive via Joshimath; darshan and a visit to Mana village." },
      { day: 14, stay: "Auli", title: "Joshimath & Auli", text: "Auli's slopes and Nanda Devi views; ropeway subject to operation." },
      { day: 15, stay: "Rudraprayag", title: "The Panch Prayag road", text: "Descend past Vishnuprayag, Nandprayag, Karnaprayag and Rudraprayag." },
      { day: 16, stay: "Rishikesh", title: "Devprayag sangam", text: "Where the Alaknanda and Bhagirathi meet to become the Ganga." },
    ],
  },
  kumaon: {
    label: "Kumaon",
    span: "Approx. 10–13 days",
    intro: "The quieter east — lake towns, deodar temple groves, wildlife forests and villages facing the Panchachuli peaks.",
    days: [
      { day: 17, stay: "Nainital", title: "Transfer to the lake district", text: "Drive across the foothills to Nainital; evening on the Mall." },
      { day: 18, stay: "Nainital", title: "Naini Lake & viewpoints", text: "Boating, Naina Devi temple and Snow View; optional Pangot birding." },
      { day: 19, stay: "Almora", title: "Almora heritage", text: "Kasar Devi ridge, old bazaars and Kumaoni craft traditions." },
      { day: 20, stay: "Binsar", title: "Binsar Wildlife Sanctuary", text: "Forest walk to Zero Point for a wide Himalayan panorama." },
      { day: 21, stay: "Jageshwar", title: "Jageshwar Dham", text: "A cluster of more than a hundred stone temples in a deodar grove." },
      { day: 22, stay: "Kausani", title: "Kausani panorama", text: "Anasakti Ashram and sunset over Trishul and Nanda Devi." },
      { day: 23, stay: "Bageshwar", title: "Baijnath & Bageshwar", text: "Baijnath temples and the Saryu–Gomti confluence at Bagnath." },
      { day: 24, stay: "Pithoragarh", title: "Pithoragarh", text: "Drive to the 'Little Kashmir' of Kumaon; Chandak hill views." },
      { day: 25, stay: "Munsiyari", title: "Road to Munsiyari", text: "A dramatic mountain drive to the Panchachuli village." },
      { day: 26, stay: "Munsiyari", title: "Khaliya Top & villages", text: "Optional Khaliya Top hike and the Tribal Heritage Museum." },
      { day: 27, stay: "Kathgodam", title: "Return to the plains", text: "Long scenic drive back towards Kathgodam." },
      { day: 28, stay: "Departure", title: "Onward journey", text: "Train or road connection to Delhi." },
      { day: 0, stay: "Dharchula & Darma", title: "Optional Darma Valley extension", text: "3–4 days added after Munsiyari; border-area permits and road access required.", optional: true },
    ],
  },
};

/* ---------- Seasons & preparation ---------- */

export const SEASONS = [
  { months: "Mar – Jun", title: "Spring & early summer", text: "Clear mornings and blooming rhododendrons — a useful window for broad regional sightseeing. Char Dham travel begins only after the official opening dates, usually announced each spring." },
  { months: "Jun – Sep", title: "Summer treks & monsoon", text: "Higher trails open as snow melts, but monsoon brings landslides, flooding, road closures and low visibility. Schedules need buffer days and may change at short notice." },
  { months: "Sep – Nov", title: "Autumn", text: "Often the clearest Himalayan views of the year and settled roads. The Dhams close for winter on dates fixed by the temple authorities." },
  { months: "Dec – Feb", title: "Winter", text: "Snow at Auli, Chopta and Munsiyari. High-altitude routes and the Char Dham temples are closed; lower Kumaon and Corbett remain accessible." },
];

export const CONDITIONAL_NOTE =
  "Darma Valley, the Valley of Flowers, Hemkund Sahib and the full Panch Kedar circuit are offered as optional extensions only — each depends on its own season, trail condition and permissions.";

export const PREPARATION = [
  "Char Dham pilgrimage registration",
  "Route-specific permits for border areas",
  "Trekking fitness for Kedarnath, Yamunotri and Tungnath",
  "Gradual ascent and altitude precautions",
  "Travel insurance covering trekking and altitude",
  "Flexible schedules with buffer days",
];

/* ---------- Why Karvaahh ---------- */

export const SERVICES = [
  { title: "Personalized private journeys", text: "Your own vehicle, driver and pace — never a fixed group departure." },
  { title: "Flexible regional itineraries", text: "Travel Garhwal, Kumaon or both, in the order and length that suits you." },
  { title: "Pilgrimage & adventure planning", text: "Darshan timings, trek days and rest days balanced around one route." },
  { title: "Accommodation & transport", text: "Stays and road transfers coordinated across both regions." },
  { title: "Travel preparation support", text: "Help with registrations, permits and practical route preparation." },
];

/* ---------- FAQs (also used for FAQPage structured data) ---------- */

export const FAQS = [
  {
    question: "How many days are required for Garhwal and Kumaon?",
    answer:
      "A complete Garhwal and Kumaon circuit usually takes 25 to 30 days — around 14 to 16 days for Garhwal, including the Char Dham, and 10 to 13 days for Kumaon. Shorter versions covering one region are also possible.",
  },
  {
    question: "Can I combine Char Dham Yatra with Kumaon sightseeing?",
    answer:
      "Yes. The Spiritual & Cultural Himalayan Yatra follows the Char Dham route through Garhwal and then continues to Nainital, Almora, Jageshwar Dham, Kausani and Munsiyari in Kumaon.",
  },
  {
    question: "What is the best time to visit Uttarakhand?",
    answer:
      "Spring (March to June) and autumn (September to November) are the most reliable periods for touring both regions. The monsoon brings landslide and road-closure risks, and winter snow closes high-altitude routes.",
  },
  {
    question: "Are the Char Dham temples open throughout the year?",
    answer:
      "No. Yamunotri, Gangotri, Kedarnath and Badrinath open in spring and close for winter on dates announced each year by the temple authorities. We plan Char Dham itineraries around the official dates.",
  },
  {
    question: "Can the itinerary include trekking and wildlife safaris?",
    answer:
      "Yes. Treks such as Kedarnath, Tungnath–Chandrashila and Khaliya Top can be combined with safaris in Jim Corbett National Park and forest walks in Binsar, subject to seasonal park and trail openings.",
  },
  {
    question: "Can Karvaahh customize the circuit for families and international travellers?",
    answer:
      "Yes. Every journey is private, so we can adjust the pace, route, accommodation and trek days for families, senior travellers and international guests, and help with route-specific preparation.",
  },
];

/* ============================================================
   ALL NEPAL ADVENTURE CIRCUIT — CONTENT
   ------------------------------------------------------------
   Real project photos are used wherever they exist. Rara, Khaptad,
   Api, Jumla, Sinja and Badimalika share the Far-West circuit's
   planned files; the rest have planned files in
   /public/images/all-nepal-circuit/. A designed placeholder shows
   until each file is added (see resolve-images.ts).
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";
import * as FW from "@/data/farwest-nepal/images";

export const PAGE_PATH = "/packages/karvaahh-specials/all-nepal-adventure-circuit";
export const PAGE_TITLE = "All Nepal Adventure Circuit";

export const SEO = {
  title: "All Nepal Adventure Circuit | Nepal Tour Package | Karvaahh",
  description:
    "Explore Nepal with a customizable adventure covering Rara Lake, Mustang, Muktinath, Pokhara, Ghandruk, Kathmandu, Chitwan and Lumbini with Karvaahh Tours & Travels.",
  socialTitle: "All Nepal Adventure Circuit — Karvaahh Specials",
};

const img = (src: string, label: string, alt: string, objectPosition?: string): PageImage => ({ src, label, alt, ...(objectPosition ? { objectPosition } : {}) });
const planned = (file: string, label: string, alt: string) => img(`/images/all-nepal-circuit/${file}`, label, alt);

export const IMAGES = {
  hero: img("/images/gandaki/poon-hill-sunrise-dhaulagiri-myagdi-gandaki-nepal.jpg", "Dhaulagiri sunrise", "Sunrise over the Dhaulagiri range seen from Poon Hill in the Annapurna foothills of Nepal"),
  cta: img("/images/gandaki/phewa-lake-annapurna-mountain-reflection-gandaki-nepal.jpg", "Phewa Lake", "The Annapurna range reflected in Phewa Lake, Pokhara"),
  kathmandu: img("/images/bagmati/kathmandu-durbar-square-heritage-city-bagmati-nepal.jpg", "Kathmandu Durbar Square", "Pagoda temples of Kathmandu Durbar Square in the heart of the Kathmandu Valley"),
  pashupatinath: img("/images/bagmati/pashupatinath-temple-bagmati-river-sacred-pilgrimage-nepal.jpg", "Pashupatinath", "Pashupatinath Temple on the banks of the Bagmati River, Kathmandu"),
  swayambhu: img("/images/bagmati/swayambhunath-stupa-kathmandu-valley-unesco-heritage-nepal.jpg", "Swayambhunath", "The white dome and gilded spire of Swayambhunath Stupa above the Kathmandu Valley"),
  pokhara: img("/images/gandaki/pokhara-phewa-lake-annapurna-mountains-gandaki-nepal.jpg", "Pokhara", "Boats on Phewa Lake in Pokhara with the Annapurna mountains behind"),
  ghandruk: img("/images/gandaki/ghandruk-gurung-village-mountain-culture-gandaki-nepal.jpg", "Ghandruk", "Stone houses of the Gurung village of Ghandruk below the Annapurna range"),
  foothills: img("/images/home/view-from-ghandruk.jpg", "Annapurna foothills", "Himalayan view across the Annapurna foothills from Ghandruk"),
  trekking: img("/images/gandaki/high-altitude-trekking-trail-annapurna-gandaki-nepal.jpg", "Annapurna trail", "A high trekking trail in the Annapurna region of Nepal"),
  kagbeni: img("/images/gandaki/kagbeni-ancient-village-kali-gandaki-mustang-nepal.jpg", "Kagbeni", "The old mud-brick settlement of Kagbeni beside the Kali Gandaki in Mustang"),
  muktinath: img("/images/gandaki/muktinath-temple-mustang-himalayan-landscape-gandaki-nepal.jpg", "Muktinath", "Muktinath Temple in the arid trans-Himalayan landscape of Mustang"),
  chitwan: img("/images/bagmati/one-horned-rhinoceros-chitwan-national-park-wildlife-nepal.jpg", "Chitwan National Park", "A one-horned rhinoceros in the grasslands of Chitwan National Park"),
  tharu: img("/images/bagmati/chitwan-tharu-village-traditional-culture-nepal.jpg", "Tharu village", "A traditional Tharu village near Chitwan in southern Nepal"),
  lumbini: img("/images/lumbini/lumbini-sacred-garden-maya-devi-temple-nepal.jpg", "Lumbini", "The Sacred Garden and Maya Devi Temple at Lumbini, birthplace of the Buddha"),
  janakpur: img("/images/madhesh/janakpur.jpg", "Janakpur", "Janaki Temple in Janakpur, Madhesh Province"),
  ilam: img("/koshi/ilam.jpg", "Ilam", "Tea gardens on the green hills of Ilam, eastern Nepal"),
  bhedetar: img("/koshi/bhedetar.jpg", "Bhedetar", "Hilltop view from Bhedetar in Dhankuta, eastern Nepal"),
  pathibhara: img("/koshi/pathibhara-temple.jpg", "Pathibhara", "Pathibhara Devi Temple on its ridge in Taplejung, eastern Nepal"),
  jomsom: planned("jomsom-kali-gandaki-valley-mustang.jpg", "Jomsom", "The wide Kali Gandaki valley at Jomsom, gateway to Mustang"),
  phoksundo: planned("shey-phoksundo-lake-dolpa.jpg", "Phoksundo Lake", "Turquoise Phoksundo Lake in Shey Phoksundo National Park, Dolpa"),
  manakamana: planned("manakamana-temple-gorkha.jpg", "Manakamana Temple", "Manakamana Temple on its hilltop in Gorkha"),
};

export const HERO_FACTS = ["Suggested journey: 28–30 days", "Customizable itinerary", "Himalayan adventure", "Culture and wildlife"];

/* ---------- Four travel dimensions ---------- */

export const DIMENSIONS = [
  { title: "High Himalayas & Remote Wilderness", text: "Rara Lake, Jumla, the remote west and selected trekking regions — for travellers who want Nepal at its wildest.", image: FW.dolpo },
  { title: "Culture & Living Heritage", text: "Kathmandu Valley's heritage squares, traditional settlements and everyday local life.", image: IMAGES.kathmandu },
  { title: "Sacred Himalayan Journeys", text: "Muktinath, Mustang and selected pilgrimage destinations, chosen to suit your route.", image: IMAGES.muktinath },
  { title: "Wildlife & Southern Nepal", text: "Chitwan National Park, Tharu culture, Lumbini — or selected eastern destinations instead.", image: IMAGES.chitwan },
];

/* ---------- Destination highlights, grouped by region ---------- */

export type Place = { name: string; text: string; image: PageImage; tag?: string };
export type RegionGroup = { id: string; label: string; title: string; note?: string; link?: { href: string; label: string }; places: Place[] };

export const REGIONS: RegionGroup[] = [
  {
    id: "sudurpashchim",
    label: "Sudurpashchim Province",
    title: "The Far West",
    note: "Remote extensions with their own access and logistics — best planned as a dedicated module.",
    link: { href: "/destinations/sudurpaschim-province", label: "Explore Sudurpashchim" },
    places: [
      { name: "Badimalika", tag: "Trek extension", image: FW.badimalika, text: "A remote pilgrimage and trekking destination with dramatic high-altitude landscapes. Allow additional days for trekking and access." },
      { name: "Khaptad National Park", image: FW.khaptad, text: "Open meadows, forest trails, rich biodiversity and peaceful natural surroundings." },
      { name: "Api Himal region", tag: "Experienced trekkers", image: FW.apiHimal, text: "A remote Himalayan trekking option for experienced adventurers, requiring separate route and logistics planning." },
    ],
  },
  {
    id: "karnali",
    label: "Karnali Province",
    title: "Rara, Jumla & Sinja",
    link: { href: "/destinations/karnali-province", label: "Explore Karnali" },
    places: [
      { name: "Rara Lake", image: FW.rara, text: "Nepal's celebrated high-altitude lake, surrounded by forested hills and mountain scenery." },
      { name: "Jumla", image: FW.jumla, text: "A western Himalayan gateway of local culture, rural landscapes and trekking connections." },
      { name: "Sinja Valley", image: FW.sinja, text: "A culturally significant valley linked to the historic Khasa civilization and the heritage of the Nepali language." },
    ],
  },
  {
    id: "dolpo",
    label: "Karnali Province",
    title: "Dolpo & Shey Phoksundo",
    note: "Deeper Dolpo routes may require restricted-area permits, specialized logistics, experienced guides and additional days. Most of the region is reached on foot, not by ordinary road travel.",
    places: [
      { name: "Shey Phoksundo National Park", image: IMAGES.phoksundo, text: "Dramatic mountain scenery, turquoise Phoksundo Lake and distinctive Himalayan ecosystems." },
      { name: "Dolpo", tag: "Permits required", image: FW.dolpo, text: "Remote landscapes, traditional settlements and demanding trekking possibilities." },
    ],
  },
  {
    id: "gandaki",
    label: "Gandaki Province",
    title: "Pokhara & the Annapurna Foothills",
    link: { href: "/destinations/gandaki-province", label: "Explore Gandaki" },
    places: [
      { name: "Pokhara", image: IMAGES.pokhara, text: "Phewa Lake, mountain views, lakeside cafés, adventure activities and access to the Annapurna region." },
      { name: "Ghandruk", image: IMAGES.ghandruk, text: "A traditional Gurung village with Himalayan panoramas and cultural experiences." },
      { name: "Annapurna foothills", image: IMAGES.foothills, text: "Walking trails, mountain scenery and selected trekking routes for every level." },
    ],
  },
  {
    id: "mustang",
    label: "Gandaki Province",
    title: "Mustang & Muktinath",
    places: [
      { name: "Jomsom", image: IMAGES.jomsom, text: "The gateway to the trans-Himalayan landscapes of Mustang." },
      { name: "Kagbeni", image: IMAGES.kagbeni, text: "A historic settlement of traditional architecture, looking over the arid Himalayan landscape." },
      { name: "Muktinath", image: IMAGES.muktinath, text: "An important pilgrimage destination visited by Hindu and Buddhist devotees alike." },
    ],
  },
  {
    id: "kathmandu",
    label: "Bagmati & Gandaki",
    title: "Kathmandu Valley & Manakamana",
    link: { href: "/destinations/bagmati-province", label: "Explore Bagmati" },
    places: [
      { name: "Kathmandu Valley", image: IMAGES.kathmandu, text: "Historic temples, heritage squares, traditional architecture, markets and cultural experiences." },
      { name: "Pashupatinath & Boudhanath", image: IMAGES.pashupatinath, text: "The great Hindu temple on the Bagmati and one of the largest stupas in the Himalayan world." },
      { name: "Swayambhunath", image: IMAGES.swayambhu, text: "The hilltop stupa overlooking the valley, sacred to Buddhists and Hindus." },
      { name: "Manakamana Temple", tag: "Optional stop", image: IMAGES.manakamana, text: "A spiritual stop when routing through Gorkha. The cable car is an option subject to operating status." },
    ],
  },
  {
    id: "south",
    label: "Bagmati & Lumbini",
    title: "Chitwan & Lumbini",
    link: { href: "/destinations/lumbini-province", label: "Explore Lumbini Province" },
    places: [
      { name: "Chitwan National Park", image: IMAGES.chitwan, text: "Guided jungle activities, wildlife observation, birdwatching and Tharu cultural experiences." },
      { name: "Lumbini", image: IMAGES.lumbini, text: "The birthplace of the Buddha and an important Buddhist pilgrimage destination." },
    ],
  },
  {
    id: "east",
    label: "Optional Alternative",
    title: "Eastern Nepal",
    note: "An alternative route or separate extension — not combined with every remote western destination in one trip.",
    link: { href: "/destinations/koshi-province", label: "Explore Koshi" },
    places: [
      { name: "Janakpur", image: IMAGES.janakpur, text: "Janaki Temple, Mithila culture and important Hindu pilgrimage traditions." },
      { name: "Ilam", image: IMAGES.ilam, text: "Tea gardens, green hills and scenic rural landscapes." },
      { name: "Bhedetar", image: IMAGES.bhedetar, text: "Hilltop views and a pleasant stop in eastern Nepal." },
      { name: "Pathibhara", tag: "Trek extension", image: IMAGES.pathibhara, text: "An optional pilgrimage and trekking extension in Taplejung, subject to route and seasonal conditions." },
    ],
  },
];

/* ---------- Suggested 28–30 day framework ---------- */

export type Stage = { days: string; title: string; region: string; points: string[]; note?: string };

export const ITINERARY: Stage[] = [
  {
    days: "Days 1–3",
    title: "Kathmandu Arrival & Heritage",
    region: "Kathmandu Valley",
    points: ["Arrival and transfer to your hotel.", "Rest and preparation for the journey ahead.", "Explore selected Kathmandu Valley heritage and cultural sites."],
  },
  {
    days: "Days 4–8",
    title: "Western Nepal & the Rara Region",
    region: "Karnali",
    points: [
      "Travel toward the western Nepal gateway selected for your confirmed route.",
      "Continue toward Jumla and/or the Rara region, depending on available connections.",
      "Explore Rara Lake and the surrounding natural landscape.",
    ],
    note: "Flexibility is kept for transport delays and acclimatization.",
  },
  {
    days: "Days 9–10",
    title: "Pokhara",
    region: "Gandaki",
    points: ["Transfer to Pokhara on a confirmed transport connection.", "Enjoy Phewa Lake, mountain views and selected local attractions."],
  },
  {
    days: "Days 11–12",
    title: "Ghandruk",
    region: "Annapurna foothills",
    points: ["Travel to Ghandruk.", "Experience village culture, mountain scenery and easy walks suited to the group."],
  },
  {
    days: "Days 13–16",
    title: "Mustang & Muktinath",
    region: "Mustang",
    points: ["Travel toward Jomsom and the selected Mustang route.", "Explore Kagbeni or other suitable settlements.", "Visit Muktinath, subject to route and local conditions."],
    note: "Weather and road conditions can change plans here — flexibility is built in.",
  },
  {
    days: "Days 17–19",
    title: "Manakamana & Kathmandu",
    region: "Gorkha · Kathmandu",
    points: ["Return toward Kathmandu on a confirmed route.", "Include Manakamana Temple if practical.", "Continue with cultural experiences or rest time."],
  },
  {
    days: "Days 20–22",
    title: "Chitwan",
    region: "Southern Nepal",
    points: ["Transfer to Chitwan.", "Take part in suitable guided nature and wildlife activities.", "Experience Tharu culture where available."],
  },
  {
    days: "Days 23–24",
    title: "Lumbini",
    region: "Lumbini",
    points: ["Travel to Lumbini.", "Explore the Sacred Garden and selected monastic areas."],
  },
  {
    days: "Days 25–27",
    title: "Return & Flexible Travel Days",
    region: "Route-dependent",
    points: ["Plan the return journey or a confirmed onward transfer.", "Keep contingency time for long-distance travel."],
    note: "Long-distance transfers in Nepal are rarely short, and none are guaranteed.",
  },
  {
    days: "Days 28–30",
    title: "Buffer, Additional Experiences & Departure",
    region: "Flexible",
    points: [
      "Use these days for route-dependent transfers, selected additional experiences, recovery time or departure.",
      "The actual sequence is finalized only after transport and accommodation are checked.",
    ],
  },
];

export const ITINERARY_NOTE =
  "The itinerary is customizable. Rara, deeper Dolpo, Badimalika and Api Himal may need separate extensions or alternative routing rather than being combined into one rushed trip.";

/* ---------- Alternative journey styles ---------- */

export const STYLES = [
  {
    title: "High Himalaya Adventure & Trekking",
    duration: "14–21 days",
    level: "Moderate to challenging",
    image: IMAGES.trekking,
    highlights: ["Rara Lake and Jumla", "Selected trekking regions", "Phoksundo / Dolpo extension", "Pokhara and Ghandruk", "Mustang and Muktinath"],
    note: "These are modular options — not all of them fit comfortably within 14–21 days.",
  },
  {
    title: "Spirituality & Culture of Nepal",
    duration: "10–16 days",
    level: "Easy to moderate, by altitude and route",
    image: IMAGES.pashupatinath,
    highlights: ["Kathmandu Valley temples and heritage", "Manakamana Temple", "Pokhara", "Mustang and Muktinath", "Lumbini", "Optional Janakpur extension"],
    note: "Senior travellers should choose an itinerary suited to their mobility, health, altitude tolerance and transfer needs.",
  },
  {
    title: "Wildlife, Nature & Adventure",
    duration: "12–18 days",
    level: "Easy to moderate",
    image: IMAGES.tharu,
    highlights: ["Chitwan National Park", "Guided wildlife activities", "Tharu cultural experiences", "Pokhara and Phewa Lake", "Ghandruk and Annapurna foothills", "Optional Lumbini or Rara extension"],
    note: "Rara needs additional transport planning — it is not a nearby extension to Pokhara or Chitwan.",
  },
];

/* ---------- Gateways ---------- */

export const GATEWAYS = [
  { name: "Kathmandu", text: "Suited to heritage, central Nepal and many domestic connections." },
  { name: "Gorakhpur → Sunauli → Bhairahawa", text: "A possible overland entry for travellers approaching from northern India." },
  { name: "Raxaul → Birgunj", text: "An alternative overland entry, depending on the travel plan." },
  { name: "Banbasa → Mahendranagar / Gaddachauki", text: "A possible western entry for suitable western Nepal itineraries." },
  { name: "Nepalgunj", text: "A possible domestic gateway for selected western and remote-region itineraries." },
  { name: "Pokhara", text: "Useful for journeys centred on the Annapurna region and Mustang connections, subject to transport availability." },
];

/* ---------- Seasons ---------- */

export const SEASONS = [
  { title: "Spring", months: "March – May", text: "Generally favourable for many Himalayan journeys, trekking and outdoor exploration; conditions vary by elevation." },
  { title: "Autumn", months: "Sept / Oct – Nov", text: "Often favourable for mountain views, trekking and cultural travel, with route-specific variation." },
  { title: "Monsoon", months: "June – September", text: "Rainfall may cause landslides, road disruptions, flight delays and reduced visibility." },
  { title: "Winter", months: "December – February", text: "Some high-altitude routes can become very cold, snowy or inaccessible." },
];

export const SEASON_NOTE =
  "Conditions differ significantly between the lowlands, the hill regions and the remote high Himalayas. Always check current local conditions before departure.";

/* ---------- Practical information ---------- */

export const PRACTICAL = [
  { term: "Duration", text: "Around 28–30 days for the proposed flagship framework, subject to revision." },
  { term: "Difficulty", text: "From easy cultural touring to challenging remote trekking, depending on the modules you choose." },
  { term: "Accommodation", text: "Selected by availability, destination, comfort level and budget." },
  { term: "Transport", text: "Private vehicle, scheduled connections and domestic flights where appropriate and available." },
  { term: "Permits", text: "Depend on destinations, trekking routes, conservation areas and restricted regions. Current rules are confirmed before departure." },
  { term: "Altitude", text: "Some destinations require acclimatization and careful itinerary planning." },
  { term: "Travel insurance", text: "Appropriate cover is recommended, including trekking and emergency evacuation where relevant." },
  { term: "Flexibility", text: "Remote-region itineraries need contingency time built in." },
];

/* ---------- Why Karvaahh ---------- */

export const SERVICES = [
  { title: "Custom-built itineraries", text: "Every Nepal journey is planned from scratch around you." },
  { title: "Every kind of Nepal", text: "Adventure, culture, pilgrimage and wildlife — in whatever mix suits you." },
  { title: "Realistic routing", text: "Planned around your travel dates and honest transfer times." },
  { title: "Flexible choices", text: "Accommodation and transport matched to your comfort and budget." },
  { title: "Destination know-how", text: "Help with the specific planning each region needs." },
  { title: "One journey, your interests", text: "A single, coherent trip designed around what matters to you." },
];

/* ---------- Related links (verified routes) ---------- */

export const RELATED = [
  { href: "/packages/exclusive-farwest-nepal-circuit", label: "Exclusive Farwest Nepal Circuit" },
  { href: "/packages/nepal/adventure-offbeat-tours", label: "Adventure & Offbeat Tours" },
  { href: "/packages/nepal/base-camp-treks", label: "Base Camp Treks" },
  { href: "/packages/spiritual-pilgrimage", label: "Spiritual Pilgrimage" },
  { href: "/packages/nepal/helicopter-tours", label: "Nepal Helicopter Tours" },
];

/* ---------- FAQs ---------- */

export const FAQS = [
  {
    question: "How many days are required for the All Nepal Adventure Circuit?",
    answer:
      "The flagship framework runs around 28–30 days. Shorter journeys of 10–21 days are possible by focusing on fewer regions — for example culture and wildlife, or the Annapurna region and Mustang.",
  },
  {
    question: "Can I customize the itinerary?",
    answer: "Yes. Every module can be added, removed, shortened or extended to suit your dates, interests, fitness and preferred pace.",
  },
  {
    question: "Can Rara Lake, Dolpo, Mustang and Chitwan be included in one trip?",
    answer:
      "Rara, Mustang and Chitwan can be combined on a longer journey, but they are far apart and depend on domestic flights and remote roads. Deeper Dolpo usually needs its own trekking extension. We will advise on combinations that are realistic for your dates.",
  },
  {
    question: "Which season is best for this journey?",
    answer:
      "Spring (March–May) and autumn (September/October–November) are generally the most favourable. The monsoon can disrupt roads and flights, and winter closes or complicates some high routes. Conditions differ between the lowlands and the high Himalayas.",
  },
  {
    question: "Are special permits required for Dolpo and remote trekking regions?",
    answer:
      "Often, yes. Upper Dolpo and Upper Mustang are restricted areas whose permits are arranged through a registered agency, and national parks and conservation areas have their own entry requirements. Rules change, so current requirements are confirmed when your route is finalized.",
  },
  {
    question: "Which entry point is best for travellers arriving from India?",
    answer:
      "It depends on your route. Sunauli–Bhairahawa suits Lumbini and central Nepal, Raxaul–Birgunj is an alternative toward Kathmandu and Chitwan, and Banbasa–Mahendranagar suits some far-western itineraries. Flying into Kathmandu is simplest for many travellers. Border formalities differ by nationality, so confirm current requirements first.",
  },
  {
    question: "Is this package suitable for families or senior travellers?",
    answer:
      "The cultural, lake and lowland modules suit many families and senior travellers. Remote and high-altitude modules may not. We shape the itinerary around each traveller's mobility, health and altitude tolerance.",
  },
  {
    question: "Are domestic flights and private vehicles included?",
    answer:
      "Transport, accommodation, permits and inclusions all depend on the finalized itinerary. Your quotation will list exactly what is and is not included.",
  },
  {
    question: "What should I know about altitude and remote-region travel?",
    answer:
      "Muktinath sits at roughly 3,700 m, and some trekking routes go higher, so acclimatization matters. Mountain flights and remote roads are weather-dependent, so buffer days are built in. Travel insurance covering trekking and emergency evacuation is recommended.",
  },
  {
    question: "How can I request a customized quotation?",
    answer:
      "Use the enquiry form or WhatsApp on this page. Share your travel month, group size, interests and any must-see destinations, and Karvaahh will prepare a suggested route and quotation.",
  },
];

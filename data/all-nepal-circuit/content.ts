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

/* ---------- Suggested 30-day itinerary ----------
   Transfer times are deliberately not stated: domestic flights, remote
   connections and mountain roads must be confirmed locally before travel. */

export type TransportMode = "flight" | "road" | "local" | "rest";
export type ItineraryDay = {
  day: number;
  title: string;
  overnight: string;
  text: string;
  highlights: string[];
  mode: TransportMode;
  transport?: string;
  image?: PageImage;
};

const FLIGHT_NOTE = "Domestic flights are subject to schedules, weather and availability — confirmed before travel.";

export const ITINERARY_BADGES = ["30-Day Suggested Journey", "Himalayan Adventure", "Culture & Wildlife", "Customizable Route"];

/** Journey chapters shown as dividers in the timeline, keyed by their first day. */
export const PHASES: Record<number, string> = {
  1: "Kathmandu Valley",
  4: "Western Nepal & Rara Lake",
  10: "Pokhara & Ghandruk",
  16: "Mustang & Muktinath",
  20: "Kathmandu & Manakamana",
  23: "Chitwan",
  26: "Lumbini & Departure",
};

export const ITINERARY: ItineraryDay[] = [
  { day: 1, title: "Arrive in Kathmandu", overnight: "Kathmandu", mode: "local", image: IMAGES.kathmandu, text: "Airport pickup and hotel transfer, followed by time to rest and a briefing on the journey ahead.", highlights: ["Airport welcome", "Hotel check-in", "Trip briefing"] },
  { day: 2, title: "Kathmandu Heritage", overnight: "Kathmandu", mode: "local", image: IMAGES.pashupatinath, text: "Explore Pashupatinath, Boudhanath and selected heritage sites of the valley.", highlights: ["Pashupatinath", "Boudhanath Stupa", "Heritage sites"] },
  { day: 3, title: "Kathmandu Valley", overnight: "Kathmandu", mode: "local", image: IMAGES.swayambhu, text: "Visit Swayambhunath and Kathmandu Durbar Square, then prepare for the western Nepal journey.", highlights: ["Swayambhunath", "Kathmandu Durbar Square", "Western Nepal preparation"] },
  { day: 4, title: "Kathmandu to Nepalgunj", overnight: "Nepalgunj", mode: "flight", text: "Fly to Nepalgunj on a suitable domestic service where available, and overnight for the onward connection.", highlights: ["Domestic flight west", "Terai gateway town"], transport: FLIGHT_NOTE },
  { day: 5, title: "Nepalgunj to Talcha & the Rara Region", overnight: "Rara region", mode: "flight", image: FW.rara, text: "Take a confirmed flight connection toward Talcha, then continue to the Rara region with local transfers and some walking.", highlights: ["Mountain flight to Talcha", "Arrival in the Rara region"], transport: "Rara access via Nepalgunj and Talcha is flight-dependent. Overland access is a different route that needs additional days. Weather, local transfers and walking requirements are confirmed before departure." },
  { day: 6, title: "Rara Lake", overnight: "Rara region", mode: "local", image: FW.rara, text: "Explore the lake, its surrounding forests and viewpoints at a comfortable pace.", highlights: ["Rara Lake shoreline", "Forest trails", "Lakeside viewpoints"], transport: "High-altitude region — the pace is kept gentle to allow for acclimatization." },
  { day: 7, title: "Rara Lake Exploration", overnight: "Rara region", mode: "local", image: FW.rara, text: "A flexible day for nature walks, photography and outdoor activities.", highlights: ["Nature walks", "Photography", "Flexible activities"] },
  { day: 8, title: "Rara Region to Talcha or Onward Gateway", overnight: "Talcha or agreed gateway", mode: "local", text: "Return toward the agreed departure point for the flight out of the region.", highlights: ["Return toward the airstrip"], transport: "The schedule stays flexible for weather and transport." },
  { day: 9, title: "Western Gateway to Kathmandu", overnight: "Kathmandu", mode: "flight", image: IMAGES.kathmandu, text: "Fly back toward Kathmandu on a suitable confirmed connection.", highlights: ["Return to Kathmandu"], transport: `${FLIGHT_NOTE} Contingency time is retained for delays or changes.` },
  { day: 10, title: "Kathmandu to Pokhara", overnight: "Pokhara", mode: "flight", image: IMAGES.pokhara, text: "Fly to Pokhara if an appropriate service is available, or use the full day for road travel.", highlights: ["Arrival in Pokhara", "Lakeside evening"], transport: "Flight or road, depending on availability. Road travel times vary with traffic and conditions." },
  { day: 11, title: "Pokhara Sightseeing", overnight: "Pokhara", mode: "local", image: IMAGES.cta, text: "Explore Phewa Lake, the lakeside area and selected local attractions.", highlights: ["Phewa Lake", "Lakeside", "Local attractions"] },
  { day: 12, title: "Pokhara Exploration", overnight: "Pokhara", mode: "local", image: IMAGES.pokhara, text: "Enjoy mountain viewpoints and relaxed sightseeing, then prepare for the Mustang journey.", highlights: ["Mountain viewpoints", "Relaxed sightseeing", "Mustang preparation"] },
  { day: 13, title: "Pokhara to Ghandruk", overnight: "Ghandruk", mode: "road", image: IMAGES.ghandruk, text: "Travel toward Ghandruk using a vehicle suited to the prevailing road conditions.", highlights: ["Annapurna foothills drive", "Gurung village arrival"], transport: "Final road access and suitable vehicle arrangements to Ghandruk are confirmed before travel." },
  { day: 14, title: "Ghandruk Village", overnight: "Ghandruk", mode: "local", image: IMAGES.foothills, text: "Experience Gurung culture, traditional settlements, village walks and Annapurna mountain views.", highlights: ["Gurung culture", "Village walks", "Annapurna views"] },
  { day: 15, title: "Ghandruk to Pokhara", overnight: "Pokhara", mode: "road", image: IMAGES.pokhara, text: "Return to Pokhara and rest before the mountain-region transfer.", highlights: ["Return to Pokhara", "Rest and preparation"] },
  { day: 16, title: "Pokhara to Beni to Jomsom", overnight: "Jomsom", mode: "road", image: IMAGES.jomsom, text: "Begin the Mustang journey along the Kali Gandaki valley. This is a full travel day.", highlights: ["Kali Gandaki valley", "Arrival in Jomsom"], transport: "Road surfaces beyond Beni vary and can be rough — a suitable vehicle is used. Allow substantial travel time; weather can affect the route." },
  { day: 17, title: "Jomsom to Kagbeni to Muktinath", overnight: "Muktinath or Jomsom", mode: "road", image: IMAGES.muktinath, text: "Explore Kagbeni and continue toward Muktinath if road, weather and local conditions permit.", highlights: ["Kagbeni old village", "Muktinath Temple"], transport: "High altitude — pace and overnight stop are adjusted to conditions and how the group feels." },
  { day: 18, title: "Mustang Exploration", overnight: "Jomsom", mode: "local", image: IMAGES.kagbeni, text: "Explore Jomsom and nearby settlements, keeping the day flexible.", highlights: ["Jomsom", "Nearby settlements", "Trans-Himalayan landscape"], transport: "Plans stay flexible for altitude, strong afternoon winds and road conditions." },
  { day: 19, title: "Jomsom to Beni to Pokhara", overnight: "Pokhara", mode: "road", image: IMAGES.pokhara, text: "Return by road to Pokhara after a long mountain journey.", highlights: ["Kali Gandaki descent", "Return to Pokhara"], transport: "A long road day — tightly scheduled onward connections are avoided after it." },
  { day: 20, title: "Pokhara to Kathmandu", overnight: "Kathmandu", mode: "flight", image: IMAGES.kathmandu, text: "Fly to Kathmandu if a suitable service is available, or reserve the day for road travel.", highlights: ["Return to Kathmandu"], transport: "Flight or road, depending on availability and conditions." },
  { day: 21, title: "Kathmandu Rest & Flexibility", overnight: "Kathmandu", mode: "rest", image: IMAGES.swayambhu, text: "A relaxed day for additional sightseeing or simple recovery time.", highlights: ["Free time", "Optional sightseeing"] },
  { day: 22, title: "Manakamana Temple Excursion", overnight: "Kathmandu", mode: "road", image: IMAGES.manakamana, text: "Visit Manakamana Temple if the route is practical on the day.", highlights: ["Manakamana Temple", "Hill views"], transport: "Cable-car operation is checked before travel." },
  { day: 23, title: "Kathmandu to Chitwan", overnight: "Sauraha, Chitwan", mode: "road", image: IMAGES.tharu, text: "Travel through the Kathmandu–Mugling corridor toward Sauraha.", highlights: ["Trishuli river corridor", "Arrival in Sauraha"], transport: "Extra time is allowed for traffic, roadworks, landslides or other disruption along the highway." },
  { day: 24, title: "Chitwan Wildlife Experiences", overnight: "Sauraha, Chitwan", mode: "local", image: IMAGES.chitwan, text: "Join suitable guided wildlife and nature activities.", highlights: ["Guided jungle activities", "Wildlife observation", "Birdwatching"], transport: "Activities are subject to national park rules and availability." },
  { day: 25, title: "Chitwan Nature & Culture", overnight: "Sauraha, Chitwan", mode: "local", image: IMAGES.tharu, text: "Enjoy further wildlife activities or a Tharu cultural experience where available.", highlights: ["Nature activities", "Tharu culture"] },
  { day: 26, title: "Chitwan to Lumbini", overnight: "Lumbini", mode: "road", image: IMAGES.lumbini, text: "Drive across the Terai toward Lumbini.", highlights: ["Terai plains", "Arrival in Lumbini"], transport: "Sufficient time is allowed for the transfer and current road conditions." },
  { day: 27, title: "Lumbini Exploration", overnight: "Lumbini", mode: "local", image: IMAGES.lumbini, text: "Visit the Sacred Garden, the Maya Devi Temple area and selected monasteries.", highlights: ["Sacred Garden", "Maya Devi Temple", "Monastic zone"] },
  { day: 28, title: "Lumbini to Bhairahawa or Departure Gateway", overnight: "Bhairahawa or gateway", mode: "road", text: "Flexible sightseeing, then preparation for your confirmed onward connection.", highlights: ["Flexible sightseeing", "Departure preparation"] },
  { day: 29, title: "Departure or Contingency", overnight: "Gateway (if buffer used)", mode: "rest", text: "Depart through your confirmed airport or border route, or use the day as a buffer for delays.", highlights: ["Departure", "Buffer day"] },
  { day: 30, title: "Additional Buffer & Onward Travel", overnight: "Flexible", mode: "rest", text: "A reserve day for remote-region transport delays, road disruptions or a more comfortable departure.", highlights: ["Reserve day", "Comfortable departure"] },
];

export const ITINERARY_NOTICE =
  "This is a suggested itinerary, not a guaranteed operational schedule. Remote-region transport, domestic flights, road conditions, permits, weather, and trekking logistics must be confirmed before departure. The final route may change to ensure a realistic and comfortable journey.";

export const ROAD_NOTE =
  "Journey times are not fixed: map estimates do not reflect mountain roads, weather or disruptions, and current local confirmation is needed before every transfer.";

export const EXTENSIONS = [
  { title: "Badimalika", duration: "Approx. 4–6+ days", image: FW.badimalika, text: "A remote pilgrimage and trekking extension in the Far West. Duration depends on the route chosen." },
  { title: "Api Himal", duration: "Approx. 6–10+ days", image: FW.apiHimal, text: "A remote trekking extension for experienced adventurers. Duration depends on the route chosen." },
  { title: "Shey Phoksundo & Dolpo", duration: "Additional days", image: IMAGES.phoksundo, text: "Remote Himalayan landscapes and trekking. Additional days and route-specific permits may be required." },
  { title: "Eastern Nepal", duration: "Separate journey", image: IMAGES.ilam, text: "Janakpur, Ilam, Bhedetar or Pathibhara as an optional eastern journey." },
];

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

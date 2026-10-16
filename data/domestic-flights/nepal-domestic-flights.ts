/* ============================================================
   DOMESTIC NEPAL FLIGHTS — ROUTE DIRECTORY DATA
   ------------------------------------------------------------
   /activities/domestic-flights/domestic-nepal-flights

   CONTENT RULES (keep when editing):
   - Only list a route when an operator's own website or timetable
     shows it. Cite the source on every route.
   - Durations are the airline's stated or timetabled figures.
     Where airlines differ, show the range. If none is published,
     say so — never estimate.
   - Distances are great-circle (straight-line) km between airport
     coordinates (Wikipedia "List of airports in Nepal"), rounded
     to the nearest 5 km. They are NOT flown distances.
   - No fare amounts. Fare *categories* by nationality are quoted
     from airline fare rules only.
   - Update ROUTES_VERIFIED whenever the sources are rechecked.
   ============================================================ */

export const ROUTES_VERIFIED = "13 October 2026";

export type SourceLink = { label: string; href: string };

/* ---------- Sources ---------- */

export const SOURCES = {
  buddhaInfo: { label: "Buddha Air flight information", href: "https://www.buddhaair.com/detail/flight-information" },
  buddhaRules: { label: "Buddha Air fare rules", href: "https://www.buddhaair.com/detail/flight-fare-rules-and-regulations" },
  buddhaPokhara: { label: "Buddha Air — Pokhara airport", href: "https://www.buddhaair.com/about-us/sector-information/pokhara-airport" },
  yetiPokhara: { label: "Yeti Airlines — Pokhara", href: "https://yetiairlines.com/destination/pokhara" },
  yetiBiratnagar: { label: "Yeti Airlines — Biratnagar", href: "https://yetiairlines.com/destination/biratnagar" },
  yetiBhadrapur: { label: "Yeti Airlines — Bhadrapur", href: "https://yetiairlines.com/destination/bhadrapur" },
  yetiBhairahawa: { label: "Yeti Airlines — Bhairahawa", href: "https://yetiairlines.com/destination/bhairahawa" },
  yetiNepalgunj: { label: "Yeti Airlines — Nepalgunj", href: "https://yetiairlines.com/destination/nepalgunj" },
  yetiJanakpur: { label: "Yeti Airlines — Janakpur", href: "https://yetiairlines.com/destination/janakpur" },
  yetiPolicy: { label: "Yeti Airlines fare & cancellation policy", href: "https://yetiairlines.com/content/fare-categories-reschedule-and-cancellation-policies" },
  shreeDhangadhi: { label: "Shree Airlines — Kathmandu to Dhangadhi", href: "https://www.shreeairlines.com/destinations/kathmandu-to-dhangadhi-flight" },
  shreePolicy: { label: "Shree Airlines fare policy", href: "https://www.shreeairlines.com/farepolicy" },
  nepalAirlines: { label: "Nepal Airlines domestic schedule (Oct 2026)", href: "https://www.nepalairlines.com.np/domestic" },
  taraDestinations: { label: "Tara Air destinations", href: "https://taraair.com/destination.jsp" },
  summitLukla: { label: "Summit Air — Lukla", href: "https://www.summitair.com.np/destination/3-lukla" },
  ramechhap: { label: "Khabarhub — Ramechhap–Lukla flights (Sep 2025)", href: "https://english.khabarhub.com/2025/30/498776/" },
  jomsom: { label: "Radio Nepal — Pokhara–Jomsom route (8 Oct 2026)", href: "https://radionepalonline.com/en/2026/10/08/437486.html" },
  airports: { label: "List of airports in Nepal (coordinates)", href: "https://en.wikipedia.org/wiki/List_of_airports_in_Nepal" },
} satisfies Record<string, SourceLink>;

/* ---------- Routes ---------- */

export type RouteGroup = "major" | "mountain";

export type ServiceStatus =
  | "daily" // operator states daily service
  | "scheduled" // in the operator's published network; frequency not stated
  | "set-days" // timetabled on specific weekdays
  | "seasonal" // departure point or operation changes by season
  | "connecting"; // no direct flight; itinerary via a hub

export const STATUS_LABEL: Record<ServiceStatus, string> = {
  daily: "Daily (per airline)",
  scheduled: "Scheduled",
  "set-days": "Set weekdays",
  seasonal: "Seasonal pattern",
  connecting: "Connecting",
};

export type Airport = { city: string; code: string };

export interface FlightRoute {
  id: string;
  group: RouteGroup;
  from: Airport;
  to: Airport;
  airlines: string[];
  /** "Direct" or "Via <hub>". */
  service: string;
  /** Airline-stated or timetabled duration. */
  duration: string;
  /** Approximate great-circle distance, km. */
  distanceKm: number;
  status: ServiceStatus;
  statusNote: string;
  purpose: string;
  sources: SourceLink[];
}

const KTM: Airport = { city: "Kathmandu", code: "KTM" };
const PHH: Airport = { city: "Pokhara", code: "PHH" };
const KEP: Airport = { city: "Nepalgunj", code: "KEP" };
const SKH: Airport = { city: "Surkhet", code: "SKH" };
const NOT_PUBLISHED = "Not published — confirm at booking";

export const routes: FlightRoute[] = [
  /* ── Major domestic routes ─────────────────────────────── */
  {
    id: "ktm-phh",
    group: "major",
    from: KTM,
    to: PHH,
    airlines: ["Buddha Air", "Yeti Airlines", "Shree Airlines"],
    service: "Direct",
    duration: "≈ 25 min",
    distanceKm: 145,
    status: "daily",
    statusNote: "Buddha Air states daily direct flights.",
    purpose: "Lakeside, Annapurna treks, Jomsom connections",
    sources: [SOURCES.buddhaInfo, SOURCES.buddhaPokhara, SOURCES.yetiPokhara],
  },
  {
    id: "ktm-bir",
    group: "major",
    from: KTM,
    to: { city: "Biratnagar", code: "BIR" },
    airlines: ["Buddha Air", "Yeti Airlines", "Shree Airlines"],
    service: "Direct",
    duration: "≈ 35–50 min",
    distanceKm: 230,
    status: "daily",
    statusNote: "Yeti Airlines states daily service.",
    purpose: "Koshi Province, Koshi Tappu, eastern hills by road",
    sources: [SOURCES.buddhaInfo, SOURCES.yetiBiratnagar],
  },
  {
    id: "ktm-bdp",
    group: "major",
    from: KTM,
    to: { city: "Bhadrapur", code: "BDP" },
    airlines: ["Buddha Air", "Yeti Airlines", "Shree Airlines"],
    service: "Direct",
    duration: "≈ 50–55 min",
    distanceKm: 295,
    status: "daily",
    statusNote: "Yeti Airlines states daily service.",
    purpose: "Jhapa, Ilam tea country, Kakarbhitta border",
    sources: [SOURCES.buddhaInfo, SOURCES.yetiBhadrapur],
  },
  {
    id: "ktm-bwa",
    group: "major",
    from: KTM,
    to: { city: "Bhairahawa", code: "BWA" },
    airlines: ["Buddha Air", "Yeti Airlines", "Shree Airlines"],
    service: "Direct",
    duration: "≈ 30–35 min",
    distanceKm: 195,
    status: "daily",
    statusNote: "Yeti Airlines states daily service.",
    purpose: "Lumbini pilgrimage, Sunauli border",
    sources: [SOURCES.buddhaInfo, SOURCES.yetiBhairahawa],
  },
  {
    id: "ktm-kep",
    group: "major",
    from: KTM,
    to: KEP,
    airlines: ["Buddha Air", "Yeti Airlines", "Shree Airlines"],
    service: "Direct",
    duration: "≈ 50 min",
    distanceKm: 365,
    status: "daily",
    statusNote: "Yeti Airlines states daily service.",
    purpose: "Bardiya, gateway to Simikot, Jumla & Dolpa",
    sources: [SOURCES.buddhaInfo, SOURCES.yetiNepalgunj],
  },
  {
    id: "ktm-dhi",
    group: "major",
    from: KTM,
    to: { city: "Dhangadhi", code: "DHI" },
    airlines: ["Buddha Air", "Shree Airlines"],
    service: "Direct",
    duration: "≈ 50–60 min",
    distanceKm: 485,
    status: "daily",
    statusNote: "Shree Airlines' route page lists four daily flights.",
    purpose: "Far-West Nepal, Shuklaphanta, Khaptad by road",
    sources: [SOURCES.buddhaInfo, SOURCES.shreeDhangadhi],
  },
  {
    id: "ktm-jkr",
    group: "major",
    from: KTM,
    to: { city: "Janakpur", code: "JKR" },
    airlines: ["Buddha Air", "Yeti Airlines"],
    service: "Direct",
    duration: "≈ 25–30 min",
    distanceKm: 125,
    status: "daily",
    statusNote: "Yeti Airlines states daily service.",
    purpose: "Janaki Mandir, Mithila culture",
    sources: [SOURCES.buddhaInfo, SOURCES.yetiJanakpur],
  },
  {
    id: "ktm-bhr",
    group: "major",
    from: KTM,
    to: { city: "Bharatpur", code: "BHR" },
    airlines: ["Buddha Air"],
    service: "Direct",
    duration: "≈ 25 min",
    distanceKm: 90,
    status: "scheduled",
    statusNote: "Listed in Buddha Air's flight table; frequency not stated.",
    purpose: "Chitwan National Park via road to Sauraha",
    sources: [SOURCES.buddhaInfo],
  },
  {
    id: "ktm-sif",
    group: "major",
    from: KTM,
    to: { city: "Simara", code: "SIF" },
    airlines: ["Buddha Air", "Yeti Airlines"],
    service: "Direct",
    duration: "≈ 15 min",
    distanceKm: 70,
    status: "scheduled",
    statusNote: "Listed by both airlines; frequency not stated.",
    purpose: "Birgunj, Raxaul border, Parsa",
    sources: [SOURCES.buddhaInfo, SOURCES.yetiJanakpur],
  },
  {
    id: "ktm-rjb",
    group: "major",
    from: KTM,
    to: { city: "Rajbiraj", code: "RJB" },
    airlines: ["Buddha Air"],
    service: "Direct",
    duration: "≈ 40 min",
    distanceKm: 190,
    status: "scheduled",
    statusNote: "Listed in Buddha Air's flight table; frequency not stated.",
    purpose: "Saptari, eastern Madhesh",
    sources: [SOURCES.buddhaInfo],
  },
  {
    id: "ktm-tmi",
    group: "major",
    from: KTM,
    to: { city: "Tumlingtar", code: "TMI" },
    airlines: ["Buddha Air"],
    service: "Direct",
    duration: "≈ 35 min",
    distanceKm: 185,
    status: "scheduled",
    statusNote: "Listed in Buddha Air's flight table; frequency not stated.",
    purpose: "Makalu region treks, Arun valley",
    sources: [SOURCES.buddhaInfo],
  },
  {
    id: "ktm-skh",
    group: "major",
    from: KTM,
    to: SKH,
    airlines: ["Buddha Air"],
    service: "Direct",
    duration: "≈ 1 hr",
    distanceKm: 380,
    status: "scheduled",
    statusNote: "Listed in Buddha Air's flight table; frequency not stated.",
    purpose: "Karnali capital, onward to Jumla, Simikot & Talcha",
    sources: [SOURCES.buddhaInfo],
  },
  {
    id: "ktm-dnp",
    group: "major",
    from: KTM,
    to: { city: "Dang (Tulsipur)", code: "DNP" },
    airlines: ["Nepal Airlines"],
    service: "Direct",
    duration: "≈ 1 hr 20 min (timetabled)",
    distanceKm: 305,
    status: "set-days",
    statusNote: "Mon, Tue, Fri, Sat in the October 2026 timetable.",
    purpose: "Dang valley, Tulsipur and Ghorahi",
    sources: [SOURCES.nepalAirlines],
  },
  {
    id: "phh-bwa",
    group: "major",
    from: PHH,
    to: { city: "Bhairahawa", code: "BWA" },
    airlines: ["Buddha Air"],
    service: "Direct",
    duration: "≈ 20 min",
    distanceKm: 95,
    status: "daily",
    statusNote: "Buddha Air states daily direct flights.",
    purpose: "Pokhara ↔ Lumbini without the hill drive",
    sources: [SOURCES.buddhaInfo, SOURCES.buddhaPokhara],
  },
  {
    id: "phh-bhr",
    group: "major",
    from: PHH,
    to: { city: "Bharatpur", code: "BHR" },
    airlines: ["Buddha Air"],
    service: "Direct",
    duration: "≈ 20 min",
    distanceKm: 70,
    status: "daily",
    statusNote: "Buddha Air states daily direct flights.",
    purpose: "Pokhara ↔ Chitwan",
    sources: [SOURCES.buddhaInfo, SOURCES.buddhaPokhara],
  },
  {
    id: "phh-kep",
    group: "major",
    from: PHH,
    to: KEP,
    airlines: ["Buddha Air"],
    service: "Direct",
    duration: "≈ 38 min",
    distanceKm: 230,
    status: "scheduled",
    statusNote: "Listed in Buddha Air's flight table; frequency not stated.",
    purpose: "Pokhara ↔ western Nepal & Karnali gateways",
    sources: [SOURCES.buddhaInfo],
  },

  /* ── Mountain & remote routes ──────────────────────────── */
  {
    id: "rhp-lua",
    group: "mountain",
    from: { city: "Ramechhap (Manthali)", code: "RHP" },
    to: { city: "Lukla", code: "LUA" },
    airlines: ["Tara Air", "Summit Air", "Sita Air"],
    service: "Direct",
    duration: NOT_PUBLISHED,
    distanceKm: 75,
    status: "seasonal",
    statusNote:
      "Used for most Lukla flights in peak spring & autumn seasons. Ramechhap is a pre-dawn road transfer from Kathmandu.",
    purpose: "Everest Base Camp & Khumbu treks",
    sources: [SOURCES.ramechhap, SOURCES.taraDestinations],
  },
  {
    id: "ktm-lua",
    group: "mountain",
    from: KTM,
    to: { city: "Lukla", code: "LUA" },
    airlines: ["Tara Air", "Summit Air"],
    service: "Direct",
    duration: NOT_PUBLISHED,
    distanceKm: 135,
    status: "seasonal",
    statusNote: "Mainly outside peak seasons; departure point is confirmed by the airline at booking.",
    purpose: "Everest Base Camp & Khumbu treks",
    sources: [SOURCES.taraDestinations, SOURCES.summitLukla],
  },
  {
    id: "pkr-jmo",
    group: "mountain",
    from: { city: "Pokhara", code: "PKR/PHH" },
    to: { city: "Jomsom", code: "JMO" },
    airlines: ["Tara Air", "Summit Air"],
    service: "Direct",
    duration: NOT_PUBLISHED,
    distanceKm: 70,
    status: "scheduled",
    statusNote:
      "Morning flights — afternoon winds limit operations. Seven daily flights reported in October 2026 while the Mustang road is closed.",
    purpose: "Muktinath, Kagbeni, Lower & Upper Mustang",
    sources: [SOURCES.jomsom, SOURCES.taraDestinations],
  },
  {
    id: "ktm-jmo",
    group: "mountain",
    from: KTM,
    to: { city: "Jomsom", code: "JMO" },
    airlines: ["Buddha / Yeti / Shree", "Tara Air / Summit Air"],
    service: "Via Pokhara",
    duration: "≈ 25 min + Jomsom leg",
    distanceKm: 200,
    status: "connecting",
    statusNote: "No direct Kathmandu–Jomsom listing found. Usually planned with a Pokhara overnight.",
    purpose: "Muktinath pilgrimage, Mustang",
    sources: [SOURCES.buddhaInfo, SOURCES.jomsom],
  },
  {
    id: "kep-imk",
    group: "mountain",
    from: KEP,
    to: { city: "Simikot", code: "IMK" },
    airlines: ["Nepal Airlines", "Tara Air"],
    service: "Direct",
    duration: "≈ 1 hr (timetabled)",
    distanceKm: 210,
    status: "set-days",
    statusNote: "Nepal Airlines: Mon, Tue, Fri (Oct 2026). Tara Air describes service as irregular and weather-dependent.",
    purpose: "Humla, Kailash Mansarovar via Hilsa",
    sources: [SOURCES.nepalAirlines, SOURCES.taraDestinations],
  },
  {
    id: "skh-imk",
    group: "mountain",
    from: SKH,
    to: { city: "Simikot", code: "IMK" },
    airlines: ["Nepal Airlines"],
    service: "Direct",
    duration: "≈ 45 min (timetabled)",
    distanceKm: 155,
    status: "set-days",
    statusNote: "Monday in the October 2026 timetable.",
    purpose: "Humla, Kailash Mansarovar via Hilsa",
    sources: [SOURCES.nepalAirlines],
  },
  {
    id: "ktm-imk",
    group: "mountain",
    from: KTM,
    to: { city: "Simikot", code: "IMK" },
    airlines: ["Buddha / Yeti / Shree", "Nepal Airlines / Tara Air"],
    service: "Via Nepalgunj",
    duration: "≈ 50 min + 1 hr",
    distanceKm: 430,
    status: "connecting",
    statusNote: "Simikot flights leave early; plan a night in Nepalgunj.",
    purpose: "Kailash Mansarovar Yatra via Nepal",
    sources: [SOURCES.buddhaInfo, SOURCES.nepalAirlines],
  },
  {
    id: "kep-jum",
    group: "mountain",
    from: KEP,
    to: { city: "Jumla", code: "JUM" },
    airlines: ["Nepal Airlines"],
    service: "Direct",
    duration: "≈ 45 min (timetabled)",
    distanceKm: 140,
    status: "set-days",
    statusNote: "Mon, Wed, Fri (Oct 2026). Tara, Summit & Sita also list Jumla — ask for current days.",
    purpose: "Jumla, overland or trek to Rara",
    sources: [SOURCES.nepalAirlines, SOURCES.taraDestinations],
  },
  {
    id: "skh-jum",
    group: "mountain",
    from: SKH,
    to: { city: "Jumla", code: "JUM" },
    airlines: ["Nepal Airlines"],
    service: "Direct",
    duration: "≈ 35 min (timetabled)",
    distanceKm: 95,
    status: "set-days",
    statusNote: "Monday in the October 2026 timetable.",
    purpose: "Jumla, overland or trek to Rara",
    sources: [SOURCES.nepalAirlines],
  },
  {
    id: "kep-dop",
    group: "mountain",
    from: KEP,
    to: { city: "Dolpa (Juphal)", code: "DOP" },
    airlines: ["Nepal Airlines"],
    service: "Direct",
    duration: "≈ 45 min (timetabled)",
    distanceKm: 150,
    status: "set-days",
    statusNote: "Tue, Thu (Oct 2026). Tara & Summit also list Dolpa — ask for current days.",
    purpose: "Shey Phoksundo, Lower Dolpo treks",
    sources: [SOURCES.nepalAirlines, SOURCES.taraDestinations],
  },
  {
    id: "kep-rara",
    group: "mountain",
    from: KEP,
    to: { city: "Talcha (Rara)", code: "VNRR" },
    airlines: ["Nepal Airlines"],
    service: "Direct",
    duration: "≈ 50 min (timetabled)",
    distanceKm: 165,
    status: "set-days",
    statusNote: "Sun, Thu (Oct 2026). No IATA code is listed; VNRR is the ICAO code.",
    purpose: "Rara Lake, Mugu",
    sources: [SOURCES.nepalAirlines],
  },
  {
    id: "skh-rara",
    group: "mountain",
    from: SKH,
    to: { city: "Talcha (Rara)", code: "VNRR" },
    airlines: ["Nepal Airlines"],
    service: "Direct",
    duration: "≈ 35 min (timetabled)",
    distanceKm: 115,
    status: "set-days",
    statusNote: "Thursday in the October 2026 timetable.",
    purpose: "Rara Lake, Mugu",
    sources: [SOURCES.nepalAirlines],
  },
  {
    id: "kep-bju",
    group: "mountain",
    from: KEP,
    to: { city: "Bajura", code: "BJU" },
    airlines: ["Nepal Airlines"],
    service: "Direct",
    duration: "≈ 45 min (timetabled)",
    distanceKm: 155,
    status: "set-days",
    statusNote: "Sun, Wed (Oct 2026).",
    purpose: "Bajura, Badimalika region",
    sources: [SOURCES.nepalAirlines],
  },
  {
    id: "ktm-ppl",
    group: "mountain",
    from: KTM,
    to: { city: "Phaplu", code: "PPL" },
    airlines: ["Nepal Airlines", "Tara Air"],
    service: "Direct",
    duration: "≈ 45 min (timetabled)",
    distanceKm: 120,
    status: "set-days",
    statusNote: "Nepal Airlines: Sun, Wed, Thu, Fri (Oct 2026). Tara Air notes monsoon delays.",
    purpose: "Solukhumbu, lower Everest region",
    sources: [SOURCES.nepalAirlines, SOURCES.taraDestinations],
  },
  {
    id: "ktm-tpj",
    group: "mountain",
    from: KTM,
    to: { city: "Taplejung", code: "TPJ" },
    airlines: ["Nepal Airlines"],
    service: "Direct",
    duration: "≈ 1 hr (timetabled)",
    distanceKm: 235,
    status: "set-days",
    statusNote: "Mon, Thu, Sat (Oct 2026).",
    purpose: "Kanchenjunga region, Pathibhara",
    sources: [SOURCES.nepalAirlines],
  },
  {
    id: "ktm-bhp",
    group: "mountain",
    from: KTM,
    to: { city: "Bhojpur", code: "BHP" },
    airlines: ["Nepal Airlines"],
    service: "Direct",
    duration: "≈ 55 min (timetabled)",
    distanceKm: 180,
    status: "set-days",
    statusNote: "Mon, Wed, Sat (Oct 2026).",
    purpose: "Bhojpur hills, eastern Nepal",
    sources: [SOURCES.nepalAirlines],
  },
  {
    id: "ktm-rum",
    group: "mountain",
    from: KTM,
    to: { city: "Rumjatar", code: "RUM" },
    airlines: ["Nepal Airlines"],
    service: "Direct",
    duration: "≈ 45 min (timetabled)",
    distanceKm: 125,
    status: "set-days",
    statusNote: "Sun, Wed (Oct 2026).",
    purpose: "Okhaldhunga, lower Solu",
    sources: [SOURCES.nepalAirlines],
  },
];

export const routeById = (id: string) => {
  const route = routes.find((r) => r.id === id);
  if (!route) throw new Error(`Unknown route id: ${id}`);
  return route;
};

/* ---------- Directory filters ---------- */

export type RouteFilterId = "all" | "major" | "mountain" | "ktm" | "pokhara" | "west";

export const routeFilters: { id: RouteFilterId; label: string }[] = [
  { id: "all", label: "All routes" },
  { id: "major", label: "Major cities" },
  { id: "mountain", label: "Mountain & remote" },
  { id: "ktm", label: "From Kathmandu" },
  { id: "pokhara", label: "From Pokhara" },
  { id: "west", label: "Nepalgunj & Surkhet hubs" },
];

export function filterRoutes(list: FlightRoute[], filter: RouteFilterId, query: string) {
  const q = query.trim().toLowerCase();
  return list.filter((r) => {
    const byFilter =
      filter === "all" ||
      (filter === "major" && r.group === "major") ||
      (filter === "mountain" && r.group === "mountain") ||
      (filter === "ktm" && r.from.code === "KTM") ||
      (filter === "pokhara" && r.from.city === "Pokhara") ||
      (filter === "west" && (r.from.code === "KEP" || r.from.code === "SKH"));
    if (!byFilter) return false;
    if (!q) return true;
    return [r.from.city, r.from.code, r.to.city, r.to.code, r.purpose, ...r.airlines]
      .join(" ")
      .toLowerCase()
      .includes(q);
  });
}

/* ---------- Featured route cards ---------- */

export interface FeaturedRoute {
  routeId: string;
  image: string;
  imageAlt: string;
  headline: string;
}

export const featuredRoutes: FeaturedRoute[] = [
  {
    routeId: "ktm-phh",
    image: "/images/home/pokhara-view.jpg",
    imageAlt: "Phewa Lake in Pokhara with the Annapurna range reflected in its waters",
    headline: "The busiest hop in the country — lakeside Pokhara and the Annapurna treks.",
  },
  {
    routeId: "ktm-bwa",
    image: "/images/lumbini/maya-devi-temple-lumbini-rupandehi-nepal.jpg",
    imageAlt: "Maya Devi Temple in the Sacred Garden at Lumbini",
    headline: "Gautam Buddha International Airport puts Lumbini a short drive away.",
  },
  {
    routeId: "rhp-lua",
    image: "/koshi/everest-base-camp.jpg",
    imageAlt: "Tents at Everest Base Camp below the Khumbu Icefall",
    headline: "The classic start to the Everest Base Camp trek.",
  },
  {
    routeId: "pkr-jmo",
    image: "/images/home/muktinath-temple.jpg",
    imageAlt: "Muktinath Temple in Mustang under a clear Himalayan sky",
    headline: "A morning flight up the Kali Gandaki gorge towards Muktinath.",
  },
  {
    routeId: "kep-imk",
    image: "/images/kailash-mansarovar-yatra.webp",
    imageAlt: "The south face of Mount Kailash glowing gold at sunrise",
    headline: "The Humla airstrip used on Kailash Mansarovar journeys via Hilsa.",
  },
  {
    routeId: "ktm-jkr",
    image: "/images/madhesh/janaki-mandir.jpg",
    imageAlt: "The white facade of Janaki Mandir in Janakpur",
    headline: "Half an hour to Janaki Mandir and the heart of Mithila.",
  },
];

/* ---------- Mountain airports ---------- */

export interface MountainAirport {
  name: string;
  code: string;
  region: string;
  gateway: string;
  operators: string;
  reachedFrom: string;
  note: string;
}

export const mountainAirports: MountainAirport[] = [
  {
    name: "Lukla (Tenzing-Hillary)",
    code: "LUA",
    region: "Solukhumbu",
    gateway: "Everest Base Camp, Gokyo, Three Passes",
    operators: "Tara Air, Summit Air, Sita Air",
    reachedFrom: "Ramechhap in peak seasons; Kathmandu at other times",
    note: "A short, steep runway at altitude — flights stop whenever cloud closes the valley.",
  },
  {
    name: "Ramechhap (Manthali)",
    code: "RHP",
    region: "Ramechhap",
    gateway: "Departure point for Lukla",
    operators: "Tara Air, Summit Air, Sita Air",
    reachedFrom: "Road from Kathmandu, typically a pre-dawn transfer",
    note: "Not a destination in itself. Budget for the road transfer both ways and a possible night nearby.",
  },
  {
    name: "Jomsom",
    code: "JMO",
    region: "Mustang",
    gateway: "Muktinath, Kagbeni, Upper Mustang",
    operators: "Tara Air, Summit Air",
    reachedFrom: "Pokhara",
    note: "Flights run in the morning; strong afternoon winds limit operations.",
  },
  {
    name: "Simikot",
    code: "IMK",
    region: "Humla",
    gateway: "Kailash Mansarovar via Hilsa, Limi valley",
    operators: "Nepal Airlines, Tara Air",
    reachedFrom: "Nepalgunj; Surkhet on set days",
    note: "Tara Air describes service as irregular. Keep spare days on both sides.",
  },
  {
    name: "Jumla",
    code: "JUM",
    region: "Karnali",
    gateway: "Jumla valley, Rara by trek or road",
    operators: "Nepal Airlines (timetabled); others list the airport",
    reachedFrom: "Nepalgunj; Surkhet on set days",
    note: "Weekday-only timetable on Nepal Airlines — match your plan to flight days.",
  },
  {
    name: "Dolpa (Juphal)",
    code: "DOP",
    region: "Dolpa",
    gateway: "Shey Phoksundo, Lower Dolpo",
    operators: "Nepal Airlines (timetabled); Tara & Summit list Dolpa",
    reachedFrom: "Nepalgunj",
    note: "Upper Dolpo is a restricted area for foreign trekkers; Lower Dolpo needs its own permits.",
  },
  {
    name: "Talcha (Rara)",
    code: "VNRR",
    region: "Mugu",
    gateway: "Rara Lake",
    operators: "Nepal Airlines",
    reachedFrom: "Nepalgunj; Surkhet on set days",
    note: "Twice-weekly in the October 2026 timetable. No IATA code is published.",
  },
  {
    name: "Phaplu",
    code: "PPL",
    region: "Solukhumbu",
    gateway: "Salleri, lower Everest region",
    operators: "Nepal Airlines, Tara Air",
    reachedFrom: "Kathmandu",
    note: "Tara Air notes frequent weather delays, especially in the monsoon.",
  },
];

/* ---------- Airlines ---------- */

export interface AirlineInfo {
  name: string;
  type: string;
  website: SourceLink;
  network: string;
  baggage: string;
  policy: string;
  sources: SourceLink[];
}

export const airlines: AirlineInfo[] = [
  {
    name: "Buddha Air",
    type: "Trunk-route airline",
    website: { label: "buddhaair.com", href: "https://www.buddhaair.com/" },
    network:
      "Kathmandu to Pokhara, Biratnagar, Bhadrapur, Bhairahawa, Bharatpur, Nepalgunj, Dhangadhi, Janakpur, Simara, Rajbiraj, Tumlingtar and Surkhet; Pokhara to Bhairahawa, Bharatpur and Nepalgunj.",
    baggage: "Checked: 25 kg (Y), 20 kg (A, B), 15 kg (C, D, E). Excess baggage charged at sector rates.",
    policy:
      "Report at least 1 hour before departure; counters close 15 minutes before. No cancellation within 2 hours of departure. Full refund in all fare classes if Buddha Air cancels.",
    sources: [SOURCES.buddhaInfo, SOURCES.buddhaRules],
  },
  {
    name: "Yeti Airlines",
    type: "Trunk-route airline · ATR 72",
    website: { label: "yetiairlines.com", href: "https://yetiairlines.com/" },
    network:
      "Kathmandu to Pokhara, Nepalgunj, Bhairahawa, Biratnagar, Bhadrapur, Janakpur and Simara.",
    baggage:
      "NPR fares: 20–25 kg checked + 5 kg hand baggage by fare class (Super Flexi to Janakpur/Simara: 20 kg). Promotional fares: 10 kg + 5 kg.",
    policy:
      "Cancel or reschedule at least 1 hour before departure — inside the check-in hour the ticket is a no-show. Saver and promotional fares are non-refundable. Full refund if the airline cancels.",
    sources: [SOURCES.yetiPolicy],
  },
  {
    name: "Shree Airlines",
    type: "Trunk-route airline",
    website: { label: "shreeairlines.com", href: "https://www.shreeairlines.com/" },
    network:
      "Route pages for Kathmandu to Pokhara, Biratnagar, Bhadrapur, Bhairahawa, Nepalgunj and Dhangadhi. Its booking form also lists Bharatpur, Janakpur, Simara and Surkhet — ask us to check current operation.",
    baggage: "Checked: 20–30 kg by fare class. One hand bag up to 5 kg.",
    policy:
      "Cancellation fees rise from 12 hours before departure; no rescheduling within 2 hours. Full refund if a checked-in passenger's flight is delayed more than 2 hours.",
    sources: [SOURCES.shreeDhangadhi, SOURCES.shreePolicy],
  },
  {
    name: "Nepal Airlines",
    type: "National carrier · DHC-6 Twin Otter STOL",
    website: { label: "nepalairlines.com.np", href: "https://www.nepalairlines.com.np/domestic" },
    network:
      "Timetabled STOL sectors from Kathmandu (Phaplu, Taplejung, Bhojpur, Rumjatar, Dang and others), Nepalgunj (Simikot, Jumla, Dolpa, Talcha, Bajura) and Surkhet (Simikot, Jumla, Talcha).",
    baggage: "Domestic allowance is not stated on the public baggage page — confirm at booking.",
    policy: "Schedule published monthly and “subject to change without prior notice”. Domestic booking at raonline.nepalairlines.com.np.",
    sources: [SOURCES.nepalAirlines],
  },
  {
    name: "Tara Air",
    type: "STOL mountain operator",
    website: { label: "taraair.com", href: "https://taraair.com/" },
    network:
      "Scheduled and charter flights to Lukla, Jomsom, Phaplu, Simikot, Dolpa, Jumla and Rara; Lukla from Kathmandu or Ramechhap.",
    baggage: "Not published on the website — mountain sectors usually allow less than trunk routes. Confirm at booking.",
    policy: "Fare and cancellation terms are not shown publicly; we confirm them before you pay.",
    sources: [SOURCES.taraDestinations],
  },
  {
    name: "Summit Air",
    type: "STOL mountain operator",
    website: { label: "summitair.com.np", href: "https://www.summitair.com.np/" },
    network:
      "Lists Lukla, Ramechhap, Jomsom, Dolpa, Rara, Jumla, Simikot, Bajura, Nepalgunj, Pokhara and Kathmandu. Lukla high seasons: March–May and September–November.",
    baggage: "Not published on the website — confirm at booking.",
    policy: "Cancellation policy is on its website; we confirm the current terms before you pay.",
    sources: [SOURCES.summitLukla],
  },
  {
    name: "Sita Air",
    type: "STOL mountain operator",
    website: { label: "sitaair.com.np", href: "https://www.sitaair.com.np/" },
    network: "Reported operating Ramechhap–Lukla. Other current routes could not be confirmed from its website.",
    baggage: "Not verified — confirm at booking.",
    policy: "Not verified — confirm at booking.",
    sources: [SOURCES.ramechhap],
  },
];

/* ---------- Fare categories (no amounts) ---------- */

export interface FareCategory {
  traveller: string;
  fare: string;
  detail: string;
}

export const fareCategories: FareCategory[] = [
  {
    traveller: "Nepalese citizens",
    fare: "NPR fares",
    detail: "All fare classes. Citizenship certificate, National ID or passport at check-in.",
  },
  {
    traveller: "Indian citizens",
    fare: "NPR fares",
    detail:
      "Buddha Air, Yeti and Shree apply NPR fares to Indian nationals. Carry a passport or Voter ID. OCI cardholders pay USD fares.",
  },
  {
    traveller: "Other SAARC nationals",
    fare: "USD fares",
    detail:
      "We found no separate SAARC fare in these airlines' rules — nationalities other than Nepali and Indian are on USD fares.",
  },
  {
    traveller: "Other international travellers",
    fare: "USD fares",
    detail: "Passport at check-in. Shree Airlines sells USD fares in one class only.",
  },
  {
    traveller: "Foreign residents of Nepal",
    fare: "Residential fares",
    detail: "Some airlines offer these with a non-tourist visa or diplomatic/organisation ID — checked at the airport.",
  },
];

/* ---------- Weather, safety & booking guidance ---------- */

export interface GuidanceItem {
  title: string;
  text: string;
}

export const guidance: GuidanceItem[] = [
  {
    title: "Mountain weather decides the day",
    text: "Lukla, Jomsom, Simikot, Juphal and Talcha are flown visually. Cloud, rain or wind at either end — or along the valley — grounds flights, sometimes for several days.",
  },
  {
    title: "Fly early",
    text: "Mountain flights run in the morning. At Jomsom, strong afternoon winds limit operations; later departures are the first to be cancelled.",
  },
  {
    title: "Season by season",
    text: "Monsoon (roughly June–September) brings low cloud and the most disruption. Winter mornings bring fog in the Terai and snow at high strips. Spring and autumn are steadier — and busiest.",
  },
  {
    title: "ID and reporting time",
    text: "Carry government photo ID matching the ticket. Buddha Air asks passengers to arrive at least 1 hour before departure; miss check-in and the ticket is treated as a no-show.",
  },
  {
    title: "Baggage limits",
    text: "Allowances vary by airline and fare class, from 10 kg on some promotional fares to 30 kg. Small mountain aircraft carry less. Excess baggage is charged per kg and may not fly on the same aircraft.",
  },
  {
    title: "Refunds and rescheduling",
    text: "Each airline sets its own rules. Cheaper fares are often non-refundable, most airlines stop changes 1–2 hours before departure, and a no-show usually forfeits the fare.",
  },
  {
    title: "Build in buffer days",
    text: "Add at least one spare day after Lukla, Jomsom or Simikot before an international flight. Delays can mean extra hotel nights, meals and transfers — not usually covered by the airline.",
  },
  {
    title: "Travel insurance",
    text: "Choose a policy that covers flight delay, missed connections and, for treks, high-altitude helicopter evacuation.",
  },
];

/* ---------- Trip planning ---------- */

export interface PlanningLink {
  label: string;
  href: string;
}

export interface PlanningItem {
  title: string;
  flight: string;
  onward: string;
  needs: string;
  links: PlanningLink[];
}

export const planning: PlanningItem[] = [
  {
    title: "Pokhara & Annapurna treks",
    flight: "Kathmandu → Pokhara, about 25 minutes.",
    onward: "Road transfer from Pokhara to trailheads such as Nayapul or Kande.",
    needs: "Annapurna Conservation Area permit for foreign trekkers; a licensed guide is required on most trekking routes.",
    links: [
      { label: "Gandaki Province", href: "/destinations/gandaki-province" },
      { label: "Annapurna Scenic Flight", href: "/activities/domestic-flights/annapurna-scenic-flights" },
      { label: "Trekking packages", href: "/packages/nepal/trekking-hiking-packages" },
    ],
  },
  {
    title: "Jomsom & Muktinath",
    flight: "Kathmandu → Pokhara, then a morning Pokhara → Jomsom flight.",
    onward:
      "Jeep or trek from Jomsom up to Muktinath. In October 2026 the Beni–Mustang road was closed by flood damage, so flights are carrying extra demand.",
    needs: "Annapurna Conservation Area permit for foreign visitors; Upper Mustang needs a separate restricted-area permit.",
    links: [
      { label: "Muktinath by helicopter", href: "/activities/helicopter-tours/muktinath-temple" },
      { label: "Spiritual pilgrimage tours", href: "/packages/nepal/spiritual-pilgrimage-tours" },
      { label: "Mustang Circuit Trek", href: "/adventure/mustang-circuit-trek" },
    ],
  },
  {
    title: "Lukla & Everest Base Camp",
    flight: "Ramechhap → Lukla in peak seasons, Kathmandu → Lukla at other times.",
    onward: "Trek begins at Lukla. Ramechhap departures need an early road transfer from Kathmandu.",
    needs: "Sagarmatha National Park and local Khumbu entry fees. Keep at least one spare day on the way out.",
    links: [
      { label: "Everest Base Camp Trek", href: "/adventure/everest-base-camp-trek" },
      { label: "Everest Three Passes Trek", href: "/adventure/everest-three-passes-trek" },
      { label: "Base camp treks", href: "/packages/nepal/base-camp-treks" },
    ],
  },
  {
    title: "Nepalgunj, Simikot & Kailash",
    flight: "Kathmandu → Nepalgunj, overnight, then Nepalgunj → Simikot on a flight day.",
    onward: "From Simikot, the Kailash route continues to Hilsa and the Tibet border by helicopter or on foot.",
    needs: "Kailash travel needs Tibet entry documents arranged by an authorised operator. Upper Humla is a restricted area for foreign trekkers.",
    links: [
      { label: "Kailash Mansarovar Yatra", href: "/packages/kailash-mansarovar-yatra" },
      { label: "Kailash Mansarovar guide", href: "/spiritual-journeys/kailash-mansarovar" },
      { label: "Kailash scenic flights", href: "/activities/flights/kailash-mansarovar-scenic-flights" },
    ],
  },
  {
    title: "Rara Lake & Karnali",
    flight: "Nepalgunj or Surkhet → Talcha on timetabled days; or fly to Jumla and continue overland.",
    onward: "From Talcha, a short walk or drive to the lake. From Jumla, a multi-day trek or a long road journey.",
    needs: "Rara National Park entry fee. Accommodation near the lake is limited — book ahead.",
    links: [
      { label: "Rara Lake", href: "/offbeat-unexplored/rara-lake" },
      { label: "Karnali Province", href: "/destinations/karnali-province" },
    ],
  },
  {
    title: "Lumbini, Chitwan & the Terai",
    flight: "Kathmandu or Pokhara → Bhairahawa for Lumbini; → Bharatpur for Chitwan.",
    onward: "Road transfer to Lumbini's Sacred Garden or to Sauraha for Chitwan National Park.",
    needs: "National park entry fees for Chitwan; no permits needed for Lumbini.",
    links: [
      { label: "Lumbini Province", href: "/destinations/lumbini-province" },
      { label: "Bagmati Province & Chitwan", href: "/destinations/bagmati-province" },
    ],
  },
  {
    title: "Far-West & Eastern Nepal",
    flight: "Kathmandu → Dhangadhi for the Far-West; → Bhadrapur or Biratnagar for the east.",
    onward: "Road onward to Khaptad, Shuklaphanta, Ilam or the eastern hills.",
    needs: "Long drives — plan overnight stops. National park fees where applicable.",
    links: [
      { label: "Far-West Nepal Circuit", href: "/packages/exclusive-farwest-nepal-circuit" },
      { label: "Khaptad National Park", href: "/offbeat-unexplored/khaptad-national-park" },
      { label: "Koshi Province", href: "/destinations/koshi-province" },
    ],
  },
];

/* ---------- FAQ ---------- */

export const faqs = [
  {
    question: "Which airlines fly domestic routes in Nepal?",
    answer:
      "Buddha Air, Yeti Airlines and Shree Airlines run the main city routes. Nepal Airlines, Tara Air, Summit Air and Sita Air fly the smaller mountain and remote airstrips. Not every airline serves every airport.",
  },
  {
    question: "How long is the flight from Kathmandu to Pokhara?",
    answer:
      "Buddha Air and Yeti Airlines both state about 25 minutes. The straight-line distance is about 145 km.",
  },
  {
    question: "Do Indian citizens pay the same domestic fare as Nepalese citizens?",
    answer:
      "On Buddha Air, Yeti Airlines and Shree Airlines, Indian nationals are eligible for NPR fares, the same as Nepalese citizens. OCI cardholders and other foreign nationals pay USD fares. Check the current rules when booking.",
  },
  {
    question: "Do Lukla flights leave from Kathmandu or Ramechhap?",
    answer:
      "In peak spring and autumn seasons most Lukla flights operate from Ramechhap (Manthali), a road journey from Kathmandu. At other times some depart from Kathmandu. The airline confirms the departure airport on your ticket.",
  },
  {
    question: "What happens if my mountain flight is cancelled for weather?",
    answer:
      "You are usually moved to the next available flight, which may be the next day. Airlines' rules differ on refunds, and extra hotel nights and transfers are normally at your own cost — which is why we build buffer days into mountain itineraries.",
  },
  {
    question: "Can Karvaahh book my domestic flights?",
    answer:
      "Yes. Send us your route, dates, nationality and passenger names as on ID, and we will confirm current availability, fares and baggage rules before you pay.",
  },
];

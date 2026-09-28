/* ------------------------------------------------------------------
   Paragliding in Nepal — page content
   Edit copy, prices and image paths here; components read from this file.
   ------------------------------------------------------------------ */

/** Replace these with your own files in /public/images/activities/paragliding/ */
export const IMAGES = {
  hero: "/images/activities/paragliding/hero-sarangkot.jpg",
  intro: "/images/activities/paragliding/intro-phewa-lake.jpg",
  parahawking: "/images/activities/paragliding/parahawking.jpg",
  events: "/images/activities/paragliding/autumn-competition.jpg",
  cta: "/images/activities/paragliding/cta-annapurna-glide.jpg",
  og: "/images/activities/paragliding/og-paragliding-nepal.jpg",
  sites: {
    sarangkot: "/images/activities/paragliding/site-sarangkot.jpg",
    toripani: "/images/activities/paragliding/site-toripani.jpg",
    bhedetar: "/images/activities/paragliding/site-bhedetar.jpg",
    bandipur: "/images/activities/paragliding/site-bandipur.jpg",
    chandragiri: "/images/activities/paragliding/site-chandragiri.jpg",
    tansen: "/images/activities/paragliding/site-tansen.jpg",
    antu: "/images/activities/paragliding/site-antu-danda.jpg",
    dang: "/images/activities/paragliding/site-dang.jpg",
  },
  flights: {
    standard: "/images/activities/paragliding/flight-standard.jpg",
    thermal: "/images/activities/paragliding/flight-thermal.jpg",
    acro: "/images/activities/paragliding/flight-acro.jpg",
    xc: "/images/activities/paragliding/flight-xc.jpg",
    parahawking: "/images/activities/paragliding/flight-parahawking.jpg",
  },
} as const;

/** Internal link targets — verify these match live routes */
export const LINKS = {
  plan: "/contact?activity=paragliding",
  adventures: "/activities/adventure",
  flightsAnchor: "#flights",
  parahawkingAnchor: "#parahawking",
} as const;

export const HERO_FACTS = [
  { label: "Main launch site", value: "Sarangkot" },
  { label: "Standard tandem", value: "15–25 min" },
  { label: "Flights from", value: "US$70" },
] as const;

/* ---------------- Altitude ---------------- */

export interface AltitudeStep {
  id: string;
  name: string;
  metres: number;
  display: string;
  caption: string;
}

export const ALTITUDE_MAX = 3500;

export const ALTITUDE_STEPS: AltitudeStep[] = [
  {
    id: "bandipur",
    name: "Bandipur",
    metres: 1030,
    display: "1,030 m",
    caption: "Gentle hill launch above the old Newar trading town — a relaxed first flight.",
  },
  {
    id: "sarangkot",
    name: "Sarangkot",
    metres: 1592,
    display: "1,592 m",
    caption: "Nepal's main launch, with Phewa Lake below and the Annapurnas ahead.",
  },
  {
    id: "xc",
    name: "Cross-country",
    metres: 3500,
    display: "up to ~3,500 m",
    caption: "Strong autumn thermals can lift experienced pilots far above launch height.",
  },
];

/* ---------------- Flying sites ---------------- */

export type SiteStatus =
  | "Main hub"
  | "Established"
  | "Seasonal operators"
  | "Limited operators"
  | "Event-based"
  | "Emerging";

export interface FlyingSite {
  id: keyof typeof IMAGES.sites;
  name: string;
  province: string;
  district: string;
  altitude: string;
  experience: string;
  season: string;
  price: string;
  status: SiteStatus;
  alt: string;
}

export const SITES: FlyingSite[] = [
  {
    id: "sarangkot",
    name: "Sarangkot",
    province: "Gandaki",
    district: "Kaski",
    altitude: "1,592 m",
    experience: "Glide over Phewa Lake with Machhapuchhre and the Annapurna range in view, landing on the lakeshore.",
    season: "Sep–Apr · best Oct–Nov",
    price: "US$70–90",
    status: "Main hub",
    alt: "Tandem paragliders launching from Sarangkot hill above Phewa Lake, Pokhara",
  },
  {
    id: "toripani",
    name: "Toripani / Dhikurpokhari",
    province: "Gandaki",
    district: "Kaski",
    altitude: "1,700 m",
    experience: "Higher, quieter launch west of Pokhara, favoured for longer thermal flights back towards the lake.",
    season: "Oct–Mar",
    price: "US$110–150",
    status: "Established",
    alt: "Paraglider soaring above the green ridges near Toripani, west of Pokhara",
  },
  {
    id: "bhedetar",
    name: "Bhedetar",
    province: "Koshi",
    district: "Sunsari",
    altitude: "1,420 m",
    experience: "Hill-station launch looking out over the Terai plains towards Dharan — eastern Nepal's flying spot.",
    season: "Oct–Mar",
    price: "On request",
    status: "Seasonal operators",
    alt: "View from Bhedetar hill across the plains of eastern Nepal",
  },
  {
    id: "bandipur",
    name: "Bandipur",
    province: "Gandaki",
    district: "Tanahun",
    altitude: "1,030 m",
    experience: "Short, scenic flights above terraced hills and the Marsyangdi valley, easily paired with a heritage stay.",
    season: "Oct–Mar",
    price: "On request",
    status: "Seasonal operators",
    alt: "Paraglider above the terraced hills around Bandipur",
  },
  {
    id: "chandragiri",
    name: "Chandragiri / Godavari–Phulchowki",
    province: "Bagmati",
    district: "Kathmandu / Lalitpur",
    altitude: "2,100–2,700 m",
    experience: "Rim-of-the-valley launches with Kathmandu spread below — the closest flying to the capital.",
    season: "Oct–Mar",
    price: "On request",
    status: "Limited operators",
    alt: "Forested ridge on the rim of the Kathmandu Valley at sunrise",
  },
  {
    id: "tansen",
    name: "Srinagar Danda, Tansen",
    province: "Lumbini",
    district: "Palpa",
    altitude: "1,525 m",
    experience: "Launch from the hill above old Tansen, with a sea of morning cloud over the Madi valley.",
    season: "Oct–Mar",
    price: "On request",
    status: "Seasonal operators",
    alt: "Morning cloud filling the valley below Srinagar Danda, Tansen",
  },
  {
    id: "antu",
    name: "Antu Danda",
    province: "Koshi",
    district: "Ilam",
    altitude: "2,320 m",
    experience: "Tea-country ridge famous for sunrise over Kanchenjunga; flights are usually tied to local events.",
    season: "Oct–Mar",
    price: "On request",
    status: "Event-based",
    alt: "Sunrise over tea-covered hills at Antu Danda, Ilam",
  },
  {
    id: "dang",
    name: "Dang / Ghorahi ridges",
    province: "Lumbini",
    district: "Dang",
    altitude: "900 m",
    experience: "Low inner-Terai ridges above the wide Dang valley — a developing site in western Nepal.",
    season: "Oct–Mar",
    price: "On request",
    status: "Emerging",
    alt: "Low ridges above the broad Dang valley in western Nepal",
  },
];

/* ---------------- Flight types ---------------- */

export interface FlightType {
  id: keyof typeof IMAGES.flights;
  name: string;
  duration: string;
  maxMinutes: number;
  price: string;
  intensity: 1 | 2 | 3 | 4 | 5;
  summary: string;
  difference: string;
  bestFor: string;
  alt: string;
  link?: { href: string; label: string };
}

export const FLIGHTS: FlightType[] = [
  {
    id: "standard",
    name: "Standard tandem",
    duration: "15–25 min",
    maxMinutes: 25,
    price: "US$70–90",
    intensity: 1,
    summary: "The classic Sarangkot flight, from launch to the Phewa lakeshore.",
    difference: "Smooth, mostly straight glides with time to take in the mountains. No experience needed.",
    bestFor: "First-timers and families",
    alt: "Tandem pilot and passenger gliding calmly above Phewa Lake",
  },
  {
    id: "thermal",
    name: "Long / thermal flight",
    duration: "30–45 min",
    maxMinutes: 45,
    price: "US$110–150",
    intensity: 2,
    summary: "More airtime, circling in rising air to gain height.",
    difference: "Your pilot climbs in thermals alongside eagles and vultures, often reaching well above launch.",
    bestFor: "Anyone who wants the view to last",
    alt: "Paraglider circling high in a thermal above forested hills",
  },
  {
    id: "acro",
    name: "Acro tandem",
    duration: "15–20 min",
    maxMinutes: 20,
    price: "US$120–170",
    intensity: 5,
    summary: "Spirals, wingovers and steep turns with a specialist pilot.",
    difference: "Strong G-forces and fast manoeuvres over the lake. Shorter, but far more intense.",
    bestFor: "Thrill-seekers with a steady stomach",
    alt: "Paraglider banking into a steep spiral over the lake",
  },
  {
    id: "xc",
    name: "Cross-country tandem",
    duration: "1–3 hrs",
    maxMinutes: 180,
    price: "US$180–300",
    intensity: 3,
    summary: "A real journey along the ridges, landing somewhere new.",
    difference: "Covers distance rather than circling one hill, and needs a ground retrieve back to Pokhara.",
    bestFor: "Repeat flyers and aviation enthusiasts",
    alt: "Paraglider flying along a Himalayan foothill ridge far from launch",
  },
  {
    id: "parahawking",
    name: "Parahawking",
    duration: "30 min",
    maxMinutes: 30,
    price: "US$180–260",
    intensity: 2,
    summary: "Fly with a trained bird of prey guiding you to thermals.",
    difference: "A rare Pokhara experience where the bird flies alongside and returns to the pilot's glove.",
    bestFor: "Wildlife lovers and photographers",
    alt: "Trained bird of prey flying beside a tandem paraglider",
    link: { href: LINKS.parahawkingAnchor, label: "How parahawking works" },
  },
];

/* ---------------- Season ---------------- */

export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

export interface SeasonLane {
  id: string;
  label: string;
  note: string;
  months: number[]; // 0 = Jan
  tone: "main" | "peak" | "other";
}

export const SEASON_LANES: SeasonLane[] = [
  {
    id: "main",
    label: "Main flying period",
    note: "September to April",
    months: [8, 9, 10, 11, 0, 1, 2, 3],
    tone: "main",
  },
  {
    id: "peak",
    label: "Best at Sarangkot",
    note: "October and November",
    months: [9, 10],
    tone: "peak",
  },
  {
    id: "other",
    label: "Other sites strongest",
    note: "October to March",
    months: [9, 10, 11, 0, 1, 2],
    tone: "other",
  },
];

/* ---------------- Price factors ---------------- */

export const PRICE_FACTORS = [
  { icon: "clock", title: "Flight duration", text: "Longer airtime means more pilot time and a higher fare." },
  { icon: "wing", title: "Flight type", text: "Acro, cross-country and parahawking need specialist pilots or equipment." },
  { icon: "camera", title: "Media package", text: "Handheld GoPro footage and photos are usually an optional add-on." },
  { icon: "route", title: "Cross-country retrieve", text: "Landing far from launch means a vehicle has to collect you." },
] as const;

export const MEDIA_ADDON = { title: "GoPro / camera media add-on", price: "US$20–45" } as const;

/* ---------------- Why Karvaahh ---------------- */

export const TRUST_POINTS = [
  { icon: "pin", title: "Local Nepal knowledge", text: "We know which sites fly well in which month, and how to fit them into a real itinerary." },
  { icon: "wing", title: "Adventure coordination", text: "We arrange your flight with established operators and confirm timings around the weather." },
  { icon: "calendar", title: "Flexible planning", text: "Built-in buffer days so a cloudy morning doesn't cost you your flight." },
  { icon: "car", title: "Ground transport", text: "Airport pick-ups, Kathmandu–Pokhara transfers and retrieves handled for you." },
  { icon: "map", title: "Customised Nepal trips", text: "Combine flying with treks, lakes, heritage towns and wildlife in one plan." },
] as const;

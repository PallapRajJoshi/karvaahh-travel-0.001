/**
 * Zip Flying — page content.
 * All figures are approximate/indicative as supplied in the brief.
 * Do not tighten "~" / "near" into exact specifications.
 */

export type SiteStatus = "ESTABLISHED" | "EMERGING";

export interface HeroStat {
  value: string;
  unit: string;
  label: string;
}

export interface AdventureSite {
  id: string;
  name: string;
  region: string;
  specification: string;
  distinctive: string;
  description: string;
  price: string;
  status: SiteStatus;
  cta: { label: string; href: string };
  image?: { src: string; alt: string };
}

export interface SimpleItem {
  title: string;
  text: string;
  href?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export const PAGE_PATH = "/activities/adventure/zip-flying";

/* ------------------------------------------------------------------ */
/* Contact — TODO: replace with the single consolidated site number.  */
/* Leave empty to keep the WhatsApp button disabled (no dead link).   */
/* ------------------------------------------------------------------ */
export const WHATSAPP_NUMBER = ""; // e.g. "9779800000000" (country code, no +)
export const ENQUIRY_ANCHOR = "#enquiry";

/* Internal routes — verify against the live project. */
export const ROUTES = {
  home: "/",
  activities: "/activities",
  adventure: "/activities/adventure",
  paragliding: "/activities/adventure/paragliding",
  ultraLight: "/activities/adventure/ultra-light-flight",
  bungee: "/activities/adventure/bungee-jumping",
  gandaki: "/destinations/gandaki-province",
  bagmati: "/destinations/bagmati-province",
  koshi: "/destinations/koshi-province",
  lumbini: "/destinations/lumbini-province",
} as const;

export const IMG = {
  hero: "/images/activities/zip-flying/pokhara-zipflyer.jpg",
  featured: "/images/activities/zip-flying/zipflyer-nepal-sarangkot.jpg",
  sarangkot: "/images/activities/zip-flying/sarangkot-zipline.jpg",
  hemja: "/images/activities/zip-flying/hemja-zipline.jpg",
  speed: "/images/activities/zip-flying/pokhara-zipflyer-speed.jpg",
  kushma: "/images/activities/zip-flying/kushma-zipline.jpg",
  adventure: "/images/activities/zip-flying/nepal-zipline-adventure.jpg",
} as const;

/* ------------------------------ Hero ------------------------------ */

export const heroStats: HeroStat[] = [
  { value: "~1.8", unit: "KM", label: "LINE LENGTH" },
  { value: "~600", unit: "M", label: "VERTICAL DROP" },
  { value: "~120", unit: "KM/H", label: "TOP SPEED" },
];

export const hero = {
  eyebrow: "ADVENTURE ACTIVITIES · POKHARA",
  title: "Zip Flying in Pokhara",
  subtitle:
    "Fly from Sarangkot toward Hemja on one of Nepal's most dramatic high-speed zipline experiences.",
  support:
    "The Pokhara ZipFlyer spans approximately 1.8 km, drops around 600 metres vertically and reaches speeds near 120 km/h.",
  location: "Sarangkot → Hemja · Pokhara",
  badge: "ESTABLISHED",
  primaryCta: "Check ZipFlyer Options",
  secondaryCta: "Plan From Pokhara",
};

/* ---------------------------- Numbers ---------------------------- */

export const numbers = {
  heading: "The Numbers Are the Experience",
  text: "The Pokhara ZipFlyer is designed around a long, steep and fast descent from the Sarangkot area toward Hemja.",
  items: [
    { value: "1.8", unit: "KM", text: "Approximate zipline length." },
    { value: "600", unit: "M", text: "Approximate vertical drop." },
    { value: "120", unit: "KM/H", text: "Reported speeds near the top end of the ride." },
  ],
  note: "Exact operating specifications and ride conditions should be confirmed with the operator.",
};

/* ---------------------------- Featured --------------------------- */

export const featured = {
  heading: "ZipFlyer Nepal — Sarangkot to Hemja",
  location: "Gandaki / Kaski",
  specs: [
    { label: "Length", value: "~1.8 km" },
    { label: "Vertical drop", value: "~600 m" },
    { label: "Speed", value: "Near 120 km/h" },
    { label: "Indicative price", value: "US$55–100" },
  ],
  description:
    "Among the steepest and fastest ziplines in the world. The three-line setup allows groups to ride side-by-side.",
  status: "ESTABLISHED" as SiteStatus,
  cta: "Plan Your ZipFlyer",
  image: {
    src: IMG.featured,
    alt: "ZipFlyer Nepal launch area at Sarangkot above Pokhara",
  },
};

/* ----------------------------- Group ----------------------------- */

export const rideTogether = {
  heading: "Ride Together",
  text: "The ZipFlyer Nepal setup uses three lines side-by-side, allowing groups to experience the descent together.",
  items: [
    { title: "GROUP RIDES", text: "Multiple riders can descend together." },
    { title: "LONG DESCENT", text: "Approximately 1.8 km of zipline travel." },
    { title: "MOUNTAIN LANDSCAPE", text: "The route connects the Sarangkot launch area with Hemja." },
  ] as SimpleItem[],
  cta: "Ask About Group Rides",
};

/* ------------------------- Other sites --------------------------- */

export const zipFlyerSite: AdventureSite = {
  id: "zipflyer-nepal",
  name: "ZipFlyer Nepal",
  region: "Gandaki / Kaski",
  specification: "~1.8 km · ~600 m drop · ~120 km/h",
  distinctive: "High-speed, steep, three-line group ride",
  description: featured.description,
  price: "US$55–100",
  status: "ESTABLISHED",
  cta: { label: "Plan Your ZipFlyer", href: ENQUIRY_ANCHOR },
  image: { src: IMG.featured, alt: featured.image.alt },
};

export const otherSites: AdventureSite[] = [
  {
    id: "kushma",
    name: "Kushma Zipline",
    region: "Gandaki / Parbat",
    specification: "Gorge-crossing line",
    distinctive: "Kaligandaki + bungee + sky cycling",
    description: "Crosses the Kaligandaki gorge alongside the bungee and sky cycling experiences.",
    price: "NPR 2,500–5,500",
    status: "ESTABLISHED",
    cta: { label: "Explore Kushma", href: ROUTES.bungee },
    image: { src: IMG.kushma, alt: "Zipline crossing the Kaligandaki gorge at Kushma, Parbat" },
  },
  {
    id: "chandragiri",
    name: "Chandragiri",
    region: "Bagmati / Kathmandu",
    specification: "Short ridge line",
    distinctive: "Cable car + temple",
    description: "A short zipline experience bundled with the Chandragiri cable car and hilltop temple.",
    price: "NPR 1,500–3,000",
    status: "ESTABLISHED",
    cta: { label: "Explore Chandragiri", href: ROUTES.bagmati },
  },
  {
    id: "dhulikhel",
    name: "Dhulikhel / Namobuddha",
    region: "Bagmati / Kavre",
    specification: "Short lines",
    distinctive: "Adventure parks near Kathmandu",
    description: "Day-trip adventure parks close to Kathmandu.",
    price: "NPR 1,200–3,000",
    status: "ESTABLISHED",
    cta: { label: "Explore Dhulikhel", href: ROUTES.bagmati },
  },
  {
    id: "godavari",
    name: "Godavari Adventure Park",
    region: "Bagmati / Lalitpur",
    specification: "Short lines + rope course",
    distinctive: "Family / school groups",
    description: "Family and school-group adventure product.",
    price: "NPR 1,000–2,500",
    status: "ESTABLISHED",
    cta: { label: "Explore Godavari", href: ROUTES.bagmati },
  },
  {
    id: "sundarijal",
    name: "Sundarijal / Shivapuri Edge",
    region: "Bagmati / Kathmandu",
    specification: "Short lines",
    distinctive: "Hiking + canyoning",
    description: "Combined with hiking and canyoning experiences.",
    price: "NPR 1,500–3,500",
    status: "EMERGING",
    cta: { label: "Explore Sundarijal", href: ROUTES.bagmati },
  },
  {
    id: "bhedetar",
    name: "Bhedetar",
    region: "Koshi / Sunsari",
    specification: "Ridge line over forest",
    distinctive: "Forest + paragliding",
    description: "Eastern Nepal's zipline experience, paired with paragliding.",
    price: "NPR 1,500–3,500",
    status: "EMERGING",
    cta: { label: "Explore Bhedetar", href: ROUTES.koshi },
  },
  {
    id: "tansen",
    name: "Tansen / Srinagar Danda",
    region: "Lumbini / Palpa",
    specification: "Short line",
    distinctive: "Municipal adventure installation",
    description: "New municipal adventure installation.",
    price: "NPR 1,200–3,000",
    status: "EMERGING",
    cta: { label: "Explore Tansen", href: ROUTES.lumbini },
  },
  {
    id: "ilam",
    name: "Ilam",
    region: "Koshi / Ilam",
    specification: "Tea-garden line",
    distinctive: "Tea slopes",
    description: "Ride above tea-growing slopes in eastern Nepal.",
    price: "NPR 1,500–3,000",
    status: "EMERGING",
    cta: { label: "Explore Ilam", href: ROUTES.koshi },
  },
  {
    id: "bardiya-dang",
    name: "Bardiya / Dang Parks",
    region: "Lumbini",
    specification: "Short lines",
    distinctive: "Local adventure parks",
    description: "Local adventure park experiences.",
    price: "NPR 1,000–2,500",
    status: "EMERGING",
    cta: { label: "Explore Options", href: ROUTES.lumbini },
  },
];

/** Table uses short names from the brief. */
export const comparisonRows: AdventureSite[] = [
  zipFlyerSite,
  ...otherSites.map((s) => ({
    ...s,
    name:
      {
        kushma: "Kushma",
        godavari: "Godavari",
        sundarijal: "Sundarijal",
        tansen: "Tansen",
        "bardiya-dang": "Bardiya / Dang",
      }[s.id] ?? s.name,
    specification:
      { godavari: "Short + rope course", bhedetar: "Ridge line", kushma: "Gorge-crossing" }[s.id] ??
      s.specification,
  })),
];

/* ------------------------------ Why ------------------------------ */

export const why = {
  heading: "Why the Pokhara ZipFlyer Gets the Attention",
  items: [
    { title: "LENGTH", value: "1.8", unit: "km", text: "Approximately 1.8 kilometres." },
    { title: "VERTICAL DROP", value: "600", unit: "m", text: "Approximately 600 metres." },
    { title: "SPEED", value: "120", unit: "km/h", text: "Speeds near 120 km/h." },
    { title: "GROUP FORMAT", value: "3", unit: "lines", text: "Three lines allow groups to ride side-by-side." },
  ],
};

/* ----------------------------- Price ----------------------------- */

export const pricing = {
  heading: "Pricing",
  statement: "The ride has a fixed price.",
  text: "The main variables around your total cost are transport to the launch point and any photo/video media package.",
  items: [
    { title: "RIDE", text: "US$55–100" },
    { title: "TRANSPORT", text: "Depends on pickup and vehicle" },
    { title: "MEDIA", text: "Optional operator package" },
  ] as SimpleItem[],
  note: "Confirm the current operator price before booking.",
};

/* ------------------------------ Steps ---------------------------- */

export const steps = {
  heading: "How the ZipFlyer Experience Works",
  items: [
    { title: "REACH SARANGKOT", text: "Travel to the launch point above Pokhara." },
    { title: "SAFETY BRIEFING", text: "Complete the operator's preparation and briefing." },
    { title: "TAKE OFF", text: "Launch onto the zipline from the Sarangkot side." },
    { title: "ARRIVE AT HEMJA", text: "Complete the descent toward the Hemja side." },
  ] as SimpleItem[],
};

/* ------------------------------ Groups --------------------------- */

export const groups = {
  heading: "Good for Group Adventures",
  text: "The three-line setup makes the main Pokhara ZipFlyer particularly interesting for groups who want to experience the descent together.",
  items: [
    { title: "FRIENDS", text: "Ride alongside your travel companions." },
    { title: "COUPLES", text: "Share the experience from separate parallel lines." },
    { title: "GROUP TOURS", text: "A strong add-on for Pokhara group itineraries." },
    { title: "ADVENTURE TRAVELERS", text: "A fast aerial experience without requiring a full-day expedition." },
  ] as SimpleItem[],
};

/* ------------------------------ Kushma --------------------------- */

export const kushma = {
  heading: "Combine Ziplining With Kushma's Other Adventures",
  text: "Kushma places the zipline alongside several other gorge activities.",
  items: [
    { title: "BUNGEE", text: "~228 m" },
    { title: "CANYON SWING", text: "~228 m setting" },
    { title: "SKY CYCLING", text: "Across the Kaligandaki gorge" },
    { title: "SKY BRIDGE", text: "Pedestrian suspension bridge" },
  ] as SimpleItem[],
  cta: { label: "Explore Kushma Adventure", href: ROUTES.bungee },
  image: { src: IMG.kushma, alt: "Kushma gorge adventure area over the Kaligandaki river" },
};

/* ------------------------------ Pokhara -------------------------- */

export const pokhara = {
  heading: "More Adventure in Pokhara",
  items: [
    { title: "PARAGLIDING", text: "Sarangkot and surrounding launch sites", href: ROUTES.paragliding },
    { title: "ULTRA-LIGHT FLIGHT", text: "15–60 minute aerial sightseeing", href: ROUTES.ultraLight },
    { title: "ZIP FLYER", text: "~1.8 km · ~600 m · ~120 km/h", href: "#featured" },
    { title: "BUNGEE", text: "Hemja / Pokhara", href: ROUTES.bungee },
  ] as SimpleItem[],
};

/* ------------------------------ Facts ---------------------------- */

export const quickFacts: { label: string; value: string }[] = [
  { label: "LOCATION", value: "Sarangkot → Hemja" },
  { label: "LENGTH", value: "~1.8 km" },
  { label: "VERTICAL DROP", value: "~600 m" },
  { label: "SPEED", value: "Near 120 km/h" },
  { label: "STARTING PRICE", value: "US$55" },
  { label: "FORMAT", value: "Three lines" },
  { label: "REGION", value: "Pokhara · Gandaki" },
  { label: "STATUS", value: "ESTABLISHED" },
];

/* ------------------------------ Gallery -------------------------- */

export const gallery: { src: string; alt: string }[] = [
  { src: IMG.hero, alt: "Rider on the Pokhara ZipFlyer descending from Sarangkot with the valley below" },
  { src: IMG.sarangkot, alt: "Sarangkot ridge above Pokhara, the ZipFlyer launch area" },
  { src: IMG.hemja, alt: "Zipline cables descending toward Hemja in the Pokhara valley" },
  { src: IMG.speed, alt: "ZipFlyer rider at speed on the high-speed zipline in Pokhara" },
  { src: IMG.kushma, alt: "Kushma zipline across the Kaligandaki gorge in Parbat" },
  { src: IMG.adventure, alt: "Zipline adventure in the hills of Nepal" },
];

/* ------------------------------ Enquiry -------------------------- */

export const enquiry = {
  heading: "Ready to Fly Across Pokhara?",
  text: "Tell us your travel date, group size and pickup location. We can help arrange the ZipFlyer experience and transport.",
  primaryCta: "Plan My ZipFlyer",
  secondaryCta: "WhatsApp Us",
  submit: "Check ZipFlyer Options",
  pickupOptions: ["Pokhara Lakeside", "Pokhara Airport", "Hotel Pickup", "Other"],
};

/* ------------------------------ FAQ ------------------------------ */

export const faqs: Faq[] = [
  { q: "How long is the Pokhara ZipFlyer?", a: "The main ZipFlyer Nepal line is approximately 1.8 kilometres long." },
  { q: "How high is the ZipFlyer drop?", a: "The vertical drop is approximately 600 metres." },
  { q: "How fast does the Pokhara ZipFlyer go?", a: "Speeds can reach near 120 km/h according to the supplied specifications." },
  { q: "Where does the ZipFlyer start?", a: "The experience runs from the Sarangkot area toward Hemja in Pokhara." },
  { q: "Can groups ride together?", a: "Yes. The main ZipFlyer setup has three lines side-by-side, allowing groups to ride together." },
  { q: "How much does ZipFlyer Nepal cost?", a: "The indicative ride price is approximately US$55–100. Confirm the current operator price before booking." },
  {
    q: "Are there other ziplines in Nepal?",
    a: "Yes. Other listed destinations include Kushma, Chandragiri, Dhulikhel / Namobuddha, Godavari, Sundarijal, Bhedetar, Tansen, Ilam and adventure parks in Bardiya / Dang.",
  },
  {
    q: "Does the price include transport?",
    a: "Transport to the launch point may be separate. The total cost can also vary if a photo or video media package is added.",
  },
  {
    q: "Can I combine ZipFlyer with other activities?",
    a: "Yes. In Pokhara and Kushma, the zipline can be combined with other adventure experiences depending on availability and itinerary.",
  },
];

export const breadcrumbs = [
  { name: "Home", href: ROUTES.home },
  { name: "Activities", href: ROUTES.activities },
  { name: "Adventure", href: ROUTES.adventure },
  { name: "Zip Flying", href: PAGE_PATH },
];

export const brandFooter = {
  line1: "Karvaahh Tours & Travels · Adventure Activities",
  line2: "Hotspot Atlas · karvaahh.in",
};

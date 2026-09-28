/**
 * Nepal commercial rafting rivers.
 * Prices are indicative operator ranges, not quotes.
 */

export type RaftingLevel =
  | "beginner"
  | "intermediate"
  | "advanced"
  | "expedition";

export type TripLength = "day" | "multi-day";

export type RiverStatus = "ESTABLISHED" | "EMERGING" | "SEASONAL";

export interface RaftingRiver {
  slug: string;
  name: string;
  provinces: string[];
  grade: string;
  duration: string;
  route: string;
  distance?: string;
  distinctive: string;
  /** Internal sales note — never rendered on the public page. */
  positioning?: string;
  season: string;
  price: string;
  status: RiverStatus;
  levels: RaftingLevel[];
  tripLength: TripLength[];
  ctaLabel: string;
}

export const raftingRivers: RaftingRiver[] = [
  {
    slug: "trishuli",
    name: "Trishuli",
    provinces: ["Bagmati", "Gandaki", "Chitwan"],
    grade: "III (IV in high water)",
    duration: "1–2 days",
    route: "Charaudi / Baireni → Kuringhat / Mugling",
    distinctive:
      "Nepal's beginner classic, right on the Kathmandu–Pokhara highway.",
    positioning: "The easiest one-day rafting product to sell.",
    season: "Sep–May",
    price: "US$40–70",
    status: "ESTABLISHED",
    levels: ["beginner", "intermediate"],
    tripLength: ["day", "multi-day"],
    ctaLabel: "Explore Trishuli",
  },
  {
    slug: "bhote-koshi",
    name: "Bhote Koshi",
    provinces: ["Bagmati", "Sindhupalchok"],
    grade: "IV–V",
    duration: "1–2 days",
    route: "Barhabise → Lamosangu",
    distinctive:
      "Nepal's steepest commercial run, continuous and technical, near the bungee.",
    season: "Oct–May",
    price: "US$75–120",
    status: "ESTABLISHED",
    levels: ["advanced"],
    tripLength: ["day", "multi-day"],
    ctaLabel: "Explore Bhote Koshi",
  },
  {
    slug: "seti",
    name: "Seti",
    provinces: ["Gandaki", "Kaski", "Tanahun"],
    grade: "II–III",
    duration: "2 days",
    route: "Damauli area → Gaighat",
    distinctive: "Warm water, gentle rapids, family and first-timer river.",
    season: "Oct–May",
    price: "US$45–85",
    status: "ESTABLISHED",
    levels: ["beginner"],
    tripLength: ["multi-day"],
    ctaLabel: "Explore Seti",
  },
  {
    slug: "marsyangdi",
    name: "Marsyangdi",
    provinces: ["Gandaki"],
    grade: "IV–V",
    duration: "2–4 days",
    route: "Ngadi / Bhulbhule → Bimalnagar",
    distinctive:
      "Steep, continuous, one of the more demanding commercial runs.",
    season: "Oct–Dec, Mar–Apr",
    price: "US$180–320",
    status: "ESTABLISHED",
    levels: ["advanced"],
    tripLength: ["multi-day"],
    ctaLabel: "Explore Marsyangdi",
  },
  {
    slug: "kali-gandaki",
    name: "Kali Gandaki",
    provinces: ["Gandaki"],
    grade: "III–IV",
    duration: "3 days",
    route: "Baglung / Maldhunga → Mirmi",
    distinctive:
      "Deep gorge, remote villages and cremation ghats along the bank; limited road contact during the journey.",
    season: "Oct–May",
    price: "US$150–250",
    status: "ESTABLISHED",
    levels: ["intermediate"],
    tripLength: ["multi-day"],
    ctaLabel: "Explore Kali Gandaki",
  },
  {
    slug: "sun-koshi",
    name: "Sun Koshi",
    provinces: ["Bagmati", "Koshi"],
    grade: "III–V",
    duration: "8–9 days",
    route: "Dolalghat → Chatara",
    distance: "~270 km",
    distinctive:
      'The "river of gold" — a major multi-day river journey crossing much of Nepal.',
    season: "Sep–Nov, Mar–May",
    price: "US$450–750",
    status: "ESTABLISHED",
    levels: ["advanced", "expedition"],
    tripLength: ["multi-day"],
    ctaLabel: "Explore Sun Koshi",
  },
  {
    slug: "tamur",
    name: "Tamur",
    provinces: ["Koshi", "Taplejung"],
    grade: "IV–V",
    duration: "10–11 days",
    route: "Dobhan → Chatara",
    distinctive: "Trek-in, raft-out; big rapids and extreme remoteness.",
    season: "Oct–Nov",
    price: "US$500–800",
    status: "ESTABLISHED",
    levels: ["advanced", "expedition"],
    tripLength: ["multi-day"],
    ctaLabel: "Explore Tamur",
  },
  {
    slug: "arun",
    name: "Arun",
    provinces: ["Koshi", "Sankhuwasabha"],
    grade: "IV",
    duration: "4–5 days",
    route: "Tumlingtar → Chatara",
    distinctive: "Big-volume eastern river with little traffic.",
    season: "Oct–Nov",
    price: "US$350–550",
    status: "ESTABLISHED",
    levels: ["advanced", "expedition"],
    tripLength: ["multi-day"],
    ctaLabel: "Explore Arun",
  },
  {
    slug: "karnali",
    name: "Karnali",
    provinces: ["Karnali", "Lumbini"],
    grade: "IV–V",
    duration: "9–10 days",
    route: "Dungeswar → Chisapani",
    distinctive:
      "Nepal's longest and biggest wilderness river trip, ending near Bardiya National Park.",
    season: "Oct–Nov, Mar–Apr",
    price: "US$550–900",
    status: "ESTABLISHED",
    levels: ["advanced", "expedition"],
    tripLength: ["multi-day"],
    ctaLabel: "Explore Karnali",
  },
  {
    slug: "bheri",
    name: "Bheri",
    provinces: ["Karnali", "Lumbini"],
    grade: "III",
    duration: "3–4 days",
    route: "Samjhighat → Chisapani",
    distinctive:
      "Gentler far-western run with wildlife opportunities and warm water.",
    season: "Oct–Apr",
    price: "US$300–500",
    status: "ESTABLISHED",
    levels: ["beginner", "intermediate"],
    tripLength: ["multi-day"],
    ctaLabel: "Explore Bheri",
  },
  {
    slug: "babai",
    name: "Babai",
    provinces: ["Lumbini", "Bardiya"],
    grade: "II–III",
    duration: "2–3 days",
    route: "Inside Bardiya park boundary",
    distinctive:
      "Rafting through a national park with potential wildlife sightings from the river.",
    season: "Oct–Mar",
    price: "US$220–400",
    status: "ESTABLISHED",
    levels: ["beginner"],
    tripLength: ["multi-day"],
    ctaLabel: "Explore Babai",
  },
  {
    slug: "mahakali",
    name: "Mahakali",
    provinces: ["Sudurpashchim"],
    grade: "III–IV",
    duration: "3–4 days",
    route: "Jhulaghat → Brahmadev",
    distinctive:
      "The border river with Uttarakhand, with relatively little commercial traffic.",
    season: "Oct–Apr",
    price: "US$250–500",
    status: "ESTABLISHED",
    levels: ["intermediate"],
    tripLength: ["multi-day"],
    ctaLabel: "Explore Mahakali",
  },
  {
    slug: "madi",
    name: "Madi",
    provinces: ["Gandaki", "Kaski"],
    grade: "III–IV",
    duration: "1 day",
    route: "Near Pokhara",
    distinctive: "Short, punchy Pokhara-based day trip.",
    season: "Oct–Apr",
    price: "US$50–90",
    status: "ESTABLISHED",
    levels: ["intermediate"],
    tripLength: ["day"],
    ctaLabel: "Explore Madi",
  },
  {
    slug: "tama-koshi-indrawati",
    name: "Tama Koshi / Indrawati",
    provinces: ["Bagmati"],
    grade: "III",
    duration: "1–2 days",
    route: "Dolakha / Melamchi area",
    distinctive: "Alternative one-day rafting options from Kathmandu.",
    season: "Oct–Apr",
    price: "US$50–90",
    status: "ESTABLISHED",
    levels: ["beginner", "intermediate"],
    tripLength: ["day", "multi-day"],
    ctaLabel: "Explore Options",
  },
];

/* ---------- Experience levels ---------- */

export interface RaftingLevelCard {
  key: RaftingLevel;
  title: string;
  grade: string;
  description: string;
  examples: string;
}

export const raftingLevels: RaftingLevelCard[] = [
  {
    key: "beginner",
    title: "Beginner",
    grade: "Grade II–III",
    description:
      "Gentler rapids and shorter itineraries suitable for travelers looking for an introduction to white-water rafting.",
    examples: "Seti · Trishuli · Bheri",
  },
  {
    key: "intermediate",
    title: "Intermediate",
    grade: "Grade III–IV",
    description: "More active rapids and longer river sections.",
    examples: "Trishuli · Kali Gandaki · Madi",
  },
  {
    key: "advanced",
    title: "Advanced",
    grade: "Grade IV–V",
    description: "Steep, technical and demanding commercial river sections.",
    examples: "Bhote Koshi · Marsyangdi · Tamur · Karnali",
  },
  {
    key: "expedition",
    title: "Expedition",
    grade: "Multi-day",
    description:
      "Remote river journeys combining camping, wilderness and extended time on the water.",
    examples: "Sun Koshi · Tamur · Karnali",
  },
];

/* ---------- Descriptive hotspot groupings ---------- */

export interface RaftingHotspot {
  label: string;
  rivers: string;
  note: string;
}

export const raftingHotspots: RaftingHotspot[] = [
  {
    label: "Easiest one-day sell",
    rivers: "Trishuli",
    note: "On the Kathmandu–Pokhara highway, so travel time barely moves.",
  },
  {
    label: "Technical",
    rivers: "Bhote Koshi",
    note: "Continuous and steep — the shortest route to Grade IV–V water.",
  },
  {
    label: "Pokhara-based",
    rivers: "Seti · Madi",
    note: "One gentle two-day river and one short, punchy day trip.",
  },
  {
    label: "Multi-day classics",
    rivers: "Kali Gandaki · Sun Koshi",
    note: "Gorge scenery and long river days without leaving the main routes.",
  },
  {
    label: "Wilderness",
    rivers: "Tamur · Karnali · Arun",
    note: "Remote put-ins, camp-based travel and extended time on the water.",
  },
];

/* ---------- Price drivers ---------- */

export const raftingPriceDrivers = [
  {
    title: "River grade",
    description:
      "More technical river sections can require more specialised operations.",
  },
  {
    title: "Days on water",
    description: "Longer expeditions naturally cost more than one-day runs.",
  },
  {
    title: "Access",
    description:
      "Remote put-ins and transport logistics can increase the total cost.",
  },
];

/* ---------- Season model ---------- */

export interface SeasonBand {
  key: string;
  label: string;
  months: string;
  summary: string;
  rivers: string[];
}

export const raftingSeasons: SeasonBand[] = [
  {
    key: "spring",
    label: "Spring",
    months: "Mar–May",
    summary:
      "Snowmelt gradually raises flows. Several classic runs stay open and some expedition rivers hold a short spring window.",
    rivers: [
      "Trishuli",
      "Bhote Koshi",
      "Seti",
      "Marsyangdi",
      "Kali Gandaki",
      "Sun Koshi",
      "Karnali",
      "Bheri",
      "Mahakali",
      "Madi",
    ],
  },
  {
    key: "monsoon",
    label: "Monsoon / High water",
    months: "Jun–Aug",
    summary:
      "High-water levels change the character of a river rather than simply raising its grade. Most multi-day expedition programmes do not run.",
    rivers: ["Limited commercial operation"],
  },
  {
    key: "autumn",
    label: "Autumn",
    months: "Sep–Nov",
    summary:
      "The widest window of the year. Expedition rivers including Sun Koshi, Tamur, Arun and Karnali list autumn seasons.",
    rivers: [
      "Trishuli",
      "Bhote Koshi",
      "Seti",
      "Marsyangdi",
      "Kali Gandaki",
      "Sun Koshi",
      "Tamur",
      "Arun",
      "Karnali",
      "Bheri",
      "Babai",
      "Mahakali",
      "Madi",
      "Tama Koshi / Indrawati",
    ],
  },
  {
    key: "winter",
    label: "Winter",
    months: "Dec–Feb",
    summary:
      "Lower, colder and clearer water. Day runs and the warmer lowland rivers remain the practical options.",
    rivers: [
      "Trishuli",
      "Bhote Koshi",
      "Seti",
      "Kali Gandaki",
      "Bheri",
      "Babai",
      "Mahakali",
      "Madi",
      "Tama Koshi / Indrawati",
    ],
  },
];

/* ---------- Kayaking preview ---------- */

export interface KayakOption {
  slug: string;
  title: string;
  where: string;
  from?: string;
  detail: string;
  price: string;
}

export const kayakingPreview: KayakOption[] = [
  {
    slug: "kayak-clinic",
    title: "Kayak clinic",
    where: "Seti & Trishuli",
    from: "Pokhara or Kathmandu",
    detail: "3–5 day beginner course, including roll training on flat water.",
    price: "US$250–450",
  },
  {
    slug: "kayak-school",
    title: "Kayak school",
    where: "Phewa Lake, Pokhara",
    detail: "Day sessions on the lake.",
    price: "NPR 1,500–3,500/day",
  },
  {
    slug: "supported-expedition",
    title: "Supported kayak expedition",
    where: "Sun Koshi · Karnali",
    detail: "Paddle your own boat with raft support.",
    price: "Expedition price + US$100–200",
  },
];

/* ---------- Gallery ---------- */

export const raftingGallery = [
  {
    src: "/images/activities/rafting/trishuli-rafting.jpg",
    alt: "A raft running a rapid on the Trishuli river in Nepal",
    caption: "Trishuli",
  },
  {
    src: "/images/activities/rafting/bhote-koshi-rafting.jpg",
    alt: "Steep continuous white water on the Bhote Koshi",
    caption: "Bhote Koshi",
  },
  {
    src: "/images/activities/rafting/kali-gandaki-rafting.jpg",
    alt: "Rafts moving through the Kali Gandaki gorge",
    caption: "Kali Gandaki",
  },
  {
    src: "/images/activities/rafting/sun-koshi-expedition.jpg",
    alt: "A riverside expedition camp on the Sun Koshi",
    caption: "Sun Koshi",
  },
  {
    src: "/images/activities/rafting/karnali-rafting.jpg",
    alt: "A raft on the wide wilderness water of the Karnali",
    caption: "Karnali",
  },
  {
    src: "/images/activities/rafting/tamur-expedition.jpg",
    alt: "Trek-in approach to the Tamur river in eastern Nepal",
    caption: "Tamur",
  },
];

/* ---------- FAQ ---------- */

export const raftingFaqs = [
  {
    question: "What is the easiest rafting trip in Nepal?",
    answer:
      "Trishuli is positioned as the classic beginner-friendly one-day option in the supplied river guide.",
  },
  {
    question: "Which rivers have Grade IV–V sections?",
    answer:
      "The supplied list includes Bhote Koshi, Marsyangdi, Sun Koshi, Tamur, Karnali and other rivers with advanced sections.",
  },
  {
    question: "Can I go rafting from Pokhara?",
    answer:
      "Yes. Options include Seti, Madi and access to several other rafting destinations.",
  },
  {
    question: "How long are Nepal rafting trips?",
    answer:
      "They range from approximately one-day trips to 10–11 day expeditions.",
  },
  {
    question: "What determines rafting price?",
    answer:
      "River grade, days on the water and transport/access to the put-in are the main price drivers.",
  },
];

/* ---------- Filters ---------- */

export type RaftingFilterId =
  | "all"
  | RaftingLevel
  | "day"
  | "multi-day";

export const raftingFilters: { id: RaftingFilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
  { id: "expedition", label: "Expedition" },
  { id: "day", label: "1 Day" },
  { id: "multi-day", label: "Multi-Day" },
];

export function filterRivers(
  rivers: RaftingRiver[],
  filter: RaftingFilterId,
): RaftingRiver[] {
  if (filter === "all") return rivers;
  if (filter === "day" || filter === "multi-day") {
    return rivers.filter((river) => river.tripLength.includes(filter));
  }
  return rivers.filter((river) => river.levels.includes(filter));
}

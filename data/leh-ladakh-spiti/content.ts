/* ============================================================
   LEH–LADAKH, ZANSKAR & SPITI GRAND HIMALAYAN CIRCUIT — CONTENT
   ------------------------------------------------------------
   Proposed itineraries only. No prices, hotels, ratings or
   operating guarantees are published — every seasonal road,
   permit and optional sector is flagged in the data itself.
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";
import * as I from "./images";

export const PAGE_PATH = "/packages/leh-ladakh-spiti-circuit";
export const PAGE_TITLE = "Leh–Ladakh, Zanskar & Spiti Circuit";

export const SEO = {
  title: "Ladakh, Zanskar & Spiti Tour Package | Karvaahh",
  socialTitle: "Leh–Ladakh, Zanskar & Spiti Grand Himalayan Circuit | Karvaahh",
  description:
    "Explore Leh, Nubra, Pangong, Zanskar, Spiti and Lahaul with Karvaahh Tours & Travels. Discover customizable 25–30-day Himalayan expeditions with seasonal route planning.",
  keywords: [
    "Leh Ladakh Spiti tour package",
    "Ladakh Zanskar Spiti road trip",
    "Grand Himalayan circuit",
    "Manali to Leh road trip",
    "Spiti Valley tour",
    "Zanskar tour package",
    "Pangong Tso tour",
    "Karvaahh Himalayan expedition",
  ],
};

/* ---------- Overview ---------- */

export type Region = { name: string; text: string; tags: string[]; image: PageImage };

export const REGIONS: Region[] = [
  {
    name: "Ladakh",
    text: "High-altitude lakes, Buddhist monasteries above the Indus, the sand dunes of Nubra Valley and the wide Changthang plateau.",
    tags: ["Leh", "Nubra", "Pangong Tso", "Tso Moriri", "Changthang"],
    image: I.pangong,
  },
  {
    name: "Zanskar",
    text: "Remote monasteries and dramatic mountain valleys — Padum, cliff-side Phugtal and the Drang-Drung Glacier below Pensi La.",
    tags: ["Padum", "Karsha", "Phugtal", "Drang-Drung", "Pensi La"],
    image: I.phugtal,
  },
  {
    name: "Spiti & Lahaul",
    text: "Ancient Himalayan villages, Key and Tabo monasteries, Kunzum Pass, the crescent lake of Chandratal and the Atal Tunnel.",
    tags: ["Kaza", "Key", "Tabo", "Chandratal", "Atal Tunnel"],
    image: I.keyMonastery,
  },
];

export const FACTS = [
  { label: "Recommended duration", value: "25–30 days" },
  { label: "Travel style", value: "Private road expedition" },
  { label: "Main gateways", value: "Delhi, Chandigarh or Leh" },
  { label: "Best road-trip window", value: "Typically June–September" },
  { label: "Difficulty", value: "Moderate to very challenging" },
];

export const ACCESS_NOTE =
  "High passes, the Zanskar links and Spiti's seasonal roads open and close with snow and weather. Road access is confirmed with you before departure — never assumed.";

/* ---------- Routes ---------- */

export type RouteId = "atal-tunnel" | "kinnaur-loop" | "leh-return";

/** A stop on the schematic route. `link` describes the road INTO this stop. */
export type Stop = { name: string; link?: "seasonal" | "optional"; via?: string };

export type DayFlag = "seasonal" | "permit" | "optional" | "rest";
export type Day = { title: string; overnight: string; flag?: DayFlag; note?: string };

export type ExpeditionRoute = {
  id: RouteId;
  number: number;
  name: string;
  tab: string;
  theme: string;
  duration: string;
  difficulty: string;
  bestFor: string;
  summary: string;
  highlights: string[];
  stops: Stop[];
  seasonalNote: string;
  image: PageImage;
  days: Day[];
};

export const ROUTES: ExpeditionRoute[] = [
  {
    id: "atal-tunnel",
    number: 1,
    name: "Via Atal Tunnel",
    tab: "Via Atal Tunnel",
    theme: "The adventurous trans-Himalayan road expedition",
    duration: "29–30 days",
    difficulty: "Challenging to very challenging",
    bestFor: "Experienced high-altitude road travellers comfortable with long, remote drives and flexible plans.",
    summary:
      "Enter Lahaul through the Atal Tunnel, cross into Spiti, then link Zanskar and Ladakh over three high passes before exiting via Leh or Srinagar.",
    highlights: ["Atal Tunnel", "Sissu", "Kaza", "Key Monastery", "Chandratal", "Padum", "Phugtal", "Nubra", "Pangong"],
    stops: [
      { name: "Delhi / Chandigarh" },
      { name: "Manali" },
      { name: "Atal Tunnel" },
      { name: "Lahaul" },
      { name: "Spiti", link: "seasonal", via: "Kunzum Pass" },
      { name: "Chandratal", link: "seasonal", via: "Seasonal access" },
      { name: "Darcha" },
      { name: "Zanskar", link: "seasonal", via: "Shinku La" },
      { name: "Kargil", link: "seasonal", via: "Pensi La" },
      { name: "Leh" },
      { name: "Nubra" },
      { name: "Pangong" },
      { name: "Tso Moriri" },
      { name: "Leh / Srinagar" },
    ],
    seasonalNote:
      "Conditional seasonal route. Kunzum Pass, Chandratal access, Darcha–Shinku La–Padum and the Pensi La connection must all be confirmed. If any road is closed, the itinerary will need a different route.",
    image: I.sissu,
    days: [
      { title: "Delhi arrival and expedition briefing", overnight: "Delhi" },
      { title: "Delhi to Manali", overnight: "Manali" },
      { title: "Manali rest and vehicle preparation", overnight: "Manali", flag: "rest" },
      { title: "Manali to Sissu/Keylong via the Atal Tunnel", overnight: "Sissu / Keylong" },
      { title: "Keylong to Kaza via Kunzum Pass", overnight: "Kaza", flag: "seasonal", note: "Only if Kunzum Pass is open." },
      { title: "Key Monastery, Kibber and Chicham Bridge", overnight: "Kaza" },
      { title: "Langza, Hikkim and Komic villages", overnight: "Kaza" },
      { title: "Pin Valley and the Tabo region", overnight: "Tabo" },
      { title: "Dhankar and positioning for the next road sector", overnight: "Kaza" },
      { title: "Chandratal excursion", overnight: "Chandratal area / Kaza", flag: "seasonal", note: "Subject to access; seasonal camps only." },
      { title: "Return toward Lahaul and Darcha", overnight: "Jispa / Darcha" },
      { title: "Darcha to Padum via Shinku La", overnight: "Padum", flag: "seasonal", note: "Only if the road is operational." },
      { title: "Padum and Karsha Monastery", overnight: "Padum" },
      { title: "Phugtal excursion with walking approach", overnight: "Padum or near Phugtal", note: "Includes a walk to the monastery." },
      { title: "Zanskar monastery and village experiences", overnight: "Padum" },
      { title: "Padum to Kargil via Pensi La", overnight: "Kargil", flag: "seasonal", note: "Only if Pensi La is open." },
      { title: "Kargil to Leh", overnight: "Leh" },
      { title: "Leh recovery and gentle local exploration", overnight: "Leh", flag: "rest" },
      { title: "Shey, Thiksey and Hemis monasteries", overnight: "Leh" },
      { title: "Leh to Nubra via Khardung La", overnight: "Nubra" },
      { title: "Turtuk excursion", overnight: "Nubra", flag: "permit", note: "Subject to permission." },
      { title: "Nubra to Pangong via an approved route", overnight: "Pangong", flag: "permit" },
      { title: "Pangong to Leh via Chang La", overnight: "Leh", flag: "seasonal", note: "If Chang La is open." },
      { title: "Leh rest and flexible sightseeing", overnight: "Leh", flag: "rest" },
      { title: "Leh to Tso Moriri", overnight: "Tso Moriri (Korzok)", flag: "permit" },
      { title: "Tso Moriri to Hanle", overnight: "Hanle", flag: "optional", note: "Only if permitted and practical." },
      { title: "Hanle to Leh", overnight: "Leh" },
      { title: "Leh to Kargil — start of the return sector", overnight: "Kargil" },
      { title: "Complete the return transfer to Srinagar", overnight: "Srinagar" },
      { title: "Srinagar departure or prearranged onward transfer", overnight: "—" },
    ],
  },
  {
    id: "kinnaur-loop",
    number: 2,
    name: "Manali to Leh, Return via Kinnaur–Shimla",
    tab: "Manali–Leh · Kinnaur Return",
    theme: "A grand Himalayan loop with a different return landscape",
    duration: "29–30 days",
    difficulty: "Challenging",
    bestFor: "Travellers who want the classic Manali–Leh Highway out and the green Sutlej valleys of Kinnaur on the way home.",
    summary:
      "Drive the Manali–Leh Highway, explore Ladakh's lakes and valleys, cross into Zanskar and Spiti, then descend through Kinnaur to Shimla.",
    highlights: ["Manali–Leh Highway", "Ladakh's lakes", "Zanskar monasteries", "Kaza", "Tabo", "Kalpa", "Sangla"],
    stops: [
      { name: "Delhi / Chandigarh" },
      { name: "Manali" },
      { name: "Jispa" },
      { name: "Sarchu", link: "seasonal", via: "Baralacha La" },
      { name: "Leh", link: "seasonal", via: "Manali–Leh Highway" },
      { name: "Nubra" },
      { name: "Pangong" },
      { name: "Tso Moriri" },
      { name: "Kargil" },
      { name: "Zanskar", link: "seasonal", via: "Pensi La" },
      { name: "Darcha", link: "seasonal", via: "Shinku La" },
      { name: "Spiti", link: "seasonal", via: "Kunzum Pass" },
      { name: "Tabo" },
      { name: "Kinnaur" },
      { name: "Shimla" },
      { name: "Chandigarh / Delhi" },
    ],
    seasonalNote:
      "The Darcha–Padum and Kunzum connections are seasonal, and the Manali–Leh Highway depends on snow clearance. This loop is only continuous when every link is verified open — otherwise a sector is re-routed.",
    image: I.manaliLeh,
    days: [
      { title: "Delhi arrival", overnight: "Delhi" },
      { title: "Delhi to Manali", overnight: "Manali" },
      { title: "Manali rest and preparation", overnight: "Manali", flag: "rest" },
      { title: "Manali to Jispa/Keylong via the Atal Tunnel", overnight: "Jispa / Keylong" },
      { title: "Jispa to Sarchu", overnight: "Sarchu", flag: "seasonal", note: "Manali–Leh Highway must be open." },
      { title: "Sarchu to Leh", overnight: "Leh", flag: "seasonal", note: "Subject to road conditions and acclimatization." },
      { title: "Leh recovery day", overnight: "Leh", flag: "rest" },
      { title: "Shey, Thiksey and Hemis", overnight: "Leh" },
      { title: "Alchi, Lamayuru and Indus Valley attractions", overnight: "Leh" },
      { title: "Leh to Nubra", overnight: "Nubra" },
      { title: "Nubra to Turtuk and return", overnight: "Nubra", flag: "permit", note: "Subject to permissions." },
      { title: "Nubra to Pangong", overnight: "Pangong", flag: "permit" },
      { title: "Pangong to Leh", overnight: "Leh" },
      { title: "Leh rest", overnight: "Leh", flag: "rest" },
      { title: "Leh to Tso Moriri, with Hanle optional", overnight: "Tso Moriri (Korzok)", flag: "permit" },
      { title: "Return toward Leh — or continue to Hanle when practical", overnight: "Leh / Hanle", flag: "optional" },
      { title: "Leh to Kargil", overnight: "Kargil" },
      { title: "Kargil to Padum", overnight: "Padum", flag: "seasonal", note: "If the road is open." },
      { title: "Padum and Karsha", overnight: "Padum" },
      { title: "Phugtal or local monastery excursion", overnight: "Padum" },
      { title: "Padum to Darcha/Keylong via Shinku La", overnight: "Darcha / Keylong", flag: "seasonal", note: "Only if open." },
      { title: "Keylong to Kaza via Kunzum Pass", overnight: "Kaza", flag: "seasonal", note: "If Kunzum Pass is open." },
      { title: "Key Monastery, Kibber and Chicham", overnight: "Kaza" },
      { title: "Langza, Hikkim and Komic", overnight: "Kaza" },
      { title: "Kaza to Tabo, including Dhankar where practical", overnight: "Tabo" },
      { title: "Tabo to Kalpa via the Sutlej Valley", overnight: "Kalpa" },
      { title: "Kalpa to Sangla/Chitkul", overnight: "Sangla / Chitkul" },
      { title: "Sangla to Shimla", overnight: "Shimla" },
      { title: "Shimla local exploration or recovery", overnight: "Shimla", flag: "rest" },
      { title: "Transfer to Chandigarh/Delhi", overnight: "—" },
    ],
  },
  {
    id: "leh-return",
    number: 3,
    name: "Leh Arrival and Departure",
    tab: "Leh In · Leh Out",
    theme: "A Ladakh-focused expedition with more time to acclimatize and explore",
    duration: "25–28 days",
    difficulty: "Moderate to challenging",
    bestFor: "Families, first-time high-altitude travellers and anyone who prefers to fly in and out with slower pacing.",
    summary:
      "Fly into Leh and explore Ladakh in depth — Nubra, Turtuk, Pangong, Tso Moriri and optional Hanle — with Zanskar as a separate road excursion.",
    highlights: ["Leh", "Monasteries", "Nubra", "Turtuk", "Pangong", "Tso Moriri", "Hanle"],
    stops: [
      { name: "Leh Airport" },
      { name: "Leh & Indus Valley" },
      { name: "Nubra" },
      { name: "Turtuk", link: "optional", via: "Subject to permission" },
      { name: "Pangong" },
      { name: "Leh" },
      { name: "Tso Moriri" },
      { name: "Hanle", link: "optional", via: "Optional" },
      { name: "Zanskar", link: "seasonal", via: "Optional · Pensi La" },
      { name: "Leh Airport" },
    ],
    seasonalNote:
      "Zanskar is a separate road excursion from Kargil over Pensi La, and Spiti is an optional extension — not an automatic part of this itinerary. Flights to and from Leh depend on weather.",
    image: I.leh,
    days: [
      { title: "Arrive Leh and rest", overnight: "Leh", flag: "rest" },
      { title: "Full acclimatization day", overnight: "Leh", flag: "rest" },
      { title: "Leh Palace, Shanti Stupa and Old Town", overnight: "Leh" },
      { title: "Shey, Thiksey and Hemis", overnight: "Leh" },
      { title: "Alchi, Magnetic Hill and Sangam", overnight: "Leh" },
      { title: "Lamayuru excursion or overnight", overnight: "Lamayuru / Leh", note: "Depending on road timing." },
      { title: "Return to Leh and rest if required", overnight: "Leh", flag: "rest" },
      { title: "Leh to Nubra", overnight: "Nubra" },
      { title: "Turtuk excursion", overnight: "Nubra", flag: "permit", note: "Subject to access." },
      { title: "Nubra village experiences and buffer", overnight: "Nubra", flag: "rest" },
      { title: "Nubra to Pangong", overnight: "Pangong", flag: "permit" },
      { title: "Pangong to Leh", overnight: "Leh" },
      { title: "Leh rest", overnight: "Leh", flag: "rest" },
      { title: "Leh to Tso Moriri", overnight: "Tso Moriri (Korzok)", flag: "permit" },
      { title: "Tso Moriri and Korzok", overnight: "Tso Moriri (Korzok)" },
      { title: "Hanle transfer", overnight: "Hanle", flag: "optional", note: "If permitted." },
      { title: "Hanle exploration and optional stargazing", overnight: "Hanle", flag: "optional" },
      { title: "Return to Leh", overnight: "Leh" },
      { title: "Recovery and contingency day", overnight: "Leh", flag: "rest" },
      { title: "Leh to Kargil", overnight: "Kargil", flag: "optional", note: "Start of the optional Zanskar extension." },
      { title: "Kargil to Padum via Pensi La", overnight: "Padum", flag: "seasonal", note: "If Pensi La is open." },
      { title: "Padum and Karsha", overnight: "Padum" },
      { title: "Phugtal excursion or local alternatives", overnight: "Padum" },
      { title: "Return toward Kargil", overnight: "Kargil (or Rangdum en route)" },
      { title: "Kargil to Leh", overnight: "Leh" },
      { title: "Leh rest and optional local sightseeing", overnight: "Leh", flag: "rest" },
      { title: "Flight and weather buffer day", overnight: "Leh", flag: "rest" },
      { title: "Departure from Leh", overnight: "—" },
    ],
  },
];

export const FLAG_LABEL: Record<DayFlag, string> = {
  seasonal: "Seasonal road",
  permit: "Permit / access",
  optional: "Optional",
  rest: "Rest & acclimatize",
};

export const ITINERARY_NOTE =
  "These are proposed itineraries, not guaranteed operating schedules. Drive times are confirmed when your route is finalised, and acclimatization days are never removed to fit in more sightseeing.";

/* ---------- Destination gallery ---------- */

export type Destination = { name: string; region: string; text: string; access: string; image: PageImage; feature?: boolean };

export const DESTINATIONS: Destination[] = [
  { name: "Pangong Tso", region: "Ladakh", text: "A long, high-altitude lake whose blues shift with light and cloud along the Changthang edge.", access: "Permit required · via Chang La or Nubra", image: I.pangong, feature: true },
  { name: "Leh & Shanti Stupa", region: "Ladakh", text: "Ladakh's old capital — palace, bazaars and the white stupa above town.", access: "Base for acclimatization", image: I.leh },
  { name: "Shey, Thiksey & Hemis", region: "Ladakh", text: "Three of the Indus Valley's great monasteries within reach of Leh.", access: "Day excursion from Leh", image: I.thiksey },
  { name: "Alchi & Lamayuru", region: "Ladakh", text: "Ancient murals at Alchi and Lamayuru's monastery above eroded 'moonland'.", access: "Day trip or overnight west of Leh", image: I.lamayuru },
  { name: "Nubra, Diskit & Hunder", region: "Ladakh", text: "A wide desert valley with the Diskit Buddha and the dunes of Hunder.", access: "Via Khardung La · permit required", image: I.nubra },
  { name: "Turtuk", region: "Ladakh", text: "A Balti village of apricot orchards near the end of the Shyok valley.", access: "Subject to permission", image: I.turtuk },
  { name: "Tso Moriri", region: "Ladakh", text: "A quiet high lake in Changthang beside the village of Korzok.", access: "Permit required · remote", image: I.tsoMoriri },
  { name: "Hanle", region: "Ladakh", text: "Dark skies, an old monastery and the high plains near the observatory.", access: "Optional · confirm current access", image: I.hanle },
  { name: "Phugtal Monastery", region: "Zanskar", text: "A monastery built into a cliff-face cave above the Tsarap river.", access: "Reached on foot · seasonal road", image: I.phugtal, feature: true },
  { name: "Padum & Karsha", region: "Zanskar", text: "Zanskar's main town and the hillside monastery of Karsha across the valley.", access: "Seasonal road via Pensi La or Shinku La", image: I.karsha },
  { name: "Drang-Drung & Pensi La", region: "Zanskar", text: "A long glacier sweeping down beneath the pass into Zanskar.", access: "Seasonal pass · Kargil–Padum road", image: I.drangDrung },
  { name: "Kaza & Key Monastery", region: "Spiti", text: "Spiti's hub and the hilltop monastery of Key above the valley.", access: "Via Kunzum (seasonal) or Kinnaur", image: I.keyMonastery },
  { name: "Kibber & Chicham Bridge", region: "Spiti", text: "A high village and the bridge spanning a deep gorge beyond it.", access: "Short drive from Kaza", image: I.chicham },
  { name: "Langza, Hikkim & Komic", region: "Spiti", text: "Fossil-rich high villages, a hilltop Buddha and a famous post office.", access: "High-altitude villages · acclimatize first", image: I.langza },
  { name: "Dhankar & Tabo", region: "Spiti", text: "A cliff-top monastery and Tabo's ancient mud-walled monastic complex.", access: "On the Kaza–Kinnaur road", image: I.tabo },
  { name: "Pin Valley", region: "Spiti", text: "A side valley of villages and walking routes below snow peaks.", access: "Protected area · confirm local rules", image: I.pinValley },
  { name: "Chandratal & Kunzum Pass", region: "Spiti & Lahaul", text: "A crescent-shaped lake below the pass linking Spiti and Lahaul.", access: "Seasonal only · confirm opening", image: I.chandratal },
  { name: "Sissu & Lahaul", region: "Lahaul", text: "Waterfalls and green fields just north of the Atal Tunnel.", access: "Via Atal Tunnel from Manali", image: I.sissu },
];

/* ---------- Safety ---------- */

export const SAFETY = [
  {
    title: "Acclimatization",
    icon: "mountainSnow",
    points: [
      "Reserve the first 48 hours after arriving in Leh for rest and gentle activity.",
      "Higher destinations are introduced gradually, with recovery days built in.",
      "Avoid consecutive strenuous activities during initial acclimatization.",
      "Severe or worsening altitude symptoms need medical attention and descent.",
    ],
  },
  {
    title: "Seasonal road access",
    icon: "snow",
    points: [
      "The Atal Tunnel does not guarantee year-round access to Kunzum Pass or Chandratal.",
      "Manali–Leh, Shinku La, Pensi La and the Zanskar links can close with snow or road damage.",
      "The Shimla–Kinnaur–Spiti approach is a distinct alternative route.",
      "Official district advisories are rechecked before departure.",
    ],
  },
  {
    title: "Vehicle & fuel planning",
    icon: "car",
    points: [
      "A suitable high-clearance vehicle with an experienced mountain driver.",
      "Fuel stops, spare tyres, recovery equipment and stays confirmed before remote drives.",
      "Plan for limited mobile coverage and fast-changing weather.",
    ],
  },
  {
    title: "Permits",
    icon: "passport",
    points: [
      "Current permit rules are confirmed for both Indian and foreign nationals.",
      "Access to Turtuk, Hanle, Pangong, Tso Moriri and protected areas is verified.",
      "Local rules for trekking, camping and remote monastery visits are checked.",
    ],
  },
] as const;

export const OFFICIAL_SOURCES = [
  { label: "Leh district administration", href: "https://leh.nic.in" },
  { label: "Kargil district administration", href: "https://kargil.nic.in" },
  { label: "Lahaul & Spiti district administration", href: "https://hplahaulspiti.nic.in" },
];

/* ---------- Seasons ---------- */

export const SEASONS = [
  { months: "Mar–Apr", status: "limited", title: "Limited road options", text: "Few high roads are open. Verify access carefully; Leh-based trips by air are more practical." },
  { months: "May", status: "variable", title: "Seasonal openings vary", text: "Some passes begin to open; timing differs from year to year." },
  { months: "Jun–Jul", status: "main", title: "Main overland season", text: "The potential window for the full circuit, once each road is confirmed." },
  { months: "Aug–Sep", status: "main", title: "Often suitable", text: "Summer routes usually open, with landslide and weather risk to plan around." },
  { months: "Late Sep–Oct", status: "variable", title: "Early snow risk", text: "Early snowfall and pass closures become increasingly likely." },
  { months: "Nov–Feb", status: "limited", title: "Winter alternatives", text: "We suggest winter-specific journeys rather than promising the complete circuit." },
] as const;

export const SEASON_NOTE = "These are general planning windows — never guaranteed road-opening dates.";

/* ---------- Travel styles ---------- */

export const STYLES = [
  { title: "Private Himalayan Road Trip", icon: "car", text: "Customised transfers, accommodation and sightseeing, paced around your group." },
  { title: "Premium Expedition", icon: "sparkles", text: "Upgraded accommodation where available, a private vehicle and flexible scheduling." },
  { title: "Adventure & Trekking Extension", icon: "footprints", text: "Optional walking routes and local guiding added to the road journey." },
  { title: "Photography & Culture Tour", icon: "camera", text: "Monasteries, villages, viewpoints and unhurried photography stops." },
] as const;

/* ---------- FAQs ---------- */

export const FAQS = [
  {
    question: "Can Ladakh, Zanskar and Spiti be covered in 25–30 days?",
    answer:
      "Yes, when the seasonal roads are open and acclimatization days are respected. Our proposed routes run 25–30 days; shorter versions usually drop a region rather than rushing all three.",
  },
  {
    question: "When is the best time for the full road circuit?",
    answer:
      "Typically June to September, once each high pass has been confirmed open. Opening dates change every year, so we verify the current status before you book flights.",
  },
  {
    question: "Is the Atal Tunnel route available year-round?",
    answer:
      "The tunnel itself improves access to Lahaul, but it does not make Kunzum Pass, Chandratal, Shinku La or the Manali–Leh Highway available year-round. Those remain seasonal.",
  },
  {
    question: "Can Chandratal and Tso Moriri be included together?",
    answer:
      "Yes — Route 1 includes both. Chandratal depends on the seasonal Kunzum–Batal road and Tso Moriri requires a permit, so both are confirmed closer to departure.",
  },
  {
    question: "Are Turtuk and Hanle always accessible?",
    answer:
      "No. Both depend on current permit rules and local access conditions, which can differ for Indian and foreign nationals. We treat them as permit-dependent or optional stops.",
  },
  {
    question: "Does Phugtal Monastery require trekking?",
    answer:
      "Yes, the final approach to Phugtal is on foot. The length of the walk depends on how far the road has been built that season; we confirm it during planning.",
  },
  {
    question: "Which route is best for families?",
    answer:
      "Route 3 (Leh arrival and departure) usually suits families best — it flies in, allows a slower acclimatization and keeps Zanskar and Spiti optional.",
  },
  {
    question: "Can the itinerary start in Chandigarh or Delhi?",
    answer:
      "Yes. Routes 1 and 2 can begin in Delhi or Chandigarh. Route 3 starts and ends at Leh Airport, with flights arranged separately or on request.",
  },
  {
    question: "What vehicle is suitable?",
    answer:
      "A well-maintained high-clearance vehicle driven by an experienced mountain driver. The exact type depends on your group size and the roads open at the time.",
  },
  {
    question: "Are permits and hotel bookings included automatically?",
    answer:
      "Nothing is included automatically. Permits, accommodation and services are discussed and confirmed with you in writing as part of your customised plan.",
  },
];

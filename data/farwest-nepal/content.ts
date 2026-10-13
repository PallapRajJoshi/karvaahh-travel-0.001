/* ============================================================
   EXCLUSIVE FAR-WEST NEPAL CIRCUIT — CONTENT
   ------------------------------------------------------------
   No prices, ratings, reviews or fixed departures — none are
   confirmed. Route stages, trail conditions and the Badimalika
   connection are planning concepts that must be verified locally.
   Every internal link points to an existing route.
   ============================================================ */

import type { IconName, PageImage } from "@/components/activities/experience/types";
import type { RelatedTour } from "@/components/activities/experience/product-types";
import * as I from "./images";

export const PAGE_PATH = "/packages/exclusive-farwest-nepal-circuit";
export const PAGE_TITLE = "Exclusive Far-West Nepal Circuit";

export const SEO = {
  title: "Exclusive Far-West Nepal Circuit | Rara, Kolti & Badimalika — Karvaahh",
  socialTitle: "Exclusive Far-West Nepal Circuit — Karvaahh",
  description:
    "Discover Far-West Nepal with Karvaahh. Explore Rara Lake, Kolti, Martadi, Khaptad, Badimalika, remote trekking routes and private 4×4 adventures.",
  keywords: [
    "Far-West Nepal tour",
    "Rara Lake trek",
    "Kolti Bajura",
    "Badimalika Temple trek",
    "Khaptad National Park tour",
    "Rara to Khaptad trek",
    "Western Nepal 4x4 tour",
    "Karnali and Sudurpashchim travel",
  ],
};

/* Existing routes used across the page */
export const LINKS = {
  rara: "/offbeat-unexplored/rara-lake",
  khaptad: "/offbeat-unexplored/khaptad-national-park",
  phoksundo: "/offbeat-unexplored/shey-phoksundo",
  karnali: "/destinations/karnali-province",
  sudurpashchim: "/destinations/sudurpaschim-province",
  offbeat: "/packages/nepal/adventure-offbeat-tours",
  trekking: "/packages/nepal/trekking-hiking-packages",
  pilgrimage: "/packages/nepal/spiritual-pilgrimage-tours",
} as const;

/* ============================================================
   TYPES
   ============================================================ */

export type Feature = { icon: IconName; title: string; text: string };

export type FarWestDestination = {
  name: string;
  province: "Karnali" | "Sudurpashchim";
  label: string;
  /** Highlights labels that need extra planning (trek-only, expedition). */
  caution?: boolean;
  text: string;
  image: PageImage;
  href?: string;
};

export type FarWestPackage = {
  id: string;
  number: string;
  title: string;
  duration: string;
  style: { label: string; value: string };
  route: string[];
  highlights: string[];
  cta: string;
  icon: IconName;
  accent: "turquoise" | "gold" | "green";
};

export type CorridorStop = { name: string; text: string; icon: IconName };

export type ItineraryPhase = { title: string; days: string; items: { day: string; text: string }[] };

export type Gateway = { icon: IconName; name: string; role: string; text: string };

export type Season = { icon: IconName; name: string; months: string; text: string; tone: "good" | "caution" };

export type Faq = { question: string; answer: string };

/* ============================================================
   HERO
   ============================================================ */

export const HERO = {
  eyebrow: "Karvaahh Special Packages · Western Nepal",
  title: "Beyond the Known.",
  titleAccent: "Into the Wild West.",
  text: "Discover Rara Lake, the historic valleys of Jumla, the remote trails through Kolti and Martadi, the sacred heights of Badimalika and the peaceful wilderness of Khaptad.",
  highlights: [
    { icon: "calendar" as IconName, value: "12–28 Days", label: "Travel options" },
    { icon: "footprints" as IconName, value: "Trek · Yatra · 4×4", label: "Trekking, spiritual journeys & 4×4" },
    { icon: "compass" as IconName, value: "Private", label: "Custom expeditions" },
  ],
};

/* ============================================================
   INTRODUCTION
   ============================================================ */

export const INTRO = {
  text: "Explore one of Nepal's most remote and rewarding regions, where alpine lakes, traditional mountain settlements, sacred pilgrimage trails, rolling highland meadows and western Terai wildlife come together.",
  provinces: [
    {
      name: "Karnali Province",
      places: ["Jumla", "Sinja Valley", "Rara Lake", "Dolpo (optional)"],
      href: LINKS.karnali,
    },
    {
      name: "Sudurpashchim Province",
      places: ["Kolti", "Martadi", "Badimalika", "Khaptad", "Api Himal", "Shuklaphanta"],
      href: LINKS.sudurpashchim,
    },
  ],
  features: [
    {
      icon: "mountainSnow",
      title: "Remote Himalayan Wilderness",
      text: "Alpine lakes, forested ridges and high meadows on routes that see only a handful of travellers each season.",
    },
    {
      icon: "landmark",
      title: "Sacred Trails & Living Culture",
      text: "Hilltop shrines, an ashram in the forest and mountain villages where daily life still follows the seasons.",
    },
    {
      icon: "car",
      title: "Rugged Roads & Offbeat Adventures",
      text: "Mountain roads, river valleys and trailheads that ask for patience and reward it with real remoteness.",
    },
  ] satisfies Feature[],
};

/* ============================================================
   DESTINATIONS (first 8 shown; the rest behind "Explore All")
   ============================================================ */

export const DESTINATIONS: FarWestDestination[] = [
  {
    name: "Rara Lake",
    province: "Karnali",
    label: "Alpine Lake",
    text: "Nepal's celebrated alpine lake, surrounded by forested hills and mountain scenery. Ideal for nature walks, photography and peaceful lakeside experiences.",
    image: I.rara,
    href: LINKS.rara,
  },
  {
    name: "Jumla",
    province: "Karnali",
    label: "Regional Gateway",
    text: "A regional gateway to western Himalayan trekking, traditional settlements and rural landscapes.",
    image: I.jumla,
  },
  {
    name: "Sinja Valley",
    province: "Karnali",
    label: "Historic Valley",
    text: "A historic valley associated with the Khasa Malla kingdom and the development of the Nepali language.",
    image: I.sinja,
  },
  {
    name: "Kolti, Bajura",
    province: "Sudurpashchim",
    label: "Trek Stage & Airport",
    text: "A key locality and airport in Bajura and a documented stage on the Rara–Khaptad trekking corridor — a useful point for route planning, subject to flight and road availability.",
    image: I.kolti,
  },
  {
    name: "Martadi",
    province: "Sudurpashchim",
    label: "District Headquarters",
    text: "The district headquarters of Bajura and a useful staging location for local cultural exploration and trekking arrangements.",
    image: I.martadi,
  },
  {
    name: "Badimalika Temple",
    province: "Sudurpashchim",
    label: "High-Altitude Pilgrimage Trek",
    caution: true,
    text: "A remote, sacred high-altitude pilgrimage destination reached only on foot. Planned as a separate trekking module with its own trailhead and overnight stops.",
    image: I.badimalika,
  },
  {
    name: "Khaptad National Park",
    province: "Sudurpashchim",
    label: "Meadows & Ashram",
    text: "Known for rolling meadows, forests, peaceful walking trails and the Khaptad Baba Ashram.",
    image: I.khaptad,
    href: LINKS.khaptad,
  },
  {
    name: "Shey Phoksundo Lake & Dolpo",
    province: "Karnali",
    label: "Specialist Extension",
    caution: true,
    text: "A striking trans-Himalayan landscape and optional specialist trekking extension. Some Dolpo routes require restricted-area permits.",
    image: I.dolpo,
    href: LINKS.phoksundo,
  },
  {
    name: "Api Himal",
    province: "Sudurpashchim",
    label: "Advanced Expedition / Optional Extension",
    caution: true,
    text: "A remote mountain expedition region in Darchula requiring specialist trekking logistics and Api Nampa Conservation Area entry.",
    image: I.apiHimal,
  },
  {
    name: "Shuklaphanta National Park",
    province: "Sudurpashchim",
    label: "Wildlife & Safari",
    text: "Grasslands, wetlands, birdlife and safari experiences in the far-western Terai, subject to park operations.",
    image: I.shuklaphanta,
  },
  {
    name: "Mahakali River & Western Border",
    province: "Sudurpashchim",
    label: "Regional Extension",
    text: "A regional extension for river landscapes, local culture and exploration of Nepal's western border area.",
    image: I.mahakali,
  },
];

export const INITIAL_DESTINATIONS = 8;

/* ============================================================
   SIGNATURE PACKAGES
   ============================================================ */

export const PACKAGES: FarWestPackage[] = [
  {
    id: "trekking-expedition",
    number: "01",
    title: "Far-West Himalayan Trekking Expedition",
    duration: "18–28 days",
    style: { label: "Difficulty", value: "Moderate to strenuous, depending on the selected route" },
    route: ["Jumla", "Sinja Valley", "Rara Lake", "Kolti", "Parekh Lekh", "Martadi", "Khaptad"],
    highlights: [
      "Rara Lake trekking and nature walks",
      "Remote village landscapes",
      "The Kolti–Martadi trekking corridor",
      "Khaptad's meadows and forest trails",
      "Optional Badimalika pilgrimage trek",
      "Specialist Dolpo and Api Himal extensions",
    ],
    cta: "Explore Trekking Package",
    icon: "footprints",
    accent: "turquoise",
  },
  {
    id: "sacred-yatra",
    number: "02",
    title: "Sacred Far-West Nepal Yatra",
    duration: "12–20 days",
    style: { label: "Difficulty", value: "Moderate to strenuous, depending on trekking requirements" },
    route: ["Regional gateway", "Kolti / Martadi", "Badimalika trek", "Optional Khaptad, Jumla & Sinja"],
    highlights: [
      "Badimalika Temple pilgrimage",
      "Khaptad Baba Ashram",
      "Traditional mountain communities",
      "Historic Sinja Valley",
      "Sacred landscapes and cultural exploration",
      "Flexible alternatives for travellers unable to do the full high-altitude trek",
    ],
    cta: "Plan My Pilgrimage",
    icon: "landmark",
    accent: "gold",
  },
  {
    id: "wild-west-4x4",
    number: "03",
    title: "Wild West Nepal 4×4 Expedition",
    duration: "14–22 days",
    style: { label: "Travel style", value: "Private 4×4 and offbeat road exploration" },
    route: ["Nepalgunj", "Karnali roads", "Rara access", "Kolti / Martadi roads", "Khaptad approach", "Dhangadhi", "Optional Shuklaphanta"],
    highlights: [
      "Rugged mountain-road adventures",
      "Rural villages and remote landscapes",
      "Rara access and scenic road sections",
      "Local culture and photography",
      "Khaptad approach and western hill exploration",
      "Optional wildlife extension to Shuklaphanta",
    ],
    cta: "Customize My 4×4 Tour",
    icon: "car",
    accent: "green",
  },
];

/* ============================================================
   THE KOLTI CORRIDOR (illustrative trekking concept)
   ============================================================ */

export const CORRIDOR: CorridorStop[] = [
  { name: "Rara Lake", text: "Alpine lake start inside Rara National Park.", icon: "waves" },
  { name: "Sirkot", text: "Village stage as the trail leaves the Rara region.", icon: "footprints" },
  { name: "Jholunge Pul", text: "River crossing named for its suspension bridge.", icon: "route" },
  { name: "Kolti", text: "Bajura locality with an airport — a possible access or exit.", icon: "plane" },
  { name: "Parekh Lekh", text: "Highland ridge crossing between Kolti and Martadi.", icon: "mountain" },
  { name: "Martadi", text: "Bajura district headquarters for supplies and logistics.", icon: "mapPin" },
  { name: "Dogadi", text: "Approach stage towards the Khaptad plateau.", icon: "leaf" },
  { name: "Khaptad", text: "Rolling meadows, forest and Khaptad Baba Ashram.", icon: "sparkles" },
];

export const CORRIDOR_NOTE =
  "This is a trekking-route concept based on published route descriptions. Exact walking stages, overnight stops, river crossings, trail conditions and the Badimalika connection must be verified locally before departure.";

export const CORRIDOR_FACTS = [
  { title: "A walking route, not a road", text: "The corridor is a trekking connection. Road sections near Kolti and Martadi are used only where they are verified at the time of travel." },
  { title: "Badimalika is planned separately", text: "Badimalika Temple is not part of the Rara–Khaptad trek by default. It needs its own trailhead, overnight stops and acclimatisation plan." },
  { title: "Kolti Airport as an option", text: "Kolti's airport may offer an alternative way in or out of Bajura, subject to actual flight schedules, weather and operations." },
];

/* ============================================================
   SAMPLE 28-DAY ITINERARY
   ============================================================ */

export const ITINERARY: ItineraryPhase[] = [
  {
    title: "Arrival and Rara",
    days: "Days 1–5",
    items: [
      { day: "Day 1", text: "Arrive in Kathmandu." },
      { day: "Day 2", text: "Travel towards Nepalgunj and arrange onward connections." },
      { day: "Day 3", text: "Reach the Rara region through a confirmed flight and transfer combination." },
      { day: "Day 4", text: "Explore Rara Lake and nearby viewpoints." },
      { day: "Day 5", text: "Begin the selected trekking route towards Sirkot." },
    ],
  },
  {
    title: "Rara to Kolti and Martadi",
    days: "Days 6–12",
    items: [
      { day: "Day 6", text: "Continue the trekking route towards Sirkot or the next confirmed overnight stop." },
      { day: "Day 7", text: "Trek towards Jholunge Pul." },
      { day: "Day 8", text: "Continue to Kolti." },
      { day: "Day 9", text: "Trek towards Parekh Lekh." },
      { day: "Day 10", text: "Continue towards Martadi." },
      { day: "Day 11", text: "Explore Martadi, rest and arrange local supplies." },
      { day: "Day 12", text: "Begin a separately planned Badimalika approach, if selected and feasible." },
    ],
  },
  {
    title: "Badimalika and Khaptad",
    days: "Days 13–25",
    items: [
      { day: "Days 13–16", text: "Complete the Badimalika trekking module using a locally verified trailhead and overnight plan." },
      { day: "Day 17", text: "Return to Martadi or the confirmed roadhead." },
      { day: "Day 18", text: "Recovery and preparation." },
      { day: "Days 19–21", text: "Trek towards Khaptad through the selected route and overnight stages." },
      { day: "Days 22–23", text: "Explore Khaptad National Park and Khaptad Baba Ashram." },
      { day: "Days 24–25", text: "Trek out and transfer to a confirmed road-accessible location." },
    ],
  },
  {
    title: "Departure",
    days: "Days 26–28",
    items: [
      { day: "Day 26", text: "Transfer towards Dhangadhi or another confirmed regional gateway." },
      { day: "Day 27", text: "Buffer day for recovery or road and flight delays." },
      { day: "Day 28", text: "Departure by confirmed flight or arranged land transfer." },
    ],
  },
];

export const ITINERARY_NOTE =
  "This is an illustrative itinerary, not a guaranteed departure schedule. The full Badimalika extension, trail conditions and transfer arrangements must be validated with a local operator. Shuklaphanta generally requires an additional 2–3 days unless the itinerary is adjusted.";

/* ============================================================
   GATEWAYS & TRANSPORT
   ============================================================ */

export const GATEWAYS: Gateway[] = [
  { icon: "plane", name: "Kathmandu", role: "International arrival hub", text: "International arrival, permit coordination and onward domestic connections." },
  { icon: "flag", name: "Nepalgunj", role: "Western staging gateway", text: "Western Nepal's staging gateway for onward flights and road transfers." },
  { icon: "mapPin", name: "Kolti Airport", role: "Bajura access point", text: "A potential access or exit point for the Bajura region, subject to current schedules, weather and operational availability." },
];

export const GATEWAY_EXTRAS = [
  { name: "Martadi", text: "Regional road access and trekking logistics point." },
  { name: "Dhangadhi", text: "A useful exit gateway on the far-western plains." },
  { name: "Banbasa–Gaddachauki", text: "Land border for suitable India–Nepal itineraries." },
];

export const TRANSPORT_NOTE =
  "Trekking trails, road sections and domestic flights are planned separately. Mountain flights depend on weather, and some road sections change with the season — every itinerary includes buffer time for both.";

/* ============================================================
   BEST TIME TO VISIT
   ============================================================ */

export const SEASONS: Season[] = [
  { icon: "sun", name: "Spring", months: "March–May", text: "Favourable for many mountain and trekking routes, with forests coming into bloom.", tone: "good" },
  { icon: "leaf", name: "Autumn", months: "October–November", text: "A strong general choice for clear views, settled weather and trekking.", tone: "good" },
  { icon: "rain", name: "Monsoon", months: "June–September", text: "Increased landslide, trail and road disruption risk across the hills.", tone: "caution" },
  { icon: "snow", name: "Winter", months: "December–February", text: "Cold, with high-altitude routes potentially affected by snow.", tone: "caution" },
];

export const SEASON_NOTE =
  "The ideal dates differ between Rara, Badimalika, Khaptad and the lower-altitude Terai. Season alone never guarantees that a route is open — we confirm trail, road and flight conditions before every departure.";

/* ============================================================
   PERMITS, SAFETY & ACCOMMODATION
   ============================================================ */

export const PERMITS: { title: string; body: string }[] = [
  { title: "Rara National Park", body: "Entry to Rara National Park requires a park entry permit. Fees and categories differ by nationality; we arrange it as part of your itinerary." },
  { title: "Khaptad National Park", body: "Khaptad National Park also has its own entry permit, arranged before or on arrival at the park depending on the route." },
  { title: "Shuklaphanta National Park", body: "Shuklaphanta needs a park entry permit, and jeep or walking safaris are arranged separately, subject to park operations." },
  { title: "Api Nampa Conservation Area", body: "Selecting the Api Himal extension adds Api Nampa Conservation Area entry and specialist trekking logistics." },
  { title: "Upper Dolpo restricted area", body: "Applicable Upper Dolpo routes need a restricted-area permit issued through a registered agency, with a licensed guide and minimum group conditions." },
  { title: "Passport, visa & border formalities", body: "Requirements differ by nationality. Indian nationals and other visitors follow different entry rules — check the Department of Immigration before you travel." },
  { title: "High-altitude fitness & acclimatisation", body: "Badimalika, the Kolti corridor and specialist extensions involve long walking days at altitude. Good fitness, gradual ascent and rest days are built in." },
  { title: "Travel insurance & evacuation", body: "Insurance covering trekking at altitude and emergency evacuation is essential for every trekking and pilgrimage option." },
  { title: "Guides, camping & accommodation", body: "Remote trekking stages use local guides, camping and basic teahouse or homestay accommodation. Comfort levels vary sharply by stage." },
  { title: "Road, flight & weather contingency", body: "Every plan carries buffer days and alternatives for delayed flights, closed roads or changing trail conditions." },
];

export const OFFICIAL_LINKS = [
  { label: "Nepal Tourism Board — park entry & trekking guidance", href: "https://ntb.gov.np" },
  { label: "Department of National Parks and Wildlife Conservation", href: "https://dnpwc.gov.np" },
  { label: "Department of Immigration, Nepal", href: "https://www.immigration.gov.np" },
];

/* ============================================================
   FAQ
   ============================================================ */

export const FAQS: Faq[] = [
  {
    question: "Where is Far-West Nepal and what does this circuit cover?",
    answer:
      "The circuit spans two provinces: Karnali (Jumla, Sinja Valley, Rara Lake and optional Dolpo) and Sudurpashchim (Kolti, Martadi, Badimalika, Khaptad, Api Himal and Shuklaphanta). Each journey is built privately around the places you choose.",
  },
  {
    question: "Is the Rara to Khaptad route a drivable road?",
    answer:
      "No. The Kolti corridor between Rara, Kolti, Martadi and Khaptad is a trekking route. Our 4×4 expedition uses only verified road sections in the region and never presents the corridor as a continuous road.",
  },
  {
    question: "Is Badimalika Temple included in the Rara–Khaptad trek?",
    answer:
      "Not by default. Badimalika is a high-altitude pilgrimage trek that needs its own trailhead, overnight stops and acclimatisation plan. It can be added as a separate module when conditions allow.",
  },
  {
    question: "How fit do I need to be?",
    answer:
      "The trekking and pilgrimage options range from moderate to strenuous, with long days on remote trails and nights at altitude. Regular walking and hiking practice before the trip is strongly recommended. Lighter alternatives can be planned for travellers unable to complete the full trek.",
  },
  {
    question: "How much does the Far-West Nepal circuit cost?",
    answer:
      "Every itinerary is private and custom, so we share a quote once your route, group size, dates and comfort level are agreed. Permits, flights and logistics are confirmed with you before booking.",
  },
  {
    question: "Can I fly into or out of Kolti?",
    answer:
      "Kolti has an airport that may provide an alternative access or exit point for Bajura. Flights depend on current schedules, weather and operations, so we always plan a road or trekking alternative.",
  },
  {
    question: "Can I start the journey from India?",
    answer:
      "Yes, for suitable itineraries. The Banbasa–Gaddachauki border crossing gives access to the far-western plains near Dhangadhi and Shuklaphanta. Border formalities depend on your nationality.",
  },
];

/* ============================================================
   RELATED (all existing pages)
   ============================================================ */

export const RELATED: RelatedTour[] = [
  { title: "Rara Lake", text: "Nepal's largest lake in the forests of Rara National Park.", href: LINKS.rara, image: I.rara },
  { title: "Khaptad National Park", text: "Meadows, forest trails and the Khaptad Baba Ashram.", href: LINKS.khaptad, image: I.khaptad },
  { title: "Nepal Adventure & Offbeat Tours", text: "Hidden lakes, remote treks and road journeys across Nepal.", href: LINKS.offbeat, image: I.dolpo },
  { title: "Trekking & Hiking in Nepal", text: "Classic and remote Himalayan trails for every pace.", href: LINKS.trekking },
];

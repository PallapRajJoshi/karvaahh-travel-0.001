/* ============================================================
   PANCH KAILASH & PANCH KEDAR — CONTENT & IMAGES
   ------------------------------------------------------------
   Two separate pilgrimage products on one page. Panch Kailash spans
   Tibet and northern India and is planned as regional modules;
   Panch Kedar is a Garhwal (Uttarakhand) temple circuit. Never
   present them as one continuous itinerary.

   ► Images: only the Kailash photo exists today. Every other image is
     a planned file — save a photo at that exact path and it appears on
     the next build; until then a designed placeholder is shown
     (see components/activities/experience/resolve-images.ts).
   No prices, hotel names, ratings or testimonials are published here.
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";
import * as CD from "@/data/char-dham/images";
import { images as AK } from "@/data/india-pilgrimage/adi-kailash-om-parvat/images";
import { haridwar } from "@/data/spiritual-pilgrimage/images";

export const PAGE_PATH = "/packages/panch-kailash-yatra";
export const PAGE_TITLE = "Panch Kailash & Panch Kedar Yatra";

export const SEO = {
  title: "Panch Kailash & Panch Kedar Yatra | Karvaahh Tours & Travels",
  description:
    "Explore Panch Kailash and Panch Kedar pilgrimage packages with Karvaahh Tours & Travels. Discover sacred Himalayan mountains, five Shiva temples, trekking routes and customized spiritual journeys.",
  keywords: [
    "Panch Kailash Yatra",
    "Panch Kedar Yatra",
    "Kailash Mansarovar",
    "Adi Kailash Om Parvat",
    "Manimahesh Kailash",
    "Shrikhand Mahadev",
    "Kinnaur Kailash",
    "Kedarnath Tungnath Rudranath Madhyamaheshwar Kalpeshwar",
  ],
};

export const KAILASH_ENQUIRY = "Panch Kailash Pilgrimage";
export const KEDAR_ENQUIRY = "Panch Kedar Yatra";

/* ---------- Images ---------- */

const DIR = "/images/panch-kailash-kedar";
const planned = (file: string, label: string, alt: string, objectPosition?: string): PageImage => ({
  src: `${DIR}/${file}`,
  label,
  alt,
  ...(objectPosition ? { objectPosition } : {}),
});

export const IMAGES = {
  hero: {
    src: "/images/kailash-mansarovar-yatra.webp",
    label: "Mount Kailash",
    alt: "The snow-covered dome of Mount Kailash rising above the high Tibetan plateau",
    objectPosition: "center 40%",
  } satisfies PageImage,
  kedarCollection: planned("panch-kedar-garhwal-temple-meadow.jpg", "Panch Kedar", "A stone Shiva temple on a high alpine meadow in the Garhwal Himalaya"),
  finalCta: CD.heroPanorama,
};

/* ---------- Panch Kailash ---------- */

export type Difficulty = "Moderate" | "Moderate to strenuous" | "Strenuous" | "Challenging, high altitude";

export type Destination = {
  id: string;
  name: string;
  location: string;
  image: PageImage;
  summary: string;
  duration: string;
  difficulty: Difficulty;
  access: string;
  /** Prominent availability warning shown on the card. */
  alert?: string;
  details: string[];
};

export const KAILASH: Destination[] = [
  {
    id: "kailash-mansarovar",
    name: "Kailash Mansarovar",
    location: "Ngari, Tibet",
    image: { ...IMAGES.hero, alt: "Mount Kailash in Tibet, sacred to Hindus, Buddhists, Jains and followers of Bon" },
    summary: "The cosmic mountain of Lord Shiva and the sacred lake beneath it — revered by Hindus, Buddhists, Jains and followers of Bon.",
    duration: "Approx. 14–22+ days",
    difficulty: "Challenging, high altitude",
    access: "Tibet travel authorization and route-specific approvals required",
    details: [
      "Mount Kailash rises to approximately 6,638 m; Lake Mansarovar lies at approximately 4,590 m.",
      "Traditional experience: sacred lake visits and the Kailash parikrama, which is optional or route-dependent.",
      "Duration depends on the authorized route and current operating arrangements.",
      "Eligibility depends on nationality, government policies and current operating arrangements — confirm before planning.",
    ],
  },
  {
    id: "adi-kailash",
    name: "Adi Kailash & Om Parvat",
    location: "Pithoragarh, Uttarakhand",
    image: { src: AK.hero.src, label: "Om Parvat", alt: AK.hero.alt, objectPosition: AK.hero.focus },
    summary: "Remote Kumaon Himalaya, Parvati Sarovar and the natural Om-like snow marking on Om Parvat.",
    duration: "Approx. 7–10 days",
    difficulty: "Moderate to strenuous",
    access: "Border-region permissions and identity documents may apply",
    details: [
      "Located in the remote Kumaon Himalaya, Pithoragarh district.",
      "A road-based Himalayan journey with some walking and altitude-related demands.",
      "Route-specific permissions, border-region restrictions and identity documentation may apply.",
    ],
  },
  {
    id: "kinnaur-kailash",
    name: "Kinnaur Kailash",
    location: "Kinnaur, Himachal Pradesh",
    image: planned("kinnaur-kailash-shivling-rock.jpg", "Kinnaur Kailash", "The Kinnaur Kailash rock pillar revered as a Shivling high above the Kinnaur valley"),
    summary: "A sacred rock formation associated with Lord Shiva, reached by a high-altitude trekking pilgrimage.",
    duration: "Approx. 4–6 days",
    difficulty: "Strenuous",
    access: "Limited seasonal access on strenuous mountain terrain",
    alert:
      "The 2026 pilgrimage was postponed by the district administration until further orders. Departures are offered only after official reopening is confirmed.",
    details: [
      "A high-altitude trekking pilgrimage in Kinnaur district.",
      "Duration includes the approach and recovery days.",
      "Strenuous mountain terrain and limited seasonal access.",
    ],
  },
  {
    id: "shrikhand-mahadev",
    name: "Shrikhand Mahadev",
    location: "Kullu, Himachal Pradesh",
    image: planned("shrikhand-mahadev-trek-peak.jpg", "Shrikhand Mahadev", "The rocky summit of Shrikhand Mahadev above a steep Himalayan trekking trail"),
    summary: "A sacred high-altitude Shiva pilgrimage — one of the most demanding treks in the Himalaya.",
    duration: "Approx. 6–8 days",
    difficulty: "Strenuous",
    access: "Annual safety and registration rules; official route confirmation",
    details: [
      "A multi-day trek with significant elevation gain and demanding terrain.",
      "Duration includes the approach and recovery days.",
      "Requires strong preparation, current official route confirmation and compliance with annual safety and registration rules.",
    ],
  },
  {
    id: "manimahesh",
    name: "Manimahesh Kailash",
    location: "Bharmour, Chamba, Himachal Pradesh",
    image: planned("manimahesh-lake-kailash-peak.jpg", "Manimahesh Lake", "Manimahesh Lake beneath the snow peak of Manimahesh Kailash in Chamba"),
    summary: "The sacred Manimahesh Lake beneath Lord Shiva's peak in the Bharmour region of Chamba.",
    duration: "Approx. 4–6 days",
    difficulty: "Moderate to strenuous",
    access: "Seasonal yatra dates, registration and medical screening each year",
    details: [
      "Manimahesh Lake lies at approximately 3,950 m.",
      "Access through Chamba, Bharmour and the designated trailhead, followed by trekking or officially operated alternatives where available.",
      "Seasonal pilgrimage dates, registration and medical screening must be verified each year.",
    ],
  },
];

/* ---------- Panch Kedar ---------- */

export type Temple = {
  id: string;
  name: string;
  image: PageImage;
  altitude: string;
  legend: string;
  summary: string;
  walking: string;
  difficulty: Difficulty;
  season: string;
  details: string[];
};

export const KEDARS: Temple[] = [
  {
    id: "kedarnath",
    name: "Kedarnath",
    image: CD.kedarnathTemple,
    altitude: "Approx. 3,583 m",
    legend: "Shiva's hump",
    summary: "The first and most celebrated of the Panch Kedar, set beneath the snow peaks of the Mandakini valley.",
    walking: "Approx. 16–19 km one way from Gaurikund",
    difficulty: "Strenuous",
    season: "Seasonal temple access; official registration applies",
    details: [
      "Main approach: Gaurikund, followed by a substantial uphill trek.",
      "The trekking distance depends on the current trail alignment.",
      "Temple opening and closing dates are announced each season.",
    ],
  },
  {
    id: "tungnath",
    name: "Tungnath",
    image: planned("tungnath-temple-chopta.jpg", "Tungnath", "Tungnath Temple, the highest Shiva temple of the Panch Kedar, above the Chopta meadows"),
    altitude: "Approx. 3,680 m",
    legend: "Shiva's arms",
    summary: "The highest of the five Kedars, reached through rhododendron forest and open meadows above Chopta.",
    walking: "Approx. 3–4 km uphill from Chopta",
    difficulty: "Moderate to strenuous",
    season: "Seasonal temple access",
    details: [
      "Main approach: Chopta, followed by approximately 3–4 km of uphill walking.",
      "Optional Chandrashila summit extension only when conditions permit.",
    ],
  },
  {
    id: "rudranath",
    name: "Rudranath",
    image: planned("rudranath-temple-alpine-meadow.jpg", "Rudranath", "Rudranath Temple in a remote alpine meadow of the Garhwal Himalaya"),
    altitude: "Approx. 3,600 m",
    legend: "Shiva's face",
    summary: "A remote shrine reached through oak forest and wide alpine meadows — often called the most demanding Kedar.",
    walking: "Approx. 20–22 km one way from Sagar",
    difficulty: "Strenuous",
    season: "Seasonal temple access",
    details: [
      "Forests, alpine meadows and demanding trekking approaches.",
      "Allow suitable overnight stops on the trail.",
    ],
  },
  {
    id: "madhyamaheshwar",
    name: "Madhyamaheshwar",
    image: planned("madhyamaheshwar-temple-garhwal.jpg", "Madhyamaheshwar", "Madhyamaheshwar Temple on a green Himalayan meadow beneath the Chaukhamba peaks"),
    altitude: "Approx. 3,289 m",
    legend: "Shiva's navel / middle torso",
    summary: "A quiet meadow temple reached through traditional mountain villages above the Ransi area.",
    walking: "Multi-day trek from the Ransi area",
    difficulty: "Strenuous",
    season: "Seasonal temple access",
    details: [
      "Access via the Ransi area and designated mountain trails.",
      "A multi-day trekking experience with overnight stays in local accommodation.",
    ],
  },
  {
    id: "kalpeshwar",
    name: "Kalpeshwar",
    image: planned("kalpeshwar-temple-urgam-valley.jpg", "Kalpeshwar", "The small rock temple of Kalpeshwar in the Urgam Valley"),
    altitude: "Approx. 2,200 m",
    legend: "Shiva's matted hair",
    summary: "The most accessible of the five Kedars, a rock-cave shrine in the terraced Urgam Valley.",
    walking: "Short final approach, depending on road conditions",
    difficulty: "Moderate",
    season: "Traditionally open year-round — local access still to be checked",
    details: [
      "Located in the Urgam Valley.",
      "Traditionally considered open throughout the year, but access and local conditions must still be checked.",
    ],
  },
];

/* ---------- Itineraries ---------- */

export const ITINERARIES = [
  {
    id: "complete-panch-kedar",
    label: "Option A",
    title: "Complete Panch Kedar Yatra",
    duration: "14–16 days",
    summary: "All five Kedars in sequence, with trekking stages to Kedarnath, Tungnath, Rudranath and Madhyamaheshwar.",
    enquiry: "Complete Panch Kedar Yatra (14–16 days)",
    days: [
      "Arrive in Haridwar and prepare for the pilgrimage.",
      "Transfer through Rudraprayag toward Guptkashi.",
      "Travel to Gaurikund and trek to Kedarnath.",
      "Kedarnath darshan and descent.",
      "Transfer to Chopta and rest.",
      "Tungnath trek and optional Chandrashila.",
      "Transfer toward Gopeshwar and Sagar.",
      "Trek toward Rudranath.",
      "Rudranath darshan and return trek.",
      "Transfer toward the Madhyamaheshwar trailhead.",
      "Trek toward Madhyamaheshwar.",
      "Darshan and return trek as practical.",
      "Transfer toward the Urgam Valley.",
      "Kalpeshwar darshan.",
      "Return toward Rishikesh or Haridwar.",
    ],
    note: "Trekking stages may need additional nights because of weather, altitude, fitness and actual trail conditions. This is a proposed itinerary, not a guaranteed fixed schedule.",
  },
  {
    id: "kedarnath-spiritual",
    label: "Option B",
    title: "Kedarnath Spiritual Tour",
    duration: "5 days",
    summary: "A focused Kedarnath pilgrimage with Ganga Aarti in Haridwar.",
    enquiry: "Kedarnath Spiritual Tour (5 days)",
    days: [
      "Haridwar arrival and Ganga Aarti.",
      "Transfer through Devprayag toward Guptkashi.",
      "Drive to Gaurikund and trek to Kedarnath.",
      "Kedarnath darshan and descent.",
      "Return toward Rishikesh or Haridwar.",
    ],
    note: "A four-day version may be considered for suitable travellers, but five days is preferable for a safer, more flexible schedule.",
  },
];

/* ---------- Extensions ---------- */

export const EXTENSIONS = [
  {
    title: "Badrinath Extension",
    image: CD.badrinathTemple,
    text: "Add Joshimath, Badrinath Temple and the sacred sites around it after your Kedar pilgrimage.",
  },
  {
    title: "Haridwar & Rishikesh",
    image: haridwar,
    text: "Ganga Aarti, riverside temples, yoga and the cultural life of the Ganga's holy towns.",
    href: "/spiritual-journeys/haridwar-rishikesh-yatra",
  },
  {
    title: "Char Dham Yatra",
    image: CD.heroPanorama,
    text: "A separate, approximately 10–12-day journey to Yamunotri, Gangotri, Kedarnath and Badrinath, subject to current seasonal operations. The traditional Char Dham is not the Panch Kedar.",
    href: "/spiritual-journeys/char-dham-yatra-uttarakhand",
  },
];

/* ---------- Best time, fitness & safety ---------- */

export const PLANNING = [
  {
    title: "Panch Kailash",
    points: [
      "Access varies by destination.",
      "Tibet travel authorization and nationality eligibility require advance verification.",
      "Adi Kailash and Om Parvat have separate route-specific arrangements.",
      "Kinnaur Kailash, Shrikhand Mahadev and Manimahesh have separate trekking and seasonal requirements.",
      "High-altitude medical preparation is essential.",
    ],
  },
  {
    title: "Panch Kedar",
    points: [
      "Usually planned around the accessible temple season, commonly May–June and September–October.",
      "Trekking ability is important, particularly for Rudranath and Madhyamaheshwar.",
      "Monsoon landslides, snowfall, trail damage and temple schedules can affect departures.",
      "Registration, accommodation and road access must be reconfirmed.",
    ],
  },
];

/* ---------- Services ---------- */

export const SERVICES = [
  { icon: "route", label: "Personalized itinerary planning" },
  { icon: "car", label: "Regional transport coordination" },
  { icon: "bed", label: "Accommodation planning" },
  { icon: "users", label: "Local guide coordination where appropriate" },
  { icon: "file", label: "Permit and registration guidance" },
  { icon: "calendar", label: "Pilgrimage-season planning" },
  { icon: "luggage", label: "Travel preparation assistance" },
  { icon: "heart", label: "Customized private-group departures" },
] as const;

/* ---------- FAQs ---------- */

export const FAQS = [
  {
    question: "What is the difference between Panch Kailash and Panch Kedar?",
    answer:
      "Panch Kailash refers to five sacred Kailash mountains across Tibet, Uttarakhand and Himachal Pradesh, each with its own access route. Panch Kedar is a circuit of five Shiva temples in the Garhwal Himalaya of Uttarakhand. They are separate pilgrimages and are planned separately.",
  },
  {
    question: "Can I complete all five Kailash destinations in one trip?",
    answer:
      "Generally not as one continuous journey. Tibet authorization, Indian border-region permits, trekking seasons and transfers differ for each destination. We recommend booking them as separate regional modules, or combining only compatible destinations after checking time, safety, eligibility and current operations.",
  },
  {
    question: "Which Panch Kailash destinations require special permits?",
    answer:
      "Kailash Mansarovar requires Tibet travel authorization and route-specific approvals, with eligibility depending on nationality. Adi Kailash and Om Parvat may require border-region permissions and identity documents. The Himachal pilgrimages have their own registration, safety and medical rules each season.",
  },
  {
    question: "Is Kinnaur Kailash currently available for trekking?",
    answer:
      "The 2026 Kinnaur Kailash pilgrimage was postponed by the district administration until further orders. We offer departures only after official reopening is confirmed.",
  },
  {
    question: "How difficult is the Panch Kedar Yatra?",
    answer:
      "The complete yatra is demanding. Kedarnath, Rudranath and Madhyamaheshwar involve long uphill treks, Tungnath is a shorter but steep walk, and Kalpeshwar is the most accessible. Good fitness and spare days for weather are important.",
  },
  {
    question: "Can senior citizens visit Kedarnath?",
    answer:
      "Many senior pilgrims do visit Kedarnath with careful planning, a medical check-up and support options on the trail where available. Suitability depends on individual health, and helicopter services are never guaranteed — please discuss your needs with us.",
  },
  {
    question: "What is the best month for Panch Kedar?",
    answer:
      "The yatra is usually planned around the accessible temple season, commonly May–June and September–October. Opening dates are announced each year and monsoon conditions can affect travel.",
  },
  {
    question: "Can I combine Panch Kedar with Badrinath?",
    answer:
      "Yes, a Badrinath extension via Joshimath can be added after the Kedar circuit, subject to road conditions and temple timings. It is an optional extension and not automatically included.",
  },
  {
    question: "Does the package include helicopters and trekking permits?",
    answer:
      "Not automatically. Services such as transport, accommodation, guides and permit or registration guidance are arranged according to the package you select. Helicopter services depend on current operations and are never guaranteed.",
  },
  {
    question: "How do I request a customized pilgrimage itinerary?",
    answer:
      "Use any “Plan My Journey” button on this page to send us your dates, group size and preferred pilgrimage on WhatsApp. We confirm access, eligibility, opening dates and services with you before anything is booked.",
  },
];

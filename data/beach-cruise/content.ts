/* ============================================================
   BEACH & CRUISE HOLIDAYS — CONTENT
   ------------------------------------------------------------
   Links point only at routes that exist today:
   - Asia / Europe destination cards (#dest-<id> deep links are
     handled by those pages and always reveal the card),
   - the destinations explorer search (/destinations?q=…#explore),
   - the cruise experiences page,
   - /contact (pre-filled via ?type=&destination=).
   Packages are resolved from the existing package data — titles,
   routes and durations are never retyped here, and no price,
   resort partner or inclusion is invented.
   ============================================================ */

import { asiaPackages } from "@/data/asia-packages";
import { europePackages } from "@/data/europe/packages";
import { ROUTE_PATH as CRUISE_PATH } from "@/components/activities/educational-corporate/cruise-experiences/config";
import { liveHref } from "@/lib/international/config";
import type { PageImage } from "@/components/activities/experience/types";
import * as I from "./images";
import type { BeachPackage, CoastalDestination, EscapeId, Faq, GuideBlock, OceanExperience, PackageRef, PlannerChoice, SeasonNote } from "./types";

export const PAGE_PATH = "/packages/beach-cruise";
export const PAGE_TITLE = "Beach & Cruise Holidays";

const ASIA = "/packages/international/asia";
const EUROPE = "/packages/international/europe";
const explore = (q: string) => `/destinations?q=${encodeURIComponent(q)}#explore`;

export const CRUISE_PAGE = CRUISE_PATH;

export const customEnquiry = (destination = "Beach & cruise holiday", type: PlannerChoice["enquiryType"] = "international") =>
  `/contact?type=${type}&destination=${encodeURIComponent(destination)}#enquiry`;

export const SEO = {
  title: "Beach & Cruise Holidays | Maldives, Bali, Thailand & Island Escapes | Karvaahh",
  socialTitle: "Beach & Cruise Escapes — Karvaahh Travels",
  description:
    "Plan beach and island holidays with Karvaahh Travels: Maldives overwater stays, Bali and Phuket–Krabi escapes, the Greek islands, a Ha Long Bay cruise and custom cruise and coastal journeys from Nepal and India.",
  keywords: [
    "beach holiday packages",
    "Maldives holiday package",
    "Bali honeymoon package",
    "Phuket Krabi tour",
    "Greece Santorini tour",
    "Ha Long Bay cruise",
    "cruise holidays from India",
    "island holidays from Nepal",
    "Karvaahh Travels",
  ],
  ogImage: I.heroMaldives,
};

export const ESCAPES: { id: EscapeId | "all"; label: string }[] = [
  { id: "all", label: "All Escapes" },
  { id: "islands", label: "Tropical Islands" },
  { id: "beach", label: "Beach Holidays" },
  { id: "luxury", label: "Luxury Retreats" },
  { id: "cruise", label: "Cruise Journeys" },
  { id: "romantic", label: "Romantic Getaways" },
  { id: "family", label: "Family Beach Holidays" },
  { id: "adventure", label: "Adventure at Sea" },
];

/* ============================================================
   Destinations
   ============================================================ */

export const DESTINATION_GROUPS = ["Island Escapes", "Coastal Holidays", "Cruise & Coast"] as const;

export const DESTINATIONS: (CoastalDestination & { group: (typeof DESTINATION_GROUPS)[number] })[] = [
  {
    id: "maldives",
    group: "Island Escapes",
    name: "Maldives",
    region: "Indian Ocean",
    text: "Turquoise lagoons, coral reefs and overwater villas, reached by seaplane or speedboat from Malé. Days are slow and barefoot, with snorkelling straight off the house reef at many resorts.",
    tags: ["Island Escape", "Luxury Stay", "Snorkelling"],
    escapes: ["islands", "luxury", "romantic", "beach", "adventure"],
    bestTime: "November to April",
    image: I.maldivesPavilion,
    link: { href: `${ASIA}#dest-maldives`, label: "Explore Destination" },
    status: "packages",
    active: true,
  },
  {
    id: "bali",
    group: "Island Escapes",
    name: "Bali, Indonesia",
    region: "Indonesia",
    text: "Sea temples at sunset, rice-terrace mornings in Ubud and beach evenings in Seminyak. Bali pairs coastal rest with a living Hindu culture and day trips to Nusa Penida.",
    tags: ["Island Escape", "Culture", "Honeymoon"],
    escapes: ["islands", "romantic", "luxury", "beach"],
    bestTime: "April to October (dry season)",
    image: I.baliTanahLot,
    link: { href: `${ASIA}#dest-indonesia`, label: "Explore Destination" },
    status: "packages",
    active: true,
  },
  {
    id: "thailand",
    group: "Island Escapes",
    name: "Phuket & Krabi, Thailand",
    region: "Andaman Sea",
    text: "Limestone cliffs, emerald bays and longtail boats out to Phi Phi. Phuket brings lively beach districts; Krabi is quieter, with dramatic coastal scenery and boat excursions.",
    tags: ["Beach Holiday", "Island Hopping", "Boat Trips"],
    escapes: ["islands", "beach", "romantic", "adventure", "family"],
    bestTime: "November to March",
    image: I.krabiLongtails,
    link: { href: `${ASIA}#dest-thailand`, label: "Explore Destination" },
    status: "packages",
    active: true,
  },
  {
    id: "mauritius",
    group: "Island Escapes",
    name: "Mauritius",
    region: "Indian Ocean",
    text: "Tropical beaches, volcanic landscapes and lagoon activities, with a distinctive blend of island cultures and cuisines. A strong choice for couples who want variety beyond the beach.",
    tags: ["Island Escape", "Beach Holiday", "Romantic"],
    escapes: ["islands", "beach", "romantic"],
    image: I.mauritius,
    link: { href: explore("Mauritius"), label: "Explore Destination" },
    status: "on-request",
    note: "No fixed package yet — planned on request around your dates.",
    active: true,
  },
  {
    id: "seychelles",
    group: "Island Escapes",
    name: "Seychelles",
    region: "Indian Ocean",
    text: "Dramatic granite boulders, secluded coves and lush, green islands. Seychelles suits travellers looking for remote, scenic beaches and a slower island rhythm.",
    tags: ["Island Escape", "Luxury Stay", "Secluded Beaches"],
    escapes: ["islands", "luxury", "romantic"],
    image: I.seychelles,
    link: { href: explore("Seychelles"), label: "Explore Destination" },
    status: "on-request",
    note: "No fixed package yet — planned on request around your dates.",
    active: true,
  },
  {
    id: "goa",
    group: "Coastal Holidays",
    name: "Goa, India",
    region: "India's west coast",
    text: "Sandy beaches, coastal cuisine and Portuguese-era churches and old quarters. Goa works for an easy seaside break, whether lively in the north or quieter in the south.",
    tags: ["Beach Holiday", "Coastal Cuisine", "Heritage"],
    escapes: ["beach", "family", "romantic"],
    image: I.goa,
    link: { href: explore("Goa"), label: "Explore Destination" },
    status: "on-request",
    note: "Planned on request. Monsoon conditions limit sea activities for part of the year.",
    active: true,
  },
  {
    id: "andaman",
    group: "Coastal Holidays",
    name: "Andaman Islands, India",
    region: "Bay of Bengal",
    text: "Clear water, forested islands and beaches reached by inter-island ferry. Snorkelling and diving are possible where operators run them and sea conditions allow.",
    tags: ["Island Escape", "Snorkelling", "Beach Holiday"],
    escapes: ["islands", "beach", "adventure", "family"],
    image: I.andaman,
    link: { href: explore("Andaman"), label: "Explore Destination" },
    status: "on-request",
    note: "Planned on request. Ferries and sea activities depend on weather and local advisories.",
    active: true,
  },
  {
    id: "sri-lanka",
    group: "Coastal Holidays",
    name: "Sri Lanka's South Coast",
    region: "Sri Lanka",
    text: "Rock fortresses and tea country first, then the southern beaches to finish. An easy way to combine culture and coast in one well-paced journey.",
    tags: ["Beach Holiday", "Culture", "Family"],
    escapes: ["beach", "family"],
    bestTime: "December to April for the west and south coasts",
    image: I.sriLankaCoast,
    link: { href: `${ASIA}#dest-sri-lanka`, label: "Explore Destination" },
    status: "packages",
    active: true,
  },
  {
    id: "greece",
    group: "Cruise & Coast",
    name: "Greek Islands & the Mediterranean",
    region: "Mediterranean",
    text: "Athens, then ferries to Mykonos and Santorini for beaches, white villages and caldera sunsets. Mediterranean cruises along historic ports can be planned on request.",
    tags: ["Island Hopping", "Romantic", "Cruise on Request"],
    escapes: ["islands", "romantic", "beach", "cruise"],
    bestTime: "May to October",
    image: I.santoriniOia,
    link: { href: `${EUROPE}#dest-greece`, label: "Explore Destination" },
    secondary: { href: CRUISE_PATH, label: "Mediterranean cruises" },
    status: "packages",
    active: true,
  },
  {
    id: "ha-long-bay",
    group: "Cruise & Coast",
    name: "Ha Long Bay, Vietnam",
    region: "Vietnam",
    text: "Limestone karsts rising from emerald water, explored by cruise boat. Kayaking and cave visits are offered on many departures, depending on the vessel and conditions.",
    tags: ["Cruise", "Limestone Bays", "Kayaking"],
    escapes: ["cruise", "adventure", "islands"],
    image: I.haLongBay,
    link: { href: `${ASIA}#dest-vietnam`, label: "Explore Destination" },
    secondary: { href: CRUISE_PATH, label: "Cruise experiences" },
    status: "packages",
    active: true,
  },
  {
    id: "dubai",
    group: "Cruise & Coast",
    name: "Dubai, UAE",
    region: "Arabian Gulf",
    text: "Beach clubs, Marina skyline views and evening sightseeing cruises, alongside desert safaris and Abu Dhabi. Marina and yacht cruises can be added to a Dubai holiday on request.",
    tags: ["Marina Cruise", "Luxury Stay", "Family"],
    escapes: ["luxury", "cruise", "family"],
    bestTime: "November to March",
    image: I.dubaiCoast,
    link: { href: `${ASIA}#dest-uae`, label: "Explore Destination" },
    secondary: { href: CRUISE_PATH, label: "Dubai marina cruises" },
    status: "packages",
    active: true,
  },
  {
    id: "singapore",
    group: "Cruise & Coast",
    name: "Singapore",
    region: "Southeast Asia",
    text: "Sentosa's beaches and attractions, Gardens by the Bay and the Marina Bay waterfront. Easy to pair with Malaysia, and a common starting point for regional cruises.",
    tags: ["Family", "Island Attractions", "City & Coast"],
    escapes: ["family"],
    bestTime: "Year-round; February to April tends to be drier",
    image: I.singaporeBay,
    link: { href: `${ASIA}#dest-singapore`, label: "Explore Destination" },
    status: "packages",
    note: "Regional cruises from Singapore are planned on request — no fixed sailings are listed.",
    active: true,
  },
];

/* ============================================================
   Ocean experiences
   ============================================================ */

export const EXPERIENCES: OceanExperience[] = [
  {
    id: "barefoot",
    title: "Barefoot Beach Escapes",
    text: "Soft sand, warm water and nothing on the schedule before breakfast. We match the beach to your mood — lively strips with cafés, or quiet coves where the loudest sound is the tide.",
    where: "Maldives · Bali · Phuket & Krabi · Sri Lanka's south coast",
    image: I.goldenBeach,
  },
  {
    id: "island-hopping",
    title: "Island-Hopping Adventures",
    text: "Longtail boats out to Phi Phi, ferries between Mykonos and Santorini, and day trips to Nusa Penida. Each island adds a new viewpoint, lagoon or village to the journey.",
    where: "Phuket & Krabi · Greek islands · Bali",
    image: I.boatOverReef,
  },
  {
    id: "cruise",
    title: "Luxury Cruise Journeys",
    text: "Ocean-view cabins, onboard dining and a new port with each sunrise. Cabins, inclusions and itineraries depend on the cruise line and sailing, and we confirm them with you before you book.",
    where: "Ha Long Bay cruises · Ocean and Mediterranean cruises on request",
    image: I.cruiseHarbour,
    link: { href: CRUISE_PATH, label: "Discover cruise experiences" },
  },
  {
    id: "romantic",
    title: "Romantic Ocean Retreats",
    text: "Sunset walks, private villas and dinners by the water. Honeymoon touches such as a private dinner or a sunset cruise are arranged with each resort or operator.",
    where: "Maldives · Bali · Santorini",
    image: I.couplesShore,
    link: { href: "/packages/nepal/couple-tour-packages", label: "Couple & honeymoon tours" },
  },
  {
    id: "marine",
    title: "Marine & Water Adventures",
    text: "Snorkelling over house reefs, introductory dives, kayaking and boat trips. Activities run with licensed local operators, and only when sea conditions allow.",
    where: "Maldives reefs · Andaman Sea · Ha Long Bay kayaking",
    image: I.coralReef,
  },
  {
    id: "family",
    title: "Family Beach Holidays",
    text: "Shallow beaches, family rooms and easy sightseeing, with transfers that keep travel days short. We pace the trip around children and grandparents alike.",
    where: "Pattaya & Coral Island · Sri Lanka · Dubai · Singapore's Sentosa",
    image: I.familySea,
  },
  {
    id: "culture",
    title: "Coastal Culture & Cuisine",
    text: "Fresh seafood, sea temples, harbour towns and island markets. The coast tells its own story through food and tradition, from Bali's ceremonies to Greek tavernas.",
    where: "Bali · Greek islands · Sri Lanka · Goa",
    image: I.seafood,
  },
];

/* ============================================================
   Packages (resolved from existing package data)
   ============================================================ */

export const PACKAGE_REFS: PackageRef[] = [
  { source: "asia", id: "maldives-luxury", escapes: ["islands", "luxury", "romantic", "beach"], tourType: "Maldives Luxury Escape" },
  { source: "asia", id: "phuket-krabi", escapes: ["islands", "beach", "romantic", "adventure"], tourType: "Phuket – Krabi Holiday" },
  { source: "asia", id: "bali-honeymoon", escapes: ["islands", "romantic", "luxury", "beach"], tourType: "Bali Honeymoon" },
  { source: "europe", id: "greece-santorini-8n", escapes: ["islands", "romantic", "beach"], tourType: "Greece & Santorini" },
  { source: "asia", id: "sri-lanka-culture-beach", escapes: ["beach", "family"], tourType: "Sri Lanka Cultural & Beach Tour" },
  { source: "asia", id: "bangkok-pattaya", escapes: ["beach", "family"], tourType: "Bangkok – Pattaya Escape" },
  { source: "asia", id: "vietnam-north-south", escapes: ["cruise", "adventure"], tourType: "Vietnam with Ha Long Bay cruise" },
];

const inr = (n: number) => `From ₹${n.toLocaleString("en-IN")} per person`;

/** Turns PACKAGE_REFS into cards using only facts published in the source data. */
export function resolvePackages(): BeachPackage[] {
  return PACKAGE_REFS.flatMap((ref): BeachPackage[] => {
    if (ref.source === "asia") {
      const p = asiaPackages.find((x) => x.id === ref.id && x.active);
      if (!p) return [];
      const [min, max] = p.durationDays;
      const image: PageImage = p.image ? { src: p.image.src, alt: p.image.alt, label: p.name } : { src: null, alt: p.name, label: p.name };
      return [
        {
          id: p.id,
          title: p.name,
          destination: p.countryLabel,
          route: p.route,
          summary: p.description,
          duration: min === max ? `${min} days` : `${min}–${max} days`,
          price: p.price ? inr(p.price) : undefined,
          image,
          href: liveHref(p.href) ?? `${ASIA}#journeys`,
          escapes: ref.escapes,
          tourType: ref.tourType,
        },
      ];
    }
    const p = europePackages.find((x) => x.id === ref.id && x.active);
    if (!p) return [];
    const image: PageImage = p.image ? { src: p.image.src, alt: p.image.alt, label: p.title } : { src: null, alt: p.title, label: p.title };
    return [
      {
        id: p.id,
        title: p.title,
        destination: "Greece",
        route: p.destinations,
        summary: p.description,
        duration: p.duration,
        price: p.price ? inr(p.price) : undefined,
        image,
        href: liveHref(p.href) ?? `${EUROPE}#packages`,
        escapes: ref.escapes,
        tourType: ref.tourType,
      },
    ];
  });
}

/* ============================================================
   Escape planner
   ============================================================ */

export const PLANNER: PlannerChoice[] = [
  { id: "retreat", label: "Relaxing Island Retreat", text: "Lagoon views, long lunches and nowhere to be.", icon: "sun", escape: "islands", enquiryType: "international" },
  { id: "honeymoon", label: "Romantic Honeymoon", text: "Private villas, sunsets and time for two.", icon: "heart", escape: "romantic", enquiryType: "honeymoon" },
  {
    id: "cruise",
    label: "Luxury Cruise",
    text: "Ocean horizons, onboard dining and a new port each day.",
    icon: "waves",
    escape: "cruise",
    extra: { href: CRUISE_PATH, label: "Discover cruise experiences" },
    enquiryType: "international",
  },
  { id: "family", label: "Family Beach Holiday", text: "Easy beaches, family rooms and short transfers.", icon: "users", escape: "family", enquiryType: "family" },
  { id: "adventure", label: "Adventure & Water Sports", text: "Snorkelling, kayaking and boat days out.", icon: "compass", escape: "adventure", enquiryType: "international" },
  { id: "hopping", label: "Island-Hopping Experience", text: "Several islands, one unhurried journey.", icon: "route", escape: "islands", enquiryType: "international" },
];

/* ============================================================
   Seasons
   ============================================================ */

export const SEASONS: SeasonNote[] = [
  { id: "maldives", region: "Maldives", text: "Generally drier from about November to April and wetter from May to October. Resorts stay open year-round, but sea conditions and visibility vary." },
  { id: "mauritius-seychelles", region: "Mauritius & Seychelles", text: "Weather patterns differ by island and by coast, with trade winds and wetter months shifting through the year. We check the right coast for your dates." },
  { id: "bali", region: "Bali", text: "The dry season, roughly April to October, suits beach days and outdoor plans. The wet season brings short, heavy showers and greener landscapes." },
  { id: "thailand", region: "Thailand", text: "The Andaman coast (Phuket, Krabi) and the Gulf of Thailand have different rainy seasons, so the best beach depends on when you travel." },
  { id: "india", region: "Goa & the Andaman Islands", text: "The monsoon can suspend water sports and disrupt ferries. Outside it, beach conditions are generally settled — always check local advisories." },
  { id: "cruise", region: "International cruises", text: "Sailing seasons, routes and departure dates are set by each cruise line, and some itineraries run only in certain months." },
];

/* ============================================================
   Travel planning & cruise essentials
   ============================================================ */

export const GUIDE: GuideBlock[] = [
  {
    id: "documents",
    title: "Travel Documents & Entry",
    icon: "passport",
    intro: "Entry rules depend on your destination and your nationality, and they change.",
    points: [
      "Check passport validity — many countries ask for six months beyond your return date",
      "Visa, e-visa or visa-on-arrival rules differ for Nepali and Indian passport holders",
      "Transit stops may need their own visa or transit permit",
      "Andaman Islands and some Indian coastal areas may have permit rules for certain visitors",
    ],
  },
  {
    id: "cruise",
    title: "Cruise Booking Essentials",
    icon: "waves",
    intro: "Every cruise line works a little differently — we confirm the details for your sailing.",
    points: [
      "Cabin categories range from inside cabins to balcony and suite options",
      "Departure port, boarding time and check-in documents",
      "Baggage allowances and items not permitted onboard",
      "What the fare includes — meals, drinks, gratuities and shore excursions vary",
    ],
  },
  {
    id: "packing",
    title: "Beach Holiday Preparation",
    icon: "sun",
    intro: "Pack light and for the sun.",
    points: [
      "Reef-safe sunscreen, a hat and sunglasses",
      "Light, breathable clothing and a modest layer for temples",
      "Sandals plus water shoes for rocky beaches",
      "A reusable water bottle and any activity-specific gear",
    ],
  },
  {
    id: "safety",
    title: "Water Safety & Marine Respect",
    icon: "shield",
    intro: "The ocean is the attraction — treat it with care.",
    points: [
      "Follow lifeguard flags and your operator's safety briefing",
      "Never stand on or touch coral, and keep a distance from marine wildlife",
      "Choose licensed, responsible boat and dive operators",
      "Snorkel and swim within your ability, ideally with a buddy",
    ],
  },
  {
    id: "insurance",
    title: "Travel Insurance",
    icon: "umbrella",
    intro: "A policy that fits the trip you are actually taking.",
    points: [
      "Confirm cover for water sports, diving or cruise travel if you plan them",
      "Check medical and emergency evacuation cover abroad",
      "Look for cover for cancellations, missed connections and delays",
    ],
  },
];

/* ============================================================
   FAQs
   ============================================================ */

export const FAQS: Faq[] = [
  {
    question: "What destinations are best for a beach holiday?",
    answer:
      "It depends on what you want from the coast. The Maldives suits quiet island luxury, Phuket and Krabi offer island-hopping and lively beaches, Bali combines beaches with culture, and Sri Lanka's south coast pairs well with a cultural tour. Goa, Mauritius and Seychelles can be planned on request.",
  },
  {
    question: "Which destinations are suitable for a romantic island getaway?",
    answer:
      "The Maldives, Bali and Santorini are the most popular choices for couples, and Karvaahh has existing Maldives, Bali Honeymoon and Greece & Santorini packages. Mauritius and Seychelles can be planned on request.",
  },
  {
    question: "Can I combine a beach holiday with a cruise?",
    answer:
      "Often, yes. A Ha Long Bay cruise is already part of our Vietnam journey, Dubai holidays can add a marina cruise, and a beach stay can be combined with a Mediterranean or regional ocean cruise on request, subject to sailing dates.",
  },
  {
    question: "What is the best season for tropical island travel?",
    answer:
      "There is no single season. The Maldives is generally drier from November to April, Bali from April to October, and Thailand's Andaman and Gulf coasts have different rainy seasons. We check conditions for your exact destination and dates.",
  },
  {
    question: "Are family-friendly beach packages available?",
    answer:
      "Yes. The Bangkok – Pattaya Escape and the Sri Lanka Cultural & Beach Tour are well suited to families, and Dubai and Singapore holidays work well with children. We can adjust hotels, room types and pace for your family.",
  },
  {
    question: "What is usually included in a cruise package?",
    answer:
      "It varies by cruise line and fare. Cabins and main meals are usually included, while drinks, gratuities, Wi-Fi and shore excursions may be extra. We confirm exactly what your chosen sailing includes before you book.",
  },
  {
    question: "Do I need a visa for international beach destinations?",
    answer:
      "It depends on your nationality and destination. Some destinations offer visa-free entry or visa on arrival to Nepali or Indian passport holders, while others require a visa in advance. Rules change, so always check official sources — we can guide you on documents.",
  },
  {
    question: "Can I request a customized honeymoon or island holiday?",
    answer:
      "Yes. Every package can be customized, and destinations without a fixed package — such as Mauritius, Seychelles, Goa or the Andaman Islands — are planned around your dates, budget and travel style.",
  },
  {
    question: "How far in advance should I enquire about cruise packages?",
    answer:
      "As early as possible. Popular sailings, cabin categories and peak holiday dates can fill well ahead, so we recommend enquiring several months before you travel, especially for honeymoons and school holidays.",
  },
  {
    question: "How can I book a beach or cruise holiday with Karvaahh Travels?",
    answer:
      "Choose a package or destination on this page and tap Enquire Now, send us a WhatsApp message, or fill in the enquiry form on our contact page. We will confirm availability, hotels, inclusions and a price for your dates before you book.",
  },
];

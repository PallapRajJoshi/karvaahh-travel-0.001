/**
 * Copy, links and SEO for /packages/northeast-india.
 *
 * ⚠ Content rules (same as the other Karvaahh package pages):
 *  - Karvaahh has no published Northeast India package yet. Nothing here
 *    states a price, duration, hotel, inclusion, permit fee or departure.
 *    Journeys are offered as tailor-made trips, quoted on request.
 *  - Every href points at a route that exists today:
 *      · /destinations?country=india&q=… — the live destination guide, which
 *        holds records for Sikkim, Gangtok, North Sikkim, Shillong, Guwahati,
 *        Kamakhya, Kaziranga, Manas, Tawang and Arunachal Pradesh
 *        (lib/destinations/data/india.ts).
 *      · /contact?type=…&destination=… — pre-fills the enquiry form
 *        (lib/contact/prefill.ts).
 *  - Permits, seasonal access, park openings and festival dates are never
 *    guaranteed; the page tells travellers to verify current official rules.
 *  - Each state and community is described on its own terms, not as part of
 *    one interchangeable "Northeast culture".
 */

import { contactInfo } from "@/lib/navigation-data";
import type { CardLink, StateId } from "./filters";
import { IMAGES, type Img } from "./images";

export const site = {
  name: "Karvaahh",
  tagline: "Live to Travel",
  url: "https://karvaahh.in",
  path: "/packages/northeast-india",
} as const;

export const pageUrl = `${site.url}${site.path}`;

export const links = {
  home: "/",
  packagesHub: "/packages",
  destinationsHub: "/destinations",
  contact: "/contact",
  cancellation: "/cancellation-policy",
} as const;

type TravelType = "india-tours" | "family" | "honeymoon" | "adventure-trekking" | "spiritual-pilgrimage" | "customized";

/** Pre-filled enquiry. `destination` lands in the form's destination field. */
export function enquiryHref(destination?: string, type: TravelType = "india-tours") {
  const query = new URLSearchParams({ type });
  if (destination) query.set("destination", destination);
  return `${links.contact}?${query.toString()}`;
}

/** Filtered view of the live destination guide (country + search are URL state there). */
export function guideHref(q: string) {
  return `${links.destinationsHub}?${new URLSearchParams({ country: "india", q }).toString()}#explore`;
}

export const guide = (label: string, q: string): CardLink => ({ label, href: guideHref(q), kind: "page" });
export const ask = (label: string, destination: string, type?: TravelType): CardLink => ({
  label,
  href: enquiryHref(destination, type),
  kind: "enquiry",
});

export const anchors = {
  states: "northeast-states",
  places: "northeast-destinations",
  experiences: "northeast-experiences",
  journeys: "northeast-journeys",
  culture: "local-stories",
  seasons: "best-time-to-visit",
  plan: "plan-your-trip",
  itineraries: "suggested-itineraries",
  faq: "faq",
  cta: "start-planning",
} as const;

export const breadcrumbs: { label: string; href?: string }[] = [
  { label: "Home", href: links.home },
  { label: "Packages", href: links.packagesHub },
  // There is no India packages index page yet, so this crumb is not linked.
  { label: "India" },
  { label: "Northeast India Tour Packages" },
];

export const hero = {
  eyebrow: "Discover India's Northeastern Frontier",
  title: "Northeast India Tour Packages",
  subtitle:
    "Discover a remarkable world of misty mountains, living traditions, breathtaking waterfalls, lush forests, peaceful monasteries, and extraordinary journeys across India's beautiful northeastern states with Karvaahh Travels.",
  image: IMAGES.hero,
  primaryCta: { label: "Explore Northeast India", href: `#${anchors.states}` },
  secondaryCta: { label: "Discover Hidden Destinations", href: `#${anchors.places}` },
  facts: ["Eight states, each with its own story", "Himalaya, rainforest & river islands", "Tailor-made, permit-aware planning"],
} as const;

export const headings = {
  states: {
    eyebrow: "The eight states",
    title: "Eight States. Countless Stories. One Extraordinary Journey.",
    subtitle:
      "From the high monasteries of Arunachal Pradesh and Sikkim to the river islands of Assam and the palaces of Tripura, every state has its own landscapes, languages and traditions.",
  },
  places: {
    eyebrow: "Where to go",
    title: "Places That Make Northeast India Extraordinary",
    subtitle:
      "Filter by what draws you. Where our destination guide covers a place, the card opens it; otherwise it starts a tailor-made enquiry.",
  },
  experiences: {
    eyebrow: "Travel styles",
    title: "Choose Your Northeast India Adventure",
    subtitle: "Mountain roads, rainforest gorges, grassland safaris or village stays. Start from the kind of trip that fits you.",
  },
  journeys: {
    eyebrow: "Karvaahh journeys",
    title: "Find Your Perfect Northeast India Journey",
    subtitle:
      "We plan Northeast India trips to order rather than as fixed departures. These are the journeys travellers ask us for most; each is shaped around your dates, pace and group.",
    note: "Duration, stays, transport, permits and price are confirmed in your written itinerary and quote. Nothing on this page is a fixed departure or a guaranteed inclusion.",
  },
  culture: {
    eyebrow: "Responsible travel",
    title: "Travel Beyond the Landscape. Connect With Local Stories.",
    subtitle:
      "Northeast India is home to hundreds of distinct communities, each with its own language, dress, food and festivals. The best way to understand the region is slowly, with local guides and good manners.",
  },
  seasons: {
    eyebrow: "When to go",
    title: "Best Time to Visit Northeast India",
    subtitle:
      "Climate varies enormously between the Brahmaputra plains, the Meghalaya plateau and the high Himalaya. Use this as a guide, then plan around the states you choose.",
    note: "Festival dates, road openings, park seasons and weather change from year to year. Check them before you travel; we confirm them for your dates when we plan.",
  },
  plan: {
    eyebrow: "Before you go",
    title: "Northeast India Travel Planning Guide",
    subtitle: "Getting there, permits, packing and the conditions that shape every itinerary in the region.",
  },
  itineraries: {
    eyebrow: "Route ideas",
    title: "Suggested Travel Itineraries",
    subtitle:
      "Route outlines we commonly build on. They are suggested concepts, not bookable packages: length, order and stops are tailored to you.",
  },
  faq: {
    eyebrow: "Good to know",
    title: "Northeast India Tour FAQs",
  },
} as const;

/* ------------------------------------------------------------------ */
/* The eight states                                                    */
/* ------------------------------------------------------------------ */

export type State = {
  id: StateId;
  name: string;
  /** Short identity line under the name. */
  theme: string;
  intro: string;
  tags: string[];
  image: Img;
  link: CardLink;
  /** Optional context shown under the intro. */
  note?: string;
};

export const states: State[] = [
  {
    id: "arunachal",
    name: "Arunachal Pradesh",
    theme: "Land of the dawn-lit mountains",
    intro:
      "India's largest northeastern state rises from subtropical forest to high Himalayan passes. The road over Sela Pass leads to Tawang, home to one of India's largest Buddhist monasteries, while valleys such as Ziro are home to communities with deep-rooted farming traditions.",
    tags: ["Tawang Monastery", "Sela Pass", "Mountain roads", "Village life"],
    image: IMAGES.arunachal,
    link: guide("Explore State", "Arunachal Pradesh"),
  },
  {
    id: "assam",
    name: "Assam",
    theme: "Rhinos, tea and the Brahmaputra",
    intro:
      "The Brahmaputra shapes Assam's broad green valley. Kaziranga's grasslands protect the world's largest population of the greater one-horned rhinoceros, Upper Assam is lined with tea estates, and Majuli's satras keep alive centuries-old Assamese Vaishnavite traditions.",
    tags: ["Kaziranga", "Majuli", "Tea gardens", "Brahmaputra"],
    image: IMAGES.assam,
    link: guide("Explore State", "Assam"),
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    theme: "The abode of clouds",
    intro:
      "A green plateau of gorges, caves and waterfalls, home to the Khasi, Jaintia and Garo peoples. Shillong is the hill capital, Sohra (Cherrapunji) is among the wettest places on earth, and Khasi villages have grown living root bridges across forest streams for generations.",
    tags: ["Shillong", "Sohra", "Living root bridges", "Dawki"],
    image: IMAGES.meghalaya,
    link: guide("Explore State", "Meghalaya"),
  },
  {
    id: "nagaland",
    name: "Nagaland",
    theme: "Hills of many tribes",
    intro:
      "Nagaland is home to many distinct Naga tribes, each with its own language, dress and customs. Kohima holds the memorials of the 1944 Battle of Kohima, and village visits and craft traditions are best experienced with local hosts who can share their community's story.",
    tags: ["Kohima", "Naga villages", "Handicrafts", "Festivals"],
    image: IMAGES.nagaland,
    link: ask("Explore State", "Nagaland tour"),
  },
  {
    id: "manipur",
    name: "Manipur",
    theme: "The jewelled valley",
    intro:
      "An oval valley ringed by hills, with Loktak Lake and its floating phumdis at its heart. On those phumdis lies Keibul Lamjao, a floating national park and home of the rare sangai deer, while Imphal is known for its women-run Ima Keithel market and classical Manipuri dance.",
    tags: ["Loktak Lake", "Keibul Lamjao", "Imphal", "Manipuri dance"],
    image: IMAGES.manipur,
    link: ask("Explore State", "Manipur tour"),
    note: "We review current local conditions and travel advisories before confirming any Manipur itinerary.",
  },
  {
    id: "mizoram",
    name: "Mizoram",
    theme: "Ridges, bamboo and blue hills",
    intro:
      "Mizoram's towns follow steep ridgelines above deep, bamboo-covered valleys. Aizawl clings to its hilltops, viewpoints such as Reiek look across rolling hills, and the Mizo community's traditions include the bamboo Cheraw dance and the spring festival of Chapchar Kut.",
    tags: ["Aizawl", "Hill viewpoints", "Mizo culture", "Quiet roads"],
    image: IMAGES.mizoram,
    link: ask("Explore State", "Mizoram tour"),
  },
  {
    id: "tripura",
    name: "Tripura",
    theme: "Palaces, temples and rock carvings",
    intro:
      "Tripura's royal past is visible in Agartala's Ujjayanta Palace, now the state museum, and in Neermahal, a water palace on Rudrasagar Lake. In the northern forests, Unakoti preserves large rock-cut reliefs of Shaivite deities, and the Tripura Sundari temple is an important Shakti shrine.",
    tags: ["Ujjayanta Palace", "Neermahal", "Unakoti", "Heritage"],
    image: IMAGES.tripura,
    link: ask("Explore State", "Tripura tour"),
  },
  {
    id: "sikkim",
    name: "Sikkim",
    theme: "A Himalayan state of its own",
    intro:
      "A small Himalayan state with a distinct identity, Sikkim joined the North Eastern Council in 2002. Gangtok is the base for Tsomgo Lake and Rumtek Monastery, Pelling looks out to Kanchenjunga beside Pemayangtse Monastery, and North Sikkim's valleys open up high mountain scenery.",
    tags: ["Gangtok", "Tsomgo Lake", "Pelling", "Monasteries"],
    image: IMAGES.sikkim,
    link: guide("Explore State", "Sikkim"),
  },
];

/* ------------------------------------------------------------------ */
/* Travel experiences (editorial)                                       */
/* ------------------------------------------------------------------ */

export type ExperienceTone = "mountain" | "forest" | "wildlife" | "river" | "spirit" | "culture" | "road";

export type Experience = {
  id: string;
  title: string;
  text: string;
  places: string[];
  image: Img;
  tone: ExperienceTone;
  link: { label: string; href: string };
};

export const experiences: Experience[] = [
  {
    id: "mountains",
    title: "Mountain Escapes",
    text: "Himalayan scenery, mountain villages, winding roads and high viewpoints, from Sela Pass on the way to Tawang to the Kanchenjunga views of West Sikkim.",
    places: ["Tawang", "Dirang", "Gangtok", "Pelling"],
    image: IMAGES.mountainRoad,
    tone: "mountain",
    link: { label: "Plan a mountain escape", href: enquiryHref("Northeast India mountain escape") },
  },
  {
    id: "waterfalls",
    title: "Waterfalls and Living Landscapes",
    text: "Cliff-edge waterfalls, limestone caves and forest trails on the Meghalaya plateau, including the walk down to Nongriat's double-decker root bridge for those comfortable with long flights of steps.",
    places: ["Sohra", "Nongriat", "Mawlynnong", "Dawki"],
    image: IMAGES.rootBridge,
    tone: "forest",
    link: { label: "Plan a Meghalaya trip", href: enquiryHref("Meghalaya waterfalls & root bridges") },
  },
  {
    id: "wildlife",
    title: "Wildlife and Nature",
    text: "Jeep safaris through the tall grasslands and forests of Kaziranga and Manas where permitted, birdwatching in wetland and forest, and the floating landscape of Keibul Lamjao. Park zones and seasons are set by the forest authorities.",
    places: ["Kaziranga", "Manas", "Keibul Lamjao"],
    image: IMAGES.kaziranga,
    tone: "wildlife",
    link: { label: "Ask about wildlife trips", href: enquiryHref("Assam wildlife tour (Kaziranga / Manas)") },
  },
  {
    id: "tea-river",
    title: "Tea Gardens and River Journeys",
    text: "Upper Assam's tea country, ferry crossings to Majuli, and evenings on the banks of the Brahmaputra. Tea estates differ in what they open to visitors, so we arrange visits where available.",
    places: ["Jorhat", "Majuli", "Guwahati"],
    image: IMAGES.brahmaputra,
    tone: "river",
    link: { label: "Plan an Assam journey", href: enquiryHref("Assam tea gardens & Majuli") },
  },
  {
    id: "monasteries",
    title: "Monasteries and Spiritual Heritage",
    text: "Buddhist monasteries in Tawang and Sikkim, Majuli's Vaishnavite satras, Kamakhya Temple in Guwahati and the carved deities of Unakoti. Visits follow each site's customs and timings.",
    places: ["Tawang", "Rumtek", "Pemayangtse", "Kamakhya"],
    image: IMAGES.monastery,
    tone: "spirit",
    link: { label: "Plan a spiritual route", href: enquiryHref("Northeast India monasteries & spiritual heritage", "spiritual-pilgrimage") },
  },
  {
    id: "cultures",
    title: "Indigenous Cultures and Traditions",
    text: "Handloom weaving, regional food, traditional architecture and community celebrations, experienced through local hosts and guides who can explain their own community's customs.",
    places: ["Kohima", "Ziro", "Mawlynnong", "Imphal"],
    image: IMAGES.craft,
    tone: "culture",
    link: { label: "See how to travel respectfully", href: `#${anchors.culture}` },
  },
  {
    id: "road-trips",
    title: "Offbeat Road Trips",
    text: "Long scenic drives to quieter corners such as Ziro, North Sikkim or the Mizo hills, planned only where road conditions, permits and the season allow.",
    places: ["Ziro", "North Sikkim", "Aizawl"],
    image: IMAGES.northSikkim,
    tone: "road",
    link: { label: "Plan an offbeat route", href: enquiryHref("Northeast India offbeat road trip", "adventure-trekking") },
  },
];

/* ------------------------------------------------------------------ */
/* Culture & responsible travel                                         */
/* ------------------------------------------------------------------ */

export const cultureThemes = [
  {
    id: "textiles",
    title: "Crafts and textiles",
    text: "Assam's muga and eri silks and the looms of Sualkuchi, Naga shawls with tribe-specific patterns, Manipuri handloom and Tripura's bamboo and cane work.",
  },
  {
    id: "food",
    title: "Regional cuisine",
    text: "An Assamese thali with masor tenga, Khasi jadoh in Shillong, Naga smoked pork with bamboo shoot, Manipur's eromba, and momos and thukpa in Sikkim.",
  },
  {
    id: "architecture",
    title: "Architecture and settlements",
    text: "Raised chang ghar homes of the Mising community on Majuli, Apatani villages in Ziro, and Mawlynnong, known for its community-kept village paths.",
  },
  {
    id: "celebrations",
    title: "Music, dance and celebrations",
    text: "Bihu in Assam, the Hornbill Festival in Nagaland each December, Losar in Sikkim and Tawang, Chapchar Kut in Mizoram and Wangala in Meghalaya's Garo Hills.",
  },
  {
    id: "heritage",
    title: "Monasteries and religious heritage",
    text: "Tawang, Rumtek and Pemayangtse monasteries, Majuli's satras in the tradition of Srimanta Sankardeva, Kamakhya Temple and Tripura's Unakoti.",
  },
  {
    id: "guides",
    title: "Local guides and community-led experiences",
    text: "Village guides at the root bridges, homestays in Meghalaya and Sikkim, and hosts who introduce their own community's traditions in their own words.",
  },
  {
    id: "tea",
    title: "Tea-growing traditions",
    text: "Assam's lowland tea estates along the Brahmaputra valley, and Sikkim's hillside Temi Tea Garden, each with its own growing style.",
  },
  {
    id: "conservation",
    title: "Conservation and sustainable tourism",
    text: "Protected landscapes such as Kaziranga, Manas and Keibul Lamjao, and village-led efforts like Khonoma in Nagaland, known for its community conservation.",
  },
] as const;

export const etiquette = [
  "Ask permission before photographing people, homes or ceremonies, and accept a no gracefully.",
  "Follow the customs of each monastery, temple and satra: dress modestly, remove shoes where asked and respect photography rules.",
  "Remember that each state and community has its own identity; ask rather than assume.",
  "Buy crafts, food and services from local makers, homestays and guides.",
  "Carry your waste out of villages, trails and protected areas, and keep a respectful distance from wildlife.",
] as const;

/* ------------------------------------------------------------------ */
/* Seasons + planning guide                                             */
/* ------------------------------------------------------------------ */

export const seasons = [
  {
    id: "spring",
    name: "Spring",
    months: "Mar – Apr",
    text: "Often suitable for sightseeing and outdoor experiences across many states, with flowering hills in places. Conditions still depend on the state and elevation.",
  },
  {
    id: "summer",
    name: "Summer",
    months: "May – early Jun",
    text: "A window for selected mountain destinations such as Sikkim and Tawang, while the plains turn warm and humid. Pre-monsoon showers are common.",
  },
  {
    id: "monsoon",
    name: "Monsoon",
    months: "Jun – Sep",
    text: "Heavy rain fills Meghalaya's waterfalls but can affect roads, trails and access, especially in exposed and hilly areas. Many national parks close or restrict entry.",
    caution: true,
  },
  {
    id: "autumn",
    name: "Autumn",
    months: "Oct – Nov",
    text: "Often favourable for scenic journeys, with clearer skies after the rains. Conditions still vary across the region.",
    pick: true,
  },
  {
    id: "winter",
    name: "Winter",
    months: "Dec – Feb",
    text: "Pleasant in many lower-altitude destinations and the usual time for wildlife parks and the Hornbill Festival. High Himalayan areas can see snow and severe cold.",
  },
] as const;

export const planningGuide = [
  {
    id: "reach",
    title: "How to reach Northeast India",
    text: "Guwahati is the main gateway by air and rail. Other states are reached through regional airports such as Imphal, Agartala, Dimapur, Aizawl and Itanagar, or by road; Sikkim is usually reached via Bagdogra airport or New Jalpaiguri station in West Bengal. From Nepal, the Kakarbhitta–Panitanki border crossing leads towards Siliguri.",
  },
  {
    id: "permits",
    title: "Inner Line Permits and other requirements",
    text: "Some states and specific areas have permit requirements that depend on your nationality and destination. Arunachal Pradesh, Nagaland, Mizoram and Manipur use an Inner Line Permit system for many Indian visitors, foreign nationals may need separate permits, and parts of Sikkim such as Tsomgo Lake and North Sikkim need their own. Rules change, so verify official requirements before booking.",
  },
  {
    id: "packing",
    title: "Packing and preparation",
    text: "Carry rain protection in every season, layered clothing for changing altitudes, comfortable walking shoes with good grip, valid photo ID and any regular medication. Mountain or trekking routes need extra warm layers and equipment, which we list with your itinerary.",
  },
  {
    id: "roads",
    title: "Road and weather conditions",
    text: "Mountain roads are long and winding, and heavy rain, landslides and snow can close routes or slow travel at short notice. Itineraries in the region need buffer time, and plans may change on the day for safety.",
  },
  {
    id: "wildlife",
    title: "Wildlife and protected areas",
    text: "National parks open by season and zone under forest department rules. Book safaris through authorised channels, follow your guide and park regulations, keep noise low and never feed or approach animals.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faqs = [
  {
    id: "states",
    q: "Which states are included in Northeast India?",
    a: "Northeast India is made up of eight states: Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim and Tripura. Sikkim, a Himalayan state with its own distinct identity, joined the North Eastern Council in 2002.",
  },
  {
    id: "places",
    q: "What are the best places to visit in Northeast India?",
    a: "Popular choices include Shillong, Sohra (Cherrapunji), the living root bridges and Dawki in Meghalaya; Kaziranga and Majuli in Assam; Tawang in Arunachal Pradesh; Gangtok and Pelling in Sikkim; Kohima in Nagaland; Loktak Lake in Manipur; and Unakoti and Agartala in Tripura. The right mix depends on your interests and the season.",
  },
  {
    id: "season",
    q: "What is the best season for a Northeast India tour?",
    a: "Autumn (October to November) and spring (March to April) suit many journeys. Winter is good for lower-altitude areas and wildlife parks, while high Himalayan areas can be very cold with snow. The June to September monsoon brings heavy rain that can affect roads and access, especially in Meghalaya.",
  },
  {
    id: "permits",
    q: "Are permits required for visiting Northeast India?",
    a: "For some places, yes. Arunachal Pradesh, Nagaland, Mizoram and Manipur use an Inner Line Permit system for many Indian visitors, foreign nationals may need other permits, and some areas of Sikkim need their own permits. Requirements depend on nationality and destination and can change, so check the official rules before booking. We advise on the permits your route needs.",
  },
  {
    id: "family",
    q: "Is Meghalaya suitable for family holidays?",
    a: "Yes, for most families. Shillong, Umiam Lake, the Sohra viewpoints and Dawki are easy to enjoy at a relaxed pace. Some highlights, such as the walk down to the Nongriat root bridge, involve thousands of steps, so we suggest gentler alternatives for young children or older travellers.",
  },
  {
    id: "wildlife",
    q: "Which destinations are best for nature and wildlife?",
    a: "Kaziranga and Manas in Assam are the best-known wildlife destinations, and Keibul Lamjao on Loktak Lake in Manipur is home to the sangai deer. For forests, waterfalls and caves, Meghalaya is a strong choice, while Sikkim and Arunachal Pradesh offer high mountain scenery. Park access is seasonal.",
  },
  {
    id: "combine",
    q: "Can multiple northeastern states be combined in one trip?",
    a: "Yes. Assam and Meghalaya pair naturally from Guwahati, and Arunachal Pradesh's Tawang route usually begins in Assam. Distances on mountain roads are long, so we recommend focusing on two or three states in one trip rather than all eight.",
  },
  {
    id: "packing",
    q: "What should I pack for a Northeast India holiday?",
    a: "Pack rain protection whatever the season, layers for changing temperatures and altitudes, comfortable walking shoes with good grip, valid photo ID for permits, and any personal medication. For Sikkim or Tawang in winter, add heavy warm clothing.",
  },
  {
    id: "custom",
    q: "Are customized Northeast India packages available?",
    a: "Yes. Karvaahh plans every Northeast India trip to order rather than as a fixed departure. We shape the states, route, pace, stays and transport around your dates and group, and confirm everything in a written itinerary and quote.",
  },
  {
    id: "enquire",
    q: "How can I enquire about a Karvaahh Northeast India tour?",
    a: `Use any Enquire button on this page or our contact page, and tell us your dates, starting city, group size and the states you want to see. You can also call our India team on ${contactInfo.india.phone}. We reply with a suggested itinerary and quote.`,
  },
] as const;

/* ------------------------------------------------------------------ */
/* Final CTA + SEO                                                     */
/* ------------------------------------------------------------------ */

export const finalCta = {
  title: "Start Planning Your Northeast India Journey",
  subtitle: "Tell us which states call to you and how you like to travel. We'll shape the route, permits, pace and stays around you.",
  image: IMAGES.closing,
  buttons: [
    { label: "Plan Your Custom Northeast Trip", href: enquiryHref("Northeast India tour", "customized"), variant: "primary" },
    { label: "Talk to Our Team", href: links.contact, variant: "ghost" },
  ],
  brand: `${site.name} — ${site.tagline}`,
} as const;

export const seo = {
  title: "Northeast India Tour Packages | Meghalaya, Assam, Sikkim & Arunachal | Karvaahh",
  description:
    "Plan a tailor-made Northeast India tour with Karvaahh: Meghalaya's waterfalls and root bridges, Kaziranga and Majuli in Assam, Tawang, Sikkim, Nagaland, Manipur, Mizoram and Tripura.",
  keywords: [
    "Northeast India tour packages",
    "Meghalaya tour package",
    "Assam Kaziranga tour",
    "Sikkim tour package",
    "Tawang tour",
    "Arunachal Pradesh tour",
    "Nagaland Hornbill Festival tour",
    "Northeast India tours from Nepal",
  ],
  ogImage: IMAGES.hero,
} as const;

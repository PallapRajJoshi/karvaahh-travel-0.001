import type { FaqItem, RelatedTrip, RouteHighlight, SeasonMonth, TrekFact } from "./types";
import { HIGH_POINT, TREK_DAYS } from "./itinerary";

const nf = new Intl.NumberFormat("en-IN");
export const formatMetres = (m: number) => `${nf.format(m)} m`;

export const TRIP = {
  slug: "manang-circuit-trek",
  name: "Manang Circuit Trek",
  subtitle: "With Tilicho Lake and Thorong La",
  path: "/packages/manang-circuit-trek",
  enquiryHref: "/contact?trip=manang-circuit-trek",
  heroImage: "/images/treks/manang-circuit/hero-thorong-la.jpg",
  heroAlt: "Trekkers crossing a snow-covered high pass strung with prayer flags beneath Himalayan peaks",
  /** Date the permit and rules content was last checked. Update when re-verified. */
  verifiedOn: "September 2026",
} as const;

export const heroFacts: TrekFact[] = [
  { label: "Duration", value: `${TREK_DAYS} days` },
  { label: "High point", value: formatMetres(HIGH_POINT), note: "Thorong La" },
  { label: "Grade", value: "Challenging" },
  { label: "Best seasons", value: "Mar–May · Oct–Nov" },
];

export const quickFacts: TrekFact[] = [
  { label: "Region", value: "Annapurna Conservation Area, Gandaki Province" },
  { label: "Start / finish", value: "Kathmandu / Kathmandu" },
  { label: "Trekking days", value: "11 days on foot", note: "including an acclimatisation day in Manang" },
  { label: "Daily walking", value: "3–10 hours", note: "most days 5–6 hours" },
  { label: "Highest sleep", value: formatMetres(4450), note: "Thorong Phedi" },
  { label: "Accommodation", value: "Teahouses on trek · hotels in Kathmandu & Pokhara" },
  { label: "Group size", value: "Private trips from 1 person · small groups up to 12" },
  { label: "Permits", value: "ACAP (arranged by Karvaahh)" },
];

export const overview = {
  lead:
    "A Himalayan circuit through the rain-shadow valley of Manang: glacial rivers, stone villages and the snow walls of Annapurna II and Gangapurna, then Tilicho Lake and the Thorong La pass at 5,416 m.",
  paragraphs: [
    "The trek follows the Marsyangdi river up from Besisahar through Chame and Pisang. As you climb, the forest gives way to the high, dry country of Manang, a valley in the rain shadow of the Annapurna range. The villages are flat-roofed stone clusters with prayer walls and old gompas, and the people, the Nyeshangte, share much of their culture with their Tibetan neighbours to the north.",
    "Our route takes the high trail through Ghyaru and Ngawal and builds in a full rest day in Manang. It then detours west to Tilicho Lake, one of the highest lakes of its size anywhere, at roughly 4,919 m. Only then does it turn north for Thorong La and the descent to Muktinath. That pacing makes the pass safer, and far more enjoyable.",
  ],
  highlights: [
    "Cross Thorong La (5,416 m), one of the world's great trekking passes",
    "Stand on the shore of turquoise Tilicho Lake beneath Tilicho Peak",
    "Walk the high balcony trail via Ghyaru and Ngawal, facing Annapurna II–IV",
    "Explore Manang, Braga and Khangsar, with their gompas and prayer walls",
    "Finish at Muktinath, sacred to both Hindus and Buddhists",
    "An acclimatisation-first itinerary led by a licensed Karvaahh guide",
  ],
};

export const routeHighlights: RouteHighlight[] = [
  {
    id: "chame",
    name: "Chame",
    altitude: formatMetres(2670),
    kicker: "Day 3",
    description:
      "Manang's district headquarters, where pine forest meets the first big views of Annapurna II. Natural hot springs sit beside the Marsyangdi.",
    image: "/images/treks/manang-circuit/chame.jpg",
    imageAlt: "Stone houses and prayer flags in Chame with forested slopes behind",
  },
  {
    id: "pisang",
    name: "Upper Pisang & Ghyaru",
    altitude: formatMetres(3300),
    kicker: "Days 4–5",
    description:
      "Tiered stone villages on the sunny side of the valley. The high trail between them is the best Annapurna viewpoint on the whole approach.",
    image: "/images/treks/manang-circuit/upper-pisang.jpg",
    imageAlt: "Upper Pisang village and monastery facing the snow face of Annapurna II",
  },
  {
    id: "manang",
    name: "Manang",
    altitude: formatMetres(3519),
    kicker: "Days 6–7",
    description:
      "The heart of the valley. A glacier and its lake sit on the doorstep, with gompas on the cliffs above. Your rest-and-acclimatise base.",
    image: "/images/treks/manang-circuit/manang.jpg",
    imageAlt: "Flat-roofed village of Manang below the Gangapurna glacier",
  },
  {
    id: "tilicho",
    name: "Tilicho Lake",
    altitude: formatMetres(4919),
    kicker: "Day 10",
    description:
      "A vast glacial lake held beneath the ice cliffs of Tilicho Peak. The dawn climb is hard work, and the colour of the water rewards it.",
    image: "/images/treks/manang-circuit/tilicho-lake.jpg",
    imageAlt: "Turquoise Tilicho Lake beneath glaciated mountain walls",
  },
  {
    id: "thorong-la",
    name: "Thorong La",
    altitude: formatMetres(5416),
    kicker: "Day 13",
    description:
      "The high point of the trip: a wind-scoured saddle of prayer flags and chortens between Manang and Mustang.",
    image: "/images/treks/manang-circuit/thorong-la.jpg",
    imageAlt: "Prayer flags and a signboard at the top of Thorong La pass",
  },
  {
    id: "muktinath",
    name: "Muktinath",
    altitude: formatMetres(3800),
    kicker: "Days 13–14",
    description:
      "A temple complex of 108 water spouts and an eternal flame, and a pilgrimage site for Hindus and Buddhists alike.",
    image: "/images/treks/manang-circuit/muktinath.jpg",
    imageAlt: "Muktinath temple courtyard with a row of water spouts",
  },
];

export const inclusions = {
  included: [
    "Airport pick-up and drop-off in Kathmandu",
    "2 nights' hotel in Kathmandu and 1 night in Pokhara, twin-share with breakfast",
    "Teahouse accommodation throughout the trek",
    "All meals on trek (breakfast, lunch, dinner)",
    "Licensed, first-aid trained English-speaking trek guide",
    "Porter support (1 porter per 2 trekkers, max 20 kg shared)",
    "Annapurna Conservation Area Permit (ACAP)",
    "Ground transport Kathmandu–Dharapani and Pokhara–Kathmandu",
    "Jomsom–Pokhara flight (or road transfer if flights are grounded)",
    "Guide and porter wages, insurance, food and lodging",
    "Oximeter checks and a group first-aid kit",
  ],
  excluded: [
    "International flights and Nepal visa fee",
    "Travel insurance that covers helicopter evacuation above 5,500 m",
    "Lunch and dinner in Kathmandu and Pokhara",
    "Hot showers, battery charging and Wi-Fi at teahouses",
    "Personal trekking gear, snacks and drinks",
    "Tips for guide and porter",
    "Extra costs from weather delays, landslides or early departure",
  ],
};

export const seasons: SeasonMonth[] = [
  { month: "Jan", rating: "avoid", note: "Deep snow; Thorong La and the Tilicho trail often closed" },
  { month: "Feb", rating: "avoid", note: "Very cold; pass frequently snowbound" },
  { month: "Mar", rating: "good", note: "Clear, cold mornings; snow lingers high up" },
  { month: "Apr", rating: "best", note: "Warm days, rhododendrons lower down" },
  { month: "May", rating: "best", note: "Stable weather before the monsoon" },
  { month: "Jun", rating: "caution", note: "Monsoon arriving; landslides on the approach road" },
  { month: "Jul", rating: "caution", note: "Upper Manang is in the rain shadow, but the approach is wet" },
  { month: "Aug", rating: "caution", note: "Leeches and landslides below Chame" },
  { month: "Sep", rating: "good", note: "Monsoon clearing; lush and quiet late in the month" },
  { month: "Oct", rating: "best", note: "The classic season: crisp air and sharp views" },
  { month: "Nov", rating: "best", note: "Dry and stable; colder nights" },
  { month: "Dec", rating: "caution", note: "Clear but cold; early snow can close the pass" },
];

export const permits = {
  intro:
    "Every trekker in the Annapurna region needs one entry permit. Karvaahh arranges it for you before the trek.",
  items: [
    {
      name: "Annapurna Conservation Area Permit (ACAP)",
      detail: "NPR 3,000 for foreign nationals · NPR 1,000 for SAARC nationals (including India). Single entry, valid for the whole trek.",
    },
    {
      name: "Licensed guide (mandatory)",
      detail:
        "Since April 2023, foreign trekkers in Nepal's national parks and conservation areas must trek with a licensed guide arranged through a registered agency. Every Karvaahh trek includes one.",
    },
    {
      name: "TIMS card",
      detail: "No longer required on Annapurna routes. Many older guides still list it.",
    },
  ],
  bring: ["Passport (valid 6+ months) with your Nepal visa", "4 passport-size photos", "Travel insurance certificate"],
};

export const safety = [
  {
    title: "Built-in acclimatisation",
    body: "A full rest day in Manang and the Tilicho detour mean you gain altitude slowly, spending several nights near 4,000 m before the pass.",
  },
  {
    title: "Daily health checks",
    body: "Your guide checks blood-oxygen and pulse every evening above 3,000 m and knows the signs of AMS, HAPE and HACE.",
  },
  {
    title: "Turn-around decisions",
    body: "If weather or health makes the pass unsafe, your guide decides on the day. Tilicho can be dropped and the pass retimed. We never push a crossing.",
  },
  {
    title: "Evacuation ready",
    body: "Helicopter rescue can be arranged from most of the route. Your insurance must cover evacuation up to 5,500 m or more.",
  },
];

export const preparation = [
  "Good cardiovascular fitness. Aim for regular 4–6 hour hikes with elevation gain in the months before.",
  "No technical climbing, but the pass day is long, cold and at extreme altitude.",
  "A 4-season sleeping bag (rated to about −15 °C), down jacket, and broken-in boots.",
  "Talk to your doctor about altitude medication before you travel.",
];

export const faqs: FaqItem[] = [
  {
    question: "How difficult is the Manang Circuit Trek?",
    answer:
      "It is a challenging, non-technical trek. Most days are 5–6 hours of walking, but the Thorong La day is 8–10 hours and reaches 5,416 m, and the Tilicho Lake day climbs to about 4,919 m. You do not need climbing experience, but you should be fit and comfortable hiking for several consecutive days.",
  },
  {
    question: "Is the Manang Circuit the same as the Annapurna Circuit?",
    answer:
      "It follows the heart of the Annapurna Circuit, from the Marsyangdi valley through Manang and over Thorong La to Muktinath. It adds a side trip to Tilicho Lake and uses the higher, quieter trail via Ghyaru and Ngawal. It skips the lower Kali Gandaki section after Jomsom.",
  },
  {
    question: "Do I need a guide for this trek?",
    answer:
      "Yes. Since April 2023, foreign trekkers in Nepal's national parks and conservation areas, including the Annapurna region, must be accompanied by a licensed guide arranged through a registered trekking agency. A licensed Karvaahh guide is included on every departure.",
  },
  {
    question: "Which permits do I need, and how much do they cost?",
    answer: `You need the Annapurna Conservation Area Permit (ACAP): NPR 3,000 for foreign nationals and NPR 1,000 for SAARC nationals, including Indian citizens. The TIMS card is no longer required on Annapurna routes. Karvaahh arranges your permit as part of the trip. Fees were last checked in ${TRIP.verifiedOn} and are subject to change by the authorities.`,
  },
  {
    question: "Can I skip Tilicho Lake?",
    answer:
      "Yes. Without the Tilicho detour the trek is about three days shorter: from Manang you continue directly to Yak Kharka and Thorong Phedi. We still recommend keeping the Manang rest day. The Tilicho trail can also close after heavy snow, and your guide will reroute if it does.",
  },
  {
    question: "What is the best time to do the trek?",
    answer:
      "October–November and April–May are best, with stable weather and clear views. March and September are good shoulder months. December to February often brings heavy snow that can close Thorong La and the Tilicho trail.",
  },
  {
    question: "What is the accommodation like?",
    answer:
      "Teahouses on the trek are family-run lodges with simple twin rooms and shared bathrooms. The higher you go, the more basic they become. In Kathmandu and Pokhara you stay in comfortable hotels.",
  },
  {
    question: "What happens if I get altitude sickness?",
    answer:
      "Your guide checks your oxygen level and symptoms daily above 3,000 m. Mild symptoms usually mean a rest day. Anything more serious means descending immediately, and if needed a helicopter evacuation, which is why insurance covering evacuation above 5,500 m is essential.",
  },
];

export const relatedTrips: RelatedTrip[] = [
  {
    title: "Annapurna Base Camp Trek",
    href: "/packages/annapurna-base-camp-trek",
    meta: "11 days · Moderate · 4,130 m",
    image: "/images/treks/related/annapurna-base-camp.jpg",
    imageAlt: "Annapurna Base Camp surrounded by snow peaks",
  },
  {
    title: "Muktinath Yatra",
    href: "/spiritual-journeys/muktinath-yatra",
    meta: "Pilgrimage · Mustang",
    image: "/images/treks/related/muktinath.jpg",
    imageAlt: "Muktinath temple in the Mustang valley",
  },
  {
    title: "Gandaki Province",
    href: "/destinations/gandaki-province",
    meta: "Destination guide",
    image: "/images/treks/related/gandaki.jpg",
    imageAlt: "Phewa Lake in Pokhara with the Annapurna range behind",
  },
];

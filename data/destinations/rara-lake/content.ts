import type {
  WhyVisitCard,
  SeasonCard,
  RouteOption,
  AccommodationCategory,
  EssentialItem,
} from "./types";

/* -------------------------------------------------------------------- */
/* Hero                                                                  */
/* -------------------------------------------------------------------- */

export const heroContent = {
  eyebrow: "OFFBEAT NEPAL · KARNALI PROVINCE",
  heading: "Rara Lake — Nepal's Hidden Himalayan Paradise",
  subtitle:
    "A turquoise wilderness cradled in Nepal's remote west — where forested ridgelines, silence, and untouched alpine water meet.",
  primaryCta: { label: "Explore Rara Packages", href: "/packages?destination=rara-lake" },
  secondaryCta: { label: "Plan Your Rara Journey", href: "/contact?trip=rara-lake" },
  facts: ["Mugu District", "2,990 m", "Rara National Park"],
  image: {
    src: "/images/destinations/rara-lake/hero-rara-lake.jpg",
    alt: "Turquoise waters of Rara Lake framed by pine forest and Himalayan peaks",
  },
};

/* -------------------------------------------------------------------- */
/* Breadcrumb                                                            */
/* -------------------------------------------------------------------- */

export const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Offbeat & Unexplored", href: "/offbeat-unexplored" },
  { label: "Rara Lake", href: "/offbeat-unexplored/rara-lake" },
];

/* -------------------------------------------------------------------- */
/* Overview — verbatim destination highlight, do not edit wording        */
/* -------------------------------------------------------------------- */

export const overviewContent = {
  heading: "Nepal's Largest Freshwater Lake",
  paragraph:
    "Rara Lake, nestled in the remote Mugu district of Nepal's Karnali Province at an altitude of 2,990 meters, is Nepal's largest freshwater lake, renowned for its crystal-clear turquoise waters, serene alpine landscapes, and untouched Himalayan wilderness. Surrounded by the lush forests of Rara National Park, the destination offers breathtaking views of Murma Top, Chuchemara Hill, and the snow-capped Himalayan ranges. Explore the peaceful lakeshore trails, enjoy boating, birdwatching, nature photography, and scenic hikes through pine and juniper forests. Discover the traditional charm of Murma Village, the cultural heritage of Sinja Valley, the historic settlements of Jumla Bazaar, and the local lifestyle of Gamgadhi. With opportunities for camping, horse riding, wildlife spotting, and authentic homestay experiences, Rara is an ideal destination for travelers seeking solitude, natural beauty, and offbeat Himalayan adventures. The region is accessible via Talcha Airport or an overland journey through the Karnali Highway, with spring and autumn offering pleasant weather and spectacular mountain views.",
  image: {
    src: "/images/destinations/rara-lake/overview-lakeshore.jpg",
    alt: "Lakeshore trail along Rara Lake with pine forest reflected in still water",
  },
};

/* -------------------------------------------------------------------- */
/* Why Visit                                                             */
/* -------------------------------------------------------------------- */

export const whyVisitCards: WhyVisitCard[] = [
  {
    id: "largest-lake",
    title: "Nepal's Largest Freshwater Lake",
    description: "A vast alpine lake unmatched in scale anywhere else in the country.",
    image: { src: "/images/destinations/rara-lake/why-largest-lake.jpg", alt: "Wide view across Rara Lake" },
    icon: "lake",
  },
  {
    id: "turquoise-water",
    title: "Crystal-Clear Turquoise Waters",
    description: "Still, glass-like water that shifts color with the light through the day.",
    image: { src: "/images/destinations/rara-lake/why-turquoise-water.jpg", alt: "Close-up of turquoise water at Rara Lake shoreline" },
    icon: "droplet",
  },
  {
    id: "remote-wilderness",
    title: "Remote Himalayan Wilderness",
    description: "Pristine pine and juniper forest largely untouched by mass tourism.",
    image: { src: "/images/destinations/rara-lake/why-wilderness.jpg", alt: "Dense pine forest surrounding Rara National Park" },
    icon: "forest",
  },
  {
    id: "scenic-viewpoints",
    title: "Scenic Viewpoints & Mountain Panoramas",
    description: "Murma Top and Chuchemara Hill open onto sweeping Himalayan views.",
    image: { src: "/images/destinations/rara-lake/why-viewpoints.jpg", alt: "Panoramic mountain view from Murma Top" },
    icon: "mountain",
  },
  {
    id: "local-culture",
    title: "Authentic Local Culture",
    description: "Traditional village life around Murma, Gamgadhi, and the Sinja Valley.",
    image: { src: "/images/destinations/rara-lake/why-culture.jpg", alt: "Traditional houses in Murma Village" },
    icon: "home",
  },
  {
    id: "offbeat",
    title: "Offbeat, Away From the Crowds",
    description: "A slower, quieter alternative to Nepal's better-known trekking routes.",
    image: { src: "/images/destinations/rara-lake/why-offbeat.jpg", alt: "Empty trail beside Rara Lake at dawn" },
    icon: "compass",
  },
];

/* -------------------------------------------------------------------- */
/* Nature, Wildlife & Landscape                                          */
/* -------------------------------------------------------------------- */

export const natureContent = {
  heading: "Nature, Wildlife & Landscape",
  intro:
    "Rara National Park protects one of Nepal's least-disturbed forest ecosystems, built around the lake itself.",
  points: [
    "Pine, juniper, and mixed temperate forest surround the lake basin.",
    "Alpine meadows and classic Himalayan terrain unfold above the tree line.",
    "Native birdlife and other wildlife can be observed with patience and a quiet approach.",
    "The lake's color and surrounding vegetation shift with the seasons.",
    "Responsible viewing and Leave No Trace practices help protect a fragile, remote habitat.",
  ],
  note: "Wildlife sightings are never guaranteed — species presence varies with season, time of day, and conditions.",
  image: {
    src: "/images/destinations/rara-lake/nature-forest.jpg",
    alt: "Pine and juniper forest trail inside Rara National Park",
  },
};

/* -------------------------------------------------------------------- */
/* Culture & Local Life                                                  */
/* -------------------------------------------------------------------- */

export const cultureContent = {
  heading: "Culture & Local Life",
  points: [
    "Traditional village life continues in and around Mugu district.",
    "Local food reflects regional Karnali culinary traditions.",
    "Community interactions and homestay experiences offer a direct view of daily life.",
    "Sinja Valley carries historic and cultural significance for the region.",
    "Gamgadhi and Jumla host local markets and everyday regional life.",
  ],
  note: "Descriptions here are kept general and factual — specific festivals or community practices are not claimed without verified detail.",
  image: {
    src: "/images/destinations/rara-lake/culture-village.jpg",
    alt: "Local life in Murma Village near Rara Lake",
  },
};

/* -------------------------------------------------------------------- */
/* Best Time to Visit                                                    */
/* -------------------------------------------------------------------- */

export const bestTimeIntro =
  "Weather and access at Rara vary significantly by season. No season guarantees clear skies or open roads — plan with flexibility.";

export const seasons: SeasonCard[] = [
  {
    id: "spring",
    season: "Spring",
    months: "March – May",
    description: "Forest landscapes come alive, with generally pleasant daytime conditions for scenic exploration.",
  },
  {
    id: "summer",
    season: "Summer / Monsoon",
    months: "June – August",
    description: "Lush, green surroundings, but rain, muddy trails, and transport disruptions may affect travel.",
  },
  {
    id: "autumn",
    season: "Autumn",
    months: "September – November",
    description: "Generally favorable conditions for mountain views, photography, and outdoor activities.",
  },
  {
    id: "winter",
    season: "Winter",
    months: "December – February",
    description: "Cold conditions, possible snowfall, and potential access challenges around the lake.",
  },
];

/* -------------------------------------------------------------------- */
/* How to Reach                                                          */
/* -------------------------------------------------------------------- */

export const howToReachContent = {
  heading: "How to Reach Rara Lake",
  intro:
    "Rara is a remote destination in western Nepal. Routes, schedules, and travel times below are illustrative and should be verified before booking.",
  byAir: {
    heading: "By Air",
    points: [
      "Fly to Talcha Airport, subject to current flight schedules and operational conditions.",
      "Additional ground transfer and walking are typically required from Talcha to reach the lake itself.",
      "Jumla Airport is a possible regional gateway, subject to route availability and onward transport.",
    ],
  },
  byRoad: {
    heading: "By Road",
    points: [
      "The overland route runs via the Karnali Highway and connecting regional roads.",
      "Routes may pass through other parts of western Nepal depending on the starting point.",
      "Terrain is remote and mountainous — expect long travel times, variable road conditions, and seasonal access challenges.",
    ],
  },
  verificationNote:
    "Distances, flight schedules, road travel durations, fares, and connections are not stated here and should be confirmed directly before travel.",
};

export const routeOptions: RouteOption[] = [
  { id: "kathmandu", label: "Kathmandu", mode: ["air", "road"], note: "Most common starting point; typically combines a flight leg with ground transfer." },
  { id: "nepalgunj", label: "Nepalgunj", mode: ["air", "road"], note: "A regional hub with onward connections toward Karnali Province." },
  { id: "surkhet", label: "Surkhet", mode: ["road"], note: "Overland approach through the Karnali Highway corridor." },
  { id: "jumla", label: "Jumla", mode: ["air", "road"], note: "Closest regional gateway, with onward road or trail access toward Rara." },
];

/* -------------------------------------------------------------------- */
/* Accommodation                                                         */
/* -------------------------------------------------------------------- */

export const accommodationIntro =
  "Accommodation around Rara is limited by the region's remoteness — availability and amenities vary and should be confirmed in advance.";

export const accommodationCategories: AccommodationCategory[] = [
  {
    id: "lakeside-hotels",
    title: "Lakeside Hotels & Lodges",
    description: "Simple lodging options positioned close to the lakeshore.",
    image: { src: "/images/destinations/rara-lake/stay-lakeside.jpg", alt: "Lodge near the Rara Lake shoreline" },
  },
  {
    id: "guesthouses",
    title: "Guesthouses & Basic Local Stays",
    description: "Modest local guesthouses in and around Gamgadhi and nearby settlements.",
    image: { src: "/images/destinations/rara-lake/stay-guesthouse.jpg", alt: "Local guesthouse in the Rara region" },
  },
  {
    id: "homestays",
    title: "Community-Based Homestays",
    description: "Stay with local families where homestay programs are available.",
    image: { src: "/images/destinations/rara-lake/stay-homestay.jpg", alt: "Homestay house in Murma Village" },
  },
  {
    id: "camping",
    title: "Camping",
    description: "Camping where permitted, for a closer connection to the landscape.",
    image: { src: "/images/destinations/rara-lake/stay-camping.jpg", alt: "Campsite near Rara Lake at dusk" },
  },
];

/* -------------------------------------------------------------------- */
/* Travel Essentials & Safety                                            */
/* -------------------------------------------------------------------- */

export const essentialsIntro =
  "Rara is remote — pack deliberately and confirm current rules before you go.";

export const essentialItems: EssentialItem[] = [
  { id: "layers", label: "Warm layers and weather-appropriate clothing" },
  { id: "shoes", label: "Comfortable hiking shoes" },
  { id: "rain-sun", label: "Rain protection and sun protection" },
  { id: "medication", label: "Personal medication and basic first-aid supplies" },
  { id: "cash", label: "Cash for remote areas where digital payments may be limited" },
  { id: "power-maps", label: "Power bank and offline maps" },
  { id: "water", label: "Drinking water and responsible waste disposal" },
  { id: "confirm", label: "Advance confirmation of transport and accommodation" },
  { id: "altitude", label: "Awareness of altitude, weather, and remote-area conditions" },
];

export const essentialsNote =
  "Check current Rara National Park regulations, permits, local access rules, and activity availability before departure.";

/* -------------------------------------------------------------------- */
/* Final CTA                                                             */
/* -------------------------------------------------------------------- */

export const finalCtaContent = {
  heading: "Discover the Untouched Beauty of Rara Lake",
  supportingText:
    "Escape into the peaceful landscapes of western Nepal, explore pristine Himalayan nature, and experience the quiet charm of Rara with a journey tailored to your travel style.",
  buttons: [
    { label: "Explore Rara Packages", href: "/packages?destination=rara-lake" },
    { label: "Customize Your Journey", href: "/contact?trip=rara-lake&type=custom" },
    { label: "Contact Karvaahh", href: "/contact" },
  ],
  image: {
    src: "/images/destinations/rara-lake/cta-rara-lake.jpg",
    alt: "Sunset over Rara Lake with silhouetted pine forest",
  },
};

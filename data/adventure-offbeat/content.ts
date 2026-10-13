/* ============================================================
   NEPAL ADVENTURE & OFFBEAT TOURS — PAGE CONTENT
   ------------------------------------------------------------
   Copy for /packages/nepal/adventure-offbeat-tours. No prices,
   ratings, guaranteed conditions or invented services.
   ============================================================ */

import type { RelatedTour } from "@/components/activities/experience/product-types";
import * as I from "./images";
import type { Collection, ExperienceId, ExperiencePanel, GuideTopic } from "./types";

export const PAGE_PATH = "/packages/nepal/adventure-offbeat-tours";

export const SEO = {
  title: "Adventure & Offbeat Tours in Nepal | Hidden Valleys, Lakes & Remote Treks | Karvaahh",
  socialTitle: "Discover Nepal Beyond the Ordinary — Adventure & Offbeat Tours",
  description:
    "Explore Nepal's hidden valleys, remote lakes, mountain villages and wilderness treks — Rara Lake, Shey Phoksundo, Upper Mustang, Tsum Valley and more — with Karvaahh Travels.",
  keywords: [
    "offbeat Nepal tours",
    "Nepal adventure tours",
    "hidden destinations Nepal",
    "Rara Lake tour",
    "Shey Phoksundo trek",
    "Upper Mustang trip",
    "remote treks Nepal",
    "Nepal road trip",
    "camping in Nepal",
  ],
  ogImage: I.loManthang,
};

/** Explorer filter bar. `null` = All Experiences. */
export const FILTERS: { id: ExperienceId | null; label: string }[] = [
  { id: null, label: "All Experiences" },
  { id: "offbeat", label: "Offbeat Destinations" },
  { id: "adventure", label: "Adventure" },
  { id: "nature-lakes", label: "Nature & Lakes" },
  { id: "camping", label: "Camping" },
  { id: "road-trips", label: "Road Trips" },
  { id: "culture", label: "Cultural Experiences" },
  { id: "remote-treks", label: "Remote Treks" },
];

/** Short tag shown on cards. */
export const EXPERIENCE_TAGS: Record<ExperienceId, string> = {
  offbeat: "Offbeat",
  adventure: "Adventure",
  "nature-lakes": "Nature",
  camping: "Camping",
  "road-trips": "Road Trip",
  culture: "Culture",
  "remote-treks": "Remote Trek",
};

export const EXPERIENCES: ExperiencePanel[] = [
  {
    id: "road-trips",
    title: "Offbeat Road Trips",
    text: "Drive the Kali Gandaki valley to Jomsom and Kagbeni, push on into Upper Mustang, or wind through mid-hill towns like Bandipur and Tansen. Road conditions change by season, so routes are planned around them.",
    icon: "car",
    image: I.mountainRoad,
    href: "/activities/road-trail-adventure",
  },
  {
    id: "lakes",
    title: "Hidden Lakes & Wilderness",
    text: "From Rara's wide blue water in Mugu to Phoksundo's turquoise depths in Dolpo and the glacial Tsho Rolpa in Rolwaling — Nepal's remote lakes reward the long journey in.",
    icon: "waves",
    image: I.tshoRolpa,
    filter: "nature-lakes",
  },
  {
    id: "camping",
    title: "Camping Under the Stars",
    text: "Pitch up at mountain-view sites such as Ghalegaun or beside lakes like Rara, where camping is permitted. We plan around park rules and leave sites as we found them.",
    icon: "sun",
    image: I.ghaleGaun,
    href: "/activities/adventure/camping",
  },
  {
    id: "villages",
    title: "Remote Village Experiences",
    text: "Stay with Gurung families in Ghandruk or Sirubari, walk Thakali lanes in Marpha, or reach Magar highland villages like Thawang in Rolpa — slate roofs, local food and unhurried evenings.",
    icon: "landmark",
    image: I.ghandruk,
    filter: "culture",
  },
  {
    id: "trekking",
    title: "Adventure Trekking",
    text: "Lesser-walked routes such as Tsum Valley, Api Nampa and Saipal, or bigger high passes like Thorong La — chosen to match your experience and fitness.",
    icon: "footprints",
    image: I.manaslu,
    filter: "remote-treks",
  },
  {
    id: "wildlife",
    title: "Nature & Wildlife",
    text: "Rhododendron forests in Khaptad, birdlife around Rara, and lowland parks such as Chitwan and Bardiya for wildlife safaris. Sightings are never guaranteed — patience is part of it.",
    icon: "leaf",
    image: I.bardiya,
    href: "/activities/wildlife-nature",
  },
  {
    id: "photography",
    title: "Photography Expeditions",
    text: "Sunrise over Dhaulagiri from Poon Hill, the eroded cliffs of Upper Mustang, Lo Manthang's walls at dusk — trips paced around light, not just distance.",
    icon: "camera",
    image: I.poonHill,
  },
  {
    id: "custom",
    title: "Customized Private Adventures",
    text: "Tell us your interests, available days, preferred travel style and fitness. We shape a route with realistic travel times, permits and local support.",
    icon: "compass",
    href: "/contact",
  },
];

export const WHY = [
  { icon: "users", title: "Fewer crowds", text: "Many of these routes see far fewer visitors than Nepal's classic circuits, though numbers vary by season." },
  { icon: "mountainSnow", title: "Remarkable geography", text: "Trans-Himalayan desert in Mustang, glacial valleys in Rolwaling, rolling meadows in Khaptad." },
  { icon: "landmark", title: "Living culture", text: "Gurung, Magar, Thakali, Sherpa, Tamang and Tibetan-influenced communities, each with their own traditions." },
  { icon: "leaf", title: "Every environment", text: "Lowland forest, mid-hill terraces, alpine lakes and high-altitude terrain — sometimes in a single trip." },
  { icon: "camera", title: "Many ways to explore", text: "Trekking, camping, photography, village stays and road trips can all be combined." },
  { icon: "heart", title: "For many travellers", text: "Gentle options for families and couples, demanding routes for experienced trekkers, private trips for small groups." },
] as const;

export const GUIDE: GuideTopic[] = [
  {
    id: "best-time",
    icon: "calendar",
    title: "Best Time for Adventure Travel",
    body: [
      "Spring (March–May) and autumn (late September–November) are the most popular seasons for trekking and offbeat travel, with generally clearer skies and stable conditions.",
      "Winter brings cold nights and snow at altitude, which can close high passes and remote roads. The monsoon (June–September) brings rain, leeches and landslide risk to many hill routes.",
      "Rain-shadow areas such as Upper Mustang and parts of Dolpo can suit parts of the monsoon, but always check local forecasts, trail conditions and road access before you go.",
    ],
  },
  {
    id: "difficulty",
    icon: "footprints",
    title: "Difficulty & Preparation",
    body: [
      "A village homestay or road trip needs little more than comfortable walking ability. Remote treks can mean 5–7 hours of walking a day on steep, rough ground at altitude.",
      "Prepare with hill walks and cardio, break in your footwear, pack warm and waterproof layers, and drink steadily. Research the route, plan rest days for acclimatisation, and travel with appropriate local support.",
    ],
  },
  {
    id: "permits",
    icon: "passport",
    title: "Permits & Local Regulations",
    body: [
      "National parks, conservation areas and restricted regions each have their own permits. Some — such as Upper Mustang, Upper Dolpo, Tsum Valley and Kanchenjunga — are restricted areas that require a special permit and a licensed guide.",
      "Rules and fees change, so requirements are checked for your specific destination and travel dates. Karvaahh arranges permits where applicable.",
    ],
  },
  {
    id: "reach",
    icon: "route",
    title: "How to Reach Offbeat Destinations",
    body: [
      "Most journeys start from Kathmandu or Pokhara. From there, access may involve a domestic flight to a regional airport (such as Jomsom, Juphal or Talcha), a long road transfer, a four-wheel-drive section, or a multi-day trek.",
      "Mountain flights depend on weather and remote roads can be disrupted by landslides or snow, so not every destination is reachable year-round. We build spare time into remote itineraries.",
    ],
  },
];

export const RESPONSIBLE = [
  "Carry out all waste, including from campsites",
  "Refill water instead of buying single-use plastic",
  "Respect local customs, dress codes and religious sites",
  "Stay in homestays and buy from local communities",
  "Follow national park and conservation area rules",
  "Keep distance from wildlife and stay on trails",
  "Check weather, road and trail conditions daily",
  "Follow the advice of your guide and local authorities",
];

export const COLLECTIONS: Collection[] = [
  { id: "lakes", title: "Nepal's Most Scenic Lakes", text: "Turquoise, glacial and sacred lakes from Mugu to Dolakha.", image: I.panchPokhari, destinations: ["rara-lake", "shey-phoksundo", "tsho-rolpa", "panch-pokhari", "manang"] },
  { id: "valleys", title: "Remote Himalayan Valleys", text: "Hidden valleys with a culture all their own.", image: I.upperMustang, destinations: ["mustang", "tsum-valley", "tsho-rolpa", "makalu"] },
  { id: "villages", title: "Hidden Mountain Villages", text: "Homestays, stone lanes and slow mornings.", image: I.ghaleGaun, destinations: ["ghandruk", "ghale-gaun", "sirubari", "kagbeni-marpha", "rolpa"] },
  { id: "road", title: "Offbeat Road Trips", text: "Mid-hill towns and high desert roads.", image: I.muktinathRoad, destinations: ["bandipur", "tansen", "kagbeni-marpha", "mustang"] },
  { id: "camping", title: "Camping & Wilderness", text: "Meadows, lakeshores and starry high camps.", image: I.dhorpatan, destinations: ["rara-lake", "dhorpatan", "khaptad", "saipal"] },
  { id: "treks", title: "Less-Travelled Treks", text: "Routes for experienced, curious trekkers.", image: I.manaslu, destinations: ["api-nampa", "saipal", "tsum-valley", "kanchenjunga"] },
];

export const FAQS = [
  {
    question: "What are the best offbeat destinations in Nepal?",
    answer:
      "Popular choices include Rara Lake, Shey Phoksundo in Dolpo, Upper Mustang, Tsum Valley, Tsho Rolpa in Rolwaling, Khaptad National Park, Dhorpatan and Panch Pokhari. Village experiences such as Ghale Gaun, Sirubari and Bandipur are gentler offbeat options.",
  },
  {
    question: "What is the difference between an adventure tour and an offbeat tour?",
    answer:
      "An adventure tour focuses on the activity — trekking, high passes, camping or rugged road journeys. An offbeat tour focuses on the place — destinations outside the usual circuits. Many trips are both, but an offbeat tour can be as relaxed as a village homestay.",
  },
  {
    question: "Which destinations are suitable for beginners?",
    answer:
      "Hill villages such as Ghandruk, Ghale Gaun, Sirubari and Bandipur, and road-based trips to Lower Mustang or Tansen, suit most travellers. Rara Lake by flight is also manageable for reasonably fit beginners. Remote treks like Api Nampa, Saipal or Kanchenjunga are for experienced trekkers.",
  },
  {
    question: "Can I customize an offbeat Nepal itinerary?",
    answer:
      "Yes. Every journey can be planned around your dates, interests, fitness, budget and preferred travel style, whether private or small group. Share your ideas with our team and we will suggest a realistic route.",
  },
  {
    question: "What is the best season for adventure travel in Nepal?",
    answer:
      "Spring (March–May) and autumn (late September–November) are generally best. Some rain-shadow regions, such as Upper Mustang, can be visited during parts of the monsoon, but conditions vary by region and year.",
  },
  {
    question: "Do remote destinations require special permits?",
    answer:
      "Many do. National parks and conservation areas have entry permits, and restricted areas such as Upper Mustang, Upper Dolpo, Tsum Valley and Kanchenjunga require a special permit and a licensed guide. Requirements are checked for your exact route and dates.",
  },
  {
    question: "Are offbeat destinations accessible by road?",
    answer:
      "Some are — Bandipur, Tansen, Ghandruk and Lower Mustang are reachable by road, and roads now reach parts of Upper Mustang and Manang. Others, like Shey Phoksundo or Tsho Rolpa, still need a flight and/or multi-day trek. Remote roads can close after landslides or snow.",
  },
  {
    question: "What should I pack for an adventure trip?",
    answer:
      "Broken-in footwear, warm and waterproof layers, sun protection, a headtorch, a refillable bottle with water treatment, a personal first-aid kit and any prescription medicine. For remote treks, add a warm sleeping bag and insurance covering your maximum altitude.",
  },
  {
    question: "Can families join selected offbeat tours?",
    answer:
      "Yes. Village stays, mid-hill road trips and short nature walks work well for families. High-altitude and remote treks are planned case by case, considering ages, fitness and health.",
  },
  {
    question: "How can I book an adventure package with Karvaahh Travels?",
    answer:
      "Use the enquiry button on this page, message us on WhatsApp, or visit our contact page. Tell us where you would like to go, your dates and group size, and our team will reply with a suggested plan.",
  },
];

export const RELATED: RelatedTour[] = [
  { title: "Spiritual & Pilgrimage Tours", text: "Temples, monasteries and sacred lakes across Nepal.", href: "/packages/nepal/spiritual-pilgrimage-tours", image: I.upperMustang },
  { title: "Camping in Nepal", text: "Hill, lake and mountain campsites.", href: "/activities/adventure/camping", image: I.ghaleGaun },
  { title: "Road & Trail Adventures", text: "Jeep, motorbike and road + trek journeys.", href: "/activities/road-trail-adventure", image: I.mountainRoad },
  { title: "Wildlife & Nature", text: "National parks, forests and birdlife.", href: "/activities/wildlife-nature", image: I.chitwanRhino },
];

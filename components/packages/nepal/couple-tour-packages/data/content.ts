/**
 * Copy, links and SEO for /packages/nepal/couple-tour-packages.
 *
 * ⚠ Content rules (same as the rest of the Nepal package pages):
 *  - No invented hotels, prices, candlelight dinners, decorations or other
 *    inclusions. Anything Karvaahh can arrange but does not include by default
 *    is labelled "On request".
 *  - Every href points at a route that exists today. Enquiries go to /contact,
 *    which pre-fills the form from `type` + `destination` (lib/contact/prefill.ts).
 */

export const site = {
  name: "Karvaahh",
  tagline: "Live to Travel",
  url: "https://karvaahh.in",
  path: "/packages/nepal/couple-tour-packages",
} as const;

export const pageUrl = `${site.url}${site.path}`;

export const links = {
  home: "/",
  packagesHub: "/packages",
  contact: "/contact",
  journey: "/journey",
  gandaki: "/destinations/gandaki-province",
  bagmati: "/destinations/bagmati-province",
  wildlife: "/activities/wildlife-nature",
  mustangTrek: "/adventure/mustang-circuit-trek",
  paragliding: "/activities/adventure/paragliding",
  balloon: "/activities/adventure/hot-air-balloon",
  boating: "/activities/adventure/boating",
  helicopterTours: "/activities/helicopter-tours",
  cancellation: "/cancellation-policy",
} as const;

/** Pre-filled honeymoon enquiry. `destination` lands in the form's destination field. */
export function enquiryHref(destination?: string) {
  const query = new URLSearchParams({ type: "honeymoon" });
  if (destination) query.set("destination", destination);
  return `${links.contact}?${query.toString()}`;
}

export const anchors = {
  escapes: "romantic-escapes",
  getaways: "couple-getaways",
  moments: "romantic-experiences",
  itineraries: "couple-itineraries",
  plan: "plan-your-trip",
  faq: "faq",
  cta: "start-planning",
} as const;

export const breadcrumbs: { label: string; href?: string }[] = [
  { label: "Home", href: links.home },
  { label: "Packages", href: links.packagesHub },
  // There is no /packages/nepal index page yet, so this crumb is not linked.
  { label: "Nepal" },
  { label: "Couple Tour Packages" },
];

export type Img = { src: string; alt: string; focus?: string };

export const hero = {
  eyebrow: "Nepal Couple Tours & Honeymoons",
  title: "Nepal, Made for Two",
  subtitle:
    "Still mornings on Phewa Lake, first light on the Annapurnas and quiet courtyards in the old Kathmandu Valley. Couple journeys planned around your pace.",
  image: {
    src: "/images/gandaki/phewa-lake-annapurna-mountain-reflection-gandaki-nepal.jpg",
    alt: "The Annapurna range reflected in the still water of Phewa Lake, Pokhara",
    focus: "50% 55%",
  } satisfies Img,
  primaryCta: { label: "Find Your Getaway", href: `#${anchors.getaways}` },
  secondaryCta: { label: "Plan a Honeymoon", href: enquiryHref("Nepal honeymoon") },
  facts: ["Lakes, ridges & heritage towns", "Private, tailor-made itineraries", "Honeymoons & anniversaries"],
} as const;

/* ------------------------------------------------------------------ */
/* 1. Romantic Escapes Across Nepal                                    */
/* ------------------------------------------------------------------ */

export type Escape = {
  id: string;
  name: string;
  region: string;
  highlight: string;
  tags: string[];
  image: Img;
  link: { label: string; href: string };
};

export const escapes: Escape[] = [
  {
    id: "pokhara",
    name: "Pokhara",
    region: "Kaski, Gandaki",
    highlight:
      "Row out on Phewa Lake on a still morning, watch the sun rise over the Annapurnas from Sarangkot and end the day by the lakeside.",
    tags: ["Phewa Lake boating", "Sarangkot sunrise", "Lakeside dining", "Paragliding"],
    image: {
      src: "/images/gandaki/pokhara-phewa-lake-annapurna-mountains-gandaki-nepal.jpg",
      alt: "Boats on Phewa Lake in Pokhara with the Annapurna mountains behind",
    },
    link: { label: "Explore Gandaki Province", href: links.gandaki },
  },
  {
    id: "nagarkot",
    name: "Nagarkot",
    region: "Bhaktapur, Bagmati",
    highlight:
      "An hour from the valley floor, the ridge clears the haze and the first full Himalayan horizon appears at sunrise.",
    tags: ["Himalayan sunrise", "Hillside stays", "Ridge walk to Changunarayan"],
    image: {
      src: "/images/bagmati/nagarkot-sunrise-himalayan-mountains-hill-escapes-bagmati-nepal.jpg",
      alt: "Sunrise light over Himalayan ridges seen from Nagarkot",
    },
    link: { label: "See Nagarkot on the Nepal Journey", href: `${links.journey}#journey-nagarkot` },
  },
  {
    id: "bandipur",
    name: "Bandipur",
    region: "Tanahun, Gandaki",
    highlight:
      "A Newar trading town on a hill saddle, with a car-free main street, old facades and mountain panoramas at either end of the day.",
    tags: ["Newar architecture", "Car-free streets", "Mountain panoramas"],
    image: {
      src: "/images/gandaki/bandipur-heritage-hill-town-tanahun-gandaki-nepal.jpg",
      alt: "Traditional Newar houses along the heritage street of Bandipur",
    },
    link: { label: "See Bandipur on the Nepal Journey", href: `${links.journey}#journey-bandipur` },
  },
  {
    id: "chitwan",
    name: "Chitwan",
    region: "Chitwan National Park, Bagmati",
    highlight:
      "Sal forest, tall grassland and the Rapti river. Canoe at first light, walk with a naturalist and visit Tharu villages on the park edge.",
    tags: ["Jungle walks", "Rapti canoeing", "Tharu culture", "Wildlife"],
    image: {
      src: "/images/bagmati/one-horned-rhinoceros-chitwan-national-park-jungle-wildlife-nepal.jpg",
      alt: "A greater one-horned rhinoceros in the grassland of Chitwan National Park",
    },
    link: { label: "Explore Wildlife & Nature", href: links.wildlife },
  },
  {
    id: "ghandruk",
    name: "Ghandruk",
    region: "Annapurna Conservation Area, Gandaki",
    highlight:
      "A stone-built Gurung village where Annapurna South fills the northern sky. Reachable in a day from Nayapul, or two at an easy pace.",
    tags: ["Gurung village", "Mountain scenery", "Gentle trekking"],
    image: {
      src: "/images/gandaki/ghandruk-gurung-village-mountain-culture-gandaki-nepal.jpg",
      alt: "Stone houses of Ghandruk village below the Annapurna mountains",
    },
    link: { label: "See Ghandruk on the Nepal Journey", href: `${links.journey}#journey-ghandruk` },
  },
  {
    id: "kathmandu-valley",
    name: "Kathmandu Valley",
    region: "Kathmandu, Lalitpur & Bhaktapur",
    highlight:
      "Heritage walks through Patan and Bhaktapur, temple courtyards before the crowds, and Boudhanath at dusk when the kora fills up.",
    tags: ["Heritage walks", "Historic courtyards", "Temples & stupas", "Newari dining"],
    image: {
      src: "/images/bagmati/patan-durbar-square-newari-heritage-architecture-bagmati-nepal.jpg",
      alt: "Temples and Newari architecture in Patan Durbar Square",
    },
    link: { label: "Explore Bagmati Province", href: links.bagmati },
  },
  {
    id: "mustang",
    name: "Mustang",
    region: "Mustang, Gandaki",
    highlight:
      "Wind-carved cliffs, walled villages like Kagbeni and Lo Manthang, and one of the most dramatic road journeys in the Himalaya.",
    tags: ["Dramatic landscapes", "Traditional villages", "Road trips"],
    image: {
      src: "/images/gandaki/kagbeni-ancient-village-kali-gandaki-mustang-nepal.jpg",
      alt: "The ancient village of Kagbeni beside the Kali Gandaki river in Mustang",
    },
    link: { label: "Explore Mustang", href: links.mustangTrek },
  },
];

/* ------------------------------------------------------------------ */
/* 3. Make Every Moment Special                                        */
/* ------------------------------------------------------------------ */

export type Moment = {
  id: string;
  title: string;
  text: string;
  where: string;
  /** "Included where the itinerary has it" vs. things Karvaahh arranges on request. */
  availability: "Part of most itineraries" | "On request" | "Bookable experience";
  image?: Img;
  link?: { label: string; href: string };
  /** Grid placement in the mosaic. */
  size: "hero" | "tall" | "wide" | "regular" | "note";
};

export const moments: Moment[] = [
  {
    id: "lakeside-sunset",
    title: "Lakeside Sunsets",
    text: "Take a boat out on Phewa Lake as the light softens, or walk the lakeside promenade as Pokhara settles into evening.",
    where: "Pokhara",
    availability: "Bookable experience",
    image: {
      src: "/images/gandaki/gandaki-province-phewa-lake-annapurna-mountains-nepal.jpg",
      alt: "Phewa Lake in soft evening light with mountains on the horizon",
    },
    link: { label: "Boating in Nepal", href: links.boating },
    size: "hero",
  },
  {
    id: "sunrise",
    title: "Sunrise Viewpoints",
    text: "Sarangkot above Pokhara and the ridge at Nagarkot are two of the classic places to watch the Himalaya turn gold.",
    where: "Sarangkot · Nagarkot",
    availability: "Part of most itineraries",
    image: {
      src: "/images/gandaki/sarangkot-sunrise-annapurna-mountain-view-kaski-nepal.jpg",
      alt: "Sunrise over Machhapuchhre and the Annapurna range from Sarangkot",
    },
    size: "tall",
  },
  {
    id: "mountain-stays",
    title: "Mountain-View Stays",
    text: "Wake to the mountains in Nagarkot, Ghandruk or Pokhara. Tell us the kind of stay you prefer and we'll suggest options to match.",
    where: "Nagarkot · Ghandruk · Pokhara",
    availability: "On request",
    image: {
      src: "/images/home/view-from-ghandruk.jpg",
      alt: "View of snow peaks from the village of Ghandruk",
    },
    size: "regular",
  },
  {
    id: "private-sightseeing",
    title: "Private Sightseeing",
    text: "Explore Kathmandu's heritage squares at your own pace with a private vehicle and guide, arranged around your timings.",
    where: "Kathmandu Valley",
    availability: "On request",
    image: {
      src: "/images/bagmati/bhaktapur-durbar-square-newar-heritage-temple-courtyard-nepal.jpg",
      alt: "Temple courtyard in Bhaktapur Durbar Square",
    },
    size: "regular",
  },
  {
    id: "photography",
    title: "Photographs Worth Keeping",
    text: "Golden hour on the lake, prayer flags on a ridge, carved windows in Bhaktapur. Ask us about adding a professional photographer and we'll check availability.",
    where: "Across the route",
    availability: "On request",
    size: "note",
  },
  {
    id: "food",
    title: "Cultural Food Experiences",
    text: "Newari dishes in the old towns of the valley, Thakali dal bhat on the road to Mustang and Tharu cooking near Chitwan.",
    where: "Kathmandu Valley · Mustang · Chitwan",
    availability: "On request",
    image: {
      src: "/images/bagmati/chitwan-tharu-village-traditional-culture-nepal.jpg",
      alt: "Traditional Tharu village home near Chitwan",
    },
    size: "wide",
  },
  {
    id: "walks",
    title: "Gentle Hikes & Nature Walks",
    text: "Walk the Nagarkot ridge down to Changunarayan, or take the easy trail into Ghandruk for a night in a Gurung village.",
    where: "Nagarkot · Ghandruk",
    availability: "Part of most itineraries",
    image: {
      src: "/images/home/ghandruk-village.jpg",
      alt: "Stone pathway through Ghandruk village",
    },
    size: "regular",
  },
  {
    id: "adventure",
    title: "Adventure for Two",
    text: "Paragliding from Sarangkot, a hot-air balloon over the Pokhara valley or a helicopter into the Annapurna Sanctuary.",
    where: "Pokhara · Annapurna",
    availability: "Bookable experience",
    image: {
      src: "/images/home/annapurna-view.jpg",
      alt: "Snow-covered peaks of the Annapurna range",
    },
    link: { label: "Paragliding in Pokhara", href: links.paragliding },
    size: "regular",
  },
  {
    id: "occasions",
    title: "Anniversaries & Honeymoons",
    text: "Tell us what you're celebrating. We'll shape the route, pace and stays around it, and confirm in writing anything that's arranged on request.",
    where: "Anywhere in Nepal",
    availability: "On request",
    link: { label: "Plan your celebration", href: enquiryHref("Honeymoon / anniversary") },
    size: "note",
  },
];

/* ------------------------------------------------------------------ */
/* 4. Suggested itineraries (illustrative, NOT bookable products)       */
/* ------------------------------------------------------------------ */

export type ItineraryIdea = {
  id: string;
  title: string;
  length: string;
  summary: string;
  days: { label: string; text: string }[];
  image: Img;
};

export const itineraryIdeas: ItineraryIdea[] = [
  {
    id: "pokhara-escape",
    title: "Pokhara Escape",
    length: "3N / 4D",
    summary: "A short, slow lakeside break, ideal on its own or added to a Kathmandu stay.",
    days: [
      { label: "Day 1", text: "Arrive in Pokhara. Settle in and walk the lakeside in the evening." },
      { label: "Day 2", text: "Early drive to Sarangkot for sunrise. Phewa Lake boating and Tal Barahi later." },
      { label: "Day 3", text: "Free day: an optional adventure activity, or a quiet day by the lake." },
      { label: "Day 4", text: "Depart Pokhara." },
    ],
    image: {
      src: "/images/home/pokhara-phewa-lake.jpg",
      alt: "Phewa Lake in Pokhara on a clear day",
    },
  },
  {
    id: "kathmandu-nagarkot",
    title: "Kathmandu & Nagarkot",
    length: "4N / 5D",
    summary: "Heritage cities and a night on the rim of the valley for the Himalayan sunrise.",
    days: [
      { label: "Day 1", text: "Arrive in Kathmandu. Boudhanath at dusk." },
      { label: "Day 2", text: "Patan Durbar Square early, then Swayambhunath." },
      { label: "Day 3", text: "Bhaktapur's squares, then up to Nagarkot for sunset." },
      { label: "Day 4", text: "Sunrise from the ridge, walk to Changunarayan, return to Kathmandu." },
      { label: "Day 5", text: "Depart Kathmandu." },
    ],
    image: {
      src: "/images/bagmati/nagarkot-dhulikhel-sunrise-himalayan-hill-escapes-nepal.jpg",
      alt: "Early light over the hills around Nagarkot and Dhulikhel",
    },
  },
  {
    id: "kathmandu-pokhara",
    title: "Kathmandu & Pokhara",
    length: "5N / 6D",
    summary: "The essential pairing: heritage in the valley, then lakes and mountain viewpoints.",
    days: [
      { label: "Day 1", text: "Arrive in Kathmandu. Evening at leisure." },
      { label: "Day 2", text: "Heritage day across Kathmandu, Patan or Bhaktapur." },
      { label: "Day 3", text: "Drive or fly to Pokhara. Lakeside evening." },
      { label: "Day 4", text: "Sarangkot sunrise and Phewa Lake." },
      { label: "Day 5", text: "Free day for an activity or rest. Return to Kathmandu in the evening or next morning." },
      { label: "Day 6", text: "Depart Kathmandu." },
    ],
    image: {
      src: "/images/home/pokhara-view.jpg",
      alt: "Pokhara valley with the Annapurna range behind",
    },
  },
];

/* ------------------------------------------------------------------ */
/* 5. Travel planning guide                                            */
/* ------------------------------------------------------------------ */

export const seasons = [
  {
    id: "autumn",
    name: "Autumn",
    months: "Sep – Nov",
    text: "Clear skies and the sharpest mountain views. Peak season, so plan early.",
    pick: true,
  },
  {
    id: "spring",
    name: "Spring",
    months: "Mar – May",
    text: "Warm days and flowering hillsides. Some afternoon haze on the mountains.",
    pick: true,
  },
  {
    id: "winter",
    name: "Winter",
    months: "Dec – Feb",
    text: "Crisp, clear mornings and quieter sites. Cold nights in the hills.",
    pick: false,
  },
  {
    id: "monsoon",
    name: "Monsoon",
    months: "Jun – Aug",
    text: "Green and quiet, but clouds often hide the peaks and roads can be disrupted.",
    pick: false,
  },
] as const;

export const planningGuide: { id: string; title: string; text: string }[] = [
  {
    id: "relaxed-or-adventure",
    title: "Relaxed holiday or adventure trip?",
    text: "A relaxed trip pairs Kathmandu with Pokhara or Nagarkot and keeps drives short. If you both enjoy activity, add paragliding, a short trek to Ghandruk or a few days in Mustang. Many couples do a little of both.",
  },
  {
    id: "stays",
    title: "Accommodation & room arrangements",
    text: "Tell us your preferred style of stay and the room type you need, such as a double bed or a mountain or lake view. Specific hotels and room categories are confirmed in writing with your quote and depend on availability.",
  },
  {
    id: "transport",
    title: "Transport & sightseeing",
    text: "Private vehicles suit couples who want to stop when they like. Pokhara can be reached by road or a short domestic flight. Sightseeing can be private or joined, and we'll suggest what works for your route.",
  },
  {
    id: "packing",
    title: "Packing & weather",
    text: "Pack layers: hill mornings are cold even when afternoons are warm. Bring comfortable walking shoes, sun protection and a light rain jacket, plus warmer clothing for Nagarkot, Ghandruk or Mustang.",
  },
  {
    id: "customizing",
    title: "Customising a honeymoon or anniversary",
    text: "Share the occasion, your dates and what matters most, whether that's slow mornings, views, food or adventure. Any special arrangements are offered on request and confirmed with you before booking.",
  },
  {
    id: "responsible",
    title: "Responsible travel & local culture",
    text: "Dress modestly at temples and monasteries, walk clockwise around stupas, ask before photographing people and keep public displays of affection low-key, especially in villages and religious sites.",
  },
];

/* ------------------------------------------------------------------ */
/* 6. FAQs                                                             */
/* ------------------------------------------------------------------ */

export const faqs: { id: string; q: string; a: string }[] = [
  {
    id: "best-places",
    q: "Which places in Nepal are best for couples?",
    a: "Pokhara is the most popular choice, for Phewa Lake and the Sarangkot sunrise. Nagarkot and Bandipur suit couples who want quiet hill views, Chitwan adds jungle and wildlife, Ghandruk offers a Gurung village with mountain scenery, and the Kathmandu Valley brings heritage and food. Mustang is best for adventurous couples.",
  },
  {
    id: "best-time",
    q: "What is the best time for a Nepal honeymoon?",
    a: "Autumn (September to November) and spring (March to May) offer the best weather and mountain views. Winter is clear but cold in the hills, and the monsoon months (June to August) are green but often cloudy, with possible road disruption.",
  },
  {
    id: "customize",
    q: "Can I customize a couple tour package?",
    a: "Yes. Every Karvaahh couple trip is tailor-made. The itineraries on this page are suggestions that we adapt to your dates, budget, pace and interests.",
  },
  {
    id: "hotels-included",
    q: "Are romantic hotel stays included in package prices?",
    a: "Accommodation is quoted to match the style of stay you ask for. We don't publish fixed couple package prices, so the hotels, room types and what's included are listed in your written quote before you book.",
  },
  {
    id: "combine",
    q: "Can couples combine sightseeing and adventure?",
    a: "Yes. A common pattern is heritage sightseeing in Kathmandu followed by Pokhara, where paragliding, a hot-air balloon flight or an Annapurna helicopter tour can be added. Adventure activities depend on weather, season and operator availability.",
  },
  {
    id: "how-many-days",
    q: "How many days are ideal for a Nepal couple tour?",
    a: "Four to six days covers Kathmandu with Pokhara or Nagarkot. Seven to ten days lets you add Chitwan, Bandipur or Ghandruk at a relaxed pace, and longer trips can include Mustang.",
  },
  {
    id: "special-arrangements",
    q: "Can I request anniversary or honeymoon arrangements?",
    a: "Yes. Let us know what you have in mind when you enquire. Special arrangements are not part of standard pricing; they are offered on request, subject to availability, and confirmed with you in writing.",
  },
  {
    id: "enquire",
    q: "How do I enquire about a Karvaahh couple tour?",
    a: "Use the enquiry form on our contact page, or call or WhatsApp our Nepal team. Share your travel dates, preferred destinations and style of stay, and we'll send a suggested itinerary and quote.",
  },
];

/* ------------------------------------------------------------------ */
/* Headings, CTA, SEO                                                  */
/* ------------------------------------------------------------------ */

export const headings = {
  escapes: {
    eyebrow: "Where to Go",
    title: "Romantic Escapes Across Nepal",
    subtitle: "Lakes, ridgelines, heritage towns and jungle. Seven places couples love, and what makes each one special.",
  },
  getaways: {
    eyebrow: "Tours & Experiences",
    title: "Find Your Perfect Couple Getaway",
    subtitle:
      "Routes and experiences Karvaahh already runs in Nepal, ready to shape into a trip for two.",
    note:
      "We don't publish fixed couple package prices. Durations and inclusions shown come from each tour's own page; everything else is confirmed in your written quote.",
  },
  moments: {
    eyebrow: "Romantic Experiences",
    title: "Make Every Moment Special",
    subtitle: "The small, unhurried moments that make a trip feel like yours.",
  },
  itineraries: {
    eyebrow: "Itinerary Ideas",
    title: "Suggested Couple Itineraries",
    subtitle: "Starting points for planning. Each one is a customisable suggestion, not a fixed package.",
  },
  plan: {
    eyebrow: "Travel Planning Guide",
    title: "Plan Your Trip Together",
    subtitle: "Practical advice for planning a couple trip in Nepal.",
  },
  faq: {
    eyebrow: "Questions",
    title: "Frequently Asked Questions",
    subtitle: "Quick answers about couple travel and honeymoons in Nepal.",
  },
} as const;

export const finalCta = {
  title: "Your Story. Your Journey. Your Nepal.",
  subtitle:
    "From peaceful lakeside evenings to unforgettable Himalayan views, plan a Nepal getaway designed around the moments you want to share.",
  image: {
    src: "/images/bagmati/nagarkot-sunrise-himalayan-mountains-hill-escapes-bagmati-nepal.jpg",
    alt: "Golden sunrise over the Himalaya from the Nagarkot ridge",
    focus: "50% 40%",
  } satisfies Img,
  buttons: [
    { label: "Explore Couple Packages", href: `#${anchors.getaways}`, variant: "primary" },
    { label: "Customize Your Trip", href: enquiryHref("Customized couple tour"), variant: "ghost" },
  ],
  brand: `${site.name} – ${site.tagline}`,
} as const;

export const seo = {
  title: "Nepal Couple Tour Packages & Honeymoon Trips | Karvaahh",
  description:
    "Plan a romantic Nepal getaway with Karvaahh: Pokhara lakeside escapes, Nagarkot sunrises, Bandipur, Chitwan, Ghandruk and Kathmandu heritage. Tailor-made couple tours and honeymoon itineraries.",
  keywords: [
    "Nepal couple tour packages",
    "Nepal honeymoon packages",
    "romantic places in Nepal",
    "Pokhara honeymoon",
    "Nagarkot couple trip",
    "Kathmandu Pokhara couple tour",
    "Nepal anniversary trip",
  ],
  ogImage: hero.image,
} as const;

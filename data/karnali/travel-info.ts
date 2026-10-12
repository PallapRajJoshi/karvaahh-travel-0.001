/* =========================================================
   Karnali Province — overview, planning and FAQ content.
   Figures are rounded; flight schedules, road conditions,
   permit rules and fees change, so copy avoids hard prices.
========================================================= */

export const karnaliFacts = [
  { label: "Capital", value: "Birendranagar, Surkhet" },
  { label: "Area", value: "≈ 27,984 km² — Nepal's largest province" },
  { label: "Districts", value: "10" },
  {
    label: "Major rivers",
    value: "Karnali (Humla & Mugu Karnali), Bheri, Tila",
  },
  { label: "Lakes", value: "Rara, Phoksundo, Kupinde, Syarpu, Bulbule" },
  { label: "National parks", value: "Rara · Shey Phoksundo" },
];

export const karnaliDistricts = [
  "Dolpa",
  "Mugu",
  "Humla",
  "Jumla",
  "Kalikot",
  "Dailekh",
  "Jajarkot",
  "Rukum West",
  "Salyan",
  "Surkhet",
];

export const karnaliWhyVisit = [
  "Nepal's largest lake (Rara) and its deepest lake (Phoksundo)",
  "Shey Phoksundo, Nepal's largest national park, is snow leopard country",
  "Restricted trans-Himalayan valleys in Upper Dolpo and Limi",
  "Medieval Khas heritage in Sinja Valley and Dullu",
  "Few crowds, authentic villages and slow, meaningful travel",
];

export interface KarnaliSeason {
  season: string;
  months: string;
  rating: "Best" | "Good" | "Selective";
  description: string;
}

export const karnaliSeasons: KarnaliSeason[] = [
  {
    season: "Autumn",
    months: "Sep – Nov",
    rating: "Best",
    description:
      "Clear skies, stable weather and crisp mountain views. The most reliable flights and the top season for Rara, Phoksundo, Dolpo and Humla treks.",
  },
  {
    season: "Spring",
    months: "Mar – May",
    rating: "Best",
    description:
      "Warmer days, blooming rhododendron forests and good trekking conditions. Some haze is possible at lower elevations.",
  },
  {
    season: "Monsoon",
    months: "Jun – Aug",
    rating: "Selective",
    description:
      "Rain, landslides and flight delays affect the lower hills and the Karnali Highway. Rain-shadow Upper Dolpo and Limi stay comparatively dry for well-prepared expeditions.",
  },
  {
    season: "Winter",
    months: "Dec – Feb",
    rating: "Good",
    description:
      "Surkhet and the lower valleys are pleasant, while high passes, Rara and Dolpo get heavy snow and bitter cold. Many high routes are closed.",
  },
];

export interface KarnaliAccessRoute {
  title: string;
  description: string;
}

export const karnaliAccess: KarnaliAccessRoute[] = [
  {
    title: "Via Nepalgunj — the main air hub",
    description:
      "Fly Kathmandu–Nepalgunj (about 1 hour) or arrive overland from the Indian border. Nepalgunj connects by small aircraft to Karnali's mountain airstrips.",
  },
  {
    title: "Mountain flights",
    description:
      "Nepalgunj–Talcha (Mugu) for Rara Lake, Nepalgunj–Juphal (Dolpa) for Phoksundo and Dolpo, Nepalgunj–Simikot (Humla) for Limi Valley, and Nepalgunj–Jumla. Flights are early-morning, weather-dependent and often seasonal.",
  },
  {
    title: "Via Surkhet by road or air",
    description:
      "Birendranagar is about 3–4 hours by road from Nepalgunj, and some airlines also fly to Surkhet. It is the starting point of the Karnali Highway.",
  },
  {
    title: "The Karnali Highway",
    description:
      "The highway runs Surkhet–Dailekh–Kalikot–Jumla, with onward roads towards Mugu. Expect long, rough mountain-road days, ideally in a 4WD, with landslide risk in the monsoon.",
  },
];

export interface KarnaliCircuit {
  name: string;
  duration: string;
  route: string;
  description: string;
  href?: string;
}

/** Durations are indicative and exclude weather buffer days. */
export const karnaliCircuits: KarnaliCircuit[] = [
  {
    name: "Rara Lake Escape",
    duration: "6–8 days",
    route: "Kathmandu → Nepalgunj → Talcha → Rara Lake",
    description:
      "The quickest way into Karnali's wilderness: a short walk from Talcha airstrip, then days of lakeside trails and Murma Top sunrises.",
    href: "/offbeat-unexplored/rara-lake",
  },
  {
    name: "Karnali Highway Road Trip",
    duration: "8–10 days",
    route: "Nepalgunj → Surkhet → Dailekh → Kalikot → Jumla → Sinja → Rara",
    description:
      "An overland heritage journey via Kakre Vihar, Dullu, Pachal Jharana and the Sinja Valley, finishing at Rara Lake.",
  },
  {
    name: "Shey Phoksundo & Lower Dolpo",
    duration: "9–12 days",
    route: "Nepalgunj → Juphal → Dunai → Ringmo → Phoksundo Lake",
    description:
      "Follow the Suligad river past Phoksundo Waterfall to Ringmo village and the turquoise lake.",
    href: "/offbeat-unexplored/shey-phoksundo",
  },
  {
    name: "Upper Dolpo Expedition",
    duration: "18–25 days",
    route: "Juphal → Phoksundo → Kang La → Shey Gompa → Saldang → Dho Tarap",
    description:
      "A restricted-area camping expedition across high passes to Crystal Mountain and some of Nepal's most isolated villages.",
    href: "/offbeat-unexplored/shey-phoksundo",
  },
  {
    name: "Humla & Limi Valley Trek",
    duration: "14–18 days",
    route: "Nepalgunj → Simikot → Limi Valley (Til · Halji · Jang) → Hilsa",
    description:
      "A trans-Himalayan trek through Buddhist villages and high pastures near the Tibetan border, also a route towards Kailash.",
  },
];

export const karnaliTips = [
  {
    title: "Permits & guides",
    points: [
      "Upper Dolpo and parts of Humla, including Limi, are restricted areas. You need a special permit through a registered agency, a licensed guide and normally at least two trekkers.",
      "Rara and Shey Phoksundo national parks charge entry fees; Lower Dolpo needs its own trekking permit.",
      "Check current permit rules before booking, because fees and regulations change.",
    ],
  },
  {
    title: "Altitude awareness",
    points: [
      "Phoksundo (≈3,610 m) and Upper Dolpo passes above 5,000 m need gradual acclimatisation.",
      "Climb slowly, stay hydrated and plan rest days. Descend if headache, nausea or breathlessness worsens.",
      "Carry comprehensive travel insurance that covers helicopter evacuation.",
    ],
  },
  {
    title: "Flights, roads & buffers",
    points: [
      "Mountain flights are often delayed or cancelled by weather, so add 1–2 buffer days at each end.",
      "Seats on Talcha, Juphal and Simikot routes are limited in peak season. Book early.",
      "Mobile coverage and ATMs are scarce in the mountains. Carry enough cash in Nepalgunj or Surkhet.",
    ],
  },
  {
    title: "Travel responsibly",
    points: [
      "Carry out all non-biodegradable waste and avoid single-use plastic in the national parks.",
      "Respect monasteries, chortens and mani walls. Walk clockwise and ask before photographing people.",
      "Use local lodges, homestays and guides so tourism income stays in Karnali's communities.",
    ],
  },
];

export const karnaliFaqs = [
  {
    question: "What is Karnali Province famous for?",
    answer:
      "Karnali is famous for Rara Lake (Nepal's largest lake), Shey Phoksundo Lake (Nepal's deepest), the remote Upper Dolpo and Humla regions, and the Sinja Valley, a historic centre of the Khas kingdom and language. It is Nepal's largest province by area and one of its least visited.",
  },
  {
    question: "How do I reach Rara Lake?",
    answer:
      "Most travellers fly Kathmandu–Nepalgunj, then take a small-aircraft flight from Nepalgunj to Talcha airstrip in Mugu, a short walk from Rara Lake. You can also go overland via Surkhet and the Karnali Highway through Jumla, which takes several days.",
  },
  {
    question: "Do I need a special permit for Dolpo or Humla?",
    answer:
      "Yes, for the restricted areas. Upper Dolpo and parts of Humla, such as the Limi Valley, need a restricted-area permit arranged by a registered trekking agency, with a licensed guide and usually at least two trekkers. Lower Dolpo and the national parks have separate permits or entry fees. Rules and fees change, so confirm before you travel.",
  },
  {
    question: "What is the best time to visit Karnali Province?",
    answer:
      "Autumn (September–November) and spring (March–May) are best for most of Karnali. Upper Dolpo and Limi lie in a rain shadow and can also be trekked during the monsoon. Winter brings heavy snow to Rara, Dolpo and high passes.",
  },
  {
    question: "Is Karnali suitable for first-time trekkers?",
    answer:
      "Rara Lake and the Surkhet–Jumla heritage route suit reasonably fit first-timers. Upper Dolpo and Humla are long, high and remote expeditions better suited to experienced trekkers with good acclimatisation.",
  },
  {
    question: "What food should I try in Karnali?",
    answer:
      "Try Jumla's Marshi red rice, grown at some of the world's highest rice-farming altitudes. Also look for buckwheat (phapar) and barley dishes, Jumli beans, walnuts, local apples, and tsampa with butter tea in the Tibetan-influenced north.",
  },
];

export const karnaliPackages = [
  {
    title: "Rara Lake Journeys",
    description: "Flight-in and trekking itineraries to Nepal's largest lake.",
    href: "/offbeat-unexplored/rara-lake",
  },
  {
    title: "Shey Phoksundo & Dolpo",
    description: "Phoksundo Lake treks and Upper Dolpo expeditions.",
    href: "/offbeat-unexplored/shey-phoksundo#phoksundo-packages",
  },
  {
    title: "Karnali River Rafting",
    description: "Multi-day whitewater on Nepal's longest river.",
    href: "/activities/adventure/rafting",
  },
  {
    title: "Wilderness Camping",
    description: "Camping trips beside Himalayan lakes and high meadows.",
    href: "/activities/adventure/camping",
  },
  {
    title: "Wildlife & Nature",
    description: "Nature journeys through Nepal's protected areas.",
    href: "/activities/wildlife-nature",
  },
  {
    title: "All Tour Packages",
    description: "Browse every Karvaahh package across Nepal.",
    href: "/packages",
  },
];

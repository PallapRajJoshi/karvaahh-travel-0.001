export const karnaliCategories = [
  "All",
  "Lakes",
  "Trekking",
  "Wildlife",
  "Culture",
  "Heritage",
  "Adventure",
] as const;

export type KarnaliCategory = Exclude<(typeof karnaliCategories)[number], "All">;

export interface KarnaliDestination {
  slug: string;
  name: string;
  district: string;
  highlight: string;
  tags: string[];
  categories: KarnaliCategory[];
  image: string;
  alt: string;
  /** Existing on-site page for this destination. Omitted when none exists yet — the card links to an enquiry instead. */
  href?: string;
}

/**
 * Only Rara Lake and Shey Phoksundo / Dolpo have dedicated pages today
 * (app/offbeat-unexplored/*). Add `href` here when a new destination page ships.
 */
export const karnaliDestinations: KarnaliDestination[] = [
  {
    slug: "rara-lake",
    name: "Rara Lake",
    district: "Mugu",
    highlight:
      "Nepal's largest lake sits at about 2,990 m inside Rara National Park, ringed by blue pine, spruce and juniper forest. Gentle shoreline trails, the Murma Top viewpoint and reflections of snow peaks make it ideal for slow hiking, camping and photography.",
    tags: ["Alpine lake", "Forest hikes", "Photography", "Camping"],
    categories: ["Lakes", "Wildlife", "Trekking"],
    image: "/karnali/rara-lake.jpg",
    alt: "Rara Lake reflecting pine forest and distant snow peaks in Mugu, Karnali",
    href: "/offbeat-unexplored/rara-lake",
  },
  {
    slug: "shey-phoksundo",
    name: "Shey Phoksundo Lake",
    district: "Dolpa",
    highlight:
      "Phoksundo's turquoise water, Nepal's deepest lake, lies at about 3,610 m beneath sheer cliffs, beside the Bon village of Ringmo. The trek in passes Phoksundo Waterfall, one of the tallest in Nepal, inside the country's largest national park.",
    tags: ["Turquoise lake", "Waterfall", "Bon culture", "High Himalaya"],
    categories: ["Lakes", "Trekking", "Wildlife"],
    image: "/karnali/phoksundo-lake.jpg",
    alt: "Turquoise Phoksundo Lake below steep cliffs in Dolpa, Karnali",
    href: "/offbeat-unexplored/shey-phoksundo",
  },
  {
    slug: "upper-dolpo",
    name: "Upper Dolpo",
    district: "Dolpa",
    highlight:
      "A restricted trans-Himalayan region of high passes, Shey Gompa, Crystal Mountain and centuries-old villages such as Saldang and Dho Tarap. Tibetan-influenced Buddhist and Bon traditions remain part of everyday life here.",
    tags: ["Expedition trek", "Monasteries", "Restricted area", "Trans-Himalaya"],
    categories: ["Trekking", "Culture", "Adventure", "Wildlife"],
    image: "/images/home/upper-dolpo-nepal-himalayan.jpg",
    alt: "Arid trans-Himalayan valley and mountains of Upper Dolpo, Karnali",
    href: "/offbeat-unexplored/shey-phoksundo",
  },
  {
    slug: "jumla-sinja",
    name: "Jumla & Sinja Valley",
    district: "Jumla",
    highlight:
      "The Sinja Valley was a seat of the medieval Khas Malla kingdom and is closely tied to the origins of the Khas (Nepali) language. Jumla adds Chandannath Temple, high-altitude Marshi red rice and the famous Jumla apples.",
    tags: ["Khas heritage", "Historic valley", "Jumla apples", "Village walks"],
    categories: ["Heritage", "Culture"],
    image: "/karnali/sinja.jpg",
    alt: "Terraced farmland of Sinja Valley in Jumla, Karnali",
  },
  {
    slug: "humla-limi",
    name: "Humla & Limi Valley",
    district: "Humla",
    highlight:
      "From the airstrip town of Simikot, trails lead into the remote Limi Valley and its stone villages of Til, Halji and Jang. Halji's ancient Rinchenling Monastery and yak-herding traditions make this one of Nepal's most authentic trans-Himalayan journeys.",
    tags: ["Remote villages", "Monasteries", "Trekking", "Restricted area"],
    categories: ["Trekking", "Culture", "Adventure"],
    image: "/karnali/humla.jpg",
    alt: "Stone village of the Limi Valley beneath bare Himalayan ridges in Humla",
  },
  {
    slug: "surkhet-birendranagar",
    name: "Surkhet & Birendranagar",
    district: "Surkhet",
    highlight:
      "Karnali's capital and urban gateway lies in a warm, wide valley at the foot of the hills. See the archaeological Kakre Vihar, Bulbule Lake and Deuti Bajai Temple before heading into the mountains on the Karnali Highway.",
    tags: ["Gateway city", "Kakre Vihar", "Bulbule Lake", "Easy access"],
    categories: ["Heritage", "Culture"],
    image: "/karnali/surket.jpg",
    alt: "Surkhet Valley and the town of Birendranagar, Karnali's capital",
  },
  {
    slug: "dailekh",
    name: "Dailekh & Dullu",
    district: "Dailekh",
    highlight:
      "Dullu preserves stone inscriptions and monuments from the Khas Malla era, among western Nepal's most important historical records. The Panchakoshi pilgrimage links shrines where natural gas flames have burned for centuries.",
    tags: ["Ancient inscriptions", "Panchakoshi", "Pilgrimage", "Khas history"],
    categories: ["Heritage", "Culture"],
    image: "/karnali/dullu.jpg",
    alt: "Ancient stone monuments at Dullu in Dailekh, Karnali",
  },
  {
    slug: "salyan-kupinde",
    name: "Salyan & Kupinde Lake",
    district: "Salyan",
    highlight:
      "Kupinde Lake rests among green forested hills, a quiet stop for lakeside walks and birdlife. Nearby villages offer an unhurried look at mid-hill farming life, far from tourist crowds.",
    tags: ["Hill lake", "Green hills", "Village stays", "Nature walks"],
    categories: ["Lakes", "Culture"],
    image: "/karnali/salyan.jpg",
    alt: "Kupinde Lake surrounded by forested hills in Salyan, Karnali",
  },
  {
    slug: "kalikot-pachal-jharana",
    name: "Kalikot & Pachal Jharana",
    district: "Kalikot",
    highlight:
      "Steep Karnali river gorges, terraced mountain villages and the tall Pachal Jharana waterfall define this little-visited district. It is a natural stop for travellers driving the Karnali Highway towards Jumla.",
    tags: ["Waterfall", "River gorges", "Road trip", "Offbeat"],
    categories: ["Adventure", "Trekking"],
    image: "/karnali/kalikot.jpg",
    alt: "Pachal Jharana waterfall in a steep valley of Kalikot, Karnali",
  },
  {
    slug: "jajarkot-rukum-west",
    name: "Jajarkot & Rukum West",
    district: "Jajarkot · Rukum West",
    highlight:
      "Historic Jajarkot Durbar, Syarpu Lake and forested Bheri river hills sit off the main tourist map. Magar and Thakuri villages here offer rural culture and genuinely unexplored landscapes.",
    tags: ["Rural culture", "Syarpu Lake", "Forested hills", "Unexplored"],
    categories: ["Culture", "Lakes", "Adventure"],
    image: "/images/lumbini/magar-hill-culture-western-nepal-village.jpg",
    alt: "Traditional Magar hill village in mid-western Nepal",
  },
];

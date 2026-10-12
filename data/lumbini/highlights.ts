export const lumbiniHighlightFilters = [
  "All",
  "Spiritual",
  "Heritage",
  "Wildlife",
  "Culture",
  "Nature",
  "Adventure",
] as const;

export type LumbiniHighlightFilter = (typeof lumbiniHighlightFilters)[number];
export type LumbiniHighlightCategory = Exclude<LumbiniHighlightFilter, "All">;

export interface LumbiniHighlight {
  name: string;
  district: string;
  categories: LumbiniHighlightCategory[];
  highlight: string;
  tags: string[];
  image: string;
  alt: string;
  /**
   * No dedicated per-destination pages exist yet, so each card points to the
   * deepest existing page or in-page section that covers it. Swap in a
   * dedicated route here once one is built.
   */
  href: string;
}

export const lumbiniHighlights: LumbiniHighlight[] = [
  {
    name: "Lumbini",
    district: "Rupandehi",
    categories: ["Spiritual", "Heritage"],
    highlight:
      "The birthplace of Siddhartha Gautama and a UNESCO World Heritage Site. Maya Devi Temple shelters the marker stone of the nativity, while the Ashoka Pillar of 249 BCE records the emperor's own pilgrimage. Around the Sacred Garden, monasteries built by nations across the Buddhist world line the central canal.",
    tags: ["Maya Devi Temple", "Sacred Garden", "Ashoka Pillar", "Monasteries"],
    image: "/images/lumbini/maya-devi-temple-lumbini-rupandehi-nepal.jpg",
    alt: "Maya Devi Temple in the Sacred Garden of Lumbini",
    href: "/packages/nepal/spiritual-pilgrimage-tours#destinations",
  },
  {
    name: "Kapilvastu",
    district: "Kapilvastu",
    categories: ["Heritage", "Spiritual"],
    highlight:
      "The homeland of the Shakya kingdom into which the Buddha was born. Kudan, Nigrodharama, Gotihawa and Sagarhawa scatter brick stupas, Ashokan pillar fragments and excavated mounds across quiet farmland. It is one of South Asia's richest early-Buddhist archaeological landscapes.",
    tags: ["Shakya kingdom", "Kudan", "Gotihawa", "Archaeology"],
    image: "/images/lumbini/gotihawa-ashoka-pillar-kapilvastu-Nepal.jpg",
    alt: "Ashokan pillar fragment at Gotihawa in Kapilvastu",
    href: "#heritage",
  },
  {
    name: "Tilaurakot",
    district: "Kapilvastu",
    categories: ["Heritage"],
    highlight:
      "Widely identified with ancient Kapilavastu, the walled Shakya capital where Prince Siddhartha spent his first 29 years. Excavated gateways, palace foundations and a moat sit beneath old trees beside the Banganga River. A small museum nearby displays coins, pottery and finds from the site.",
    tags: ["Shakya capital", "Palace ruins", "Museum", "Buddha's early life"],
    image: "/images/lumbini/tilaurakot-ancient-kapilavastu-ruins-kapilvastu-Nepal.jpg",
    alt: "Excavated brick ruins of Tilaurakot",
    href: "#heritage",
  },
  {
    name: "Tansen",
    district: "Palpa",
    categories: ["Culture", "Heritage"],
    highlight:
      "A historic Newar hill town of cobbled lanes, carved windows and old trading houses perched above the Siddhartha Highway. Amar Narayan Temple and the Tansen Durbar anchor its old core, and dhaka weaving workshops keep a famous local craft alive. Srinagar Hill above town opens onto wide Himalayan views.",
    tags: ["Newar architecture", "Dhaka weaving", "Srinagar Hill", "Heritage walks"],
    image: "/images/lumbini/tansen-palpa-newar-heritage-town-Nepal.jpg",
    alt: "Traditional Newar houses in the hill town of Tansen",
    href: "#culture",
  },
  {
    name: "Rani Mahal",
    district: "Palpa",
    categories: ["Heritage", "Nature"],
    highlight:
      "A 19th-century riverside palace built by General Khadga Shumsher in memory of his wife, often called the Taj Mahal of Nepal. Its white neoclassical walls rise straight from the banks of the Kali Gandaki in a deep, forested gorge. The hike down from Tansen makes it a rewarding half-day trip for heritage lovers and photographers.",
    tags: ["Kali Gandaki", "Palace", "Photography", "Day hike"],
    image: "/images/lumbini/rani-mahal-palpa-nepal-kali-Gandaki.jpg",
    alt: "Rani Mahal palace on the Kali Gandaki river in Palpa",
    href: "#heritage",
  },
  {
    name: "Bardiya National Park",
    district: "Bardiya",
    categories: ["Wildlife", "Nature", "Adventure"],
    highlight:
      "The largest national park in Nepal's lowlands and one of the country's best places to track Bengal tigers on foot. Sal forest, grassland and the Karnali and Geruwa rivers shelter rhinos, wild elephants, gharials and over 400 bird species. It sees far fewer visitors than Chitwan, so safaris feel quiet and unhurried.",
    tags: ["Tiger tracking", "Jeep & walking safari", "Rafting", "Tharu homestays"],
    image: "/images/lumbini/bardiya-national-park-nepal-wildlife-safari.jpg",
    alt: "Safari trail through the sal forest of Bardiya National Park",
    href: "/activities/wildlife-nature#destinations",
  },
  {
    name: "Banke National Park",
    district: "Banke",
    categories: ["Wildlife", "Nature"],
    highlight:
      "Established in 2010 as a buffer for Bardiya, Banke protects sal forest and the Churia hills along a key wildlife corridor. It forms part of a transboundary tiger landscape and supports rich birdlife and forest ecosystems. Visits are conservation-focused and still lightly travelled.",
    tags: ["Biodiversity", "Churia hills", "Birdwatching", "Conservation"],
    image: "/images/lumbini/banke-national-park-nepal-wildlife-forest.jpg",
    alt: "Dense forest inside Banke National Park",
    href: "#wildlife",
  },
  {
    name: "Swargadwari",
    district: "Pyuthan",
    categories: ["Spiritual", "Nature"],
    highlight:
      "Meaning \"Gateway to Heaven\", Swargadwari is one of western Nepal's most important Hindu pilgrimage sites. A hilltop ashram and caves sit in forest at about 2,100 m, with an eternal sacred fire and daily rituals. Pilgrims arrive in large numbers on Baisakh and Kartik full-moon days.",
    tags: ["Hindu pilgrimage", "Ashram", "Forest trails", "Full-moon fairs"],
    image: "/images/lumbini/swargadwari-pyuthan-nepal-pilgrimage-temple.jpg",
    alt: "Swargadwari pilgrimage temple in the forested hills of Pyuthan",
    href: "#pilgrimage",
  },
  {
    name: "Palpa",
    district: "Palpa",
    categories: ["Culture", "Nature", "Adventure"],
    highlight:
      "A hill district of terraced farmland, Magar villages and ridge-top viewpoints between the plains and the high mountains. Once the seat of a powerful independent kingdom, it still carries its history in forts, temples and old bazaars. Ridge walks, village homestays and paragliding from Srinagar Danda round out a stay.",
    tags: ["Magar villages", "Ridge walks", "Homestays", "Himalayan views"],
    image: "/images/lumbini/srinagar-hill-tansen-palpa-himalayan-view.jpg",
    alt: "Himalayan view from Srinagar Hill above Tansen, Palpa",
    href: "#destinations",
  },
  {
    name: "Rolpa & Rukum East",
    district: "Rolpa · Rukum East",
    categories: ["Adventure", "Nature", "Culture"],
    highlight:
      "Remote high country of alpine meadows, Magar villages and the snow peaks of Sisne Himal and the Putha Himal massif. Jaljala's rhododendron-covered pastures and Thawang's traditional settlements reward travellers prepared for rough roads. Expect camping, community stays and trails few visitors ever walk.",
    tags: ["Jaljala", "Sisne Himal", "Trekking", "Rural culture"],
    image: "/images/lumbini/jaljala-rolpa-nepal-alpine-pasture.jpg",
    alt: "Alpine pastures of Jaljala in Rolpa",
    href: "#adventure",
  },
];

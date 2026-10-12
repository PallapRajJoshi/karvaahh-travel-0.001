export const madheshHighlightFilters = [
  "All",
  "Spiritual",
  "Heritage",
  "Culture",
  "Wildlife",
  "Nature",
  "Festivals",
] as const;

export type MadheshHighlightFilter = (typeof madheshHighlightFilters)[number];
export type MadheshHighlightCategory = Exclude<MadheshHighlightFilter, "All">;

export interface MadheshHighlight {
  name: string;
  district: string;
  categories: MadheshHighlightCategory[];
  highlight: string;
  tags: string[];
  image: string;
  alt: string;
  /**
   * No dedicated per-destination pages exist yet. Sites listed in the
   * pilgrimage explorer link there; everything else links to the section of
   * this page that covers it. Swap in a dedicated route once one is built.
   */
  href: string;
}

const PILGRIMAGE_EXPLORER = "/packages/nepal/spiritual-pilgrimage-tours#destinations";

/*
 * Image note: Birgunj, Gadhimai and Chhinnamasta have no site-specific photo
 * in /public yet, so they use general Madhesh landscapes with matching alt
 * text. Replace them when real photography is available.
 */
export const madheshHighlights: MadheshHighlight[] = [
  {
    name: "Janakpurdham",
    district: "Dhanusha",
    categories: ["Spiritual", "Heritage", "Culture", "Festivals"],
    highlight:
      "The spiritual heart of Mithila, revered as the capital of King Janak and the birthplace of Goddess Sita. Temples, sacred ponds and lively bazaars fill the old city, and it remains the cultural centre of the Maithili-speaking world in Nepal.",
    tags: ["Ramayana heritage", "Sacred ponds", "Mithila art", "Temple city"],
    image: "/images/madhesh/janakpur-night-view.jpg",
    alt: "Janaki Mandir in Janakpurdham illuminated in colour at night",
    href: PILGRIMAGE_EXPLORER,
  },
  {
    name: "Janaki Mandir",
    district: "Dhanusha",
    categories: ["Spiritual", "Heritage", "Festivals"],
    highlight:
      "Janakpur's iconic temple of Goddess Sita, completed in 1910 in a striking Hindu-Rajput style of white domes, turrets and carved arches. It draws pilgrims from across Nepal and India, especially during Vivaha Panchami and Ram Navami.",
    tags: ["Goddess Sita", "Rajput architecture", "Evening aarti", "Pilgrimage"],
    image: "/images/madhesh/janaki-mandir-dron-view.jpg",
    alt: "Aerial view of the white domes and towers of Janaki Mandir",
    href: PILGRIMAGE_EXPLORER,
  },
  {
    name: "Vivaha Mandap",
    district: "Dhanusha",
    categories: ["Spiritual", "Festivals"],
    highlight:
      "A pavilion beside Janaki Mandir commemorating the traditional wedding of Ram and Sita. It is a key stop on the Janakpurdham pilgrimage circuit and the focus of the wedding re-enactment during Vivaha Panchami.",
    tags: ["Ram–Sita wedding", "Vivaha Panchami", "Pilgrim circuit"],
    image: "/images/madhesh/vivah-mantap.jpg",
    alt: "Vivaha Mandap pavilion in Janakpurdham",
    href: PILGRIMAGE_EXPLORER,
  },
  {
    name: "Ram Mandir & Sacred Ponds",
    district: "Dhanusha",
    categories: ["Spiritual", "Festivals"],
    highlight:
      "The pagoda-style Ram Mandir is one of Janakpur's oldest temples and the centre of Ram Navami celebrations. Nearby, Dhanush Sagar and Ganga Sagar are among the city's many sacred ponds, where devotees bathe and gather for Chhath at sunrise and sunset.",
    tags: ["Ram Mandir", "Dhanush Sagar", "Ganga Sagar", "Chhath ghats"],
    image: "/images/madhesh/janakpur.jpg",
    alt: "Sunset reflected in one of Janakpurdham's sacred ponds beside a white temple",
    href: PILGRIMAGE_EXPLORER,
  },
  {
    name: "Mithila Region",
    district: "Eastern & central Madhesh",
    categories: ["Culture", "Festivals"],
    highlight:
      "The Nepal side of historic Mithila, where women's wall and paper painting, Maithili songs and village rituals are part of everyday life. Visit painting workshops, walk through mud-walled villages and share home-cooked Maithili food.",
    tags: ["Mithila painting", "Maithili culture", "Village life", "Crafts"],
    image: "/images/madhesh/mithila-painting.jpg",
    alt: "Colourful traditional Mithila painting",
    href: "#culture",
  },
  {
    name: "Jaleshwar",
    district: "Mahottari",
    categories: ["Spiritual"],
    highlight:
      "Home of Jaleshwar Mahadev, an important Shiva temple whose lingam is traditionally set below water level. A short drive from Janakpurdham, it is a natural addition to a Mithila pilgrimage, especially during Shivaratri and the month of Shrawan.",
    tags: ["Jaleshwar Mahadev", "Shiva pilgrimage", "Shrawan", "Shivaratri"],
    image: "/images/madhesh/jaleshwar-nath.jpg",
    alt: "Jaleshwar Nath Mahadev temple in Mahottari",
    href: PILGRIMAGE_EXPLORER,
  },
  {
    name: "Gadhimai Temple",
    district: "Bara",
    categories: ["Spiritual", "Festivals"],
    highlight:
      "A goddess temple at Bariyarpur in Bara district, devoted to Gadhimai. Its festival, held roughly every five years, is one of the largest religious gatherings in the Terai and draws devotees from across Nepal and India.",
    tags: ["Goddess temple", "Gadhimai Mela", "Devotee gatherings"],
    image: "/images/madhesh/rural.jpg",
    alt: "Village of mud-walled houses and farmland on the Madhesh plains",
    href: PILGRIMAGE_EXPLORER,
  },
  {
    name: "Chhinnamasta Bhagwati",
    district: "Saptari",
    categories: ["Spiritual"],
    highlight:
      "A significant Shakti shrine in Saptari district in the eastern Terai, dedicated to the goddess Chhinnamasta. It is a major place of worship for the region, particularly busy during Dashain and Navaratri.",
    tags: ["Shakti peeth", "Goddess worship", "Navaratri", "Eastern Terai"],
    image: "/images/madhesh/tarai-ropai.jpg",
    alt: "Green rice paddies on the Terai plains",
    href: "#pilgrimage",
  },
  {
    name: "Simraungadh",
    district: "Bara",
    categories: ["Heritage", "Culture"],
    highlight:
      "The ruins of the medieval capital of the Karnat (Tirhut) dynasty, which ruled Mithila from the late 11th century until the city fell in the 14th century. Scattered fortifications, ponds, temples and archaeological mounds make it rewarding for slow, curious exploration.",
    tags: ["Karnat dynasty", "Archaeology", "Medieval heritage", "Ruins"],
    image: "/images/madhesh/simraungadh-gate.jpg",
    alt: "Ancient gate at Simraungadh in Bara district",
    href: "#heritage",
  },
  {
    name: "Parsa National Park",
    district: "Parsa · Bara · Makwanpur",
    categories: ["Wildlife", "Nature"],
    highlight:
      "Sal forests, grasslands and Chure foothills that adjoin Chitwan National Park, forming part of a larger protected wildlife landscape. It is quieter than Chitwan and home to wild elephants, gaur, rich birdlife and a recovering tiger population.",
    tags: ["Jungle drives", "Birdwatching", "Sal forest", "Wild elephants"],
    image: "/images/madhesh/parsa-national-park.jpg",
    alt: "Wild elephants grazing in grassland at Parsa National Park",
    href: "#wildlife",
  },
  {
    name: "Koshi Tappu",
    district: "Saptari · Sunsari",
    categories: ["Wildlife", "Nature"],
    highlight:
      "A wetland reserve on the Koshi River floodplain, straddling Saptari and Sunsari districts. It shelters Nepal's last wild water buffalo (arna) and is one of the country's top birdwatching sites, especially for migratory waterfowl in winter.",
    tags: ["Wild water buffalo", "Wetlands", "Migratory birds", "Ramsar site"],
    image: "/images/madhesh/saptari.jpg",
    alt: "Herd of wild water buffalo beside the Koshi River",
    href: "#wildlife",
  },
  {
    name: "Birgunj",
    district: "Parsa",
    categories: ["Culture"],
    highlight:
      "A major commercial city and Nepal's busiest India–Nepal gateway, facing Raxaul in Bihar. Most travellers pass through it, but its markets, Ghantaghar clock tower and Gahawa Mai temple are worth a short stop on the way to Parsa or Simraungadh.",
    tags: ["Border gateway", "Markets", "Gahawa Mai", "Raxaul crossing"],
    image: "/images/madhesh/tarai.jpg",
    alt: "Rice fields under a blue sky on the Madhesh plains",
    href: "#plan-your-visit",
  },
];

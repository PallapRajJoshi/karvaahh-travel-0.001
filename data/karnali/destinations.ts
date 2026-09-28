export interface KarnaliDestination {
  number: string;
  name: string;
  district: string;
  location: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  size: "large" | "medium" | "small";
}

export const karnaliDestinations: KarnaliDestination[] = [
  {
    number: "01",
    name: "Birendranagar & Deuti Bajai Temple",
    district: "Surkhet",
    location: "Surkhet Valley",
    category: "Gateway City & Heritage",
    description:
      "The provincial capital and principal gateway to Karnali, home to Deuti Bajai Temple, Bulbule Lake and the wide Karnali river landscapes that open onto the wild west.",
    image: "/karnali/surket.jpg",
    alt: "Surkhet valley landscape with Karnali river in the distance",
    size: "large",
  },
  {
    number: "02",
    name: "Dullu & the Pancha Koshi Circuit",
    district: "Dailekh",
    location: "Dullu Municipality",
    category: "Pilgrimage & Archaeology",
    description:
      "Ancient stone monuments and the sacred Pancha Koshi pilgrimage sites — Shristhan, Nabhi Sthan, Dhuleshwar and Padukasthan — scattered across terraced hill country.",
    image: "/karnali/dullu.jpg",
    alt: "Ancient stone temple monuments at Dullu, Dailekh",
    size: "medium",
  },
  {
    number: "03",
    name: "Nalgad Valley & Jajarkot Durbar",
    district: "Jajarkot",
    location: "Khalanga",
    category: "Historic Valley",
    description:
      "A rugged Himalayan foothill district anchored by the historic Jajarkot Durbar, the terraced Nalgad Valley and remote settlements at Jagti and Barekot.",
    image: "/karnali/jajarkot.jpg",
    alt: "Terraced hillsides of Nalgad Valley in Jajarkot",
    size: "small",
  },
  {
    number: "04",
    name: "Kupinde Lake & Khairabang Bhawani",
    district: "Salyan",
    location: "Khalanga, Salyan",
    category: "Hill Country & Temple",
    description:
      "Quiet hill villages surrounding Kupinde Lake, with the Khairabang Bhawani Temple as a spiritual anchor amid Salyan's forested ridgelines.",
    image: "/karnali/salyan.jpg",
    alt: "Kupinde Lake surrounded by hill forest in Salyan",
    size: "small",
  },
  {
    number: "05",
    name: "Rukmini Tal & the Sisne Himal Foothills",
    district: "Rukum West",
    location: "Musikot / Rukumkot",
    category: "Lake & Magar Heartland",
    description:
      "Rukmini Tal and the Taksera-Putha landscapes sit beneath views of Sisne Himal, in a district shaped by long-standing Magar village life.",
    image: "/karnali/rukum.jpg",
    alt: "Rukmini Tal lake with distant Sisne Himal views",
    size: "medium",
  },
  {
    number: "06",
    name: "Panchha Waterfall & Sanni Triveni",
    district: "Kalikot",
    location: "Raskot",
    category: "Remote Valley",
    description:
      "A little-visited district of steep Karnali valleys, home to Panchha Waterfall, the confluence site of Sanni Triveni and the town of Tilagufa.",
    image: "/karnali/kalikot.jpg",
    alt: "Panchha Waterfall in a remote Kalikot valley",
    size: "small",
  },
  {
    number: "07",
    name: "Chandannath Temple & Sinja Valley",
    district: "Jumla",
    location: "Sinja Valley",
    category: "Ancient Khas Civilization",
    description:
      "Jumla Bazaar, Chandannath Temple and the archaeologically significant Sinja Valley — widely regarded as central to the historical development of the Khas language and civilization.",
    image: "/karnali/sinja.jpg",
    alt: "Sinja Valley farmland with distant mountains, Jumla",
    size: "large",
  },
  {
    number: "08",
    name: "Rara Lake & Rara National Park",
    district: "Mugu",
    location: "Rara National Park",
    category: "Nepal's Largest High-Altitude Lake",
    description:
      "Rara Lake, ringed by pine forest and the Murma Top viewpoint, is Karnali's most iconic wilderness destination, reached via Talcha and Gamgadhi.",
    image: "/karnali/rara-lake.jpg",
    alt: "Rara Lake reflecting surrounding pine forest and mountains",
    size: "large",
  },
  {
    number: "09",
    name: "Limi Valley & Halji Monastery",
    district: "Humla",
    location: "Simikot / Limi Valley",
    category: "Trans-Himalayan Frontier",
    description:
      "From Simikot to Hilsa, Humla opens into the remote Limi Valley, home to Nyinba villages, Halji Monastery and views toward Saipal Himal.",
    image: "/karnali/humla.jpg",
    alt: "Limi Valley village beneath the Saipal Himalayan range",
    size: "medium",
  },
  {
    number: "10",
    name: "Phoksundo Lake & Shey Gompa",
    district: "Dolpa",
    location: "Shey Phoksundo National Park",
    category: "High-Altitude Wilderness",
    description:
      "Turquoise Phoksundo Lake, Ringmo village, Shey Gompa and Crystal Mountain define Dolpo's stark Bon and Buddhist wilderness, extending through Dho Tarap and Saldang.",
    image: "/karnali/phoksundo-lake.jpg",
    alt: "Turquoise waters of Phoksundo Lake in Dolpa",
    size: "large",
  },
];

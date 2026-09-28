export type KoshiDestination = {
  name: string;
  location: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  size: "large" | "medium" | "small";
};

export const koshiDestinations: KoshiDestination[] = [
  {
    name: "Everest Region",
    location: "Solukhumbu",
    category: "Himalayan Adventure",
    description: "Legendary trails, high valleys and unforgettable Himalayan horizons.",
    image: "/koshi/everest-region-view.jpg",
    alt: "Himalayan mountain landscape in the Everest region",
    size: "large",
  },
  {
    name: "Kanchenjunga",
    location: "Taplejung",
    category: "Mountain Wilderness",
    description: "Remote trails and vast mountain wilderness in eastern Nepal.",
    image: "/koshi/kanchenjunga.jpg",
    alt: "Kanchenjunga mountain landscape in eastern Nepal",
    size: "medium",
  },
  {
    name: "Ilam Tea Hills",
    location: "Ilam",
    category: "Tea & Hills",
    description: "Rolling tea gardens, misty mornings and a slower rhythm of travel.",
    image: "/koshi/illam-tea-hill.jpg",
    alt: "Green tea gardens in the hills of Ilam",
    size: "medium",
  },
  {
    name: "Pathibhara",
    location: "Taplejung",
    category: "Spiritual Journey",
    description: "A sacred Himalayan pilgrimage surrounded by dramatic mountain scenery.",
    image: "/koshi/pathibhara-temple.jpg",
    alt: "Mountain landscape near the Pathibhara pilgrimage route",
    size: "small",
  },
  {
    name: "Makalu-Barun",
    location: "Sankhuwasabha",
    category: "Adventure & Nature",
    description: "Wild landscapes and extraordinary biodiversity beneath Makalu.",
    image: "/koshi/barun-valley.jpg",
    alt: "Wild Himalayan landscape of the Makalu-Barun region",
    size: "large",
  },
  {
    name: "Koshi Tappu",
    location: "Sunsari / Saptari",
    category: "Wildlife & Wetlands",
    description: "Wetlands, grasslands and river ecosystems alive with birdlife.",
    image: "/koshi/toppu.jpg",
    alt: "Wetland landscape of Koshi Tappu",
    size: "medium",
  },
  {
    name: "Halesi Mahadev",
    location: "Khotang",
    category: "Culture & Spirituality",
    description: "A revered sacred cave and spiritual heritage destination.",
    image: "/koshi/haleshi-mahadev.jpg",
    alt: "Sacred landscape associated with Halesi Mahadev",
    size: "small",
  },
  {
    name: "Bhedetar",
    location: "Sunsari",
    category: "Hill Escape",
    description: "A cool hill retreat with forests, ridges and sweeping views.",
    image: "/koshi/bhedetar-view.jpg",
    alt: "Misty hill landscape around Bhedetar",
    size: "medium",
  },
  // {
  //   name: "Shree Antu",
  //   location: "Ilam",
  //   category: "Sunrise & Slow Travel",
  //   description: "Quiet trails and celebrated eastern Himalayan sunrise views.",
  //   image: "/koshi/antu.jpg",
  //   alt: "Sunrise landscape at Shree Antu in Ilam",
  //   size: "small",
  // },
];

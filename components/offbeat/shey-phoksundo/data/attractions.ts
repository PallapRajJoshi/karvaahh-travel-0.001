import type { AttractionItem } from "./types";

// Section 5: Top Attractions. `category` distinguishes attractions reachable on a
// standard Phoksundo Lake visit ("lake-region") from Upper Dolpo destinations that
// require extended trekking, acclimatization, and restricted-area permits.

export const ATTRACTIONS: AttractionItem[] = [
  {
    id: "phoksundo-lake",
    name: "Phoksundo Lake",
    category: "lake-region",
    description:
      "The spectacular turquoise lake at the heart of the national park, framed by cliffs, reflections, and dramatic mountain scenery.",
    location: "Shey Phoksundo National Park",
    activities: ["Lakeside walks", "Photography", "Nature exploration"],
    image: "/images/offbeat/shey-phoksundo/attractions/phoksundo-lake.jpg",
    alt: "Turquoise Phoksundo Lake surrounded by cliffs and forest",
  },
  {
    id: "ringmo-village",
    name: "Ringmo Village",
    category: "lake-region",
    description:
      "A traditional settlement near Phoksundo Lake known for its distinctive architecture and local cultural heritage.",
    location: "Near Phoksundo Lake",
    activities: ["Village walks", "Cultural exploration", "Photography"],
    image: "/images/offbeat/shey-phoksundo/attractions/ringmo-village.jpg",
    alt: "Traditional stone and timber houses of Ringmo Village",
  },
  {
    id: "tshowa-bon-monastery",
    name: "Tshowa Bon Monastery",
    category: "lake-region",
    description:
      "A site of spiritual significance carrying historic Bon Buddhist heritage associated with the Phoksundo region.",
    location: "Near Phoksundo Lake / Ringmo",
    activities: ["Cultural exploration", "Learning about local spiritual traditions"],
    image: "/images/offbeat/shey-phoksundo/attractions/tshowa-bon-monastery.jpg",
    alt: "Tshowa Bon Monastery prayer flags and stone architecture",
  },
  {
    id: "phoksundo-waterfall",
    name: "Phoksundo Waterfall",
    category: "lake-region",
    description: "A dramatic waterfall set against surrounding rugged landscapes.",
    location: "Near Ringmo / Phoksundo Lake outlet",
    activities: ["Photography", "Nature observation", "Scenic exploration"],
    image: "/images/offbeat/shey-phoksundo/attractions/phoksundo-waterfall.jpg",
    alt: "Phoksundo Waterfall cascading down a rugged cliff face",
  },
  {
    id: "suligad-river",
    name: "Suligad River",
    category: "lake-region",
    description: "A scenic river valley bordered by wilderness and dramatic landscapes.",
    location: "Suligad Valley",
    activities: ["Nature walks", "Photography"],
    image: "/images/offbeat/shey-phoksundo/attractions/suligad-river.jpg",
    alt: "Suligad River winding through a forested valley",
  },
  {
    id: "shey-gompa",
    name: "Shey Gompa",
    category: "upper-dolpo",
    description:
      "A remote monastery in Upper Dolpo of deep spiritual and cultural significance.",
    location: "Upper Dolpo",
    activities: ["Cultural exploration", "Trekking (route access and permits apply)"],
    image: "/images/offbeat/shey-phoksundo/attractions/shey-gompa.jpg",
    alt: "Shey Gompa monastery beneath high Himalayan peaks",
  },
  {
    id: "crystal-mountain",
    name: "Crystal Mountain",
    category: "upper-dolpo",
    description:
      "A sacred mountain landscape significant in the spiritual traditions of Dolpo.",
    location: "Upper Dolpo",
    activities: ["Mountain photography", "Cultural exploration"],
    image: "/images/offbeat/shey-phoksundo/attractions/crystal-mountain.jpg",
    alt: "Crystal Mountain rising above the Upper Dolpo landscape",
  },
  {
    id: "saldang",
    name: "Saldang",
    category: "upper-dolpo",
    description:
      "A traditional settlement with Tibetan-influenced architecture set in high-altitude landscapes.",
    location: "Upper Dolpo",
    activities: ["Village exploration", "Cultural experiences"],
    image: "/images/offbeat/shey-phoksundo/attractions/saldang.jpg",
    alt: "Tibetan-influenced houses of Saldang village in Upper Dolpo",
  },
  {
    id: "dho-tarap",
    name: "Dho Tarap",
    category: "upper-dolpo",
    description:
      "A traditional settlement in the Tarap Valley, set among highland landscapes and cultural heritage.",
    location: "Tarap Valley, Upper Dolpo",
    activities: ["Cultural walks", "Photography", "Trekking"],
    image: "/images/offbeat/shey-phoksundo/attractions/dho-tarap.jpg",
    alt: "Dho Tarap settlement in the high Tarap Valley",
  },
];

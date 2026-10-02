/* Destination data + schematic map geometry. Coordinates are approximate decimal degrees. */

export type Destination = {
  id: string;
  name: string;
  lat: number;
  lon: number;
  learningFocus: string;
  themes: string[];
  ageGroup: string;
  activities: string[];
  /** For the on-map cluster: sub-places shown inside one marker */
  includes?: string[];
  /** Learning-by-destination table row(s) */
  table: { place: string; focus: string; experiences: string }[];
  link?: string;
};

export const DESTINATIONS_SECTION = {
  eyebrow: "Destinations",
  title: "Nepal as an Open-Air Classroom",
  lead: "Select a destination to see its learning themes, suggested age group and example activities. Age groups and activities are suggestions — final programs are confirmed with your institution.",
  mapNote: "Schematic map for orientation only — not a road or route map. Connections show sample itinerary concepts.",
  ctaCopy: "Explore Learning Destinations",
};

export const DESTINATIONS: Destination[] = [
  {
    id: "kathmandu-valley",
    name: "Kathmandu Valley",
    lat: 27.7,
    lon: 85.35,
    learningFocus: "History, architecture, culture, archaeology and urban heritage.",
    themes: ["History", "Architecture", "Culture", "Archaeology", "Urban heritage"],
    ageGroup: "Adaptable across school and university levels",
    activities: ["Heritage walks", "Museum visits", "Guided cultural interpretation"],
    includes: ["Kathmandu", "Bhaktapur", "Patan / Lalitpur"],
    table: [
      { place: "Kathmandu", focus: "History & Culture", experiences: "Heritage walks, museums" },
      { place: "Bhaktapur", focus: "Architecture & Heritage", experiences: "Heritage exploration" },
      { place: "Patan", focus: "Art & Architecture", experiences: "Cultural workshops" },
    ],
    link: "/destinations/bagmati-province",
  },
  {
    id: "lumbini",
    name: "Lumbini",
    lat: 27.47,
    lon: 83.28,
    learningFocus: "Buddhist heritage, archaeology, spirituality and international cultural heritage.",
    themes: ["Buddhist heritage", "Archaeology", "Spirituality", "World heritage"],
    ageGroup: "Upper school and above",
    activities: ["Heritage exploration", "Guided interpretation", "Reflection sessions"],
    table: [{ place: "Lumbini", focus: "Archaeology & Buddhism", experiences: "Heritage exploration" }],
    link: "/destinations/lumbini-province",
  },
  {
    id: "chitwan",
    name: "Chitwan",
    lat: 27.53,
    lon: 84.43,
    learningFocus: "Wildlife, biodiversity, ecosystems and conservation.",
    themes: ["Wildlife", "Biodiversity", "Ecosystems", "Conservation"],
    ageGroup: "Primary to university, activities adapted by age",
    activities: ["Nature walks", "Wildlife observation (sightings never guaranteed)", "Conservation interpretation"],
    table: [{ place: "Chitwan", focus: "Wildlife & Ecology", experiences: "Nature activities" }],
    link: "/destinations/bagmati-province",
  },
  {
    id: "pokhara",
    name: "Pokhara",
    lat: 28.21,
    lon: 83.99,
    learningFocus: "Himalayan geography, lakes, mountains, tourism and local culture.",
    themes: ["Geography", "Lakes", "Mountains", "Tourism", "Local culture"],
    ageGroup: "Adaptable across school and university levels",
    activities: ["Lake and mountain studies", "Nature-based learning", "Cultural exploration"],
    table: [{ place: "Pokhara", focus: "Geography & Environment", experiences: "Mountain and lake studies" }],
    link: "/destinations/gandaki-province",
  },
  {
    id: "annapurna",
    name: "Annapurna Region",
    lat: 28.53,
    lon: 83.88,
    learningFocus: "Geography, ecology, mountain communities, landscapes and sustainable tourism.",
    themes: ["Geography", "Ecology", "Mountain communities", "Sustainable tourism"],
    ageGroup: "Upper school and above, subject to safety assessment",
    activities: ["Nature trails", "Field learning", "Community learning"],
    table: [{ place: "Annapurna", focus: "Himalayan Geography", experiences: "Nature trails and field learning" }],
    link: "/destinations/gandaki-province",
  },
];

/** Sample itinerary concepts drawn on the schematic map (ids from DESTINATIONS). */
export const ROUTES: { id: string; label: string; stops: string[] }[] = [
  { id: "none", label: "No route", stops: [] },
  { id: "multi", label: "Multi-day concept", stops: ["kathmandu-valley", "pokhara"] },
  { id: "extended", label: "Extended expedition concept", stops: ["kathmandu-valley", "chitwan", "pokhara", "lumbini"] },
];

/* ---- Map geometry (schematic) ---- */
export const MAP_W = 1000;
export const MAP_H = 622;
const LON0 = 79.9;
const LON_SPAN = 8.4;
const LAT_TOP = 30.6;
const LAT_SPAN = 4.6;

export const project = (lon: number, lat: number) => ({
  x: ((lon - LON0) / LON_SPAN) * MAP_W,
  y: ((LAT_TOP - lat) / LAT_SPAN) * MAP_H,
});

/** Simplified national outline (lon, lat) — schematic, not survey-accurate. */
const OUTLINE: [number, number][] = [
  [80.55, 30.45], [81.0, 30.2], [81.4, 30.35], [82.0, 29.95], [82.2, 30.1], [83.0, 29.85], [83.9, 29.35],
  [84.1, 28.9], [84.7, 28.55], [85.2, 28.3], [85.8, 28.25], [86.0, 27.95], [86.6, 28.1], [87.2, 27.85],
  [88.1, 27.9], [88.15, 27.3], [88.1, 26.4], [87.5, 26.4], [86.5, 26.45], [85.5, 26.6], [84.6, 27.0],
  [83.5, 27.4], [82.7, 27.5], [82.0, 27.85], [81.5, 28.2], [80.6, 28.6], [80.06, 28.83], [80.2, 29.5],
];

export const OUTLINE_PATH =
  OUTLINE.map(([lon, lat], i) => {
    const { x, y } = project(lon, lat);
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ") + " Z";

/** Curved connector between two projected points. */
export function connector(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - Math.hypot(b.x - a.x, b.y - a.y) * 0.12;
  return `M${a.x.toFixed(1)} ${a.y.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

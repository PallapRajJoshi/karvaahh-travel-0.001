import type { Attraction } from "./types";

/**
 * Section 5 — Top Attractions Around Tsho Rolpa.
 * `onRouteToLake` distinguishes attractions directly along the standard
 * trekking route from those needing separate access, per brief instruction
 * ("clearly distinguish... do not invent distances or travel durations").
 * No distances/durations are included anywhere in this file.
 */
export const attractions: Attraction[] = [
  {
    id: "tsho-rolpa-lake",
    name: "Tsho Rolpa Lake",
    description:
      "The glacial lake itself — turquoise waters set against rugged mountain surroundings and high-altitude terrain, fed by the Trakarding Glacier above.",
    locationContext: "Head of the Rolwaling Valley, Dolakha district",
    activities: ["Scenic exploration", "Photography", "Nature observation"],
    image: "/images/tsho-rolpa/attractions/tsho-rolpa-lake.jpg",
    onRouteToLake: true,
    requiresExtendedTrek: false,
  },
  {
    id: "bedhing-village",
    name: "Bedhing Village",
    description:
      "A traditional Sherpa settlement with distinctive mountain architecture, local culture, and views over the surrounding Rolwaling landscape.",
    locationContext: "Lower Rolwaling Valley, on the approach trail",
    activities: ["Cultural walks", "Photography", "Local interactions"],
    image: "/images/tsho-rolpa/attractions/bedhing-village.jpg",
    onRouteToLake: true,
    requiresExtendedTrek: false,
  },
  {
    id: "na-village",
    name: "Na Village",
    description:
      "A remote, high-altitude settlement beyond Bedhing, known for dramatic mountain scenery and its role as an acclimatization stop.",
    locationContext: "Upper Rolwaling Valley, above Bedhing",
    activities: ["Trekking", "Village exploration", "Acclimatization stops"],
    image: "/images/tsho-rolpa/attractions/na-village.jpg",
    onRouteToLake: true,
    requiresExtendedTrek: false,
  },
  {
    id: "rolwaling-valley",
    name: "Rolwaling Valley",
    description:
      "The valley corridor itself — dramatic terrain, forests, rivers, and alpine meadows threaded with traditional settlements.",
    locationContext: "Dolakha district, between Chetchet and the upper lake basin",
    activities: ["Trekking", "Photography", "Nature exploration"],
    image: "/images/tsho-rolpa/attractions/rolwaling-valley.jpg",
    onRouteToLake: true,
    requiresExtendedTrek: false,
  },
  {
    id: "trakarding-glacier",
    name: "Trakarding Glacier",
    description:
      "The rugged glacial landscape feeding Tsho Rolpa, visible from suitable vantage points along designated routes near the lake.",
    locationContext: "Above Tsho Rolpa Lake",
    activities: ["Landscape photography", "Trekking via suitable designated routes"],
    image: "/images/tsho-rolpa/attractions/trakarding-glacier.jpg",
    onRouteToLake: true,
    requiresExtendedTrek: false,
  },
  {
    id: "tashi-lapcha-pass",
    name: "Tashi Lapcha Pass",
    description:
      "A challenging high-altitude mountain pass connecting the Rolwaling region with the Everest region — a technical crossing, not a casual extension.",
    locationContext: "Above the upper Rolwaling Valley, connecting toward Thame/Khumbu",
    activities: ["Technical trekking", "Expedition-style crossing with experienced support"],
    image: "/images/tsho-rolpa/attractions/tashi-lapcha-pass.jpg",
    onRouteToLake: false,
    requiresExtendedTrek: true,
  },
  {
    id: "dudh-kunda",
    name: "Dudh Kunda (Omi Tso)",
    description:
      "A nearby regional highlight lake, presented here as a point of interest subject to verified route access and current conditions.",
    locationContext: "Regional highlight near the wider Rolwaling–Solu area",
    activities: ["Scenic exploration and photography where access is feasible"],
    image: "/images/tsho-rolpa/attractions/dudh-kunda.jpg",
    onRouteToLake: false,
    requiresExtendedTrek: true,
  },
  {
    id: "gaurishankar-himal",
    name: "Gaurishankar Himal",
    description:
      "The iconic Himalayan range associated with the region, visible as dramatic backdrop scenery from vantage points along the valley.",
    locationContext: "Bordering the Rolwaling Valley, Gaurishankar Conservation Area",
    activities: ["Mountain photography", "Scenic exploration"],
    image: "/images/tsho-rolpa/attractions/gaurishankar-himal.jpg",
    onRouteToLake: false,
    requiresExtendedTrek: false,
  },
  {
    id: "yalung-ri",
    name: "Yalung Ri",
    description:
      "A trekking peak in the surrounding alpine landscape, of interest to suitably experienced mountaineers as a separate objective.",
    locationContext: "Rolwaling / Gaurishankar region",
    activities: ["Trekking and mountaineering with suitable expertise, permits, and verified conditions"],
    image: "/images/tsho-rolpa/attractions/yalung-ri.jpg",
    onRouteToLake: false,
    requiresExtendedTrek: true,
  },
];

import type { Destination } from "./types";
import { LINKS } from "./links";

/**
 * Descriptive content only. No entry fees, sighting odds, schedules, or travel times —
 * those must be confirmed per trip and are deliberately absent.
 */
export const DESTINATIONS: Destination[] = [
  {
    id: "chitwan",
    name: "Chitwan National Park",
    region: "Central Terai, Nepal",
    heading: "Into the Heart of the Terai Jungle",
    description:
      "Tropical forests, open grasslands and river ecosystems come together in one of the Terai's best-known protected areas, home to a rich diversity of wildlife.",
    features: ["Tropical forest and grassland", "One-horned rhinoceros habitat", "River and wetland scenery", "Rich bird diversity"],
    experiences: [
      "Jungle safari experiences where permitted",
      "Wildlife and birdwatching",
      "Nature walks where available",
      "Local cultural experiences where available",
    ],
    idealFor: "First-time wildlife travellers, families, photographers",
    image: "dest-chitwan",
    href: LINKS.bagmati,
    size: "feature",
    comparison: {
      ecosystem: "Terai lowland: tropical forest, grassland, river",
      highlights: "One-horned rhinoceros habitat, river and wetland scenery, birdlife",
      signature: "Jungle safari where permitted, birdwatching, nature walks where available",
      idealTraveler: "First-time wildlife travellers, families, photographers",
      travelStyle: "Lowland jungle stay with guided outings",
    },
  },
  {
    id: "bardia",
    name: "Bardia National Park",
    region: "Western Terai, Nepal",
    heading: "Discover the Wilderness of Western Nepal",
    description:
      "Forests, riverine habitats and grasslands stretch across a wilder, quieter corner of the Terai. Wildlife sightings are never guaranteed — the reward is the landscape itself.",
    features: ["Riverine forest", "Grassland habitats", "Wildlife-rich landscapes", "Conservation awareness"],
    experiences: [
      "Guided wildlife safari experiences where available",
      "Wildlife photography",
      "Birdwatching",
      "Nature walks where permitted",
    ],
    idealFor: "Photographers, repeat wildlife travellers, quiet-seekers",
    image: "dest-bardia",
    href: LINKS.lumbini,
    size: "feature",
    comparison: {
      ecosystem: "Terai lowland: riverine forest, grassland",
      highlights: "Forest and grassland landscapes, riverine habitats, conservation awareness",
      signature: "Guided safari where available, wildlife photography, birdwatching",
      idealTraveler: "Photographers, repeat wildlife travellers, those seeking a quieter setting",
      travelStyle: "Remote-feeling jungle stay, unhurried pace",
    },
  },
  {
    id: "koshi-tappu",
    name: "Koshi Tappu Wildlife Reserve",
    region: "Eastern Terai, Nepal",
    heading: "A Paradise for Birdwatchers",
    description:
      "Wetlands, river channels and grasslands make this reserve a natural home for resident and migratory birdlife — and a calm setting for patient observation.",
    features: ["Wetlands and river channels", "Grassland landscapes", "Bird diversity", "Nature observation"],
    experiences: [
      "Birdwatching",
      "Wetland exploration",
      "Wildlife photography",
      "Guided experiences where available",
    ],
    idealFor: "Birdwatchers, bird photographers, slow-travel nature lovers",
    image: "dest-koshi-tappu",
    href: LINKS.koshi,
    size: "feature",
    comparison: {
      ecosystem: "Wetland, river channels, grassland",
      highlights: "Bird diversity, river and grassland landscapes, nature observation",
      signature: "Birdwatching, wetland exploration, photography",
      idealTraveler: "Birdwatchers, bird photographers, patient observers",
      travelStyle: "Slow, observation-led short stay",
    },
  },
  {
    id: "shuklaphanta",
    name: "Shuklaphanta National Park",
    region: "Far-western Terai, Nepal",
    heading: "Explore Vast Grasslands and Wild Landscapes",
    description: "Wide grasslands, forests and wetlands define the wildlife habitats of far-western Nepal.",
    features: ["Open grasslands", "Forest and wetland", "Wildlife habitats"],
    experiences: ["Grassland and forest landscapes", "Wildlife observation", "Birdwatching", "Guided safari where available"],
    idealFor: "Nature photographers, travellers exploring the far west",
    image: "dest-shuklaphanta",
    href: LINKS.sudurpashchim,
    size: "compact",
    comparison: {
      ecosystem: "Terai grassland, forest, wetland",
      highlights: "Vast grasslands, forest and wetland habitats",
      signature: "Wildlife observation, birdwatching, guided safari where available",
      idealTraveler: "Nature photographers, far-west explorers",
      travelStyle: "Off-the-main-circuit lowland stay",
    },
  },
  {
    id: "sagarmatha",
    name: "Sagarmatha National Park",
    region: "Khumbu, Eastern Himalaya",
    heading: "Discover the High Himalayan Wilderness",
    description:
      "Dramatic peaks, alpine landscapes, glaciers and mountain forests form a high-altitude ecosystem shaped by Sherpa culture.",
    features: ["Alpine landscapes", "Glaciers and peaks", "Mountain forest", "High-altitude ecosystems"],
    experiences: [
      "Himalayan nature trekking",
      "Mountain and landscape photography",
      "Sherpa cultural experiences",
      "Wildlife and bird observation where possible",
    ],
    idealFor: "Trekkers, landscape photographers, culture-curious travellers",
    image: "dest-sagarmatha",
    href: LINKS.koshi,
    size: "compact",
    comparison: {
      ecosystem: "High Himalayan alpine, glacial, mountain forest",
      highlights: "Peaks, alpine scenery, high-altitude ecosystems, Sherpa culture",
      signature: "Nature trekking, landscape photography",
      idealTraveler: "Trekkers, landscape photographers",
      travelStyle: "Trail-based mountain journey; fitness and acclimatisation matter",
    },
  },
  {
    id: "langtang",
    name: "Langtang National Park",
    region: "North of Kathmandu, Himalaya",
    heading: "Forests, Mountains, and Himalayan Biodiversity",
    description:
      "Forested slopes rise into mountain valleys and alpine terrain, with Himalayan flora and fauna alongside local mountain communities.",
    features: ["Mountain forest", "Valley and alpine landscapes", "Himalayan flora and fauna", "Local communities"],
    experiences: [
      "Nature and forest trails",
      "Mountain landscape photography",
      "Birdwatching",
      "Cultural exploration in local communities",
    ],
    idealFor: "Trekkers, nature walkers, photographers",
    image: "dest-langtang",
    href: LINKS.bagmati,
    size: "compact",
    comparison: {
      ecosystem: "Mountain forest to alpine valley",
      highlights: "Forest trails, valley scenery, Himalayan flora and fauna",
      signature: "Forest trails, scenic trekking, birdwatching, community visits",
      idealTraveler: "Trekkers, nature walkers, photographers",
      travelStyle: "Trail-based mountain journey with cultural stops",
    },
  },
  {
    id: "rara",
    name: "Rara National Park",
    region: "Karnali, Far-west Himalaya",
    heading: "The Tranquility of Nepal's Largest Lake",
    description:
      "Clear waters, forested hills and remote Himalayan wilderness create one of Nepal's most peaceful nature escapes.",
    features: ["Nepal's largest lake", "Forested hills", "Mountain and lake scenery", "Remote wilderness"],
    experiences: ["Scenic lakeside walks", "Nature photography", "Forest trails", "Birdwatching"],
    idealFor: "Nature lovers, photographers, slow-travel seekers",
    image: "dest-rara",
    href: LINKS.rara,
    size: "compact",
    comparison: {
      ecosystem: "Alpine lake, temperate forest, mountain",
      highlights: "Clear lake waters, forested hills, distant mountains",
      signature: "Lakeside walks, forest trails, nature photography",
      idealTraveler: "Nature lovers, photographers, quiet-seekers",
      travelStyle: "Remote, slow-paced lakeside escape",
    },
  },
];

export const getDestination = (id: string) => DESTINATIONS.find((d) => d.id === id);

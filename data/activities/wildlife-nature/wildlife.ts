import type { WildlifeEncounter } from "./types";

export const OBSERVATION_MESSAGE =
  "Wildlife is wild. Sightings are never guaranteed, and not every species lives in every park. Always observe from a respectful distance and follow your guide's instructions.";

export const ENCOUNTERS: WildlifeEncounter[] = [
  {
    id: "tiger",
    name: "Bengal Tiger",
    description:
      "Discover the elusive Bengal tiger in Nepal's suitable forest and grassland habitats, including protected areas in the Terai.",
    habitat: "Terai forest and grassland",
    image: "wl-tiger",
  },
  {
    id: "rhino",
    name: "One-Horned Rhinoceros",
    description:
      "Explore the grasslands and wetlands that provide habitat for Nepal's iconic greater one-horned rhinoceros.",
    habitat: "Terai grassland and wetland",
    image: "wl-rhino",
  },
  {
    id: "elephant",
    name: "Wild Elephants",
    description: "Learn about wild elephant habitats and conservation efforts in Nepal's suitable lowland ecosystems.",
    habitat: "Lowland forest and grassland",
    image: "wl-elephant",
  },
  {
    id: "red-panda",
    name: "Red Panda",
    description:
      "Discover the forest habitats of the elusive red panda in Nepal's Himalayan and temperate forest regions.",
    habitat: "Himalayan temperate forest",
    image: "wl-red-panda",
  },
  {
    id: "birds",
    name: "Exotic and Migratory Birds",
    description: "Explore Nepal's remarkable bird diversity across wetlands, forests, rivers, and highland habitats.",
    habitat: "Wetlands, forests, rivers, highlands",
    image: "wl-birds",
  },
  {
    id: "himalayan",
    name: "Himalayan Wildlife",
    description: "Discover the unique wildlife and ecosystems of Nepal's high-altitude landscapes.",
    habitat: "Alpine and high-altitude terrain",
    image: "wl-himalayan",
  },
];

import type { NatureActivity } from "./types";

export const ACTIVITIES: NatureActivity[] = [
  {
    id: "safari",
    title: "Guided Jungle Safaris",
    description:
      "Explore selected protected areas through permitted safari experiences and observe wildlife in natural habitats.",
    icon: "binoculars",
    experience: "jungle-safari",
  },
  {
    id: "birding",
    title: "Birdwatching",
    description:
      "Discover resident and migratory birdlife across wetlands, forests, grasslands, and river ecosystems.",
    icon: "bird",
    experience: "birdwatching",
  },
  {
    id: "photo",
    title: "Wildlife Photography",
    description: "Capture wildlife and landscapes while following responsible photography practices.",
    icon: "camera",
    experience: "wildlife-photography",
  },
  {
    id: "walks",
    title: "Nature Walks",
    description:
      "Explore scenic forest trails, natural landscapes, and selected protected areas where walking is permitted.",
    icon: "leaf",
    experience: "nature-walks",
  },
  {
    id: "canoe",
    title: "Canoeing and River Experiences",
    description:
      "Discover selected rivers and wetlands through permitted canoeing or water-based activities.",
    icon: "canoe",
    experience: "canoeing-wetland",
  },
  {
    id: "lakeside",
    title: "Lakeside Nature Escapes",
    description:
      "Enjoy peaceful lake landscapes, forest trails, and outdoor relaxation in destinations such as Rara and Pokhara.",
    icon: "lake",
    experience: "lakeside",
  },
];

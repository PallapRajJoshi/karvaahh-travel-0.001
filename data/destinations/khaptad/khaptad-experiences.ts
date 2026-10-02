// Experiences & activities grid, plus trekking/hiking categories.

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const khaptadExperiences: ExperienceItem[] = [
  {
    id: "nature-walks",
    title: "Nature Walks Through Alpine Meadows",
    description: "Wander the open Patans and rolling grasslands at your own pace.",
    image: "/images/destinations/khaptad/experiences/nature-walks.jpg",
  },
  {
    id: "trekking-trails",
    title: "Trekking Along Forest Trails & Ridgelines",
    description: "Follow scenic trails through oak and rhododendron forest.",
    image: "/images/destinations/khaptad/experiences/trekking-trails.jpg",
  },
  {
    id: "birdwatching",
    title: "Birdwatching & Wildlife Observation",
    description: "Observe the park's diverse birdlife amid quiet forest and meadow habitats.",
    image: "/images/destinations/khaptad/experiences/birdwatching.jpg",
  },
  {
    id: "wildlife-photography",
    title: "Wildlife Photography",
    description: "Photograph the park's wildlife responsibly and from a respectful distance.",
    image: "/images/destinations/khaptad/experiences/wildlife-photography.jpg",
  },
  {
    id: "meditation",
    title: "Meditation & Peaceful Reflection",
    description: "Find quiet space for reflection amid Khaptad's tranquil surroundings.",
    image: "/images/destinations/khaptad/experiences/meditation.jpg",
  },
  {
    id: "spiritual-exploration",
    title: "Spiritual Exploration at Khaptad Baba Ashram",
    description: "Visit the ashram associated with the legacy of Khaptad Swami.",
    image: "/images/destinations/khaptad/experiences/spiritual-exploration.jpg",
  },
  {
    id: "cultural-visits",
    title: "Cultural Visits to Sacred Landmarks",
    description: "Explore Tribeni Dham, Sahasralinga, and other landmarks of local significance.",
    image: "/images/destinations/khaptad/experiences/cultural-visits.jpg",
  },
  {
    id: "rhododendron-forests",
    title: "Rhododendron Forest Exploration",
    description: "Walk through seasonal rhododendron blooms within the park's forest cover.",
    image: "/images/destinations/khaptad/experiences/rhododendron-forests.jpg",
  },
  {
    id: "landscape-photography",
    title: "Scenic Landscape Photography",
    description: "Capture Khaptad's meadows, forests, and panoramic Himalayan views.",
    image: "/images/destinations/khaptad/experiences/landscape-photography.jpg",
  },
  {
    id: "local-culture",
    title: "Local Cultural Experiences",
    description: "Engage with nearby communities and regional far-western Nepali culture.",
    image: "/images/destinations/khaptad/experiences/local-culture.jpg",
  },
];

export const khaptadExperiencesDisclaimer: string =
  "Activities depend on weather, local regulations, trail conditions, and availability.";

export interface TrekCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export const khaptadTrekCategories: TrekCategory[] = [
  {
    id: "easy",
    title: "Easy Nature Walks",
    description: "Short walks through meadows and forest landscapes.",
    items: [
      "Scenic walks through Khaptad Patans",
      "Trails around Khaptad Baba Ashram",
      "Nature trails around Khaptad Daha",
    ],
  },
  {
    id: "moderate",
    title: "Moderate Day Hikes",
    description: "Longer trails connecting spiritual landmarks and scenic viewpoints.",
    items: ["Hiking toward Sahasralinga", "Forest walks through oak and rhododendron landscapes"],
  },
  {
    id: "extended",
    title: "Extended Regional Treks",
    description:
      "Multi-day journeys toward nearby destinations such as Badimalika, subject to verified routes and logistics.",
    items: [
      "Longer trekking options connecting nearby villages and regional attractions, where route feasibility is verified",
    ],
  },
];

export const khaptadTrekDisclaimer: string =
  "Trail distances, elevation gains, trekking durations, and difficulty ratings vary and should be confirmed locally before travel.";

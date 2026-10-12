// data/usa/nationalParks.ts
// National parks Karvaahh plans around. Seasons and difficulty are general
// guidance; reservations, fees, closures and access vary by park and year.

import type { USAImageId } from "./images";
import type { USRegion } from "./regions";

export type ParkExperience =
  | "hiking"
  | "scenic-drives"
  | "wildlife"
  | "photography"
  | "family"
  | "camping"
  | "luxury-lodges"
  | "adventure";

export const parkExperiences: { id: ParkExperience; label: string }[] = [
  { id: "hiking", label: "Hiking" },
  { id: "scenic-drives", label: "Scenic Drives" },
  { id: "wildlife", label: "Wildlife" },
  { id: "photography", label: "Photography" },
  { id: "family", label: "Family" },
  { id: "camping", label: "Camping" },
  { id: "luxury-lodges", label: "Luxury Lodges" },
  { id: "adventure", label: "Adventure" },
];

export type Difficulty = "Easy" | "Easy–Moderate" | "Moderate" | "Moderate–Challenging";

export interface NationalPark {
  id: string;
  name: string;
  state: string;
  region: USRegion;
  image?: USAImageId;
  description: string;
  experiences: ParkExperience[];
  season: string;
  /** Overall difficulty of the typical visit; harder trails exist in most parks. */
  difficulty: Difficulty;
  duration: string;
  /** Destination id on this page, when the park is part of a destination card. */
  destinationId?: string;
  active: boolean;
}

export const nationalParks: NationalPark[] = [
  {
    id: "grand-canyon", name: "Grand Canyon", state: "Arizona", region: "southwest", image: "grand-canyon", destinationId: "grand-canyon",
    description: "Rim viewpoints for every level, from easy paved walks to demanding inner-canyon trails.",
    experiences: ["photography", "scenic-drives", "hiking", "family", "adventure", "luxury-lodges"],
    season: "Spring & autumn; North Rim is seasonal", difficulty: "Easy–Moderate", duration: "1–2 days", active: true,
  },
  {
    id: "yellowstone", name: "Yellowstone", state: "Wyoming / Montana / Idaho", region: "mountain-states", image: "yellowstone", destinationId: "yellowstone",
    description: "Geysers, hot springs and some of the best wildlife viewing in the country.",
    experiences: ["wildlife", "photography", "scenic-drives", "family", "camping", "hiking"],
    season: "Late May to September", difficulty: "Easy", duration: "2–4 days", active: true,
  },
  {
    id: "yosemite", name: "Yosemite", state: "California", region: "west-coast", image: "yosemite", destinationId: "yosemite",
    description: "Granite walls, waterfalls and giant sequoias; reservations may apply in busy periods.",
    experiences: ["hiking", "photography", "scenic-drives", "family", "camping", "adventure"],
    season: "Late spring to autumn", difficulty: "Easy–Moderate", duration: "1–3 days", active: true,
  },
  {
    id: "zion", name: "Zion", state: "Utah", region: "southwest", image: "zion", destinationId: "zion",
    description: "Canyon floor walks, river hikes and famous permit-only trails.",
    experiences: ["hiking", "adventure", "photography", "family"],
    season: "Spring & autumn", difficulty: "Moderate", duration: "1–2 days", active: true,
  },
  {
    id: "bryce", name: "Bryce Canyon", state: "Utah", region: "southwest", image: "bryce",
    description: "An amphitheatre of orange hoodoos, best at sunrise and under dark skies.",
    experiences: ["photography", "hiking", "scenic-drives", "family"],
    season: "Spring to autumn; snow possible in winter", difficulty: "Easy–Moderate", duration: "1 day", active: true,
  },
  {
    id: "rocky", name: "Rocky Mountain", state: "Colorado", region: "mountain-states", image: "rocky",
    description: "High alpine roads, lakes and elk; timed entry may apply in summer.",
    experiences: ["scenic-drives", "wildlife", "hiking", "photography", "camping"],
    season: "June to September for high roads", difficulty: "Easy–Moderate", duration: "1–2 days", active: true,
  },
  {
    id: "smoky", name: "Great Smoky Mountains", state: "Tennessee / North Carolina", region: "southeast", image: "smoky",
    description: "Misty forested ridges, historic cabins and wildflowers, with easy access by road.",
    experiences: ["scenic-drives", "hiking", "family", "wildlife", "photography"],
    season: "Spring wildflowers & autumn colour", difficulty: "Easy–Moderate", duration: "1–2 days", active: true,
  },
  {
    id: "joshua-tree", name: "Joshua Tree", state: "California", region: "west-coast", image: "joshua-tree",
    description: "Surreal desert trees, boulder piles and star-filled skies.",
    experiences: ["photography", "hiking", "camping", "adventure"],
    season: "October to April; summer is extremely hot", difficulty: "Easy–Moderate", duration: "1 day", active: true,
  },
  {
    id: "arches", name: "Arches", state: "Utah", region: "mountain-states", image: "arches",
    description: "More than two thousand natural stone arches; timed entry may apply.",
    experiences: ["photography", "hiking", "scenic-drives", "family"],
    season: "Spring & autumn", difficulty: "Easy–Moderate", duration: "1 day", active: true,
  },
  {
    id: "canyonlands", name: "Canyonlands", state: "Utah", region: "mountain-states",
    description: "Vast mesas and canyons carved by the Colorado and Green rivers.",
    experiences: ["scenic-drives", "photography", "adventure", "camping"],
    season: "Spring & autumn", difficulty: "Moderate", duration: "1 day", active: true,
  },
  {
    id: "sequoia", name: "Sequoia & Kings Canyon", state: "California", region: "west-coast", image: "sequoia",
    description: "Forests of the world's largest trees and deep granite canyons.",
    experiences: ["hiking", "family", "photography", "scenic-drives", "camping"],
    season: "Late spring to autumn", difficulty: "Easy–Moderate", duration: "1–2 days", active: true,
  },
  {
    id: "glacier", name: "Glacier", state: "Montana", region: "mountain-states", image: "glacier-np",
    description: "Turquoise lakes and the Going-to-the-Sun Road; vehicle reservations may apply.",
    experiences: ["scenic-drives", "hiking", "wildlife", "photography", "luxury-lodges"],
    season: "July to September for the full road", difficulty: "Moderate", duration: "2–3 days", active: true,
  },
  {
    id: "olympic", name: "Olympic", state: "Washington", region: "west-coast", image: "olympic",
    description: "Rainforest, wild Pacific beaches and mountains in one park.",
    experiences: ["hiking", "photography", "wildlife", "camping"],
    season: "Summer is driest", difficulty: "Easy–Moderate", duration: "2 days", active: true,
  },
  {
    id: "acadia", name: "Acadia", state: "Maine", region: "northeast", image: "acadia",
    description: "Granite coastline, carriage roads and sunrise from Cadillac Mountain (reservations may apply).",
    experiences: ["scenic-drives", "hiking", "family", "photography"],
    season: "Summer to early autumn", difficulty: "Easy", duration: "1–2 days", active: true,
  },
  {
    id: "denali", name: "Denali", state: "Alaska", region: "alaska", image: "denali", destinationId: "denali",
    description: "Wilderness, wildlife and North America's highest peak, mostly seen by park bus.",
    experiences: ["wildlife", "photography", "adventure", "luxury-lodges"],
    season: "June to August", difficulty: "Easy", duration: "2–3 days", active: true,
  },
  {
    id: "volcanoes", name: "Hawaiʻi Volcanoes", state: "Hawaii", region: "hawaii",
    description: "Craters, lava landscapes and rainforest; access depends on volcanic activity.",
    experiences: ["adventure", "photography", "hiking", "family"],
    season: "Year-round", difficulty: "Easy–Moderate", duration: "1–2 days", active: true,
  },
];

export const activeParks = nationalParks.filter((p) => p.active);

export const PARKS_NOTE =
  "Individual parks have their own operating conditions, reservations or timed entry, entrance fees and seasonal access. These change, so we confirm them for your travel dates.";

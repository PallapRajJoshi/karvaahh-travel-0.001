import { images } from "./images";
import type { ExperienceCard, Feature } from "./types";

/** "Experience the Soul of Kumaon" cards. */
export const culturalExperiences: ExperienceCard[] = [
  {
    id: "villages",
    title: "Traditional Himalayan Villages",
    description: "Stone-and-timber homes, carved doorways and terraced fields in the villages of the Vyas Valley.",
    image: images.cultureVillages,
  },
  {
    id: "hospitality",
    title: "Kumaoni Culture & Hospitality",
    description: "Warm welcomes, simple mountain meals and a cup of tea shared by the hearth.",
    image: images.cultureHospitality,
  },
  {
    id: "temples",
    title: "Sacred Temples & Traditions",
    description: "Village shrines and local observances that keep centuries of devotion alive.",
    image: images.cultureTemples,
  },
  {
    id: "roads",
    title: "Scenic Himalayan Road Journeys",
    description: "Roads that follow the river gorges upward, revealing new ridges at every bend.",
    image: images.cultureRoad,
  },
  {
    id: "photography",
    title: "Mountain Photography & Viewpoints",
    description: "Wide panoramas and early light on the peaks — bring a spare battery for the cold.",
    image: images.culturePhotography,
  },
  {
    id: "nature",
    title: "Peaceful Moments in Nature",
    description: "High meadows, open sky and a stillness that is rare anywhere else.",
    image: images.cultureNature,
  },
  {
    id: "rivers",
    title: "Valleys, Rivers & Landscapes",
    description: "The Kali (Mahakali) river valley and its side valleys, from forest to high desert.",
    image: images.cultureRiver,
  },
];

/**
 * "Why travel with Karvaahh" features.
 * IMPORTANT: keep only services Karvaahh actually delivers for this yatra —
 * set `enabled: false` on anything that isn't offered.
 */
export const whyKarvaahh: Feature[] = [
  {
    id: "planning",
    title: "Personalized Pilgrimage Planning",
    description: "An itinerary shaped around your dates, pace, health and devotional priorities.",
    icon: "compass",
  },
  {
    id: "custom",
    title: "Customized Tour Packages",
    description: "Private, family and group options — adjusted rather than one-size-fits-all.",
    icon: "sliders",
  },
  {
    id: "logistics",
    title: "Travel Coordination & Logistics",
    description: "Stages, stops and timings planned together so the journey runs smoothly.",
    icon: "route",
  },
  {
    id: "stays",
    title: "Accommodation Planning",
    description: "Stays arranged along the route, from town hotels to simple mountain lodges.",
    icon: "bed",
  },
  {
    id: "transport",
    title: "Transportation Arrangements",
    description: "Road transport suited to mountain conditions, arranged for your group.",
    icon: "vehicle",
  },
  {
    id: "assistance",
    title: "Dedicated Trip Assistance",
    description: "A point of contact before and during your yatra for questions and changes.",
    icon: "headset",
  },
  {
    id: "transparency",
    title: "Transparent Package Information",
    description: "Clear inclusions and exclusions in writing before you commit — no surprises.",
    icon: "document",
  },
  {
    id: "preparation",
    title: "Guidance on Travel Preparation",
    description: "Help with permits paperwork, packing and acclimatisation planning.",
    icon: "backpack",
  },
];

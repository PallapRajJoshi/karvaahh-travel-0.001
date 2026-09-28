import type { CulturalExperience, WhyFeature } from "../types";
import { images } from "./images";

/**
 * "Experience the Soul of Nepal": six items arranged as an editorial mosaic.
 * The first item gets the large tile, so lead with the strongest image.
 */
export const culturalExperiences: CulturalExperience[] = [
  {
    id: "rituals",
    title: "Temple Visits & Sacred Rituals",
    description:
      "Join evening aarti on the Bagmati, receive blessings at ancient shrines and learn the meaning behind each offering.",
    icon: "temple",
    image: images.culture.rituals,
  },
  {
    id: "monasteries",
    title: "Monasteries & Meditation",
    description:
      "Sit in on morning chanting, walk the kora with pilgrims and join guided meditation in Kathmandu and Lumbini.",
    icon: "lotus",
    image: images.culture.monasteries,
  },
  {
    id: "villages",
    title: "Village Life & Hospitality",
    description:
      "Share dal bhat in a family home and meet Gurung, Tamang and Thakali communities on their terraced hillsides.",
    icon: "village",
    image: images.culture.villages,
  },
  {
    id: "viewpoints",
    title: "Himalayan Sunrise & Sunset",
    description:
      "Watch first light touch the peaks from Sarangkot, Nagarkot or Poon Hill. Some mornings stay with you for years.",
    icon: "sunrise",
    image: images.culture.viewpoints,
  },
  {
    id: "festivals",
    title: "Festivals & Living Heritage",
    description:
      "Time your trip with Dashain, Tihar, Buddha Jayanti or Teej, and explore the royal squares of the Kathmandu Valley.",
    icon: "festival",
    image: images.culture.festivals,
  },
  {
    id: "retreats",
    title: "Nature Retreats & Sacred Lakes",
    description:
      "Slow down beside Phewa, Begnas or a quiet hillside lodge: unhurried days between the busier parts of your journey.",
    icon: "lake",
    image: images.culture.retreats,
  },
];

/**
 * "Why Travel to Nepal with Karvaahh?". Keep every line something the team
 * can stand behind. No unverifiable superlatives or numbers.
 */
export const whyFeatures: WhyFeature[] = [
  {
    id: "spiritual",
    title: "Sacred Spiritual Experiences",
    description:
      "Darshan timings, puja arrangements and festival calendars planned around what matters to you.",
    icon: "temple",
  },
  {
    id: "landscapes",
    title: "Breathtaking Himalayan Landscapes",
    description:
      "Routes and viewpoints chosen for the light, the season and how much time you have.",
    icon: "mountain",
  },
  {
    id: "heritage",
    title: "Rich Cultural Heritage",
    description:
      "Knowledgeable local guides who bring temples, stupas and old towns to life.",
    icon: "heritage",
  },
  {
    id: "adventure",
    title: "Adventure for Every Traveler",
    description:
      "From gentle hill walks to high passes, matched honestly to your fitness and experience.",
    icon: "compass",
  },
  {
    id: "personalized",
    title: "Personalized Tour Planning",
    description:
      "One planner from first enquiry to return. Your pace, your interests, your budget.",
    icon: "route",
  },
  {
    id: "comfort",
    title: "Comfortable Stays & Transportation",
    description:
      "Hand-picked hotels and lodges, private vehicles and domestic flights arranged end to end.",
    icon: "bed",
  },
];

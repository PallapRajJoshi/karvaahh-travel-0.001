import type { TravelerType } from "./types";

export const TRAVELERS: TravelerType[] = [
  {
    id: "families",
    title: "Families",
    heading: "Discover Nature Together",
    description:
      "Explore family-oriented wildlife and nature experiences, scenic outdoor activities, and educational opportunities where suitable.",
    image: "traveler-family",
    cta: "Plan a family journey",
    prefill: { experience: "family-holiday", purpose: "Family" },
  },
  {
    id: "nature-lovers",
    title: "Nature Lovers",
    heading: "Reconnect With the Natural World",
    description: "Discover peaceful landscapes, forest trails, wildlife habitats, wetlands, and pristine lakes.",
    image: "traveler-nature",
    cta: "Plan a nature escape",
    prefill: { purpose: "Nature" },
  },
  {
    id: "photographers",
    title: "Wildlife Photographers",
    heading: "Capture Nature's Extraordinary Moments",
    description:
      "Explore wildlife photography opportunities, birdwatching destinations, and dramatic natural landscapes while respecting wildlife and local regulations.",
    image: "traveler-photographer",
    cta: "Plan a photography trip",
    prefill: { experience: "wildlife-photography", purpose: "Photography" },
  },
  {
    id: "adventurers",
    title: "Adventure Seekers",
    heading: "Explore Nepal's Wild Landscapes",
    description:
      "Discover jungle environments, Himalayan trails, alpine scenery, and nature-focused outdoor adventures suited to your interests and abilities.",
    image: "traveler-adventure",
    cta: "Plan an adventure",
    prefill: { purpose: "Adventure" },
  },
];

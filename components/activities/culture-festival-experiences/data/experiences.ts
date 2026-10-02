import type { Experience } from "../types";

export const EXPERIENCES_HEADING = "Experience Culture Beyond the Celebrations";
export const EXPERIENCES_LEDE =
  "Festivals happen once a year. These experiences add depth to any trip, whatever the season.";
export const EXPERIENCES_NOTE =
  "Availability varies by season and host. Visits to sacred spaces and ceremonies are subject to local customs and permission.";

export const EXPERIENCES: Experience[] = [
  {
    id: "cuisine",
    title: "Traditional Nepalese Cuisine",
    media: "cuisine",
    icon: "food",
    description: "Explore regional food traditions and local culinary experiences.",
    prefill: { interest: "food", label: "traditional cuisine" },
  },
  {
    id: "heritage-walks",
    title: "Heritage Walks",
    media: "heritage-walk",
    icon: "walk",
    description: "Discover historic neighbourhoods, traditional architecture and cultural landmarks.",
    prefill: { interest: "heritage", label: "heritage walks" },
  },
  {
    id: "arts-crafts",
    title: "Traditional Arts & Crafts",
    media: "arts-crafts",
    icon: "craft",
    description: "Explore pottery, wood carving, metalwork and local craftsmanship.",
    prefill: { interest: "arts-crafts", label: "arts and crafts" },
  },
  {
    id: "workshops",
    title: "Cultural Workshops",
    media: "workshop",
    icon: "workshop",
    description: "Discover opportunities to learn about traditional crafts, music or local customs.",
    prefill: { interest: "arts-crafts", message: "I’m interested in a cultural workshop.", label: "cultural workshops" },
  },
  {
    id: "community",
    title: "Local Community Experiences",
    media: "community-experience",
    icon: "home",
    description: "Connect respectfully with communities through locally hosted experiences.",
    prefill: { interest: "community", label: "community experiences" },
  },
  {
    id: "attire-rituals",
    title: "Traditional Attire & Rituals",
    media: "attire",
    icon: "attire",
    description: "Learn about cultural clothing, customs and the meaning behind traditional practices.",
    prefill: { interest: "community", message: "I’d like to learn about traditional attire and customs.", label: "traditional attire and customs" },
  },
  {
    id: "monasteries",
    title: "Monastery & Spiritual Heritage Visits",
    media: "monastery",
    icon: "monastery",
    description: "Explore sacred spaces while respecting local customs and visitor guidelines.",
    prefill: { interest: "spiritual", label: "monastery and spiritual heritage visits" },
  },
  {
    id: "photography",
    title: "Festival Photography Experiences",
    media: "photography",
    icon: "camera",
    description: "Capture the atmosphere of cultural celebrations, with appropriate permission and respect.",
    prefill: { interest: "festivals", message: "I’m interested in a festival photography experience.", label: "festival photography" },
  },
];

import type { Community } from "../types";

export const COMMUNITIES_HEADING = "Meet the Communities Behind Nepal’s Traditions";
export const COMMUNITIES_LEDE =
  "Nepal is home to dozens of distinct peoples, each with its own language, beliefs and customs. These are three ways in, not the whole picture.";
export const COMMUNITIES_NOTE =
  "Community-led experiences are arranged in advance, with the host community’s agreement, and are not guaranteed.";

export const COMMUNITIES: Community[] = [
  {
    id: "newari",
    name: "Newari Culture",
    media: "newari",
    region: "Kathmandu Valley",
    intro:
      "The Newar people are the historic builders of the Kathmandu Valley’s cities. Their architecture, festivals, food and crafts shape much of what visitors come to see.",
    highlights: [
      "Traditional architecture and historic settlements",
      "Newari cuisine and cultural gatherings",
      "Traditional music, dance and festivals",
      "Local craftsmanship and cultural heritage",
    ],
    prefill: { interest: "community", destination: "kathmandu", message: "I’m interested in Newari cultural experiences.", label: "Newari culture" },
  },
  {
    id: "tharu",
    name: "Tharu Culture",
    media: "tharu",
    region: "Terai lowlands",
    intro:
      "The Tharu are one of the Terai’s indigenous peoples, with their own traditions, festivals and way of life shaped by the lowland landscape.",
    highlights: [
      "Traditional Tharu communities and lifestyles",
      "Folk music and dance",
      "Traditional food and cultural gatherings",
      "Community-based experiences in the Terai region",
    ],
    prefill: { interest: "community", destination: "terai", message: "I’m interested in Tharu cultural experiences.", label: "Tharu culture" },
  },
  {
    id: "sherpa-gurung",
    name: "Sherpa & Gurung Cultures",
    media: "sherpa-gurung",
    region: "Himalayan and hill regions",
    intro:
      "Two distinct peoples, often mentioned together but with their own languages, histories and celebrations.",
    highlights: [
      "Himalayan community traditions",
      "Traditional attire, music and dance",
      "Monasteries, cultural celebrations and community heritage",
      "Local customs and hospitality",
    ],
    groups: [
      {
        name: "Sherpa",
        region: "High Himalaya, including the Solu-Khumbu region",
        line: "Buddhist communities with monastery-centred festivals such as Mani Rimdu and Dumji.",
      },
      {
        name: "Gurung",
        region: "Hills of central Nepal, including the Annapurna foothills",
        line: "Hill communities with their own festivals, such as Tamu Lhosar, and a strong tradition of community song and dance.",
      },
    ],
    prefill: { interest: "community", destination: "himalaya", message: "I’m interested in Sherpa and Gurung cultural experiences.", label: "Sherpa & Gurung cultures" },
  },
];

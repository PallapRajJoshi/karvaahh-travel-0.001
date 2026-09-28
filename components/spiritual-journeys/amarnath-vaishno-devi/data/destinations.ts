import type { Destination } from "../types";
import { IMAGES } from "./images";

export const DESTINATIONS: Destination[] = [
  {
    id: "amarnath-cave",
    name: "Shri Amarnath Cave Temple",
    location: "Amarnath region, Jammu & Kashmir",
    elevationM: 3888,
    shrine: "amarnath",
    role: "Sacred shrine",
    image: IMAGES.amarnath,
    significance:
      "One of the most revered pilgrimage destinations dedicated to Lord Shiva. Inside the cave, a naturally formed ice Shivling is traditionally revered by devotees as a manifestation of Lord Shiva.",
    experience:
      "The pilgrimage unfolds in a high-altitude Himalayan environment, on foot or with permitted route services. It asks for physical preparation, advance registration and compliance with official regulations.",
    highlights: [
      "Sacred Amarnath Cave",
      "High-altitude Himalayan landscape",
      "Pilgrimage trekking experience",
      "Devotional atmosphere",
      "Mountain valleys and terrain",
    ],
    note: "Access is seasonal and governed by official pilgrimage arrangements. The route is not open year-round.",
  },
  {
    id: "vaishno-devi",
    name: "Shri Mata Vaishno Devi Temple",
    location: "Trikuta Hills near Katra, Jammu & Kashmir",
    elevationM: 1580,
    shrine: "vaishno",
    role: "Sacred shrine",
    image: IMAGES.vaishnoDevi,
    significance:
      "A revered shrine of Mata Vaishno Devi in the Trikuta Hills. According to pilgrimage tradition, Darshan is of three natural rock formations known as the Pindies, with no idols or statues in the holy cave.",
    experience:
      "Devotees walk a mountain pathway from Katra towards the shrine, joined by pilgrims from across India, with additional transport services subject to availability and current rules.",
    highlights: [
      "Mata Vaishno Devi Darshan",
      "Trikuta Hills",
      "Pilgrimage pathway",
      "Sacred shrine environment",
      "Devotional atmosphere",
    ],
    note: "Pilgrim registration with the Shrine Board at Katra is required before starting the journey.",
  },
  {
    id: "pahalgam",
    name: "Pahalgam",
    location: "Anantnag district, Jammu & Kashmir",
    shrine: "amarnath",
    role: "Pilgrimage base",
    image: IMAGES.pahalgam,
    significance:
      "An important base associated with the traditional Amarnath pilgrimage route, and one of Kashmir's best-loved valley destinations in its own right.",
    experience:
      "Rest here before or after the Yatra among riverside meadows and pine-covered slopes. Sightseeing in Pahalgam is separate from the Amarnath pilgrimage itself.",
    highlights: [
      "Himalayan valley scenery",
      "Lidder River surroundings",
      "Traditional pilgrimage route",
      "Meadows and mountain landscapes",
      "Scenic Kashmir experience",
    ],
  },
  {
    id: "baltal",
    name: "Baltal",
    location: "Ganderbal district, Jammu & Kashmir",
    shrine: "amarnath",
    role: "Pilgrimage base",
    image: IMAGES.baltal,
    significance:
      "An important base for the Amarnath pilgrimage and the starting area for one of the two major access routes to the cave.",
    experience:
      "The Baltal route is traditionally shorter in distance than the Pahalgam route, with steeper sections. Actual travel time depends on conditions, crowds and individual pace.",
    highlights: [
      "Amarnath pilgrimage base",
      "Alpine mountain scenery",
      "Shorter traditional route in distance",
      "Pilgrimage camps and facilities, subject to current arrangements",
    ],
  },
  {
    id: "katra",
    name: "Katra",
    location: "Reasi district, Jammu & Kashmir",
    shrine: "vaishno",
    role: "Pilgrimage base",
    image: IMAGES.katra,
    significance:
      "The primary base town for the Mata Vaishno Devi pilgrimage, where pilgrims complete Shrine Board registration before setting out.",
    experience:
      "A busy, devotional town of lodges, markets and pilgrim facilities at the foot of the Trikuta Hills.",
    highlights: [
      "Pilgrimage registration",
      "Accommodation",
      "Base for the shrine journey",
      "Local markets",
      "Pilgrimage facilities",
    ],
  },
  {
    id: "srinagar",
    name: "Srinagar",
    location: "Srinagar district, Jammu & Kashmir",
    shrine: "kashmir",
    role: "Optional extension",
    optional: true,
    image: IMAGES.srinagar,
    significance:
      "Kashmir's summer capital, often added after the pilgrimage for a few quieter days of lakes, gardens and local culture.",
    experience:
      "Dal Lake and its traditional houseboats, the terraced Mughal gardens, old-city crafts and mountain views.",
    highlights: ["Dal Lake", "Traditional houseboats", "Mughal gardens", "Local culture", "Mountain scenery"],
    note: "Optional extension — not part of every Amarnath & Vaishno Devi package.",
  },
];

/** Smaller optional-extension cards (Pahalgam already has a full card above). */
export const OPTIONAL_EXTENSIONS: Destination[] = [
  {
    id: "gulmarg",
    name: "Gulmarg",
    location: "Baramulla district, Jammu & Kashmir",
    shrine: "kashmir",
    role: "Optional extension",
    optional: true,
    image: IMAGES.gulmarg,
    significance: "",
    experience: "Wide mountain meadows and forested slopes, reached by road from Srinagar.",
    highlights: [],
  },
  {
    id: "sonamarg",
    name: "Sonamarg",
    location: "Ganderbal district, Jammu & Kashmir",
    shrine: "kashmir",
    role: "Optional extension",
    optional: true,
    image: IMAGES.sonamarg,
    significance: "",
    experience: "A glacier-fed valley on the road towards Baltal, often combined with the Baltal route.",
    highlights: [],
  },
  {
    id: "pahalgam-extension",
    name: "Pahalgam valleys",
    location: "Anantnag district, Jammu & Kashmir",
    shrine: "kashmir",
    role: "Optional extension",
    optional: true,
    image: IMAGES.pahalgam,
    significance: "",
    experience: "Extra days for the side valleys and meadows around Pahalgam, beyond the pilgrimage itself.",
    highlights: [],
  },
];

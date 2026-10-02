import type { RoadTrip } from "./types";

/**
 * Durations are "Customizable" on purpose. No distances, drive times, road
 * conditions or prices are stated. Add them only after verifying current
 * route information.
 */
export const ROAD_TRIPS: RoadTrip[] = [
  {
    id: "pokhara-jomsom",
    title: "Pokhara to Jomsom",
    from: "Pokhara",
    to: "Jomsom",
    duration: "Customizable",
    intro:
      "Follow the Kali Gandaki region north from Pokhara into a very different mountain landscape.",
    highlights: [
      "Scenic journey through the Kali Gandaki region",
      "Mountain landscapes and traditional villages",
      "Opportunities to explore Marpha and surrounding destinations",
      "Access to the Muktinath area",
    ],
    travelStyle: "Scenic drive with village stops",
    image: {
      file: "trip-pokhara-jomsom.jpg",
      alt: "A road through the Kali Gandaki valley toward Jomsom",
      label: "Kali Gandaki valley road. Must be on the Pokhara–Jomsom corridor.",
    },
  },
  {
    id: "kathmandu-upper-mustang",
    title: "Kathmandu to Upper Mustang",
    from: "Kathmandu",
    to: "Upper Mustang",
    duration: "Customizable",
    intro:
      "A long overland journey toward one of Nepal’s most distinctive Himalayan regions.",
    highlights: [
      "Overland journey toward the Upper Mustang region",
      "Distinctive Himalayan landscapes",
      "Traditional villages and cultural heritage",
      "Exploration around Lo Manthang, subject to route access and permits",
    ],
    travelStyle: "Overland expedition with suitable vehicles",
    image: {
      file: "trip-kathmandu-upper-mustang.jpg",
      alt: "An overland track crossing the arid landscape of Upper Mustang",
      label: "Upper Mustang road or track with characteristic terrain.",
    },
  },
  {
    id: "pokhara-ghandruk",
    title: "Pokhara to Ghandruk",
    from: "Pokhara",
    to: "Ghandruk",
    duration: "Customizable",
    intro:
      "A gentle climb into the Annapurna foothills, ending in a traditional Gurung village.",
    highlights: [
      "Scenic journey through the Annapurna foothills",
      "Traditional Gurung village experiences",
      "Panoramic mountain views",
      "Opportunities for walking and cultural exploration",
    ],
    travelStyle: "Scenic drive with walking and cultural time",
    image: {
      file: "trip-pokhara-ghandruk.jpg",
      alt: "Terraced foothills on the way to Ghandruk with the Annapurna range behind",
      label: "Foothill terraces on the Ghandruk approach.",
    },
  },
  {
    id: "pokhara-manang",
    title: "Pokhara to Manang",
    from: "Pokhara",
    to: "Manang",
    duration: "Customizable",
    intro:
      "A scenic overland journey through the Marsyangdi Valley as the terrain and altitude change.",
    highlights: [
      "Scenic overland journey through the Marsyangdi Valley",
      "Dramatic mountain landscapes",
      "Traditional villages and changing terrain",
      "Access to selected trekking areas",
    ],
    travelStyle: "Overland journey, season-dependent",
    image: {
      file: "trip-pokhara-manang.jpg",
      alt: "A road along the Marsyangdi Valley heading toward Manang",
      label: "Marsyangdi valley road.",
    },
  },
  {
    id: "kathmandu-langtang",
    title: "Kathmandu to Langtang Gateway",
    from: "Kathmandu",
    to: "Langtang gateway",
    duration: "Customizable",
    intro:
      "A road journey to the starting points for Langtang’s trails, through river valleys and forest.",
    highlights: [
      "Scenic road journey toward the Langtang region",
      "River valleys, forested landscapes, and mountain villages",
      "Access to trekking starting points",
      "Opportunities for Himalayan exploration",
    ],
    travelStyle: "Road journey linked to a trekking start",
    image: {
      file: "trip-kathmandu-langtang.jpg",
      alt: "A road following a river valley with forested slopes toward the Langtang region",
      label: "River valley road on the Langtang approach.",
    },
  },
];

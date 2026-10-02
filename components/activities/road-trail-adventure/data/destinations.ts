import type { RouteDestination } from "./types";

/**
 * Access is deliberately labelled per destination so trekking regions are never
 * presented as road-accessible. Verify each before publication.
 */
export const DESTINATIONS: RouteDestination[] = [
  {
    id: "upper-mustang",
    name: "Upper Mustang",
    intro:
      "A remote Himalayan region of arid terrain and traditional architecture, with Lo Manthang at its heart.",
    highlights: [
      "Dramatic arid Himalayan landscapes",
      "Traditional settlements and distinctive mountain scenery",
      "Rugged overland journeys toward Lo Manthang",
      "Remote cultural exploration",
    ],
    adventureTypes: ["4x4 Off-Road", "Cultural", "Jeep Safari"],
    access: "Road journey",
    note: "Access and permit requirements apply. Confirm before you plan.",
    image: {
      file: "dest-upper-mustang.jpg",
      alt: "Arid canyon landscape and traditional earthen architecture in Upper Mustang",
      label: "Must show Upper Mustang terrain or Lo Manthang architecture. Not a generic desert.",
    },
  },
  {
    id: "muktinath-jomsom",
    name: "Muktinath & Jomsom",
    intro:
      "Kali Gandaki country: a pilgrimage destination, a mountain-town setting and a traditional village on the way.",
    highlights: [
      "Scenic mountain drives through the Kali Gandaki region",
      "Muktinath pilgrimage and surrounding Himalayan landscapes",
      "Jomsom’s mountain setting",
      "Marpha village and its traditional architecture",
    ],
    adventureTypes: ["Scenic Road Trip", "4x4 Off-Road", "Pilgrimage"],
    access: "Road journey",
    image: {
      file: "dest-muktinath-jomsom.jpg",
      alt: "The Kali Gandaki valley near Jomsom with Marpha’s traditional whitewashed buildings",
      label: "Kali Gandaki valley, Jomsom, Marpha or Muktinath. Caption the exact place.",
    },
  },
  {
    id: "manang",
    name: "Manang",
    intro:
      "High-altitude country reached through the Marsyangdi Valley, with traditional villages and trekking access.",
    highlights: [
      "High-altitude mountain landscapes",
      "Scenic road journeys through the Marsyangdi Valley",
      "Traditional Himalayan villages",
      "Access to trekking routes in the Annapurna region",
    ],
    adventureTypes: ["4x4 Off-Road", "Scenic Road Trip", "Trekking"],
    access: "Road journey",
    note: "Road access and route conditions can vary by season. High altitude: plan for acclimatisation.",
    image: {
      file: "dest-manang.jpg",
      alt: "High-altitude Manang valley with a mountain road and snow peaks in the Annapurna region",
      label: "Real Manang / Marsyangdi valley scene. High-altitude character visible.",
    },
  },
  {
    id: "pokhara",
    name: "Pokhara",
    intro:
      "A lakeside base with mountain views, and the gateway to surrounding villages, hills and trekking routes.",
    highlights: [
      "Scenic roads around the Pokhara Valley",
      "Mountain views and lakeside experiences",
      "Routes toward surrounding villages and hills",
      "Access to adventure activities and trekking gateways",
    ],
    adventureTypes: ["Scenic Road Trip", "Mountain Biking", "Motorcycle"],
    access: "Road journey",
    image: {
      file: "dest-pokhara.jpg",
      alt: "Phewa Lake in Pokhara with the Annapurna range rising behind",
      label: "Pokhara lakeside or valley road with the Annapurna range visible.",
    },
  },
  {
    id: "ghandruk",
    name: "Ghandruk",
    intro:
      "A traditional Gurung village of terraced landscapes and mountain views in the Annapurna foothills.",
    highlights: [
      "Traditional Gurung village experiences",
      "Mountain views and terraced landscapes",
      "Scenic approaches through the Annapurna foothills",
      "Walking trails and cultural exploration",
    ],
    adventureTypes: ["Village Walks", "Cultural", "Scenic Road Trip"],
    access: "Road + walking",
    image: {
      file: "dest-ghandruk.jpg",
      alt: "Stone-built houses and terraced fields at Ghandruk village below the Annapurna peaks",
      label: "Ghandruk’s stone village and terraces. Must be identifiably Ghandruk.",
    },
  },
  {
    id: "annapurna",
    name: "Annapurna Region",
    intro:
      "Diverse landscapes from foothills to high-altitude scenery, explored by road approaches and trekking routes.",
    highlights: [
      "Diverse mountain landscapes",
      "Scenic road approaches and trekking routes",
      "Traditional villages and high-altitude scenery",
      "Selected trails suited to different experience levels",
    ],
    adventureTypes: ["Trekking", "Scenic Road Trip", "Village Walks"],
    access: "Road + walking",
    image: {
      file: "dest-annapurna.jpg",
      alt: "Trail through Annapurna region mountain scenery with peaks in the distance",
      label: "Annapurna-region trail or valley. Name the specific trail in alt text if known.",
    },
  },
  {
    id: "langtang",
    name: "Langtang Region",
    intro:
      "Himalayan valleys, forested trails and traditional mountain settlements, explored mainly on foot.",
    highlights: [
      "Himalayan valleys and forested trails",
      "Traditional mountain settlements",
      "Scenic trekking experiences",
      "Mountain landscapes and cultural discovery",
    ],
    adventureTypes: ["Trekking", "Cultural", "Nature Walks"],
    access: "Trekking-led",
    image: {
      file: "dest-langtang.jpg",
      alt: "Langtang Valley with forested slopes and Himalayan peaks",
      label: "Real Langtang valley scene. Not a generic alpine photo.",
    },
  },
  {
    id: "everest",
    name: "Everest Region",
    intro:
      "Iconic Himalayan scenery, mountain villages and high-altitude trekking toward the Everest region.",
    highlights: [
      "Iconic Himalayan scenery",
      "Mountain villages and trekking trails",
      "Dramatic landscapes and high-altitude adventure",
      "Trekking experiences toward the Everest region",
    ],
    adventureTypes: ["Trekking", "Cultural"],
    access: "Trekking-led",
    note: "High altitude: careful planning and acclimatisation are essential.",
    image: {
      file: "dest-everest.jpg",
      alt: "A trail through a Khumbu mountain village with Himalayan peaks beyond",
      label: "Khumbu trail or village. Identify peaks accurately.",
    },
  },
];

/** Plain list for the inquiry form’s destination select. */
export const DESTINATION_OPTIONS = [
  ...DESTINATIONS.map((d) => d.name),
  "Not sure yet",
];

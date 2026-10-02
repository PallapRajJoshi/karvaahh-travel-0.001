import type { TrailGroup } from "./types";

/**
 * No difficulty ratings or durations are shown: the brief asks for them only
 * when verified against a reliable itinerary. Add `level` / `duration` fields
 * here once verified, then render them in TrekkingTrailSection.
 */
export const TRAIL_GROUPS: TrailGroup[] = [
  {
    id: "annapurna",
    region: "Annapurna Region",
    intro: "Varied landscapes from village foothills to high-altitude scenery.",
    trails: [
      "Annapurna Base Camp trekking",
      "Annapurna Circuit trekking",
      "Ghorepani–Poon Hill trekking",
      "Selected village walks around the Annapurna foothills",
    ],
    image: {
      file: "trail-annapurna.jpg",
      alt: "Trekkers on an Annapurna region trail with snow peaks ahead",
      label: "Annapurna trail. Match the photo to a named route where possible.",
    },
  },
  {
    id: "langtang",
    region: "Langtang Region",
    intro: "Forested valleys and traditional mountain settlements beneath high peaks.",
    trails: [
      "Langtang Valley trekking",
      "Kyanjin Gompa exploration",
      "Selected forest and village trails",
    ],
    image: {
      file: "trail-langtang.jpg",
      alt: "A trail through Langtang Valley toward Kyanjin Gompa",
      label: "Langtang Valley trail or Kyanjin Gompa.",
    },
  },
  {
    id: "everest",
    region: "Everest Region",
    intro: "Iconic scenery, mountain villages and high-altitude adventure.",
    trails: [
      "Everest Base Camp trekking",
      "Everest View trekking experiences",
      "Selected mountain village trails",
    ],
    image: {
      file: "trail-everest.jpg",
      alt: "A trekking trail in the Everest region with Himalayan peaks in the distance",
      label: "Khumbu trail. Identify peaks accurately in the alt text.",
    },
  },
  {
    id: "other",
    region: "Other Trail Experiences",
    intro: "Gentler walks and tailor-made routes beyond the big-name treks.",
    trails: [
      "Ghandruk village walks",
      "Scenic countryside hikes",
      "Forest trails and nature walks",
      "Customized Himalayan trekking experiences",
    ],
    image: {
      file: "trail-countryside-walk.jpg",
      alt: "A walking path through Nepal’s countryside and forest",
      label: "Countryside or forest path. Real Nepal location.",
    },
  },
];

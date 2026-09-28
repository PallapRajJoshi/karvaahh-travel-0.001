import type { EbcImage } from "../types";
import { IMG } from "../config/site";

/** Section 9 — Base Camp & Kala Patthar storytelling content. */
export const basecamp = {
  eyebrow: "The Summit of the Trek",
  title: "Stand Beneath the World's Highest Mountain",
  intro:
    "After days of steady climbing, the final stages lead onto the Khumbu Glacier itself — a landscape of ice, rock and silence at the foot of the world's highest peaks.",
  image: {
    src: `${IMG}/hero/everest-base-camp-wide.jpg`,
    alt: "Khumbu Icefall and Everest Base Camp beneath Nuptse and the Everest massif",
    position: "50% 45%",
  } satisfies EbcImage,
  panels: [
    {
      id: "ebc",
      label: "Everest Base Camp",
      altitude: "≈ 5,364 m",
      text: "Walk the moraine from Gorakshep to the prayer-flag-strewn rocks at the foot of the Khumbu Icefall, where expedition teams gather each spring.",
    },
    {
      id: "glacier",
      label: "Khumbu Glacier",
      altitude: "Upper Khumbu",
      text: "Ice pinnacles, meltwater pools and the tumbling Icefall reveal the raw scale of the high Himalaya around you.",
    },
    {
      id: "kp",
      label: "Kala Patthar sunrise",
      altitude: "≈ 5,545 m",
      text: "Climb before dawn for first light on Everest, Nuptse, Lhotse, Changtse and Pumori — the defining panorama of the journey.",
    },
  ],
  viewNote:
    "Good to know: Everest's summit is largely hidden behind Nuptse and the West Shoulder from Base Camp itself. For an unobstructed summit view, plan for the optional Kala Patthar climb.",
  achievement:
    "Reaching Base Camp is a genuine achievement — the reward for days of patient, steady effort on one of the world's great trekking journeys.",
};

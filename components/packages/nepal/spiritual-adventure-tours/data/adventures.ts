import type { AdventureExperience } from "../types";
import { images } from "./images";

/**
 * Himalayan adventures. Durations are typical trekking ranges, and altitudes
 * are the approximate high point on the standard route. Both vary with
 * itinerary, so the page labels them "approx." Update them freely.
 *
 * `permitNote` is only set where a restricted-area permit is a well-established
 * requirement. Don't add fees here; they change.
 */
const province = {
  koshi: "/destinations/koshi-province",
  gandaki: "/destinations/gandaki-province",
  karnali: "/destinations/karnali-province",
  bagmati: "/destinations/bagmati-province",
} as const;

const explore = (title: string, href: string) => ({
  label: "Explore Adventure",
  href,
  ariaLabel: `Explore the ${title}`,
});

export const adventures: AdventureExperience[] = [
  {
    id: "everest-base-camp",
    title: "Everest Base Camp Trek",
    region: "Khumbu, Everest Region",
    description:
      "The classic Himalayan pilgrimage for trekkers: Sherpa villages, Tengboche Monastery and sunrise over Everest from Kala Patthar.",
    difficulty: "Challenging",
    duration: "12–14 days",
    maxAltitude: "5,364 m",
    image: images.adventure.everest,
    link: explore("Everest Base Camp Trek", province.koshi),
  },
  {
    id: "annapurna-base-camp",
    title: "Annapurna Base Camp Trek",
    region: "Annapurna Region",
    description:
      "Rhododendron forests, Gurung villages and hot springs lead into a natural amphitheatre ringed by Annapurna I and Machhapuchhre.",
    difficulty: "Moderate",
    duration: "7–11 days",
    maxAltitude: "4,130 m",
    image: images.adventure.annapurnaBaseCamp,
    link: explore("Annapurna Base Camp Trek", province.gandaki),
  },
  {
    id: "mardi-himal",
    title: "Mardi Himal Trek",
    region: "Annapurna Region",
    description:
      "A short, quieter ridge trek with close-up views of Machhapuchhre, ideal when you have less time but want real Himalayan scenery.",
    difficulty: "Moderate",
    duration: "5–7 days",
    maxAltitude: "≈4,500 m",
    image: images.adventure.mardiHimal,
    link: explore("Mardi Himal Trek", province.gandaki),
  },
  {
    id: "manaslu-circuit",
    title: "Manaslu Circuit Trek",
    region: "Gorkha, Manaslu Region",
    description:
      "A remote circuit around the world’s eighth-highest peak, crossing the Larkya La through Tibetan-influenced villages.",
    difficulty: "Strenuous",
    duration: "14–17 days",
    maxAltitude: "5,106 m",
    permitNote: "Restricted-area permit",
    image: images.adventure.manaslu,
    link: explore("Manaslu Circuit Trek", province.gandaki),
  },
  {
    id: "upper-mustang",
    title: "Upper Mustang Exploration",
    region: "Mustang",
    description:
      "The former Kingdom of Lo: wind-carved canyons, cave monasteries and the walled town of Lo Manthang in the Himalayan rain shadow.",
    difficulty: "Moderate",
    duration: "10–14 days",
    maxAltitude: "≈3,900 m",
    permitNote: "Restricted-area permit",
    image: images.adventure.upperMustang,
    link: explore("Upper Mustang Exploration", province.gandaki),
  },
  {
    id: "gokyo-lakes",
    title: "Gokyo Lakes Trek",
    region: "Everest Region",
    description:
      "Turquoise glacial lakes, the Ngozumpa Glacier and a panorama from Gokyo Ri that takes in four 8,000-metre peaks.",
    difficulty: "Challenging",
    duration: "12–15 days",
    maxAltitude: "5,357 m",
    image: images.adventure.gokyo,
    link: explore("Gokyo Lakes Trek", province.koshi),
  },
  {
    id: "shey-phoksundo",
    title: "Shey Phoksundo Lake",
    region: "Dolpa, Karnali",
    description:
      "Nepal’s deepest lake, an unreal turquoise, set in the remote Dolpo region with Bön and Buddhist villages few travellers reach.",
    difficulty: "Challenging",
    duration: "10–14 days",
    maxAltitude: "≈3,600 m",
    image: images.adventure.phoksundo,
    link: explore("Shey Phoksundo Lake trek", province.karnali),
  },
  {
    id: "langtang-valley",
    title: "Langtang Valley Trek",
    region: "Langtang, Rasuwa",
    description:
      "Close to Kathmandu yet wonderfully wild: Tamang villages, yak pastures and Kyanjin Gompa beneath glaciated peaks. Pairs well with Gosainkunda.",
    difficulty: "Moderate",
    duration: "7–10 days",
    maxAltitude: "≈4,770 m",
    image: images.adventure.langtang,
    link: explore("Langtang Valley Trek", province.bagmati),
  },
];

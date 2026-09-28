import type { EverestDestination } from "../types";
import { IMG } from "../config/site";

/**
 * Stops along the Everest Base Camp route, in trail order.
 * Elevations are commonly cited approximate figures — sources vary by a few metres.
 * `href` is intentionally omitted until dedicated destination pages exist;
 * add it and the card's "Explore Destination" link appears automatically.
 */
export const destinations: EverestDestination[] = [
  {
    slug: "lukla",
    name: "Lukla",
    tagline: "Gateway to the Everest Region",
    location: "Solukhumbu, Koshi Province",
    elevationM: 2860,
    description:
      "Most Everest journeys begin with the short mountain flight to Lukla's Tenzing-Hillary Airport. The town is where trekkers meet their team, organise gear and take their first steps on the trail.",
    category: "Trekking Landmark",
    image: { src: `${IMG}/destinations/lukla-airstrip.jpg`, alt: "Lukla's short mountain airstrip with trekking lodges and forested ridges behind" },
  },
  {
    slug: "phakding",
    name: "Phakding",
    tagline: "Riverside Village on the Dudh Koshi",
    location: "Dudh Koshi Valley, Solukhumbu",
    elevationM: 2610,
    description:
      "A gentle first day leads down to Phakding, a quiet riverside village of lodges and fields beside the milky-blue Dudh Koshi — an easy start that helps the body begin adjusting.",
    category: "Mountain Village",
    image: { src: `${IMG}/destinations/phakding-dudh-koshi.jpg`, alt: "Stone lodges of Phakding beside the Dudh Koshi river in a pine-forested valley" },
  },
  {
    slug: "namche-bazaar",
    name: "Namche Bazaar",
    tagline: "Vibrant Sherpa Trading Town",
    location: "Sagarmatha National Park",
    elevationM: 3440,
    description:
      "Tiered into a horseshoe-shaped hillside, Namche is the commercial and social hub of the Khumbu — bakeries, gear shops and a weekly market, with Kongde and Thamserku towering above.",
    category: "Cultural Heritage",
    image: { src: `${IMG}/destinations/namche-bazaar.jpg`, alt: "Colourful roofs of Namche Bazaar terraced into a horseshoe-shaped mountain slope" },
  },
  {
    slug: "tengboche",
    name: "Tengboche",
    tagline: "Home of the Iconic Tengboche Monastery",
    location: "Sagarmatha National Park",
    elevationM: 3867,
    description:
      "Set on a forested ridge facing Ama Dablam and the Everest massif, Tengboche's monastery is the spiritual heart of the Khumbu. Visitors are welcome to observe prayers quietly.",
    category: "Cultural Heritage",
    image: { src: `${IMG}/destinations/tengboche-monastery.jpg`, alt: "Tengboche Monastery on a ridge with Ama Dablam rising in the background" },
  },
  {
    slug: "dingboche",
    name: "Dingboche",
    tagline: "Stone-Walled Fields Beneath the Peaks",
    location: "Imja Valley, Sagarmatha National Park",
    elevationM: 4410,
    description:
      "A patchwork of stone-walled fields in the Imja Valley, Dingboche is a favoured acclimatisation stop, with side hikes that open up views of Island Peak, Lhotse and Makalu.",
    category: "Mountain Village",
    image: { src: `${IMG}/destinations/dingboche-fields.jpg`, alt: "Stone-walled fields of Dingboche with snow peaks surrounding the Imja valley" },
  },
  {
    slug: "lobuche",
    name: "Lobuche",
    tagline: "High-Altitude Stop on the Everest Trail",
    location: "Khumbu Valley, Sagarmatha National Park",
    elevationM: 4940,
    description:
      "Beyond the climbers' memorials at Thukla Pass, the trail reaches Lobuche — a small cluster of lodges beside the Khumbu Glacier's lateral moraine, with Nuptse close overhead.",
    category: "Trekking Landmark",
    image: { src: `${IMG}/destinations/lobuche.jpg`, alt: "Trekking lodges at Lobuche beside a glacial moraine under Nuptse" },
  },
  {
    slug: "gorakshep",
    name: "Gorakshep",
    tagline: "Final Staging Point Before Base Camp",
    location: "Khumbu Valley, Sagarmatha National Park",
    elevationM: 5164,
    description:
      "Gorakshep sits on a frozen lakebed at the foot of Kala Patthar. It is the last overnight stop on the classic route — the base for both Everest Base Camp and the Kala Patthar sunrise.",
    category: "Trekking Landmark",
    image: { src: `${IMG}/destinations/gorakshep.jpg`, alt: "Lodges on the sandy flat of Gorakshep beneath the dark slope of Kala Patthar" },
  },
  {
    slug: "everest-base-camp",
    name: "Everest Base Camp",
    tagline: "Legendary Trekking Destination",
    location: "Khumbu Glacier, Sagarmatha National Park",
    elevationM: 5364,
    description:
      "The goal of the journey: the rocky glacier ground beneath the Khumbu Icefall, where expedition teams set up camp in the spring climbing season. Everest's summit itself is largely hidden from here.",
    category: "Trekking Landmark",
    image: { src: `${IMG}/destinations/everest-base-camp.jpg`, alt: "Prayer flags on the rocks at Everest Base Camp with the Khumbu Icefall behind" },
  },
  {
    slug: "kala-patthar",
    name: "Kala Patthar",
    tagline: "Panoramic Himalayan Viewpoint",
    location: "Above Gorakshep, Sagarmatha National Park",
    elevationM: 5545,
    description:
      "A steep pre-dawn climb above Gorakshep rewards trekkers with the trek's finest view of Everest's summit pyramid, alongside Nuptse, Changtse and Pumori — often at sunrise.",
    category: "Viewpoint",
    image: { src: `${IMG}/destinations/kala-patthar-sunrise.jpg`, alt: "Sunrise light on Mount Everest's summit seen from the ridge of Kala Patthar" },
  },
  {
    slug: "khumbu-glacier",
    name: "Khumbu Glacier",
    tagline: "Dramatic Glacial Landscape",
    location: "Upper Khumbu Valley",
    description:
      "The trail from Lobuche to Base Camp follows the Khumbu Glacier's rubble-covered moraine, where ice pinnacles, meltwater pools and the tumbling Icefall reveal the raw scale of the high Himalaya.",
    category: "Natural Wonder",
    image: { src: `${IMG}/destinations/khumbu-glacier.jpg`, alt: "Ice pinnacles and rubble of the Khumbu Glacier beneath towering Himalayan walls" },
  },
];

import { IMG } from "./config";
import type { Destination } from "./types";

/**
 * Places on the Mustang Circuit.
 * Order here is card order. Set `href` only when a dedicated page exists.
 */
export const destinations: Destination[] = [
  {
    id: "jomsom",
    name: "Jomsom",
    tagline: "Gateway to the Mustang Region",
    location: "Lower Mustang",
    zone: "lower",
    category: "Mountain Village",
    description:
      "Mustang’s district headquarters on the banks of the Kali Gandaki, with an airstrip and road links south. Most journeys into the region begin here — expect strong valley winds by afternoon.",
    image: { src: `${IMG}/destinations/jomsom-kali-gandaki.jpg`, alt: "Jomsom town spread along the stony bed of the Kali Gandaki river" },
    routeStageId: "stage-jomsom",
  },
  {
    id: "kagbeni",
    name: "Kagbeni",
    tagline: "Ancient Village at the Gateway to Upper Mustang",
    location: "Lower Mustang",
    zone: "lower",
    category: "Cultural Heritage",
    description:
      "A tight maze of mud-brick lanes and barley fields where the Jhong Khola meets the Kali Gandaki. Its red monastery and chortens mark the threshold of the restricted Upper Mustang area.",
    image: { src: `${IMG}/destinations/kagbeni-village-fields.jpg`, alt: "Kagbeni’s mud-brick houses and green barley fields beside the Kali Gandaki" },
    routeStageId: "stage-kagbeni",
  },
  {
    id: "marpha",
    name: "Marpha",
    tagline: "Traditional Village Famous for Apple Orchards",
    location: "Lower Mustang",
    zone: "lower",
    category: "Mountain Village",
    description:
      "A Thakali village of whitewashed houses and flagstone streets, surrounded by apple orchards. A good place to slow down, taste local apple products and walk up to the village monastery.",
    image: { src: `${IMG}/destinations/marpha-whitewashed-lanes.jpg`, alt: "A flagstone lane between whitewashed houses in Marpha" },
    routeStageId: "stage-marpha",
  },
  {
    id: "muktinath",
    name: "Muktinath Temple",
    tagline: "Sacred Pilgrimage Site in the Himalayas",
    location: "Lower Mustang",
    zone: "lower",
    category: "Sacred Site",
    description:
      "Revered by both Hindus and Buddhists. Pilgrims bathe beneath the temple’s 108 water spouts and visit the shrine where a small natural flame burns alongside spring water.",
    image: { src: `${IMG}/destinations/muktinath-temple-spouts.jpg`, alt: "Pilgrims beside the row of water spouts at Muktinath Temple" },
    routeStageId: "stage-muktinath",
  },
  {
    id: "lo-manthang",
    name: "Lo Manthang",
    tagline: "The Ancient Walled City of Upper Mustang",
    location: "Upper Mustang",
    zone: "upper",
    category: "Cultural Heritage",
    description:
      "The walled former capital of the Kingdom of Lo. Inside the gate, narrow alleys lead to old monasteries with richly painted interiors and to the royal palace at the heart of the town.",
    image: { src: `${IMG}/destinations/lo-manthang-rooftops.jpg`, alt: "Flat rooftops stacked with firewood inside the walls of Lo Manthang" },
    routeStageId: "stage-lo-manthang",
  },
  {
    id: "chhosar",
    name: "Chhosar",
    tagline: "Historic Village Known for Its Sky Caves",
    location: "Upper Mustang",
    zone: "upper",
    category: "Cultural Heritage",
    description:
      "North of Lo Manthang, cliff faces around Chhosar are honeycombed with man-made caves. Some, like the multi-level Jhong cave, can be visited with a local guide.",
    image: { src: `${IMG}/destinations/chhosar-sky-caves.jpg`, alt: "Rows of cave openings cut into a sandstone cliff near Chhosar" },
    routeStageId: "stage-chhosar",
  },
  {
    id: "dhakmar",
    name: "Dhakmar",
    tagline: "Dramatic Red Cliffs and Rugged Landscapes",
    location: "Upper Mustang",
    zone: "upper",
    category: "Natural Landscape",
    description:
      "A small village beneath towering, deeply eroded red cliffs. Local legend links their colour to Guru Rinpoche’s battle with a demon — the landscape is striking either way.",
    image: { src: `${IMG}/destinations/dhakmar-red-cliffs.jpg`, alt: "Deep red, fluted cliffs rising behind the village of Dhakmar" },
    routeStageId: "stage-ghami",
  },
  {
    id: "ghami",
    name: "Ghami",
    tagline: "Traditional Mustang Settlement",
    location: "Upper Mustang",
    zone: "upper",
    category: "Mountain Village",
    description:
      "A sizeable village of whitewashed homes and fields in a sheltered bowl. Nearby runs one of Mustang’s longest mani walls, lined with carved prayer stones.",
    image: { src: `${IMG}/destinations/ghami-mani-wall.jpg`, alt: "A long mani wall of carved stones leading towards Ghami village" },
    routeStageId: "stage-ghami",
  },
  {
    id: "ghar-gompa",
    name: "Ghar Gompa",
    tagline: "Ancient Monastery of Upper Mustang",
    location: "Upper Mustang",
    zone: "upper",
    category: "Monastic Heritage",
    description:
      "Also called Lo Gekar, a quiet monastery in a side valley traditionally associated with Guru Rinpoche. Inside are painted walls and stacks of carved stone tablets.",
    image: { src: `${IMG}/destinations/ghar-gompa-monastery.jpg`, alt: "Ghar Gompa’s whitewashed walls and prayer flags in a barren valley" },
    routeStageId: "stage-tsarang",
  },
  {
    id: "tsarang",
    name: "Tsarang",
    tagline: "Historic Village with Monastic Heritage",
    location: "Upper Mustang",
    zone: "upper",
    category: "Monastic Heritage",
    description:
      "Dominated by an old fortress-palace and a large red monastery on the edge of a canyon. Willow-lined lanes and fields make it one of the greener stops in Upper Mustang.",
    image: { src: `${IMG}/destinations/tsarang-palace-monastery.jpg`, alt: "Tsarang’s red monastery and ruined palace on the rim of a canyon" },
    routeStageId: "stage-tsarang",
  },
];

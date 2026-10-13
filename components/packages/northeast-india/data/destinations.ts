import { ask, guide } from "./content";
import type { Destination } from "./filters";
import { IMAGES } from "./images";

/**
 * Destinations in "Places That Make Northeast India Extraordinary".
 *
 * Karvaahh has no Northeast destination pages. Places with a record in the
 * destination guide (lib/destinations/data/india.ts) open a filtered view of
 * it; the rest start a pre-filled enquiry. `link.kind` tells the card which.
 */

const AR = { state: "arunachal", stateName: "Arunachal Pradesh" } as const;
const AS = { state: "assam", stateName: "Assam" } as const;
const ML = { state: "meghalaya", stateName: "Meghalaya" } as const;
const NL = { state: "nagaland", stateName: "Nagaland" } as const;
const MN = { state: "manipur", stateName: "Manipur" } as const;
const MZ = { state: "mizoram", stateName: "Mizoram" } as const;
const TR = { state: "tripura", stateName: "Tripura" } as const;
const SK = { state: "sikkim", stateName: "Sikkim" } as const;

const plan = (name: string) => ask(`Plan a trip to ${name}`, name);
const read = (name: string, q = name) => guide(`${name} in our destination guide`, q);

export const destinations: Destination[] = [
  {
    id: "tawang",
    name: "Tawang",
    ...AR,
    highlight:
      "A celebrated Himalayan monastery overlooking the Tawang valley, reached on a mountain road over the high Sela Pass. Expect spectacular scenery and cold nights for much of the year.",
    tags: ["Monastery", "High pass", "Mountain views"],
    categories: ["himalayan", "spiritual", "offbeat"],
    image: IMAGES.tawang,
    link: read("Tawang"),
  },
  {
    id: "ziro",
    name: "Ziro Valley",
    ...AR,
    highlight:
      "A broad, pine-rimmed valley of rice fields and villages, home to the Apatani people and known for their distinctive land and water management.",
    tags: ["Valley villages", "Apatani culture", "Slow travel"],
    categories: ["culture", "offbeat"],
    image: IMAGES.ziro,
    link: plan("Ziro Valley"),
  },
  {
    id: "kaziranga",
    name: "Kaziranga National Park",
    ...AS,
    highlight:
      "A UNESCO World Heritage-listed landscape of grassland, wetland and forest, known for its conservation of the greater one-horned rhinoceros alongside elephants, wild buffalo and birdlife.",
    tags: ["UNESCO site", "Rhino safaris", "Birdwatching"],
    categories: ["wildlife"],
    image: IMAGES.kaziranga,
    link: read("Kaziranga"),
  },
  {
    id: "manas",
    name: "Manas National Park",
    ...AS,
    highlight:
      "A UNESCO World Heritage-listed park in the Himalayan foothills along the Bhutan border, with forest, grassland and the clear Manas River.",
    tags: ["UNESCO site", "Forest", "River scenery"],
    categories: ["wildlife", "offbeat"],
    image: IMAGES.manas,
    link: read("Manas", "Manas National Park"),
  },
  {
    id: "majuli",
    name: "Majuli",
    ...AS,
    highlight:
      "A river island in the Brahmaputra, reached by ferry. Its satras keep Assamese Vaishnavite traditions of music, dance and mask-making, beside Mising villages built on stilts.",
    tags: ["River island", "Satras", "Mask-making"],
    categories: ["water", "culture", "spiritual"],
    image: IMAGES.majuli,
    link: plan("Majuli"),
  },
  {
    id: "guwahati",
    name: "Guwahati & Kamakhya",
    ...AS,
    highlight:
      "The region's main gateway on the Brahmaputra. Kamakhya Temple on Nilachal Hill is one of India's most revered Shakti shrines, and river cruises run at dusk in season.",
    tags: ["Gateway city", "Kamakhya Temple", "Brahmaputra"],
    categories: ["spiritual", "water"],
    image: IMAGES.guwahati,
    link: read("Kamakhya Temple", "Kamakhya"),
  },
  {
    id: "shillong",
    name: "Shillong",
    ...ML,
    highlight:
      "Meghalaya's hill capital, with pine-covered slopes, a lively music scene and Umiam Lake on the road up from Guwahati. A comfortable base for the plateau.",
    tags: ["Hill capital", "Umiam Lake", "Cafés & music"],
    categories: ["culture", "water"],
    image: IMAGES.shillong,
    link: read("Shillong"),
  },
  {
    id: "sohra",
    name: "Cherrapunji (Sohra)",
    ...ML,
    highlight:
      "Dramatic cliffs, deep gorges, waterfalls and limestone caves, shaped by some of the heaviest seasonal rainfall on earth. Mist can hide the views, so build in time.",
    tags: ["Waterfalls", "Caves", "Gorges"],
    categories: ["waterfalls"],
    image: IMAGES.sohra,
    link: plan("Cherrapunji (Sohra)"),
  },
  {
    id: "root-bridges",
    name: "Living Root Bridges",
    ...ML,
    highlight:
      "Bridges grown from the roots of rubber-fig trees, guided across streams over many years through Khasi and Jaintia community knowledge. Reaching some, like Nongriat's double-decker bridge, takes a long stepped walk.",
    tags: ["Community heritage", "Forest trail", "Natural pools"],
    categories: ["waterfalls", "culture", "offbeat"],
    image: IMAGES.rootBridge,
    link: plan("Meghalaya living root bridges"),
  },
  {
    id: "dawki",
    name: "Dawki & the Umngot River",
    ...ML,
    highlight:
      "Near the Bangladesh border, the Umngot runs famously clear in the drier months. Boating is seasonal and depends on water levels; nearby Mawlynnong is a well-kept Khasi village.",
    tags: ["River boating", "Clear water", "Village walks"],
    categories: ["water", "offbeat"],
    image: IMAGES.dawki,
    link: plan("Dawki & Umngot River"),
  },
  {
    id: "loktak",
    name: "Loktak Lake",
    ...MN,
    highlight:
      "A large freshwater lake dotted with phumdis, floating mats of vegetation and soil. Keibul Lamjao National Park, on its southern phumdis, protects the sangai deer.",
    tags: ["Phumdis", "Floating park", "Sangai deer"],
    categories: ["water", "wildlife"],
    image: IMAGES.loktak,
    link: plan("Loktak Lake, Manipur"),
  },
  {
    id: "kohima",
    name: "Kohima",
    ...NL,
    highlight:
      "Nagaland's hill capital, with the Kohima War Cemetery, scenic ridges and craft markets. Kisama Heritage Village nearby hosts the Hornbill Festival each December.",
    tags: ["War memorial", "Naga crafts", "Hornbill Festival"],
    categories: ["culture"],
    image: IMAGES.kohima,
    link: plan("Kohima, Nagaland"),
  },
  {
    id: "aizawl",
    name: "Aizawl",
    ...MZ,
    highlight:
      "Mizoram's capital spreads along steep ridges above green valleys. Viewpoints and quiet roads lead out to Reiek and the Mizo countryside.",
    tags: ["Ridge city", "Viewpoints", "Mizo culture"],
    categories: ["culture", "offbeat"],
    image: IMAGES.aizawl,
    link: plan("Aizawl, Mizoram"),
  },
  {
    id: "unakoti",
    name: "Unakoti",
    ...TR,
    highlight:
      "Historic rock-cut reliefs and sculptures of Shaivite deities set in a forested hillside, including a towering carved face of Shiva.",
    tags: ["Rock carvings", "Sculptural heritage", "Forest"],
    categories: ["culture", "spiritual", "offbeat"],
    image: IMAGES.unakoti,
    link: plan("Unakoti, Tripura"),
  },
  {
    id: "agartala",
    name: "Agartala & Neermahal",
    ...TR,
    highlight:
      "Ujjayanta Palace, now the Tripura State Museum, anchors the capital, while Neermahal rises from the waters of Rudrasagar Lake a drive away.",
    tags: ["Royal palace", "Water palace", "Museum"],
    categories: ["culture", "water"],
    image: IMAGES.agartala,
    link: plan("Agartala & Neermahal, Tripura"),
  },
  {
    id: "gangtok",
    name: "Gangtok & Tsomgo Lake",
    ...SK,
    highlight:
      "Sikkim's capital is the base for Rumtek Monastery and the high-altitude Tsomgo Lake, which needs a permit and is subject to weather and road conditions.",
    tags: ["Monasteries", "Glacial lake", "Mountain views"],
    categories: ["himalayan", "water", "spiritual"],
    image: IMAGES.gangtok,
    link: read("Gangtok"),
  },
  {
    id: "pelling",
    name: "Pelling",
    ...SK,
    highlight:
      "A West Sikkim town with close views of the Kanchenjunga range on clear mornings, beside the historic Pemayangtse Monastery.",
    tags: ["Kanchenjunga views", "Pemayangtse", "Quiet stays"],
    categories: ["himalayan", "spiritual"],
    image: IMAGES.pelling,
    link: plan("Pelling, Sikkim"),
  },
  {
    id: "north-sikkim",
    name: "North Sikkim",
    ...SK,
    highlight:
      "High valleys such as Lachung and Yumthang, with rhododendrons in spring and snow in winter. Access needs permits and depends on road conditions.",
    tags: ["High valleys", "Rhododendrons", "Road trip"],
    categories: ["himalayan", "offbeat"],
    image: IMAGES.northSikkim,
    link: read("North Sikkim"),
  },
];

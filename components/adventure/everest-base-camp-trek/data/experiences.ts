import type { CultureItem, ExperienceItem, EbcImage } from "../types";
import { IMG } from "../config/site";

/* ------------------------------------------------------------------ */
/* Section 3 — Overview                                                */
/* ------------------------------------------------------------------ */

export const overview = {
  eyebrow: "Destination Overview",
  title: "Journey to the Heart of the Himalayas",
  /** The brief's destination highlight paragraph, verbatim. */
  paragraph:
    "Everest Base Camp Trek is an extraordinary Himalayan adventure through the breathtaking Khumbu region of Nepal, offering a perfect blend of high-altitude trekking, Sherpa culture, and spectacular mountain scenery. Journey through the picturesque villages of Lukla, Phakding, Namche Bazaar, Tengboche, Dingboche, and Gorakshep, surrounded by dramatic mountain landscapes, glacial rivers, and magnificent snow-capped peaks. Experience the vibrant Sherpa heritage of Namche Bazaar, visit the iconic Tengboche Monastery, and witness awe-inspiring views of Mount Everest, Lhotse, Nuptse, and Ama Dablam. Trek through the legendary Sagarmatha National Park, cross suspension bridges, explore traditional Himalayan settlements, and reach Everest Base Camp (5,364 m), with an optional sunrise hike to Kala Patthar (5,545 m) for panoramic views of Mount Everest. Combining adventure, cultural discovery, natural beauty, and the thrill of standing beneath the world's highest mountain, this iconic trek offers an unforgettable journey into the heart of the Himalayas.",
  primaryImage: {
    src: `${IMG}/hero/everest-lhotse-nuptse.jpg`,
    alt: "Mount Everest, Lhotse and Nuptse forming a wall of snow and rock above the Khumbu",
  } satisfies EbcImage,
  secondaryImage: {
    src: `${IMG}/culture/tengboche-monastery-gate.jpg`,
    alt: "Painted gateway of Tengboche Monastery with prayer flags",
  } satisfies EbcImage,
  highlights: ["Sagarmatha National Park — a UNESCO World Heritage Site", "Two built-in acclimatisation days", "Optional Kala Patthar sunrise"],
};

/* ------------------------------------------------------------------ */
/* Section 5 — Trekking experience                                     */
/* ------------------------------------------------------------------ */

export const experiences: ExperienceItem[] = [
  {
    id: "high-altitude",
    title: "High-altitude trekking through the Khumbu",
    description: "Day by day the valley rises from pine forest to alpine meadow to glacier — a gradual, rewarding climb paced for acclimatisation.",
    image: { src: `${IMG}/culture/khumbu-trail.jpg`, alt: "Stone trail winding up the Khumbu valley towards snow peaks" },
  },
  {
    id: "panoramas",
    title: "Himalayan panoramas",
    description: "Everest, Lhotse, Nuptse, Ama Dablam, Thamserku and Pumori appear and reappear as the trail turns — each view larger than the last.",
    image: { src: `${IMG}/gallery/ama-dablam-panorama.jpg`, alt: "Ama Dablam's pyramid summit above the valley" },
  },
  {
    id: "bridges",
    title: "Suspension bridges over glacial rivers",
    description: "Prayer-flag-draped bridges span the Dudh Koshi and its tributaries — the Hillary Bridge below Namche is the most famous.",
    image: { src: `${IMG}/gallery/suspension-bridge.jpg`, alt: "Long suspension bridge draped in prayer flags over a deep gorge" },
  },
  {
    id: "villages",
    title: "Sherpa villages & hospitality",
    description: "Evenings are spent in family-run teahouses around a yak-dung stove, over dal bhat, butter tea and stories of the mountains.",
    image: { src: `${IMG}/culture/teahouse-evening.jpg`, alt: "Warm teahouse dining room with a stove and trekkers" },
  },
  {
    id: "monasteries",
    title: "Monasteries & prayer flags",
    description: "Tengboche and Pangboche monasteries, chortens and prayer wheels mark the trail, reminders that this is a living sacred landscape.",
    image: { src: `${IMG}/culture/prayer-flags-chorten.jpg`, alt: "White chorten with prayer flags against a mountain backdrop" },
  },
  {
    id: "national-park",
    title: "Sagarmatha National Park",
    description: "A UNESCO World Heritage Site of glaciers, rhododendron forest and high pasture — home to Himalayan tahr, musk deer and the danphe pheasant.",
    image: { src: `${IMG}/gallery/sagarmatha-forest.jpg`, alt: "Rhododendron forest in Sagarmatha National Park with peaks above" },
  },
  {
    id: "base-camp",
    title: "Everest Base Camp",
    description: "Walk the moraine to the foot of the Khumbu Icefall and stand where expeditions begin their climb to the summit.",
    image: { src: `${IMG}/gallery/everest-base-camp.jpg`, alt: "Everest Base Camp on the Khumbu Glacier" },
  },
  {
    id: "kala-patthar",
    title: "Optional Kala Patthar sunrise",
    description: "For those with energy to spare, the dawn climb above Gorakshep delivers the trek's defining view of Everest's summit.",
    image: { src: `${IMG}/gallery/kala-patthar-sunrise.jpg`, alt: "Golden sunrise on Everest seen from Kala Patthar" },
  },
];

/* ------------------------------------------------------------------ */
/* Section 6 — Sherpa culture                                          */
/* ------------------------------------------------------------------ */

export const culture: CultureItem[] = [
  {
    id: "sherpa-heritage",
    label: "Heritage",
    title: "Sherpa traditions",
    description: "The Sherpa people have called the Khumbu home for generations, sustaining Buddhist customs, festivals and a deep respect for the mountains.",
    image: { src: `${IMG}/culture/sherpa-heritage.jpg`, alt: "Traditional Sherpa stone house with carved wooden windows" },
  },
  {
    id: "namche",
    label: "Community",
    title: "Namche Bazaar",
    description: "The Khumbu's lively hub — a weekly market, bakeries and the Sherpa culture museum make it a natural place to learn and linger.",
    image: { src: `${IMG}/culture/namche-market.jpg`, alt: "Market day in Namche Bazaar with traders and goods" },
  },
  {
    id: "tengboche",
    label: "Spiritual heritage",
    title: "Tengboche Monastery",
    description: "The Khumbu's best-known monastery. Visitors may sit in on prayers — dress modestly, remove hats and ask before taking photographs.",
    image: { src: `${IMG}/culture/tengboche-prayer-hall.jpg`, alt: "Monks in the prayer hall at Tengboche Monastery" },
  },
  {
    id: "architecture",
    label: "Architecture",
    title: "Himalayan stone houses",
    description: "Thick stone walls, carved wooden window frames and stacked fuel stores are built for long, cold winters at altitude.",
    image: { src: `${IMG}/culture/stone-houses.jpg`, alt: "Stone houses with green and blue roofs in a Khumbu village" },
  },
  {
    id: "mani",
    label: "Sacred landscape",
    title: "Prayer wheels, flags & mani walls",
    description: "Pass mani stones and chortens on the left, clockwise, as local custom asks — and spin prayer wheels in the same direction.",
    image: { src: `${IMG}/culture/mani-wall.jpg`, alt: "Carved mani stones stacked along the trail with prayer flags" },
  },
  {
    id: "hospitality",
    label: "Mountain life",
    title: "Teahouse hospitality",
    description: "Family lodges, yak herders and porters sustain life on the trail. A greeting of 'Namaste' or 'Tashi Delek' goes a long way.",
    image: { src: `${IMG}/culture/yak-caravan.jpg`, alt: "Yak caravan carrying supplies along a Khumbu trail" },
  },
  {
    id: "responsible",
    label: "Respect",
    title: "Travel responsibly",
    description: "Carry out what you carry in, refill water rather than buying plastic bottles, and give way to yaks on the mountain side of the trail.",
    image: { src: `${IMG}/culture/responsible-trekking.jpg`, alt: "Trekker refilling a reusable water bottle at a lodge" },
  },
];

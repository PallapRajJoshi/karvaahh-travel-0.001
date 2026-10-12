/* ============================================================
   HELICOPTER TOURS — SHARED IMAGE LIBRARY
   ------------------------------------------------------------
   Verified photos reused across destinations. Alt text describes
   only what is visible. Photos that are mislabelled on disk are
   NOT used:
   - gandaki/kagbeni-ancient-walled-settlement-...jpg (Manakamana cable car)
   - gandaki/muktinath-temple-mustang-...jpg (Tal Barahi temple, Pokhara)
   - everest-base-camp-heli-tour.jpg (third-party branding)
   ============================================================ */

import type { PageImage, RequiredImage } from "@/components/activities/experience/types";

/** A photo still to be sourced: renders an on-brand labelled placeholder. */
export const pending = (label: string, alt: string): PageImage => ({ src: null, label, alt });

/* ---------- Pokhara & Annapurna ---------- */

export const pokhara: RequiredImage = {
  src: "/images/home/pokhara-view.jpg",
  alt: "Phewa Lake in Pokhara with the Annapurna range reflected in its waters",
  label: "Pokhara",
  width: 1920,
  height: 919,
};

export const annapurnaRange: RequiredImage = {
  src: "/images/home/annapurna-view.jpg",
  alt: "The Annapurna range and Machhapuchhre rising above the Pokhara valley at sunrise",
  label: "Annapurna",
  width: 2048,
  height: 972,
  objectPosition: "center 30%",
};

export const mardiRidge: RequiredImage = {
  src: "/images/gandaki/sarangkot-sunrise-annapurna-mountain-view-kaski-nepal.jpg",
  alt: "A high grassy ridge trail facing Annapurna South, Hiunchuli and the fishtail summit of Machhapuchhre",
  label: "Mardi Himal",
  width: 2048,
  height: 1365,
};

export const dhaulagiri: RequiredImage = {
  src: "/images/gandaki/poon-hill-sunrise-dhaulagiri-myagdi-gandaki-nepal.jpg",
  alt: "The snow face of Dhaulagiri rising above forested foothills",
  label: "Dhaulagiri",
  width: 2048,
  height: 1365,
  objectPosition: "center 30%",
};

export const valleyRoad: RequiredImage = {
  src: "/images/gandaki/scenic-mountain-road-gandaki-nepal-travel-journey.jpg",
  alt: "A mountain road winding through a deep forested valley beneath snow-capped Himalayan peaks",
  label: "Himalayan valley",
  width: 2279,
  height: 1328,
  objectPosition: "center 35%",
};

/* ---------- Mustang ---------- */

export const mustangRidgeMonastery: RequiredImage = {
  src: "/images/gandaki/lo-manthang-thakali-tibetan-heritage-mustang-nepal.jpg",
  alt: "A whitewashed and red monastery on an eroded ridge in Upper Mustang, beneath snow-covered Himalayan peaks",
  label: "Upper Mustang",
  width: 2048,
  height: 1365,
  objectPosition: "center 40%",
};

export const loManthangStreet: RequiredImage = {
  src: "/images/gandaki/lo-manthang-walled-city-upper-mustang-gandaki-nepal.jpg",
  alt: "Whitewashed houses, chortens and the old palace walls inside the walled city of Lo Manthang",
  label: "Lo Manthang",
  width: 800,
  height: 533,
};

export const mustangCliffs: RequiredImage = {
  src: "/images/home/muktinath-road.jpg",
  alt: "A track winding through the eroded cliffs and dry valleys of the Mustang high desert",
  label: "Mustang cliffs",
  width: 2048,
  height: 1365,
};

export const kagbeni: RequiredImage = {
  src: "/images/gandaki/kagbeni-ancient-village-kali-gandaki-mustang-nepal.jpg",
  alt: "The ancient village of Kagbeni above the Kali Gandaki river, gateway to Upper Mustang, with Nilgiri behind",
  label: "Kagbeni",
  width: 2048,
  height: 1365,
};

export const mustangMonastery: RequiredImage = {
  src: "/images/home/muktinath-view.jpg",
  alt: "A Buddhist monastery on the dry Mustang plateau with Dhaulagiri rising on the horizon",
  label: "Mustang plateau",
  width: 1920,
  height: 980,
  objectPosition: "45% center",
};

export const muktinathTemple: RequiredImage = {
  src: "/images/home/muktinath-temple.jpg",
  alt: "Muktinath Temple and its sacred ponds in Lower Mustang",
  label: "Muktinath",
  width: 1200,
  height: 800,
};

export const prayerCloth: RequiredImage = {
  src: "/images/home/muktinath.jpg",
  alt: "Red and yellow prayer cloth tied to sacred water spouts in Mustang",
  label: "Prayer cloth",
  width: 4912,
  height: 3264,
  objectPosition: "60% center",
};

/* ---------- Kathmandu, Langtang & Gosaikunda ---------- */

export const kathmanduValley: RequiredImage = {
  src: "/images/bagmati/bagmati-province-kathmandu-valley-himalayan-travel-inspiration-nepal.jpg",
  alt: "Aerial view of the Kathmandu valley with the Himalayan range on the northern horizon",
  label: "Kathmandu",
  width: 1920,
  height: 1080,
};

export const langtangVillage: RequiredImage = {
  src: "/images/bagmati/langtang-valley-rasuwa-himalayan-mountains-trekking-nepal.jpg",
  alt: "A mountain village in the upper Langtang Valley beneath snow peaks, with autumn colours on the valley floor",
  label: "Langtang Valley",
  width: 6000,
  height: 3375,
};

export const langtangHimal: RequiredImage = {
  src: "/images/bagmati/langtang-valley-trekking-himalayan-mountains-bagmati-nepal.jpg",
  alt: "Snow-covered peaks of the Langtang Himal rising above a high valley trail",
  label: "Langtang Himal",
  width: 3840,
  height: 2560,
  objectPosition: "center 30%",
};

export const tamangVillage: RequiredImage = {
  src: "/images/bagmati/tamang-village-langtang-himalayan-culture-bagmati-nepal.jpg",
  alt: "Stone and timber houses with prayer flags in a Tamang village of the Langtang region",
  label: "Tamang village",
  width: 1000,
  height: 750,
};

export const gosaikunda: RequiredImage = {
  src: "/images/bagmati/gosainkunda-lake-langtang-himalayan-trekking-bagmati-nepal.jpg",
  alt: "The turquoise waters of Gosaikunda among rugged high-altitude ridges in the Langtang region",
  label: "Gosaikunda",
  width: 1200,
  height: 895,
};

/* ---------- Gorkha & Manaslu ---------- */

export const manasluTrail: RequiredImage = {
  src: "/images/gandaki/manaslu-circuit-trekking-mountain-massif-gorkha-nepal.jpg",
  alt: "Two trekkers on a high valley trail in the Manaslu region, walking towards a massive snow-covered Himalayan wall above the clouds",
  label: "Manaslu region",
  width: 3000,
  height: 2000,
  objectPosition: "center 35%",
};

export const gorkhaDurbar: RequiredImage = {
  src: "/images/gandaki/gorkha-durbar-palace-hilltop-gorkha-gandaki-nepal.jpg",
  alt: "The historic Gorkha Durbar palace on its hilltop in Gorkha district",
  label: "Gorkha",
  width: 3000,
  height: 1688,
};

/* ---------- Everest & Khumbu ---------- */

export const everestDawn: RequiredImage = {
  src: "/koshi/everest-base-camp.jpg",
  alt: "Mount Everest, Nuptse and the Khumbu Glacier at dawn",
  label: "Everest",
  width: 1920,
  height: 600,
  objectPosition: "22% center",
};

export const cholatse: RequiredImage = {
  src: "/koshi/cholatse-peak.jpg",
  alt: "Cholatse and Taboche peaks above a glacial river valley in Sagarmatha National Park",
  label: "Khumbu",
  width: 2048,
  height: 1152,
};

export const gokyo: RequiredImage = {
  src: "/images/home/solukhumbu-everest-region-nepal.webp",
  alt: "Turquoise Gokyo Lake and village beside the Ngozumpa Glacier in the Everest region",
  label: "Gokyo",
  width: 1360,
  height: 907,
};

export const khumbuSunrise: RequiredImage = {
  src: "/koshi/gokyori.jpg",
  alt: "Sunrise breaking over Himalayan peaks above a sea of cloud in the Khumbu region",
  label: "Himalayan sunrise",
  width: 1080,
  height: 720,
};

/* ---------- Kailash ---------- */

export const kailash: RequiredImage = {
  src: "/images/kailash-mansarovar-yatra.webp",
  alt: "The south face of Mount Kailash glowing gold at sunrise above snow-covered ridges",
  label: "Mount Kailash",
  width: 822,
  height: 852,
};

export const everestSunset: RequiredImage = {
  src: "/koshi/everest-region-view.jpg",
  alt: "The summit pyramid of Mount Everest glowing gold at sunset above a high glacial valley",
  label: "Mount Everest",
  width: 2048,
  height: 1365,
  objectPosition: "center 40%",
};

export const makaluBarun: RequiredImage = {
  src: "/koshi/makalu-barun.jpg",
  alt: "Glaciated peaks, moraines and glacial lakes in the Makalu-Barun region of eastern Nepal",
  label: "Makalu-Barun region",
  width: 2800,
  height: 1061,
};

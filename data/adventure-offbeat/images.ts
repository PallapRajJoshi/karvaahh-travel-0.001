/* ============================================================
   NEPAL ADVENTURE & OFFBEAT TOURS — IMAGES
   ------------------------------------------------------------
   Existing project photos only. Rara Lake, Khaptad, Saipal and
   Api Nampa point at the paths their own destination pages plan
   to use; until those files are added, resolveImages() swaps in
   a labelled placeholder, and the photo appears automatically
   once it is placed in /public.
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";

const img = (src: string, label: string, alt: string, objectPosition?: string): PageImage => ({ src, label, alt, ...(objectPosition ? { objectPosition } : {}) });

/* ---------- Hero & atmosphere ---------- */
export const loManthang = img("/images/gandaki/lo-manthang-walled-city-upper-mustang-gandaki-nepal.jpg", "Lo Manthang", "The walled city of Lo Manthang in Upper Mustang beneath bare Trans-Himalayan ridges");
export const upperMustang = img("/images/gandaki/lo-manthang-thakali-tibetan-heritage-mustang-nepal.jpg", "Upper Mustang", "A monastery on an eroded ridge in Upper Mustang beneath snow peaks", "center 40%");
export const mountainRoad = img("/images/gandaki/scenic-mountain-road-gandaki-nepal-travel-journey.jpg", "Mountain road", "A winding mountain road through the hills of Gandaki Province");
export const muktinathRoad = img("/images/home/muktinath-road.jpg", "Road to Muktinath", "The road towards Muktinath through the dry valleys of Mustang");
export const upperDolpo = img("/images/home/upper-dolpo-nepal-himalayan.jpg", "Dolpo", "High, open Himalayan landscape in the Dolpo region of Karnali Province");
export const highTrail = img("/images/gandaki/high-altitude-trekking-trail-annapurna-gandaki-nepal.jpg", "High trail", "A high-altitude trekking trail in the Annapurna region");
export const annapurnaPass = img("/images/gandaki/annapurna-circuit-high-mountain-trail-pass-gandaki-nepal.jpg", "High pass", "A high mountain trail climbing towards a pass on the Annapurna Circuit");

/* ---------- Lakes & wilderness ---------- */
export const rara = img("/images/destinations/rara-lake/hero-rara-lake.jpg", "Rara Lake", "Turquoise waters of Rara Lake framed by pine forest and Himalayan peaks");
export const tshoRolpa = img("/images/bagmati/tsho-rolpa-lake-rolwaling-valley-dolakha-himalayan-adventure-nepal.jpg", "Tsho Rolpa", "The glacial lake of Tsho Rolpa in the Rolwaling Valley, Dolakha");
export const panchPokhari = img("/images/bagmati/panch-pokhari-sindhupalchok-high-altitude-lake-himalayan-nepal.jpg", "Panch Pokhari", "One of the high-altitude sacred lakes of Panch Pokhari in Sindhupalchok");
export const khaptad = img("/images/destinations/khaptad/hero/khaptad-meadows-hero.jpg", "Khaptad National Park", "The open meadows of Khaptad National Park in far-western Nepal");
export const dhorpatan = img("/images/gandaki/dhorpatan-alpine-meadows-himalayan-wilderness-gandaki-nepal.jpg", "Dhorpatan", "Open alpine meadows of the Dhorpatan Hunting Reserve below Himalayan ridges");
export const dhorpatanValley = img("/images/gandaki/dhorpatan-valley-himalayan-landscape-baglung-gandaki-nepal.jpg", "Dhorpatan Valley", "The wide Dhorpatan valley in Baglung with forested slopes");
/* Saipal Base Camp has no photo planned yet — a labelled placeholder renders. */
export const saipal: PageImage = { src: null, label: "Saipal Base Camp", alt: "Mount Saipal above the remote valleys of Bajhang" };
export const gosainkunda = img("/images/bagmati/gosainkunda-lake-langtang-himalayan-trekking-bagmati-nepal.jpg", "Gosainkunda", "The high lake of Gosainkunda among Himalayan ridges");

/* ---------- Mountain regions ---------- */
export const manaslu = img("/images/gandaki/manaslu-circuit-trekking-mountain-massif-gorkha-nepal.jpg", "Manaslu region", "The Manaslu massif above the trekking valleys of Gorkha district");
export const manang = img("/images/gandaki/manang-village-annapurna-mountain-wall-gandaki-nepal.jpg", "Manang", "Manang village beneath the Annapurna mountain wall");
export const langtang = img("/images/bagmati/langtang-valley-rasuwa-himalayan-mountains-trekking-nepal.jpg", "Langtang Valley", "The Langtang Valley in Rasuwa beneath snow-capped peaks");
export const kanchenjunga = img("/koshi/kanchenjunga.jpg", "Kanchenjunga", "Kanchenjunga mountain landscape in eastern Nepal");
export const makaluBarun = img("/koshi/barun-valley.jpg", "Makalu–Barun", "The remote Barun valley in Makalu–Barun National Park");
export const everestRegion = img("/koshi/everest-region-view.jpg", "Everest region", "High peaks of the Everest region in Solukhumbu");
export const apiNampa = img("/images/destinations/api-nampa-base-camp/hero/api-nampa-base-camp-hero.webp", "Api Nampa", "Mount Api above the remote valleys of Darchula in far-western Nepal");

/* ---------- Villages & hill towns ---------- */
export const ghandruk = img("/images/gandaki/ghandruk-gurung-village-mountain-culture-gandaki-nepal.jpg", "Ghandruk", "Stone houses of the Gurung village of Ghandruk below the Annapurna range");
export const ghaleGaun = img("/images/gandaki/ghale-gaun-gurung-heritage-village-gandaki-nepal.jpg", "Ghale Gaun", "The Gurung heritage village of Ghale Gaun in Lamjung");
export const sirubari = img("/images/gandaki/sirubari-gurung-village-terraced-hills-syangja-nepal.jpg", "Sirubari", "The Gurung village of Sirubari among terraced hills in Syangja");
export const bandipur = img("/images/gandaki/bandipur-heritage-hill-town-tanahun-gandaki-nepal.jpg", "Bandipur", "The heritage hill town of Bandipur in Tanahun");
export const kagbeni = img("/images/gandaki/kagbeni-ancient-village-kali-gandaki-mustang-nepal.jpg", "Kagbeni", "The ancient village of Kagbeni above the Kali Gandaki river");
export const tansen = img("/images/lumbini/tansen-palpa-newar-heritage-town-nepal.jpg", "Tansen", "Red-tiled roofs of the Newar heritage town of Tansen in Palpa");
export const raniMahal = img("/images/lumbini/rani-mahal-palpa-nepal-kali-gandaki.jpg", "Rani Mahal", "Rani Mahal palace on the banks of the Kali Gandaki in Palpa");
export const jaljala = img("/images/lumbini/jaljala-rolpa-nepal-alpine-pasture.jpg", "Jaljala", "The high alpine pasture of Jaljala above the hills of Rolpa");
export const thawang = img("/images/lumbini/thawang-rolpa-nepal-magar-village.jpg", "Thawang", "The remote Magar village of Thawang in Rolpa");

/* ---------- Experiences ---------- */
export const poonHill = img("/images/gandaki/poon-hill-sunrise-dhaulagiri-myagdi-gandaki-nepal.jpg", "Poon Hill sunrise", "Sunrise over Dhaulagiri from Poon Hill in Myagdi");
export const chitwanRhino = img("/images/bagmati/one-horned-rhinoceros-chitwan-national-park-wildlife-nepal.jpg", "Chitwan", "A one-horned rhinoceros in the grasslands of Chitwan National Park");
export const bardiya = img("/images/lumbini/bardiya-national-park-nepal-wildlife-safari.jpg", "Bardiya", "Forest and grassland in Bardiya National Park, western Nepal");
export const chitlangHomestay = img("/images/bagmati/chitlang-village-homestay-rural-life-bagmati-nepal.jpg", "Village homestay", "Rural village life around a homestay in Chitlang");

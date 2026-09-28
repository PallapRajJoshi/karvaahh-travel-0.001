import type { ImageAsset } from "./types";

/**
 * Image manifest. Every file below ships as a clearly-labelled placeholder
 * (`placeholder: true`). Replace the file at the same path with an authentic
 * photograph of the named subject and set `placeholder` to false.
 * Crop guidance for each slot is in the README.
 */
const BASE = "/images/destinations/api-nampa-base-camp";

const asset = (path: string, alt: string): ImageAsset => ({
  src: `${BASE}/${path}`,
  alt,
  placeholder: true,
});

export const IMAGES = {
  hero: asset(
    "hero/api-nampa-base-camp-hero.webp",
    "Snow-covered Mount Api rising above the forested ridges of the Api Nampa Conservation Area in far-western Nepal",
  ),
  overview: asset(
    "highlights/api-himal-panorama.webp",
    "Panoramic view of the Api Himal massif above high pastures in Darchula district",
  ),
  mountApi: asset(
    "peaks/mount-api-himal-nepal.webp",
    "The summit pyramid of Mount Api, 7,132 m, the highest peak of far-western Nepal",
  ),
  mountNampa: asset(
    "peaks/mount-nampa-far-western-nepal.webp",
    "The rugged ice faces of Mount Nampa in the Api Nampa region",
  ),
  byasRishi: asset(
    "peaks/bobaye-byas-rishi-himal.webp",
    "Peaks of the Byas Rishi Himal range, including Bobaye, above the upper Darchula valleys",
  ),
  baseCamp: asset(
    "highlights/api-himal-base-camp-landscape.webp",
    "Glacial moraine and open ground at Api Himal Base Camp beneath the Api massif",
  ),
  kalidhunga: asset(
    "highlights/kalidhunga-lake-nepal.webp",
    "The still waters of Kalidhunga Lake surrounded by high Himalayan terrain",
  ),
  dhauliOdar: asset(
    "highlights/dhauli-odar-api-nampa.webp",
    "The Dhauli Odar area, a rock-sheltered stopping point on the approach to Api Himal Base Camp",
  ),
  chameliya: asset(
    "highlights/chameliya-river-valley.webp",
    "The Chameliya (Chaulani) River winding through a forested valley in Darchula",
  ),
  conservation: asset(
    "highlights/api-nampa-conservation-area.webp",
    "Mixed forest and grassland slopes inside the Api Nampa Conservation Area",
  ),
  meadows: asset(
    "highlights/api-nampa-alpine-meadows.webp",
    "Open alpine pastures below the snowline in the Api Nampa region",
  ),
  village: asset(
    "culture/darchula-mountain-village.webp",
    "Stone-and-timber houses of a traditional mountain village in Darchula district",
  ),
  villageLife: asset(
    "culture/darchula-village-life.webp",
    "Terraced fields and daily life in a hill settlement of far-western Nepal",
  ),
  camping: asset(
    "highlights/api-nampa-wilderness-camping.webp",
    "Tents pitched on a high meadow beneath a star-filled sky near Api Himal",
  ),
  forestTrail: asset(
    "gallery/api-nampa-forest-trail.webp",
    "A narrow trail through moss-covered forest on the way toward Api Himal",
  ),
  waterfall: asset(
    "gallery/api-nampa-waterfall.webp",
    "A waterfall spilling down a forested cliff in the Chameliya valley",
  ),
  starryNight: asset(
    "gallery/api-nampa-starry-night.webp",
    "The Milky Way over the dark silhouette of the Api massif",
  ),
  photography: asset(
    "gallery/api-himal-golden-hour.webp",
    "Golden-hour light on the snow ridges of Api Himal",
  ),
  cta: asset(
    "hero/api-himal-dusk-cta.webp",
    "Dusk settling over the snow peaks of the Api Nampa region",
  ),
} satisfies Record<string, ImageAsset>;

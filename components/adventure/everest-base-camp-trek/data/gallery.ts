import type { GalleryItem } from "../types";
import { IMG } from "../config/site";

/** Photography gallery. `size` is a layout hint for the desktop mosaic. */
export const gallery: GalleryItem[] = [
  { id: "g1", src: `${IMG}/gallery/everest-summit.jpg`, alt: "Mount Everest's summit plume against a deep blue sky", caption: "Mount Everest", size: "wide" },
  { id: "g2", src: `${IMG}/gallery/ama-dablam-panorama.jpg`, alt: "Ama Dablam's pyramid summit above the valley", caption: "Ama Dablam", size: "tall" },
  { id: "g3", src: `${IMG}/gallery/namche-bazaar.jpg`, alt: "Namche Bazaar's terraced settlement seen from above", caption: "Namche Bazaar" },
  { id: "g4", src: `${IMG}/gallery/tengboche-monastery.jpg`, alt: "Tengboche Monastery under a starry sky", caption: "Tengboche Monastery" },
  { id: "g5", src: `${IMG}/gallery/suspension-bridge.jpg`, alt: "Long suspension bridge draped in prayer flags over the Dudh Koshi", caption: "Dudh Koshi bridges", size: "tall" },
  { id: "g6", src: `${IMG}/gallery/khumbu-glacier.jpg`, alt: "Ice seracs of the Khumbu Glacier", caption: "Khumbu Glacier", size: "wide" },
  { id: "g7", src: `${IMG}/gallery/everest-base-camp.jpg`, alt: "Everest Base Camp on the Khumbu Glacier", caption: "Everest Base Camp" },
  { id: "g8", src: `${IMG}/gallery/kala-patthar-sunrise.jpg`, alt: "Golden sunrise on Everest seen from Kala Patthar", caption: "Kala Patthar sunrise" },
  { id: "g9", src: `${IMG}/gallery/prayer-flags-village.jpg`, alt: "Prayer flags strung above a Sherpa village", caption: "Sherpa villages", size: "wide" },
  { id: "g10", src: `${IMG}/gallery/snow-trail.jpg`, alt: "Trekkers on a snow-covered trail beneath peaks", caption: "Snow-covered trails" },
];

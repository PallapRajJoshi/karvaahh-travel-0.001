import type { GalleryItem } from "./types";

/** Reuses image keys from the manifest so the photo shortlist stays small. */
export const GALLERY: GalleryItem[] = [
  { id: "g-rhino", image: "dest-chitwan", caption: "One-horned rhinoceros habitat, Chitwan", layout: "large" },
  { id: "g-tiger", image: "wl-tiger", caption: "Bengal tiger in a natural habitat", layout: "tall" },
  { id: "g-elephant", image: "wl-elephant", caption: "Wild elephants in lowland habitat", layout: "std" },
  { id: "g-panda", image: "wl-red-panda", caption: "Red panda in a Himalayan forest", layout: "std" },
  { id: "g-birds", image: "dest-koshi-tappu", caption: "Birdlife over the Koshi Tappu wetlands", layout: "wide" },
  { id: "g-shukla", image: "dest-shuklaphanta", caption: "Grasslands of Shuklaphanta", layout: "std" },
  { id: "g-sagar", image: "dest-sagarmatha", caption: "Himalayan landscapes of Sagarmatha", layout: "large" },
  { id: "g-langtang", image: "dest-langtang", caption: "Forested valleys of Langtang", layout: "std" },
  { id: "g-rara", image: "dest-rara", caption: "Turquoise waters of Rara Lake", layout: "wide" },
  { id: "g-safari", image: "exp-safari", caption: "Jungle safari landscapes", layout: "std" },
  { id: "g-trail", image: "exp-walks", caption: "Peaceful forest trails", layout: "tall" },
  { id: "g-photo", image: "exp-photography", caption: "Nature photography and birdwatching", layout: "std" },
];

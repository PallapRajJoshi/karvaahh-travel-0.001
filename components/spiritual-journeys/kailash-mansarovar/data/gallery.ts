import type { ImageAsset } from "./types";
import { IMAGES } from "./images";

export interface GalleryItem {
  caption: string;
  image: ImageAsset;
  /** Layout emphasis in the grid. */
  size: "wide" | "tall" | "regular";
}

/**
 * Sizes are balanced so the grid fills evenly: 12 cells = 4 rows at 3 columns, 6 rows at 2.
 * Keep the total (wide = 2, tall = 2, regular = 1) a multiple of 6 when adding images.
 */
export const GALLERY: GalleryItem[] = [
  { caption: "Mount Kailash", image: IMAGES.hero, size: "wide" },
  { caption: "Lake Mansarovar", image: IMAGES.mansarovar, size: "tall" },
  { caption: "Tibetan Plateau", image: IMAGES.plateau, size: "regular" },
  { caption: "The Kailash Kora", image: IMAGES.kora, size: "regular" },
  { caption: "Dolma La Pass", image: IMAGES.dolmaLa, size: "tall" },
  { caption: "Tibetan monasteries", image: IMAGES.monastery, size: "regular" },
  { caption: "Prayer flags", image: IMAGES.prayerFlags, size: "regular" },
  { caption: "Himalayan roads", image: IMAGES.himalayanRoad, size: "regular" },
  { caption: "Darchen", image: IMAGES.darchen, size: "regular" },
];

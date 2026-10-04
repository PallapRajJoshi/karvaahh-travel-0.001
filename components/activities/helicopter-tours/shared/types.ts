/* Shared types for helicopter tour pages (see product-types.ts for the page contract). */

export type IconName =
  | "mountain"
  | "mountainSnow"
  | "waves"
  | "helicopter"
  | "footprints"
  | "landmark"
  | "route"
  | "file"
  | "bed"
  | "heart"
  | "headset"
  | "car"
  | "compass"
  | "users"
  | "shield"
  | "calendar"
  | "sun"
  | "camera"
  | "clock"
  | "leaf"
  | "snow"
  | "rain"
  | "passport";

/**
 * `src: null` = photo not sourced yet. A labelled placeholder renders
 * instead of a stock or unrelated photo.
 */
export type PageImage = {
  src: string | null;
  alt: string;
  label: string;
  width?: number;
  height?: number;
  /** CSS object-position focal point for cropped layouts, e.g. "20% center". */
  objectPosition?: string;
};

/** An image that must exist (hero, backgrounds, Open Graph). */
export type RequiredImage = PageImage & { src: string };

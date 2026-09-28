import type { IconName } from "../shared/Icon";

export interface ImageAsset {
  /** File name inside IMAGE_BASE. */
  file: string;
  alt: string;
  /** Flip to true once the file exists in /public. Until then a styled placeholder renders. */
  ready: boolean;
}

export interface IconItem {
  icon: IconName;
  title: string;
  text: string;
}

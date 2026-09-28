import Image from "next/image";
import type { ImageAsset } from "../data/types";
import { IMAGE_BASE } from "../lib/site";

interface ImageSlotProps {
  image: ImageAsset;
  /** Required: responsive sizes hint for next/image. */
  sizes: string;
  priority?: boolean;
  className?: string;
}

const SHOW_FILENAMES = process.env.NODE_ENV !== "production";

/**
 * Renders a next/image when the asset is marked ready, otherwise a designed
 * Himalayan placeholder (never a broken image). In development the placeholder
 * also shows the expected file name so missing photography is easy to spot.
 * The parent element controls size; this component always fills it.
 */
export default function ImageSlot({ image, sizes, priority = false, className = "" }: ImageSlotProps) {
  if (image.ready) {
    return (
      <div className={`km-img ${className}`.trim()}>
        <Image
          src={`${IMAGE_BASE}/${image.file}`}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="km-img__el"
        />
      </div>
    );
  }

  return (
    <div className={`km-img km-img--placeholder ${className}`.trim()} role="img" aria-label={image.alt}>
      <svg className="km-img__ridge" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">
        <path className="km-img__ridge-far" d="M0 200V118l52-30 38 20 62-58 40 30 48-44 44 50 40-22 76 46v90z" />
        <path className="km-img__ridge-snow" d="m190 66 48-44 44 50-14-6-12 10-16-18-14 12-18-8z" />
        <path className="km-img__ridge-near" d="M0 200v-44l70-24 56 20 70-30 64 26 60-18 80 30v40z" />
      </svg>
      {SHOW_FILENAMES && <span className="km-img__file">{image.file}</span>}
    </div>
  );
}

import Image from "next/image";
import type { ImageSpec } from "./data/types";
import { AVAILABLE_PHOTOS, IMAGE_BASE } from "./data/photos";

interface AdventureImageProps {
  image: ImageSpec;
  /** next/image `sizes`: always pass a realistic value for responsive delivery. */
  sizes: string;
  priority?: boolean;
}

const SHOW_LABELS = process.env.NODE_ENV !== "production";

/**
 * Fills its positioned parent. Renders the real photo once its filename is
 * registered in data/photos.ts, otherwise a neutral ridge-line placeholder.
 * Placeholders carry the alt text as an accessible name, and the editor note
 * is shown in development only, never to visitors.
 */
export default function AdventureImage({ image, sizes, priority }: AdventureImageProps) {
  if (AVAILABLE_PHOTOS.has(image.file)) {
    return (
      <span className="rt-photo">
        <Image
          src={`${IMAGE_BASE}/${image.file}`}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
        />
      </span>
    );
  }

  return (
    <span
      className="rt-photo rt-photo--placeholder"
      role="img"
      aria-label={image.alt}
      data-photo-slot={image.file}
    >
      <svg
        className="rt-photo__ridge rt-photo__ridge--back"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0 200V120l60-50 50 40 70-80 60 70 50-40 110 90v50Z" />
      </svg>
      <svg
        className="rt-photo__ridge"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0 200v-70l80 30 70-60 80 70 60-40 110 60v10Z" />
      </svg>
      {SHOW_LABELS && (
        <span className="rt-photo__label" aria-hidden="true">
          Photo needed: {image.file}. {image.label}
        </span>
      )}
    </span>
  );
}

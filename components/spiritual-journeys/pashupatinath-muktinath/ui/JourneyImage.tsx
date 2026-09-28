import Image from "next/image";
import type { ImageAsset } from "../data/types";

interface JourneyImageProps {
  image: ImageAsset;
  sizes: string;
  priority?: boolean;
  className?: string;
}

/**
 * Renders a next/image with `fill` when the asset is marked ready,
 * otherwise a designed placeholder of the same footprint (no broken URLs).
 * The parent must be position: relative with a defined size or aspect-ratio.
 */
export function JourneyImage({ image, sizes, priority = false, className }: JourneyImageProps) {
  const classes = ["pmy-img", `pmy-img--${image.tone}`, className].filter(Boolean).join(" ");

  if (image.ready) {
    return (
      <div className={classes}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="pmy-img__el"
        />
      </div>
    );
  }

  return (
    <div className={`${classes} pmy-img--placeholder`} role="img" aria-label={image.alt}>
      <svg className="pmy-img__ridge" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 120V78l46-30 38 22 52-52 44 40 30-18 62 48 40-26 48 34 40-20v44z" />
        <path d="M0 120V96l60-18 50 14 70-34 60 28 48-12 62 20 50-16v42z" />
      </svg>
      <span className="pmy-img__file">{image.src.split("/").pop()}</span>
    </div>
  );
}

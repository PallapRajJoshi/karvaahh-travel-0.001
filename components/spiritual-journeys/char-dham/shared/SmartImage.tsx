import Image from "next/image";
import type { ImageAsset } from "../data/types";

interface SmartImageProps {
  image: ImageAsset;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Tints the placeholder so each Dham keeps its own colour story. */
  tone?: string;
}

/**
 * next/image when the file exists; a designed, accessible placeholder
 * (never a broken URL) while `available` is false.
 */
export default function SmartImage({ image, sizes, priority = false, className = "", tone }: SmartImageProps) {
  if (image.available) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`cd-img ${className}`}
        style={image.focus ? { objectPosition: image.focus } : undefined}
      />
    );
  }

  const file = image.src.split("/").pop();
  return (
    <div
      className={`cd-img cd-img--placeholder ${className}`}
      role="img"
      aria-label={image.alt}
      data-tone={tone}
      data-file={file}
    >
      <svg className="cd-img__ridge" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 120 L0 78 L46 52 L78 66 L126 22 L170 58 L214 34 L262 70 L300 44 L352 72 L400 50 L400 120 Z" />
        <path d="M0 120 L0 96 L60 80 L118 92 L180 72 L240 90 L310 76 L370 92 L400 84 L400 120 Z" />
      </svg>
    </div>
  );
}

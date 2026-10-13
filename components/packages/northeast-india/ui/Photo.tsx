import Image from "next/image";
import type { Img } from "../data/images";

/**
 * A card photo, or a designed placeholder (misty ridge-line art + the place
 * name) while the planned file is missing. Used by server and client sections
 * alike, so it holds no state.
 */
export function Photo({ image, sizes, className = "nei-zoom" }: { image: Img; sizes: string; className?: string }) {
  if (!image.src) {
    return (
      <div className="nei-ph" role="img" aria-label={image.alt}>
        <svg className="nei-ph__art" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 200 L0 118 L55 80 L100 104 L160 46 L215 92 L262 64 L330 104 L400 72 L400 200 Z" opacity="0.26" />
          <path d="M0 200 L0 150 C60 128 90 140 140 126 C200 108 240 140 300 122 C340 112 370 124 400 118 L400 200 Z" opacity="0.48" />
          <path d="M0 200 L0 176 C80 160 140 178 220 164 C290 152 340 170 400 160 L400 200 Z" opacity="0.8" />
        </svg>
        <span className="nei-ph__mist" aria-hidden="true" />
        <span className="nei-ph__label">{image.label}</span>
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      className={className}
      style={image.focus ? { objectPosition: image.focus } : undefined}
    />
  );
}

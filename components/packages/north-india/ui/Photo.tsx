import Image from "next/image";
import type { Img } from "../data/images";

/**
 * A card photo, or a designed placeholder (ridge-line art + the place name)
 * while the planned file is missing. Used by server and client sections alike,
 * so it holds no state.
 */
export function Photo({ image, sizes, className = "nin-zoom" }: { image: Img; sizes: string; className?: string }) {
  if (!image.src) {
    return (
      <div className="nin-ph" role="img" aria-label={image.alt}>
        <svg className="nin-ph__art" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 200 L0 130 L60 85 L105 118 L170 52 L225 104 L280 70 L340 112 L400 80 L400 200 Z" opacity="0.28" />
          <path d="M0 200 L0 160 L80 120 L140 150 L210 108 L270 148 L330 126 L400 152 L400 200 Z" opacity="0.5" />
          <path d="M170 52 L186 67 L176 64 L164 72 L158 62 Z" opacity="0.75" fill="#fff" />
        </svg>
        <span className="nin-ph__label">{image.label}</span>
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

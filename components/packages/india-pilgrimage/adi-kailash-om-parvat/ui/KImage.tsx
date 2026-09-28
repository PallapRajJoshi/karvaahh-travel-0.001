"use client";

import Image from "next/image";
import { useState } from "react";
import type { ImageAsset } from "@/data/india-pilgrimage/adi-kailash-om-parvat/types";

interface KImageProps {
  image: ImageAsset;
  /** Responsive `sizes` hint — always pass one that matches the layout. */
  sizes: string;
  /** Preload above-the-fold images (the hero). */
  preload?: boolean;
  className?: string;
}

/**
 * `next/image` in fill mode with a graceful fallback: if a file is missing or
 * fails to load, a branded gradient panel with the alt text is shown instead
 * of a broken-image icon. The parent must be positioned and sized.
 */
export function KImage({ image, sizes, preload = false, className }: KImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="akop-img-fallback" role="img" aria-label={image.alt}>
        <span className="akop-img-fallback__text" aria-hidden="true">
          {image.alt}
        </span>
      </span>
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      preload={preload}
      className={className}
      style={{ objectFit: "cover", objectPosition: image.focus ?? "50% 50%" }}
      onError={() => setFailed(true)}
    />
  );
}

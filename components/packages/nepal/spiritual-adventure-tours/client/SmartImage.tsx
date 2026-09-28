"use client";

import Image from "next/image";
import { useState } from "react";
import type { ImageAsset } from "../types";

interface SmartImageProps {
  image: ImageAsset;
  sizes: string;
  className?: string;
  /** Above-the-fold only (the hero). Preloads and raises fetch priority. */
  preload?: boolean;
}

/**
 * next/image in `fill` mode with a graceful fallback: if a file is missing
 * or fails to load, a branded mountain-silhouette panel takes its place
 * instead of a broken-image icon. The alt text stays exposed to assistive tech.
 * The parent element must be positioned and sized (every card media box is).
 */
export function SmartImage({ image, sizes, className, preload = false }: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`nsa-img-fallback ${className ?? ""}`} role="img" aria-label={image.alt}>
        <svg viewBox="0 0 120 60" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
          <path d="M0 60 30 22l12 14 20-28 22 30 14-12 22 34Z" />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      preload={preload}
      fetchPriority={preload ? "high" : undefined}
      className={className}
      style={image.focus ? { objectPosition: image.focus } : undefined}
      onError={() => setFailed(true)}
    />
  );
}

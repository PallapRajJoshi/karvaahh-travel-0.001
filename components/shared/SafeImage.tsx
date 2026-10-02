"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type SafeImageProps = Omit<ImageProps, "onError" | "alt"> & {
  alt: string;
  /** Short label shown in the placeholder state, e.g. "Panch Pokhari Lakes" */
  fallbackLabel?: string;
};

/**
 * Wraps next/image with a graceful placeholder for any destination photo
 * that hasn't been sourced yet. Karvaahh's brief explicitly requires only
 * authentic, verified Panch Pokhari imagery — this component never
 * substitutes a stock or unrelated photo, it shows a labeled gradient
 * placeholder instead so missing assets are obvious during integration
 * rather than silently wrong.
 */
export default function SafeImage({
  alt,
  fallbackLabel,
  className = "",
  ...props
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`pp-safe-image-fallback ${className}`.trim()}
        role="img"
        aria-label={alt}
      >
        <span className="pp-safe-image-fallback__label">
          {fallbackLabel ?? alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

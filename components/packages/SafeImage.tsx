"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * next/image with a graceful failure mode. The parent `.pkg-media` already paints
 * a designed gradient fallback, so a missing/broken image simply reveals it.
 */
export default function SafeImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
}: {
  src?: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

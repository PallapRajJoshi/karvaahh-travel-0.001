"use client";

/**
 * next/image with a branded fallback. If an asset is missing (e.g. a
 * placeholder not yet replaced), the frame shows a Himalayan-blue panel with
 * the image's alt text instead of a broken image icon.
 * The parent must be position:relative with a defined size (we always use `fill`).
 */
import Image from "next/image";
import { useState } from "react";
import type { EbcImage } from "../types";

interface Props {
  image: EbcImage;
  sizes: string;
  priority?: boolean;
  className?: string;
  fit?: "cover" | "contain";
}

export default function SmartImage({ image, sizes, priority, className, fit = "cover" }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="ebc-img__fallback" role="img" aria-label={image.alt}>
        <span aria-hidden="true">Image coming soon</span>
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      style={{ objectFit: fit, objectPosition: image.position ?? "50% 50%" }}
      onError={() => setFailed(true)}
    />
  );
}

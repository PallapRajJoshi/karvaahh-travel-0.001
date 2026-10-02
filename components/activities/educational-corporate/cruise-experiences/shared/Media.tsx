"use client";

import Image from "next/image";
import { useState } from "react";
import { IMAGE_BASE } from "../config";
import type { ImageRef } from "../data/types";
import "./Media.css";

type Props = {
  image: ImageRef;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * next/image with `fill` inside a positioned parent. Until the licensed photo
 * is added to /public, a labelled gradient placeholder renders instead of a
 * broken image, so nothing shifts and nothing looks broken.
 */
export default function Media({ image, sizes, priority, className }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`cr-media-ph ${className ?? ""}`.trim()}
        role="img"
        aria-label={image.alt}
      >
        <span>{image.placeholderLabel}</span>
      </div>
    );
  }

  return (
    <Image
      src={`${IMAGE_BASE}/${image.file}`}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`cr-media-img ${className ?? ""}`.trim()}
      onError={() => setFailed(true)}
    />
  );
}

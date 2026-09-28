"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import type { ImageTone } from "@/data/campingImages";

type Props = Omit<ImageProps, "fill"> & { tone?: ImageTone; className?: string };

/**
 * next/image in `fill` mode inside a toned frame. If the file is not in
 * /public yet, the image hides itself and the tonal landscape gradient
 * (see camping.css → .cmp-img) stays visible, so layouts never break.
 */
export default function CampImage({ tone = "forest", className = "", alt, ...rest }: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <span className={`cmp-img cmp-img--${tone} ${className}`} data-failed={failed || undefined}>
      {!failed && (
        <Image {...rest} alt={alt} fill onError={() => setFailed(true)} className="cmp-img__el" />
      )}
    </span>
  );
}

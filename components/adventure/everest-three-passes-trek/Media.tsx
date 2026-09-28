import Image from "next/image";
import type { CSSProperties } from "react";
import type { EtpImage } from "@/data/adventure/everest-three-passes-trek/types";
import { imageSrc } from "@/data/adventure/everest-three-passes-trek/format";

/** Three-stop gradients so placeholders read as a set, not as broken images. */
const PALETTES: [string, string, string][] = [
  ["#2c6d8f", "#123b5d", "#0b2640"],
  ["#2a7f82", "#1b5566", "#0b2640"],
  ["#4f7fa3", "#1f4c70", "#0d2a44"],
  ["#6f8fa8", "#2c5575", "#123b5d"],
  ["#3b8b8a", "#20566a", "#102f49"],
];

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

interface MediaProps {
  image: EtpImage;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Hide the filename label (e.g. in tiny thumbnails). */
  quietPlaceholder?: boolean;
}

/**
 * Renders next/image when the photo is marked `ready`, otherwise a clearly
 * labelled, on-brand placeholder — so there are never broken image paths.
 * The parent must define the box size (aspect-ratio or explicit height).
 */
export default function Media({ image, sizes, className, priority, quietPlaceholder }: MediaProps) {
  const cls = ["etp-media", className].filter(Boolean).join(" ");

  if (image.ready) {
    return (
      <div className={cls}>
        <Image
          src={imageSrc(image)}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="etp-media__img"
          style={image.focus ? { objectPosition: image.focus } : undefined}
        />
      </div>
    );
  }

  const h = hash(image.file);
  const [a, b, c] = PALETTES[h % PALETTES.length];
  // Vary the ridge silhouette per image.
  const p1 = 30 + (h % 25);
  const p2 = 10 + ((h >> 3) % 30);
  const p3 = 35 + ((h >> 6) % 25);

  return (
    <div className={cls}>
      <div
        className="etp-media__placeholder"
        role="img"
        aria-label={image.alt}
        style={{ "--ph-a": a, "--ph-b": b, "--ph-c": c } as CSSProperties}
      >
        <svg className="etp-media__ridge" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">
          <path
            d={`M0 200 L0 ${p3 + 60} L60 ${p1 + 40} L110 ${p2 + 50} L150 ${p1 + 20} L200 ${p2} L240 ${p1 + 30} L290 ${p2 + 35} L340 ${p3 + 10} L400 ${p1 + 45} L400 200 Z`}
            fill="rgba(255,255,255,0.08)"
          />
          <path
            d={`M200 ${p2} L218 ${p2 + 22} L208 ${p2 + 20} L200 ${p2 + 30} L190 ${p2 + 18} L182 ${p2 + 20} Z`}
            fill="rgba(255,255,255,0.35)"
          />
          <path
            d={`M0 200 L0 ${p1 + 110} L80 ${p3 + 80} L140 ${p1 + 100} L210 ${p3 + 70} L270 ${p1 + 95} L330 ${p3 + 85} L400 ${p1 + 90} L400 200 Z`}
            fill="rgba(8,27,46,0.45)"
          />
        </svg>
        {!quietPlaceholder && (
          <span className="etp-media__label" aria-hidden="true">
            Photo placeholder · {image.file}
          </span>
        )}
      </div>
    </div>
  );
}

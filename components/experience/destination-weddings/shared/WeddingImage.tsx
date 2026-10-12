import Image from "next/image";
import { IMAGE_BASE, WEDDING_IMAGES_READY } from "../data/config";
import type { WeddingImage as WeddingImageType } from "../data/types";
import "./shared.css";

type Props = {
  image: WeddingImageType;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Hide the placeholder caption on very small tiles. */
  compact?: boolean;
};

const TONES = ["champagne", "blush", "green", "maroon"] as const;

function toneFor(file: string) {
  let h = 0;
  for (let i = 0; i < file.length; i++) h = (h * 31 + file.charCodeAt(i)) >>> 0;
  return TONES[h % TONES.length];
}

/**
 * Fills its positioned parent. Renders next/image once real photographs are
 * in place, and an art-directed placeholder (never a broken image) before that.
 */
export default function WeddingImage({ image, sizes, priority, className, compact }: Props) {
  const cls = ["dw-img", className].filter(Boolean).join(" ");

  if (WEDDING_IMAGES_READY) {
    return (
      <div className={cls}>
        <Image
          src={`${IMAGE_BASE}/${image.file}`}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="dw-img__photo"
        />
      </div>
    );
  }

  return (
    <div
      className={`${cls} dw-img--placeholder dw-img--${toneFor(image.file)}`}
      role="img"
      aria-label={image.alt}
    >
      {!compact && (
        <span className="dw-img__caption" aria-hidden="true">
          <span className="dw-img__file">{image.file}</span>
          <span className="dw-img__alt">{image.alt}</span>
        </span>
      )}
    </div>
  );
}

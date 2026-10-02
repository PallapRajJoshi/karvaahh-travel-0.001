import Image from "next/image";
import { IMAGES, IMAGE_SOURCE_READY, type ImageKey } from "@/data/activities/wildlife-nature/images";

interface WildImageProps {
  name: ImageKey;
  /** Responsive sizes hint for next/image. Required so the browser never downloads oversized files. */
  sizes: string;
  priority?: boolean;
  className?: string;
}

/**
 * Renders a manifest image with next/image (fill) — or a labelled placeholder until
 * IMAGE_SOURCE_READY is true in data/.../images.ts. Parent must be `position: relative` with a
 * fixed aspect ratio (use .wn-media) so there is zero layout shift either way.
 */
export function WildImage({ name, sizes, priority = false, className = "" }: WildImageProps) {
  const spec = IMAGES[name];

  if (IMAGE_SOURCE_READY) {
    return (
      <Image
        src={spec.src}
        alt={spec.alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={80}
        className={`wn-img ${className}`}
      />
    );
  }

  return (
    <div className={`wn-ph wn-ph--${spec.tone} ${className}`} role="img" aria-label={spec.alt}>
      <span className="wn-ph__label">Photo needed · {spec.brief}</span>
    </div>
  );
}

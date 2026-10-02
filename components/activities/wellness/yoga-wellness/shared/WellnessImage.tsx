import Image from "next/image";
import type { ImageSlot } from "../data/types";
import { USE_IMAGE_PLACEHOLDERS } from "../data/config";
import "./WellnessImage.css";

type Props = {
  image: ImageSlot;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * Fills its (relatively positioned, aspect-ratio'd) parent. Renders a labeled
 * placeholder until USE_IMAGE_PLACEHOLDERS is switched off, so layout and
 * CLS behave identically before and after real photos arrive.
 */
export default function WellnessImage({ image, sizes, priority = false, className }: Props) {
  if (USE_IMAGE_PLACEHOLDERS) {
    return (
      <div
        className={`ykw-ph ${className ?? ""}`}
        role="img"
        aria-label={image.alt}
      >
        <span className="ykw-ph__label" aria-hidden="true">
          Photo needed: {image.label}
        </span>
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
      className={`ykw-img ${className ?? ""}`}
    />
  );
}

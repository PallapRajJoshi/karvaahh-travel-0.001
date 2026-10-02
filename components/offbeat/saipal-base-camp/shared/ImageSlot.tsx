import Image from "next/image";
import "./ImageSlot.css";

interface ImageSlotProps {
  src?: string;
  alt: string;
  label?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/**
 * Wraps next/image with `fill`, but degrades to a labeled placeholder panel
 * when no verified `src` is supplied yet. This build ships with placeholders
 * throughout — see README image manifest. No stock or unrelated-mountain
 * imagery has been substituted for Saipal per the brief's "do not substitute"
 * / "verified imagery only" instructions.
 */
export default function ImageSlot({ src, alt, label, sizes, priority, className = "" }: ImageSlotProps) {
  if (!src) {
    return (
      <div className={`saipal-imgslot saipal-imgslot--placeholder ${className}`} role="img" aria-label={alt}>
        <span className="saipal-imgslot__label">{label ?? alt}</span>
      </div>
    );
  }

  return (
    <div className={`saipal-imgslot ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "100vw"}
        priority={priority}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

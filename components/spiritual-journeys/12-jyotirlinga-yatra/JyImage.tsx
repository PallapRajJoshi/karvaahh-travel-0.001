import Image from "next/image";
import type { ImageAsset } from "./data/types";

interface JyImageProps {
  image: ImageAsset;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Text shown on the placeholder until the real photograph is added. */
  label?: string;
  sublabel?: string;
}

/**
 * next/image wrapper. When `image.ready` is false it renders an intentional,
 * on-brand placeholder instead of a broken request.
 */
export default function JyImage({ image, sizes, className, priority = false, label, sublabel }: JyImageProps) {
  return (
    <div className={`jyl-img${className ? ` ${className}` : ""}`}>
      {image.ready ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="jyl-img__el"
        />
      ) : (
        <div className="jyl-img__placeholder" role="img" aria-label={image.alt}>
          {label ? <span className="jyl-img__label">{label}</span> : null}
          {sublabel ? <span className="jyl-img__sub">{sublabel}</span> : null}
        </div>
      )}
    </div>
  );
}

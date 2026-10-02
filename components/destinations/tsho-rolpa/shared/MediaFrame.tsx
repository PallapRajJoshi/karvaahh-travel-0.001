import Image from "next/image";
import "./MediaFrame.css";

interface MediaFrameProps {
  src: string;
  alt: string;
  ratio?: "landscape" | "portrait" | "square" | "wide";
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/**
 * Thin wrapper around next/image with fill + responsive sizes, per site
 * convention. Ratio classes control aspect via CSS aspect-ratio.
 */
export default function MediaFrame({
  src,
  alt,
  ratio = "landscape",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
}: MediaFrameProps) {
  return (
    <div className={`tsho-media tsho-media--${ratio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

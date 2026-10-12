import Image from "next/image";
import type { ArtRef, ResolvedImage } from "@/lib/about/types";
import { MountainArt } from "./MountainArt";

interface PicProps {
  /** Resolved photo, or null to draw the built-in illustration. */
  image: ResolvedImage | null;
  art: ArtRef;
  sizes: string;
  /** Above-the-fold image (the hero) – preloaded as the LCP candidate. */
  preload?: boolean;
  /** Purely decorative image: empty alt, hidden from assistive tech. */
  decorative?: boolean;
  className?: string;
}

/**
 * Fills its positioned parent. Usable from server and client components – the
 * file-system check happens earlier, in resolveImage().
 */
export function Pic({ image, art, sizes, preload = false, decorative = false, className }: PicProps) {
  if (!image) {
    return <MountainArt tone={art.tone} seed={art.seed} className={className} />;
  }
  return (
    <Image
      src={image.src}
      alt={decorative ? "" : image.alt}
      fill
      sizes={sizes}
      preload={preload}
      className={className}
      style={{ objectFit: "cover", objectPosition: image.focal }}
    />
  );
}

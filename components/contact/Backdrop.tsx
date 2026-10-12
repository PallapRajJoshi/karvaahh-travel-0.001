import Image from "next/image";
import { ContactScene } from "./ContactScene";

type Props = {
  image: { src: string; alt: string } | null;
  variant?: "dawn" | "dusk";
  /** true only for the above-the-fold hero image (LCP). */
  priority?: boolean;
};

/** Photo when configured, otherwise the illustrated Himalayan scene. */
export function Backdrop({ image, variant = "dawn", priority = false }: Props) {
  if (image) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        quality={72}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="ct-backdrop__img"
      />
    );
  }
  return <ContactScene variant={variant} />;
}

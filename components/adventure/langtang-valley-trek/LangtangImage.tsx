import Image from "next/image";
import { images, type LangtangImageKey } from "@/data/adventure/langtang-valley-trek";

interface Props {
  id: LangtangImageKey | (string & {});
  sizes: string;
  priority?: boolean;
  className?: string;
  /** override alt when the same photo is used with different context */
  alt?: string;
}

/** `fill` image from the central registry. Parent must be position:relative with a size. */
export default function LangtangImage({ id, sizes, priority = false, className, alt }: Props) {
  const img = images[id as LangtangImageKey];
  if (!img) return null;
  return (
    <Image
      src={img.src}
      alt={alt ?? img.alt}
      fill
      sizes={sizes}
      preload={priority}
      fetchPriority={priority ? "high" : undefined}
      className={className}
      style={{ objectFit: "cover" }}
    />
  );
}

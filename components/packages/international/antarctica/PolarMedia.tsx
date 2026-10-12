import Image from "next/image";
import { Snowflake } from "lucide-react";
import { antarcticaImage, type AntarcticaImageId } from "@/data/antarctica/images";

/**
 * Photo with a designed polar fallback. Images without a verified photo
 * (or a CMS entry without one) render an ice-toned panel instead of a broken
 * frame. `decorative` hides the alt text when a caption already describes it.
 */
export default function PolarMedia({
  id,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className = "",
  decorative = false,
  preload = false,
  label,
}: {
  id?: AntarcticaImageId;
  sizes?: string;
  className?: string;
  decorative?: boolean;
  preload?: boolean;
  /** Fallback caption when there is no photo. */
  label?: string;
}) {
  const img = antarcticaImage(id);
  return (
    <span className={`an-media ${className}`.trim()}>
      {img ? (
        <Image src={img.src} alt={decorative ? "" : img.alt} fill sizes={sizes} className="an-media__img" preload={preload} />
      ) : (
        <span className="an-media__fallback" aria-hidden={label ? undefined : true}>
          <Snowflake size={28} aria-hidden="true" />
          {label && <span>{label}</span>}
        </span>
      )}
    </span>
  );
}

import type { AsiaImage } from "@/data/asia-destinations";
import SafeImage from "../../SafeImage";
import Flag from "./Flag";

/**
 * Photo with a designed fallback underneath: a region-toned gradient, a ridge
 * line and the flag. Destinations without a verified photo (or a photo that
 * fails to load) show the fallback instead of an unrelated stock image.
 */
export default function DestMedia({
  image,
  iso,
  label,
  tone,
  sizes,
  className = "",
}: {
  image?: AsiaImage;
  /** Country flag shown in the fallback; omit for single-country pages. */
  iso?: string;
  label: string;
  tone: [string, string];
  sizes: string;
  className?: string;
}) {
  return (
    <span
      className={`asia-media ${className}`.trim()}
      style={{ "--tone-a": tone[0], "--tone-b": tone[1] } as React.CSSProperties}
    >
      <span className="asia-media__fallback" aria-hidden="true">
        <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMax slice" focusable="false">
          <path d="M0 200V120l60-40 50 30 70-62 64 54 46-28 56 40 54-30v146z" fill="currentColor" opacity=".16" />
          <path d="M0 200v-46l80-34 60 22 90-48 80 44 90-30v92z" fill="currentColor" opacity=".24" />
        </svg>
        {iso && <span className="asia-media__flag"><Flag iso={iso} size={52} /></span>}
        <span className="asia-media__label">{label}</span>
      </span>
      <SafeImage src={image?.src} alt={image?.alt ?? ""} sizes={sizes} className="asia-media__img" />
    </span>
  );
}

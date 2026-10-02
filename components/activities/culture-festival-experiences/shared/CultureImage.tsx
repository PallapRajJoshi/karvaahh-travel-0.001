import Image from "next/image";
import { MEDIA, MEDIA_BASE, type MediaId } from "../data/media";

interface CultureImageProps {
  id: MediaId;
  sizes: string;
  priority?: boolean;
  /** Full-bleed backgrounds: placeholder shows no label. */
  decorative?: boolean;
  className?: string;
}

/** Deterministic tint so placeholders in a grid don't all look identical. */
function tone(id: string): number {
  let sum = 0;
  for (let i = 0; i < id.length; i += 1) sum += id.charCodeAt(i);
  return sum % 5;
}

/**
 * Fills its (position: relative) parent. Renders the real photo once its
 * registry entry is `ready`, otherwise a quiet labelled placeholder, so the
 * layout can be reviewed without any image ever being mislabelled.
 */
export default function CultureImage({ id, sizes, priority, decorative, className }: CultureImageProps) {
  const asset = MEDIA[id];
  if (asset.ready) {
    return (
      <Image
        src={`${MEDIA_BASE}/${asset.file}`}
        alt={asset.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={["cx-img", className].filter(Boolean).join(" ")}
      />
    );
  }
  return (
    <div className={`cx-ph cx-ph--${tone(id)} ${className ?? ""}`.trim()} aria-hidden="true">
      <svg className="cx-ph__pattern" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid slice" focusable="false">
        <defs>
          <pattern id={`cx-lattice-${id}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 4l16 16-16 16L4 20z" fill="none" stroke="currentColor" strokeWidth="0.6" />
            <circle cx="20" cy="20" r="1.4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="80" height="80" fill={`url(#cx-lattice-${id})`} />
      </svg>
      {decorative ? null : (
        <span className="cx-ph__label">
          <span className="cx-ph__subject">{asset.subject}</span>
          <span className="cx-ph__note">Photograph to be added</span>
        </span>
      )}
    </div>
  );
}

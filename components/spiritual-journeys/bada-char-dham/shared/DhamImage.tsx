import Image from "next/image";
import type { Direction, ImageAsset } from "../data/types";

/**
 * Renders next/image when the asset exists (image.available === true),
 * otherwise a designed, direction-specific landscape placeholder so the page
 * never shows a broken image. The wrapper is position:relative and takes its
 * size from the parent's CSS (aspect-ratio or explicit height).
 */

interface DhamImageProps {
  image: ImageAsset;
  direction: Direction;
  sizes: string;
  /** Unique, stable id used for SVG gradient ids. */
  uid: string;
  className?: string;
  /** Above-the-fold only. */
  eager?: boolean;
}

export default function DhamImage({ image, direction, sizes, uid, className = "", eager = false }: DhamImageProps) {
  const cls = `bcd-media bcd-media--${direction} ${className}`.trim();

  if (image.available) {
    return (
      <div className={cls}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="bcd-media__img"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
        />
      </div>
    );
  }

  const file = image.src.split("/").pop();
  return (
    <div className={`${cls} bcd-media--placeholder`} data-pending-image={file}>
      <HorizonArt direction={direction} uid={uid} />
      {process.env.NODE_ENV !== "production" && <span className="bcd-media__dev">Image pending: {file}</span>}
    </div>
  );
}

/* ------------------------------------------------------------------------ */

const SKY: Record<Direction, [string, string]> = {
  north: ["#142a40", "#7f9fbb"],
  west: ["#1a3440", "#e0a569"],
  east: ["#26314b", "#eeb07a"],
  south: ["#2c6e8f", "#cfe6e6"],
};

/** Abstract landscape per direction: Himalaya, Arabian Sea dusk, Bay of Bengal dawn, southern island. */
export function HorizonArt({ direction, uid }: { direction: Direction; uid: string }) {
  const g = `bcd-sky-${uid}`;
  const [top, bottom] = SKY[direction];

  return (
    <svg className="bcd-media__art" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={top} />
          <stop offset="1" stopColor={bottom} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${g})`} />

      {direction === "north" && (
        <g>
          <path d="M0 190 60 120 95 150 150 70 200 135 240 95 300 150 345 105 400 160V300H0Z" fill="#a9bfd1" />
          <path d="M150 70 132 96 150 90 164 104 178 100Z M345 105 332 122 346 118 356 126Z M240 95 228 112 242 108 252 116Z" fill="#f4f7fa" />
          <path d="M0 225 70 175 120 205 190 160 250 200 320 170 400 210V300H0Z" fill="#3e5c77" />
          <path d="M0 262 90 232 170 255 260 226 340 250 400 238V300H0Z" fill="#1d3247" />
          <path d="M150 300c20-22 60-30 90-44" stroke="#b9cfdf" strokeWidth="2" fill="none" opacity=".5" />
        </g>
      )}

      {direction === "west" && (
        <g>
          <circle cx="300" cy="196" r="30" fill="#f6cf8f" opacity=".95" />
          <rect y="196" width="400" height="104" fill="#1f5457" />
          <path d="M0 196h400" stroke="#f6cf8f" strokeOpacity=".5" />
          <Waves y={214} color="#8fc0bb" />
          <path d="M40 196V150l8-14 8 14v46M36 150h24" stroke="#122a30" strokeWidth="3" fill="#153137" />
        </g>
      )}

      {direction === "east" && (
        <g>
          <circle cx="110" cy="200" r="34" fill="#ffd9a3" />
          <rect y="200" width="400" height="100" fill="#243f5a" />
          <path d="M60 204h100" stroke="#ffd9a3" strokeOpacity=".7" strokeWidth="2" />
          <Waves y={220} color="#c9a37e" />
          <path d="M318 200c0-40 10-66 22-78 12 12 22 38 22 78Z" fill="#1c2b3f" />
        </g>
      )}

      {direction === "south" && (
        <g>
          <rect y="185" width="400" height="115" fill="#3f9aa3" />
          <path d="M0 185c80-10 150-8 220 0s130 6 180 0" fill="none" stroke="#e7f1ea" strokeOpacity=".7" />
          <path d="M210 190c40-14 110-16 190-8V196H210Z" fill="#2c5a4f" />
          <Waves y={208} color="#d8efee" />
          <path d="M0 262c90-10 160 4 250-6s120 2 150 0V300H0Z" fill="#e9dcc2" />
        </g>
      )}
    </svg>
  );
}

function Waves({ y, color }: { y: number; color: string }) {
  return (
    <g stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round" opacity=".55">
      {[0, 18, 36, 54, 72].map((dy, i) => (
        <path key={dy} d={`M${-20 + i * 14} ${y + dy}q20-6 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0`} />
      ))}
    </g>
  );
}

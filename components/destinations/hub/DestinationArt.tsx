import Image from "next/image";
import type { ReactNode } from "react";
import type { ArtTheme } from "@/lib/destinations/types";

interface ArtProps {
  theme: ArtTheme;
  /** Stable string used to vary the artwork per destination. */
  seed: string;
  /** Public image path. When absent, themed artwork is drawn instead. */
  src?: string;
  /** Alt text for real photos. Placeholder artwork is decorative and hidden from assistive tech. */
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/** Lightweight themed artwork shown until a real photograph is added for the destination. */
function ThemeArt({ theme, seed }: { theme: ArtTheme; seed: string }) {
  const h = hash(seed);
  const shift = (h % 60) - 30;
  const sunX = 70 + (h % 260);

  const g = (children: ReactNode) => (
    <svg
      className="dh-art__svg"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <g style={{ transform: `translateX(${shift}px)` }}>{children}</g>
    </svg>
  );

  switch (theme) {
    case "himalaya":
      return g(
        <>
          <circle className="dh-art__sun" cx={sunX} cy="78" r="22" />
          <path className="dh-art__s1" d="M-80 215 L-10 130 L30 172 L100 78 L172 176 L226 122 L300 188 L360 140 L480 222 V300 H-80Z" />
          <path className="dh-art__snow" d="M100 78 L124 112 L108 106 L100 122 L90 104 L76 112Z" />
          <path className="dh-art__s2" d="M-80 252 L-10 196 L62 240 L150 170 L232 244 L312 200 L390 248 L480 226 V300 H-80Z" />
          <path className="dh-art__s3" d="M-80 288 L40 256 L150 284 L262 258 L360 284 L480 262 V300 H-80Z" />
        </>,
      );
    case "spiritual":
      return g(
        <>
          <circle className="dh-art__ring" cx="200" cy="150" r="118" />
          <circle className="dh-art__ring" cx="200" cy="150" r="84" />
          <circle className="dh-art__sun" cx="200" cy="150" r="46" />
          <path className="dh-art__s1" d="M-80 248 L70 214 L150 236 L200 196 L196 176 L200 158 L204 176 L200 196 L250 236 L330 214 L480 248 V300 H-80Z" />
          <path className="dh-art__s3" d="M-80 282 L90 262 L200 280 L310 262 L480 282 V300 H-80Z" />
        </>,
      );
    case "wildlife":
      return g(
        <>
          <circle className="dh-art__sun" cx={sunX} cy="70" r="18" />
          <path className="dh-art__s1" d="M-80 210 Q40 150 150 200 T360 190 T480 210 V300 H-80Z" />
          <path className="dh-art__s2" d="M-80 250 Q60 200 180 244 T400 236 T480 250 V300 H-80Z" />
          <g className="dh-art__s3">
            <circle cx="64" cy="228" r="16" />
            <rect x="62" y="240" width="4" height="22" />
            <circle cx="138" cy="246" r="12" />
            <rect x="136" y="256" width="3" height="18" />
            <circle cx="300" cy="232" r="18" />
            <rect x="298" y="246" width="4" height="26" />
            <circle cx="352" cy="250" r="11" />
            <rect x="350" y="259" width="3" height="16" />
          </g>
          <path className="dh-art__s3" d="M-80 284 H480 V300 H-80Z" />
        </>,
      );
    case "beach":
      return g(
        <>
          <circle className="dh-art__sun" cx={sunX} cy="118" r="30" />
          <rect className="dh-art__sea" x="-80" y="140" width="560" height="160" />
          <path className="dh-art__s1" d="M-80 178 Q-20 168 40 178 T160 178 T280 178 T400 178 T520 178 V300 H-80Z" />
          <path className="dh-art__s2" d="M-80 214 Q-20 202 40 214 T160 214 T280 214 T400 214 T520 214 V300 H-80Z" />
          <path className="dh-art__s3" d="M-80 262 Q-20 246 40 262 T160 262 T280 262 T400 262 T520 262 V300 H-80Z" />
        </>,
      );
    case "desert":
      return g(
        <>
          <circle className="dh-art__sun" cx={sunX} cy="86" r="34" />
          <path className="dh-art__s1" d="M-80 214 Q20 160 120 206 T300 196 T480 214 V300 H-80Z" />
          <path className="dh-art__s2" d="M-80 252 Q60 204 190 246 T400 238 T480 252 V300 H-80Z" />
          <path className="dh-art__s3" d="M-80 288 Q80 262 210 284 T480 280 V300 H-80Z" />
        </>,
      );
    case "lake":
      return g(
        <>
          <circle className="dh-art__sun" cx={sunX} cy="64" r="20" />
          <path className="dh-art__s1" d="M-80 160 L-10 106 L60 146 L140 84 L220 152 L300 112 L380 154 L480 120 V170 H-80Z" />
          <rect className="dh-art__sea" x="-80" y="168" width="560" height="140" />
          <path className="dh-art__s2" d="M-80 168 L-10 222 L60 184 L140 246 L220 178 L300 218 L380 176 L480 210 V168 Z" opacity=".55" />
          <path className="dh-art__s3" d="M-80 250 Q-20 240 40 250 T160 250 T280 250 T400 250 T520 250 V300 H-80Z" />
        </>,
      );
    default:
      return g(
        <>
          <circle className="dh-art__sun" cx={sunX} cy="66" r="18" />
          <g className="dh-art__s1">
            <rect x="10" y="168" width="46" height="132" />
            <rect x="64" y="132" width="38" height="168" />
            <rect x="110" y="184" width="54" height="116" />
            <rect x="172" y="108" width="40" height="192" />
            <rect x="220" y="150" width="50" height="150" />
            <rect x="278" y="126" width="36" height="174" />
            <rect x="322" y="176" width="60" height="124" />
          </g>
          <path className="dh-art__s3" d="M-80 282 H480 V300 H-80Z" />
        </>,
      );
  }
}

export function DestinationArt({ theme, seed, src, alt, sizes, priority = false, className = "" }: ArtProps) {
  return (
    <div className={`dh-art dh-art--${theme} ${className}`.trim()}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="dh-art__img" />
      ) : (
        <ThemeArt theme={theme} seed={seed} />
      )}
    </div>
  );
}

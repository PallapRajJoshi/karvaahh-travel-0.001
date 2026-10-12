import { useId } from "react";

/**
 * Illustrated Himalayan scene used as the hero / final-CTA backdrop when no
 * photograph is configured (see IMAGES in lib/contact/content.ts).
 * Pure SVG: no request, no layout shift, themable via CSS variables.
 * Only `transform` is ever animated (two slow cloud drifts).
 */

type Props = { variant?: "dawn" | "dusk" };

export function ContactScene({ variant = "dawn" }: Props) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const sky = `sky${uid}`;
  const glow = `glow${uid}`;
  const far = `far${uid}`;
  const mid = `mid${uid}`;
  const mist = `mist${uid}`;
  const cloud = `cloud${uid}`;
  // "dusk" sits lower in the frame so headline text never lands on a summit.
  const drop = variant === "dusk" ? 240 : 0;

  return (
    <svg
      className={`ct-scene ct-scene--${variant}`}
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--s-top)" }} />
          <stop offset="0.55" style={{ stopColor: "var(--s-mid)" }} />
          <stop offset="1" style={{ stopColor: "var(--s-low)" }} />
        </linearGradient>
        <radialGradient id={glow} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" style={{ stopColor: "var(--s-glow)", stopOpacity: 0.95 }} />
          <stop offset="0.4" style={{ stopColor: "var(--s-glow)", stopOpacity: 0.28 }} />
          <stop offset="1" style={{ stopColor: "var(--s-glow)", stopOpacity: 0 }} />
        </radialGradient>
        <linearGradient id={far} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--s-far-top)" }} />
          <stop offset="0.5" style={{ stopColor: "var(--s-far-bottom)" }} />
        </linearGradient>
        <linearGradient id={mid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--s-mid-top)" }} />
          <stop offset="1" style={{ stopColor: "var(--s-mid-bottom)" }} />
        </linearGradient>
        <radialGradient id={cloud} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="0.55" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={mist} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.28" />
        </linearGradient>
      </defs>

      <rect width="1600" height="900" fill={`url(#${sky})`} />
      <circle cx="900" cy={430 + drop} r="440" fill={`url(#${glow})`} />

      {/* drifting cloud banks (soft gradient fills, transform-only animation) */}
      <g className="ct-scene__cloud ct-scene__cloud--a" opacity="0.55">
        <ellipse cx="300" cy="250" rx="300" ry="34" fill={`url(#${cloud})`} />
        <ellipse cx="470" cy="300" rx="220" ry="24" fill={`url(#${cloud})`} />
        <ellipse cx="1240" cy="205" rx="330" ry="30" fill={`url(#${cloud})`} />
      </g>
      <g className="ct-scene__cloud ct-scene__cloud--b" opacity="0.4">
        <ellipse cx="760" cy="335" rx="300" ry="26" fill={`url(#${cloud})`} />
        <ellipse cx="1420" cy="330" rx="240" ry="22" fill={`url(#${cloud})`} />
      </g>

      <g transform={drop ? `translate(0 ${drop})` : undefined}>
      {/* far range — absolute coordinates so the snow caps sit exactly on the peaks */}
      <path
        fill={`url(#${far})`}
        d="M0 900 L0 540 L90 480 L170 510 L260 410 L330 450 L420 360 L500 430 L580 400 L660 470 L740 420 L820 400 L900 250 L990 400 L1070 370 L1150 440 L1240 380 L1320 450 L1400 400 L1490 455 L1600 410 L1600 900 Z"
      />
      <g fill="#fff" opacity="0.92">
        <path d="M900 250 L876 295 L890 290 L899 308 L911 288 L927 295 Z" />
        <path d="M420 360 L393 387 L407 383 L418 396 L430 380 L444 381 Z" />
        <path d="M260 410 L233 440 L247 436 L258 447 L270 433 L281 422 Z" />
        <path d="M1240 380 L1213 398 L1227 395 L1238 408 L1250 393 L1264 401 Z" />
      </g>

      {/* mid range */}
      <path
        fill={`url(#${mid})`}
        d="M0 900 L0 660 L120 580 L210 620 L330 520 L420 590 L540 540 L640 610 L760 570 L880 640 L1000 570 L1100 520 L1210 600 L1320 560 L1440 620 L1600 580 L1600 900 Z"
      />
      <rect y="560" width="1600" height="340" fill={`url(#${mist})`} />

      {/* near ridge */}
      <path
        fill="var(--s-near)"
        d="M0 900 L0 770 L140 700 L260 740 L400 680 L520 740 L660 720 L800 770 L960 710 L1100 750 L1260 700 L1400 745 L1600 710 L1600 900 Z"
      />
      </g>
    </svg>
  );
}

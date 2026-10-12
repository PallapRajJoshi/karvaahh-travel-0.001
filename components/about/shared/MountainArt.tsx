import { useId } from "react";
import type { ArtTone } from "@/lib/about/types";

interface Palette {
  sky: [string, string];
  far: string;
  mid: string;
  near: string;
  sun: string;
}

const PALETTES: Record<ArtTone, Palette> = {
  dawn: { sky: ["#f3dcc0", "#9fb9cf"], far: "#8aa3ba", mid: "#5f7f9c", near: "#2f536f", sun: "#fff1d6" },
  ice: { sky: ["#eaf4fa", "#b9d6e8"], far: "#a9c4d8", mid: "#7fa3bf", near: "#4f7899", sun: "#ffffff" },
  dusk: { sky: ["#2a3b5c", "#c98b6b"], far: "#51608a", mid: "#33426b", near: "#1c2a47", sun: "#f3c59a" },
  gold: { sky: ["#f6e2b6", "#d6a863"], far: "#b7925a", mid: "#8d6d3f", near: "#5b4528", sun: "#fff3d0" },
  forest: { sky: ["#cfe3d7", "#7da595"], far: "#6c9486", mid: "#3f6d5f", near: "#1c3d34", sun: "#f2f6ea" },
  night: { sky: ["#0b1b2b", "#2a4a6a"], far: "#27425d", mid: "#183049", near: "#0d2033", sun: "#cfe0ee" },
};

const W = 800;
const H = 500;

/** Small deterministic PRNG so server and client always draw identical ridges. */
function mulberry32(seed: number): () => number {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function ridgePath(rand: () => number, baseY: number, amp: number, peaks: number, jagged: boolean): string {
  const step = W / peaks;
  const pts: Array<[number, number]> = [];
  for (let i = 0; i <= peaks; i += 1) {
    const x = Math.max(0, Math.min(W, Math.round(i * step + (rand() - 0.5) * step * 0.5)));
    const y = Math.round(baseY - amp * (0.35 + 0.65 * rand()));
    pts.push([x, y]);
    if (jagged && i < peaks) {
      const vx = Math.max(0, Math.min(W, Math.round(x + step * 0.5 + (rand() - 0.5) * step * 0.3)));
      pts.push([vx, Math.round(baseY - amp * 0.12 * rand())]);
    }
  }
  pts.sort((a, b) => a[0] - b[0]);
  const line = pts.map(([x, y]) => `${x},${y}`).join(" L");
  return `M0,${H} L0,${baseY} L${line} L${W},${baseY} L${W},${H} Z`;
}

interface MountainArtProps {
  tone: ArtTone;
  seed: number;
  className?: string;
}

/**
 * Built-in placeholder illustration: sky, sun and three ridge layers.
 * Used wherever a photograph has not been supplied yet. Purely decorative.
 */
export function MountainArt({ tone, seed, className }: MountainArtProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const p = PALETTES[tone];
  const rand = mulberry32(seed);
  const sunX = 140 + Math.round(rand() * 520);
  const far = ridgePath(rand, 330, 200, 6, true);
  const mid = ridgePath(rand, 390, 150, 7, true);
  const near = ridgePath(rand, 450, 90, 9, false);

  return (
    <svg
      className={className}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.sky[0]} />
          <stop offset="1" stopColor={p.sky[1]} />
        </linearGradient>
        <radialGradient id={`sun-${uid}`}>
          <stop offset="0" stopColor={p.sun} stopOpacity="0.95" />
          <stop offset="0.45" stopColor={p.sun} stopOpacity="0.35" />
          <stop offset="1" stopColor={p.sun} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#sky-${uid})`} />
      <circle cx={sunX} cy="170" r="110" fill={`url(#sun-${uid})`} />
      <path d={far} fill={p.far} />
      <path d={mid} fill={p.mid} />
      <path d={near} fill={p.near} />
    </svg>
  );
}

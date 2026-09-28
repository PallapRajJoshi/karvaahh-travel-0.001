import type { IconName } from "./types";

/** Inline stroke icons (24×24). Decorative by default — pair with visible text. */
const PATHS: Record<IconName, string> = {
  id: "M3 6h18v12H3zM7 10h4M7 14h6M15 10.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0",
  document: "M6 3h8l4 4v14H6zM14 3v4h4M9 12h6M9 16h6",
  copy: "M8 8h12v12H8zM4 16V4h12",
  layers: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
  boot: "M7 3v10l-3 3v4h16v-3l-6-2-2-3V3",
  rain: "M7 15a4 4 0 0 1 .5-8A5 5 0 0 1 17 8a3.5 3.5 0 0 1 0 7zM8 18l-1 3M12 18l-1 3M16 18l-1 3",
  sun: "M12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5",
  pill: "M9 4.5a4.2 4.2 0 0 1 6 6l-4.5 4.5a4.2 4.2 0 0 1-6-6zM7 7l6 6",
  water: "M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z",
  pace: "M12 7v5l3 2M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18",
  compass: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18M15.5 8.5l-2 5-5 2 2-5z",
  phone: "M8 2h8v20H8zM11 18h2",
  bag: "M5 8h14l-1 13H6zM9 8V6a3 3 0 0 1 6 0v2",
  hands: "M12 21V9M12 9C9 7 7 4 8 3c2 0 4 3 4 6zM12 9c3-2 5-5 4-6-2 0-4 3-4 6zM5 13c3 0 7 2 7 8M19 13c-3 0-7 2-7 8",
  leaf: "M5 19C5 10 11 5 20 4c0 9-5 15-14 15M5 19l7-7",
  walk: "M13 4a1.5 1.5 0 1 0 0 .1M11 8l-3 4 3 2v7M11 8l3 3 3 1M11 14l-3 7",
  horse: "M4 20v-6l3-5h6l3-3 3 1-1 3h-2l-1 4v6M8 14v6M13 14v6",
  palki: "M2 8h20M6 8v10h12V8M9 12h6M6 18l-2 3M18 18l2 3",
  car: "M4 16V10l2-4h12l2 4v6zM4 16v3M20 16v3M7 13h.01M17 13h.01",
  heli: "M3 5h18M12 5v3M6 11h9a4 4 0 0 1 0 8H8a2 2 0 0 1-2-2zM15 11l6 1M9 19v2M15 19v2",
  family: "M8 7a2 2 0 1 0 0 .1M16 7a2 2 0 1 0 0 .1M4 21v-6a4 4 0 0 1 8 0v6M12 21v-5a4 4 0 0 1 8 0v5",
  diya: "M3 14c2 4 16 4 18 0zM12 4c2 3 2 5 0 7c-2-2-2-4 0-7zM8 18v2h8v-2",
  mountain: "M2 20l7-12 4 6 3-4 6 10zM9 8l2 3",
  lotus: "M12 5c2 3 2 7 0 11c-2-4-2-8 0-11zM12 16c-3 0-7-2-8-6 3 0 6 2 8 6zM12 16c3 0 7-2 8-6-3 0-6 2-8 6zM4 19h16",
  senior: "M11 4a1.5 1.5 0 1 0 0 .1M10 8l-2 6 3 1v6M10 8l3 3M16 11v10",
  shield: "M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z",
};

export function Icon({ name, size = 24, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}

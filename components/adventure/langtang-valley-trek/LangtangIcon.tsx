/** Inline stroke icons — no icon library. 24×24, currentColor. */
const paths: Record<string, string> = {
  boot: "M6 3v9l-2 3v4h16v-2c0-2-2-3-4-3h-3l-1-3V3M6 8h4M6 11h4",
  mountain: "M3 20l6-10 3 5 2-3 7 8H3zM9 10l1.5 2.5M14 12l1 1.5",
  layers: "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5",
  sun: "M12 7a5 5 0 100 10 5 5 0 000-10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4",
  drop: "M12 3s-6 7-6 11a6 6 0 0012 0c0-4-6-11-6-11z",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4",
  leaf: "M5 19c0-9 6-14 15-14 0 9-5 15-14 15M5 19l7-7",
  permit: "M6 3h9l4 4v14H6V3zM14 3v5h5M9 13h7M9 17h5",
  park: "M12 3l5 8h-3l4 6H6l4-6H7l5-8zM12 17v4",
  guide: "M12 4a3 3 0 110 6 3 3 0 010-6zM6 21v-3a6 6 0 0112 0v3M16 3l4 1-1 4",
  road: "M8 3L4 21M16 3l4 18M12 5v2M12 11v2M12 17v2",
  bed: "M3 18V7M3 14h18v4M21 14v-2a3 3 0 00-3-3h-7v5M7 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
  signal: "M4 20h2v-3H4zM9 20h2v-6H9zM14 20h2v-9h-2zM19 20h2V7h-2z",
  sos: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 8v5M12 16h.01",
  arrow: "M5 12h14M13 6l6 6-6 6",
  down: "M12 5v14M6 13l6 6 6-6",
  check: "M5 12l4 4 10-10",
  cross: "M6 6l12 12M18 6L6 18",
  plus: "M12 5v14M5 12h14",
  info: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 11v6M12 7h.01",
  clock: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3 2",
  altitude: "M3 20l7-12 4 6 2-3 5 9H3zM17 4v5M15 6l2-2 2 2",
  expand: "M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5",
};

export type IconName = keyof typeof paths;

export default function LangtangIcon({ name, size = 22, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={paths[name]} />
    </svg>
  );
}

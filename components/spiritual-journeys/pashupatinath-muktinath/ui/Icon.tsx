import type { IconName } from "../data/types";

/** Inline stroke icons (24×24). Decorative by default. */
const PATHS: Record<IconName, string> = {
  temple: "M12 2.5 5 7h14zM6.5 7v3M17.5 7v3M4 10h16M6 10l-2 3.5h16L18 10M7 13.5V21M17 13.5V21M10 21v-4h4v4M3 21h18",
  lake: "M2.5 15l5.5-8 3.5 5 2.5-3.5 5.5 6.5M2.5 19c1.6 0 1.6-1 3.2-1s1.6 1 3.2 1 1.6-1 3.2-1 1.6 1 3.2 1 1.6-1 3.2-1",
  town: "M3 21V11l5-4 5 4v10M13 21v-7l4-3 4 3v7M6 21v-4h4v4M2 21h20M8 3l2 2",
  shrine: "M4 21h16M6 21v-6h12v6M12 3l-5 4.5h10zM8 7.5V11h8V7.5M5 11h14l-1 4H6zM11 21v-3h2v3",
  mountain: "M2 20 9 7l4 6 2.5-3.5L22 20zM7.8 9.4l1.2 1.6 1.4-1.4",
  river: "M4 3c3 3 1 6 4 9s1 6 4 9M12 3c3 3 1 6 4 9s1 6 4 9",
  flame: "M12 21c-3.5 0-6-2.5-6-6 0-3.5 3-5.5 3.5-9 2.5 1.5 3 3.5 3 5 .8-.6 1.5-1.8 1.6-3 2 1.6 3.9 4.2 3.9 7 0 3.5-2.5 6-6 6zM12 21c-1.5 0-2.5-1.1-2.5-2.5S12 15 12 15s2.5 2.1 2.5 3.5S13.5 21 12 21z",
  drop: "M12 3s6.5 7 6.5 11.5a6.5 6.5 0 0 1-13 0C5.5 10 12 3 12 3z",
  road: "M8 3 4 21M16 3l4 18M12 4v3M12 10v3M12 16v4",
  plane: "M10.5 3.5c0-1 .7-1.5 1.5-1.5s1.5.5 1.5 1.5V9l8 4.5v2l-8-2.5v5l2.5 2V22L12 21l-4 1v-1.5l2.5-2v-5l-8 2.5v-2l8-4.5z",
  sun: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4",
  wind: "M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h7",
  snow: "M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11M9.5 3.5 12 6l2.5-2.5M9.5 20.5 12 18l2.5 2.5",
  rain: "M7 15a4.5 4.5 0 1 1 1-8.9A5.5 5.5 0 0 1 18.5 8 3.5 3.5 0 0 1 18 15zM8 18l-1 3M12 18l-1 3M16 18l-1 3",
  bed: "M3 19V6M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-7v6M6.5 11.5a1.5 1.5 0 1 0 0-.01",
  bowl: "M3 11h18a9 9 0 0 1-18 0zM8 8c0-1.5 1-2 1-3.5M12 8c0-1.5 1-2 1-3.5M16 8c0-1.5 1-2 1-3.5",
  shield: "M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6zM8.5 12l2.5 2.5 4.5-5",
  leaf: "M5 19C5 10 11 4 20 4c0 9-6 15-15 15zM5 19l8-8",
  camera: "M4 7h3.5L9 5h6l1.5 2H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zM12 9.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z",
  users: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.3a3.5 3.5 0 0 1 0 6.4M18 14.3c2 .8 3.5 2.8 3.5 5.7",
  check: "M4.5 12.5l5 5 10-11",
  compass: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM15.5 8.5l-2 5-5 2 2-5z",
  prayer: "M12 21V9.5c0-1.5-1-2.5-2-4L8.5 3M12 9.5c0-1.5 1-2.5 2-4L15.5 3M8.5 3 6 11l3 4v6M15.5 3 18 11l-3 4v6",
  backpack: "M8 6V4.5A1.5 1.5 0 0 1 9.5 3h5A1.5 1.5 0 0 1 16 4.5V6M6 21h12a1 1 0 0 0 1-1v-9a5 5 0 0 0-5-5h-4a5 5 0 0 0-5 5v9a1 1 0 0 0 1 1zM8 14h8v4H8z",
  document: "M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8zM14 3v5h5M8.5 13h7M8.5 17h5",
  heart: "M12 20s-7.5-4.5-7.5-10A4.3 4.3 0 0 1 12 7.3 4.3 4.3 0 0 1 19.5 10c0 5.5-7.5 10-7.5 10z",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
};

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  /** Provide only when the icon carries meaning not present in nearby text. */
  label?: string;
}

export function Icon({ name, size = 24, className, label }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}

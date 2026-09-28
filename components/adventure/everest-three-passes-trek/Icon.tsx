import type { IconName } from "@/data/adventure/everest-three-passes-trek/types";

/** Inline stroke icons (24×24). No icon library, no network requests. */
const PATHS: Record<IconName, string> = {
  permit: "M7 3h7l5 5v13H7z M14 3v5h5 M10 13h6 M10 17h4",
  park: "M12 3l-5 8h3l-4 6h12l-4-6h3z M12 17v4",
  guide: "M12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M6 21v-4a6 6 0 0 1 12 0v4 M18 4l3 3-3 3",
  plane: "M3 13l7-1 4-8h2l-2 8 5 1 2-3h2l-1 4 1 4h-2l-2-3-5 1 2 8h-2l-4-8-7-1z",
  road: "M8 3L4 21 M16 3l4 18 M12 4v3 M12 10v3 M12 16v3",
  house: "M3 11l9-7 9 7 M5 10v10h14V10 M10 20v-6h4v6",
  signal: "M5 20v-3 M10 20v-7 M15 20v-11 M20 20V4",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4",
  cash: "M3 7h18v10H3z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M6 10v4 M18 10v4",
  boot: "M7 3h5v8l6 3c1.5.7 3 2 3 4v2H4V3z M4 16h17 M12 11h-3",
  lungs: "M12 4v8 M12 12l-3-2 M12 12l3-2 M9 7c-3 0-5 5-5 10 0 2 1 3 3 3s2-1 2-3z M15 7c3 0 5 5 5 10 0 2-1 3-3 3s-2-1-2-3z",
  layers: "M12 3l9 5-9 5-9-5z M3 13l9 5 9-5 M3 17l9 5 9-5",
  water: "M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z",
  snow: "M12 2v20 M3.3 7l17.4 10 M3.3 17L20.7 7 M9 4l3 2 3-2 M9 20l3-2 3 2",
  radio: "M5 12a7 7 0 0 1 14 0 M8 12a4 4 0 0 1 8 0 M12 12v9 M9 21h6",
  mountain: "M3 20l6-10 4 6 3-4 5 8z M9 10l2 3",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 2",
  gauge: "M4 18a8 8 0 1 1 16 0 M12 18l4-6",
  arrow: "M5 12h14 M13 6l6 6-6 6",
  chevron: "M6 9l6 6 6-6",
  close: "M6 6l12 12 M18 6L6 18",
  phone: "M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z",
};

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      className={["etp-icon", className].filter(Boolean).join(" ")}
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

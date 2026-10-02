import type { IconName } from "./data/types";

/**
 * Inline SVG icon set (no icon library dependency).
 * 24x24 grid, 1.7 stroke, currentColor.
 */
const PATHS: Record<IconName, React.ReactNode> = {
  road: (
    <>
      <path d="M8 3 4 21" />
      <path d="M16 3l4 18" />
      <path d="M12 4v3M12 10.5v3M12 17v3" />
    </>
  ),
  jeep: (
    <>
      <path d="M3 15v-3.5L5.5 7h10l3.5 4.5V15" />
      <path d="M3 15h18M9 7v4.5M3 11.5h16" />
      <circle cx="7.5" cy="16.5" r="2" />
      <circle cx="16.5" cy="16.5" r="2" />
    </>
  ),
  motorcycle: (
    <>
      <circle cx="5.5" cy="16" r="3" />
      <circle cx="18.5" cy="16" r="3" />
      <path d="M8.5 16h4l3-6h-4M15.5 10l-1-3h2.5M12 16l-2-5H6" />
    </>
  ),
  trek: (
    <>
      <circle cx="13" cy="4.5" r="1.7" />
      <path d="M11 21l2-6-3-3 1-4.5 3.5 1.5 2 3" />
      <path d="M6 13l3.5-2M18 8v13" />
    </>
  ),
  bike: (
    <>
      <circle cx="5.5" cy="16" r="3.5" />
      <circle cx="18.5" cy="16" r="3.5" />
      <path d="M5.5 16 9 8h5l4.5 8M9 8 12 16M14 8l-1-3h2.5" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  mountain: (
    <>
      <path d="m3 20 6-11 4 6 2-3 6 8H3Z" />
      <path d="m7.5 12.5 1.5-1 1.5 1" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  alert: (
    <>
      <path d="M12 3 2.5 20h19L12 3Z" />
      <path d="M12 10v4.5M12 17.5v.2" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5.5a3 3 0 0 1 0 5.5M18 14.5c1.9.8 3 2.5 3 5.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.5 3 8 7.5 9.5 4.5-1.5 7.5-5 7.5-9.5V6L12 3Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  backpack: (
    <>
      <path d="M8 6a4 4 0 0 1 8 0v1H8V6Z" />
      <rect x="5" y="7" width="14" height="14" rx="3" />
      <path d="M9 14h6M9 17.5h6" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8" />
    </>
  ),
  water: <path d="M12 3s6 6.2 6 10.5A6 6 0 0 1 6 13.5C6 9.2 12 3 12 3Z" />,
  doc: (
    <>
      <path d="M6 3h8l4 4v14H6V3Z" />
      <path d="M14 3v4h4M9 12h6M9 15.5h6" />
    </>
  ),
  pill: (
    <>
      <rect x="2.5" y="8" width="19" height="8" rx="4" transform="rotate(-35 12 12)" />
      <path d="m8.8 8.8 6.4 6.4" />
    </>
  ),
  map: (
    <>
      <path d="m3 6.5 6-2.5 6 2.5 6-2.5v13.5l-6 2.5-6-2.5-6 2.5V6.5Z" />
      <path d="M9 4v13.5M15 6.5V20" />
    </>
  ),
  heart: (
    <path d="M12 20s-7.5-4.4-7.5-10A4.2 4.2 0 0 1 12 7.6 4.2 4.2 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10Z" />
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <path d="M8.2 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.8" />
    </>
  ),
  culture: (
    <>
      <path d="M3 10 12 4l9 6H3Z" />
      <path d="M5.5 10v8M10 10v8M14 10v8M18.5 10v8M3.5 20.5h17" />
    </>
  ),
  support: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19c0 1.7-1.8 2.5-4 2.5" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19C4 11 9 5 20 4c0 11-5 16-13 15" />
      <path d="M5 19c3-5 6-8 10-10" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3.5 9 4.5-9 4.5L3 8l9-4.5Z" />
      <path d="m3 12 9 4.5 9-4.5M3 16l9 4.5 9-4.5" />
    </>
  ),
  footwear: (
    <>
      <path d="M3.5 17v-6l4-1.5 2 3 5 1.5c2.5.7 6.5 1 6.5 3.5V17H3.5Z" />
      <path d="M3.5 17.5h17M8 10.5l-.6 2.5" />
    </>
  ),
  altitude: (
    <>
      <path d="m2.5 20 6.5-11 3 5 2-3 7.5 9h-19Z" />
      <path d="M17 3v5M14.5 5.5 17 3l2.5 2.5" />
    </>
  ),
  family: (
    <>
      <circle cx="8" cy="6" r="2.2" />
      <circle cx="16.5" cy="7.5" r="1.8" />
      <path d="M4 20v-5.5a4 4 0 0 1 8 0V20M13.5 20v-4a3 3 0 0 1 6 0v4" />
    </>
  ),
  paw: (
    <>
      <circle cx="6.5" cy="11" r="1.8" />
      <circle cx="10" cy="6.5" r="1.8" />
      <circle cx="14.5" cy="6.5" r="1.8" />
      <circle cx="18" cy="11" r="1.8" />
      <path d="M12 12c-3 0-5.5 3-5.5 5.2 0 1.7 1.6 2.3 3 1.8.9-.3 1.7-.5 2.5-.5s1.6.2 2.5.5c1.4.5 3-.1 3-1.8C17.5 15 15 12 12 12Z" />
    </>
  ),
  trash: (
    <>
      <path d="M4.5 7h15M9.5 7V4.5h5V7M6.5 7l1 13h9l1-13" />
      <path d="M10 11v6M14 11v6" />
    </>
  ),
  store: (
    <>
      <path d="M4 9.5 5.5 4h13L20 9.5" />
      <path d="M4 9.5c0 1.7 1.3 2.5 2.7 2.5S9.3 11.2 9.3 9.5c0 1.7 1.3 2.5 2.7 2.5s2.7-.8 2.7-2.5c0 1.7 1.3 2.5 2.7 2.5S20 11.2 20 9.5" />
      <path d="M5.5 12v8h13v-8M10 20v-4.5h4V20" />
    </>
  ),
  prev: <path d="m14.5 5-7 7 7 7" />,
  next: <path d="m9.5 5 7 7-7 7" />,
  copy: (
    <>
      <rect x="8.5" y="8.5" width="12" height="12" rx="2" />
      <path d="M15.5 8.5V5a1.5 1.5 0 0 0-1.5-1.5H5A1.5 1.5 0 0 0 3.5 5v9A1.5 1.5 0 0 0 5 15.5h3.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H10l-4.5 4v-4H4V5Z" />
      <path d="M8.5 9.5h7M8.5 12.5h4" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}

/** Understated mountain-ridge divider used beside headings. */
export function MountainDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 14"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className ?? "rt-divider"}
    >
      <path d="M1 12h26l7-9 6 7 4-4 5 6h46" />
    </svg>
  );
}

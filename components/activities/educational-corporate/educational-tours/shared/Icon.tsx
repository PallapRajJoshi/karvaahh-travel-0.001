/* Inline SVG icon set (no icon library). 24×24, stroke-based. */

const PATHS = {
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z M12 9a3 3 0 100 6 3 3 0 000-6z",
  compass: "M12 2a10 10 0 100 20 10 10 0 000-20z M16 8l-2 6-6 2 2-6z",
  users: "M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2 M10 3a4 4 0 100 8 4 4 0 000-8z M21 20v-2a4 4 0 00-3-3.9 M16 3.1a4 4 0 010 7.8",
  bulb: "M9 18h6 M10 21h4 M12 3a6 6 0 00-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0012 3z",
  layers: "M12 2l10 5-10 5L2 7z M2 12l10 5 10-5 M2 17l10 5 10-5",
  bookmark: "M6 3h12v18l-6-4-6 4z",
  route: "M6 19a2 2 0 100-4 2 2 0 000 4z M18 9a2 2 0 100-4 2 2 0 000 4z M8 17h6a3 3 0 000-6h-4a3 3 0 010-6h4",
  book: "M4 5a2 2 0 012-2h5v17H6a2 2 0 00-2 2z M20 5a2 2 0 00-2-2h-5v17h5a2 2 0 012 2z",
  shield: "M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z M9 12l2 2 4-4",
  bus: "M5 4h14a1 1 0 011 1v11H4V5a1 1 0 011-1z M4 11h16 M7 19v2 M17 19v2 M7.5 15.5h.01 M16.5 15.5h.01",
  bed: "M3 20V6 M3 14h18v6 M21 14v-2a3 3 0 00-3-3h-7v5",
  siren: "M7 18v-6a5 5 0 0110 0v6 M5 21h14 M12 2v2 M3 8l1.5 1 M21 8l-1.5 1",
  heart: "M12 21s-8-5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 6-8 11-8 11z",
  pulse: "M3 12h4l2-6 4 12 2-6h6",
  leaf: "M5 19C5 9 11 4 20 4c0 9-5 15-15 15z M5 19c3-5 6-8 10-10",
  map: "M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z M9 4v14 M15 6v14",
  landmark: "M3 21h18 M5 21V10 M9 21V10 M15 21V10 M19 21V10 M2 10l10-7 10 7z",
  flask: "M9 3h6 M10 3v6L4 19a2 2 0 002 3h12a2 2 0 002-3l-6-10V3",
  tree: "M12 22v-5 M12 17c-4 0-6-3-5-6-2-1-2-5 1-6 1-3 7-3 8 0 3 1 3 5 1 6 1 3-1 6-5 6z",
  paw: "M12 13c-3 0-5 2.5-5 4.5 0 1.5 1.5 2.5 3 2.5h4c1.5 0 3-1 3-2.5 0-2-2-4.5-5-4.5z M6 10a1.5 2 0 100-4 1.5 2 0 000 4z M18 10a1.5 2 0 100-4 1.5 2 0 000 4z M10 7a1.5 2 0 100-4 1.5 2 0 000 4z M14 7a1.5 2 0 100-4 1.5 2 0 000 4z",
  globe: "M12 2a10 10 0 100 20 10 10 0 000-20z M2 12h20 M12 2c3 3 4 6.5 4 10s-1 7-4 10c-3-3-4-6.5-4-10s1-7 4-10z",
  mountain: "M2 20l7-13 4 7 3-4 6 10z",
  camera: "M4 8h3l2-3h6l2 3h3a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z M12 10a4 4 0 100 8 4 4 0 000-8z",
  clipboard: "M9 3h6v3H9z M7 5H5a1 1 0 00-1 1v15a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1h-2 M8 12h8 M8 16h6",
  pencil: "M4 20l1-5L16 4l4 4L9 19z M14 6l4 4",
  mail: "M3 5h18v14H3z M3 6l9 7 9-7",
  phone: "M5 3h4l2 5-2.5 1.5a11 11 0 006 6L16 13l5 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z",
  arrow: "M5 12h14 M13 6l6 6-6 6",
  check: "M5 12l5 5L20 7",
  plus: "M12 5v14 M5 12h14",
  chevron: "M6 9l6 6 6-6",
  close: "M6 6l12 12 M18 6L6 18",
  cap: "M2 9l10-5 10 5-10 5z M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5",
  briefcase: "M3 8h18v12H3z M8 8V5h8v3 M3 13h18",
  flag: "M5 21V4 M5 4h12l-2 4 2 4H5",
  clock: "M12 3a9 9 0 100 18 9 9 0 000-18z M12 7v5l3 2",
  palette: "M12 3a9 9 0 100 18c1.5 0 2-1 1.5-2-.6-1.3.2-2.5 1.6-2.5H17a4 4 0 004-4c0-5-4-9.5-9-9.5z M7.5 11h.01 M10 7.5h.01 M14.5 7.5h.01",
  search: "M11 4a7 7 0 100 14 7 7 0 000-14z M21 21l-5-5",
  expand: "M4 9V4h5 M20 9V4h-5 M4 15v5h5 M20 15v5h-5",
} as const;

export type IconName = keyof typeof PATHS;

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}

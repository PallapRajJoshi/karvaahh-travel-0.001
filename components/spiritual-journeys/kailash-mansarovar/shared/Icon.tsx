import type { ReactNode, SVGProps } from "react";

/**
 * Inline stroke icon set for the Kailash page. Kept local (no icon library) to
 * match project convention and avoid shipping unused glyphs.
 */
const ICONS = {
  mountain: <><path d="M2.5 20 9.5 8l3.5 6 2-3.5L21.5 20z" /><path d="m7.6 11.2 1.9 1.5 1.7-1.5" /></>,
  lake: <><path d="m5 11 4-6 3 4 2-2 4 4" /><path d="M3 15c2 0 2-1.5 4.5-1.5S10 15 12 15s2-1.5 4.5-1.5S19 15 21 15" /><path d="M3 19c2 0 2-1.5 4.5-1.5S10 19 12 19s2-1.5 4.5-1.5S19 19 21 19" /></>,
  pin: <><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21z" /><circle cx="12" cy="10" r="2.3" /></>,
  pass: <><path d="M3 20 12 7l9 13z" /><path d="M12 7V2.5l4 1.6-4 1.6" /></>,
  route: <><circle cx="6" cy="18" r="2" /><circle cx="18" cy="6" r="2" /><path d="M8 18h6.5a3.5 3.5 0 0 0 0-7h-5a3.5 3.5 0 0 1 0-7H16" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></>,
  helicopter: <><path d="M3 4.5h16M11 4.5V8" /><path d="M6.5 13a5 5 0 0 1 5-5h2.5a4 4 0 0 1 4 4v1.5h-11.5z" /><path d="M6.5 12H2.5l.5-2.5" /><path d="M9.5 13.5v3.5m5-3.5v3.5M7 17h11" /></>,
  footprints: <><path d="M8 15c-1.6 0-2.6-1.6-2.6-4S6.4 5 8.2 5 10.6 8 10.6 10.5 9.6 15 8 15z" /><path d="M6 18a2 2 0 0 0 4 0" /><path d="M16 11c-1.6 0-2.6-1.6-2.6-4S14.4 1.5 16.2 1.5 18.6 4 18.6 6.5 17.6 11 16 11z" /><path d="M14 14a2 2 0 0 0 4 0" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  wind: <><path d="M3 8h11a3 3 0 1 0-3-3" /><path d="M3 12h16a3 3 0 1 1-3 3" /><path d="M3 16h7" /></>,
  snow: <><path d="M12 2v20M3.5 7l17 10M20.5 7l-17 10" /><path d="m9 3.5 3 2 3-2M9 20.5l3-2 3 2" /></>,
  altitude: <><path d="M2.5 20 8.5 10l4 6 2-3 5 7z" /><path d="M18.5 3v6M16 5.5 18.5 3 21 5.5" /></>,
  thermometer: <><path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z" /><path d="M12 11v6" /></>,
  droplet: <path d="M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11z" />,
  bed: <><path d="M3 18V6M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5" /><circle cx="7" cy="11" r="1.8" /></>,
  utensils: <><path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10" /><path d="M17 21V3c-2 1.5-3 4-3 7h3" /></>,
  signal: <path d="M5 18v-2M9.5 18v-5M14 18v-8M18.5 18V6" />,
  battery: <><rect x="3" y="7" width="16" height="10" rx="2" /><path d="M22 11v2M7 10v4M10.5 10v4" /></>,
  passport: <><rect x="5" y="3" width="14" height="18" rx="2" /><circle cx="12" cy="10" r="3" /><path d="M9 16h6" /></>,
  shield: <><path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6z" /><path d="m9 12 2 2 4-4" /></>,
  heart: <><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.3 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z" /><path d="M8 12h2l1-2 2 4 1-2h2" /></>,
  alert: <><path d="M12 3.5 2.5 20h19z" /><path d="M12 10v4M12 17h.01" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  leaf: <><path d="M5 19C5 10 10 5 20 4c-.5 10-5.5 15-14 15z" /><path d="M5 19c3-4 6-6.5 9-8" /></>,
  camera: <><path d="M4 8h3l1.5-2h7L17 8h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></>,
  flags: <><path d="M2 7c4 3 8 4 20 2" /><path d="M5 8.4v4.6h3V9.6M10.5 9.8v4.7h3V10M16 9.8v4.5h3V9.4" /></>,
  monastery: <><path d="M3 21h18M5 21v-8h14v8M8 13V9h8v4M10 9V6h4v3M12 6V3" /><path d="M10 21v-4h4v4" /></>,
  road: <path d="M8 3 4 21M16 3l4 18M12 4v3M12 10v3M12 16v4" />,
  sunrise: <><path d="M3 18h18M6.5 18a5.5 5.5 0 0 1 11 0" /><path d="M12 5v4M5 9.5l2 1.5M19 9.5l-2 1.5M8 21h8" /></>,
  meditation: <><circle cx="12" cy="5" r="2" /><path d="M12 8v5M7 11l5 2 5-2M5 18c2-2.5 4.5-3 7-3s5 .5 7 3M5 18h14" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 6" /></>,
  valley: <><path d="M2 18 8 7l4 6 4-6 6 11" /><path d="M9 18c1-1 2-1.5 3-1.5s2 .5 3 1.5" /></>,
  plateau: <><path d="M2 17h20M3 17l4-5h10l4 5" /><path d="m9 8 2-2 2 2" /></>,
  wall: <><path d="M3 20h18M4 20v-7h16v7M4 13l2-3h12l2 3" /><path d="M8 16.5h2M14 16.5h2" /></>,
  cloud: <path d="M7 18a4 4 0 0 1-.5-8A5.5 5.5 0 0 1 17 9a4.5 4.5 0 0 1 .5 9z" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  bus: <><path d="M4 16V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8z" /><path d="M4 12h16M7 19v-3M17 19v-3" /></>,
  plane: <path d="M21 15.5 13.5 11V5a1.5 1.5 0 0 0-3 0v6L3 15.5V17l7.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-4.5L21 17z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6 8.5 7 8.5-7" /></>,
  message: <><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9.5h8M8 12.5h5" /></>,
  phone: <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
  document: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></>,
  firstaid: <><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M9 6V4h6v2M12 10v6M9 13h6" /></>,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof ICONS;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  /** Provide only when the icon carries meaning not present in adjacent text. */
  label?: string;
}

export default function Icon({ name, label, className = "", ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`km-icon ${className}`.trim()}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
      focusable="false"
      {...rest}
    >
      {ICONS[name]}
    </svg>
  );
}

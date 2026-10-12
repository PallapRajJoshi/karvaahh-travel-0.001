import type { LegalIconName } from "@/lib/legal/types";

/**
 * Inline SVG icon set (the project prefers inline SVGs over icon libraries).
 * Decorative by default — pass `label` when an icon carries meaning on its own.
 */

const PATHS: Record<LegalIconName, string[]> = {
  info: ["M12 21a9 9 0 100-18 9 9 0 000 18z", "M12 11v5", "M12 8h.01"],
  alert: ["M12 3.5l10 17.5H2L12 3.5z", "M12 10v4.5", "M12 17.8h.01"],
  shield: ["M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z", "M8.5 12l2.5 2.5 4.5-5"],
  plane: [
    "M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
  ],
  helicopter: [
    "M3 5.5h18",
    "M12 5.5V9",
    "M5 15a5 4.5 0 015-4.5h4.5A4.5 4.5 0 0119 15v.5H5V15z",
    "M19 12.5l3-1.5",
    "M6 19.5h12",
    "M8.5 15.5v4",
    "M15.5 15.5v4",
  ],
  compass: ["M12 21a9 9 0 100-18 9 9 0 000 18z", "M15.8 8.2l-2.1 5.5-5.5 2.1 2.1-5.5 5.5-2.1z"],
  mountain: ["M2.5 20l6.5-11 4 6.5 3-4.5 5.5 9H2.5z", "M9 9l2 3.2"],
  calendar: ["M4 5.5h16V20H4z", "M4 10.5h16", "M8.5 3v4", "M15.5 3v4"],
  clipboard: ["M9 4h6v3H9z", "M7 5.5H5V21h14V5.5h-2", "M9 12h6", "M9 16h6"],
  cookie: [
    "M12 3a9 9 0 109 9 4 4 0 01-4-4 4 4 0 01-5-5z",
    "M9 10h.01",
    "M8.5 15h.01",
    "M13 16h.01",
    "M15.5 12.5h.01",
  ],
  mail: ["M3 6h18v12H3z", "M3.5 7l8.5 6 8.5-6"],
  phone: [
    "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  ],
  whatsapp: [
    "M4 20l1.3-4.2A8 8 0 118.2 19L4 20z",
    "M9.2 8.8c0 3 2.8 5.9 5.8 5.9l1-1.7-2-1-1 .8a3.5 3.5 0 01-1.7-1.7l.8-1-1-2-1.9.7z",
  ],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  chevron: ["M6 9l6 6 6-6"],
  lock: ["M6 11h12v9.5H6z", "M8.5 11V8a3.5 3.5 0 017 0v3"],
  hotel: ["M4 20.5V8.5l8-4.5 8 4.5v12", "M9.5 20.5V14h5v6.5", "M8 10.5h.01", "M12 10.5h.01", "M16 10.5h.01"],
  pin: ["M12 21s7-6.2 7-11.5a7 7 0 10-14 0C5 14.8 12 21 12 21z", "M12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"],
  heart: ["M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z"],
  route: ["M6 19.5a2 2 0 100-4 2 2 0 000 4z", "M18 8.5a2 2 0 100-4 2 2 0 000 4z", "M8 17.5h7a3 3 0 000-6H9a3 3 0 010-6h7"],
  users: [
    "M9 11a3 3 0 100-6 3 3 0 000 6z",
    "M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6",
    "M16 5.2a3 3 0 010 5.6",
    "M18 14.3c1.8.8 3 2.6 3 4.7",
  ],
  refund: ["M4 12a8 8 0 0113.7-5.6L20 8.5", "M20 4v4.5h-4.5", "M20 12a8 8 0 01-13.7 5.6L4 15.5", "M4 20v-4.5h4.5"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
};

interface LegalIconProps {
  name: LegalIconName;
  size?: number;
  className?: string;
  /** Accessible name. When omitted the icon is hidden from assistive technology. */
  label?: string;
}

export function LegalIcon({ name, size = 20, className, label }: LegalIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {PATHS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

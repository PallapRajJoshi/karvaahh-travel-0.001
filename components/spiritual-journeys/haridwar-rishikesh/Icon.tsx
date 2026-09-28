/**
 * Inline SVG icon set for the Haridwar & Rishikesh page.
 * Decorative by default (aria-hidden). Stroke inherits currentColor.
 */
const PATHS = {
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  cross: <path d="M7 7l10 10M17 7L7 17" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  diya: (
    <>
      <path d="M12 3c1.8 2.2 2.6 3.9 2.6 5.2a2.6 2.6 0 0 1-5.2 0C9.4 6.9 10.2 5.2 12 3z" />
      <path d="M3.5 13h17c-.7 4-4.2 6.5-8.5 6.5S4.2 17 3.5 13z" />
    </>
  ),
  temple: (
    <>
      <path d="M12 2.5v2M9.5 8.5L12 4.5l2.5 4" />
      <path d="M7.5 12l1.5-3.5h6L16.5 12" />
      <path d="M5 12h14M6 12v8.5M18 12v8.5M3.5 20.5h17M10 20.5V16a2 2 0 0 1 4 0v4.5" />
    </>
  ),
  lotus: (
    <>
      <path d="M12 19c-2.8-1.9-4.2-4.6-4.2-8 1.9.9 3.4 2.4 4.2 4.4.8-2 2.3-3.5 4.2-4.4 0 3.4-1.4 6.1-4.2 8z" />
      <path d="M12 19c-3.9 0-7-1.4-9-4 2.4-.5 4.6 0 6.4 1.3M12 19c3.9 0 7-1.4 9-4-2.4-.5-4.6 0-6.4 1.3" />
    </>
  ),
  yoga: (
    <>
      <circle cx="12" cy="4.5" r="2" />
      <path d="M12 7.5v6M5.5 10.5l6.5-1 6.5 1M7.5 20l4.5-6.5 4.5 6.5M5 20h14" />
    </>
  ),
  wave: (
    <path d="M3 9c2 0 2.2-1.6 4.5-1.6S9.8 9 12 9s2.3-1.6 4.5-1.6S19 9 21 9M3 15c2 0 2.2-1.6 4.5-1.6S9.8 15 12 15s2.3-1.6 4.5-1.6S19 15 21 15" />
  ),
  river: (
    <>
      <path d="M3 18l5-8 3.5 4.5L14 11l7 7" />
      <path d="M3 21c2 0 2.2-1.2 4.5-1.2S9.8 21 12 21s2.3-1.2 4.5-1.2S19 21 21 21" />
    </>
  ),
  family: (
    <>
      <circle cx="9" cy="7.5" r="3" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15.5 14.2c3 .3 5.5 2.6 5.5 5.8" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 7.2a4.2 4.2 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" />,
  senior: (
    <>
      <circle cx="11" cy="4.5" r="2" />
      <path d="M11 7.5v6l-3 7M11 13.5l3 7M11 9.5l-3.5 3M11 9.5l3.5 1.5M16.5 11.5v9" />
    </>
  ),
  book: (
    <path d="M4 5h5.5A2.5 2.5 0 0 1 12 7.5V20a2 2 0 0 0-2-2H4zM20 5h-5.5A2.5 2.5 0 0 0 12 7.5V20a2 2 0 0 1 2-2h6z" />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2.5 12h2M19.5 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  rain: (
    <path d="M7 15a4 4 0 0 1-.6-8A5.5 5.5 0 0 1 17 7.6 3.7 3.7 0 0 1 17 15H7zM8.5 18l-1 3M12.5 18l-1 3M16.5 18l-1 3" />
  ),
  leaf: <path d="M5 19C5 10.5 10 5 20 4c-1 10-6.5 15-15 15zM5 19l8.5-8.5" />,
  snow: <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9.5 4.5L12 6.5l2.5-2M9.5 19.5L12 17.5l2.5 2" />,
  flower: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 9.8C10 8 10 4.5 12 3.5c2 1 2 4.5 0 6.3zM12 14.2c2 1.8 2 5.3 0 6.3-2-1-2-4.5 0-6.3zM9.8 12C8 14 4.5 14 3.5 12c1-2 4.5-2 6.3 0zM14.2 12c1.8-2 5.3-2 6.3 0-1 2-4.5 2-6.3 0z" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5M12 7.8v.01" />
    </>
  ),
  alert: <path d="M12 3.5l9 16h-18l9-16zM12 10v4.5M12 17.2v.01" />,
  bed: <path d="M3 19V6M3 14h18v5M21 14v-2.5A3.5 3.5 0 0 0 17.5 8H11v6M6.8 11.2h.01" />,
  car: (
    <>
      <path d="M4 16.5h16v-3.3l-2.2-4.9H6.2L4 13.2z" />
      <path d="M6 16.5v2.5M18 16.5v2.5M7.5 13.2h.01M16.5 13.2h.01" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </>
  ),
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />,
  plate: (
    <>
      <circle cx="12" cy="12" r="6" />
      <path d="M3 4v5a2 2 0 0 0 2 2M5 4v16M21 4c-1.5 1-2 3-2 5s.8 2 2 2v9" />
    </>
  ),
} as const;

export type IconName = keyof typeof PATHS;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  /** Provide a label only when the icon carries meaning on its own. */
  label?: string;
}

export default function Icon({ name, size = 20, className, label }: IconProps) {
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
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}

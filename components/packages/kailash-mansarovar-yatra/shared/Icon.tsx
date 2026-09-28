/**
 * Inline SVG icon set — no icon library. 24×24, 1.6 stroke, currentColor.
 */
import type { IconName } from "../types";

const paths: Record<IconName, React.ReactNode> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M8 19h8.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H16" />
    </>
  ),
  helicopter: (
    <>
      <path d="M3 5h14M10 5v3" />
      <path d="M5 11h10a4 4 0 0 1 4 4v0a2 2 0 0 1-2 2H9a4 4 0 0 1-4-4v-2Z" />
      <path d="M19 13h2M9 17v2M15 17v2M7 19h10" />
    </>
  ),
  bed: (
    <>
      <path d="M3 18V7M21 18v-5a3 3 0 0 0-3-3h-8v8" />
      <path d="M3 14h18" />
      <circle cx="6.5" cy="10.5" r="1.5" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5.5M18 14.5a6 6 0 0 1 3 5.5" />
    </>
  ),
  support: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19a3 3 0 0 1-3 3h-3" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />,
  lotus: (
    <>
      <path d="M12 20c-3-2-4.5-5-4.5-8.5C7.5 8 9.5 5 12 4c2.5 1 4.5 4 4.5 7.5 0 3.5-1.5 6.5-4.5 8.5Z" />
      <path d="M12 20c-4 0-8-2.5-9-7 2.5-.5 5 0 7 1.5M12 20c4 0 8-2.5 9-7-2.5-.5-5 0-7 1.5" />
    </>
  ),
  mountain: (
    <>
      <path d="m2 20 7-12 4 6 2.5-3.5L22 20H2Z" />
      <path d="m7.2 11 1.8 1.5L10.8 11" />
    </>
  ),
  snow: (
    <>
      <path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11" />
      <path d="m9.5 3.5 2.5 2 2.5-2M9.5 20.5l2.5-2 2.5 2" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19C5 10 10 4 20 4c0 10-6 15-15 15Z" />
      <path d="M5 19 13 11" />
    </>
  ),
  flame: (
    <>
      <path d="M12 21c-3.9 0-6-2.6-6-5.8 0-3.6 3-5.6 3.5-9.2C12 7.5 13 9.5 13 11c1-1 1.5-2.2 1.5-3.5C17 9.5 18 12.5 18 15.2 18 18.4 15.9 21 12 21Z" />
      <path d="M12 21c-1.5 0-2.5-1-2.5-2.5S12 15 12 15s2.5 2 2.5 3.5S13.5 21 12 21Z" />
    </>
  ),
  alert: (
    <>
      <path d="M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-down": <path d="M12 5v14M6 13l6 6 6-6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  "trend-up": (
    <>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  water: (
    <>
      <path d="M2 8c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0M2 13c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0M2 18c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  /** Provide a title only when the icon carries meaning on its own. */
  title?: string;
}

export default function Icon({ name, size = 24, className, title }: IconProps) {
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}

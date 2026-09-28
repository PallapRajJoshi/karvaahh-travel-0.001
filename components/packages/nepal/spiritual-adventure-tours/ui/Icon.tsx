import type { ReactNode } from "react";
import type { IconName } from "../types";

/**
 * Inline stroke icons (24×24, currentColor). No icon library: these ship
 * as a few hundred bytes of SVG and inherit colour from their parent.
 */
const paths: Record<IconName, ReactNode> = {
  temple: (
    <>
      <path d="M12 2.5 7 6.5h10L12 2.5Z" />
      <path d="M5.5 10.5 8 7h8l2.5 3.5h-13Z" />
      <path d="M6.5 10.5v9M17.5 10.5v9M4 19.5h16M10 19.5v-5h4v5" />
    </>
  ),
  stupa: (
    <>
      <path d="M12 2v3M10.5 5h3l-.5 3h-2l-.5-3Z" />
      <path d="M6 14a6 6 0 0 1 12 0H6Z" />
      <path d="M4.5 14h15v2.5h-15zM3.5 19.5h17" />
    </>
  ),
  lotus: (
    <>
      <path d="M12 19c-3.5-1.5-5-4.5-5-8 2.5.5 4.2 2 5 4 .8-2 2.5-3.5 5-4 0 3.5-1.5 6.5-5 8Z" />
      <path d="M12 15c-1.2-2.4-1.2-6.5 0-10 1.2 3.5 1.2 7.6 0 10Z" />
      <path d="M4 20.5h16" />
    </>
  ),
  village: (
    <>
      <path d="m3 11 5-4.5 5 4.5M4.5 10v9.5h7V10" />
      <path d="m13 12.5 4-3.5 4 3.5M14 12v7.5h6V12" />
      <path d="M7 19.5v-4h2v4M2.5 19.5h19" />
    </>
  ),
  sunrise: (
    <>
      <path d="M3 18.5h18M6.5 18.5a5.5 5.5 0 0 1 11 0" />
      <path d="M12 3v3M4.2 8.2l2 2M19.8 8.2l-2 2M1.5 14h2M20.5 14h2" />
    </>
  ),
  festival: (
    <>
      <path d="M3 4.5c3 1.5 6 1.5 9 0s6-1.5 9 0" />
      <path d="M5 5.6 6.5 10 8 6.2M11 5.5 12 10l1-4.5M16 6.2 17.5 10 19 5.6" />
      <path d="M12 13.5c1.6 0 2.5 1.2 2.5 2.7 0 1.9-2.5 4.3-2.5 4.3s-2.5-2.4-2.5-4.3c0-1.5.9-2.7 2.5-2.7Z" />
    </>
  ),
  lake: (
    <>
      <path d="m2.5 13 5-7 3.5 4.5 2.5-3 5.5 5.5" />
      <path d="M3 16.5c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0M5 20c1.2.7 2.5.7 3.7 0s2.5-.7 3.7 0 2.5.7 3.7 0" />
    </>
  ),
  mountain: (
    <>
      <path d="m2 19.5 7-12 4 6.5 2.5-3.5 6.5 9H2Z" />
      <path d="m7.2 10.7 1.8 1.3 1.6-1.2" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  heritage: (
    <>
      <path d="M3 9.5 12 4l9 5.5H3Z" />
      <path d="M5.5 9.5v8M9.8 9.5v8M14.2 9.5v8M18.5 9.5v8M3 20h18M4 17.5h16" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 18h7.5a3 3 0 0 0 0-6h-7a3 3 0 0 1 0-6H16" />
    </>
  ),
  bed: (
    <>
      <path d="M3 18.5V6M3 14.5h18v4M21 14.5v-3a3 3 0 0 0-3-3h-7v6" />
      <circle cx="7" cy="11" r="2" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8l-5-5Z" />
      <path d="M14 3v5h5M8.5 12.5h7M8.5 16h5" />
    </>
  ),
  bus: (
    <>
      <rect x="4" y="3.5" width="16" height="14" rx="2.5" />
      <path d="M4 11h16M7 17.5v2.5M17 17.5v2.5M7.5 14.3h.01M16.5 14.3h.01" />
    </>
  ),
  backpack: (
    <>
      <path d="M6 9a6 6 0 0 1 12 0v10.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19.5V9Z" />
      <path d="M9.5 3.5h5M8.5 13.5h7v4h-7z" />
    </>
  ),
  altitude: (
    <>
      <path d="m2 20 6.5-10 3.5 5 2.5-3.5L22 20H2Z" />
      <path d="M17.5 3v6M15 5.5 17.5 3 20 5.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  sparkle: <path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7Z" />,
  "arrow-right": <path d="M4.5 12h15M13.5 6l6 6-6 6" />,
  "arrow-down": <path d="M12 4.5v15M6 13.5l6 6 6-6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 0 1 13 0c0 5.3-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6L12 3Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  /** Provide only when the icon carries meaning on its own. Otherwise it's hidden from assistive tech. */
  title?: string;
}

export function Icon({ name, size = 24, className, title }: IconProps) {
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}

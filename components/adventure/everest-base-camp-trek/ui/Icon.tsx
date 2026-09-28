import type { ReactNode } from "react";

/**
 * Inline SVG icon set (no icon library). 24×24, stroke-based, inherits currentColor.
 * Decorative by default (aria-hidden); pass `title` to make one meaningful.
 */
const paths: Record<string, ReactNode> = {
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "chevron-down": <path d="M6 9l6 6 6-6" />,
  "chevron-left": <path d="M15 6l-6 6 6 6" />,
  "chevron-right": <path d="M9 6l6 6-6 6" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  expand: <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />,
  mountain: <path d="M3 20l6.5-11 4 6.5 2.5-4L21 20H3zM9.5 9l1.8 3" />,
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7" />
    </>
  ),
  altitude: <path d="M3 20h18M5 20l5-9 3 5 2-3 4 7M14 4l2-2 2 2M16 2v6" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  gauge: <path d="M4 18a8 8 0 1 1 16 0M12 18l4-6M12 18h.01" />,
  alert: (
    <>
      <path d="M12 3l9.5 17h-19L12 3z" />
      <path d="M12 10v4M12 17h.01" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6M12 7.5h.01" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  /* Feature icons */
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </>
  ),
  sliders: <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4" />,
  bed: <path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-8v5M6.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />,
  plane: <path d="M10.5 13.5L3 11l1.5-1.5 8 .5 4.5-4.5a2 2 0 0 1 3 3L15.5 13l.5 8L14.5 22.5 12 15l-3 3v2.5L7.5 22 6 18l-4-1.5L3.5 15H6l3-3" />,
  backpack: (
    <>
      <path d="M6 9a6 6 0 0 1 12 0v11H6z" />
      <path d="M9 3.5V5M15 3.5V5M9 13h6v4H9z" />
    </>
  ),
  "prayer-flags": <path d="M2 6c5 4 15 4 20 0M5 7.8v5l2.5-1 2.5 1v-4.3M14 8.7V13l2.5-1 2.5 1V7.9" />,
  headset: <path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H5a1 1 0 0 1-1-1zM20 14h-3v6h2a1 1 0 0 0 1-1zM17 20a4 4 0 0 1-4 2h-1" />,
  "heart-pulse": <path d="M12 20s-8-4.6-8-10.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 8 2.8C20 15.4 12 20 12 20zM3.5 12H8l1.5-2.5 2.5 5 1.5-2.5h7" />,
  /* Mode + season icons */
  helicopter: <path d="M3 5h14M10 5v3M5 8h10a4 4 0 0 1 4 4v1H9a4 4 0 0 1-4-4zM19 12h3M9 17h8M11 13v4M15 13v4" />,
  boot: <path d="M6 3h6v7l6 3a3 3 0 0 1 3 3v2H4V6a3 3 0 0 1 2-3zM4 21h17M9 12h3" />,
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  flower: (
    <>
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 9.5C10 6 12 3 12 3s2 3 0 6.5zM14.5 12c3.5-2 6.5 0 6.5 0s-3 2-6.5 0zM12 14.5c2 3.5 0 6.5 0 6.5s-2-3 0-6.5zM9.5 12C6 14 3 12 3 12s3-2 6.5 0z" />
    </>
  ),
  rain: <path d="M7 15a4 4 0 0 1-.5-8A6 6 0 0 1 18 8a3.5 3.5 0 0 1-.5 7H7zM8 18l-1 3M12 18l-1 3M16 18l-1 3" />,
  leaf: <path d="M5 19C5 10 11 4 20 4c0 9-6 15-15 15zM5 19l8-8" />,
  snow: <path d="M12 2v20M4 7l16 10M20 7L4 17M9 3.5L12 6l3-2.5M9 20.5L12 18l3 2.5" />,
};

export type IconName = keyof typeof paths;

export default function Icon({ name, title, className }: { name: string; title?: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
    >
      {title && <title>{title}</title>}
      {paths[name] ?? paths.mountain}
    </svg>
  );
}

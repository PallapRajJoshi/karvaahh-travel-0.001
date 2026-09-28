/** Inline SVG icons (no icon library). All decorative: aria-hidden. */
type P = { className?: string };
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export const IconArrowRight = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const IconCheck = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);
export const IconCross = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M7 7l10 10M17 7L7 17" />
  </svg>
);
export const IconChevron = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);
export const IconMountain = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3 20l6.5-11 4 6.5 2.5-3.5L21 20H3z" />
    <path d="M8 11.5l1.5 1.2 1.3-1" />
  </svg>
);
export const IconClock = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);
export const IconBed = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3 18V7M3 14h18v4M21 14v-2.5A2.5 2.5 0 0 0 18.5 9H11v5" />
    <circle cx="7" cy="11" r="1.6" />
  </svg>
);
export const IconMeal = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M16 3c-1.7 1-2.5 3-2.5 6h2.5v12" />
  </svg>
);
export const IconShield = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3l7.5 3v5.5c0 4.5-3.2 8.2-7.5 9.5-4.3-1.3-7.5-5-7.5-9.5V6L12 3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
export const IconDoc = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </svg>
);

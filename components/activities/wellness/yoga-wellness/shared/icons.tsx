import type { ReactElement } from "react";

const common = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export const icons: Record<string, ReactElement> = {
  sun: (
    <svg {...common}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ),
  lotus: (
    <svg {...common}>
      <path d="M12 4c2 2.2 3 4.4 3 6.5S13.7 14 12 15c-1.7-1-3-2.4-3-4.5S10 6.2 12 4z" />
      <path d="M3 10c3 0 5.5 1.6 7 4M21 10c-3 0-5.5 1.6-7 4M5 19c2.5 0 5-1.2 7-4 2 2.8 4.5 4 7 4" />
    </svg>
  ),
  breath: (
    <svg {...common}>
      <path d="M3 9h11a3 3 0 1 0-3-3M3 14h15a3 3 0 1 1-3 3M3 19h7" />
    </svg>
  ),
  leaf: (
    <svg {...common}>
      <path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15z" />
      <path d="M5 19c3-5 6-8 10-10" />
    </svg>
  ),
  drop: (
    <svg {...common}>
      <path d="M12 3c3.5 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2.5-6 6-10z" />
    </svg>
  ),
  book: (
    <svg {...common}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16z" />
      <path d="M8 7h8M8 11h6" />
    </svg>
  ),
  compass: (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </svg>
  ),
  mountain: (
    <svg {...common}>
      <path d="M3 19l6-11 4 7 2-3 6 7H3z" />
    </svg>
  ),
  blend: (
    <svg {...common}>
      <circle cx="9" cy="12" r="5" />
      <circle cx="15" cy="12" r="5" />
    </svg>
  ),
  people: (
    <svg {...common}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M16 14.2c2.9.2 5 2.4 5 5.3" />
    </svg>
  ),
  route: (
    <svg {...common}>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 18h6a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h6" />
    </svg>
  ),
  hands: (
    <svg {...common}>
      <path d="M12 21c-5-3.5-8-6.5-8-10a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 3.5-3 6.5-8 10z" />
    </svg>
  ),
  check: (
    <svg {...common} width={18} height={18} strokeWidth={2}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  ),
  chevron: (
    <svg {...common} width={20} height={20} strokeWidth={2}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
};

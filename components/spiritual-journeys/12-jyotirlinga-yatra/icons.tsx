/** Inline SVG icons (project convention: no icon library). Decorative — always aria-hidden. */
import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export const PlaneIcon = () => (
  <svg {...base}>
    <path d="M10.5 13.5 3 11l1.5-1.5 7 1 4-4.5c.8-.8 2.2-1 2.8-.3.7.6.5 2-.3 2.8L13.5 13l1 7L13 21.5 10.5 14" />
  </svg>
);

export const TrainIcon = () => (
  <svg {...base}>
    <rect x="5" y="3" width="14" height="14" rx="3" />
    <path d="M5 10h14M9 17l-2 4M15 17l2 4M8.5 13.5h.01M15.5 13.5h.01" />
  </svg>
);

export const RoadIcon = () => (
  <svg {...base}>
    <path d="M8 3 4 21M16 3l4 18M12 4v2.5M12 10v3M12 16.5V20" />
  </svg>
);

export const MixedIcon = () => (
  <svg {...base}>
    <circle cx="6" cy="6" r="2.2" />
    <circle cx="18" cy="12" r="2.2" />
    <circle cx="7" cy="19" r="2.2" />
    <path d="M8 6.8 16 11M16 13.2l-7.2 4.6" />
  </svg>
);

export const CheckIcon = () => (
  <svg {...base} width={18} height={18} strokeWidth={1.8}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const MinusIcon = () => (
  <svg {...base} width={18} height={18} strokeWidth={1.8}>
    <path d="M6 12h12" />
  </svg>
);

export const PlusIcon = () => (
  <svg {...base} width={18} height={18} strokeWidth={1.6}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

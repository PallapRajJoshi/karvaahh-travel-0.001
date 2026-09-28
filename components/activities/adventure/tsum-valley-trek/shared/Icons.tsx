/** Inline SVG icons — stroke-based, inherit currentColor. */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowDown = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 5v14M6 13l6 6 6-6" /></svg>
);
export const ChevronDown = (p: IconProps) => (
  <svg {...base} {...p}><path d="M6 9l6 6 6-6" /></svg>
);
export const ChevronRight = (p: IconProps) => (
  <svg {...base} {...p}><path d="M9 6l6 6-6 6" /></svg>
);
export const ChevronLeft = (p: IconProps) => (
  <svg {...base} {...p}><path d="M15 6l-6 6 6 6" /></svg>
);
export const Close = (p: IconProps) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const Clock = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Mountain = (p: IconProps) => (
  <svg {...base} {...p}><path d="M3 20l6.5-11 4 6.5L16 12l5 8z" /><path d="M8 11.5l1.5 1.5 1.5-1.5" /></svg>
);
export const Gauge = (p: IconProps) => (
  <svg {...base} {...p}><path d="M4 17a8 8 0 1 1 16 0" /><path d="M12 17l4-5" /></svg>
);
export const Pin = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);
export const Route = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="6" cy="19" r="2" /><circle cx="18" cy="5" r="2" /><path d="M8 19h7a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h7" /></svg>
);
export const Check = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
);
export const Minus = (p: IconProps) => (
  <svg {...base} {...p}><path d="M6 12h12" /></svg>
);
export const Alert = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 3l9.5 17h-19z" /><path d="M12 10v4.5M12 17.5v.01" /></svg>
);
export const Info = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 11v5.5M12 7.5v.01" /></svg>
);
export const Expand = (p: IconProps) => (
  <svg {...base} {...p}><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
);
export const Sun = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);
export const Leaf = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15" /><path d="M5 19l7-7" /></svg>
);
export const Snow = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 2v20M4 7l16 10M20 7L4 17" /><path d="M9 4l3 2 3-2M9 20l3-2 3 2" /></svg>
);
export const Rain = (p: IconProps) => (
  <svg {...base} {...p}><path d="M7 15a4 4 0 0 1-.5-8A6 6 0 0 1 18 8a3.5 3.5 0 0 1-.5 7z" /><path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3" /></svg>
);

/* Preparation & info icons */
export const Heart = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 20s-7.5-4.6-7.5-10A4.2 4.2 0 0 1 12 7.5 4.2 4.2 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z" /><path d="M7 12h2.5l1.2-2 2 4 1.3-2H17" /></svg>
);
export const Calendar = (p: IconProps) => (
  <svg {...base} {...p}><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
);
export const Boot = (p: IconProps) => (
  <svg {...base} {...p}><path d="M7 3h5v7l6 3a3 3 0 0 1 2 2.8V19H4v-4l3-2z" /><path d="M4 16h16" /></svg>
);
export const Umbrella = (p: IconProps) => (
  <svg {...base} {...p}><path d="M3 12a9 9 0 0 1 18 0z" /><path d="M12 12v7a2 2 0 0 1-4 0" /></svg>
);
export const Droplet = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" /></svg>
);
export const FirstAid = (p: IconProps) => (
  <svg {...base} {...p}><rect x="3.5" y="6" width="17" height="14" rx="2" /><path d="M9 6V4h6v2M12 10v6M9 13h6" /></svg>
);
export const Shield = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 3l8 3v6c0 4.6-3.4 8-8 9-4.6-1-8-4.4-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></svg>
);
export const Signal = (p: IconProps) => (
  <svg {...base} {...p}><path d="M4 20v-3M9 20v-6M14 20v-9M19 20V5" /></svg>
);
export const Hands = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 21V9l-3-5-1.5 1 1 5L5 14v4l3 3M12 21V9l3-5 1.5 1-1 5 3.5 4v4l-3 3" /></svg>
);
export const Permit = (p: IconProps) => (
  <svg {...base} {...p}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h4" /><circle cx="16.5" cy="16.5" r="1.8" /></svg>
);
export const Guide = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="9" cy="6" r="2.5" /><path d="M9 9v6l-2 6M9 15l2 6M9 11l4-1.5M17 3v18" /></svg>
);
export const Road = (p: IconProps) => (
  <svg {...base} {...p}><path d="M8 3L4 21M16 3l4 18M12 4v3M12 11v3M12 18v3" /></svg>
);
export const Bed = (p: IconProps) => (
  <svg {...base} {...p}><path d="M3 18V7M21 18v-5a3 3 0 0 0-3-3h-8v6M3 15h18" /><circle cx="6.5" cy="11.5" r="1.5" /></svg>
);
export const Sos = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v10M7 12h10" /></svg>
);
export const Wallet = (p: IconProps) => (
  <svg {...base} {...p}><path d="M4 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4z" /><path d="M4 7l11-3v3M16 13.5h.01" /></svg>
);
export const Monastery = (p: IconProps) => (
  <svg {...base} {...p}><path d="M4 21h16M6 21v-8h12v8M5 13l7-5 7 5M9 8l3-4 3 4M10 21v-4h4v4" /></svg>
);
export const Village = (p: IconProps) => (
  <svg {...base} {...p}><path d="M3 21h18M4 21v-7l5-4 5 4v7M14 21v-9l3.5-3 3.5 3v9M8 21v-3h2v3" /></svg>
);

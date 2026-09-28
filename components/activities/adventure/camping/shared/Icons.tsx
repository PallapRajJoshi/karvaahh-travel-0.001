import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 20): SVGProps<SVGSVGElement> => ({
  width: size, height: size, viewBox: "0 0 24 24", fill: "none",
  stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round",
  strokeLinejoin: "round", "aria-hidden": true, focusable: false,
});

export const IconPin = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);
export const IconArrow = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M4 12h15M13 6l6 6-6 6" /></svg>
);
export const IconTent = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M12 3 2.5 20h19L12 3Z" /><path d="M12 3v17M9 20l3-6 3 6" /></svg>
);
export const IconMountain = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="m2 20 7-12 4 6 2-3 7 9H2Z" /><path d="m7.5 10.5 1.5 1 1.5-1" /></svg>
);
export const IconCompass = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></svg>
);
export const IconFire = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-3.5 2-5 .8 1.2 1.5 1.8 2.5 2C11.5 7.5 11.5 5 12 3Z" /><path d="M5 21h14" /></svg>
);
export const IconCalendar = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
);
export const IconRoute = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><circle cx="6" cy="18" r="2" /><circle cx="18" cy="6" r="2" /><path d="M8 18h6.5a3.5 3.5 0 0 0 0-7h-5a3.5 3.5 0 0 1 0-7H16" /></svg>
);
export const IconMap = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z" /><path d="M9 4v14M15 6v14" /></svg>
);
export const IconSupport = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /><path d="M19 19a3 3 0 0 1-3 3h-3" /></svg>
);
export const IconSearch = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
);
export const IconClose = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const IconPlus = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const IconChevron = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="m9 6 6 6-6 6" /></svg>
);
export const IconInfo = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
);

export const iconByName = {
  compass: IconCompass, route: IconRoute, map: IconMap,
  tent: IconTent, mountain: IconMountain, support: IconSupport,
} as const;

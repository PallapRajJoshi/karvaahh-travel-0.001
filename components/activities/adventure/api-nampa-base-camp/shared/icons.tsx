/**
 * Inline SVG icon set (no icon library). All icons are decorative by default —
 * pass `title` when an icon carries meaning on its own.
 */
import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function Svg({ title, children, ...rest }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

export const ArrowLeft = (p: IconProps) => (
  <Svg {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Svg>
);

export const ChevronDown = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 9l6 6 6-6" />
  </Svg>
);

export const ChevronRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 6l6 6-6 6" />
  </Svg>
);

export const Plus = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

export const Close = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);

export const Mountain = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 20l6.5-11 3.5 6 2.5-4L21 20H3z" />
    <path d="M8 11.5l1.5 1 1.5-1" />
  </Svg>
);

export const Compass = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
  </Svg>
);

export const Clock = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
);

export const Tent = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 20L12 5l9 15H3z" />
    <path d="M12 5v15M9.5 20l2.5-5 2.5 5" />
  </Svg>
);

export const Leaf = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15" />
    <path d="M5 19l7-7" />
  </Svg>
);

export const Home = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 11l8-6 8 6v9H4v-9z" />
    <path d="M10 20v-5h4v5" />
  </Svg>
);

export const Shield = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </Svg>
);

export const Alert = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3L2 20h20L12 3z" />
    <path d="M12 10v4M12 17h.01" />
  </Svg>
);

export const Info = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </Svg>
);

export const Check = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Svg>
);

export const Minus = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 12h12" />
  </Svg>
);

export const Signal = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 20v-3M9 20v-7M14 20v-11M19 20V5" />
  </Svg>
);

export const MapFold = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 4L3 6.5v13.5L9 17.5l6 2.5 6-2.5V4l-6 2.5L9 4z" />
    <path d="M9 4v13.5M15 6.5V20" />
  </Svg>
);

export const Wallet = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="6" width="18" height="13" rx="2" />
    <path d="M3 10h18M16 14.5h2" />
  </Svg>
);

export const Recycle = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 19H4.5a1.5 1.5 0 01-1.3-2.3L6 12M17 19h2.5a1.5 1.5 0 001.3-2.3L18 12M9.5 5.5l1.2-2a1.5 1.5 0 012.6 0L16 8" />
    <path d="M8 16l-1 3 3 1M15 8h3V5M14 19l3 0-1-3" />
  </Svg>
);

export const Users = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c.5-3.5 3.2-5.5 6.5-5.5s6 2 6.5 5.5" />
    <path d="M16 4.8a3.5 3.5 0 010 6.4M18 14.8c2 .7 3.2 2.5 3.5 5.2" />
  </Svg>
);

export const Camera = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 8h3l2-3h6l2 3h3v11H4V8z" />
    <circle cx="12" cy="13" r="3.5" />
  </Svg>
);

export const Expand = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
  </Svg>
);

export const Phone = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </Svg>
);

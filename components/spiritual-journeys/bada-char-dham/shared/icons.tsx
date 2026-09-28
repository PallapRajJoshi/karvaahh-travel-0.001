/**
 * Inline SVG icons for the Bada Char Dham page (no icon library).
 * All icons are decorative: aria-hidden, currentColor, 24×24 grid.
 */
import type { Direction } from "../data/types";

type IconProps = { className?: string; size?: number };

const base = (size = 20) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
});

const ROTATION: Record<Direction, number> = { north: 0, east: 90, south: 180, west: 270 };

/** A compass needle pointing towards the given direction. */
export function DirectionArrow({ direction, className, size = 22 }: IconProps & { direction: Direction }) {
  return (
    <svg {...base(size)} className={className} style={{ transform: `rotate(${ROTATION[direction]}deg)` }}>
      <circle cx="12" cy="12" r="10" strokeOpacity="0.35" />
      <path d="M12 4.5 15 12h-6l3-7.5Z" fill="currentColor" stroke="none" />
      <path d="M12 19.5 9 12h6l-3 7.5Z" strokeOpacity="0.55" />
    </svg>
  );
}

export function CheckIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="m5 12.5 4.2 4.2L19 7" />
    </svg>
  );
}

export function MinusIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M6 12h12" />
    </svg>
  );
}

export function InfoIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 11v5.5M12 7.6v.2" />
    </svg>
  );
}

export function PlaneIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M10.5 13.5 3 11l1.3-1.4 7.2.9 4.3-4.6c.9-.9 2.2-1.2 2.9-.5.7.7.4 2-.5 2.9l-4.6 4.3.9 7.2L13.1 21l-2.6-7.5Z" />
    </svg>
  );
}

export function TrainIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="5.5" y="3" width="13" height="14" rx="3" />
      <path d="M5.5 10.5h13M9 14h.01M15 14h.01M8 21l2-3.5M16 21l-2-3.5" />
    </svg>
  );
}

export function CarIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 16.5V12l2-5h12l2 5v4.5" />
      <path d="M3 16.5h18M4 12h16" />
      <circle cx="7.5" cy="16.5" r="1.8" />
      <circle cx="16.5" cy="16.5" r="1.8" />
    </svg>
  );
}

export function RouteIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <path d="M8.2 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.8" />
    </svg>
  );
}

export function ArrowDownIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 4v15M6 13l6 6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

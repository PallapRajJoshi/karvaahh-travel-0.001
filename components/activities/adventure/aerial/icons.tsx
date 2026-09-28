import type { AudienceIcon } from "./types";

type IconProps = { className?: string };

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function PinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 20l1.3-3.8A8 8 0 1 1 8 19l-4 1Z" />
      <path d="M9.2 9.3c.3 1.8 1.7 3.4 3.5 4.3l1.1-1 1.8.8-.4 1.4c-3 .3-6.6-3-6.4-6l1.4-.4.8 1.8-1.1 1" />
    </svg>
  );
}

function Camera() {
  return (
    <>
      <path d="M4 8h3l1.5-2h7L17 8h3v11H4Z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  );
}
function Couple() {
  return (
    <>
      <circle cx="8.5" cy="7.5" r="2.5" />
      <circle cx="15.5" cy="7.5" r="2.5" />
      <path d="M4 19c0-3 2-5 4.5-5s4.5 2 4.5 5M11 19c0-3 2-5 4.5-5S20 16 20 19" />
    </>
  );
}
function Family() {
  return (
    <>
      <circle cx="7" cy="7" r="2.3" />
      <circle cx="17" cy="7" r="2.3" />
      <circle cx="12" cy="12" r="1.8" />
      <path d="M3 19c0-3 1.8-5.5 4-5.5M21 19c0-3-1.8-5.5-4-5.5M9 20c0-2 1.3-3.5 3-3.5s3 1.5 3 3.5" />
    </>
  );
}
function Mountain() {
  return (
    <>
      <path d="M2 19 9 7l4 6.5 2.5-3.5L22 19Z" />
      <path d="m7.6 9.4 1.4 1.4 1.4-1.4" />
    </>
  );
}
function FirstFlight() {
  return (
    <>
      <path d="M3 13.5 21 7l-4.5 11-3.2-4.2L3 13.5Z" />
      <path d="M13.3 13.8 21 7" />
    </>
  );
}

const MAP: Record<AudienceIcon, () => React.JSX.Element> = {
  camera: Camera,
  couple: Couple,
  family: Family,
  mountain: Mountain,
  "first-flight": FirstFlight,
};

export function AudienceGlyph({ icon, className }: { icon: AudienceIcon; className?: string }) {
  const Glyph = MAP[icon];
  return (
    <svg {...base} className={className}>
      <Glyph />
    </svg>
  );
}

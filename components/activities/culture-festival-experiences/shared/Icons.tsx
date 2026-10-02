import type { ReactNode } from "react";
import type { IconName } from "../types";

const PATHS: Record<IconName, ReactNode> = {
  temple: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21v-7h14v7" />
      <path d="M4 14l8-5 8 5" />
      <path d="M7 9l5-4 5 4" />
      <path d="M12 3v2" />
      <path d="M10 21v-4h4v4" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 7h10" />
      <path d="M18 7h2" />
      <circle cx="16" cy="7" r="2" />
      <path d="M4 17h2" />
      <path d="M10 17h10" />
      <circle cx="8" cy="17" r="2" />
      <path d="M4 12h6" />
      <path d="M14 12h6" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M17 14c2.5 0 4 1.8 4 4.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16" />
      <path d="M9 3v4" />
      <path d="M15 3v4" />
      <path d="M12 13.5l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3z" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 18h6a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h6" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" />
      <path d="M5 19c2-4 5-7 9-9" />
    </>
  ),
  food: (
    <>
      <path d="M4 12h16a8 8 0 0 1-16 0z" />
      <path d="M9 8c0-1.5 1-1.5 1-3" />
      <path d="M13 8c0-1.5 1-1.5 1-3" />
    </>
  ),
  walk: (
    <>
      <circle cx="13" cy="4.5" r="1.8" />
      <path d="M13 8l-2.5 4 3 2.5 1 5.5" />
      <path d="M10.5 12l-3 1.5" />
      <path d="M13.5 9.5l3 2" />
      <path d="M10.5 14.5l-2.5 5" />
    </>
  ),
  craft: (
    <>
      <path d="M7 4h10" />
      <path d="M8 4c-2 3-2 7 0 9 1 1 1.5 2.500 1.500 4h5c0-1.500.5-3 1.500-4 2-2 2-6 0-9" />
      <path d="M8 20h8" />
    </>
  ),
  workshop: (
    <>
      <path d="M14 4l6 6-9 9H5v-6z" />
      <path d="M12 6l6 6" />
    </>
  ),
  home: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  attire: (
    <>
      <path d="M8 4l-5 4 3 3 2-1.5V20h8v-10.500l2 1.500 3-3-5-4" />
      <path d="M8 4c1 2 2.500 3 4 3s3-1 4-3" />
    </>
  ),
  monastery: (
    <>
      <path d="M12 3l1 2h-2z" />
      <path d="M6 9l6-4 6 4" />
      <path d="M4 9h16" />
      <path d="M6 9v11" />
      <path d="M18 9v11" />
      <path d="M10 20v-6h4v6" />
      <path d="M3 20h18" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l1.500-2h7L17 8h3v11H4z" />
      <circle cx="12" cy="13" r="3.500" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  className?: string;
}

/** Decorative inline SVG. Always aria-hidden: the text beside it carries meaning. */
export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" focusable="false">
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

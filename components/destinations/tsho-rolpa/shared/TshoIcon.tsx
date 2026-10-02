import type { IconName } from "@/data/tsho-rolpa/types";

/**
 * Minimal inline SVG icon set (site convention: inline SVGs over icon
 * libraries). Stroke inherits currentColor so it can be recolored per
 * context via CSS.
 */
const paths: Record<IconName, React.ReactNode> = {
  water: (
    <>
      <path d="M4 16c1.6 1.4 3.2 1.4 4.8 0 1.6-1.4 3.2-1.4 4.8 0 1.6 1.4 3.2 1.4 4.8 0" />
      <path d="M4 11c1.6 1.4 3.2 1.4 4.8 0 1.6-1.4 3.2-1.4 4.8 0 1.6 1.4 3.2 1.4 4.8 0" />
    </>
  ),
  mountain: <path d="M3 19 9 7l4 6 2-3 6 9H3Z" />,
  peak: <path d="M12 4 3 20h18L12 4Zm0 5 5 9H7l5-9Z" />,
  village: (
    <>
      <path d="M4 20V10l5-4 5 4v10" />
      <path d="M14 20v-6l4-3 3 3v6" />
    </>
  ),
  glacier: <path d="M2 18 7 8l4 5 3-4 8 9H2Z" />,
  trek: (
    <>
      <circle cx="7" cy="5" r="2" />
      <path d="m4 20 3-7 2 2 2-3 5 8" />
      <path d="M10 12 8 9l3-3 3 2" />
    </>
  ),
  stupa: (
    <>
      <path d="M12 2v3" />
      <path d="M8 9h8l-1.5-3h-5L8 9Z" />
      <path d="M6 15h12l-2-6H8l-2 6Z" />
      <path d="M4 21h16l-2-6H6l-2 6Z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
};

export default function TshoIcon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg
      className={`tsho-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

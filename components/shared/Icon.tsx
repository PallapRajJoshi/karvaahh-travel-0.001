type IconProps = {
  name: IconName;
  className?: string;
};

export type IconName =
  | "mountain"
  | "location"
  | "elevation"
  | "route"
  | "calendar"
  | "compass"
  | "camp"
  | "lotus"
  | "camera"
  | "leaf"
  | "shield"
  | "backpack"
  | "sun"
  | "cloud-rain"
  | "snowflake"
  | "chevron-down"
  | "close"
  | "arrow-right"
  | "phone"
  | "flag";

/**
 * Minimal inline SVG icon set — no icon library dependency, per project
 * convention ("Inline SVGs preferred over icon libraries").
 */
export default function Icon({ name, className = "" }: IconProps) {
  const common = {
    className: `pp-icon ${className}`.trim(),
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "mountain":
      return (
        <svg {...common}>
          <path d="M3 19h18L14.5 6 10 13.5 7.5 10 3 19Z" />
        </svg>
      );
    case "location":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.4" />
        </svg>
      );
    case "elevation":
      return (
        <svg {...common}>
          <path d="M3 17l5-8 4 5 3-4 6 7" />
          <path d="M3 20h18" />
        </svg>
      );
    case "route":
      return (
        <svg {...common}>
          <circle cx="5" cy="6" r="2" />
          <circle cx="19" cy="18" r="2" />
          <path d="M5 8c0 6 14 2 14 8" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="15" rx="2" />
          <path d="M3.5 10h17M8 3v4M16 3v4" />
        </svg>
      );
    case "compass":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M14.8 9.2 13 13l-3.8 1.8L11 11l3.8-1.8Z" />
        </svg>
      );
    case "camp":
      return (
        <svg {...common}>
          <path d="M4 20 12 5l8 15" />
          <path d="M8.5 20 12 12l3.5 8" />
        </svg>
      );
    case "lotus":
      return (
        <svg {...common}>
          <path d="M12 21c-4-2-6-5-6-8 3 0 5 1.5 6 3 1-1.5 3-3 6-3 0 3-2 6-6 8Z" />
          <path d="M12 13c-1.5-2-1.7-5-1.7-7C12 6.5 12 8 12 8s0-1.5 1.7-2c0 2-.2 5-1.7 7Z" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7l1.5-3h5L16 7" />
          <circle cx="12" cy="13.5" r="3.5" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M20 4C10 4 4 10 4 18c8 0 14-6 16-14Z" />
          <path d="M6 18C10 14 14 10 19 5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "backpack":
      return (
        <svg {...common}>
          <path d="M8 8V6a4 4 0 0 1 8 0v2" />
          <rect x="5" y="8" width="14" height="13" rx="3" />
          <path d="M9 13h6M9 17h6" />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
        </svg>
      );
    case "cloud-rain":
      return (
        <svg {...common}>
          <path d="M7 15a4.5 4.5 0 0 1 .5-9 6 6 0 0 1 11.4 1.8A4 4 0 0 1 18 15H7Z" />
          <path d="M8 19l-1 2M12 19l-1 2M16 19l-1 2" />
        </svg>
      );
    case "snowflake":
      return (
        <svg {...common}>
          <path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11" />
          <path d="M12 2v20" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...common}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2.2 2C10 20.5 3.5 14 3 6.2 3 5 3.9 4 5 4Z" />
        </svg>
      );
    case "flag":
      return (
        <svg {...common}>
          <path d="M6 21V4" />
          <path d="M6 4h13l-3 4 3 4H6" />
        </svg>
      );
    default:
      return null;
  }
}

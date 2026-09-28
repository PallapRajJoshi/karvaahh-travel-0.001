/** Inline SVG icons (stroke = currentColor). */
import type { ReactElement } from "react";

type IconName = "pin" | "weather" | "aviation" | "altitude" | "oxygen" | "acclimatisation" | "clearance" | "calendar";

const paths: Record<IconName, ReactElement> = {
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  weather: (
    <>
      <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.1 11 3.5 3.5 0 0 0 7 18Z" />
      <path d="M4 21h6M13 21h7" />
    </>
  ),
  aviation: <path d="M21 15.5 13.5 11V5.5a1.5 1.5 0 0 0-3 0V11L3 15.5V17l7.5-2.2V19L8.5 20.5V22l3.5-1 3.5 1v-1.5L13.5 19v-4.2L21 17Z" />,
  altitude: (
    <>
      <path d="m2 20 7-12 4 6 3-4 6 10Z" />
      <path d="m7.5 10.5 1.5 1.5 1.5-1.5" />
    </>
  ),
  oxygen: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M9.5 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM15 13.5h2l-2 2.5h2" />
    </>
  ),
  acclimatisation: (
    <>
      <path d="M12 3v9l5 3" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),
  clearance: (
    <>
      <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6Z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
};

export default function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };

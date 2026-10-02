import type { IconName } from "@/content/corporate-retreats";

const P: Record<IconName, string> = {
  compass: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM15.5 8.5l-2 5-5 2 2-5z",
  users: "M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20M10 4.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zM20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35M15.5 4.9a3.2 3.2 0 0 1 0 6.2",
  mountain: "M3 19l6.5-11 4 6.5 2.5-3.5L21 19z",
  route: "M6 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM18 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM8 18h6a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h6",
  layers: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
  scale: "M12 4v16M5 20h14M5 8h14M5 8l-2.5 6a3 3 0 0 0 5 0zM19 8l-2.5 6a3 3 0 0 0 5 0z",
  target: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 11.5a.5.5 0 1 0 0 1",
  puzzle: "M4 8h5V6a2 2 0 1 1 4 0v2h5v5h-2a2 2 0 1 0 0 4h2v3H4z",
  leaf: "M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l8-8",
  heritage: "M3 20h18M5 20v-9h14v9M12 4l8 7H4zM9 20v-5h6v5",
  bolt: "M13 3L5 14h6l-1 7 8-11h-6z",
  palette: "M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2s0-2.5 1.5-2.5H17a4 4 0 0 0 4-4C21 6.5 17 3 12 3zM7.5 11h.01M10 7.5h.01M14.5 7.5h.01",
  sparkle: "M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z",
  chat: "M4 5h16v11H9l-5 4z",
  bulb: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z",
  link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  lotus: "M12 20c-4 0-7-3-8-7 3 0 5.5 1 8 4 2.5-3 5-4 8-4-1 4-4 7-8 7zM12 17c-2-2-3-5 0-10 3 5 2 8 0 10z",
  sun: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1",
  trail: "M4 20c4-1 4-5 8-6s4-5 8-6M4 20h.01M20 8h.01",
  building: "M5 21V4h9v17M14 9h5v12M3 21h18M8 8h3M8 12h3M8 16h3",
  bus: "M5 5h14v12H5zM5 12h14M8 20v-3M16 20v-3M8.5 15h.01M15.5 15h.01",
  bed: "M3 18V6M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5M7 11h.01",
  utensils: "M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M17 3c-2 2-3 4-3 7h3v11",
  calendar: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  arrow: "M5 12h14M13 6l6 6-6 6",
  check: "M5 12l5 5 9-10",
  chevron: "M6 9l6 6 6-6",
  pin: "M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
  x: "M6 6l12 12M18 6L6 18",
  flag: "M5 21V4M5 4h11l-2 4 2 4H5",
  heart: "M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z",
  briefcase: "M4 8h16v12H4zM9 8V5h6v3M4 13h16",
};

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={P[name]} />
    </svg>
  );
}

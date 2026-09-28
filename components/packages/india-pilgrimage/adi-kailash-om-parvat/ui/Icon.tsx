import type { IconName } from "@/data/india-pilgrimage/adi-kailash-om-parvat/types";

/**
 * Inline SVG icon set (24×24, 1.6px stroke, currentColor).
 * Decorative by default; pass `title` to make an icon meaningful to screen readers.
 */

const paths: Record<IconName, string> = {
  compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M15.5 8.5l-2 5-5 2 2-5 5-2Z",
  sliders: "M4 7h10 M18 7h2 M4 17h4 M12 17h8 M16 5v4 M10 15v4",
  route: "M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z M18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z M8 17h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7",
  bed: "M3 18V7 M3 14h18v4 M21 14v-2a3 3 0 0 0-3-3h-7v5 M7 11.5a1.5 1.5 0 1 0 0-.01",
  vehicle: "M3 16V11l2-5h11l3 5h2v5 M3 16h18 M7 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z M17 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z M5 11h14",
  headset: "M4 14v-2a8 8 0 0 1 16 0v2 M4 14h3v5H5a1 1 0 0 1-1-1v-4Z M20 14h-3v5h2a1 1 0 0 0 1-1v-4Z M17 19c0 1.5-2 2-5 2",
  document: "M7 3h7l5 5v13H7V3Z M14 3v5h5 M10 13h6 M10 17h6",
  backpack: "M6 10a6 6 0 0 1 12 0v10H6V10Z M9 4.5V4a3 3 0 0 1 6 0v.5 M6 14h12 M10 14v3h4v-3",
  mountain: "M3 20 9.5 8l4 7 2-3.5L21 20H3Z M8 12.5l1.5 1.5 1.5-1.5",
  shield: "M12 3 5 6v6c0 4 3 7.5 7 9 4-1.5 7-5 7-9V6l-7-3Z M9 12l2 2 4-4",
  sun: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M12 2v2 M12 20v2 M4.9 4.9l1.4 1.4 M17.7 17.7l1.4 1.4 M2 12h2 M20 12h2 M4.9 19.1l1.4-1.4 M17.7 6.3l1.4-1.4",
  snow: "M12 2v20 M4.5 7.5l15 9 M4.5 16.5l15-9 M9.5 3.5 12 6l2.5-2.5 M9.5 20.5 12 18l2.5 2.5",
  leaf: "M5 19c0-8 5-14 15-15-1 10-7 15-15 15Z M5 19c3-4 6-7 10-9",
  cloud: "M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9H7Z M9 21l1-2 M13 21l1-2",
  info: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 11v5 M12 8h.01",
  alert: "M12 3 2 20h20L12 3Z M12 10v4 M12 17h.01",
  "arrow-right": "M5 12h14 M13 6l6 6-6 6",
  "arrow-down": "M12 5v14 M6 13l6 6 6-6",
  "chevron-down": "M6 9l6 6 6-6",
  om: "",
};

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  title?: string;
}

export function Icon({ name, size = 24, className, title }: IconProps) {
  const a11y = title ? { role: "img", "aria-label": title } : { "aria-hidden": true as const };

  if (name === "om") {
    // Rendered as text so it uses the page's Devanagari-capable font stack.
    return (
      <span className={["akop-icon akop-icon--om", className].filter(Boolean).join(" ")} {...a11y}>
        ॐ
      </span>
    );
  }

  return (
    <svg
      className={["akop-icon", className].filter(Boolean).join(" ")}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      {...a11y}
    >
      <path d={paths[name]} />
    </svg>
  );
}

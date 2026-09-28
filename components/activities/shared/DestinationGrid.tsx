import type { ReactNode } from "react";
import "./DestinationGrid.css";

interface DestinationGridProps {
  children: ReactNode;
  /** Minimum card width; controls how many columns fit. */
  min?: "sm" | "md" | "lg";
  ariaLabel?: string;
}

export default function DestinationGrid({
  children,
  min = "md",
  ariaLabel,
}: DestinationGridProps) {
  return (
    <div
      className={`dest-grid dest-grid--${min}`}
      role="list"
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}

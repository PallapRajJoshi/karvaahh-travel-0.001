import type { CSSProperties } from "react";

/** Currency formatting. INR uses Indian digit grouping (1,25,000), as used across the site. */
export function formatPrice(amount: number, currency: "INR" | "USD" | "NPR") {
  const locale = currency === "USD" ? "en-US" : "en-IN";
  return new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(amount);
}

/** "2026-09-26" → "Sep 2026". UTC, so server and client render identically (no hydration mismatch). */
export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));
}

/** Inline style carrying the stagger index read by the reveal CSS. */
export function staggerStyle(index: number): CSSProperties {
  return { "--nsa-i": index } as CSSProperties;
}

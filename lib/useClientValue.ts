"use client";

import { useSyncExternalStore } from "react";

const subscribeNever = () => () => {};

/**
 * Reads a browser-only value (today's date, a media query, feature support)
 * without a setState-in-effect round trip.
 *
 * During SSR and hydration it returns `serverValue`, so markup always matches;
 * on the client it returns `getClientValue()`. The getter must return a
 * primitive (string / number / boolean / undefined) so React can compare
 * snapshots — derive arrays or objects from the primitive with useMemo.
 */
export function useClientValue<T extends string | number | boolean | undefined>(
  getClientValue: () => T,
  serverValue: T,
): T {
  return useSyncExternalStore(subscribeNever, getClientValue, () => serverValue);
}

/** Today's local date as YYYY-MM-DD (for `min` on date inputs). */
export function localISODate(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

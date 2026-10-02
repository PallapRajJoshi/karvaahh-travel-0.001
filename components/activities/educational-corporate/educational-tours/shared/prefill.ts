/** Tiny bridge so the tour builder can hand its selections to the inquiry form. */
export const PREFILL_EVENT = "et:prefill";

export function dispatchPrefill(summary: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<string>(PREFILL_EVENT, { detail: summary }));
}

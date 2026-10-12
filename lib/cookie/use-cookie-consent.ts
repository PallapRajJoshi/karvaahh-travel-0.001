"use client";

import { useSyncExternalStore } from "react";
import {
  getPreferencesOpen,
  getPreferencesOpenServer,
  getServerSnapshot,
  getSnapshot,
  subscribe,
  subscribeUi,
} from "./consent";
import type { ConsentState } from "./types";

/** Current consent state. Returns `{ status: "unknown" }` on the server and during hydration. */
export function useCookieConsent(): ConsentState {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Whether the preferences dialog is currently requested open. */
export function usePreferencesOpen(): boolean {
  return useSyncExternalStore(subscribeUi, getPreferencesOpen, getPreferencesOpenServer);
}

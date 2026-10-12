import {
  COOKIE_CATEGORIES,
  COOKIE_REGISTRY,
  CONSENT_EVENT,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
} from "./config";
import type {
  ConsentChoices,
  ConsentState,
  CookieCategoryId,
  CookieConsent,
} from "./types";

/**
 * Framework-agnostic consent store.
 *
 * It exposes `subscribe` / `getSnapshot` / `getServerSnapshot` so React can
 * read it with `useSyncExternalStore` (see `use-cookie-consent.ts`), which
 * avoids hydration mismatches and any setState-in-effect patterns.
 */

const UNKNOWN: ConsentState = { status: "unknown" };
const UNDECIDED: ConsentState = { status: "undecided" };

const consentListeners = new Set<() => void>();
const uiListeners = new Set<() => void>();

let preferencesOpen = false;
let cachedRaw: string | null | undefined;
let cachedState: ConsentState = UNKNOWN;
/** Fallback when localStorage is blocked: the choice still holds for this page session. */
let memoryRaw: string | null = null;

function isChoices(value: unknown): value is ConsentChoices {
  if (typeof value !== "object" || value === null) return false;
  const record = value as Record<string, unknown>;
  return COOKIE_CATEGORIES.every((c) => typeof record[c.id] === "boolean");
}

function parse(raw: string | null): ConsentState {
  if (!raw) return UNDECIDED;
  try {
    const data: unknown = JSON.parse(raw);
    if (typeof data !== "object" || data === null) return UNDECIDED;
    const candidate = data as Partial<CookieConsent>;
    if (
      candidate.version !== CONSENT_VERSION ||
      typeof candidate.decidedAt !== "string" ||
      !isChoices(candidate.categories)
    ) {
      return UNDECIDED;
    }
    return {
      status: "decided",
      consent: {
        version: candidate.version,
        decidedAt: candidate.decidedAt,
        // Essential can never be off, whatever is stored.
        categories: { ...candidate.categories, essential: true },
      },
    };
  } catch {
    return UNDECIDED;
  }
}

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    // Storage blocked (private mode, strict settings): use the in-memory copy.
    return memoryRaw;
  }
}

export function getSnapshot(): ConsentState {
  if (typeof window === "undefined") return UNKNOWN;
  const raw = readRaw();
  if (raw !== cachedRaw || cachedState === UNKNOWN) {
    cachedRaw = raw;
    cachedState = parse(raw);
  }
  return cachedState;
}

export function getServerSnapshot(): ConsentState {
  return UNKNOWN;
}

export function subscribe(listener: () => void): () => void {
  consentListeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === CONSENT_STORAGE_KEY || event.key === null) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    consentListeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function emitConsent() {
  consentListeners.forEach((listener) => listener());
}

/** Expire first-party cookies we registered for categories that were switched off. */
function purgeDisabledCookies(choices: ConsentChoices) {
  const hostname = window.location.hostname;
  COOKIE_REGISTRY.forEach((entry) => {
    if (entry.mechanism !== "cookie" || choices[entry.category]) return;
    const expired = "expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    document.cookie = `${entry.name}=; ${expired}`;
    document.cookie = `${entry.name}=; ${expired}; domain=${hostname}`;
    document.cookie = `${entry.name}=; ${expired}; domain=.${hostname}`;
  });
}

export function saveConsent(
  choices: Partial<Record<CookieCategoryId, boolean>>,
): CookieConsent {
  const categories: ConsentChoices = {
    essential: true,
    analytics: choices.analytics === true,
    marketing: choices.marketing === true,
    preferences: choices.preferences === true,
  };
  const consent: CookieConsent = {
    version: CONSENT_VERSION,
    decidedAt: new Date().toISOString(),
    categories,
  };
  const serialized = JSON.stringify(consent);
  memoryRaw = serialized;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, serialized);
  } catch {
    // If storage is unavailable the choice still applies for this page session only.
  }
  purgeDisabledCookies(categories);
  cachedRaw = serialized;
  cachedState = { status: "decided", consent };
  emitConsent();
  window.dispatchEvent(new CustomEvent<CookieConsent>(CONSENT_EVENT, { detail: consent }));
  return consent;
}

export const acceptAll = () =>
  saveConsent({ analytics: true, marketing: true, preferences: true });

export const rejectNonEssential = () =>
  saveConsent({ analytics: false, marketing: false, preferences: false });

export function hasConsent(category: CookieCategoryId): boolean {
  if (category === "essential") return true;
  const state = getSnapshot();
  return state.status === "decided" && state.consent.categories[category];
}

/* ------------------------------------------------------------------ */
/* Preferences dialog open/close state                                  */
/* ------------------------------------------------------------------ */

export function subscribeUi(listener: () => void): () => void {
  uiListeners.add(listener);
  return () => {
    uiListeners.delete(listener);
  };
}

export const getPreferencesOpen = () => preferencesOpen;
export const getPreferencesOpenServer = () => false;

function setPreferencesOpen(next: boolean) {
  if (preferencesOpen === next) return;
  preferencesOpen = next;
  uiListeners.forEach((listener) => listener());
}

export const openPreferences = () => setPreferencesOpen(true);
export const closePreferences = () => setPreferencesOpen(false);

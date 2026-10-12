"use client";

import Script from "next/script";
import type { CookieCategoryId } from "@/lib/cookie/types";
import { useCookieConsent } from "@/lib/cookie/use-cookie-consent";

interface ConsentScriptProps {
  /** Which consent category must be granted before this script is allowed to load. */
  category: Exclude<CookieCategoryId, "essential">;
  /** Unique id (required for inline scripts and recommended for external ones). */
  id: string;
  /** External script URL. Provide this OR `children`. */
  src?: string;
  /** Inline script body. Provide this OR `src`. */
  children?: string;
  strategy?: "afterInteractive" | "lazyOnload";
}

/**
 * Loads an analytics / marketing / preferences script ONLY after the visitor
 * has consented to that category. Nothing is rendered (and nothing downloads)
 * before consent, or after it has been withdrawn on the next page load.
 *
 * Usage (when you add a real tool — do not add one just to use this):
 *   <ConsentScript category="analytics" id="analytics-loader" src="https://…" />
 * and register it in `COOKIE_REGISTRY` so the Cookie Policy documents it.
 */
export function ConsentScript({
  category,
  id,
  src,
  children,
  strategy = "afterInteractive",
}: ConsentScriptProps) {
  const consent = useCookieConsent();
  const allowed = consent.status === "decided" && consent.consent.categories[category];
  if (!allowed) return null;

  return src ? (
    <Script id={id} src={src} strategy={strategy} />
  ) : (
    <Script id={id} strategy={strategy}>
      {children}
    </Script>
  );
}

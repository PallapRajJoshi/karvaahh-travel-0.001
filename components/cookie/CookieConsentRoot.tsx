"use client";

import "./cookie.css";
import { CookieBanner } from "./CookieBanner";
import { CookiePreferences } from "./CookiePreferences";

/**
 * Mount ONCE in the root layout (just before </body>):
 *
 *   import { CookieConsentRoot } from "@/components/cookie/CookieConsentRoot";
 *   …
 *   <CookieConsentRoot />
 *
 * It renders the first-visit banner and the preferences dialog. Both are
 * client-only and render nothing on the server.
 */
export function CookieConsentRoot() {
  return (
    <>
      <CookieBanner />
      <CookiePreferences />
    </>
  );
}

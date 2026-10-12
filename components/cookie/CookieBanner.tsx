"use client";

import Link from "next/link";
import { LegalIcon } from "@/components/legal/LegalIcon";
import { acceptAll, openPreferences, rejectNonEssential } from "@/lib/cookie/consent";
import { useCookieConsent } from "@/lib/cookie/use-cookie-consent";

/**
 * Compact first-visit banner. Rendered only once the visitor's stored choice
 * is known to be missing, so it never flashes for returning visitors and never
 * appears in the server HTML.
 */
export function CookieBanner() {
  const consent = useCookieConsent();
  if (consent.status !== "undecided") return null;

  return (
    <section className="cookie-banner" role="region" aria-label="Cookie consent">
      <div className="cookie-banner__copy">
        <span className="cookie-banner__icon">
          <LegalIcon name="cookie" size={22} />
        </span>
        <p className="cookie-banner__text">
          <strong className="cookie-banner__title">Your privacy, your choice.</strong>{" "}
          We use essential cookies to make this site work. With your permission we may also use
          optional cookies to understand how it is used and to improve your experience. See our{" "}
          <Link href="/cookies" className="cookie-banner__link">
            Cookie Policy
          </Link>
          .
        </p>
      </div>
      <div className="cookie-banner__actions">
        <button type="button" className="cookie-btn cookie-btn--primary" onClick={acceptAll}>
          Accept All
        </button>
        <button type="button" className="cookie-btn cookie-btn--ghost" onClick={rejectNonEssential}>
          Reject Non-Essential
        </button>
        <button type="button" className="cookie-btn cookie-btn--link" onClick={openPreferences}>
          Manage Preferences
        </button>
      </div>
    </section>
  );
}

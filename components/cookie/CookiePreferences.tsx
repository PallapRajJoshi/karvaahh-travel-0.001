"use client";

import { useEffect, useRef } from "react";
import { LegalIcon } from "@/components/legal/LegalIcon";
import { closePreferences } from "@/lib/cookie/consent";
import { useCookieConsent, usePreferencesOpen } from "@/lib/cookie/use-cookie-consent";
import { CookiePreferencesPanel, DEFAULT_CHOICES } from "./CookiePreferencesPanel";

/**
 * Preferences modal built on the native <dialog> element, which provides
 * focus trapping, Escape-to-close, an inert background and focus restoration.
 * Opened from the banner's "Manage Preferences" or from <CookieSettingsButton>.
 */
export function CookiePreferences() {
  const open = usePreferencesOpen();
  const consent = useCookieConsent();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const initial = consent.status === "decided" ? consent.consent.categories : DEFAULT_CHOICES;
  const panelKey = consent.status === "decided" ? consent.consent.decidedAt : consent.status;

  return (
    <dialog
      ref={dialogRef}
      className="cookie-dialog"
      aria-labelledby="cookie-dialog-title"
      aria-describedby="cookie-dialog-desc"
      onClose={closePreferences}
      onClick={(event) => {
        // A click on the backdrop targets the <dialog> element itself.
        if (event.target === event.currentTarget) closePreferences();
      }}
    >
      {open ? (
        <div className="cookie-dialog__surface">
          <header className="cookie-dialog__header">
            <span className="cookie-dialog__icon">
              <LegalIcon name="cookie" size={22} />
            </span>
            <div>
              <h2 id="cookie-dialog-title" className="cookie-dialog__title">
                Cookie preferences
              </h2>
              <p id="cookie-dialog-desc" className="cookie-dialog__lead">
                Choose which optional cookies Karvaahh may use. You can change this at any time.
              </p>
            </div>
            <button
              type="button"
              className="cookie-dialog__close"
              onClick={closePreferences}
              aria-label="Close cookie preferences"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" focusable="false">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </header>
          <CookiePreferencesPanel key={panelKey} initial={initial} onDone={closePreferences} />
        </div>
      ) : null}
    </dialog>
  );
}

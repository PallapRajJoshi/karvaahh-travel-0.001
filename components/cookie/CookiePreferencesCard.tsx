"use client";

import { useState } from "react";
import "./cookie.css";
import { useCookieConsent } from "@/lib/cookie/use-cookie-consent";
import { LegalIcon } from "@/components/legal/LegalIcon";
import { CookiePreferencesPanel, DEFAULT_CHOICES } from "./CookiePreferencesPanel";

/**
 * Inline "Cookie Preferences" card for the /cookies page — the same panel as
 * the modal, shown in the flow of the document.
 */
export function CookiePreferencesCard() {
  const consent = useCookieConsent();
  const [message, setMessage] = useState("");

  const initial = consent.status === "decided" ? consent.consent.categories : DEFAULT_CHOICES;
  const panelKey = consent.status === "decided" ? consent.consent.decidedAt : consent.status;

  return (
    <div className="cookie-card">
      <div className="cookie-card__head">
        <span className="cookie-card__icon">
          <LegalIcon name="cookie" size={22} />
        </span>
        <div>
          <p className="cookie-card__title">Your cookie preferences</p>
          <p className="cookie-card__status">
            {consent.status === "decided"
              ? `Saved on ${new Date(consent.consent.decidedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}`
              : consent.status === "undecided"
                ? "No choice saved yet — only essential cookies are active."
                : "\u00a0"}
          </p>
        </div>
      </div>
      <CookiePreferencesPanel key={panelKey} initial={initial} onDone={setMessage} />
      <p className="cookie-card__message" role="status" aria-live="polite">
        {message}
      </p>
    </div>
  );
}

"use client";

import { useId, useState } from "react";
import { LegalIcon } from "@/components/legal/LegalIcon";
import { COOKIE_CATEGORIES, entriesFor } from "@/lib/cookie/config";
import { acceptAll, rejectNonEssential, saveConsent } from "@/lib/cookie/consent";
import type { ConsentChoices, CookieCategoryId } from "@/lib/cookie/types";

interface CookiePreferencesPanelProps {
  /** Starting state of the switches. Remount (via `key`) to reset after consent changes. */
  initial: ConsentChoices;
  /** Called after any action that saves a choice. */
  onDone?: (message: string) => void;
}

export const DEFAULT_CHOICES: ConsentChoices = {
  essential: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

/**
 * Category switches plus the three actions. Used both inside the modal dialog
 * and inline on the /cookies page, so the UI exists exactly once.
 */
export function CookiePreferencesPanel({ initial, onDone }: CookiePreferencesPanelProps) {
  const [choices, setChoices] = useState<ConsentChoices>(initial);
  const baseId = useId();

  const toggle = (id: CookieCategoryId) =>
    setChoices((current) => ({ ...current, [id]: !current[id] }));

  return (
    <div className="cookie-panel">
      <fieldset className="cookie-panel__fieldset">
        <legend className="cookie-visually-hidden">Cookie categories</legend>
        <ul className="cookie-panel__list">
          {COOKIE_CATEGORIES.map((category) => {
            const inputId = `${baseId}-${category.id}`;
            const descId = `${inputId}-desc`;
            const inUse = entriesFor(category.id).length;
            return (
              <li key={category.id} className="cookie-panel__item">
                <div className="cookie-panel__text">
                  <label className="cookie-panel__name" htmlFor={inputId}>
                    {category.label}
                    {category.required ? (
                      <span className="cookie-panel__badge">Always on</span>
                    ) : null}
                  </label>
                  <p id={descId} className="cookie-panel__desc">
                    {category.description}
                  </p>
                  {!category.required && inUse === 0 ? (
                    <p className="cookie-panel__hint">
                      No tools in this category are active on the website at the moment.
                    </p>
                  ) : null}
                </div>
                <span className="cookie-switch">
                  <input
                    id={inputId}
                    type="checkbox"
                    role="switch"
                    className="cookie-switch__input"
                    checked={choices[category.id]}
                    disabled={category.required}
                    aria-describedby={descId}
                    onChange={() => toggle(category.id)}
                  />
                  <span className="cookie-switch__track" aria-hidden="true">
                    <span className="cookie-switch__thumb" />
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <div className="cookie-panel__actions">
        <button
          type="button"
          className="cookie-btn cookie-btn--primary"
          onClick={() => {
            saveConsent(choices);
            onDone?.("Your cookie preferences have been saved.");
          }}
        >
          <LegalIcon name="check" size={18} />
          Save my choices
        </button>
        <button
          type="button"
          className="cookie-btn cookie-btn--secondary"
          onClick={() => {
            acceptAll();
            onDone?.("All cookies accepted.");
          }}
        >
          Accept All
        </button>
        <button
          type="button"
          className="cookie-btn cookie-btn--secondary"
          onClick={() => {
            rejectNonEssential();
            onDone?.("Only essential cookies are enabled.");
          }}
        >
          Reject Non-Essential
        </button>
      </div>
    </div>
  );
}

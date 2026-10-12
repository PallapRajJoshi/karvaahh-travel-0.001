"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useTransition,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { submitEnquiry } from "@/app/contact/actions";
import {
  BUDGETS,
  CONTACT_METHODS,
  COUNTRY_SUGGESTIONS,
  TRAVELER_COUNTS,
  TRAVEL_TYPES,
} from "@/lib/contact/options";
import { subscribePrefill, type Prefill } from "@/lib/contact/prefill";
import {
  EMPTY_VALUES,
  FIELD_ORDER,
  LIMITS,
  validateEnquiry,
  type EnquiryValues,
  type FieldName,
} from "@/lib/contact/validate";
import { ContactIcon } from "./ContactIcon";

type Status = "idle" | "invalid" | "failed" | "success";

type FallbackLinks = {
  whatsappHref: string | null;
  phoneHref: string | null;
  phoneDisplay: string | null;
};

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  flash?: boolean;
  wide?: boolean;
  children: ReactNode;
};

function Field({ id, label, required, error, hint, flash, wide, children }: FieldProps) {
  return (
    <div className={`ct-field${wide ? " ct-field--wide" : ""}${flash ? " is-flash" : ""}${error ? " has-error" : ""}`}>
      <label className="ct-field__label" htmlFor={id}>
        {label}
        {required ? (
          <>
            <span className="ct-field__star" aria-hidden="true">
              {" "}
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        ) : (
          <span className="ct-field__optional"> (optional)</span>
        )}
      </label>
      {children}
      {hint && !error ? (
        <p className="ct-field__hint" id={`${id}-hint`}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className="ct-field__error" id={`${id}-error`}>
          <ContactIcon name="plus" size={14} className="ct-field__error-icon" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function EnquiryForm({ fallback }: { fallback: FallbackLinks }) {
  const uid = useId();
  const fid = (name: FieldName) => `${uid}-${name}`;

  const [values, setValues] = useState<EnquiryValues>(EMPTY_VALUES);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [flash, setFlash] = useState<Partial<Record<FieldName, boolean>>>({});
  const [honeypot, setHoneypot] = useState("");
  const [pending, startTransition] = useTransition();

  const startedAt = useRef(0);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const errors = useMemo(() => validateEnquiry(values), [values]);
  const shown = (name: FieldName) => (touched[name] || attempted ? errors[name] : undefined);

  // Time-trap start (read only inside the submit handler).
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  // Move focus to the confirmation so screen-reader users hear it.
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  // Category cards / deep links pre-fill the form.
  const applyPrefill = useCallback((prefill: Prefill) => {
    setValues((current) => {
      const next = { ...current };
      if (prefill.travelType) next.travelType = prefill.travelType;
      if (prefill.budget) next.budget = prefill.budget;
      if (prefill.contactMethod) next.contactMethod = prefill.contactMethod;
      if (prefill.destination && !current.destination) next.destination = prefill.destination;
      return next;
    });
    setStatus((s) => (s === "success" ? "idle" : s));
    setFlash({
      ...(prefill.travelType ? { travelType: true } : {}),
      ...(prefill.budget ? { budget: true } : {}),
      ...(prefill.contactMethod ? { contactMethod: true } : {}),
      ...(prefill.destination ? { destination: true } : {}),
    });
    if (flashTimer.current) clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setFlash({}), 1800);
  }, []);

  useEffect(() => {
    const unsubscribe = subscribePrefill(applyPrefill);
    return () => {
      unsubscribe();
      if (flashTimer.current) clearTimeout(flashTimer.current);
    };
  }, [applyPrefill]);

  const update = (name: FieldName) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = event.target.value;
    setValues((v) => ({ ...v, [name]: value }));
    setStatus((s) => (s === "invalid" || s === "failed" ? "idle" : s));
  };

  const control = (name: FieldName, hint?: string) => {
    const error = shown(name);
    const describedBy = error ? `${fid(name)}-error` : hint ? `${fid(name)}-hint` : undefined;
    return {
      id: fid(name),
      name,
      value: values[name],
      onChange: update(name),
      onBlur: () => setTouched((t) => (t[name] ? t : { ...t, [name]: true })),
      "aria-invalid": error ? (true as const) : undefined,
      "aria-describedby": describedBy,
    };
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending) return;
    setAttempted(true);

    const firstInvalid = FIELD_ORDER.find((f) => errors[f]);
    if (firstInvalid) {
      setStatus("invalid");
      const el = document.getElementById(fid(firstInvalid));
      el?.focus();
      return;
    }

    setStatus("idle");
    startTransition(async () => {
      try {
        const result = await submitEnquiry({
          ...values,
          company_website: honeypot,
          _t: String(startedAt.current),
        });
        if (result.ok) setStatus("success");
        else setStatus(result.kind === "validation" ? "invalid" : "failed");
      } catch {
        setStatus("failed");
      }
    });
  };

  const reset = () => {
    setValues(EMPTY_VALUES);
    setTouched({});
    setAttempted(false);
    setStatus("idle");
    startedAt.current = Date.now();
  };

  if (status === "success") {
    return (
      <div className="ct-success" ref={successRef} tabIndex={-1} role="status">
        <span className="ct-success__badge">
          <svg viewBox="0 0 52 52" width="52" height="52" aria-hidden="true" focusable="false">
            <circle className="ct-success__ring" cx="26" cy="26" r="23" fill="none" strokeWidth="2.5" />
            <path className="ct-success__tick" d="M15 27l8 8 14-16" fill="none" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="ct-success__title">Thank You for Contacting Karvaahh!</h3>
        <p className="ct-success__text">
          Your travel enquiry has been received. Our travel expert will contact you shortly.
        </p>
        <div className="ct-success__actions">
          {fallback.whatsappHref ? (
            <a className="ct-btn ct-btn--dark" href={fallback.whatsappHref} target="_blank" rel="noopener noreferrer">
              <ContactIcon name="message" size={20} />
              Continue on WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
          <button type="button" className="ct-btn ct-btn--outline" onClick={reset}>
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  const contactMethodError = shown("contactMethod");

  return (
    <form className="ct-form" onSubmit={onSubmit} noValidate aria-busy={pending}>
      <div className="ct-form__grid">
        <Field id={fid("name")} label="Full Name" required error={shown("name")}>
          <input
            {...control("name")}
            className="ct-input"
            type="text"
            autoComplete="name"
            maxLength={LIMITS.name}
            aria-required="true"
            placeholder="Your full name"
          />
        </Field>

        <Field id={fid("email")} label="Email Address" required error={shown("email")}>
          <input
            {...control("email")}
            className="ct-input"
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={LIMITS.email}
            aria-required="true"
            placeholder="you@example.com"
          />
        </Field>

        <Field
          id={fid("phone")}
          label="Phone / WhatsApp Number"
          required
          error={shown("phone")}
          hint="Include your country code, e.g. +977 …"
        >
          <input
            {...control("phone", "Include your country code")}
            className="ct-input"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={LIMITS.phone}
            aria-required="true"
            placeholder="+977 98XXXXXXXX"
          />
        </Field>

        <Field id={fid("country")} label="Country" required error={shown("country")}>
          <input
            {...control("country")}
            className="ct-input"
            type="text"
            autoComplete="country-name"
            list={`${uid}-countries`}
            maxLength={LIMITS.country}
            aria-required="true"
            placeholder="Where do you live?"
          />
          <datalist id={`${uid}-countries`}>
            {COUNTRY_SUGGESTIONS.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </Field>

        <Field
          id={fid("destination")}
          label="Travel Destination"
          required
          wide
          flash={flash.destination}
          error={shown("destination")}
          hint="A place, a region, or “Not sure yet”."
        >
          <input
            {...control("destination", "A place, a region, or “Not sure yet”.")}
            className="ct-input"
            type="text"
            maxLength={LIMITS.destination}
            aria-required="true"
            placeholder="e.g. Pokhara, Kedarnath, Dubai"
          />
        </Field>

        <Field id={fid("travelDate")} label="Travel Date" error={shown("travelDate")}>
          <input {...control("travelDate")} className="ct-input" type="date" />
        </Field>

        <Field id={fid("travelers")} label="Number of Travelers" error={shown("travelers")}>
          <select {...control("travelers")} className="ct-input ct-select">
            <option value="">Select</option>
            {TRAVELER_COUNTS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>

        <Field id={fid("travelType")} label="Travel Type" flash={flash.travelType} error={shown("travelType")}>
          <select {...control("travelType")} className="ct-input ct-select">
            <option value="">Select</option>
            {TRAVEL_TYPES.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>

        <Field id={fid("budget")} label="Budget Range" flash={flash.budget} error={shown("budget")}>
          <select {...control("budget")} className="ct-input ct-select">
            <option value="">Select</option>
            {BUDGETS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>

        <fieldset className={`ct-field ct-field--wide ct-choice${flash.contactMethod ? " is-flash" : ""}`}>
          <legend className="ct-field__label">
            Preferred Contact Method<span className="ct-field__optional"> (optional)</span>
          </legend>
          <div className="ct-choice__row" role="presentation">
            {CONTACT_METHODS.map((o) => (
              <div className="ct-choice__item" key={o.value}>
                <input
                  className="ct-choice__input"
                  type="radio"
                  id={`${fid("contactMethod")}-${o.value}`}
                  name="contactMethod"
                  value={o.value}
                  checked={values.contactMethod === o.value}
                  onChange={update("contactMethod")}
                  aria-describedby={contactMethodError ? `${fid("contactMethod")}-error` : undefined}
                />
                <label className="ct-choice__label" htmlFor={`${fid("contactMethod")}-${o.value}`}>
                  {o.label}
                </label>
              </div>
            ))}
          </div>
          {contactMethodError ? (
            <p className="ct-field__error" id={`${fid("contactMethod")}-error`}>
              {contactMethodError}
            </p>
          ) : null}
        </fieldset>

        <Field
          id={fid("message")}
          label="Message / Travel Requirements"
          required
          wide
          error={shown("message")}
          hint="Interests, group size, must-see places, special occasions — anything that helps."
        >
          <textarea
            {...control("message", "Interests, group size, must-see places, special occasions — anything that helps.")}
            className="ct-input ct-textarea"
            rows={5}
            maxLength={LIMITS.message}
            aria-required="true"
            placeholder="Tell us what you have in mind…"
          />
        </Field>

        {/* Honeypot: invisible to people, tempting to bots. */}
        <div className="ct-hp" aria-hidden="true">
          <label htmlFor={`${uid}-company`}>Company website</label>
          <input
            id={`${uid}-company`}
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>
      </div>

      <div className="ct-form__status" aria-live="polite">
        {status === "invalid" ? (
          <p className="ct-alert ct-alert--warn">Please check the highlighted fields and try again.</p>
        ) : null}
        {status === "failed" ? (
          <div className="ct-alert ct-alert--error" role="alert">
            <p>
              We couldn’t send your enquiry just now. Please try again in a moment
              {fallback.whatsappHref || fallback.phoneHref ? " or reach us directly:" : "."}
            </p>
            {fallback.whatsappHref || fallback.phoneHref ? (
              <p className="ct-alert__links">
                {fallback.whatsappHref ? (
                  <a href={fallback.whatsappHref} target="_blank" rel="noopener noreferrer">
                    WhatsApp<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : null}
                {fallback.phoneHref && fallback.phoneDisplay ? <a href={fallback.phoneHref}>{fallback.phoneDisplay}</a> : null}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="ct-form__footer">
        <button type="submit" className="ct-btn ct-btn--gold ct-btn--lg ct-form__submit" disabled={pending}>
          {pending ? (
            <>
              <span className="ct-spinner" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send Enquiry
              <ContactIcon name="send" size={20} />
            </>
          )}
        </button>
        <p className="ct-form__legal">
          By sending this enquiry you agree to our <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>.
        </p>
      </div>
    </form>
  );
}

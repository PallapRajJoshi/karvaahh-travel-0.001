"use client";

import { useEffect, useId, useRef, useState } from "react";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import {
  DESTINATION_OPTIONS,
  DURATION_OPTIONS,
  INQUIRY_CTA,
  INQUIRY_HEADING,
  INQUIRY_LEDE,
  INTEREST_OPTIONS,
} from "../data/inquiry";
import { IDS } from "../data/page";
import { PREFILL_EVENT } from "../lib/prefill";
import { CONTACT_EMAIL, CONTACT_PAGE, WHATSAPP_NUMBER } from "../lib/inquiry-config";
import {
  submitInquiry,
  summarise,
  validateAll,
  validateField,
  type FieldName,
  type InquiryErrors,
  type InquiryValues,
} from "../lib/inquiry";
import type { InquiryPrefill, InterestId } from "../types";
import "./CultureInquiryForm.css";

type Status = "idle" | "submitting" | "sent" | "ready" | "failed";

const nameOf = (t: EventTarget): FieldName => (t as HTMLInputElement).name as FieldName;

const LIVE_VALIDATED: FieldName[] = ["fullName", "email", "phone", "country", "travelers", "notes"];

const FIELD_LABELS: Record<FieldName, string> = {
  fullName: "Full name",
  email: "Email address",
  phone: "Phone / WhatsApp number",
  country: "Country of residence",
  travelDates: "Preferred travel dates",
  travelers: "Number of travelers",
  destination: "Preferred destination",
  interests: "Cultural interests",
  duration: "Preferred trip duration",
  budget: "Budget range",
  notes: "Additional requirements",
};

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  hint?: string;
  error?: string;
  children: (a: { id: string; describedBy?: string; invalid?: boolean }) => React.ReactNode;
}

function Field({ id, label, required, optional, hint, error, children }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errId].filter(Boolean).join(" ") || undefined;
  return (
    <div className={`inq-field${error ? " inq-field--error" : ""}`}>
      <label htmlFor={id} className="inq-field__label">
        {label}
        {required ? <span className="inq-field__req" aria-hidden="true"> *</span> : null}
        {optional ? <span className="inq-field__opt"> (optional)</span> : null}
      </label>
      {children({ id, describedBy, invalid: error ? true : undefined })}
      {hint ? <p id={hintId} className="inq-field__hint">{hint}</p> : null}
      {error ? <p id={errId} className="inq-field__error">{error}</p> : null}
    </div>
  );
}

export default function CultureInquiryForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  const [interests, setInterests] = useState<InterestId[]>([]);
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [failReason, setFailReason] = useState("");
  const [prefilled, setPrefilled] = useState("");
  const [snapshot, setSnapshot] = useState<{ values: InquiryValues; text: string } | null>(null);
  const [copied, setCopied] = useState(false);

  // Cards elsewhere on the page can pre-fill this form. See lib/prefill.ts.
  useEffect(() => {
    const onPrefill = (e: Event) => {
      const d = (e as CustomEvent<InquiryPrefill>).detail ?? {};
      if (d.interest) {
        const it = d.interest;
        setInterests((cur) => (cur.includes(it) ? cur : [...cur, it]));
      }
      if (d.destination && DESTINATION_OPTIONS.some((o) => o.value === d.destination)) {
        setDestination(d.destination);
      }
      if (d.message) {
        const msg = d.message;
        setNotes((cur) => (cur.includes(msg) ? cur : cur ? `${cur}\n${msg}` : msg));
      }
      setStatus((s) => (s === "sent" || s === "ready" || s === "failed" ? "idle" : s));
      setPrefilled(d.label ?? "your selection");
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const readValues = (): InquiryValues => {
    const fd = new FormData(formRef.current ?? undefined);
    const s = (k: string) => String(fd.get(k) ?? "");
    return {
      fullName: s("fullName"),
      email: s("email"),
      phone: s("phone"),
      country: s("country"),
      travelDates: s("travelDates"),
      travelers: s("travelers"),
      destination,
      interests,
      duration,
      budget: s("budget"),
      notes,
    };
  };

  const setFieldError = (name: FieldName, msg: string | undefined) =>
    setErrors((cur) => {
      const next = { ...cur };
      if (msg) next[name] = msg;
      else delete next[name];
      return next;
    });

  const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    const name = nameOf(e.target);
    if (!LIVE_VALIDATED.includes(name)) return;
    setFieldError(name, validateField(name, readValues()));
  };

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    const name = nameOf(e.target);
    if (!LIVE_VALIDATED.includes(name) || !errors[name]) return;
    setFieldError(name, validateField(name, readValues()));
  };

  const toggleInterest = (id: InterestId) => {
    const next = interests.includes(id) ? interests.filter((x) => x !== id) : [...interests, id];
    setInterests(next);
    if (errors.interests && next.length > 0) setFieldError("interests", undefined);
  };

  const labelFor = (opts: { value: string; label: string }[], v: string) =>
    v ? (opts.find((o) => o.value === v)?.label ?? "") : "";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    const values = readValues();
    const errs = validateAll(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      window.requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setStatus("submitting");
    setCopied(false);
    const interestLabels = INTEREST_OPTIONS.filter((o) => values.interests.includes(o.id)).map((o) => o.label);
    const text = summarise(values, interestLabels, labelFor(DESTINATION_OPTIONS, values.destination), labelFor(DURATION_OPTIONS, values.duration));
    setSnapshot({ values, text });

    const result = await submitInquiry(values);
    if (result.kind === "sent") {
      setStatus("sent");
      formRef.current?.reset();
      setInterests([]);
      setDestination("");
      setDuration("");
      setNotes("");
      setPrefilled("");
    } else if (result.kind === "failed") {
      setFailReason(result.reason);
      setStatus("failed");
    } else {
      setStatus("ready");
    }
  };

  const copySummary = async () => {
    if (!snapshot) return;
    try {
      await navigator.clipboard.writeText(snapshot.text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const errorList = (Object.keys(errors) as FieldName[]).filter((k) => errors[k]);
  const fieldId = (n: FieldName) => `${uid}-${n}`;
  const subject = encodeURIComponent("Culture & Festival Experiences inquiry");
  const body = encodeURIComponent(snapshot?.text ?? "");
  const busy = status === "submitting";
  const showFallback = status === "ready" || status === "failed";

  return (
    <section id={IDS.plan} className="culture-inquiry" aria-labelledby="culture-inquiry-title">
      <div className="cx-container culture-inquiry__grid">
        <Reveal className="culture-inquiry__intro">
          <SectionHeading id="culture-inquiry-title" eyebrow="Plan with us" title={INQUIRY_HEADING} lede={INQUIRY_LEDE} tone="dark" />
          <ol className="culture-inquiry__steps">
            <li>Share your interests, dates and group size.</li>
            <li>Our team suggests a journey shaped around them.</li>
            <li>You adjust the plan until it feels right.</li>
          </ol>
        </Reveal>

        <Reveal className="culture-inquiry__panel" delay={120}>
          {status === "sent" && snapshot ? (
            <div className="inq-result inq-result--sent" role="status">
              <h3>Thank you, {snapshot.values.fullName.trim().split(" ")[0]}.</h3>
              <p>Your inquiry was received. Our team will reply to {snapshot.values.email.trim()}.</p>
              <button type="button" className="inq-link" onClick={() => setStatus("idle")}>
                Send another inquiry
              </button>
            </div>
          ) : null}

          {showFallback && snapshot ? (
            <div className={`inq-result inq-result--${status}`} role="status">
              {status === "failed" ? (
                <>
                  <h3>We couldn’t send your inquiry</h3>
                  <p>
                    {failReason} Nothing was sent. Please try again, or contact our team directly with the details below.
                  </p>
                </>
              ) : (
                <>
                  <h3>Your inquiry is ready to send</h3>
                  <p>
                    It has not been sent yet. Online submission isn’t connected on this page, so please send it to our team by email or WhatsApp.
                  </p>
                </>
              )}

              <pre className="inq-result__summary" tabIndex={0} aria-label="Your inquiry details">{snapshot.text}</pre>

              <div className="inq-result__actions">
                {CONTACT_EMAIL ? (
                  <a className="cx-cta cx-cta--gold" href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}>
                    <span>Send by email</span>
                  </a>
                ) : null}
                {WHATSAPP_NUMBER ? (
                  <a className="cx-cta cx-cta--ghost" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${body}`} target="_blank" rel="noopener noreferrer">
                    <span>Send on WhatsApp</span>
                  </a>
                ) : null}
                {!CONTACT_EMAIL && !WHATSAPP_NUMBER ? (
                  <a className="cx-cta cx-cta--gold" href={CONTACT_PAGE}>
                    <span>Go to contact page</span>
                  </a>
                ) : null}
                <button type="button" className="cx-cta cx-cta--ghost" onClick={copySummary}>
                  <span>{copied ? "Copied" : "Copy details"}</span>
                </button>
              </div>
              <button type="button" className="inq-link" onClick={() => setStatus("idle")}>
                Edit my details
              </button>
            </div>
          ) : null}

          {/* Kept mounted (just hidden) so "Edit my details" restores everything the visitor typed. */}
          {(
            <form ref={formRef} className="inq-form" hidden={status === "sent" || showFallback} noValidate onSubmit={onSubmit} onBlur={handleBlur} onChange={handleInput} aria-busy={busy}>
              <p className="inq-form__prefill" role="status" aria-live="polite">
                {prefilled ? `Pre-filled for ${prefilled}. Adjust anything below.` : ""}
              </p>

              {errorList.length > 0 ? (
                <div ref={summaryRef} className="inq-summary" role="alert" tabIndex={-1}>
                  <p>Please fix the following:</p>
                  <ul>
                    {errorList.map((k) => (
                      <li key={k}>
                        <a href={k === "interests" ? `#${uid}-interests` : `#${fieldId(k)}`}>{FIELD_LABELS[k]}</a>: {errors[k]}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="inq-form__row">
                <Field id={fieldId("fullName")} label="Full name" required error={errors.fullName}>
                  {(a) => <input id={a.id} name="fullName" type="text" autoComplete="name" required aria-invalid={a.invalid} aria-describedby={a.describedBy} />}
                </Field>
                <Field id={fieldId("email")} label="Email address" required error={errors.email}>
                  {(a) => <input id={a.id} name="email" type="email" autoComplete="email" inputMode="email" required aria-invalid={a.invalid} aria-describedby={a.describedBy} />}
                </Field>
              </div>

              <div className="inq-form__row">
                <Field id={fieldId("phone")} label="Phone / WhatsApp number" optional hint="Include the country code." error={errors.phone}>
                  {(a) => <input id={a.id} name="phone" type="tel" autoComplete="tel" inputMode="tel" aria-invalid={a.invalid} aria-describedby={a.describedBy} />}
                </Field>
                <Field id={fieldId("country")} label="Country of residence" required error={errors.country}>
                  {(a) => <input id={a.id} name="country" type="text" autoComplete="country-name" required aria-invalid={a.invalid} aria-describedby={a.describedBy} />}
                </Field>
              </div>

              <div className="inq-form__row">
                <Field id={fieldId("travelDates")} label="Preferred travel dates" optional hint="For example, “late October 2026” or “flexible”.">
                  {(a) => <input id={a.id} name="travelDates" type="text" aria-describedby={a.describedBy} />}
                </Field>
                <Field id={fieldId("travelers")} label="Number of travelers" required error={errors.travelers}>
                  {(a) => <input id={a.id} name="travelers" type="number" min={1} max={99} inputMode="numeric" required aria-invalid={a.invalid} aria-describedby={a.describedBy} />}
                </Field>
              </div>

              <div className="inq-form__row">
                <Field id={fieldId("destination")} label="Preferred destination" optional>
                  {(a) => (
                    <select id={a.id} name="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
                      {DESTINATION_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  )}
                </Field>
                <Field id={fieldId("duration")} label="Preferred trip duration" optional>
                  {(a) => (
                    <select id={a.id} name="duration" value={duration} onChange={(e) => setDuration(e.target.value)}>
                      {DURATION_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  )}
                </Field>
              </div>

              <fieldset className={`inq-interests${errors.interests ? " inq-interests--error" : ""}`} id={`${uid}-interests`} tabIndex={-1} aria-describedby={errors.interests ? `${uid}-interests-error` : undefined}>
                <legend>
                  Cultural interests<span className="inq-field__req" aria-hidden="true"> *</span>
                </legend>
                <div className="inq-interests__grid">
                  {INTEREST_OPTIONS.map((o) => (
                    <label key={o.id} className="inq-chip">
                      <input type="checkbox" name="interests" value={o.id} checked={interests.includes(o.id)} onChange={() => toggleInterest(o.id)} />
                      <span>{o.label}</span>
                    </label>
                  ))}
                </div>
                {errors.interests ? <p id={`${uid}-interests-error`} className="inq-field__error">{errors.interests}</p> : null}
              </fieldset>

              <Field id={fieldId("budget")} label="Budget range" optional hint="An approximate budget per person, and the currency.">
                {(a) => <input id={a.id} name="budget" type="text" aria-describedby={a.describedBy} />}
              </Field>

              <Field id={fieldId("notes")} label="Additional requirements" optional error={errors.notes}>
                {(a) => <textarea id={a.id} name="notes" rows={4} maxLength={1600} value={notes} onChange={(e) => setNotes(e.target.value)} aria-invalid={a.invalid} aria-describedby={a.describedBy} />}
              </Field>

              <button type="submit" className="cx-cta cx-cta--gold inq-form__submit" disabled={busy}>
                <span>{busy ? "Sending…" : INQUIRY_CTA}</span>
              </button>
              <p className="inq-form__fine">We’ll use these details to respond to your inquiry. Fields marked * are required.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

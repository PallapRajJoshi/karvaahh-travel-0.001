"use client";

import { useEffect, useId, useState } from "react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { PREFILL_EVENT } from "./PlanLink";
import { DESTINATION_OPTIONS } from "./data/destinations";
import {
  ADVENTURE_TYPES,
  EXPERIENCE_LEVELS,
  TRIP_DURATIONS,
} from "./data/inquiry";
import { HEADINGS } from "./data/copy";
import type { InquiryPrefill } from "./data/types";
import {
  ANCHORS,
  CONTACT_EMAIL,
  INQUIRY_ENDPOINT,
  PAGE_PATH,
  WHATSAPP_NUMBER,
} from "./data/site";
import "./AdventureInquiryForm.css";

interface Values {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  dates: string;
  travelers: string;
  destination: string;
  adventureType: string;
  duration: string;
  budget: string;
  experience: string;
  requirements: string;
  /** Honeypot. Real visitors never see or fill this. */
  company: string;
}

type FieldName = keyof Values;
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "sent" | "failed" | "unconfigured";

const EMPTY: Values = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  dates: "",
  travelers: "",
  destination: "",
  adventureType: "",
  duration: "",
  budget: "",
  experience: "",
  requirements: "",
  company: "",
};

/** Field order, used to focus the first invalid field. */
const ORDER: FieldName[] = [
  "fullName",
  "email",
  "phone",
  "country",
  "dates",
  "travelers",
  "destination",
  "adventureType",
  "duration",
  "requirements",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.fullName.trim().length < 2) e.fullName = "Please enter your full name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
  const digits = v.phone.replace(/\D/g, "");
  if (!v.phone.trim()) e.phone = "Please enter a phone or WhatsApp number.";
  else if (digits.length < 7 || digits.length > 15)
    e.phone = "Please enter a valid number, including the country code.";
  if (!v.country.trim()) e.country = "Please enter your country of residence.";
  if (!v.dates.trim()) e.dates = "Please tell us your preferred dates, or say they are flexible.";
  const n = Number(v.travelers);
  if (!v.travelers.trim()) e.travelers = "Please enter the number of travelers.";
  else if (!Number.isInteger(n) || n < 1 || n > 50)
    e.travelers = "Please enter a whole number between 1 and 50.";
  if (!v.destination) e.destination = "Please choose a destination, or “Not sure yet”.";
  if (!v.adventureType) e.adventureType = "Please choose an adventure type.";
  if (!v.duration) e.duration = "Please choose a trip duration, or “Not sure yet”.";
  if (v.requirements.length > 1500)
    e.requirements = "Please keep this under 1,500 characters.";
  return e;
}

function summarise(v: Values): string {
  const lines = [
    "Road & Trail Adventure inquiry",
    `Name: ${v.fullName}`,
    `Email: ${v.email}`,
    `Phone / WhatsApp: ${v.phone}`,
    `Country: ${v.country}`,
    `Preferred dates: ${v.dates}`,
    `Travelers: ${v.travelers}`,
    `Destination: ${v.destination}`,
    `Adventure type: ${v.adventureType}`,
    `Trip duration: ${v.duration}`,
    v.budget ? `Budget: ${v.budget}` : "",
    v.experience ? `Experience level: ${v.experience}` : "",
    v.requirements ? `Additional requirements: ${v.requirements}` : "",
  ];
  return lines.filter(Boolean).join("\n");
}

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  wide?: boolean;
  children: (aria: {
    "aria-invalid": boolean;
    "aria-describedby": string | undefined;
    "aria-required": boolean;
  }) => ReactNode;
}

function Field({ id, label, required, error, hint, wide, children }: FieldProps) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [hint ? hintId : "", error ? errorId : ""].filter(Boolean).join(" ");
  return (
    <div className={`rt-field${wide ? " rt-field--wide" : ""}${error ? " has-error" : ""}`}>
      <label htmlFor={id} className="rt-field__label">
        {label}
        {required ? (
          <span className="rt-field__req" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="rt-field__opt"> (optional)</span>
        )}
      </label>
      {children({
        "aria-invalid": Boolean(error),
        "aria-describedby": describedBy || undefined,
        "aria-required": Boolean(required),
      })}
      {hint ? (
        <p id={hintId} className="rt-field__hint">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="rt-field__error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Inquiry form. It NEVER shows a success message unless the configured
 * endpoint accepted the request. With no endpoint configured it says plainly
 * that nothing was sent and offers copy / email / WhatsApp fallbacks.
 */
export default function AdventureInquiryForm() {
  const h = HEADINGS.inquiry;
  const uid = useId();
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const fid = (name: FieldName) => `${uid}-${name}`;

  // Destination / adventure type chosen by a CTA elsewhere on the page.
  useEffect(() => {
    const onPrefill = (event: Event) => {
      const detail = (event as CustomEvent<InquiryPrefill>).detail;
      if (!detail) return;
      setValues((prev) => ({
        ...prev,
        destination:
          detail.destination && DESTINATION_OPTIONS.includes(detail.destination)
            ? detail.destination
            : prev.destination,
        adventureType:
          detail.adventureType && ADVENTURE_TYPES.includes(detail.adventureType)
            ? detail.adventureType
            : prev.adventureType,
      }));
      setErrors((prev) => ({ ...prev, destination: undefined, adventureType: undefined }));
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const onChange =
    (name: FieldName) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const next = { ...values, [name]: event.target.value };
      setValues(next);
      if (touched[name] || errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: validate(next)[name] }));
      }
      if (status !== "idle" && status !== "submitting") setStatus("idle");
    };

  // Blur only flags a field the visitor actually typed into. An empty field is
  // left alone until submit: an error line appearing on blur pushes the submit
  // button down and makes the click miss.
  const onBlur = (name: FieldName) => () => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (values[name].trim() === "") return;
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (values.company) return; // honeypot tripped: do nothing, claim nothing

    const found = validate(values);
    setErrors(found);
    setTouched(Object.fromEntries(ORDER.map((k) => [k, true])));

    const firstInvalid = ORDER.find((k) => found[k]);
    if (firstInvalid) {
      document.getElementById(fid(firstInvalid))?.focus();
      return;
    }

    if (!INQUIRY_ENDPOINT) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");
    try {
      const { company: _company, ...payload } = values;
      void _company;
      const res = await fetch(INQUIRY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "road-trail-adventure",
          page: PAGE_PATH,
          ...payload,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setValues(EMPTY);
        setErrors({});
        setTouched({});
      } else {
        setStatus("failed");
      }
    } catch {
      setStatus("failed");
    }
  };

  const copyDetails = async () => {
    try {
      await navigator.clipboard.writeText(summarise(values));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const mailHref = CONTACT_EMAIL
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Road & Trail Adventure inquiry")}&body=${encodeURIComponent(summarise(values))}`
    : "";
  const waHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(summarise(values))}`
    : "";

  const errorCount = Object.values(errors).filter(Boolean).length;
  const submitting = status === "submitting";

  return (
    <section
      id={ANCHORS.inquiry}
      className="rt-section rt-inquiry"
      aria-labelledby="rt-inquiry-title"
    >
      <div className="rt-container rt-inquiry__layout">
        <Reveal className="rt-inquiry__intro">
          <p className="rt-eyebrow">{h.eyebrow}</p>
          <h2 id="rt-inquiry-title" className="rt-h2">
            {h.title}
          </h2>
          <p className="rt-lede">{h.text}</p>
          <ul className="rt-checklist rt-inquiry__points">
            <li>
              <Icon name="check" />
              <span>Share what you know. Anything undecided can stay open.</span>
            </li>
            <li>
              <Icon name="check" />
              <span>
                Route access, seasonal conditions and permits are checked before a plan is
                confirmed.
              </span>
            </li>
            <li>
              <Icon name="check" />
              <span>Your details are used to plan your journey.</span>
            </li>
          </ul>
        </Reveal>

        <Reveal index={1} className="rt-inquiry__card">
          {status === "sent" ? (
            <div className="rt-inquiry__result rt-inquiry__result--ok" role="status">
              <Icon name="check" />
              <h3>Thank you. Your inquiry has been sent.</h3>
              <p>We have received your details and will use them to plan your journey.</p>
              <button type="button" className="rt-btn rt-btn--outline" onClick={() => setStatus("idle")}>
                Send another inquiry
              </button>
            </div>
          ) : (
            <form className="rt-form" onSubmit={onSubmit} noValidate>
              <div className="rt-form__grid">
                <Field id={fid("fullName")} label="Full Name" required error={errors.fullName}>
                  {(aria) => (
                    <input
                      id={fid("fullName")}
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={values.fullName}
                      onChange={onChange("fullName")}
                      onBlur={onBlur("fullName")}
                      {...aria}
                    />
                  )}
                </Field>

                <Field id={fid("email")} label="Email Address" required error={errors.email}>
                  {(aria) => (
                    <input
                      id={fid("email")}
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      value={values.email}
                      onChange={onChange("email")}
                      onBlur={onBlur("email")}
                      {...aria}
                    />
                  )}
                </Field>

                <Field
                  id={fid("phone")}
                  label="Phone / WhatsApp Number"
                  required
                  error={errors.phone}
                  hint="Include your country code."
                >
                  {(aria) => (
                    <input
                      id={fid("phone")}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      value={values.phone}
                      onChange={onChange("phone")}
                      onBlur={onBlur("phone")}
                      {...aria}
                    />
                  )}
                </Field>

                <Field
                  id={fid("country")}
                  label="Country of Residence"
                  required
                  error={errors.country}
                >
                  {(aria) => (
                    <input
                      id={fid("country")}
                      name="country"
                      type="text"
                      autoComplete="country-name"
                      value={values.country}
                      onChange={onChange("country")}
                      onBlur={onBlur("country")}
                      {...aria}
                    />
                  )}
                </Field>

                <Field
                  id={fid("dates")}
                  label="Preferred Travel Dates"
                  required
                  error={errors.dates}
                  hint="For example, mid-March 2027, or “flexible”."
                >
                  {(aria) => (
                    <input
                      id={fid("dates")}
                      name="dates"
                      type="text"
                      value={values.dates}
                      onChange={onChange("dates")}
                      onBlur={onBlur("dates")}
                      {...aria}
                    />
                  )}
                </Field>

                <Field
                  id={fid("travelers")}
                  label="Number of Travelers"
                  required
                  error={errors.travelers}
                >
                  {(aria) => (
                    <input
                      id={fid("travelers")}
                      name="travelers"
                      type="number"
                      inputMode="numeric"
                      min={1}
                      max={50}
                      value={values.travelers}
                      onChange={onChange("travelers")}
                      onBlur={onBlur("travelers")}
                      {...aria}
                    />
                  )}
                </Field>

                <Field
                  id={fid("destination")}
                  label="Preferred Destination"
                  required
                  error={errors.destination}
                >
                  {(aria) => (
                    <select
                      id={fid("destination")}
                      name="destination"
                      value={values.destination}
                      onChange={onChange("destination")}
                      onBlur={onBlur("destination")}
                      {...aria}
                    >
                      <option value="">Select a destination</option>
                      {DESTINATION_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  )}
                </Field>

                <Field
                  id={fid("adventureType")}
                  label="Adventure Type"
                  required
                  error={errors.adventureType}
                >
                  {(aria) => (
                    <select
                      id={fid("adventureType")}
                      name="adventureType"
                      value={values.adventureType}
                      onChange={onChange("adventureType")}
                      onBlur={onBlur("adventureType")}
                      {...aria}
                    >
                      <option value="">Select an adventure type</option>
                      {ADVENTURE_TYPES.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  )}
                </Field>

                <Field
                  id={fid("duration")}
                  label="Preferred Trip Duration"
                  required
                  error={errors.duration}
                >
                  {(aria) => (
                    <select
                      id={fid("duration")}
                      name="duration"
                      value={values.duration}
                      onChange={onChange("duration")}
                      onBlur={onBlur("duration")}
                      {...aria}
                    >
                      <option value="">Select a duration</option>
                      {TRIP_DURATIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  )}
                </Field>

                <Field id={fid("budget")} label="Budget Range" hint="Any currency, or leave blank.">
                  {(aria) => (
                    <input
                      id={fid("budget")}
                      name="budget"
                      type="text"
                      value={values.budget}
                      onChange={onChange("budget")}
                      {...aria}
                    />
                  )}
                </Field>

                <Field id={fid("experience")} label="Adventure Experience Level">
                  {(aria) => (
                    <select
                      id={fid("experience")}
                      name="experience"
                      value={values.experience}
                      onChange={onChange("experience")}
                      {...aria}
                    >
                      <option value="">Select a level</option>
                      {EXPERIENCE_LEVELS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  )}
                </Field>

                <Field
                  id={fid("requirements")}
                  label="Additional Requirements"
                  error={errors.requirements}
                  wide
                >
                  {(aria) => (
                    <textarea
                      id={fid("requirements")}
                      name="requirements"
                      rows={4}
                      maxLength={1600}
                      value={values.requirements}
                      onChange={onChange("requirements")}
                      onBlur={onBlur("requirements")}
                      {...aria}
                    />
                  )}
                </Field>

                {/* Honeypot: hidden from people and assistive tech. */}
                <div className="rt-form__trap" aria-hidden="true">
                  <label htmlFor={fid("company")}>Company</label>
                  <input
                    id={fid("company")}
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.company}
                    onChange={onChange("company")}
                  />
                </div>
              </div>

              <div className="rt-form__live" aria-live="polite">
                {errorCount > 0 ? (
                  <p className="rt-form__summary">
                    Please check {errorCount} {errorCount === 1 ? "field" : "fields"} above.
                  </p>
                ) : null}

                {status === "failed" ? (
                  <p className="rt-form__msg rt-form__msg--error" role="alert">
                    <Icon name="alert" />
                    <span>
                      We could not send your inquiry. It has not been received. Please try again in a
                      moment.
                    </span>
                  </p>
                ) : null}
              </div>

              {status === "unconfigured" ? (
                <div className="rt-form__msg rt-form__msg--warn" role="alert">
                  <Icon name="alert" />
                  <div>
                    <p>
                      <strong>Your inquiry has not been sent.</strong> Online sending is not
                      connected on this page yet. You can still pass your details to us directly:
                    </p>
                    <div className="rt-form__fallbacks">
                      <button type="button" className="rt-btn rt-btn--outline rt-btn--sm" onClick={copyDetails}>
                        <Icon name="copy" />
                        {copied ? "Copied" : "Copy my details"}
                      </button>
                      {mailHref ? (
                        <a className="rt-btn rt-btn--outline rt-btn--sm" href={mailHref}>
                          <Icon name="mail" />
                          Open in email
                        </a>
                      ) : null}
                      {waHref ? (
                        <a
                          className="rt-btn rt-btn--outline rt-btn--sm"
                          href={waHref}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon name="chat" />
                          Open WhatsApp
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : null}

              <button type="submit" className="rt-btn rt-form__submit" disabled={submitting}>
                {submitting ? "Sending…" : h.submit}
                {submitting ? null : <Icon name="arrow" />}
              </button>
              <p className="rt-form__legal">Fields marked * are required.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

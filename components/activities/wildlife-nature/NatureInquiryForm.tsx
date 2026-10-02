"use client";

import { useEffect, useId, useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import {
  ACCOMMODATION_OPTIONS,
  COUNTRY_CODES,
  DESTINATION_OPTIONS,
  DURATION_OPTIONS,
  EXPERIENCE_OPTIONS,
  PURPOSE_OPTIONS,
} from "@/data/activities/wildlife-nature/form";
import { INQUIRY_ENDPOINT, LINKS } from "@/data/activities/wildlife-nature/links";
import type { Option, PrefillPayload } from "@/data/activities/wildlife-nature/types";
import { PREFILL_EVENT } from "./shared/prefill";
import { WildImage } from "./shared/WildImage";
import { Icon } from "./shared/Icon";
import "./NatureInquiryForm.css";

interface FormValues {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  destination: string;
  experience: string;
  travelDate: string;
  flexible: "yes" | "no";
  adults: string;
  children: string;
  duration: string;
  budget: string;
  purpose: string;
  interests: string;
  accommodation: string;
  notes: string;
  consent: boolean;
  company: string; // honeypot — must stay empty
}

type Errors = Partial<Record<keyof FormValues, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const INITIAL: FormValues = {
  name: "",
  email: "",
  countryCode: "+977",
  phone: "",
  destination: "",
  experience: "",
  travelDate: "",
  flexible: "yes",
  adults: "2",
  children: "0",
  duration: "",
  budget: "",
  purpose: "",
  interests: "",
  accommodation: "",
  notes: "",
  consent: false,
  company: "",
};

const FIELD_ORDER: (keyof FormValues)[] = [
  "name",
  "email",
  "phone",
  "travelDate",
  "adults",
  "children",
  "consent",
];

function todayISO() {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function validate(v: FormValues): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  const digits = v.phone.replace(/[^\d]/g, "");
  if (digits.length < 6 || digits.length > 15) e.phone = "Please enter a valid phone number (6–15 digits).";
  if (v.travelDate && v.travelDate < todayISO()) e.travelDate = "Please choose a date in the future, or leave it blank.";
  const adults = Number(v.adults);
  if (!Number.isInteger(adults) || adults < 1 || adults > 50) e.adults = "At least 1 adult is needed (max 50).";
  const children = Number(v.children);
  if (!Number.isInteger(children) || children < 0 || children > 50) e.children = "Enter 0 or more children.";
  if (!v.consent) e.consent = "Please confirm so we can contact you about this request.";
  return e;
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  placeholder: string;
}) {
  return (
    <div className="wn-form__field">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={id} value={value} onChange={onChange}>
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function NatureInquiryForm() {
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;

  const [values, setValues] = useState<FormValues>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [prefilled, setPrefilled] = useState(false);

  // Receive selections from cards / selector / itineraries elsewhere on the page.
  useEffect(() => {
    const onPrefill = (ev: Event) => {
      const p = (ev as CustomEvent<PrefillPayload>).detail;
      if (!p) return;
      setValues((prev) => ({
        ...prev,
        destination: p.destination ?? prev.destination,
        experience: p.experience ?? prev.experience,
        purpose: p.purpose ?? prev.purpose,
        interests: p.interests ?? prev.interests,
      }));
      setPrefilled(true);
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const set =
    <K extends keyof FormValues>(key: K) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = (e.target instanceof HTMLInputElement && e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value) as FormValues[K];
      setValues((prev) => ({ ...prev, [key]: value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const found = validate(values);
    setErrors(found);
    const firstBad = FIELD_ORDER.find((k) => found[k]);
    if (firstBad) {
      setStatus("idle");
      document.getElementById(id(firstBad))?.focus();
      return;
    }

    setStatus("submitting");
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch(INQUIRY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          ...values,
          phone: `${values.countryCode === "other" ? "" : values.countryCode} ${values.phone}`.trim(),
          source: "wildlife-nature",
          pageUrl: window.location.href,
        }),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setStatus("success");
      setValues(INITIAL);
      setPrefilled(false);
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timer);
    }
  };

  const err = (k: keyof FormValues) => (errors[k] ? `${id(k)}-err` : undefined);

  return (
    <section id="plan" className="wn-section wn-form" aria-labelledby="wn-form-title">
      <div className="wn-form__bg wn-media" aria-hidden="true">
        <WildImage name="responsible-bg" sizes="100vw" />
      </div>
      <div className="wn-form__veil" aria-hidden="true" />

      <div className="wn-container wn-form__grid">
        <div className="wn-form__intro">
          <span className="wn-eyebrow">Plan your journey</span>
          <h2 id="wn-form-title" className="wn-form__title">
            Your Next Nature Adventure Starts Here
          </h2>
          <p className="wn-form__lead">
            Tell us what kind of wildlife or nature experience you are looking for. Our team can help you explore
            suitable destinations and plan a customized journey around your interests.
          </p>
          <ul className="wn-form__assure">
            <li>
              <Icon name="check" size={16} /> Submitting is a request for a plan, not a booking.
            </li>
            <li>
              <Icon name="check" size={16} /> No payment is taken through this form.
            </li>
            <li>
              <Icon name="check" size={16} /> Wildlife sightings are never guaranteed.
            </li>
          </ul>
        </div>

        <div className="wn-form__card">
          {status === "success" ? (
            <div className="wn-form__success" role="status" tabIndex={-1}>
              <span className="wn-form__success-icon">
                <Icon name="check" size={30} />
              </span>
              <h3>Thank you — your request has been sent.</h3>
              <p>
                We&apos;ve received your details and will get in touch to discuss suitable destinations and options.
                This is an inquiry only; nothing is booked or confirmed yet.
              </p>
              <button type="button" className="wn-btn wn-btn--outline" onClick={() => setStatus("idle")}>
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate aria-describedby={status === "error" ? id("form-error") : undefined}>
              {prefilled ? (
                <p className="wn-form__prefill" role="status">
                  <Icon name="sparkle" size={16} /> We&apos;ve pre-selected some options based on what you chose — change
                  anything you like.
                </p>
              ) : null}

              {status === "error" ? (
                <div className="wn-form__error" role="alert" id={id("form-error")}>
                  <strong>We couldn&apos;t send your request.</strong> Please check your connection and try again. If it
                  keeps failing, reach us through our{" "}
                  <Link href={LINKS.contact}>contact page</Link>. Your details are still in the form.
                </div>
              ) : null}

              {/* Honeypot — hidden from people and assistive tech; bots fill it. */}
              <div className="wn-form__hp" aria-hidden="true">
                <label htmlFor={id("company")}>Company</label>
                <input
                  id={id("company")}
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.company}
                  onChange={set("company")}
                />
              </div>

              <fieldset className="wn-form__set">
                <legend>About you</legend>
                <div className="wn-form__row">
                  <div className="wn-form__field">
                    <label htmlFor={id("name")}>Full name *</label>
                    <input
                      id={id("name")}
                      name="name"
                      autoComplete="name"
                      value={values.name}
                      onChange={set("name")}
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby={err("name")}
                    />
                    {errors.name ? <p className="wn-form__err" id={err("name")}>{errors.name}</p> : null}
                  </div>
                  <div className="wn-form__field">
                    <label htmlFor={id("email")}>Email address *</label>
                    <input
                      id={id("email")}
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={set("email")}
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={err("email")}
                    />
                    {errors.email ? <p className="wn-form__err" id={err("email")}>{errors.email}</p> : null}
                  </div>
                </div>

                <div className="wn-form__field">
                  <label htmlFor={id("phone")}>Phone number with country code *</label>
                  <div className="wn-form__phone">
                    <select
                      aria-label="Country code"
                      value={values.countryCode}
                      onChange={set("countryCode")}
                      name="countryCode"
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                    <input
                      id={id("phone")}
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel-national"
                      value={values.phone}
                      onChange={set("phone")}
                      required
                      aria-invalid={!!errors.phone}
                      aria-describedby={err("phone")}
                    />
                  </div>
                  {errors.phone ? <p className="wn-form__err" id={err("phone")}>{errors.phone}</p> : null}
                </div>
              </fieldset>

              <fieldset className="wn-form__set">
                <legend>Your journey</legend>
                <div className="wn-form__row">
                  <SelectField
                    id={id("destination")}
                    label="Preferred destination"
                    value={values.destination}
                    onChange={set("destination")}
                    options={DESTINATION_OPTIONS}
                    placeholder="Select a destination"
                  />
                  <SelectField
                    id={id("experience")}
                    label="Preferred nature experience"
                    value={values.experience}
                    onChange={set("experience")}
                    options={EXPERIENCE_OPTIONS}
                    placeholder="Select an experience"
                  />
                </div>

                <div className="wn-form__row">
                  <div className="wn-form__field">
                    <label htmlFor={id("travelDate")}>Preferred travel date</label>
                    <input
                      id={id("travelDate")}
                      name="travelDate"
                      type="date"
                      min={todayISO()}
                      value={values.travelDate}
                      onChange={set("travelDate")}
                      aria-invalid={!!errors.travelDate}
                      aria-describedby={err("travelDate")}
                    />
                    {errors.travelDate ? <p className="wn-form__err" id={err("travelDate")}>{errors.travelDate}</p> : null}
                  </div>
                  <fieldset className="wn-form__field wn-form__radios">
                    <legend>Flexible travel dates?</legend>
                    <label>
                      <input
                        type="radio"
                        name="flexible"
                        value="yes"
                        checked={values.flexible === "yes"}
                        onChange={set("flexible")}
                      />
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="flexible"
                        value="no"
                        checked={values.flexible === "no"}
                        onChange={set("flexible")}
                      />
                      No
                    </label>
                  </fieldset>
                </div>

                <div className="wn-form__row wn-form__row--3">
                  <div className="wn-form__field">
                    <label htmlFor={id("adults")}>Adults *</label>
                    <input
                      id={id("adults")}
                      name="adults"
                      type="number"
                      inputMode="numeric"
                      min={1}
                      max={50}
                      value={values.adults}
                      onChange={set("adults")}
                      aria-invalid={!!errors.adults}
                      aria-describedby={err("adults")}
                    />
                    {errors.adults ? <p className="wn-form__err" id={err("adults")}>{errors.adults}</p> : null}
                  </div>
                  <div className="wn-form__field">
                    <label htmlFor={id("children")}>Children</label>
                    <input
                      id={id("children")}
                      name="children"
                      type="number"
                      inputMode="numeric"
                      min={0}
                      max={50}
                      value={values.children}
                      onChange={set("children")}
                      aria-invalid={!!errors.children}
                      aria-describedby={err("children")}
                    />
                    {errors.children ? <p className="wn-form__err" id={err("children")}>{errors.children}</p> : null}
                  </div>
                  <SelectField
                    id={id("duration")}
                    label="Preferred duration"
                    value={values.duration}
                    onChange={set("duration")}
                    options={DURATION_OPTIONS}
                    placeholder="Select"
                  />
                </div>

                <div className="wn-form__row">
                  <div className="wn-form__field">
                    <label htmlFor={id("budget")}>Estimated budget range</label>
                    <input
                      id={id("budget")}
                      name="budget"
                      value={values.budget}
                      onChange={set("budget")}
                      placeholder="e.g. USD 800 per person, or “not sure”"
                      maxLength={80}
                    />
                  </div>
                  <SelectField
                    id={id("purpose")}
                    label="Travel purpose"
                    value={values.purpose}
                    onChange={set("purpose")}
                    options={PURPOSE_OPTIONS}
                    placeholder="Select a purpose"
                  />
                </div>

                <SelectField
                  id={id("accommodation")}
                  label="Accommodation preference"
                  value={values.accommodation}
                  onChange={set("accommodation")}
                  options={ACCOMMODATION_OPTIONS}
                  placeholder="Select a preference"
                />

                <div className="wn-form__field">
                  <label htmlFor={id("interests")}>Wildlife or nature interests</label>
                  <textarea
                    id={id("interests")}
                    name="interests"
                    rows={2}
                    maxLength={500}
                    value={values.interests}
                    onChange={set("interests")}
                    placeholder="Species, birds, landscapes, photography goals…"
                  />
                </div>
                <div className="wn-form__field">
                  <label htmlFor={id("notes")}>Additional requirements</label>
                  <textarea
                    id={id("notes")}
                    name="notes"
                    rows={3}
                    maxLength={1000}
                    value={values.notes}
                    onChange={set("notes")}
                    placeholder="Accessibility needs, dietary requirements, anything else we should know"
                  />
                </div>
              </fieldset>

              <div className="wn-form__field wn-form__consent">
                <label>
                  <input
                    id={id("consent")}
                    type="checkbox"
                    name="consent"
                    checked={values.consent}
                    onChange={set("consent")}
                    aria-invalid={!!errors.consent}
                    aria-describedby={err("consent")}
                  />
                  <span>
                    I agree that Karvaahh may contact me about this request. *
                  </span>
                </label>
                {errors.consent ? <p className="wn-form__err" id={err("consent")}>{errors.consent}</p> : null}
              </div>

              <p className="wn-form__privacy">
                <Icon name="shield" size={14} /> We use your details only to respond to this inquiry. Submitting does
                not confirm a booking, hold a date, or guarantee wildlife sightings.
              </p>

              <button type="submit" className="wn-btn wn-btn--gold wn-form__submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Request My Nature Travel Plan"}
                {status === "submitting" ? null : <Icon name="arrow-right" size={18} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

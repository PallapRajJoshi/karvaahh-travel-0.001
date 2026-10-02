"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import SectionHeading from "../shared/SectionHeading";
import { PREFILL_EVENT, type Prefill } from "../shared/PrefillLink";
import { INQUIRY_ANCHOR, INQUIRY_ENDPOINT, LINKS } from "../config";
import {
  ACTIVITY_OPTIONS,
  BUDGET_OPTIONS,
  CRUISE_TYPE_OPTIONS,
  DESTINATION_OPTIONS,
  DURATION_OPTIONS,
  PURPOSE_OPTIONS,
} from "../data/planning";
import "./CruiseInquiryForm.css";

type Errors = Partial<Record<string, string>>;
type Status = "idle" | "sending" | "success" | "error";

function Field({
  id,
  label,
  error,
  required,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className={`cr-field ${error ? "cr-field--err" : ""}`}>
      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="cr-field__hint">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-err`} className="cr-field__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function CruiseInquiryForm() {
  const [destination, setDestination] = useState("");
  const [cruiseType, setCruiseType] = useState("");
  const [purpose, setPurpose] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const onPrefill = (e: Event) => {
      const d = (e as CustomEvent<Prefill>).detail;
      if (d.destination) setDestination(d.destination);
      if (d.cruiseType) setCruiseType(d.cruiseType);
      if (d.purpose) setPurpose(d.purpose);
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const aria = (id: string) => ({
    "aria-invalid": errors[id] ? true : undefined,
    "aria-describedby": errors[id] ? `${id}-err` : `${id}-hint`,
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    // Honeypot — real users never fill this.
    if (get("website")) return;

    const next: Errors = {};
    if (get("name").length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email")))
      next.email = "Please enter a valid email address.";
    const digits = get("phone").replace(/[\s\-()]/g, "");
    if (!/^\+?\d{7,15}$/.test(digits) || !get("phone").startsWith("+"))
      next.phone = "Include the country code, e.g. +977 98XXXXXXXX.";
    if (!destination) next.destination = "Please choose a destination.";
    if (!cruiseType) next.cruiseType = "Please choose a cruise type.";
    const adults = Number(get("adults"));
    if (!Number.isInteger(adults) || adults < 1)
      next.adults = "At least 1 adult is required.";
    const children = Number(get("children") || 0);
    if (!Number.isInteger(children) || children < 0)
      next.children = "Enter 0 or more.";
    const dateVal = get("date");
    if (dateVal && dateVal < new Date().toISOString().slice(0, 10))
      next.date = "Please choose a future date.";
    if (!fd.get("consent")) next.consent = "Please acknowledge the privacy notice.";

    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    if (!INQUIRY_ENDPOINT) {
      // No verified inquiry endpoint yet — never pretend the enquiry was sent.
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const payload = {
        source: "cruise-experiences",
        name: get("name"),
        email: get("email"),
        phone: get("phone"),
        destination,
        cruiseType,
        travelDate: dateVal || null,
        flexibleDates: get("flexible"),
        adults,
        children,
        duration: get("duration"),
        budget: get("budget"),
        purpose,
        activities: fd.getAll("activities").map(String),
        notes: get("notes"),
      };
      const res = await fetch(INQUIRY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
      setDestination("");
      setCruiseType("");
      setPurpose("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id={INQUIRY_ANCHOR}
      className="cr-section cr-section--dark cr-form"
      aria-labelledby="cr-form-title"
    >
      <div className="cr-container cr-form__wrap">
        <SectionHeading
          id="cr-form-title"
          tone="dark"
          eyebrow="Plan your journey"
          title="Your Next Journey Begins on the Water"
          lead="Tell us what kind of cruise experience you are dreaming of. Our team can help you explore suitable destinations and plan a journey around your preferences."
        />

        {status === "success" ? (
          <div className="cr-form__done" role="status">
            <h3>Thank you — we&rsquo;ve received your enquiry.</h3>
            <p>
              This is a request for a cruise plan and quotation only. It is not a
              booking or reservation, and no payment has been taken. Our team
              will get back to you with suitable options.
            </p>
            <button type="button" className="cr-btn cr-btn--gold" onClick={() => setStatus("idle")}>
              Send another enquiry
            </button>
          </div>
        ) : (
          <form className="cr-form__form" onSubmit={onSubmit} noValidate>
            <div className="cr-form__grid">
              <Field id="name" label="Full name" required error={errors.name}>
                <input id="name" name="name" autoComplete="name" {...aria("name")} />
              </Field>
              <Field id="email" label="Email address" required error={errors.email}>
                <input id="email" name="email" type="email" autoComplete="email" inputMode="email" {...aria("email")} />
              </Field>
              <Field
                id="phone"
                label="Phone number with country code"
                required
                error={errors.phone}
                hint="e.g. +977 98XXXXXXXX"
              >
                <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" {...aria("phone")} />
              </Field>
              <Field id="destination" label="Preferred cruise destination" required error={errors.destination}>
                <select
                  id="destination"
                  name="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  {...aria("destination")}
                >
                  <option value="">Select a destination</option>
                  {DESTINATION_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field id="cruiseType" label="Cruise type" required error={errors.cruiseType}>
                <select
                  id="cruiseType"
                  name="cruiseType"
                  value={cruiseType}
                  onChange={(e) => setCruiseType(e.target.value)}
                  {...aria("cruiseType")}
                >
                  <option value="">Select a cruise type</option>
                  {CRUISE_TYPE_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field id="date" label="Preferred travel date" error={errors.date}>
                <input id="date" name="date" type="date" {...aria("date")} />
              </Field>

              <fieldset className="cr-field cr-field--radios">
                <legend>Flexible travel dates?</legend>
                <label>
                  <input type="radio" name="flexible" value="Yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="flexible" value="No" /> No
                </label>
              </fieldset>

              <Field id="adults" label="Number of adults" required error={errors.adults}>
                <input id="adults" name="adults" type="number" min={1} max={100} defaultValue={2} inputMode="numeric" {...aria("adults")} />
              </Field>
              <Field id="children" label="Number of children" error={errors.children}>
                <input id="children" name="children" type="number" min={0} max={100} defaultValue={0} inputMode="numeric" {...aria("children")} />
              </Field>
              <Field id="duration" label="Preferred journey duration">
                <select id="duration" name="duration" defaultValue="">
                  <option value="">Select a duration</option>
                  {DURATION_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field id="budget" label="Estimated budget range" hint="Optional — helps us suggest suitable options.">
                <select id="budget" name="budget" defaultValue="">
                  <option value="">Select a range</option>
                  {BUDGET_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field id="purpose" label="Travel purpose">
                <select id="purpose" name="purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)}>
                  <option value="">Select a purpose</option>
                  {PURPOSE_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>

              <fieldset className="cr-field cr-field--checks cr-form__full">
                <legend>Preferred activities</legend>
                {ACTIVITY_OPTIONS.map((a) => (
                  <label key={a}>
                    <input type="checkbox" name="activities" value={a} /> {a}
                  </label>
                ))}
              </fieldset>

              <div className="cr-form__full">
                <Field id="notes" label="Additional requirements">
                  <textarea id="notes" name="notes" rows={4} maxLength={1500} />
                </Field>
              </div>

              {/* Honeypot */}
              <div className="cr-form__hp" aria-hidden="true">
                <label>
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="cr-form__full">
                <label className={`cr-consent ${errors.consent ? "cr-consent--err" : ""}`}>
                  <input type="checkbox" name="consent" aria-invalid={errors.consent ? true : undefined} />
                  <span>
                    I understand my details will be used only to respond to this
                    enquiry. Submitting this form is a request for a plan and
                    quotation, not a booking.
                  </span>
                </label>
                {errors.consent && (
                  <p className="cr-field__error" role="alert">
                    {errors.consent}
                  </p>
                )}
              </div>
            </div>

            {status === "error" && (
              <p className="cr-form__fail" role="alert">
                We couldn&rsquo;t send your enquiry just now. Please try again in a
                moment or{" "}
                <a href={LINKS.contact}>contact Karvaahh directly</a>.
              </p>
            )}

            <button type="submit" className="cr-btn cr-btn--gold cr-form__submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Request My Cruise Plan"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

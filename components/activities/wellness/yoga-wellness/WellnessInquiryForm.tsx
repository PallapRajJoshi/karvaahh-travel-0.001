"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { useInquiryPrefill } from "./shared/InquiryPrefill";
import {
  destinationOptions,
  experienceOptions,
  purposeOptions,
  durationOptions,
  budgetOptions,
  accommodationOptions,
  interestOptions,
} from "./data/form-options";
import { INQUIRY_ENDPOINT, LINKS, PAGE_PATH, SECTION_IDS } from "./data/config";
import "./WellnessInquiryForm.css";

type Values = {
  name: string;
  email: string;
  phone: string;
  destination: string;
  experience: string;
  date: string;
  flexible: "Yes" | "No";
  adults: string;
  children: string;
  duration: string;
  budget: string;
  purpose: string;
  interests: string[];
  accommodation: string;
  notes: string;
  consent: boolean;
  website: string; // honeypot
};

const INITIAL: Values = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  experience: "",
  date: "",
  flexible: "Yes",
  adults: "1",
  children: "0",
  duration: "",
  budget: "",
  purpose: "",
  interests: [],
  accommodation: "",
  notes: "",
  consent: false,
  website: "",
};

type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "submitting" | "success" | "error";

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  const digits = v.phone.replace(/\D/g, "");
  if (!v.phone.trim().startsWith("+") || digits.length < 8 || digits.length > 15) {
    e.phone = "Include your country code, for example +977 98XXXXXXXX.";
  }
  if (!v.destination) e.destination = "Choose a destination or “Other / Not Decided”.";
  if (!v.experience) e.experience = "Choose an experience or “Other / Not Decided”.";
  if (v.date) {
    const picked = new Date(`${v.date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (picked < today) e.date = "Please choose a date in the future.";
  }
  const adults = Number(v.adults);
  if (!Number.isInteger(adults) || adults < 1 || adults > 100) e.adults = "At least 1 adult is needed.";
  const children = Number(v.children);
  if (!Number.isInteger(children) || children < 0 || children > 100) e.children = "Enter 0 or more.";
  if (!v.consent) e.consent = "Please confirm you have read the privacy notice.";
  return e;
}

export default function WellnessInquiryForm() {
  const { prefill } = useInquiryPrefill();
  const [values, setValues] = useState<Values>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [seenNonce, setSeenNonce] = useState(0);
  const [prefillNote, setPrefillNote] = useState("");

  // Apply a prefill request during render (React's documented pattern for
  // adjusting state when a prop changes) rather than in an effect.
  if (prefill.nonce !== seenNonce) {
    setSeenNonce(prefill.nonce);
    setValues((v) => {
      const next = { ...v };
      if (prefill.destination && (destinationOptions as readonly string[]).includes(prefill.destination)) {
        next.destination = prefill.destination;
      }
      if (prefill.experience && (experienceOptions as readonly string[]).includes(prefill.experience)) {
        next.experience = prefill.experience;
      }
      if (prefill.purpose && (purposeOptions as readonly string[]).includes(prefill.purpose)) {
        next.purpose = prefill.purpose;
      }
      return next;
    });
    setPrefillNote(
      [prefill.destination, prefill.experience, prefill.purpose].filter(Boolean).join(" · "),
    );
  }

  function set<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function toggleInterest(name: string) {
    setValues((v) => ({
      ...v,
      interests: v.interests.includes(name)
        ? v.interests.filter((i) => i !== name)
        : [...v.interests, name],
    }));
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (status === "submitting") return;

    // Honeypot: bots fill it, people never see it. Pretend success, send nothing.
    if (values.website) {
      setStatus("success");
      return;
    }

    const found = validate(values);
    setErrors(found);
    const firstKey = Object.keys(found)[0];
    if (firstKey) {
      document.getElementById(`ykw-f-${firstKey}`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const { website: _omit, consent: _consent, ...payload } = values;
      void _omit;
      void _consent;
      const res = await fetch(INQUIRY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          source: "yoga-wellness-landing",
          page: PAGE_PATH,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      setValues(INITIAL);
    } catch {
      setStatus("error");
    }
  }

  const err = (k: keyof Values) => errors[k];
  const describe = (k: keyof Values) => (err(k) ? `ykw-e-${k}` : undefined);

  if (status === "success") {
    return (
      <section id={SECTION_IDS.inquiry} className="ykw-section ykw-section--white" aria-labelledby="ykw-form-title">
        <div className="ykw-container ykw-form__narrow">
          <div className="ykw-form__done" role="status">
            <h2 id="ykw-form-title">Thank you. Your request has been sent.</h2>
            <p>
              Our team will review your preferences and get in touch to talk through suitable
              options. This is a request for a plan only. It is not a booking, and availability is
              not guaranteed until arrangements are confirmed with you.
            </p>
            <button type="button" className="ykw-btn ykw-btn--outline" onClick={() => setStatus("idle")}>
              Send another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={SECTION_IDS.inquiry} className="ykw-section ykw-section--white" aria-labelledby="ykw-form-title">
      <div className="ykw-container ykw-form__layout">
        <div className="ykw-form__intro">
          <p className="ykw-form__eyebrow">Plan your retreat</p>
          <h2 id="ykw-form-title">Your Journey to Well-Being Starts Here</h2>
          <span className="ykw-form__rule" aria-hidden="true" />
          <p>
            Tell us about the wellness experience you are looking for. Our team can help you explore
            suitable destinations and plan a personalized retreat around your interests.
          </p>
          <ul className="ykw-form__assure">
            <li>Sending this form is a request for a plan, not a booking.</li>
            <li>Availability, inclusions, and therapies are confirmed with you first.</li>
            <li>No payment is taken through this form.</li>
          </ul>
          {prefillNote ? (
            <p className="ykw-form__prefill" role="status">
              Prefilled from your selection: {prefillNote}
            </p>
          ) : null}
        </div>

        <form className="ykw-form" onSubmit={onSubmit} noValidate>
          <div className="ykw-form__grid">
            <Field id="name" label="Full Name" error={err("name")}>
              <input
                id="ykw-f-name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(e) => set("name", e.target.value)}
                aria-invalid={!!err("name")}
                aria-describedby={describe("name")}
                required
              />
            </Field>
            <Field id="email" label="Email Address" error={err("email")}>
              <input
                id="ykw-f-email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={values.email}
                onChange={(e) => set("email", e.target.value)}
                aria-invalid={!!err("email")}
                aria-describedby={describe("email")}
                required
              />
            </Field>
            <Field id="phone" label="Phone Number with Country Code" error={err("phone")}>
              <input
                id="ykw-f-phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+977 98XXXXXXXX"
                value={values.phone}
                onChange={(e) => set("phone", e.target.value)}
                aria-invalid={!!err("phone")}
                aria-describedby={describe("phone")}
                required
              />
            </Field>
            <Field id="destination" label="Preferred Destination" error={err("destination")}>
              <select
                id="ykw-f-destination"
                value={values.destination}
                onChange={(e) => set("destination", e.target.value)}
                aria-invalid={!!err("destination")}
                aria-describedby={describe("destination")}
                required
              >
                <option value="">Select…</option>
                {destinationOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field id="experience" label="Preferred Wellness Experience" error={err("experience")}>
              <select
                id="ykw-f-experience"
                value={values.experience}
                onChange={(e) => set("experience", e.target.value)}
                aria-invalid={!!err("experience")}
                aria-describedby={describe("experience")}
                required
              >
                <option value="">Select…</option>
                {experienceOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field id="date" label="Preferred Travel Date" error={err("date")}>
              <input
                id="ykw-f-date"
                type="date"
                value={values.date}
                onChange={(e) => set("date", e.target.value)}
                aria-invalid={!!err("date")}
                aria-describedby={describe("date")}
              />
            </Field>

            <fieldset className="ykw-form__fieldset">
              <legend>Flexible Travel Dates</legend>
              <div className="ykw-form__radios">
                {(["Yes", "No"] as const).map((o) => (
                  <label key={o}>
                    <input
                      type="radio"
                      name="flexible"
                      checked={values.flexible === o}
                      onChange={() => set("flexible", o)}
                    />
                    {o}
                  </label>
                ))}
              </div>
            </fieldset>

            <Field id="purpose" label="Travel Purpose" error={err("purpose")}>
              <select
                id="ykw-f-purpose"
                value={values.purpose}
                onChange={(e) => set("purpose", e.target.value)}
              >
                <option value="">Select…</option>
                {purposeOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>

            <Field id="adults" label="Number of Adults" error={err("adults")}>
              <input
                id="ykw-f-adults"
                type="number"
                inputMode="numeric"
                min={1}
                max={100}
                value={values.adults}
                onChange={(e) => set("adults", e.target.value)}
                aria-invalid={!!err("adults")}
                aria-describedby={describe("adults")}
              />
            </Field>
            <Field id="children" label="Number of Children" error={err("children")}>
              <input
                id="ykw-f-children"
                type="number"
                inputMode="numeric"
                min={0}
                max={100}
                value={values.children}
                onChange={(e) => set("children", e.target.value)}
                aria-invalid={!!err("children")}
                aria-describedby={describe("children")}
              />
            </Field>
            <Field id="duration" label="Preferred Retreat Duration">
              <select
                id="ykw-f-duration"
                value={values.duration}
                onChange={(e) => set("duration", e.target.value)}
              >
                <option value="">Select…</option>
                {durationOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field id="budget" label="Estimated Budget Range">
              <select
                id="ykw-f-budget"
                value={values.budget}
                onChange={(e) => set("budget", e.target.value)}
              >
                <option value="">Select…</option>
                {budgetOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field id="accommodation" label="Accommodation Preference">
              <select
                id="ykw-f-accommodation"
                value={values.accommodation}
                onChange={(e) => set("accommodation", e.target.value)}
              >
                <option value="">Select…</option>
                {accommodationOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>

            <fieldset className="ykw-form__fieldset ykw-form__full">
              <legend>Wellness Interests</legend>
              <div className="ykw-form__checks">
                {interestOptions.map((o) => (
                  <label key={o}>
                    <input
                      type="checkbox"
                      checked={values.interests.includes(o)}
                      onChange={() => toggleInterest(o)}
                    />
                    {o}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="ykw-form__full ykw-form__field">
              <label htmlFor="ykw-f-notes">Additional Requirements</label>
              <textarea
                id="ykw-f-notes"
                rows={4}
                maxLength={1500}
                value={values.notes}
                onChange={(e) => set("notes", e.target.value)}
              />
            </div>

            {/* Honeypot, hidden from people and assistive tech */}
            <div className="ykw-form__hp" aria-hidden="true">
              <label htmlFor="ykw-f-website">Website</label>
              <input
                id="ykw-f-website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={(e) => set("website", e.target.value)}
              />
            </div>
          </div>

          <div className="ykw-form__consent">
            <label>
              <input
                id="ykw-f-consent"
                type="checkbox"
                checked={values.consent}
                onChange={(e) => set("consent", e.target.checked)}
                aria-invalid={!!err("consent")}
                aria-describedby={describe("consent")}
              />
              <span>
                I have read the{" "}
                <Link href={LINKS.privacy}>privacy notice</Link> and agree that Karvaahh may use
                these details to contact me about this inquiry.
              </span>
            </label>
            {err("consent") ? (
              <p className="ykw-form__err" id="ykw-e-consent">
                {err("consent")}
              </p>
            ) : null}
          </div>

          {status === "error" ? (
            <p className="ykw-form__alert" role="alert">
              We could not send your request just now. Nothing has been submitted. Please try again,
              or reach us through the <Link href={LINKS.contact}>contact page</Link>.
            </p>
          ) : null}

          <button type="submit" className="ykw-btn ykw-btn--primary ykw-form__submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Request My Wellness Retreat Plan"}
          </button>
          <p className="ykw-form__fine">
            Submitting this form does not confirm a booking or guarantee availability.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="ykw-form__field">
      <label htmlFor={`ykw-f-${id}`}>{label}</label>
      {children}
      {error ? (
        <p className="ykw-form__err" id={`ykw-e-${id}`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

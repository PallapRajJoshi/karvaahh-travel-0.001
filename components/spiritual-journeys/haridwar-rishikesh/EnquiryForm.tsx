"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { ENQUIRY_ENDPOINT, PAGE_PATH, ROUTES } from "./data/config";

/** Contract sent to ENQUIRY_ENDPOINT. Keep in sync with the backend handler. */
export interface EnquiryPayload {
  source: "haridwar-rishikesh-yatra";
  page: string;
  fullName: string;
  phone: string; // E.164-style: "+91 9876543210"
  email: string;
  travellers: number;
  travelDate: string | null; // YYYY-MM-DD
  days: string | null;
  startingPoint: string | null;
  accommodation: string | null;
  requirements: string[];
  message: string | null;
  website: string; // honeypot — must be empty
}

type FieldName = "fullName" | "phone" | "email" | "travellers" | "travelDate";
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "sent" | "failed";

const COUNTRY_CODES = [
  { code: "+91", label: "India (+91)" },
  { code: "+977", label: "Nepal (+977)" },
  { code: "+1", label: "USA / Canada (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+65", label: "Singapore (+65)" },
  { code: "+49", label: "Germany (+49)" },
];

const DAY_OPTIONS = ["2–3 days", "4 days", "5–6 days", "7 days or more", "Not sure yet"];
const STAY_OPTIONS = ["Budget", "Standard", "Deluxe", "Premium", "Not sure yet"];
const REQUIREMENTS = [
  "Senior-friendly pace",
  "Limited mobility / wheelchair access",
  "Neelkanth Mahadev visit",
  "Yoga or meditation session",
  "Dehradun / Mussoorie extension",
  "Satvik or vegetarian meals",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function validate(data: FormData, minDate: string): Errors {
  const errors: Errors = {};
  const name = String(data.get("fullName") ?? "").trim();
  const phoneDigits = String(data.get("phone") ?? "").replace(/[\s\-()]/g, "");
  const email = String(data.get("email") ?? "").trim();
  const travellers = Number(data.get("travellers"));
  const date = String(data.get("travelDate") ?? "");

  if (name.length < 2) errors.fullName = "Enter your full name.";
  if (!/^\d{6,15}$/.test(phoneDigits)) errors.phone = "Enter a phone number of 6–15 digits, without the country code.";
  if (!EMAIL_RE.test(email)) errors.email = "Enter an email address like name@example.com.";
  if (!Number.isInteger(travellers) || travellers < 1 || travellers > 50)
    errors.travellers = "Enter the number of travellers, from 1 to 50.";
  if (date && date < minDate) errors.travelDate = "Choose a date from today onwards.";
  return errors;
}

const optional = (v: FormDataEntryValue | null) => {
  const s = String(v ?? "").trim();
  return s.length ? s : null;
};

export default function EnquiryForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [sentTo, setSentTo] = useState("");
  const dateRef = useRef<HTMLInputElement>(null);

  // "Today" is set on the client only, so server and client HTML match.
  useEffect(() => {
    if (dateRef.current) dateRef.current.min = todayISO();
  }, []);

  const fid = (name: string) => `${uid}-${name}`;
  const errProps = (name: FieldName) =>
    errors[name]
      ? { "aria-invalid": true as const, "aria-describedby": `${fid(name)}-error` }
      : {};

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const found = validate(data, todayISO());
    setErrors(found);

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const payload: EnquiryPayload = {
      source: "haridwar-rishikesh-yatra",
      page: PAGE_PATH,
      fullName: String(data.get("fullName")).trim(),
      phone: `${data.get("countryCode")} ${String(data.get("phone")).replace(/[\s\-()]/g, "")}`,
      email: String(data.get("email")).trim(),
      travellers: Number(data.get("travellers")),
      travelDate: optional(data.get("travelDate")),
      days: optional(data.get("days")),
      startingPoint: optional(data.get("startingPoint")),
      accommodation: optional(data.get("accommodation")),
      requirements: data.getAll("requirements").map(String),
      message: optional(data.get("message")),
      website: String(data.get("website") ?? ""),
    };

    setStatus("submitting");
    try {
      const res = await fetch(ENQUIRY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      // Success is shown ONLY when the server confirms receipt.
      if (!res.ok) throw new Error(`Enquiry endpoint responded ${res.status}`);
      setSentTo(payload.email);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("failed");
    }
  }

  useEffect(() => {
    if (status === "sent" || status === "failed") statusRef.current?.focus();
  }, [status]);

  if (status === "sent") {
    return (
      <div ref={statusRef} tabIndex={-1} className="hry-form__done" role="status">
        <h3 className="hry-form__done-title">Enquiry sent</h3>
        <p>
          Thank you. Karvaahh has received your Haridwar &amp; Rishikesh Yatra enquiry and will
          reply to <strong>{sentTo}</strong> with package options and availability.
        </p>
        <button type="button" className="hry-btn hry-btn--outline" onClick={() => setStatus("idle")}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} className="hry-form" noValidate onSubmit={handleSubmit} aria-describedby={`${uid}-req`}>
      <p id={`${uid}-req`} className="hry-form__req-note">
        Fields marked <span aria-hidden="true">*</span>
        <span className="hry-sr-only">with an asterisk</span> are required.
      </p>

      <div className="hry-form__grid">
        <div className="hry-form__field hry-form__field--full">
          <label htmlFor={fid("fullName")}>
            Full name <span aria-hidden="true">*</span>
          </label>
          <input id={fid("fullName")} name="fullName" type="text" autoComplete="name" required maxLength={80} {...errProps("fullName")} />
          {errors.fullName ? <p id={`${fid("fullName")}-error`} className="hry-form__error">{errors.fullName}</p> : null}
        </div>

        <div className="hry-form__field hry-form__field--full">
          <label htmlFor={fid("phone")}>
            Phone number <span aria-hidden="true">*</span>
          </label>
          <div className="hry-form__phone">
            <label htmlFor={fid("countryCode")} className="hry-sr-only">
              Country code
            </label>
            <select id={fid("countryCode")} name="countryCode" defaultValue="+91" autoComplete="tel-country-code">
              {COUNTRY_CODES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
            <input id={fid("phone")} name="phone" type="tel" inputMode="tel" autoComplete="tel-national" required maxLength={20} {...errProps("phone")} />
          </div>
          {errors.phone ? <p id={`${fid("phone")}-error`} className="hry-form__error">{errors.phone}</p> : null}
        </div>

        <div className="hry-form__field">
          <label htmlFor={fid("email")}>
            Email address <span aria-hidden="true">*</span>
          </label>
          <input id={fid("email")} name="email" type="email" autoComplete="email" required maxLength={120} {...errProps("email")} />
          {errors.email ? <p id={`${fid("email")}-error`} className="hry-form__error">{errors.email}</p> : null}
        </div>

        <div className="hry-form__field">
          <label htmlFor={fid("travellers")}>
            Number of travellers <span aria-hidden="true">*</span>
          </label>
          <input id={fid("travellers")} name="travellers" type="number" inputMode="numeric" min={1} max={50} defaultValue={2} required {...errProps("travellers")} />
          {errors.travellers ? <p id={`${fid("travellers")}-error`} className="hry-form__error">{errors.travellers}</p> : null}
        </div>

        <div className="hry-form__field">
          <label htmlFor={fid("travelDate")}>Preferred travel date</label>
          <input id={fid("travelDate")} name="travelDate" type="date" ref={dateRef} {...errProps("travelDate")} />
          {errors.travelDate ? <p id={`${fid("travelDate")}-error`} className="hry-form__error">{errors.travelDate}</p> : null}
        </div>

        <div className="hry-form__field">
          <label htmlFor={fid("days")}>Number of days</label>
          <select id={fid("days")} name="days" defaultValue="">
            <option value="">Select</option>
            {DAY_OPTIONS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div className="hry-form__field">
          <label htmlFor={fid("startingPoint")}>Starting point</label>
          <input id={fid("startingPoint")} name="startingPoint" type="text" placeholder="e.g. Delhi, Dehradun airport" maxLength={80} />
        </div>

        <div className="hry-form__field">
          <label htmlFor={fid("accommodation")}>Accommodation category</label>
          <select id={fid("accommodation")} name="accommodation" defaultValue="">
            <option value="">Select</option>
            {STAY_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <fieldset className="hry-form__field hry-form__field--full hry-form__checks">
          <legend>Special requirements</legend>
          <div className="hry-form__check-grid">
            {REQUIREMENTS.map((r, i) => (
              <label key={r} className="hry-form__check" htmlFor={fid(`req-${i}`)}>
                <input id={fid(`req-${i}`)} type="checkbox" name="requirements" value={r} />
                <span>{r}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="hry-form__field hry-form__field--full">
          <label htmlFor={fid("message")}>Additional message</label>
          <textarea id={fid("message")} name="message" rows={4} maxLength={1500} placeholder="Anything else we should plan around — festivals, rituals, dietary or health needs" />
        </div>

        {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
        <div className="hry-form__hp" aria-hidden="true">
          <label htmlFor={fid("website")}>Website</label>
          <input id={fid("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <div className="hry-form__actions">
        <button type="submit" className="hry-btn hry-btn--primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending enquiry…" : "Send enquiry"}
        </button>
        <p className="hry-form__privacy">
          We use these details only to reply to your enquiry. Sending an enquiry doesn&rsquo;t
          confirm a booking.
        </p>
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="hry-form__status">
        {status === "failed" ? (
          <p className="hry-form__failed" role="alert">
            Your enquiry wasn&rsquo;t sent. Check your connection and try again, or{" "}
            <a href={ROUTES.contact}>contact Karvaahh directly</a>.
          </p>
        ) : null}
      </div>
    </form>
  );
}

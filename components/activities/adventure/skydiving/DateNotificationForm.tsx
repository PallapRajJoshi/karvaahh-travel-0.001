"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  NOTIFY_EVENT,
  NOTIFY_INTERESTS,
  NOTIFY_SEASONS,
  PAGE_PATH,
  notifySection,
  type NotifyInterest,
  type NotifySeason,
} from "./data/skydivingData";
import { submitSkydiveNotification, type SubmitResult } from "./submitSkydiveNotification";
import "./DateNotificationForm.css";

type Status = "idle" | "submitting" | SubmitResult;
type Field = "name" | "email" | "groupSize";
type Errors = Partial<Record<Field, string>>;

const isInterest = (v: unknown): v is NotifyInterest =>
  typeof v === "string" && (NOTIFY_INTERESTS as readonly string[]).includes(v);

export default function DateNotificationForm() {
  const [interest, setInterest] = useState<NotifyInterest>("Everest Skydive");
  const [years, setYears] = useState<number[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [sentFor, setSentFor] = useState<NotifyInterest | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Years are computed on the client so a static build never goes stale.
  useEffect(() => {
    const y = new Date().getFullYear();
    setYears([y, y + 1, y + 2]);
  }, []);

  // Preselect interest when a CTA elsewhere on the page is used.
  useEffect(() => {
    const onInterest = (e: Event) => {
      const detail = (e as CustomEvent<unknown>).detail;
      if (isInterest(detail)) setInterest(detail);
    };
    window.addEventListener(NOTIFY_EVENT, onInterest);
    return () => window.removeEventListener(NOTIFY_EVENT, onInterest);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("company")) return; // honeypot

    const payload = {
      interest,
      season: String(fd.get("season") ?? "Any Season") as NotifySeason,
      year: String(fd.get("year") ?? "Flexible"),
      groupSize: Number(fd.get("groupSize")),
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      page: PAGE_PATH,
    };

    const next: Errors = {};
    if (!payload.name) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) next.email = "Enter an email address, like name@example.com.";
    if (!Number.isInteger(payload.groupSize) || payload.groupSize < 1 || payload.groupSize > 50)
      next.groupSize = "Enter a group size from 1 to 50.";
    setErrors(next);

    const firstInvalid = (["name", "email", "groupSize"] as Field[]).find((f) => next[f]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    const result = await submitSkydiveNotification(payload);
    setStatus(result);
    if (result === "sent") {
      setSentFor(payload.interest);
      formRef.current?.reset();
    }
  }

  const errorProps = (f: Field) =>
    errors[f] ? { "aria-invalid": true as const, "aria-describedby": `sky-err-${f}` } : {};

  return (
    <section id="notify" className="sky-section sky-section--dark sky-notify" aria-labelledby="sky-notify-title" data-sky-hide-bar>
      <div className="sky-container sky-notify__grid">
        <div className="sky-notify__intro">
          <h2 id="sky-notify-title" className="sky-heading__title">
            {notifySection.heading}
          </h2>
          <p className="sky-notify__text">{notifySection.text}</p>
          <p className="sky-notify__fine">
            We use your details only to contact you about skydiving dates in Nepal. Dates are set by operators and remain
            subject to weather and aviation conditions.
          </p>
        </div>

        <form ref={formRef} className="sky-form" onSubmit={handleSubmit} noValidate>
          <fieldset className="sky-form__group">
            <legend className="sky-form__legend">Interest</legend>
            <div className="sky-form__chips">
              {NOTIFY_INTERESTS.map((opt) => (
                <label key={opt} className="sky-chip">
                  <input
                    type="radio"
                    name="interest"
                    value={opt}
                    checked={interest === opt}
                    onChange={() => setInterest(opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="sky-form__row">
            <div className="sky-field">
              <label htmlFor="sky-season">Preferred season</label>
              <select id="sky-season" name="season" defaultValue="Autumn">
                {NOTIFY_SEASONS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="sky-field">
              <label htmlFor="sky-year">Preferred year</label>
              <select id="sky-year" name="year" defaultValue="Flexible">
                <option value="Flexible">Flexible</option>
                {years.map((y) => (
                  <option key={y} value={String(y)}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
            <div className="sky-field">
              <label htmlFor="sky-group">Group size</label>
              <input id="sky-group" name="groupSize" type="number" inputMode="numeric" min={1} max={50} defaultValue={1} required {...errorProps("groupSize")} />
              {errors.groupSize && <p id="sky-err-groupSize" className="sky-field__error">{errors.groupSize}</p>}
            </div>
          </div>

          <div className="sky-form__row sky-form__row--2">
            <div className="sky-field">
              <label htmlFor="sky-name">Name</label>
              <input id="sky-name" name="name" type="text" autoComplete="name" required {...errorProps("name")} />
              {errors.name && <p id="sky-err-name" className="sky-field__error">{errors.name}</p>}
            </div>
            <div className="sky-field">
              <label htmlFor="sky-email">Email</label>
              <input id="sky-email" name="email" type="email" autoComplete="email" required {...errorProps("email")} />
              {errors.email && <p id="sky-err-email" className="sky-field__error">{errors.email}</p>}
            </div>
          </div>

          <div className="sky-field">
            <label htmlFor="sky-phone">
              Phone / WhatsApp <span className="sky-field__opt">(optional)</span>
            </label>
            <input id="sky-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
          </div>

          <div className="sky-field">
            <label htmlFor="sky-message">
              Message <span className="sky-field__opt">(optional)</span>
            </label>
            <textarea id="sky-message" name="message" rows={4} placeholder="Travel window, trek plans or questions" />
          </div>

          <div className="sky-form__hp" aria-hidden="true">
            <label htmlFor="sky-company">Company</label>
            <input id="sky-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <button type="submit" className="sky-btn sky-btn--gold sky-form__submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : notifySection.cta}
          </button>

          <div className="sky-form__status" role="status" aria-live="polite">
            {status === "sent" && (
              <p className="sky-form__msg sky-form__msg--ok">
                Request sent. We&apos;ll contact you when {sentFor ?? "skydiving"} dates are announced.
              </p>
            )}
            {status === "not-connected" && (
              <p className="sky-form__msg sky-form__msg--warn">
                This form isn&apos;t connected yet, so your request wasn&apos;t sent. Reach us through the{" "}
                <Link href="/contact">contact page</Link> instead.
              </p>
            )}
            {status === "error" && (
              <p className="sky-form__msg sky-form__msg--warn">
                Your request couldn&apos;t be sent. Check your connection and try again, or use the{" "}
                <Link href="/contact">contact page</Link>.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

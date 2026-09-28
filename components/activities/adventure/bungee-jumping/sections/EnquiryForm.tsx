"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { enquiryOptions, PAGE_PATH, type ActivityValue, type DestinationValue } from "../data/bungeeJumpingData";
import { submitBungeeEnquiry, type EnquiryResult } from "../enquiryIntegration";

type Status = "idle" | "sending" | EnquiryResult["status"];

export default function EnquiryForm() {
  const uid = useId();
  const [destination, setDestination] = useState<DestinationValue | "">("kushma");
  const [activity, setActivity] = useState<ActivityValue | "">("bungee");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  /* CTAs across the page carry data-enquiry-* presets; apply them when clicked. */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-enquiry-destination],[data-enquiry-activity]");
      if (!el) return;
      const d = el.dataset.enquiryDestination as DestinationValue | undefined;
      const a = el.dataset.enquiryActivity as ActivityValue | undefined;
      if (d) setDestination(d);
      if (a) setActivity(a);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    setStatus("sending");
    setError("");
    const result = await submitBungeeEnquiry({
      destination: get("destination"),
      activity: get("activity"),
      travelDate: get("travelDate"),
      groupSize: get("groupSize"),
      mediaPackage: get("mediaPackage"),
      transport: get("transport"),
      name: get("name"),
      contact: get("contact"),
      message: get("message"),
      page: PAGE_PATH,
    });
    setStatus(result.status);
    if (result.status === "error") setError(result.message);
  }

  const f = (name: string) => `${uid}-${name}`;
  const today = new Date().toISOString().slice(0, 10);

  return (
    <section id="enquiry" className="bj-section bj-enquiry" aria-labelledby="bj-enquiry-title">
      <div className="bj-wrap bj-enquiry__grid">
        <div className="bj-enquiry__intro">
          <h2 id="bj-enquiry-title" className="bj-heading__title">Plan Your Bungee Adventure</h2>
          <p>Tell us your travel date, group size and preferred activity. We&apos;ll help you arrange the experience and transport if required.</p>
          <p className="bj-enquiry__small">Sending this form is an enquiry, not a booking. Prices and availability are confirmed with the operator first.</p>
        </div>

        <form className="bj-form" onSubmit={onSubmit} noValidate={false}>
          <div className="bj-field">
            <label htmlFor={f("destination")}>Destination</label>
            <select id={f("destination")} name="destination" value={destination} onChange={(e) => setDestination(e.target.value as DestinationValue)} required>
              {enquiryOptions.destinations.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
          <div className="bj-field">
            <label htmlFor={f("activity")}>Activity</label>
            <select id={f("activity")} name="activity" value={activity} onChange={(e) => setActivity(e.target.value as ActivityValue)} required>
              {enquiryOptions.activities.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
          <div className="bj-field">
            <label htmlFor={f("date")}>Travel date</label>
            <input id={f("date")} name="travelDate" type="date" min={today} />
          </div>
          <div className="bj-field">
            <label htmlFor={f("group")}>Group size</label>
            <input id={f("group")} name="groupSize" type="number" min={1} max={100} inputMode="numeric" defaultValue={1} />
          </div>

          <fieldset className="bj-field bj-field--choice">
            <legend>Media package</legend>
            {enquiryOptions.media.map((m, i) => (
              <label key={m}><input type="radio" name="mediaPackage" value={m} defaultChecked={i === 2} /> {m}</label>
            ))}
          </fieldset>
          <fieldset className="bj-field bj-field--choice">
            <legend>Transport</legend>
            {enquiryOptions.transport.map((t, i) => (
              <label key={t}><input type="radio" name="transport" value={t} defaultChecked={i === 0} /> {t}</label>
            ))}
          </fieldset>

          <div className="bj-field">
            <label htmlFor={f("name")}>Name</label>
            <input id={f("name")} name="name" type="text" autoComplete="name" required />
          </div>
          <div className="bj-field">
            <label htmlFor={f("contact")}>Phone / Email</label>
            <input id={f("contact")} name="contact" type="text" autoComplete="email" required />
          </div>
          <div className="bj-field bj-field--full">
            <label htmlFor={f("message")}>Message</label>
            <textarea id={f("message")} name="message" rows={4} />
          </div>

          <div className="bj-field--full bj-form__submit">
            <button type="submit" className="bj-btn bj-btn--primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Plan My Adventure"}
            </button>
            <p className="bj-form__status" role="status" aria-live="polite">
              {status === "sent" && "Enquiry sent. We'll reply after checking current operator availability and pricing."}
              {status === "not-connected" && "Online enquiries aren't connected yet. Please contact Karvaahh directly with these details."}
              {status === "error" && error}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

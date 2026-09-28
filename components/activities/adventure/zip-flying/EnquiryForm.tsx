"use client";

import { useState, type FormEvent } from "react";
import { enquiry, WHATSAPP_NUMBER } from "./data/zipFlyingData";

export interface ZipFlyerEnquiry {
  date: string;
  groupSize: number;
  pickup: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

/**
 * INTEGRATION PLACEHOLDER
 * Replace the body of this function with the site's enquiry endpoint when it exists.
 * Current behaviour: opens WhatsApp with the enquiry pre-filled if WHATSAPP_NUMBER is set.
 * It never shows a booking confirmation.
 */
async function sendEnquiry(data: ZipFlyerEnquiry): Promise<"whatsapp" | "unconfigured"> {
  if (!WHATSAPP_NUMBER) return "unconfigured";
  const text = [
    "ZipFlyer enquiry (Pokhara)",
    `Date: ${data.date}`,
    `Group size: ${data.groupSize}`,
    `Pickup: ${data.pickup}`,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.email && `Email: ${data.email}`,
    data.message && `Message: ${data.message}`,
  ]
    .filter(Boolean)
    .join("\n");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  return "whatsapp";
}

type Status = { kind: "idle" } | { kind: "sent" } | { kind: "unconfigured" } | { kind: "error"; msg: string };

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const today = new Date().toISOString().slice(0, 10);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const fd = new FormData(form);
    const data: ZipFlyerEnquiry = {
      date: String(fd.get("date") ?? ""),
      groupSize: Number(fd.get("groupSize") ?? 1),
      pickup: String(fd.get("pickup") ?? ""),
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };
    try {
      const result = await sendEnquiry(data);
      setStatus(result === "whatsapp" ? { kind: "sent" } : { kind: "unconfigured" });
    } catch {
      setStatus({ kind: "error", msg: "The enquiry could not be sent. Check your connection and try again." });
    }
  }

  return (
    <form id="zf-form" className="zf-form" onSubmit={onSubmit} noValidate>
      <div className="zf-form__row">
        <label className="zf-field">
          <span>Travel date</span>
          <input type="date" name="date" min={today} required />
        </label>
        <label className="zf-field">
          <span>Group size</span>
          <input type="number" name="groupSize" min={1} max={60} defaultValue={2} inputMode="numeric" required />
        </label>
      </div>
      <label className="zf-field">
        <span>Pickup location</span>
        <select name="pickup" defaultValue={enquiry.pickupOptions[0]} required>
          {enquiry.pickupOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </label>
      <label className="zf-field">
        <span>Name</span>
        <input type="text" name="name" autoComplete="name" required />
      </label>
      <div className="zf-form__row">
        <label className="zf-field">
          <span>Phone / WhatsApp</span>
          <input type="tel" name="phone" autoComplete="tel" required />
        </label>
        <label className="zf-field">
          <span>Email <em>(optional)</em></span>
          <input type="email" name="email" autoComplete="email" />
        </label>
      </div>
      <label className="zf-field">
        <span>Message <em>(optional)</em></span>
        <textarea name="message" rows={3} />
      </label>

      <button type="submit" className="zf-btn zf-btn--signal zf-form__submit">{enquiry.submit}</button>

      <p className="zf-form__status" role="status" aria-live="polite">
        {status.kind === "sent" && "WhatsApp opened with your enquiry details. Send the message there to reach our team."}
        {status.kind === "unconfigured" &&
          "Online enquiries are not connected yet. Your details were not sent — please contact us directly."}
        {status.kind === "error" && status.msg}
      </p>
    </form>
  );
}

"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Info, Minus, Plus, PlaneTakeoff, Send } from "lucide-react";
import { visibleUSADestinations } from "@/data/usa/destinations";
import { GATEWAY_NOTE, departureGateways, type GatewayAvailability } from "@/data/usa/transport";
import { travelStyles } from "@/data/usa/travel-styles";
import { contact } from "@/lib/usa/config";

const AVAILABILITY: Record<GatewayAvailability, string> = {
  available: "Departures available",
  "on-request": "On request",
  check: "Ask us to check",
};
const HOTELS = ["3★", "4★", "5★", "Luxury / boutique"];
const BUDGETS = ["Value", "Mid-range", "Premium", "Luxury", "Not sure yet"];
const VISA = ["I have a valid U.S. visa", "Applying / planning to apply", "Need guidance", "Other passport / ESTA"];

/**
 * Travel from Nepal & India: a departure selector (routing is configurable
 * and confirmed at quote; direct flights are never promised) and a quick
 * enquiry form that opens WhatsApp. Nothing is stored on this website.
 */
export default function USAGatewaySection() {
  const uid = useId();
  const [gatewayId, setGatewayId] = useState(departureGateways[0].id);
  const g = departureGateways.find((x) => x.id === gatewayId) ?? departureGateways[0];
  const [dates, setDates] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [dest, setDest] = useState("");
  const [style, setStyle] = useState("");
  const [hotel, setHotel] = useState("");
  const [budget, setBudget] = useState("");
  const [visa, setVisa] = useState("");

  const send = () => {
    const lines = [
      `Departure: ${g.city}${g.city === "Other city" ? "" : ` (${g.country})`}`,
      dates && `Travel dates: ${dates}`,
      `Travellers: ${adults} adult${adults === 1 ? "" : "s"}${children ? `, ${children} child${children === 1 ? "" : "ren"}` : ""}`,
      dest && `Destinations: ${dest}`,
      style && `Package style: ${style}`,
      hotel && `Hotels: ${hotel}`,
      budget && `Budget: ${budget}`,
      visa && `Visa status: ${visa}`,
    ].filter(Boolean);
    window.open(contact.whatsapp(`Hello Karvaahh, I'd like a USA trip.\n${lines.map((l) => `• ${l}`).join("\n")}`), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="us-gw">
      <div className="us-gw__picker">
        <p className="us-gw__label" id={`${uid}-gw`}><PlaneTakeoff size={16} aria-hidden="true" /> Departing from</p>
        <ul className="us-gw__cities" role="radiogroup" aria-labelledby={`${uid}-gw`}>
          {departureGateways.map((x) => {
            const on = x.id === g.id;
            return (
              <li key={x.id}>
                <button type="button" role="radio" aria-checked={on} className={`us-gw__city${on ? " is-active" : ""}`} onClick={() => setGatewayId(x.id)}>
                  <strong>{x.city}</strong>
                  <span>{x.country}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={g.id} className="us-gw__card" aria-live="polite" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}>
            <dl>
              <div><dt>Airport</dt><dd>{g.airport}</dd></div>
              <div><dt>Typical routing</dt><dd>{g.routing ?? "Confirmed at quote for your dates"}</dd></div>
              <div><dt>Availability</dt><dd><span className={`us-avail us-avail--${g.availability}`}>{AVAILABILITY[g.availability]}</span></dd></div>
            </dl>
            {g.note && <p className="us-gw__note">{g.note}</p>}
          </motion.div>
        </AnimatePresence>
        <p className="us-note"><Info size={14} aria-hidden="true" /> {GATEWAY_NOTE}</p>
      </div>

      <form className="us-gw__form" aria-label="Quick USA trip request" onSubmit={(e) => { e.preventDefault(); send(); }}>
        <p className="us-gw__form-h">Customize from {g.city === "Other city" ? "your city" : g.city}</p>
        <div className="us-field">
          <label htmlFor={`${uid}-dates`}>Travel dates</label>
          <input id={`${uid}-dates`} type="text" placeholder="e.g. 10–24 May, or 'flexible in autumn'" value={dates} onChange={(e) => setDates(e.target.value)} />
        </div>
        <fieldset className="us-field us-field--steppers">
          <legend>Travellers</legend>
          {[
            { label: "Adults", value: adults, set: setAdults, min: 1 },
            { label: "Children", value: children, set: setChildren, min: 0 },
          ].map((s) => (
            <div key={s.label} className="us-stepper">
              <span id={`${uid}-${s.label}`}>{s.label}</span>
              <button type="button" aria-label={`Fewer ${s.label.toLowerCase()}`} onClick={() => s.set(Math.max(s.min, s.value - 1))} disabled={s.value <= s.min}>
                <Minus size={15} aria-hidden="true" />
              </button>
              <output aria-labelledby={`${uid}-${s.label}`}>{s.value}</output>
              <button type="button" aria-label={`More ${s.label.toLowerCase()}`} onClick={() => s.set(Math.min(40, s.value + 1))}>
                <Plus size={15} aria-hidden="true" />
              </button>
            </div>
          ))}
        </fieldset>
        <div className="us-field">
          <label htmlFor={`${uid}-dest`}>Destinations</label>
          <select id={`${uid}-dest`} value={dest} onChange={(e) => setDest(e.target.value)}>
            <option value="">Open to suggestions</option>
            {visibleUSADestinations.map((d) => <option key={d.id} value={d.name}>{d.name}</option>)}
          </select>
        </div>
        <div className="us-field-row">
          <div className="us-field">
            <label htmlFor={`${uid}-style`}>Package style</label>
            <select id={`${uid}-style`} value={style} onChange={(e) => setStyle(e.target.value)}>
              <option value="">Any</option>
              {travelStyles.map((t) => <option key={t.id} value={t.label}>{t.label}</option>)}
            </select>
          </div>
          <div className="us-field">
            <label htmlFor={`${uid}-hotel`}>Hotel category</label>
            <select id={`${uid}-hotel`} value={hotel} onChange={(e) => setHotel(e.target.value)}>
              <option value="">Any</option>
              {HOTELS.map((h) => <option key={h} value={h}>{h}</option>)}
            </select>
          </div>
        </div>
        <div className="us-field-row">
          <div className="us-field">
            <label htmlFor={`${uid}-budget`}>Budget range</label>
            <select id={`${uid}-budget`} value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="">Select</option>
              {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
          <div className="us-field">
            <label htmlFor={`${uid}-visa`}>Visa status</label>
            <select id={`${uid}-visa`} value={visa} onChange={(e) => setVisa(e.target.value)}>
              <option value="">Select</option>
              {VISA.map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
        </div>
        <button type="submit" className="pkg-btn pkg-btn--lg pkg-btn--block asia-btn--gold">
          <Send size={18} aria-hidden="true" /> Send via WhatsApp
        </button>
        <p className="us-gw__fine">Opens WhatsApp with your details filled in. Nothing is stored on this website.</p>
      </form>
    </div>
  );
}

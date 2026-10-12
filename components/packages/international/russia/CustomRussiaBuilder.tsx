"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Minus, Plus, Send } from "lucide-react";
import { visibleDestinations } from "@/data/russia/destinations";
import { russiaExperiences } from "@/data/russia/experiences";
import { contact } from "@/lib/russia/config";
import { useRussiaFilters } from "@/lib/russia/explorer";
import { Choice } from "../asia/CustomTripBuilder";

const DEPARTURES = ["Kathmandu", "Delhi", "Mumbai", "Other city"];
const DURATIONS = ["3–4 nights", "5–6 nights", "7–9 nights", "10+ nights", "Not sure"];
const HOTELS = ["3★", "4★", "5★", "Boutique"];
const TRANSPORT = ["Flights", "Rail where possible", "Mix of both", "Private transfers"];
const BUDGETS = ["Budget", "Mid-range", "Premium", "Luxury"];
const TRIP_TYPES = ["Honeymoon", "Family", "Group", "Private"];
const SPECIALS = ["Northern Lights", "White Nights", "Ballet / theatre", "Baikal ice", "Skiing", "River cruise", "Trans-Siberian rail"];

/** Multi-select pill group (checkboxes), styled like the single-choice pills. */
function Multi({ uid, name, options, value, onChange }: { uid: string; name: string; options: string[]; value: string[]; onChange: (v: string[]) => void }) {
  return (
    <fieldset className="asia-builder__set">
      <legend className="asia-builder__legend">{name}</legend>
      <div className="asia-builder__opts">
        {options.map((o) => {
          const on = value.includes(o);
          return (
            <label key={o} className={`asia-opt${on ? " is-active" : ""}`}>
              <input
                type="checkbox"
                name={`${uid}-${name}`}
                checked={on}
                onChange={() => onChange(on ? value.filter((v) => v !== o) : [...value, o])}
              />
              {on && <Check size={14} aria-hidden="true" />}
              {o}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

/**
 * UI-only builder: nothing is stored or sent to a server. "Create My Russia Trip"
 * opens WhatsApp with the choices written out.
 */
export default function CustomRussiaBuilder() {
  const uid = useId();
  const filters = useRussiaFilters();
  const bookable = visibleDestinations.filter((d) => !d.partOf);

  const [from, setFrom] = useState("Kathmandu");
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [picked, setPicked] = useState<string[] | null>(null);
  const [duration, setDuration] = useState("");
  const [style, setStyle] = useState("");
  const [hotel, setHotel] = useState("");
  const [transport, setTransport] = useState("");
  const [budget, setBudget] = useState("");
  const [tripType, setTripType] = useState("");
  const [specials, setSpecials] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  // Untouched destination picks follow the page's destination filter.
  const fromFilter = filters.destination !== "all" ? [visibleDestinations.find((d) => d.id === filters.destination)?.name].filter(Boolean) as string[] : [];
  const destinations = picked ?? fromFilter;

  const summary = [
    destinations.length ? destinations.join(", ") : "Destinations open to suggestions",
    duration,
    style && `${style} style`,
    tripType && `${tripType} trip`,
    hotel && `${hotel} hotels`,
    transport,
    budget && `${budget} budget`,
    `${adults} adult${adults === 1 ? "" : "s"}${children ? `, ${children} child${children === 1 ? "" : "ren"}` : ""}`,
    `From ${from}`,
    date && `Around ${date}`,
    specials.length ? `Interested in: ${specials.join(", ")}` : "",
  ].filter(Boolean) as string[];

  const send = () => {
    const text = `Hello Karvaahh, I'd like a Russia trip.\n${summary.map((s) => `• ${s}`).join("\n")}${message.trim() ? `\n\n${message.trim()}` : ""}`;
    window.open(contact.whatsapp(text), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="asia-builder" aria-label="Build your Russia journey" onSubmit={(e) => { e.preventDefault(); send(); }}>
      <div className="asia-builder__fields">
        <div className="ru-builder__two">
          <div className="asia-builder__set">
            <label htmlFor={`${uid}-from`} className="asia-builder__legend">Departure City</label>
            <select id={`${uid}-from`} className="asia-builder__select" value={from} onChange={(e) => setFrom(e.target.value)}>
              {DEPARTURES.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div className="asia-builder__set">
            <label htmlFor={`${uid}-date`} className="asia-builder__legend">Travel Date</label>
            <input id={`${uid}-date`} type="date" className="asia-builder__select ru-date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
        </div>

        <fieldset className="asia-builder__set">
          <legend className="asia-builder__legend">Number of Travelers</legend>
          <div className="asia-builder__steppers">
            {[
              { label: "Adults", value: adults, set: setAdults, min: 1 },
              { label: "Children", value: children, set: setChildren, min: 0 },
            ].map((s) => (
              <div key={s.label} className="asia-stepper">
                <span className="asia-stepper__label" id={`${uid}-${s.label}`}>{s.label}</span>
                <button type="button" aria-label={`Fewer ${s.label.toLowerCase()}`} onClick={() => s.set(Math.max(s.min, s.value - 1))} disabled={s.value <= s.min}>
                  <Minus size={16} aria-hidden="true" />
                </button>
                <output aria-labelledby={`${uid}-${s.label}`}>{s.value}</output>
                <button type="button" aria-label={`More ${s.label.toLowerCase()}`} onClick={() => s.set(Math.min(40, s.value + 1))}>
                  <Plus size={16} aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
        </fieldset>

        <Multi uid={uid} name="Preferred Destinations" options={bookable.map((d) => d.name)} value={destinations} onChange={setPicked} />
        <Choice uid={uid} name="Duration" options={DURATIONS.map((v) => ({ value: v, label: v }))} value={duration} onChange={setDuration} />
        <Choice uid={uid} name="Travel Style" options={russiaExperiences.filter((e) => e.card).map((e) => ({ value: e.card!.title, label: e.card!.title }))} value={style} onChange={setStyle} />
        <Choice uid={uid} name="Hotel Category" options={HOTELS.map((v) => ({ value: v, label: v }))} value={hotel} onChange={setHotel} />
        <Choice uid={uid} name="Transport Preference" options={TRANSPORT.map((v) => ({ value: v, label: v }))} value={transport} onChange={setTransport} />
        <Choice uid={uid} name="Budget Category" options={BUDGETS.map((v) => ({ value: v, label: v }))} value={budget} onChange={setBudget} />
        <Choice uid={uid} name="Trip Type" options={TRIP_TYPES.map((v) => ({ value: v, label: v }))} value={tripType} onChange={setTripType} />
        <Multi uid={uid} name="Special Experiences" options={SPECIALS} value={specials} onChange={setSpecials} />

        <div className="asia-builder__set">
          <label htmlFor={`${uid}-msg`} className="asia-builder__legend">Message</label>
          <textarea
            id={`${uid}-msg`}
            className="asia-builder__select ru-textarea"
            rows={3}
            placeholder="Anything else we should know? Dates are flexible, a birthday, dietary needs…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <aside className="asia-builder__summary" aria-label="Your Russia trip so far">
        <p className="asia-builder__summary-h">Your Russia trip so far</p>
        <ul>
          <AnimatePresence initial={false}>
            {summary.map((s) => (
              <motion.li key={s} layout initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
                <Check size={15} aria-hidden="true" /> {s}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        <button type="submit" className="pkg-btn pkg-btn--lg pkg-btn--block asia-btn--gold">
          <Send size={18} aria-hidden="true" /> Create My Russia Trip
        </button>
        <p className="asia-builder__fine">
          Opens WhatsApp with your choices filled in. Nothing is stored on this website. Prefer to talk? Call{" "}
          <a href={contact.nepalPhoneHref}>{contact.nepalPhone}</a> or <a href={contact.indiaPhoneHref}>{contact.indiaPhone}</a>.
        </p>
      </aside>
    </form>
  );
}

"use client";

import { useId, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Minus, Plus, Send } from "lucide-react";
import { builderOptions } from "@/data/europe/content";
import { bookableCountries } from "@/data/europe/countries";
import { europeStyles } from "@/data/europe/travel-styles";
import { contact } from "@/lib/europe/config";
import { useExplorer } from "@/lib/europe/explorer";

const byName = [...bookableCountries].sort((a, b) => a.name.localeCompare(b.name));

function Choice({
  uid,
  name,
  options,
  value,
  onChange,
  multi = false,
}: {
  uid: string;
  name: string;
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
  multi?: boolean;
}) {
  return (
    <fieldset className="asia-builder__set">
      <legend className="asia-builder__legend">{name}{multi && <span className="eu-builder__hint"> · choose any</span>}</legend>
      <div className="asia-builder__opts">
        {options.map((o) => {
          const on = value.includes(o);
          return (
            <label key={o} className={`asia-opt${on ? " is-active" : ""}`}>
              <input
                type={multi ? "checkbox" : "radio"}
                name={`${uid}-${name}`}
                value={o}
                checked={on}
                onChange={() => onChange(multi ? (on ? value.filter((x) => x !== o) : [...value, o]) : [o])}
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
 * Frontend-only trip builder. Nothing is stored or sent to a server: "Build My
 * Europe Trip" opens WhatsApp with the selections written out as a message.
 * No departure airport is assumed; the traveller chooses one.
 */
export default function CustomEuropeBuilder() {
  const uid = useId();
  const explorer = useExplorer();
  const [countries, setCountries] = useState<string[]>([]);
  const [cities, setCities] = useState("");
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [duration, setDuration] = useState<string[]>([]);
  const [style, setStyle] = useState("");
  const [budget, setBudget] = useState<string[]>([]);
  const [tripType, setTripType] = useState<string[]>([]);
  const [stay, setStay] = useState<string[]>([]);
  const [transport, setTransport] = useState<string[]>([]);
  const [extras, setExtras] = useState<string[]>([]);
  const [from, setFrom] = useState<string[]>([]);

  // Carry over a country or style chosen in the filters (adjusting state during
  // render when the filters change, rather than in an effect).
  const filterStyle = explorer.styles[0] ?? "";
  const [seen, setSeen] = useState({ country: "all", style: "" });
  if (seen.country !== explorer.country || seen.style !== filterStyle) {
    setSeen({ country: explorer.country, style: filterStyle });
    const c = bookableCountries.find((x) => x.id === explorer.country);
    if (c && !countries.includes(c.name)) setCountries([...countries, c.name]);
    if (filterStyle) setStyle(filterStyle);
  }

  const citySuggestions = useMemo(
    () => bookableCountries.filter((c) => countries.includes(c.name)).flatMap((c) => c.cities),
    [countries],
  );

  const styleName = europeStyles.find((s) => s.id === style)?.label;
  const summary = [
    countries.length ? countries.join(", ") : "Countries open to suggestions",
    cities.trim() && `Cities: ${cities.trim()}`,
    date && `Around ${date}`,
    `${adults} adult${adults === 1 ? "" : "s"}${children ? `, ${children} child${children === 1 ? "" : "ren"}` : ""}`,
    duration[0],
    styleName && `${styleName} style`,
    budget[0] && `${budget[0]} budget`,
    tripType[0] && `${tripType[0]} trip`,
    stay[0] && `${stay[0]} hotels`,
    transport.length > 0 && `Transport: ${transport.join(", ")}`,
    extras.length > 0 && `Experiences: ${extras.join(", ")}`,
    from[0] ? `Departing from ${from[0]}` : "Departure city to confirm",
  ].filter(Boolean) as string[];

  const message = `Hello Karvaahh, I'd like a custom Europe trip.\n${summary.map((s) => `• ${s}`).join("\n")}`;

  return (
    <form
      className="asia-builder eu-builder"
      aria-label="Build your Europe journey"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(contact.whatsapp(message), "_blank", "noopener,noreferrer");
      }}
    >
      <div className="asia-builder__fields">
        <fieldset className="asia-builder__set">
          <legend className="asia-builder__legend">Preferred Countries<span className="eu-builder__hint"> · choose any</span></legend>
          <div className="eu-builder__countries">
            {byName.map((c) => {
              const on = countries.includes(c.name);
              return (
                <label key={c.id} className={`asia-opt${on ? " is-active" : ""}`}>
                  <input
                    type="checkbox"
                    checked={on}
                    onChange={() => setCountries(on ? countries.filter((x) => x !== c.name) : [...countries, c.name])}
                  />
                  {on && <Check size={14} aria-hidden="true" />}
                  {c.name}
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="eu-builder__row">
          <div className="asia-builder__set">
            <label htmlFor={`${uid}-cities`} className="asia-builder__legend">Preferred Cities</label>
            <input
              id={`${uid}-cities`}
              className="asia-builder__select eu-builder__input"
              list={`${uid}-city-list`}
              placeholder="e.g. Paris, Lucerne, Venice"
              value={cities}
              onChange={(e) => setCities(e.target.value)}
            />
            <datalist id={`${uid}-city-list`}>
              {citySuggestions.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </div>
          <div className="asia-builder__set">
            <label htmlFor={`${uid}-date`} className="asia-builder__legend">Travel Date</label>
            <input
              id={`${uid}-date`}
              type="month"
              className="asia-builder__select eu-builder__input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
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
                <output aria-labelledby={`${uid}-${s.label}`} aria-live="polite">{s.value}</output>
                <button type="button" aria-label={`More ${s.label.toLowerCase()}`} onClick={() => s.set(Math.min(60, s.value + 1))}>
                  <Plus size={16} aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
        </fieldset>

        <Choice uid={uid} name="Duration" options={builderOptions.durations} value={duration} onChange={setDuration} />

        <div className="asia-builder__set">
          <label htmlFor={`${uid}-style`} className="asia-builder__legend">Travel Style</label>
          <select id={`${uid}-style`} className="asia-builder__select" value={style} onChange={(e) => setStyle(e.target.value)}>
            <option value="">No preference</option>
            {europeStyles.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </div>

        <Choice uid={uid} name="Budget Category" options={builderOptions.budgets} value={budget} onChange={setBudget} />
        <Choice uid={uid} name="Trip Type" options={builderOptions.tripTypes} value={tripType} onChange={setTripType} />
        <Choice uid={uid} name="Accommodation Level" options={builderOptions.accommodation} value={stay} onChange={setStay} />
        <Choice uid={uid} name="Transport Preference" options={builderOptions.transport} value={transport} onChange={setTransport} multi />
        <Choice uid={uid} name="Special Experiences" options={builderOptions.experiences} value={extras} onChange={setExtras} multi />
        <Choice uid={uid} name="Departure City" options={builderOptions.departures} value={from} onChange={setFrom} />
      </div>

      <aside className="asia-builder__summary" aria-label="Your Europe trip so far">
        <p className="asia-builder__summary-h">Your Europe trip so far</p>
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
          <Send size={18} aria-hidden="true" /> Build My Europe Trip
        </button>
        <p className="asia-builder__fine">
          Opens WhatsApp with your choices filled in; nothing is stored on this page. Prefer to talk? Call{" "}
          <a href={contact.nepalPhoneHref}>{contact.nepalPhone}</a> or <a href={contact.indiaPhoneHref}>{contact.indiaPhone}</a>.
        </p>
      </aside>
    </form>
  );
}

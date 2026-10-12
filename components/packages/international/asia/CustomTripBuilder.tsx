"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Minus, Plus, Send } from "lucide-react";
import type { BudgetLevel } from "@/data/asia-destinations";
import { travelStyles, type TravelStyleId } from "@/data/travel-styles";
import { contact } from "@/lib/asia/config";
import { BUDGETS, useExplorer } from "@/lib/asia/explorer";

const DURATIONS = ["3–4 days", "5–6 days", "7–9 days", "10–14 days", "15+ days"];
const DEPARTURES = ["Nepal", "India", "Elsewhere"];

/** Pill-style radio group, shared with the Russia trip builder. */
export function Choice({
  uid,
  name,
  options,
  value,
  onChange,
}: {
  uid: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="asia-builder__set">
      <legend className="asia-builder__legend">{name}</legend>
      <div className="asia-builder__opts">
        {options.map((o) => (
          <label key={o.value} className={`asia-opt${value === o.value ? " is-active" : ""}`}>
            <input
              type="radio"
              name={`${uid}-${name}`}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
            />
            {value === o.value && <Check size={14} aria-hidden="true" />}
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

/**
 * UI-only trip builder. Nothing is stored or sent to a server: "Build My Custom
 * Trip" opens WhatsApp with the selections written out as a message.
 */
export default function CustomTripBuilder({ countries }: { countries: { name: string; places: string[] }[] }) {
  const uid = useId();
  const explorer = useExplorer();
  // null = untouched, so choices made in the hero planner or filters carry over.
  const [pickedDestination, setDestination] = useState<string | null>(null);
  const [pickedStyle, setStyle] = useState<TravelStyleId | "" | null>(null);
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState<BudgetLevel | "">("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [from, setFrom] = useState("Nepal");

  const q = explorer.query.trim().toLowerCase();
  const fromPlanner = q ? countries.find((c) => [c.name, ...c.places].some((p) => p.toLowerCase() === q))?.name : undefined;
  const destination = pickedDestination ?? fromPlanner ?? "";
  const style = pickedStyle ?? (explorer.style === "all" ? "" : explorer.style);

  const styleName = travelStyles.find((s) => s.id === style)?.label;
  const budgetName = BUDGETS.find((b) => b.id === budget)?.label;

  const summary = [
    destination || "Destination open to suggestions",
    styleName,
    duration,
    budgetName && `${budgetName} budget`,
    `${adults} adult${adults === 1 ? "" : "s"}${children ? `, ${children} child${children === 1 ? "" : "ren"}` : ""}`,
    `From ${from}`,
    explorer.plan.date && `Around ${explorer.plan.date}`,
  ].filter(Boolean) as string[];

  const message = `Hello Karvaahh, I'd like a custom Asia trip.\n${summary.map((s) => `• ${s}`).join("\n")}`;

  return (
    <form
      className="asia-builder"
      aria-label="Custom trip builder"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(contact.whatsapp(message), "_blank", "noopener,noreferrer");
      }}
    >
      <div className="asia-builder__fields">
        <div className="asia-builder__set">
          <label htmlFor={`${uid}-dest`} className="asia-builder__legend">Destination</label>
          <select id={`${uid}-dest`} className="asia-builder__select" value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option value="">Not sure yet — suggest one</option>
            {countries.map((c) => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
            <option value="Multiple countries">Multiple countries</option>
          </select>
        </div>

        <Choice
          uid={uid}
          name="Travel Style"
          options={travelStyles.map((s) => ({ value: s.id, label: s.label }))}
          value={style}
          onChange={(v) => setStyle(v as TravelStyleId)}
        />
        <Choice uid={uid} name="Duration" options={DURATIONS.map((d) => ({ value: d, label: d }))} value={duration} onChange={setDuration} />
        <Choice
          uid={uid}
          name="Budget Level"
          options={BUDGETS.map((b) => ({ value: b.id, label: b.label }))}
          value={budget}
          onChange={(v) => setBudget(v as BudgetLevel)}
        />

        <fieldset className="asia-builder__set">
          <legend className="asia-builder__legend">Travelers</legend>
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
                <button type="button" aria-label={`More ${s.label.toLowerCase()}`} onClick={() => s.set(Math.min(40, s.value + 1))}>
                  <Plus size={16} aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
        </fieldset>

        <Choice uid={uid} name="Departing from" options={DEPARTURES.map((d) => ({ value: d, label: d }))} value={from} onChange={setFrom} />
      </div>

      <aside className="asia-builder__summary" aria-label="Your trip so far">
        <p className="asia-builder__summary-h">Your trip so far</p>
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
          <Send size={18} aria-hidden="true" /> Build My Custom Trip
        </button>
        <p className="asia-builder__fine">
          Opens WhatsApp with your choices filled in. Prefer to talk? Call{" "}
          <a href={contact.nepalPhoneHref}>{contact.nepalPhone}</a> or <a href={contact.indiaPhoneHref}>{contact.indiaPhone}</a>.
        </p>
      </aside>
    </form>
  );
}

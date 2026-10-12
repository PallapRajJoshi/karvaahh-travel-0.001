"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Minus, Phone, Plus, Send, X } from "lucide-react";
import { cabinCategories } from "@/data/antarctica/cruise";
import { departureCities } from "@/data/antarctica/gateways";
import { mapRegionById } from "@/data/antarctica/regions";
import { styleById } from "@/data/antarctica/styles";
import type { ExpeditionStyle } from "@/data/antarctica/types";
import { ANTARCTICA_ENQUIRY, contact } from "@/lib/antarctica/config";
import { setBuilderPrefill, useBuilderPrefill, usePolarFilters } from "@/lib/antarctica/explorer";

const JOURNEY_STYLES: ExpeditionStyle[] = ["classic", "wildlife", "photography", "luxury", "adventure", "honeymoon", "educational", "family"];
const JOURNEYS = JOURNEY_STYLES.map((s) => styleById(s)?.label ?? s);
const DURATIONS = ["About a week (air-cruise)", "9–11 nights", "12–14 nights", "15+ nights (South Georgia / Falklands)", "Not sure yet"];
const REGIONS = ["Antarctic Peninsula", "South Shetland Islands", "Antarctic Circle", "South Georgia", "Falkland Islands / Malvinas", "Weddell Sea", "Open to suggestions"];
const CROSSING = ["Drake Passage by ship", "Air-cruise", "Either"];
const CABINS = [...cabinCategories.map((c) => c.name), "Advise me"];
const MONTHS = ["November", "December", "January", "February", "March", "Flexible"];
const BUDGETS = ["Value expedition", "Mid-range", "Premium", "Luxury", "Ultra luxury", "Help me decide"];
const VISA = ["I have the visas I need", "Need transit-visa guidance", "Not started yet", "Not sure"];
const POLAR = ["First polar journey", "Visited the Arctic", "Visited Antarctica before"];

const STEPS = [
  "What kind of polar journey do you want?",
  "How long do you want to travel?",
  "Which expedition region?",
  "Cabin preference?",
  "Preferred departure gateway?",
  "Travel dates?",
  "Budget?",
  "Visa status?",
] as const;

function Pills({ name, options, value, onChange, multi = false }: { name: string; options: string[]; value: string[]; onChange: (v: string[]) => void; multi?: boolean }) {
  return (
    <div className="an-pills" role="group" aria-label={name}>
      {options.map((o) => {
        const on = value.includes(o);
        return (
          <button
            key={o}
            type="button"
            className={`an-pill${on ? " is-active" : ""}`}
            aria-pressed={on}
            onClick={() => onChange(multi ? (on ? value.filter((v) => v !== o) : [...value, o]) : on ? [] : [o])}
          >
            {on && <Check size={14} aria-hidden="true" />} {o}
          </button>
        );
      })}
    </div>
  );
}

/**
 * Eight-step expedition enquiry. UI only: nothing is stored or sent to a
 * server; "Design My Antarctica Expedition" opens WhatsApp with the answers.
 * Starts from the page's filters or a "Customize" click.
 */
export default function AntarcticaTripBuilder() {
  const uid = useId();
  const filters = usePolarFilters();
  const prefill = useBuilderPrefill();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);
  const [step, setStep] = useState(0);
  const [journeys, setJourneys] = useState<string[] | null>(null);
  const [duration, setDuration] = useState<string[]>([]);
  const [regions, setRegions] = useState<string[] | null>(null);
  const [crossing, setCrossing] = useState<string[]>([]);
  const [cabin, setCabin] = useState<string[]>([]);
  const [from, setFrom] = useState(departureCities[0].city);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [months, setMonths] = useState<string[]>([]);
  const [dates, setDates] = useState("");
  const [budget, setBudget] = useState<string[]>([]);
  const [visa, setVisa] = useState<string[]>([]);
  const [polar, setPolar] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  // A "Customize" click restarts at step 1 with that card's styles / region
  // (adjusted during render when the prefill changes; no effect needed).
  const [seen, setSeen] = useState(prefill);
  if (prefill !== seen) {
    setSeen(prefill);
    if (prefill) {
      if (prefill.styles?.length) setJourneys(prefill.styles.map((s) => styleById(s)?.label).filter((l): l is string => !!l && JOURNEYS.includes(l)));
      if (prefill.region) setRegions(REGIONS.includes(prefill.region) ? [prefill.region] : null);
      setStep(0);
    }
  }

  // Untouched answers follow the page's filters.
  const journeyValue = journeys ?? filters.styles.map((s) => styleById(s)?.label).filter((l): l is string => !!l && JOURNEYS.includes(l));
  const regionFromMap = filters.region !== "all" ? mapRegionById(filters.region)?.name : undefined;
  const regionValue = regions ?? [...new Set([...(regionFromMap && REGIONS.includes(regionFromMap) ? [regionFromMap] : []), ...filters.routes.map((r) => mapRegionById(r)?.name).filter((n): n is string => !!n && REGIONS.includes(n))])];

  useEffect(() => {
    if (moved.current) headingRef.current?.focus();
  }, [step]);

  const go = (n: number) => {
    moved.current = true;
    setStep(Math.max(0, Math.min(STEPS.length - 1, n)));
  };

  const travellers = `${adults} adult${adults === 1 ? "" : "s"}${children ? `, ${children} child${children === 1 ? "" : "ren"}` : ""}`;
  const summary: [string, string][] = [
    ["Journey", journeyValue.join(", ") || "Open"],
    ["Duration", duration[0] ?? "Flexible"],
    ["Region", [regionValue.join(", "), crossing[0]].filter(Boolean).join(" · ") || "Open to suggestions"],
    ["Cabin", cabin[0] ?? "Not set"],
    ["Travellers", `${travellers} · from ${from}`],
    ["Dates", [months.join(", "), dates.trim()].filter(Boolean).join(" · ") || "Flexible"],
    ["Budget", budget[0] ?? "Not set"],
    ["Visa", [visa[0], polar[0]].filter(Boolean).join(" · ") || "Not set"],
  ];

  const send = () => {
    const text = `Hello Karvaahh, please help me design an Antarctica expedition${prefill ? ` (starting from: ${prefill.title})` : ""}.\n${summary
      .map(([k, v]) => `• ${k}: ${v}`)
      .join("\n")}${notes.trim() ? `\n\n${notes.trim()}` : ""}`;
    window.open(contact.whatsapp(text), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="an-builder">
      <form
        className="an-builder__form"
        aria-label="Antarctica trip builder"
        onSubmit={(e) => {
          e.preventDefault();
          if (step < STEPS.length - 1) go(step + 1);
          else send();
        }}
      >
        <div className="an-builder__progress" aria-hidden="true">
          <motion.span animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }} transition={{ duration: 0.4 }} />
        </div>
        <ol className="an-builder__steps" aria-label="Steps">
          {STEPS.map((s, i) => (
            <li key={s}>
              <button
                type="button"
                className={`an-builder__dot${i === step ? " is-active" : ""}${i < step ? " is-done" : ""}`}
                aria-current={i === step ? "step" : undefined}
                onClick={() => go(i)}
              >
                <span aria-hidden="true">{i < step ? <Check size={12} /> : i + 1}</span>
                <span className="pkg-sr">Step {i + 1}: {s}</span>
              </button>
            </li>
          ))}
        </ol>

        {prefill && (
          <p className="an-builder__prefill">
            Starting from <strong>{prefill.title}</strong>
            <button type="button" aria-label="Clear starting point" onClick={() => { setBuilderPrefill(null); setJourneys(null); setRegions(null); }}>
              <X size={14} aria-hidden="true" />
            </button>
          </p>
        )}

        <AnimatePresence mode="wait" initial={false}>
          <motion.fieldset key={step} className="an-builder__step" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
            <legend className="pkg-sr">{STEPS[step]}</legend>
            <p className="an-builder__count">Step {step + 1} of {STEPS.length}</p>
            <h3 className="an-builder__q" ref={headingRef} tabIndex={-1}>{STEPS[step]}</h3>

            {step === 0 && <Pills name="Journey type" options={JOURNEYS} value={journeyValue} onChange={setJourneys} multi />}
            {step === 1 && <Pills name="Expedition duration" options={DURATIONS} value={duration} onChange={setDuration} />}
            {step === 2 && (
              <>
                <Pills name="Expedition region" options={REGIONS} value={regionValue} onChange={setRegions} multi />
                <p className="an-builder__group-h">How would you like to cross?</p>
                <Pills name="Crossing" options={CROSSING} value={crossing} onChange={setCrossing} />
              </>
            )}
            {step === 3 && (
              <>
                <Pills name="Cabin preference" options={CABINS} value={cabin} onChange={setCabin} />
                <p className="an-builder__fine">Cabin availability depends on the vessel and departure; we confirm it before you book.</p>
              </>
            )}
            {step === 4 && (
              <>
                <div className="an-field">
                  <label htmlFor={`${uid}-from`}>Departing from</label>
                  <select id={`${uid}-from`} value={from} onChange={(e) => setFrom(e.target.value)}>
                    {departureCities.map((c) => <option key={c.id} value={c.city}>{c.city}</option>)}
                  </select>
                </div>
                <div className="an-builder__steppers">
                  {[
                    { label: "Adults", value: adults, set: setAdults, min: 1 },
                    { label: "Children", value: children, set: setChildren, min: 0 },
                  ].map((s) => (
                    <div key={s.label} className="an-stepper">
                      <span id={`${uid}-${s.label}`}>{s.label}</span>
                      <button type="button" aria-label={`Fewer ${s.label.toLowerCase()}`} onClick={() => s.set(Math.max(s.min, s.value - 1))} disabled={s.value <= s.min}>
                        <Minus size={15} aria-hidden="true" />
                      </button>
                      <output aria-labelledby={`${uid}-${s.label}`}>{s.value}</output>
                      <button type="button" aria-label={`More ${s.label.toLowerCase()}`} onClick={() => s.set(Math.min(30, s.value + 1))}>
                        <Plus size={15} aria-hidden="true" />
                      </button>
                    </div>
                  ))}
                </div>
                <p className="an-builder__fine">Operators set their own minimum ages for children; we check before recommending a voyage.</p>
              </>
            )}
            {step === 5 && (
              <>
                <p className="an-builder__group-h">Expedition season months</p>
                <Pills name="Travel months" options={MONTHS} value={months} onChange={setMonths} multi />
                <div className="an-field">
                  <label htmlFor={`${uid}-dates`}>Specific dates or year (optional)</label>
                  <input id={`${uid}-dates`} type="text" value={dates} onChange={(e) => setDates(e.target.value)} placeholder="e.g. late December 2027" />
                </div>
              </>
            )}
            {step === 6 && <Pills name="Budget range" options={BUDGETS} value={budget} onChange={setBudget} />}
            {step === 7 && (
              <>
                <Pills name="Visa status" options={VISA} value={visa} onChange={setVisa} />
                <p className="an-builder__group-h">Previous polar travel</p>
                <Pills name="Previous polar travel" options={POLAR} value={polar} onChange={setPolar} />
                <p className="an-builder__fine">Document assistance is available where offered. Visa approval is decided by the relevant authorities and cannot be guaranteed.</p>
                <div className="an-field">
                  <label htmlFor={`${uid}-notes`}>Anything else?</label>
                  <textarea id={`${uid}-notes`} rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="A honeymoon, photography goals, mobility needs, extensions…" />
                </div>
              </>
            )}
          </motion.fieldset>
        </AnimatePresence>

        <div className="an-builder__nav">
          <button type="button" className="pkg-btn asia-btn--glass" onClick={() => go(step - 1)} disabled={step === 0}>
            <ArrowLeft size={16} aria-hidden="true" /> Back
          </button>
          {step < STEPS.length - 1 ? (
            <button type="submit" className="pkg-btn an-btn--ice">
              Next <ArrowRight size={16} aria-hidden="true" />
            </button>
          ) : (
            <button type="submit" className="pkg-btn pkg-btn--lg an-btn--ice">
              <Send size={18} aria-hidden="true" /> Design My Antarctica Expedition
            </button>
          )}
        </div>
      </form>

      <aside className="an-builder__summary" aria-label="Your expedition so far">
        <p className="an-builder__summary-h">Your expedition so far</p>
        <dl>
          {summary.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <button type="button" className="pkg-btn pkg-btn--block an-btn--ice" onClick={send}>
          <Send size={16} aria-hidden="true" /> Design My Antarctica Expedition
        </button>
        <div className="an-builder__alt">
          <a href={ANTARCTICA_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--glass">
            <MessageCircle size={16} aria-hidden="true" /> WhatsApp Karvaahh<span className="pkg-sr"> (opens WhatsApp)</span>
          </a>
          <a href={contact.nepalPhoneHref} className="pkg-btn asia-btn--glass">
            <Phone size={16} aria-hidden="true" /> Call Karvaahh
          </a>
        </div>
        <p className="an-builder__fine">
          Opens WhatsApp with your answers. Nothing is stored on this website. Call <a href={contact.nepalPhoneHref}>{contact.nepalPhone}</a> (Nepal) or{" "}
          <a href={contact.indiaPhoneHref}>{contact.indiaPhone}</a> (India).
        </p>
      </aside>
    </div>
  );
}

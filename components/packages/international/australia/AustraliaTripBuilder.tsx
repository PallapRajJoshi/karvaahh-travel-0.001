"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Minus, Phone, Plus, Send, X } from "lucide-react";
import { australiaDestinationById, visibleAustraliaDestinations } from "@/data/australia/destinations";
import { australiaRegions } from "@/data/australia/regions";
import { travelStyles } from "@/data/australia/travel-styles";
import { contact, enquireAbout } from "@/lib/australia/config";
import { setBuilderPrefill, useAUFilters, useBuilderPrefill } from "@/lib/australia/explorer";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const LENGTHS = ["Up to 6 nights", "7–9 nights", "10–13 nights", "14+ nights", "Not sure"];
const HOTELS = ["4-Star", "5-Star", "Boutique", "Luxury Resort", "Mix it up"];
const BUDGETS = ["Value", "Mid-range", "Premium", "Luxury", "Help me decide"];
const VISA = ["I have a valid Australian visa", "Applying / planning to apply", "Need visa guidance", "Other passport (ETA / eVisitor eligible)", "Not sure"];
const FROM = ["Kathmandu", "Delhi", "Mumbai", "Bengaluru", "Kolkata", "Chennai", "Hyderabad", "Other city"];

const STEPS = [
  "Where in Australia do you want to go?",
  "When are you travelling?",
  "Who is travelling?",
  "What type of experience do you want?",
  "Preferred hotel category?",
  "Budget range?",
  "Visa status?",
] as const;

function Pills({ name, options, value, onChange, multi = false }: { name: string; options: string[]; value: string[]; onChange: (v: string[]) => void; multi?: boolean }) {
  return (
    <div className="us-pills" role="group" aria-label={name}>
      {options.map((o) => {
        const on = value.includes(o);
        return (
          <button
            key={o}
            type="button"
            className={`us-pill${on ? " is-active" : ""}`}
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
 * Seven-step planner. UI only: nothing is stored or sent to a server;
 * "Build My Australia Journey" opens WhatsApp with the answers written out.
 * Destinations start from the page's filters or a "Customize" click.
 */
export default function AustraliaTripBuilder() {
  const uid = useId();
  const filters = useAUFilters();
  const prefill = useBuilderPrefill();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string[] | null>(null);
  const [months, setMonths] = useState<string[]>([]);
  const [length, setLength] = useState<string[]>([]);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [seniors, setSeniors] = useState(0);
  const [styles, setStyles] = useState<string[]>([]);
  const [hotel, setHotel] = useState<string[]>([]);
  const [budget, setBudget] = useState<string[]>([]);
  const [visa, setVisa] = useState<string[]>([]);
  const [from, setFrom] = useState("Kathmandu");
  const [notes, setNotes] = useState("");
  const moved = useRef(false);

  // A "Customize" click replaces the destination picks (and hotel, if given)
  // and restarts at step 1. State is adjusted during render, no effect needed.
  const [seenPrefill, setSeenPrefill] = useState(prefill);
  if (prefill !== seenPrefill) {
    setSeenPrefill(prefill);
    if (prefill) {
      if (prefill.destinations.length) setPicked(prefill.destinations.map((id) => australiaDestinationById(id)?.name).filter(Boolean) as string[]);
      if (prefill.hotel) setHotel([prefill.hotel]);
      setStep(prefill.hotel && !prefill.destinations.length ? 4 : 0);
    }
  }

  // Untouched destination picks follow the page's filters.
  const fromFilters =
    filters.destination !== "all"
      ? ([australiaDestinationById(filters.destination)?.name].filter(Boolean) as string[])
      : filters.region !== "all"
        ? visibleAustraliaDestinations.filter((d) => d.region === filters.region && d.featured).map((d) => d.name)
        : [];
  const destinations = picked ?? fromFilters;

  useEffect(() => {
    if (moved.current) headingRef.current?.focus();
  }, [step]);

  const go = (n: number) => {
    moved.current = true;
    setStep(Math.max(0, Math.min(STEPS.length - 1, n)));
  };

  const travellers = `${adults} adult${adults === 1 ? "" : "s"}${children ? `, ${children} child${children === 1 ? "" : "ren"}` : ""}${seniors ? `, ${seniors} senior${seniors === 1 ? "" : "s"}` : ""}`;
  const summary: [string, string][] = [
    ["Destinations", destinations.length ? destinations.join(", ") : "Open to suggestions"],
    ["When", [months.join(", "), length[0]].filter(Boolean).join(" · ") || "Flexible"],
    ["Travellers", `${travellers} · from ${from}`],
    ["Experience", styles.join(", ") || "Any"],
    ["Hotels", hotel[0] ?? "Any"],
    ["Budget", budget[0] ?? "Not set"],
    ["Visa", visa[0] ?? "Not set"],
  ];

  const send = () => {
    const text = `Hello Karvaahh, please help me build an Australia journey${prefill ? ` (starting from: ${prefill.title})` : ""}.\n${summary
      .map(([k, v]) => `• ${k}: ${v}`)
      .join("\n")}${notes.trim() ? `\n\n${notes.trim()}` : ""}`;
    window.open(contact.whatsapp(text), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="us-builder">
      <form className="us-builder__form" aria-label="Custom Australia trip builder" onSubmit={(e) => { e.preventDefault(); if (step < STEPS.length - 1) go(step + 1); else send(); }}>
        <div className="us-builder__progress" aria-hidden="true">
          <motion.span animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }} transition={{ duration: 0.4 }} />
        </div>
        <ol className="us-builder__steps" aria-label="Steps">
          {STEPS.map((s, i) => (
            <li key={s}>
              <button
                type="button"
                className={`us-builder__dot${i === step ? " is-active" : ""}${i < step ? " is-done" : ""}`}
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
          <p className="us-builder__prefill">
            Starting from <strong>{prefill.title}</strong>
            <button type="button" aria-label="Clear starting point" onClick={() => { setBuilderPrefill(null); setPicked(null); }}>
              <X size={14} aria-hidden="true" />
            </button>
          </p>
        )}

        <AnimatePresence mode="wait" initial={false}>
          <motion.fieldset
            key={step}
            className="us-builder__step"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            <legend className="pkg-sr">{STEPS[step]}</legend>
            <p className="us-builder__count">Step {step + 1} of {STEPS.length}</p>
            <h3 className="us-builder__q" ref={headingRef} tabIndex={-1}>{STEPS[step]}</h3>

            {step === 0 &&
              australiaRegions.map((r) => {
                const names = visibleAustraliaDestinations.filter((d) => d.region === r.id).map((d) => d.name);
                return (
                  <div key={r.id} className="us-builder__group">
                    <p className="us-builder__group-h">{r.name}</p>
                    <Pills name={`${r.name} destinations`} options={names} value={destinations} onChange={(v) => setPicked([...destinations.filter((x) => !names.includes(x)), ...v])} multi />
                  </div>
                );
              })}
            {step === 1 && (
              <>
                <p className="us-builder__group-h">Month(s)</p>
                <Pills name="Travel months" options={MONTHS} value={months} onChange={setMonths} multi />
                <p className="us-builder__group-h">Trip length</p>
                <Pills name="Trip length" options={LENGTHS} value={length} onChange={setLength} />
              </>
            )}
            {step === 2 && (
              <>
                <div className="us-builder__steppers">
                  {[
                    { label: "Adults", value: adults, set: setAdults, min: 1 },
                    { label: "Children", value: children, set: setChildren, min: 0 },
                    { label: "Seniors", value: seniors, set: setSeniors, min: 0 },
                  ].map((s) => (
                    <div key={s.label} className="us-stepper us-stepper--dark">
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
                </div>
                <div className="us-field us-field--dark">
                  <label htmlFor={`${uid}-from`}>Departing from</label>
                  <select id={`${uid}-from`} value={from} onChange={(e) => setFrom(e.target.value)}>
                    {FROM.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </>
            )}
            {step === 3 && <Pills name="Experience type" options={travelStyles.map((t) => t.label)} value={styles} onChange={setStyles} multi />}
            {step === 4 && <Pills name="Hotel category" options={HOTELS} value={hotel} onChange={setHotel} />}
            {step === 5 && <Pills name="Budget" options={BUDGETS} value={budget} onChange={setBudget} />}
            {step === 6 && (
              <>
                <Pills name="Visa status" options={VISA} value={visa} onChange={setVisa} />
                <p className="us-builder__fine">Visa guidance is available where offered. Approval is decided by Australian authorities and cannot be guaranteed.</p>
                <div className="us-field us-field--dark">
                  <label htmlFor={`${uid}-notes`}>Anything else?</label>
                  <textarea id={`${uid}-notes`} rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="A birthday, dietary needs, must-see places…" />
                </div>
              </>
            )}
          </motion.fieldset>
        </AnimatePresence>

        <div className="us-builder__nav">
          <button type="button" className="pkg-btn asia-btn--glass" onClick={() => go(step - 1)} disabled={step === 0}>
            <ArrowLeft size={16} aria-hidden="true" /> Back
          </button>
          {step < STEPS.length - 1 ? (
            <button type="submit" className="pkg-btn asia-btn--gold">
              Next <ArrowRight size={16} aria-hidden="true" />
            </button>
          ) : (
            <button type="submit" className="pkg-btn pkg-btn--lg asia-btn--gold">
              <Send size={18} aria-hidden="true" /> Build My Australia Journey
            </button>
          )}
        </div>
      </form>

      <aside className="us-builder__summary" aria-label="Your Australia journey so far">
        <p className="us-builder__summary-h">Your Australia journey so far</p>
        <dl>
          {summary.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <button type="button" className="pkg-btn pkg-btn--block asia-btn--gold" onClick={send}>
          <Send size={16} aria-hidden="true" /> Build My Australia Journey
        </button>
        <div className="us-builder__alt">
          <a href={enquireAbout("an Australia trip")} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--glass">
            <MessageCircle size={16} aria-hidden="true" /> WhatsApp Karvaahh<span className="pkg-sr"> (opens WhatsApp)</span>
          </a>
          <a href={contact.nepalPhoneHref} className="pkg-btn asia-btn--glass">
            <Phone size={16} aria-hidden="true" /> Call Karvaahh
          </a>
        </div>
        <p className="us-builder__fine">
          Opens WhatsApp with your answers. Nothing is stored on this website. Call <a href={contact.nepalPhoneHref}>{contact.nepalPhone}</a> (Nepal) or{" "}
          <a href={contact.indiaPhoneHref}>{contact.indiaPhone}</a> (India).
        </p>
      </aside>
    </div>
  );
}

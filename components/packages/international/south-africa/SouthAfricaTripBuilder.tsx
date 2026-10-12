"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Minus, Phone, Plus, Send, X } from "lucide-react";
import { departureCities } from "@/data/south-africa/gateways";
import { styleById } from "@/data/south-africa/styles";
import { SA_ENQUIRY, contact } from "@/lib/south-africa/config";
import { setBuilderPrefill, useBuilderPrefill, useSAFilters } from "@/lib/south-africa/explorer";

const WHERE = ["Cape Town", "Safari", "Garden Route", "Winelands", "Johannesburg", "Durban", "Other"];
const JOURNEY = ["Safari", "Honeymoon", "Family", "Luxury", "Adventure", "Road Trip", "Culture", "Beach"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const LENGTHS = ["Up to 6 nights", "7–9 nights", "10–13 nights", "14+ nights", "Not sure"];
const SAFARI = ["Kruger National Park", "Private reserve (e.g. Sabi Sand)", "Malaria-free (Pilanesberg / Addo)", "Kalahari / remote", "Advise me", "No safari"];
const DRIVES = ["Shared game drives", "Private vehicle", "No preference"];
const HOTELS = ["4-Star", "5-Star", "Boutique", "Luxury Lodge", "Ultra Luxury", "Mix it up"];
const BUDGETS = ["Value", "Mid-range", "Premium", "Luxury", "Ultra luxury", "Help me decide"];
const VISA = ["I have a valid visa", "Applying / planning to apply", "Need visa guidance", "Not sure"];

const STEPS = [
  "Where do you want to go?",
  "What type of journey?",
  "When are you travelling?",
  "How many travellers?",
  "Safari preference?",
  "Hotel category?",
  "Budget?",
  "Visa status?",
] as const;

/** Maps a destination id onto the builder's "where" options. */
function whereFor(id: string) {
  if (id === "cape-town") return "Cape Town";
  if (["stellenbosch", "franschhoek"].includes(id)) return "Winelands";
  if (["kruger", "sabi-sand", "pilanesberg", "addo", "kgalagadi"].includes(id)) return "Safari";
  if (["garden-route", "knysna", "plettenberg-bay", "mossel-bay", "oudtshoorn", "hermanus"].includes(id)) return "Garden Route";
  if (["johannesburg", "pretoria", "sun-city", "panorama-route", "blyde-river-canyon"].includes(id)) return "Johannesburg";
  if (["durban", "drakensberg"].includes(id)) return "Durban";
  return "Other";
}

function Pills({ name, options, value, onChange, multi = false }: { name: string; options: string[]; value: string[]; onChange: (v: string[]) => void; multi?: boolean }) {
  return (
    <div className="za-pills" role="group" aria-label={name}>
      {options.map((o) => {
        const on = value.includes(o);
        return (
          <button key={o} type="button" className={`za-pill${on ? " is-active" : ""}`} aria-pressed={on} onClick={() => onChange(multi ? (on ? value.filter((v) => v !== o) : [...value, o]) : on ? [] : [o])}>
            {on && <Check size={14} aria-hidden="true" />} {o}
          </button>
        );
      })}
    </div>
  );
}

/**
 * Eight-step enquiry. UI only: nothing is stored or sent to a server.
 * "Build My South Africa Journey" opens WhatsApp with the answers written out.
 * Starts from the page's style filters or any "Customize" click.
 */
export default function SouthAfricaTripBuilder() {
  const uid = useId();
  const filters = useSAFilters();
  const prefill = useBuilderPrefill();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);
  const [step, setStep] = useState(0);
  const [where, setWhere] = useState<string[] | null>(null);
  const [journey, setJourney] = useState<string[] | null>(null);
  const [months, setMonths] = useState<string[]>([]);
  const [length, setLength] = useState<string[]>([]);
  const [dates, setDates] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [from, setFrom] = useState(departureCities[0].city);
  const [safari, setSafari] = useState<string[]>([]);
  const [drives, setDrives] = useState<string[]>([]);
  const [hotel, setHotel] = useState<string[]>([]);
  const [budget, setBudget] = useState<string[]>([]);
  const [visa, setVisa] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  // A "Customize" click restarts at step 1 with that starting point
  // (adjusted during render when the prefill changes; no effect needed).
  const [seen, setSeen] = useState(prefill);
  if (prefill !== seen) {
    setSeen(prefill);
    if (prefill) {
      if (prefill.destinations?.length) setWhere([...new Set(prefill.destinations.map(whereFor))]);
      if (prefill.styles?.length) setJourney(prefill.styles.map((s) => styleById(s)?.label).filter((l): l is string => !!l && JOURNEY.includes(l)));
      setStep(0);
    }
  }

  // Untouched answers follow the page's filters.
  const whereValue = where ?? (filters.destination !== "all" ? [whereFor(filters.destination)] : []);
  const journeyValue = journey ?? filters.styles.map((s) => styleById(s)?.label).filter((l): l is string => !!l && JOURNEY.includes(l));

  useEffect(() => {
    if (moved.current) headingRef.current?.focus();
  }, [step]);

  const go = (n: number) => {
    moved.current = true;
    setStep(Math.max(0, Math.min(STEPS.length - 1, n)));
  };

  const travellers = `${adults} adult${adults === 1 ? "" : "s"}${children ? `, ${children} child${children === 1 ? "" : "ren"}` : ""}`;
  const summary: [string, string][] = [
    ["Destinations", whereValue.join(", ") || "Open to suggestions"],
    ["Journey", journeyValue.join(", ") || "Any"],
    ["When", [months.join(", "), length[0], dates.trim()].filter(Boolean).join(" · ") || "Flexible"],
    ["Travellers", `${travellers} · from ${from}`],
    ["Safari", [safari.join(", "), drives[0]].filter(Boolean).join(" · ") || "Not set"],
    ["Hotels", hotel[0] ?? "Not set"],
    ["Budget", budget[0] ?? "Not set"],
    ["Visa", visa[0] ?? "Not set"],
  ];

  const send = () => {
    const text = `Hello Karvaahh, please help me build a South Africa journey${prefill ? ` (starting from: ${prefill.title})` : ""}.\n${summary
      .map(([k, v]) => `• ${k}: ${v}`)
      .join("\n")}${notes.trim() ? `\n\n${notes.trim()}` : ""}`;
    window.open(contact.whatsapp(text), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="za-builder">
      <form className="za-builder__form" aria-label="South Africa trip builder" onSubmit={(e) => { e.preventDefault(); if (step < STEPS.length - 1) go(step + 1); else send(); }}>
        <div className="za-builder__progress" aria-hidden="true">
          <motion.span animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }} transition={{ duration: 0.4 }} />
        </div>
        <ol className="za-builder__steps" aria-label="Steps">
          {STEPS.map((s, i) => (
            <li key={s}>
              <button type="button" className={`za-builder__dot${i === step ? " is-active" : ""}${i < step ? " is-done" : ""}`} aria-current={i === step ? "step" : undefined} onClick={() => go(i)}>
                <span aria-hidden="true">{i < step ? <Check size={12} /> : i + 1}</span>
                <span className="pkg-sr">Step {i + 1}: {s}</span>
              </button>
            </li>
          ))}
        </ol>

        {prefill && (
          <p className="za-builder__prefill">
            Starting from <strong>{prefill.title}</strong>
            <button type="button" aria-label="Clear starting point" onClick={() => { setBuilderPrefill(null); setWhere(null); setJourney(null); }}>
              <X size={14} aria-hidden="true" />
            </button>
          </p>
        )}

        <AnimatePresence mode="wait" initial={false}>
          <motion.fieldset key={step} className="za-builder__step" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
            <legend className="pkg-sr">{STEPS[step]}</legend>
            <p className="za-builder__count">Step {step + 1} of {STEPS.length}</p>
            <h3 className="za-builder__q" ref={headingRef} tabIndex={-1}>{STEPS[step]}</h3>

            {step === 0 && <Pills name="Destinations" options={WHERE} value={whereValue} onChange={setWhere} multi />}
            {step === 1 && <Pills name="Journey type" options={JOURNEY} value={journeyValue} onChange={setJourney} multi />}
            {step === 2 && (
              <>
                <p className="za-builder__group-h">Month(s)</p>
                <Pills name="Travel months" options={MONTHS} value={months} onChange={setMonths} multi />
                <p className="za-builder__group-h">Trip length</p>
                <Pills name="Trip length" options={LENGTHS} value={length} onChange={setLength} />
                <div className="za-field">
                  <label htmlFor={`${uid}-dates`}>Specific dates (optional)</label>
                  <input id={`${uid}-dates`} type="text" value={dates} onChange={(e) => setDates(e.target.value)} placeholder="e.g. 10–20 October" />
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <div className="za-builder__steppers">
                  {[
                    { label: "Adults", value: adults, set: setAdults, min: 1 },
                    { label: "Children", value: children, set: setChildren, min: 0 },
                  ].map((s) => (
                    <div key={s.label} className="za-stepper">
                      <span id={`${uid}-${s.label}`}>{s.label}</span>
                      <button type="button" aria-label={`Fewer ${s.label.toLowerCase()}`} onClick={() => s.set(Math.max(s.min, s.value - 1))} disabled={s.value <= s.min}><Minus size={15} aria-hidden="true" /></button>
                      <output aria-labelledby={`${uid}-${s.label}`}>{s.value}</output>
                      <button type="button" aria-label={`More ${s.label.toLowerCase()}`} onClick={() => s.set(Math.min(40, s.value + 1))}><Plus size={15} aria-hidden="true" /></button>
                    </div>
                  ))}
                </div>
                <div className="za-field">
                  <label htmlFor={`${uid}-from`}>Departing from</label>
                  <select id={`${uid}-from`} value={from} onChange={(e) => setFrom(e.target.value)}>
                    {departureCities.map((c) => <option key={c.id} value={c.city}>{c.city}</option>)}
                  </select>
                </div>
              </>
            )}
            {step === 4 && (
              <>
                <Pills name="Safari preference" options={SAFARI} value={safari} onChange={setSafari} multi />
                <p className="za-builder__group-h">Game drives</p>
                <Pills name="Game drive preference" options={DRIVES} value={drives} onChange={setDrives} />
                <p className="za-builder__fine">Wildlife sightings are naturally unpredictable. Lodge child-age policies apply.</p>
              </>
            )}
            {step === 5 && <Pills name="Hotel category" options={HOTELS} value={hotel} onChange={setHotel} />}
            {step === 6 && <Pills name="Budget" options={BUDGETS} value={budget} onChange={setBudget} />}
            {step === 7 && (
              <>
                <Pills name="Visa status" options={VISA} value={visa} onChange={setVisa} />
                <p className="za-builder__fine">Visa guidance is available where offered. Approval is decided by the authorities and cannot be guaranteed.</p>
                <div className="za-field">
                  <label htmlFor={`${uid}-notes`}>Anything else?</label>
                  <textarea id={`${uid}-notes`} rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="An anniversary, dietary needs, must-see places…" />
                </div>
              </>
            )}
          </motion.fieldset>
        </AnimatePresence>

        <div className="za-builder__nav">
          <button type="button" className="pkg-btn asia-btn--glass" onClick={() => go(step - 1)} disabled={step === 0}>
            <ArrowLeft size={16} aria-hidden="true" /> Back
          </button>
          {step < STEPS.length - 1 ? (
            <button type="submit" className="pkg-btn za-btn--gold">Next <ArrowRight size={16} aria-hidden="true" /></button>
          ) : (
            <button type="submit" className="pkg-btn pkg-btn--lg za-btn--gold"><Send size={18} aria-hidden="true" /> Build My South Africa Journey</button>
          )}
        </div>
      </form>

      <aside className="za-builder__summary" aria-label="Your South Africa journey so far">
        <p className="za-builder__summary-h">Your journey so far</p>
        <dl>
          {summary.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
        <button type="button" className="pkg-btn pkg-btn--block za-btn--gold" onClick={send}>
          <Send size={16} aria-hidden="true" /> Build My South Africa Journey
        </button>
        <div className="za-builder__alt">
          <a href={SA_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--glass">
            <MessageCircle size={16} aria-hidden="true" /> WhatsApp Karvaahh<span className="pkg-sr"> (opens WhatsApp)</span>
          </a>
          <a href={contact.nepalPhoneHref} className="pkg-btn asia-btn--glass"><Phone size={16} aria-hidden="true" /> Call Karvaahh</a>
        </div>
        <p className="za-builder__fine">
          Opens WhatsApp with your answers. Nothing is stored on this website. Call <a href={contact.nepalPhoneHref}>{contact.nepalPhone}</a> (Nepal) or{" "}
          <a href={contact.indiaPhoneHref}>{contact.indiaPhone}</a> (India).
        </p>
      </aside>
    </div>
  );
}

"use client";

import { useMemo, useSyncExternalStore } from "react";
import type { PackingGroup } from "./data/types";
import "./PackingChecklist.css";

/* ---------------------------------------------------------------------------
   Tiny persisted store: localStorage when available, in-memory otherwise.
   useSyncExternalStore keeps SSR output identical (empty list) and syncs
   across tabs via the "storage" event.
--------------------------------------------------------------------------- */
const STORAGE_KEY = "karvaahh:bada-char-dham:packing:v1";
const listeners = new Set<() => void>();
let memory = "{}";

function read(): string {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? "{}";
  } catch {
    return memory;
  }
}
function write(next: Record<string, boolean>) {
  memory = JSON.stringify(next);
  try {
    window.localStorage.setItem(STORAGE_KEY, memory);
  } catch {
    /* private mode / quota — the in-memory copy still works this visit */
  }
  listeners.forEach((l) => l());
}
function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}
function parse(raw: string): Record<string, boolean> {
  try {
    const v: unknown = JSON.parse(raw);
    return v && typeof v === "object" ? (v as Record<string, boolean>) : {};
  } catch {
    return {};
  }
}

interface PackingChecklistProps {
  heading: string;
  intro: string;
  groups: PackingGroup[];
}

/**
 * Interactive packing checklist. The full list is server-rendered HTML
 * (readable and indexable without JS); ticks persist on this device.
 */
export default function PackingChecklist({ heading, intro, groups }: PackingChecklistProps) {
  const raw = useSyncExternalStore(subscribe, read, () => "{}");
  const checked = useMemo(() => parse(raw), [raw]);
  const total = useMemo(() => groups.reduce((n, g) => n + g.items.length, 0), [groups]);
  const done = groups.reduce((n, g) => n + g.items.filter((i) => checked[`${g.id}:${i}`]).length, 0);

  const toggle = (key: string) => write({ ...checked, [key]: !checked[key] });

  return (
    <section id="packing" className="bcd-section bcd-section--paper" aria-labelledby="bcd-pack-title">
      <div className="bcd-container">
        <div className="bcd-pack__head">
          <header className="bcd-heading">
            <h2 id="bcd-pack-title" className="bcd-heading__title">
              {heading}
            </h2>
            <p className="bcd-heading__intro">{intro}</p>
          </header>

          <div className="bcd-pack__progress">
            <p aria-live="polite">
              <strong>{done}</strong> of {total} packed
            </p>
            <div
              className="bcd-pack__bar"
              role="progressbar"
              aria-label="Packing progress"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={done}
            >
              <span style={{ width: `${total ? (done / total) * 100 : 0}%` }} />
            </div>
            <button type="button" className="bcd-pack__reset" onClick={() => write({})} disabled={done === 0}>
              Clear list
            </button>
          </div>
        </div>

        <div className="bcd-pack__grid">
          {groups.map((g) => (
            <fieldset key={g.id} className="bcd-pack__group">
              <legend className="bcd-pack__legend">{g.title}</legend>
              <ul>
                {g.items.map((item) => {
                  const key = `${g.id}:${item}`;
                  const id = `bcd-pack-${key.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
                  return (
                    <li key={key}>
                      <input id={id} type="checkbox" checked={Boolean(checked[key])} onChange={() => toggle(key)} />
                      <label htmlFor={id}>{item}</label>
                    </li>
                  );
                })}
              </ul>
            </fieldset>
          ))}
        </div>
      </div>
    </section>
  );
}

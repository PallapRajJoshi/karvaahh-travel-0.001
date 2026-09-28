"use client";

import { useEffect, useState } from "react";
import type { ListGroup } from "../data/types";
import SectionHeading from "../shared/SectionHeading";

const STORAGE_KEY = "karvaahh:char-dham:packing:v1";

/** Tick-as-you-pack list. Progress is kept in this browser only. */
export default function PackingChecklist({ groups }: { groups: ListGroup[] }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  const done = Object.values(checked).filter(Boolean).length;

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate from browser storage after mount
      if (saved) setChecked(JSON.parse(saved) as Record<string, boolean>);
    } catch {
      /* storage unavailable — list still works for the session */
    }
  }, []);

  const toggle = (key: string) => {
    setChecked((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const reset = () => {
    setChecked({});
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  return (
    <section className="cd-section cd-packing" aria-labelledby="packing-title" data-chapter-group="prepare">
      <div className="cd-container">
        <SectionHeading
          id="packing-title"
          title="What to Pack for Char Dham Yatra"
          intro={<p>Layers matter more than bulk: it can be warm in the valleys and freezing at the shrines on the same day. Tick items off as you pack — your list is saved on this device.</p>}
        />
        <div className="cd-packing__bar">
          <div
            className="cd-packing__progress"
            role="progressbar"
            aria-label="Packing progress"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={done}
          >
            <span style={{ transform: `scaleX(${total ? done / total : 0})` }} />
          </div>
          <p className="cd-packing__count" aria-live="polite">
            {done} of {total} packed
          </p>
          <button type="button" className="cd-packing__reset" onClick={reset} disabled={done === 0}>
            Clear list
          </button>
        </div>
        <div className="cd-packing__grid">
          {groups.map((g) => (
            <fieldset key={g.id} className="cd-packing__group">
              <legend>{g.title}</legend>
              <ul>
                {g.items.map((item) => {
                  const key = `${g.id}:${item}`;
                  const id = `pack-${key.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
                  return (
                    <li key={key}>
                      <input id={id} type="checkbox" checked={!!checked[key]} onChange={() => toggle(key)} />
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

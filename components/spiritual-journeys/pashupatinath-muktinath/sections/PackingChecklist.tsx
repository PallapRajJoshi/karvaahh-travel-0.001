"use client";

import { useId, useState } from "react";
import type { ChecklistGroup } from "../data/types";
import { Icon } from "../ui/Icon";
import "./prepare.css";

interface PackingChecklistProps {
  heading: string;
  intro: string;
  groups: ChecklistGroup[];
}

export function PackingChecklist({ heading, intro, groups }: PackingChecklistProps) {
  const uid = useId();
  const [packed, setPacked] = useState<Set<string>>(() => new Set());
  const total = groups.reduce((n, g) => n + g.items.length, 0);

  const toggle = (key: string) =>
    setPacked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const pct = total ? Math.round((packed.size / total) * 100) : 0;

  return (
    <section className="pmy-section pmy-section--tight pmy-pack" aria-labelledby={`${uid}-title`}>
      <div className="pmy-container">
        <div className="pmy-pack__head">
          <div>
            <h2 id={`${uid}-title`} className="pmy-heading__title pmy-heading__title--h2">{heading}</h2>
            <p className="pmy-pack__intro">{intro}</p>
          </div>
          <div className="pmy-pack__progress">
            <p aria-live="polite">
              <strong>{packed.size}</strong> of {total} packed
            </p>
            <div className="pmy-pack__bar" aria-hidden="true">
              <span style={{ width: `${pct}%` }} />
            </div>
            {packed.size > 0 ? (
              <button type="button" className="pmy-pack__reset" onClick={() => setPacked(new Set())}>
                Clear list
              </button>
            ) : null}
          </div>
        </div>

        <div className="pmy-pack__groups">
          {groups.map((g) => (
            <fieldset key={g.id} className="pmy-pack__group">
              <legend>
                <Icon name={g.icon} size={20} />
                {g.title}
              </legend>
              <ul>
                {g.items.map((item) => {
                  const key = `${g.id}:${item}`;
                  const id = `${uid}-${g.id}-${item.replace(/\W+/g, "-").toLowerCase()}`;
                  const checked = packed.has(key);
                  return (
                    <li key={key}>
                      <input
                        id={id}
                        type="checkbox"
                        className="pmy-pack__input"
                        checked={checked}
                        onChange={() => toggle(key)}
                      />
                      <label htmlFor={id} className="pmy-pack__label">
                        <span className="pmy-pack__box" aria-hidden="true">
                          <Icon name="check" size={14} />
                        </span>
                        {item}
                      </label>
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

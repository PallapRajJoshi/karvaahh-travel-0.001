"use client";

import { useState } from "react";
import { CUSTOMIZE, LINKS } from "../data/content";
import { Icon } from "../shared/Icon";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { dispatchPrefill } from "../shared/prefill";
import "./CustomizationSection.css";

export function CustomizationSection() {
  const [picked, setPicked] = useState<Record<string, string[]>>({});

  const toggle = (id: string, option: string, multi: boolean) => {
    setPicked((prev) => {
      const current = prev[id] ?? [];
      const has = current.includes(option);
      const next = multi ? (has ? current.filter((o) => o !== option) : [...current, option]) : has ? [] : [option];
      return { ...prev, [id]: next };
    });
  };

  const total = Object.values(picked).reduce((n, list) => n + list.length, 0);

  const buildSummary = () =>
    CUSTOMIZE.cards
      .filter((c) => (picked[c.id] ?? []).length > 0)
      .map((c) => `${c.label}: ${(picked[c.id] ?? []).join(", ")}`)
      .join("\n");

  return (
    <section id="customize" className="et-section et-section--white" aria-labelledby="et-custom-title">
      <div className="et-container">
        <SectionHeading eyebrow={CUSTOMIZE.eyebrow} title={CUSTOMIZE.title} lead={CUSTOMIZE.lead} id="et-custom-title" />

        <div className="et-custom__grid">
          {CUSTOMIZE.cards.map((card, i) => (
            <Reveal as="fieldset" key={card.id} index={i % 4} className="et-custom__card">
              <legend className="et-custom__legend">
                <Icon name={card.icon} size={20} />
                <span>{card.label}</span>
                {card.multi ? <small>Select any</small> : null}
              </legend>
              <div className="et-custom__options">
                {card.options.map((option) => {
                  const on = (picked[card.id] ?? []).includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      className={`et-custom__option ${on ? "is-on" : ""}`}
                      aria-pressed={on}
                      onClick={() => toggle(card.id, option, card.multi)}
                    >
                      {on ? <Icon name="check" size={14} /> : null}
                      {option}
                    </button>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="et-custom__bar">
          <p className="et-custom__count" aria-live="polite">
            {total === 0 ? "Choose any options above — or skip straight to your proposal request." : `${total} preference${total === 1 ? "" : "s"} selected`}
          </p>
          <a href={LINKS.inquiry} className="et-btn et-btn--primary" onClick={() => dispatchPrefill(buildSummary())}>
            <span>{CUSTOMIZE.cta}</span>
            <Icon name="arrow" size={18} />
          </a>
        </div>
        <p className="et-note">Selections are preferences to discuss — availability and requirements should be confirmed before travel.</p>
      </div>
    </section>
  );
}

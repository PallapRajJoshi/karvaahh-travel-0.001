"use client";

import SectionHeading from "../shared/SectionHeading";
import { ESSENTIALS_CHECKLIST, PERMIT_NOTES, HIGH_ALTITUDE_SAFETY } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./TravelEssentials.css";

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" focusable="false">
      <path
        d="M4 10.5l3.8 3.8L16 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TravelEssentials() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="phoksundo-essentials" ref={ref}>
      <div className="phoksundo-page__container">
        <SectionHeading eyebrow="Before You Go" title="Travel Essentials, Permits & Safety" />

        <div className="phoksundo-essentials__grid">
          <div className="phoksundo-essentials__panel" data-reveal>
            <h3 className="phoksundo-essentials__panel-title">Packing Checklist</h3>
            <ul className="phoksundo-essentials__checklist">
              {ESSENTIALS_CHECKLIST.map((item) => (
                <li key={item.id}>
                  <CheckIcon />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="phoksundo-essentials__panel" data-reveal>
            <h3 className="phoksundo-essentials__panel-title">Permits & Regulations</h3>
            <ul className="phoksundo-essentials__notes">
              {PERMIT_NOTES.map((note) => (
                <li key={note.id}>{note.text}</li>
              ))}
            </ul>

            <h3 className="phoksundo-essentials__panel-title phoksundo-essentials__panel-title--spaced">
              High-Altitude Safety
            </h3>
            <p className="phoksundo-essentials__safety">{HIGH_ALTITUDE_SAFETY}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

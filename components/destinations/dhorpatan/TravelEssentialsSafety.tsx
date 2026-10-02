import { travelEssentials, reserveRegulations, huntingDisclaimer } from "@/data/dhorpatan";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import "./TravelEssentialsSafety.css";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TravelEssentialsSafety() {
  return (
    <section className="essentials-section" id="essentials">
      <div className="dhorpatan-page__container">
        <SectionHeading eyebrow="Prepare" heading="Travel Essentials & Safety" />

        <div className="essentials-section__grid">
          <Reveal className="essentials-panel">
            <h3 className="essentials-panel__title">Packing Checklist</h3>
            <ul className="essentials-panel__list">
              {travelEssentials.map((item) => (
                <li key={item}>
                  <span className="essentials-panel__icon" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="essentials-panel essentials-panel--regulations">
            <h3 className="essentials-panel__title">Reserve Regulations</h3>
            <ul className="essentials-panel__list">
              {reserveRegulations.map((item) => (
                <li key={item}>
                  <span className="essentials-panel__icon" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="essentials-panel__disclaimer">{huntingDisclaimer}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

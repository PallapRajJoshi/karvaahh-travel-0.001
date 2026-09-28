import { headings } from "../config/page.config";
import { adventures } from "../data/adventures";
import { SectionHeading } from "../ui/SectionHeading";
import { AdventureCard } from "../ui/cards/AdventureCard";
import { Icon } from "../ui/Icon";
import "./cards.css";

export function AdventureExperiences({ anchor }: { anchor: string }) {
  const h = headings.adventures;
  return (
    <section id={anchor} className="nsa-section nsa-section--dark nsa-adventures" aria-labelledby="nsa-adventures-title">
      <div className="nsa-adventures__ridge" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" focusable="false">
          <path d="M0 120V70L120 32L230 62L380 4L510 56L600 32L760 82L900 20L1020 64L1170 28L1290 58L1440 18V120Z" />
        </svg>
      </div>
      <div className="nsa-container">
        <SectionHeading id="nsa-adventures-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} tone="inverse" />
        <div className="nsa-grid nsa-grid--4 nsa-grid--adventure">
          {adventures.map((a, i) => (
            <AdventureCard key={a.id} item={a} index={i} />
          ))}
        </div>
        <p className="nsa-note nsa-note--inverse" data-reveal="">
          <Icon name="shield" size={18} />
          <span>{h.note}</span>
        </p>
      </div>
    </section>
  );
}

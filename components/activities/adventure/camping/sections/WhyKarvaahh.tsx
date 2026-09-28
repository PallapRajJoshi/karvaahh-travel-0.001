import SectionHeading from "../shared/SectionHeading";
import { iconByName } from "../shared/Icons";
import { whyKarvaahh } from "@/data/campingContent";
import "./WhyKarvaahh.css";

export default function WhyKarvaahh() {
  return (
    <section id="why" className="cmp-section cmp-section--forest cmp-why" aria-labelledby="cmp-why-title">
      <div className="cmp-container cmp-why__grid">
        <SectionHeading
          id="cmp-why-title"
          tone="light"
          kicker="Why camp with Karvaahh"
          title="Your Nepal. Your Camp. Your Way."
          lead="Karvaahh Tours & Travels plans camping around the traveller — where you want to go, how long you have, and how far you want to push."
        />
        <ul className="cmp-why__list">
          {whyKarvaahh.map((w, i) => {
            const Icon = iconByName[w.icon];
            return (
              <li key={w.title} className="cmp-why__item" data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
                <span className="cmp-why__icon"><Icon size={22} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

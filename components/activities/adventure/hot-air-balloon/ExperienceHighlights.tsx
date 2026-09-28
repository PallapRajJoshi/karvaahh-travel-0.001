import SectionHeading from "./SectionHeading";
import { EXPERIENCES } from "./data/hotAirBalloonData";
import "./ExperienceHighlights.css";

const ICONS: Record<(typeof EXPERIENCES.items)[number]["icon"], React.ReactNode> = {
  sun: <><circle cx="12" cy="15" r="4" /><path d="M2 19h20M12 5v3M4.9 8.9l2.1 2.1M19.1 8.9 17 11" /></>,
  wind: <path d="M3 9h11a3 3 0 1 0-3-3M3 15h15a3 3 0 1 1-3 3M3 12h7" />,
  peak: <path d="m2 20 7-12 4 6 3-4 6 10H2Z" />,
  lake: <><path d="m3 13 5-6 4 4 3-3 6 5" /><path d="M3 17c2 1 4 1 6 0s4-1 6 0 4 1 6 0" /></>,
};

export default function ExperienceHighlights() {
  return (
    <section className="hab-section hab-exp" aria-labelledby="hab-exp-title">
      <div className="hab-container">
        <SectionHeading id="hab-exp-title" title={EXPERIENCES.heading} />
        <ul className="hab-exp__grid">
          {EXPERIENCES.items.map((item) => (
            <li key={item.title} className="hab-exp__item">
              <svg className="hab-exp__icon" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {ICONS[item.icon]}
              </svg>
              <h3 className="hab-exp__title">{item.title}</h3>
              <p className="hab-exp__text">{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="hab-exp__note">{EXPERIENCES.note}</p>
      </div>
    </section>
  );
}

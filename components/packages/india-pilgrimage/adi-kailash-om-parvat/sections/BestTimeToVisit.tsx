import { bestTimeNote, headings } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import { seasons } from "@/data/india-pilgrimage/adi-kailash-om-parvat/seasons";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import "./best-time.css";

/** Section 11 — Best time to visit. */
export function BestTimeToVisit() {
  return (
    <section id="best-time" className="akop-section akop-season" aria-labelledby="season-title">
      <div className="akop-container">
        <SectionHeading id="season-title" {...headings.bestTime} />
        <ul className="akop-season__grid" role="list">
          {seasons.map((s, i) => (
            <Reveal as="li" key={s.id} index={i} className={`akop-season__card akop-season__card--${s.outlook}`}>
              <div className="akop-season__top">
                <span className="akop-season__icon">
                  <Icon name={s.icon} size={24} />
                </span>
                <span className={`akop-season__outlook akop-season__outlook--${s.outlook}`}>{s.outlookLabel}</span>
              </div>
              <h3 className="akop-season__name">{s.name}</h3>
              <p className="akop-season__months">{s.months}</p>
              <p className="akop-season__text">{s.description}</p>
              <ul className="akop-season__points">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        <Reveal as="aside" className="akop-callout akop-callout--warning" variant="fade">
          <Icon name="alert" size={24} />
          <div>
            <p className="akop-callout__title">{bestTimeNote.title}</p>
            <p className="akop-callout__text">{bestTimeNote.text}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

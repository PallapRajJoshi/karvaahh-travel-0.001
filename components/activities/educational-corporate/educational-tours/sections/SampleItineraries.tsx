import { FIVE_DAY, FORMATS, FORMATS_SECTION } from "../data/content";
import { Icon } from "../shared/Icon";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import "./SampleItineraries.css";

export function SampleItineraries() {
  return (
    <section id="formats" className="et-section et-section--white" aria-labelledby="et-formats-title">
      <div className="et-container">
        <SectionHeading eyebrow={FORMATS_SECTION.eyebrow} title={FORMATS_SECTION.title} lead={FORMATS_SECTION.lead} id="et-formats-title" />

        <ul className="et-fmt__grid">
          {FORMATS.map((f, i) => (
            <Reveal as="li" key={f.title} index={i} className="et-fmt__card">
              <span className="et-fmt__tag">Sample concept</span>
              <span className="et-icon-badge">
                <Icon name={f.icon} size={26} />
              </span>
              <h3 className="et-fmt__title">{f.title}</h3>
              {f.route ? (
                <p className="et-fmt__route" aria-label={`Example route: ${f.route.join(", ")}`}>
                  {f.route.map((stop, k) => (
                    <span key={stop}>
                      {stop}
                      {k < f.route!.length - 1 ? <span className="et-fmt__arrow" aria-hidden="true"> → </span> : null}
                    </span>
                  ))}
                </p>
              ) : null}
              <p className="et-fmt__text">{f.text}</p>
              <p className="et-fmt__focus">
                <span>Focus</span> {f.focus}
              </p>
            </Reveal>
          ))}
        </ul>

        {/* 5-day timeline */}
        <div className="et-five" id="sample-itinerary">
          <SectionHeading eyebrow={FIVE_DAY.eyebrow} title={FIVE_DAY.title} id="et-five-title" />
          <Reveal>
            <p className="et-five__label">{FIVE_DAY.label}</p>
          </Reveal>
          <ol className="et-five__list">
            {FIVE_DAY.days.map((d, i) => (
              <Reveal as="li" key={d.day} index={0} className="et-five__item">
                <span className="et-five__dot" aria-hidden="true">{i + 1}</span>
                <div className="et-five__card">
                  <p className="et-five__day">{d.day}</p>
                  <h3 className="et-five__title">{d.title}</h3>
                  <ul className="et-five__items">
                    {d.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
          <p className="et-note et-five__disclaimer">{FIVE_DAY.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}

import Media from "./Media";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { accommodation } from "@/data/adventure/everest-three-passes-trek/content";
import "./Accommodation.css";

export default function Accommodation() {
  return (
    <section className="etp-section etp-section--white etp-stay" aria-labelledby="etp-stay-title">
      <div className="etp-wrap etp-stay__grid">
        <div className="etp-stay__media-wrap" data-reveal="fade">
          <Media image={accommodation.image} sizes="(max-width: 900px) 100vw, 50vw" className="etp-stay__media" />
        </div>
        <div>
          <SectionHeading
            id="etp-stay-title"
            eyebrow="Accommodation & hospitality"
            title={accommodation.heading}
            intro={accommodation.intro}
          />
          <ul className="etp-stay__list">
            {accommodation.items.map((it, i) => (
              <li key={it.title} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <Icon name="house" className="etp-stay__icon" />
                <div>
                  <h3 className="etp-stay__title">{it.title}</h3>
                  <p className="etp-stay__text">{it.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="etp-stay__note" data-reveal>
            {accommodation.note}
          </p>
        </div>
      </div>
    </section>
  );
}

import { accommodation } from "@/data/adventure/langtang-valley-trek";
import LangtangImage from "./LangtangImage";
import LangtangIcon from "./LangtangIcon";
import "./LangtangAccommodation.css";

export default function LangtangAccommodation() {
  const [a, b] = accommodation.images;
  return (
    <section className="lt-section lt-section--tint lt-stay" id="accommodation" aria-labelledby="lt-stay-title">
      <div className="lt-container lt-stay__grid">
        <div className="lt-stay__copy">
          <header className="lt-heading" data-reveal>
            <p className="lt-heading__eyebrow">Tea House Life</p>
            <h2 className="lt-heading__title" id="lt-stay-title">{accommodation.heading}</h2>
            <p className="lt-heading__intro">{accommodation.intro}</p>
          </header>
          <dl className="lt-stay__list">
            {accommodation.items.map((it, i) => (
              <div key={it.title} data-reveal style={{ ["--i" as string]: i }}>
                <dt>{it.title}</dt>
                <dd>{it.text}</dd>
              </div>
            ))}
          </dl>
          <p className="lt-note" data-reveal><LangtangIcon name="info" size={18} />{accommodation.note}</p>
        </div>
        <div className="lt-stay__media" data-reveal style={{ ["--i" as string]: 1 }}>
          <div className="lt-stay__img lt-stay__img--a"><LangtangImage id={a} sizes="(max-width: 900px) 60vw, 28vw" className="lt-zoom" /></div>
          <div className="lt-stay__img lt-stay__img--b"><LangtangImage id={b} sizes="(max-width: 900px) 60vw, 28vw" className="lt-zoom" /></div>
        </div>
      </div>
    </section>
  );
}

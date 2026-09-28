import { highlights } from "@/data/adventure/langtang-valley-trek";
import SectionHeading from "./SectionHeading";
import LangtangImage from "./LangtangImage";
import "./LangtangHighlights.css";

export default function LangtangHighlights() {
  return (
    <section className="lt-section lt-section--tint lt-highlights" id="highlights" aria-labelledby="lt-highlights-title">
      <div className="lt-container">
        <SectionHeading id="lt-highlights-title" eyebrow="Trek Highlights" title="Highlights of Langtang Valley Trek"
          intro="Eight reasons trekkers fall for this valley — from monastery mornings to glacier-ringed viewpoints." />
        <ul className="lt-highlights__grid" role="list">
          {highlights.map((h, i) => (
            <li key={h.title} className={`lt-hl ${i === 0 ? "lt-hl--feature" : ""}`} data-reveal style={{ ["--i" as string]: i % 4 }}>
              <div className="lt-hl__media">
                <LangtangImage id={h.image} sizes={i === 0 ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"} className="lt-zoom" />
              </div>
              <div className="lt-hl__body">
                {h.meta ? <span className="lt-hl__meta">{h.meta}</span> : null}
                <h3 className="lt-hl__title">{h.title}</h3>
                <p className="lt-hl__text">{h.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

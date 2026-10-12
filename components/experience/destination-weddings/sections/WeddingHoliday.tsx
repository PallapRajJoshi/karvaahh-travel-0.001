import { ANCHORS } from "../data/config";
import { honeymoon, weddingHoliday } from "../data/guests";
import Arrow from "../shared/Arrow";
import ChapterMark from "../shared/ChapterMark";
import WeddingImage from "../shared/WeddingImage";
import { cssVars } from "../shared/cssVars";
import "./WeddingHoliday.css";

export default function WeddingHoliday() {
  return (
    <>
      <section className="dw-section dw-holiday" aria-labelledby="dw-holiday-title">
        <div className="dw-container">
          <ChapterMark index={5} />
          <div className="dw-holiday__head" data-reveal="">
            <p className="dw-eyebrow">Wedding + holiday</p>
            <h2 id="dw-holiday-title" className="dw-h2">
              Don&rsquo;t just attend a wedding. <em>Experience the destination.</em>
            </h2>
            <p className="dw-lede">
              Add a morning of sightseeing between functions, or a few extra days before everyone flies home.
              For many guests, it is their first time in Nepal or the Himalaya.
            </p>
          </div>

          <ul className="dw-holiday__grid">
            {weddingHoliday.map((h, i) => (
              <li key={h.name} className="dw-holiday__item" data-reveal="" style={cssVars({ "--dw-i": i % 3 })}>
                <span className="dw-holiday__n">0{i + 1}</span>
                <h3 className="dw-holiday__name">{h.name}</h3>
                <p className="dw-holiday__line">{h.line}</p>
                <p className="dw-holiday__text">{h.text}</p>
              </li>
            ))}
          </ul>

          <div className="dw-holiday__cta">
            <a href={`#${ANCHORS.plan}`} className="dw-btn">
              Build My Wedding + Holiday <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section id={ANCHORS.honeymoon} className="dw-honeymoon dw-dark" aria-labelledby="dw-honeymoon-title">
        <div className="dw-honeymoon__media">
          <WeddingImage
            image={{
              file: "honeymoon.jpg",
              alt: "Couple on a quiet balcony at dawn overlooking a Himalayan valley",
            }}
            sizes="(min-width: 960px) 50vw, 100vw"
          />
        </div>
        <div className="dw-honeymoon__body">
          <p className="dw-eyebrow">Honeymoon extensions</p>
          <h2 id="dw-honeymoon-title" className="dw-h2 dw-honeymoon__title" data-reveal="">
            Then, <em>just the two of you</em>
          </h2>
          <p className="dw-lede">
            The guests fly home; you don&rsquo;t. Continue straight into a honeymoon with transfers already
            arranged — no second round of planning.
          </p>
          <dl className="dw-honeymoon__regions">
            {honeymoon.map((r) => (
              <div key={r.region} data-reveal="fade">
                <dt>{r.region}</dt>
                <dd>{r.places.join(" • ")}</dd>
              </div>
            ))}
          </dl>
          <a href={`#${ANCHORS.plan}`} className="dw-btn dw-btn--light">
            Plan My Wedding + Honeymoon <Arrow />
          </a>
        </div>
      </section>
    </>
  );
}

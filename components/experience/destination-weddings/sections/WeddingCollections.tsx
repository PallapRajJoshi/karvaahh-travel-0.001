import { ANCHORS } from "../data/config";
import { bespoke, collections, priceFactors } from "../data/proposal";
import Arrow from "../shared/Arrow";
import ChapterMark from "../shared/ChapterMark";
import SectionHeading from "../shared/SectionHeading";
import { cssVars } from "../shared/cssVars";
import "./WeddingCollections.css";

export default function WeddingCollections() {
  return (
    <section id={ANCHORS.collections} className="dw-section dw-collections" aria-labelledby="dw-collections-title">
      <div className="dw-container">
        <ChapterMark index={6} />
        <SectionHeading
          id="dw-collections-title"
          eyebrow="Wedding collections"
          title={
            <>
              Begin with a scale. <em>We shape the rest.</em>
            </>
          }
          intro="No two destination weddings cost the same, so we don't publish universal package prices. Choose the collection closest to your celebration and we'll prepare a custom proposal."
        />

        <ul className="dw-collections__grid">
          {collections.map((c, i) => (
            <li
              key={c.id}
              className={`dw-coll${c.emphasis ? " dw-coll--emphasis" : ""}`}
              data-reveal=""
              style={cssVars({ "--dw-i": i })}
            >
              <h3 className="dw-coll__name">{c.name}</h3>
              <p className="dw-coll__guests">{c.guests}</p>
              <p className="dw-coll__desc">{c.description}</p>
              <p className="dw-coll__suits">
                <span>Often suits</span>
                {c.suits.join(" · ")}
              </p>
              <a href={`#${ANCHORS.plan}`} className="dw-link dw-coll__link">
                Request custom proposal <Arrow />
              </a>
            </li>
          ))}
          <li className="dw-coll dw-coll--bespoke" data-reveal="">
            <div>
              <h3 className="dw-coll__name">{bespoke.name}</h3>
              <p className="dw-coll__desc">{bespoke.description}</p>
            </div>
            <a href={`#${ANCHORS.plan}`} className="dw-btn dw-btn--light">
              Request Custom Proposal <Arrow />
            </a>
          </li>
        </ul>

        <div className="dw-price">
          <div className="dw-price__lead" data-reveal="">
            <h3 className="dw-h3 dw-price__title">What determines the price?</h3>
            <p className="dw-lede">
              Fifteen things shape every quotation. Knowing them early helps you decide where to spend and where to simplify.
            </p>
          </div>
          <ol className="dw-price__list">
            {priceFactors.map((f, i) => (
              <li key={f}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {f}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

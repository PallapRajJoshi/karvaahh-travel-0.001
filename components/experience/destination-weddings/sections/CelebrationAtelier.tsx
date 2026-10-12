import { atelier } from "../data/celebration";
import SectionHeading from "../shared/SectionHeading";
import WeddingImage from "../shared/WeddingImage";
import "./CelebrationAtelier.css";

/**
 * Culinary, décor and entertainment presented as one "atelier" — three
 * editorial rows under a single H2 instead of three thin sections.
 */
export default function CelebrationAtelier() {
  return (
    <section className="dw-section dw-atelier" aria-labelledby="dw-atelier-title">
      <div className="dw-container">
        <SectionHeading
          id="dw-atelier-title"
          eyebrow="The celebration atelier"
          title={
            <>
              The feast, the canvas <em>and the soundtrack</em>
            </>
          }
          intro="The three things guests remember after the vows — what they ate, what they saw and what they danced to."
          align="center"
        />

        <div className="dw-atelier__rows">
          {atelier.map((row, i) => (
            <article
              key={row.id}
              className={`dw-atelier__row${i % 2 ? " dw-atelier__row--flip" : ""}`}
              aria-labelledby={`dw-atelier-${row.id}`}
            >
              <div className="dw-atelier__media" data-reveal="image">
                <WeddingImage image={row.image} sizes="(min-width: 960px) 45vw, 100vw" />
              </div>
              <div className="dw-atelier__body" data-reveal="">
                <p className="dw-atelier__kicker">
                  <span>0{i + 1}</span> {row.kicker}
                </p>
                <h3 id={`dw-atelier-${row.id}`} className="dw-h3 dw-atelier__heading">
                  {row.heading}
                </h3>
                <p className="dw-atelier__intro">{row.intro}</p>
                <dl className="dw-atelier__groups">
                  {row.groups.map((g) => (
                    <div key={g.id} className="dw-atelier__group">
                      <dt>{g.title}</dt>
                      <dd>
                        <ul className="dw-dotlist">
                          {g.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

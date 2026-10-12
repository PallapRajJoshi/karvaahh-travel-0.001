import { mandapElements, mandaps } from "../data/celebration";
import SectionHeading from "../shared/SectionHeading";
import WeddingImage from "../shared/WeddingImage";
import { cssVars } from "../shared/cssVars";
import "./MandapExperience.css";

export default function MandapExperience() {
  return (
    <section className="dw-section dw-mandap dw-paper" aria-labelledby="dw-mandap-title">
      <div className="dw-container">
        <SectionHeading
          id="dw-mandap-title"
          eyebrow="The mandap"
          title={
            <>
              The place where two stories <em>become one</em>
            </>
          }
          intro="Six starting points for the most photographed structure of the wedding. Every design is adapted to the venue, the view and the rituals it must hold."
        />

        <div className="dw-mandap__brief" data-reveal="fade">
          <p className="dw-mandap__brief-label">Every mandap brief covers</p>
          <ul className="dw-dotlist">
            {mandapElements.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>

        <ul className="dw-mandap__board">
          {mandaps.map((m, i) => (
            <li key={m.id} className={`dw-mandap__item dw-mandap__item--${i}`} data-reveal="" style={cssVars({ "--dw-i": i % 3 })}>
              <div className="dw-mandap__media">
                {m.image && <WeddingImage image={m.image} sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw" />}
              </div>
              <h3 className="dw-mandap__title">{m.title} mandap</h3>
              <p className="dw-mandap__desc">{m.description}</p>
              <ul className="dw-mandap__elements">
                {m.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

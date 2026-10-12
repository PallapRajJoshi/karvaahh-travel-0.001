import { coupleCare } from "../data/celebration";
import WeddingImage from "../shared/WeddingImage";
import "./CoupleExperience.css";

export default function CoupleExperience() {
  const sides = [coupleCare.bride, coupleCare.groom];

  return (
    <section className="dw-couple" aria-labelledby="dw-couple-title">
      <div className="dw-couple__statement dw-maroon">
        <div className="dw-container">
          <p className="dw-eyebrow">Bride & groom experience</p>
          <h2 id="dw-couple-title" className="dw-h2" data-reveal="">
            You should be celebrating — <em>not managing logistics.</em>
          </h2>
        </div>
      </div>

      <div className="dw-couple__split">
        {sides.map((side) => (
          <article key={side.title} className="dw-couple__side" aria-label={side.title}>
            <div className="dw-couple__media">
              <WeddingImage image={side.image} sizes="(min-width: 900px) 50vw, 100vw" compact />
            </div>
            <div className="dw-couple__body" data-reveal="">
              <h3 className="dw-couple__title">{side.title}</h3>
              <ul className="dw-dotlist">
                {side.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

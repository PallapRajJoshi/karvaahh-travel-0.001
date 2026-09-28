import { introduction } from "../data/pashupatinathMuktinathData";
import "./opening.css";

export function Introduction() {
  return (
    <section id="intro" className="pmy-section pmy-intro" aria-labelledby="pmy-intro-title">
      <div className="pmy-container pmy-intro__grid">
        <div className="pmy-intro__head" data-reveal>
          <h2 id="pmy-intro-title" className="pmy-heading__title pmy-heading__title--h2">
            {introduction.heading}
          </h2>
        </div>
        <div className="pmy-intro__body" data-reveal>
          <p className="pmy-lead">{introduction.lead}</p>
          <div className="pmy-prose">
            {introduction.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

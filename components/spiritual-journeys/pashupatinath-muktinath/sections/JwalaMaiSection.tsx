import { jwalaMai } from "../data/pashupatinathMuktinathData";
import { Icon } from "../ui/Icon";
import { JourneyImage } from "../ui/JourneyImage";
import "./muktinath.css";

export function JwalaMaiSection() {
  return (
    <section className="pmy-jwala" aria-labelledby="pmy-jwala-title">
      <div className="pmy-container">
        <div className="pmy-jwala__card" data-reveal>
          <div className="pmy-jwala__media">
            <JourneyImage image={jwalaMai.image} sizes="(max-width: 900px) 100vw, 40vw" />
          </div>
          <div className="pmy-jwala__text">
            <span className="pmy-jwala__flame" aria-hidden="true"><Icon name="flame" size={28} /></span>
            <h2 id="pmy-jwala-title" className="pmy-heading__title pmy-heading__title--h2">{jwalaMai.heading}</h2>
            {jwalaMai.paragraphs.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

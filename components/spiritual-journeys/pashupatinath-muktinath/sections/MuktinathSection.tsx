import { muktinath } from "../data/pashupatinathMuktinathData";
import { JourneyImage } from "../ui/JourneyImage";
import "./muktinath.css";

export function MuktinathSection() {
  return (
    <section id="muktinath" className="pmy-mukti" aria-labelledby="pmy-mukti-title">
      <div className="pmy-mukti__band">
        <div className="pmy-mukti__band-media">
          <JourneyImage image={muktinath.image} sizes="100vw" />
        </div>
        <div className="pmy-container pmy-mukti__band-content" data-reveal>
          <p className="pmy-heading__kicker">Mustang, approximately 3,800 m</p>
          <h2 id="pmy-mukti-title" className="pmy-mukti__title">{muktinath.heading}</h2>
        </div>
      </div>

      <div className="pmy-container pmy-section pmy-mukti__body">
        <p className="pmy-lead" data-reveal>{muktinath.lead}</p>
        <div className="pmy-prose" data-reveal>
          {muktinath.paragraphs.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}

import { pashupatinath } from "../data/pashupatinathMuktinathData";
import { JourneyImage } from "../ui/JourneyImage";
import { SectionHeading } from "../ui/SectionHeading";
import "./pashupatinath.css";

export function PashupatinathSection() {
  return (
    <section id="pashupatinath" className="pmy-section pmy-pashu" aria-labelledby="pmy-pashu-title">
      <div className="pmy-container">
        <div className="pmy-pashu__grid">
          <div className="pmy-pashu__media" data-reveal>
            <div className="pmy-pashu__frame pmy-pashu__frame--main">
              <JourneyImage image={pashupatinath.image} sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className="pmy-pashu__frame pmy-pashu__frame--inset">
              <JourneyImage image={pashupatinath.secondaryImage} sizes="(max-width: 900px) 50vw, 22vw" />
            </div>
          </div>

          <div className="pmy-pashu__text">
            <SectionHeading id="pmy-pashu-title" kicker="Kathmandu" title={pashupatinath.heading} />
            <div data-reveal>
              <p className="pmy-lead">{pashupatinath.lead}</p>
              <div className="pmy-prose pmy-pashu__prose">
                {pashupatinath.paragraphs.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
              </div>
              <p className="pmy-note">{pashupatinath.accessNote}</p>
            </div>
          </div>
        </div>

        <div className="pmy-darshan" aria-labelledby="pmy-darshan-title">
          <SectionHeading
            id="pmy-darshan-title"
            level={3}
            title={pashupatinath.darshanHeading}
            intro={<p>{pashupatinath.darshanIntro}</p>}
          />
          <ol className="pmy-darshan__steps" data-reveal>
            {pashupatinath.darshan.map((step, i) => (
              <li key={step.title} className="pmy-darshan__step">
                <span className="pmy-darshan__num" aria-hidden="true">{i + 1}</span>
                <h4 className="pmy-darshan__title">{step.title}</h4>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="pmy-darshan__note">{pashupatinath.darshanNote}</p>
        </div>
      </div>
    </section>
  );
}

import Media from "./Media";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/adventure/everest-three-passes-trek/content";
import "./Experiences.css";

export default function Experiences() {
  return (
    <section className="etp-section etp-section--white etp-exp" aria-labelledby="etp-exp-title">
      <div className="etp-wrap">
        <SectionHeading
          id="etp-exp-title"
          eyebrow="On the trail"
          title="Experiences That Define the Everest Three Passes Trek"
          align="center"
        />
        <div className="etp-exp__list">
          {experiences.map((e, i) => (
            <article key={e.id} className={`etp-exp__row${i % 2 ? " etp-exp__row--flip" : ""}`} aria-labelledby={`etp-exp-${e.id}`}>
              <div className="etp-exp__media-wrap" data-reveal="fade">
                <Media image={e.image} sizes="(max-width: 860px) 100vw, 55vw" className="etp-exp__media" />
                <span className="etp-exp__count" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="etp-exp__text" data-reveal>
                <p className="etp-exp__kicker">{e.kicker}</p>
                <h3 className="etp-exp__title" id={`etp-exp-${e.id}`}>
                  {e.title}
                </h3>
                <p className="etp-exp__body">{e.body}</p>
                <ul className="etp-exp__points">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

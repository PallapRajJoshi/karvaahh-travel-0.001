import { experiences } from "@/data/adventure/langtang-valley-trek";
import SectionHeading from "./SectionHeading";
import LangtangImage from "./LangtangImage";
import LangtangTabs from "./LangtangTabs";
import LangtangIcon from "./LangtangIcon";
import "./LangtangExperiences.css";

export default function LangtangExperiences() {
  return (
    <section className="lt-section lt-experiences" id="experiences" aria-labelledby="lt-exp-title">
      <div className="lt-container">
        <SectionHeading id="lt-exp-title" eyebrow="On the Trail" title="Experiences That Make Langtang Special" />
        <div data-reveal>
          <LangtangTabs labels={experiences.map((e) => e.title)} ariaLabel="Langtang experiences">
            {experiences.map((e, i) => (
              <article className="lt-exp" key={e.title}>
                <div className="lt-exp__media">
                  <LangtangImage id={e.image} sizes="(max-width: 760px) 100vw, 60vw" />
                </div>
                <div className="lt-exp__body">
                  <span className="lt-exp__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="lt-exp__title">{e.title}</h3>
                  <p className="lt-exp__text">{e.text}</p>
                  <ul className="lt-exp__points">
                    {e.points.map((p) => (
                      <li key={p}><LangtangIcon name="check" size={16} />{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </LangtangTabs>
        </div>
      </div>
    </section>
  );
}

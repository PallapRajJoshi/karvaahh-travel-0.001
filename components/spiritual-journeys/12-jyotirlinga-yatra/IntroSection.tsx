import { introduction, whatIsJyotirlinga } from "./data/jyotirlingaData";
import SectionHeading from "./SectionHeading";
import "./IntroSection.css";

export default function IntroSection() {
  return (
    <>
      <section id="overview" className="jyl-section jyl-section--white jyl-intro" aria-labelledby="jyl-intro-title">
        <div className="jyl-container jyl-intro__grid">
          <div className="jyl-intro__head">
            <SectionHeading id="jyl-intro-title" title={introduction.heading} />
          </div>
          <div className="jyl-intro__body">
            {introduction.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p className="jyl-note">{introduction.traditionNote}</p>
          </div>
        </div>
      </section>

      <section className="jyl-section jyl-section--stone jyl-what" aria-labelledby="jyl-what-title">
        <div className="jyl-container jyl-what__grid">
          <div>
            <SectionHeading id="jyl-what-title" title={whatIsJyotirlinga.heading} />
            <div className="jyl-what__body">
              {whatIsJyotirlinga.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <dl className="jyl-what__terms">
            {whatIsJyotirlinga.points.map((point) => (
              <div key={point.title} className="jyl-what__term">
                <dt lang="sa-Latn">{point.title}</dt>
                <dd>{point.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

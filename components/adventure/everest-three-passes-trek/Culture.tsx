import Media from "./Media";
import SectionHeading from "./SectionHeading";
import { culture } from "@/data/adventure/everest-three-passes-trek/content";
import "./Culture.css";

export default function Culture() {
  return (
    <section className="etp-section etp-culture" id="culture" aria-labelledby="etp-culture-title">
      <div className="etp-wrap">
        <SectionHeading
          id="etp-culture-title"
          eyebrow="Sherpa culture & heritage"
          title="Discover the Cultural Heart of the Khumbu"
          intro="The Khumbu is home as well as a trekking route. Customs vary between villages and families, and a little curiosity and courtesy go a long way."
        />
        <ul className="etp-culture__grid">
          {culture.map((c, i) => (
            <li
              key={c.id}
              className={`etp-culture__item etp-culture__item--${i}${c.image ? "" : " etp-culture__item--text"}`}
              data-reveal
              style={{ "--i": i } as React.CSSProperties}
            >
              {c.image && <Media image={c.image} sizes="(max-width: 760px) 100vw, 40vw" className="etp-culture__media" />}
              <div className="etp-culture__body">
                <h3 className="etp-culture__title">{c.title}</h3>
                <p className="etp-culture__text">{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { culture } from "../data/experiences";
import SectionHeading from "../ui/SectionHeading";
import SmartImage from "../ui/SmartImage";
import "../styles/culture.css";

export default function SherpaCulture() {
  return (
    <section id="culture" className="ebc-section ebc-culture" aria-labelledby="ebc-culture-title">
      <div className="ebc-container">
        <div className="ebc-culture__head">
          <SectionHeading
            id="ebc-culture-title"
            eyebrow="Sherpa Culture & Himalayan Heritage"
            title="Discover the Soul of the Khumbu"
            subtitle="The Everest trail passes through a living homeland. Understanding its people, faith and customs is what turns a trek into a journey."
          />
        </div>
        <ul className="ebc-culture__grid">
          {culture.map((c, i) => (
            <li key={c.id} className={`ebc-ccard ebc-ccard--${i}`} data-reveal="" style={{ ["--i" as string]: i % 4 }}>
              <div className="ebc-img ebc-ccard__media">
                <SmartImage image={c.image} sizes={i === 0 ? "(max-width: 767px) 100vw, 50vw" : "(max-width: 767px) 100vw, 25vw"} />
              </div>
              <div className="ebc-ccard__body">
                <p className="ebc-ccard__label">{c.label}</p>
                <h3 className="ebc-ccard__title">{c.title}</h3>
                <p className="ebc-ccard__desc">{c.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

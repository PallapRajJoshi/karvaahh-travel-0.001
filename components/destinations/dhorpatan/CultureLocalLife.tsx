import { cultureContent } from "@/data/dhorpatan";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import "./CultureLocalLife.css";

export default function CultureLocalLife() {
  return (
    <section className="culture-section" id="culture">
      <div className="dhorpatan-page__container">
        <SectionHeading
          eyebrow="Living Heritage"
          heading="Culture & Local Mountain Life"
          subheading={cultureContent.intro}
        />

        <div className="culture-section__grid">
          {cultureContent.points.map((point, i) => (
            <Reveal key={point.title} delay={(i % 3) * 90} className="culture-point">
              <h3 className="culture-point__title">{point.title}</h3>
              <p className="culture-point__description">{point.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

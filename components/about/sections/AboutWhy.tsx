import { features, whyKarvaahh } from "@/lib/about/features";
import { AboutIcon } from "../shared/AboutIcon";
import { SectionHeading } from "../shared/SectionHeading";
import "./about-why.css";

export function AboutWhy() {
  return (
    <section className="ab-section ab-why" aria-labelledby="about-why-title">
      <div className="ab-container">
        <SectionHeading id="about-why-title" eyebrow={whyKarvaahh.eyebrow} title={whyKarvaahh.title} sub={whyKarvaahh.sub} />

        <ol className="ab-why__grid">
          {features.map((feature, i) => (
            <li className="ab-why__item" key={feature.id} data-reveal="" style={{ ["--d" as string]: i % 3 }}>
              <div className="ab-why__top">
                <span className="ab-why__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="ab-why__icon">
                  <AboutIcon name={feature.icon} />
                </span>
              </div>
              <h3 className="ab-why__title">{feature.title}</h3>
              <p className="ab-why__text">{feature.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { values, valueItems } from "@/lib/about/features";
import { AboutIcon } from "../shared/AboutIcon";
import { SectionHeading } from "../shared/SectionHeading";
import "./about-values.css";

export function AboutValues() {
  return (
    <section className="ab-section ab-values" aria-labelledby="about-values-title">
      <div className="ab-container">
        <SectionHeading id="about-values-title" eyebrow={values.eyebrow} title={values.title} align="center" />

        <ul className="ab-values__grid">
          {valueItems.map((item, i) => (
            <li className="ab-values__item" key={item.id} data-reveal="" style={{ ["--d" as string]: i % 3 }}>
              <span className="ab-values__icon">
                <AboutIcon name={item.icon} />
              </span>
              <h3 className="ab-values__title">{item.title}</h3>
              <p className="ab-values__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

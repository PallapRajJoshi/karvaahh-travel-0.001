import { trust, trustItems } from "@/lib/about/features";
import { SectionHeading } from "../shared/SectionHeading";
import "./about-trust.css";

export function AboutTrust() {
  return (
    <section className="ab-section ab-trust ab-on-dark" aria-labelledby="about-trust-title">
      <div className="ab-container">
        <SectionHeading id="about-trust-title" eyebrow={trust.eyebrow} title={trust.title} tone="dark" />

        <ul className="ab-trust__grid">
          {trustItems.map((item, i) => (
            <li className="ab-trust__item" key={item.id} data-reveal="" style={{ ["--d" as string]: i }}>
              <span className={`ab-trust__value ab-trust__value--${item.kind}`}>{item.value}</span>
              <span className="ab-trust__label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import type { CSSProperties } from "react";
import { WHY } from "@/lib/contact/content";

export function WhyKarvaahh() {
  return (
    <section className="ct-section ct-why" aria-labelledby="ct-why-title">
      <div className="ct-container">
        <header className="ct-heading ct-heading--center" data-reveal>
          <p className="ct-eyebrow ct-eyebrow--dark">Why Karvaahh</p>
          <h2 id="ct-why-title" className="ct-h2">
            {WHY.title}
          </h2>
          <p className="ct-lead">{WHY.subtitle}</p>
        </header>

        <ol className="ct-why__grid">
          {WHY.items.map((item, i) => (
            <li key={item.n} data-reveal style={{ "--i": i } as CSSProperties}>
              <article className="ct-why__card">
                <span className="ct-why__num" aria-hidden="true">
                  {item.n}
                </span>
                <span className="ct-why__rule" aria-hidden="true" />
                <h3 className="ct-why__title">{item.title}</h3>
                <p className="ct-why__text">{item.text}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

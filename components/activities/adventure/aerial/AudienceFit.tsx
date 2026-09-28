import type { AudienceContent } from "./types";
import SectionHeading from "./SectionHeading";
import { AudienceGlyph } from "./icons";
import "./audience-fit.css";

export default function AudienceFit({ content }: { content: AudienceContent }) {
  return (
    <section className="ae-section ae-audience" aria-labelledby="ae-audience-title">
      <div className="ae-container">
        <SectionHeading id="ae-audience-title" title={content.heading} />
        <ul className="ae-audience__grid">
          {content.items.map((a) => (
            <li key={a.title} className="ae-audience__item">
              <span className="ae-audience__icon">
                <AudienceGlyph icon={a.icon} />
              </span>
              <h3 className="ae-audience__title">{a.title}</h3>
              <p className="ae-audience__body">{a.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

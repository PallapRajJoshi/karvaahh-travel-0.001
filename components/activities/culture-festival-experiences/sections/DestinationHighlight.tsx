import CultureImage from "../shared/CultureImage";
import Reveal from "../shared/Reveal";
import { GoldDivider } from "../shared/SectionHeading";
import { HIGHLIGHT_HEADING, HIGHLIGHT_TEXT, IDS, SECTION_CHIPS } from "../data/page";
import "./DestinationHighlight.css";

export default function DestinationHighlight() {
  return (
    <section id={IDS.highlight} className="culture-highlight" aria-labelledby="culture-highlight-title">
      <div className="cx-container culture-highlight__grid">
        <Reveal className="culture-highlight__media">
          <div className="culture-highlight__frame">
            <CultureImage id="highlight" sizes="(max-width: 900px) 100vw, 46vw" />
          </div>
          <span className="culture-highlight__corner" aria-hidden="true" />
        </Reveal>

        <Reveal className="culture-highlight__copy" delay={120}>
          <h2 id="culture-highlight-title" className="culture-highlight__title">
            {HIGHLIGHT_HEADING}
          </h2>
          <GoldDivider className="culture-highlight__divider" />
          <p className="culture-highlight__text">{HIGHLIGHT_TEXT}</p>
          <ul className="culture-highlight__chips" aria-label="Jump to a section">
            {SECTION_CHIPS.map((c) => (
              <li key={c.href}>
                <a href={c.href}>{c.label}</a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

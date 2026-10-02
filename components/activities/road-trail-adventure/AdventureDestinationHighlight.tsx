import AdventureImage from "./AdventureImage";
import { MountainDivider } from "./Icon";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import { ANCHORS } from "./data/site";
import { HIGHLIGHT } from "./data/copy";
import "./AdventureDestinationHighlight.css";

/** Editorial split: large photograph beside the supplied highlight copy. */
export default function AdventureDestinationHighlight() {
  return (
    <section
      id={ANCHORS.highlight}
      className="rt-section rt-highlight"
      aria-labelledby="rt-highlight-title"
    >
      <div className="rt-container rt-highlight__grid">
        <Reveal as="figure" className="rt-highlight__figure">
          <div className="rt-highlight__frame">
            <Parallax strength={28}>
              <AdventureImage
                image={HIGHLIGHT.image}
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
            </Parallax>
          </div>
          <span className="rt-highlight__accent" aria-hidden="true" />
        </Reveal>

        <Reveal className="rt-highlight__copy">
          <p className="rt-eyebrow">{HIGHLIGHT.eyebrow}</p>
          <h2 id="rt-highlight-title" className="rt-h2">
            {HIGHLIGHT.heading}
          </h2>
          <MountainDivider />
          <p className="rt-highlight__text">{HIGHLIGHT.text}</p>
        </Reveal>
      </div>
    </section>
  );
}

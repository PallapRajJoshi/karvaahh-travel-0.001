import { INTRO, LINKS } from "../data/content";
import { CtaLink } from "../shared/CtaLink";
import { MediaFrame } from "../shared/MediaFrame";
import { Reveal } from "../shared/Reveal";
import "./EducationalIntro.css";

export function EducationalIntro() {
  return (
    <section id="intro" className="et-section et-intro" aria-labelledby="et-intro-title">
      <div className="et-container et-intro__grid">
        <div className="et-intro__copy">
          <Reveal>
            <p className="et-heading__eyebrow">{INTRO.eyebrow}</p>
            <h2 id="et-intro-title" className="et-intro__title">
              {INTRO.title}
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p className="et-intro__body">{INTRO.body}</p>
          </Reveal>
          <Reveal index={2}>
            <CtaLink href={LINKS.inquiry} variant="dark">
              Plan an Educational Tour
            </CtaLink>
          </Reveal>
        </div>

        <div className="et-intro__collage">
          {INTRO.tiles.map((tile, i) => (
            <Reveal key={tile.key} variant="clip" index={i} className={`et-intro__tile et-intro__tile--${i + 1}`}>
              <MediaFrame mediaKey={tile.key} showCaption sizes="(min-width: 900px) 20vw, 45vw" />
              <span className="et-intro__label">{tile.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

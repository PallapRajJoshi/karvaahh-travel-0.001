import AdventureImage from "./AdventureImage";
import Icon from "./Icon";
import Parallax from "./Parallax";
import PlanLink from "./PlanLink";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { OFFROAD_BLOCKS, OFFROAD_EXPERIENCES } from "./data/ride";
import { HEADINGS } from "./data/copy";
import { ANCHORS, INQUIRY_ANCHOR } from "./data/site";
import "./OffRoadAdventureSection.css";

/** Immersive 4x4 section. Cautious by design: no stunts, no guaranteed access. */
export default function OffRoadAdventureSection() {
  const h = HEADINGS.offRoad;
  return (
    <section
      id={ANCHORS.offRoad}
      className="rt-section rt-section--dark rt-offroad"
      aria-labelledby="rt-offroad-title"
    >
      <div className="rt-offroad__bg" aria-hidden={false}>
        <Parallax strength={40}>
          <AdventureImage image={h.image} sizes="100vw" />
        </Parallax>
        <div className="rt-offroad__shade" aria-hidden="true" />
      </div>

      <div className="rt-container rt-offroad__inner">
        <SectionHeading
          id="rt-offroad-title"
          eyebrow={h.eyebrow}
          title={h.title}
          intro={h.intro}
        />

        <div className="rt-offroad__layout">
          <Reveal className="rt-offroad__featured">
            <h3 className="rt-offroad__subtitle">{h.vehiclesTitle}</h3>
            <ul className="rt-checklist">
              {OFFROAD_EXPERIENCES.map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <PlanLink
              href={INQUIRY_ANCHOR}
              prefill={{ adventureType: "4x4 Off-Road Adventure" }}
              className="rt-btn rt-offroad__cta"
            >
              {h.cta}
              <Icon name="arrow" />
            </PlanLink>
          </Reveal>

          <ul className="rt-offroad__blocks">
            {OFFROAD_BLOCKS.map((b, i) => (
              <Reveal as="li" key={b.title} index={i % 2} className="rt-offroad__block">
                <h3 className="rt-offroad__block-title">{b.title}</h3>
                <p className="rt-offroad__block-text">{b.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

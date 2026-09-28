import { DIFFICULTY, PREP_ITEMS, SAFETY_CARD } from "./data/content";
import { ANCHORS } from "./data/routes";
import type { PrepItem } from "./data/types";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import { Mountain, Shield, Tent, Users, Alert } from "./shared/icons";
import "./ApiNampaPreparation.css";

const GROUPS: { id: PrepItem["group"]; label: string; Icon: typeof Mountain }[] = [
  { id: "body", label: "Body & altitude", Icon: Mountain },
  { id: "gear", label: "Gear & clothing", Icon: Tent },
  { id: "safety", label: "Health & safety", Icon: Shield },
  { id: "support", label: "Support & ethics", Icon: Users },
];

export default function ApiNampaPreparation() {
  return (
    <section
      className="an-section an-section--stone an-prep"
      id={ANCHORS.preparation}
      aria-labelledby="an-prep-title"
    >
      <div className="an-container">
        <SectionHeading
          id="an-prep-title"
          eyebrow="Difficulty & preparation"
          title="Prepare for a Remote Himalayan Expedition"
          intro="This is a serious wilderness trek. Good preparation is what turns a hard journey into a great one."
        />

        <div className="an-prep__top">
          <Reveal className="an-prep__difficulty">
            <p className="an-prep__label">Difficulty</p>
            <p className="an-prep__rating">{DIFFICULTY.rating}</p>
            <div
              className="an-prep__meter"
              role="img"
              aria-label={`Difficulty ${DIFFICULTY.scale} out of ${DIFFICULTY.scaleMax}`}
            >
              {Array.from({ length: DIFFICULTY.scaleMax }, (_, i) => (
                <span key={i} className={i < DIFFICULTY.scale ? "is-on" : undefined} />
              ))}
            </div>
            <p className="an-prep__summary">{DIFFICULTY.summary}</p>
          </Reveal>

          <Reveal as="aside" className="an-prep__safety" delay={100}>
            <Alert className="an-prep__safety-icon" />
            <h3>{SAFETY_CARD.title}</h3>
            <p>{SAFETY_CARD.body}</p>
          </Reveal>
        </div>

        <div className="an-prep__groups">
          {GROUPS.map(({ id, label, Icon }, gi) => (
            <Reveal key={id} className="an-prep__group" delay={gi * 70}>
              <h3 className="an-prep__group-title">
                <Icon />
                {label}
              </h3>
              <ul>
                {PREP_ITEMS.filter((p) => p.group === id).map((p) => (
                  <li key={p.id}>
                    <h4>{p.title}</h4>
                    <p>{p.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

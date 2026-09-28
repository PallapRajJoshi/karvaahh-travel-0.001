import type { Dham } from "./data/types";
import DhamImage from "./shared/DhamImage";
import RevealOnView from "./shared/RevealOnView";
import { DirectionArrow } from "./shared/icons";
import "./DhamSection.css";

/**
 * One Dham, told through its direction and landscape.
 * Layout alternates image-left / image-right; stacks on mobile.
 */
export default function DhamSection({ dham, index }: { dham: Dham; index: number }) {
  const titleId = `bcd-${dham.id}-title`;
  const flip = index % 2 === 1;

  return (
    <section
      id={dham.id}
      className={`bcd-dham bcd-dir--${dham.direction} ${flip ? "bcd-dham--flip" : ""} ${index % 2 ? "bcd-section--ivory" : "bcd-section--paper"}`}
      aria-labelledby={titleId}
    >
      <div className="bcd-container">
        <div className="bcd-dham__grid">
          <RevealOnView className="bcd-dham__visual">
            <DhamImage
              image={dham.image}
              direction={dham.direction}
              uid={`dham-${dham.id}`}
              sizes="(max-width: 900px) 100vw, 640px"
              className="bcd-dham__main-img"
            />
            <DhamImage
              image={dham.secondaryImage}
              direction={dham.direction}
              uid={`dham-${dham.id}-2`}
              sizes="(max-width: 900px) 45vw, 260px"
              className="bcd-dham__inset-img"
            />
            <p className="bcd-dham__env-badge">
              <DirectionArrow direction={dham.direction} size={18} />
              <span>{dham.environment.name}</span>
            </p>
          </RevealOnView>

          <div className="bcd-dham__text">
            <p className="bcd-dham__kicker">
              {dham.directionLabel}ern Dham <span aria-hidden="true">·</span> {dham.state}
            </p>
            <h2 id={titleId} className="bcd-dham__title">
              {dham.heading}
            </h2>
            <p className="bcd-dham__lede">{dham.lede}</p>
            <div className="bcd-prose bcd-dham__prose">
              {dham.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            <p className="bcd-dham__circuit">{dham.circuitNote}</p>
            <p className="bcd-dham__env">
              <strong>{dham.environment.name}.</strong> {dham.environment.text}
            </p>
          </div>
        </div>

        <div className="bcd-dham__details">
          <div className="bcd-dham__panel">
            <h3 className="bcd-dham__panel-title">At a glance</h3>
            <dl className="bcd-dham__dl">
              {dham.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="bcd-dham__panel">
            <h3 className="bcd-dham__panel-title">Gateways</h3>
            <dl className="bcd-dham__dl">
              {dham.gateways.map((g) => (
                <div key={g.label}>
                  <dt>{g.label}</dt>
                  <dd>{g.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="bcd-dham__panel">
            <h3 className="bcd-dham__panel-title">Good to know</h3>
            <ul className="bcd-dham__tips">
              {dham.goodToKnow.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Dham } from "../data/types";
import SmartImage from "../shared/SmartImage";
import { IconInfo } from "../shared/icons";

export default function DhamSection({ dham, flip }: { dham: Dham; flip: boolean }) {
  const titleId = `${dham.slug}-title`;
  return (
    <section
      id={dham.slug}
      className={`cd-dham${flip ? " cd-dham--flip" : ""}`}
      data-dham={dham.slug}
      aria-labelledby={titleId}
    >
      <div className="cd-container cd-dham__grid">
        <div className="cd-dham__visual" data-reveal>
          <div className="cd-dham__frame">
            <SmartImage image={dham.image} sizes="(min-width: 1024px) 50vw, 100vw" tone={dham.slug} />
          </div>
          <div className="cd-dham__inset">
            <SmartImage image={dham.secondaryImage} sizes="(min-width: 1024px) 20vw, 40vw" tone={dham.slug} />
          </div>
          <span className="cd-dham__numeral" aria-hidden="true">
            {dham.numeral}
          </span>
        </div>

        <div className="cd-dham__content">
          <p className="cd-dham__order">
            Dham {dham.order} of 4
          </p>
          <h2 id={titleId} className="cd-dham__title" data-reveal>
            {dham.heading}
          </h2>
          <dl className="cd-dham__meta" data-reveal>
            <div><dt>Deity</dt><dd>{dham.deity}</dd></div>
            <div><dt>Region</dt><dd>{dham.district}</dd></div>
            <div><dt>River</dt><dd>{dham.river}</dd></div>
          </dl>
          <div className="cd-prose" data-reveal>
            <p className="cd-dham__lead">{dham.lead}</p>
            {dham.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <ul className="cd-dham__highlights" data-reveal>
            {dham.highlights.map((h) => (
              <li key={h.title}>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </li>
            ))}
          </ul>
          <p className="cd-note" data-reveal>
            <IconInfo className="cd-note__icon" />
            <span>{dham.accessNote}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

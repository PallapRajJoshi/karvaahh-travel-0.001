import Link from "next/link";
import { anchors, headings, links, rulesVerifiedOn, safetyNote } from "../data/config";
import { preparation } from "../data/preparation";
import Accordion, { type AccordionItem } from "../shared/Accordion";
import { Icon } from "../shared/Icon";
import "./preparation.css";

const tagFor = { upper: "Upper Mustang", lower: "Lower Mustang", both: undefined } as const;

export default function Preparation() {
  const h = headings.preparation;

  const items: AccordionItem[] = preparation.map((p) => ({
    id: p.id,
    title: p.title,
    tag: tagFor[p.appliesTo],
    content: (
      <>
        {p.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        {p.lowerNote || p.upperNote ? (
          <dl className="mc-prep__compare">
            {p.lowerNote ? (
              <div className="mc-prep__zone mc-prep__zone--lower">
                <dt>Lower Mustang</dt>
                <dd>{p.lowerNote}</dd>
              </div>
            ) : null}
            {p.upperNote ? (
              <div className="mc-prep__zone mc-prep__zone--upper">
                <dt>Upper Mustang</dt>
                <dd>{p.upperNote}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}
      </>
    ),
  }));

  return (
    <section id={anchors.preparation.id} className="mc-section mc-prep" aria-labelledby="mc-prep-title">
      <div className="mc-container mc-prep__grid">
        <div className="mc-prep__aside">
          <header className="mc-heading" data-reveal>
            <p className="mc-heading__eyebrow">{h.eyebrow}</p>
            <h2 id="mc-prep-title" className="mc-heading__title">
              {h.title}
            </h2>
            <p className="mc-heading__subtitle">{h.subtitle}</p>
          </header>

          <aside className="mc-prep__safety" aria-labelledby="mc-safety-title" data-reveal>
            <p id="mc-safety-title" className="mc-prep__safety-title">
              <Icon name="alert" />
              {safetyNote.title}
            </p>
            <p className="mc-prep__safety-text">{safetyNote.text}</p>
          </aside>

          <p className="mc-prep__verified" data-reveal>
            {rulesVerifiedOn
              ? `Permit and entry information last reviewed ${rulesVerifiedOn}. Rules can change — we confirm them when you book.`
              : "Permit and entry rules change from time to time. We confirm the current requirements and fees in writing when you book."}{" "}
            <Link href={links.contact}>Ask us a question</Link>
          </p>
        </div>

        <div className="mc-prep__list" data-reveal>
          <Accordion items={items} numbered defaultOpen={[preparation[0]?.id].filter(Boolean) as string[]} />
        </div>
      </div>
    </section>
  );
}

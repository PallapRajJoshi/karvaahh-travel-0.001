import { preparation, preparationHeading, safetyNote } from "../../data/preparation";
import Accordion, { type AccordionItem } from "../../shared/Accordion";
import Icon from "../../shared/Icon";
import Notice from "../../shared/Notice";
import SectionHeading from "../../shared/SectionHeading";
import "./Preparation.css";

export default function Preparation() {
  const items: AccordionItem[] = preparation.map((p) => ({
    id: p.id,
    title: p.title,
    leading: p.icon ? <Icon name={p.icon} size={20} /> : undefined,
    badge: p.requiresConfirmation ? <span className="km-badge km-badge--caution">Confirm before booking</span> : undefined,
    content: (
      <>
        {p.body.map((para) => (
          <p key={para.slice(0, 32)}>{para}</p>
        ))}
        {p.list ? (
          <ul>
            {p.list.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        ) : null}
      </>
    ),
  }));

  return (
    <section id="preparation" className="km-section km-section--white" aria-labelledby="km-prep-title">
      <div className="km-container km-prep__grid">
        <div className="km-prep__intro">
          <SectionHeading id="km-prep-title" align="left" {...preparationHeading} />
          <Notice tone="caution" title="Your safety comes first" icon="shield">
            <p>{safetyNote}</p>
          </Notice>
        </div>
        <Accordion items={items} defaultOpen={[preparation[0].id]} />
      </div>
    </section>
  );
}

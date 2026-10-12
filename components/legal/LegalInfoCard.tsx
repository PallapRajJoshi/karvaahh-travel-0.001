import type { InfoCardItem } from "@/lib/legal/types";
import { LegalIcon } from "./LegalIcon";
import { RichText } from "./RichText";

/** Large feature card, e.g. "Before You Book" or "Cancellation Overview". */
export function LegalInfoCard({ icon = "info", title, text, items }: InfoCardItem) {
  return (
    <article className="legal-infocard">
      <span className="legal-infocard__icon">
        <LegalIcon name={icon} size={22} />
      </span>
      <p className="legal-infocard__title">{title}</p>
      {text ? (
        <p className="legal-infocard__text">
          <RichText text={text} />
        </p>
      ) : null}
      {items && items.length > 0 ? (
        <ul className="legal-infocard__list">
          {items.map((item) => (
            <li key={item}>
              <LegalIcon name="check" size={16} className="legal-infocard__tick" />
              <span>
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

/** Compact grid of small cards used inside sections. */
export function LegalMiniCards({ title, cards }: { title?: string; cards: InfoCardItem[] }) {
  return (
    <div className="legal-minicards">
      {title ? <h3 className="legal-minicards__title">{title}</h3> : null}
      <ul className="legal-minicards__grid">
        {cards.map((card) => (
          <li key={card.title} className="legal-minicards__item">
            <span className="legal-minicards__icon">
              <LegalIcon name={card.icon ?? "check"} size={20} />
            </span>
            <span className="legal-minicards__body">
              <span className="legal-minicards__name">{card.title}</span>
              {card.text ? <span className="legal-minicards__text">{card.text}</span> : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

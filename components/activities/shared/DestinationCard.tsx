import Link from "next/link";
import "./DestinationCard.css";

export interface CardBadge {
  label: string;
  tone?: "grade" | "duration" | "neutral";
}

export interface CardFact {
  label: string;
  value: string;
}

export interface DestinationCardProps {
  title: string;
  subtitle?: string;
  badges?: CardBadge[];
  route?: string;
  description: string;
  highlight?: string;
  note?: string;
  facts?: CardFact[];
  status?: string;
  cta?: { label: string; href: string };
}

export default function DestinationCard({
  title,
  subtitle,
  badges,
  route,
  description,
  highlight,
  note,
  facts,
  status,
  cta,
}: DestinationCardProps) {
  return (
    <article className="dest-card">
      <div className="dest-card__head">
        <div>
          <h3 className="dest-card__title">{title}</h3>
          {subtitle ? <p className="dest-card__subtitle">{subtitle}</p> : null}
        </div>
        {status ? (
          <span
            className={`dest-card__status dest-card__status--${status.toLowerCase()}`}
          >
            {status}
          </span>
        ) : null}
      </div>

      {badges && badges.length > 0 ? (
        <ul className="dest-card__badges">
          {badges.map((badge) => (
            <li
              key={badge.label}
              className={`dest-card__badge dest-card__badge--${badge.tone ?? "neutral"}`}
            >
              {badge.label}
            </li>
          ))}
        </ul>
      ) : null}

      {route ? <p className="dest-card__route">{route}</p> : null}

      <p className="dest-card__description">{description}</p>

      {highlight ? <p className="dest-card__highlight">{highlight}</p> : null}
      {note ? <p className="dest-card__note">{note}</p> : null}

      {facts && facts.length > 0 ? (
        <dl className="dest-card__facts">
          {facts.map((fact) => (
            <div className="dest-card__fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {cta ? (
        <Link className="dest-card__cta" href={cta.href}>
          {cta.label}
          <span aria-hidden="true" className="dest-card__cta-mark" />
        </Link>
      ) : null}
    </article>
  );
}

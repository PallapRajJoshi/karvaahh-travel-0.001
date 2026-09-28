import Link from "next/link";
import type { AdventureExperience } from "../../types";
import { SmartImage } from "../../client/SmartImage";
import { staggerStyle } from "../../lib/format";
import { Icon } from "../Icon";

/**
 * Tall, image-led adventure card. Key facts (difficulty, days, altitude) are
 * always visible. Hover and focus only add polish, so touch users lose nothing.
 */
export function AdventureCard({ item, index }: { item: AdventureExperience; index: number }) {
  return (
    <article className="nsa-adv-card" data-reveal="" style={staggerStyle(index)}>
      <div className="nsa-adv-card__media">
        <SmartImage
          image={item.image}
          sizes="(min-width: 1200px) 300px, (min-width: 1024px) 24vw, (min-width: 640px) 46vw, 92vw"
          className="nsa-adv-card__img"
        />
      </div>
      <div className="nsa-adv-card__shade" aria-hidden="true" />

      <div className="nsa-adv-card__top">
        <span className={`nsa-badge nsa-badge--difficulty nsa-badge--${item.difficulty.toLowerCase()}`}>
          <span className="nsa-sr-only">Difficulty: </span>
          {item.difficulty}
        </span>
        {item.permitNote ? <span className="nsa-badge nsa-badge--glass">{item.permitNote}</span> : null}
      </div>

      <div className="nsa-adv-card__body">
        <p className="nsa-adv-card__region">{item.region}</p>
        <h3 className="nsa-adv-card__title">{item.title}</h3>
        <p className="nsa-adv-card__text">{item.description}</p>

        <dl className="nsa-adv-card__facts">
          {item.duration ? (
            <div>
              <dt>
                <Icon name="clock" size={15} />
                <span className="nsa-sr-only">Approximate duration</span>
              </dt>
              <dd>{item.duration}</dd>
            </div>
          ) : null}
          {item.maxAltitude ? (
            <div>
              <dt>
                <Icon name="altitude" size={15} />
                <span className="nsa-sr-only">Approximate maximum altitude</span>
              </dt>
              <dd>{item.maxAltitude}</dd>
            </div>
          ) : null}
        </dl>

        <Link href={item.link.href} className="nsa-adv-card__link nsa-stretched" aria-label={item.link.ariaLabel}>
          {item.link.label}
          <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </article>
  );
}

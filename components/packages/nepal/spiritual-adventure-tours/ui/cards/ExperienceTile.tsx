import type { CulturalExperience } from "../../types";
import { SmartImage } from "../../client/SmartImage";
import { staggerStyle } from "../../lib/format";
import { Icon } from "../Icon";

/** Mosaic tile for "Experience the Soul of Nepal". Informational, not a link. */
export function ExperienceTile({ item, index }: { item: CulturalExperience; index: number }) {
  return (
    <article className={`nsa-exp-tile nsa-exp-tile--${index + 1}`} data-reveal="" style={staggerStyle(index)}>
      <div className="nsa-exp-tile__media">
        <SmartImage
          image={item.image}
          sizes={index === 0 ? "(min-width: 1024px) 62vw, 92vw" : "(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw"}
          className="nsa-exp-tile__img"
        />
      </div>
      <div className="nsa-exp-tile__shade" aria-hidden="true" />
      <div className="nsa-exp-tile__body">
        <span className="nsa-exp-tile__icon">
          <Icon name={item.icon} size={22} />
        </span>
        <h3 className="nsa-exp-tile__title">{item.title}</h3>
        <p className="nsa-exp-tile__text">{item.description}</p>
      </div>
    </article>
  );
}

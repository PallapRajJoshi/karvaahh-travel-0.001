import type { SacredDestination } from "@/data/india-pilgrimage/adi-kailash-om-parvat/types";
import { Icon } from "./Icon";
import { KImage } from "./KImage";

/**
 * Sacred-site card. The whole card is one link target (stretched link) so the
 * tap area is large on mobile, while only the name is announced as the link.
 */
export function DestinationCard({ destination }: { destination: SacredDestination }) {
  const titleId = `site-${destination.id}`;
  return (
    <article className="akop-dest-card" aria-labelledby={titleId}>
      <div className="akop-dest-card__media">
        <KImage
          image={destination.image}
          sizes="(min-width: 1240px) 290px, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="akop-dest-card__img"
        />
        <span className="akop-badge akop-badge--on-image">{destination.category}</span>
      </div>
      <div className="akop-dest-card__body">
        <p className="akop-dest-card__location">{destination.location}</p>
        <h3 id={titleId} className="akop-dest-card__name">
          {destination.name}
        </h3>
        <p className="akop-dest-card__tagline">{destination.tagline}</p>
        <p className="akop-dest-card__text">{destination.description}</p>
        <a
          href={destination.href}
          className="akop-dest-card__link"
          aria-label={`${destination.linkLabel ?? "Explore Destination"}: ${destination.name}`}
        >
          {destination.linkLabel ?? "Explore Destination"}
          <Icon name="arrow-right" size={16} />
        </a>
      </div>
    </article>
  );
}

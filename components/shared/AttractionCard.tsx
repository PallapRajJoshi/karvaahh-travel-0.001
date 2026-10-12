import SafeImage from "./SafeImage";
import "./shared-cards.css";

type Attraction = {
  slug: string;
  name: string;
  description: string;
  activities: string[];
  image: { src: string; alt: string };
  locationNote?: "within-reserve" | "nearby-village";
};

const LOCATION_LABEL = { "within-reserve": "Within the reserve", "nearby-village": "Nearby village" } as const;

/** Destination attraction: photo (or labelled placeholder), location badge, description and activities. */
export default function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <article className="attraction-card">
      <div className="attraction-card__media">
        <SafeImage
          src={attraction.image.src}
          alt={attraction.image.alt}
          fallbackLabel={attraction.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="attraction-card__img"
        />
        {attraction.locationNote && (
          <span className={`attraction-card__badge attraction-card__badge--${attraction.locationNote}`}>{LOCATION_LABEL[attraction.locationNote]}</span>
        )}
      </div>
      <div className="attraction-card__body">
        <h3 className="attraction-card__title">{attraction.name}</h3>
        <p className="attraction-card__text">{attraction.description}</p>
        {attraction.activities.length > 0 && (
          <ul className="attraction-card__tags" aria-label="Activities">
            {attraction.activities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

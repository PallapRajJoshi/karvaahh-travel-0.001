import JyImage from "./JyImage";
import { anchorFor, jyotirlingas } from "./data/jyotirlingaData";

const pad = (n: number) => String(n).padStart(2, "0");

/** Server-rendered 12-card grid. Filtering is handled by the parent's data-filter attribute. */
export default function JyotirlingaGrid() {
  return (
    <ul className="jyl-grid">
      {jyotirlingas.map((j) => (
        <li key={j.slug} className="jyl-card" data-region={j.region}>
          <JyImage
            image={j.image}
            sizes="(max-width: 640px) 78vw, (max-width: 1024px) 40vw, 24vw"
            className="jyl-card__img"
            label={j.name}
            sublabel={j.state}
          />
          <div className="jyl-card__body">
            <p className="jyl-card__meta">
              <span className="jyl-card__num">{pad(j.id)}</span>
              <span>{j.region}</span>
            </p>
            <h3 className="jyl-card__title">{j.name}</h3>
            <p className="jyl-card__place">
              {j.location}, {j.state}
            </p>
            <p className="jyl-card__desc">{j.shortDescription}</p>
            <dl className="jyl-card__details">
              <div>
                <dt>Tradition</dt>
                <dd>{j.tradition}</dd>
              </div>
              <div>
                <dt>Landscape</dt>
                <dd>{j.landscape}</dd>
              </div>
            </dl>
            <a href={`#${anchorFor(j.slug)}`} className="jyl-card__link">
              Explore {j.name}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

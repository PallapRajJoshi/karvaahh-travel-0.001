import { sacredDestinations } from "../data/pashupatinathMuktinathData";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";
import "./opening.css";

export function SacredDestinations() {
  const [first, second] = sacredDestinations.items;
  if (!first || !second) return null;

  return (
    <section className="pmy-section pmy-section--tight pmy-sacred" aria-labelledby="pmy-sacred-title">
      <div className="pmy-container">
        <SectionHeading id="pmy-sacred-title" title={sacredDestinations.heading} />
        <div className="pmy-sacred__pair">
          {[first, second].map((d, i) => (
            <article
              key={d.id}
              className={`pmy-sacred__card pmy-sacred__card--${d.id}`}
              aria-labelledby={`pmy-sacred-${d.id}`}
              data-reveal
            >
              <p className="pmy-sacred__place">{d.place}</p>
              <h3 id={`pmy-sacred-${d.id}`} className="pmy-sacred__name">{d.name}</h3>
              <p className="pmy-sacred__meta">
                <span>{d.tradition}</span>
                <span>{d.elevation}</span>
              </p>
              <ul className="pmy-ticklist">
                {d.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <a className="pmy-sacred__more" href={`#${d.id}`}>
                Read about {d.name}
              </a>
              {i === 0 ? (
                <div className="pmy-sacred__connector" aria-hidden="true">
                  <span className="pmy-sacred__connector-line" />
                  <span className="pmy-sacred__connector-badge">
                    <Icon name="mountain" size={18} />
                  </span>
                </div>
              ) : null}
            </article>
          ))}
        </div>
        <p className="pmy-sacred__caption">{sacredDestinations.connector}, from the Kathmandu Valley to Muktinath.</p>
      </div>
    </section>
  );
}

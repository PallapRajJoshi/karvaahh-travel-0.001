import Link from "next/link";
import JyImage from "./JyImage";
import { anchorFor, getRoute } from "./data/jyotirlingaData";
import type { Jyotirlinga } from "./data/types";

const pad = (n: number) => String(n).padStart(2, "0");

export default function JyotirlingaSection({ temple }: { temple: Jyotirlinga }) {
  const related = temple.relatedLink ? getRoute(temple.relatedLink.route) : null;
  const titleId = `${anchorFor(temple.slug)}-title`;

  return (
    <article id={anchorFor(temple.slug)} className="jyl-temple" aria-labelledby={titleId}>
      <div className="jyl-temple__media">
        <JyImage
          image={temple.image}
          sizes="(max-width: 860px) 100vw, 42vw"
          className="jyl-temple__img"
          label={temple.templeName}
          sublabel={`${temple.location}, ${temple.state}`}
        />
        <span className="jyl-temple__num" aria-hidden="true">
          {pad(temple.id)}
        </span>
      </div>

      <div className="jyl-temple__content">
        <p className="jyl-temple__place">
          {temple.location} <span aria-hidden="true">/</span> {temple.state}
        </p>
        <h3 id={titleId} className="jyl-temple__title">
          {temple.heading}
        </h3>
        <p className="jyl-temple__lead">{temple.significance}</p>

        <dl className="jyl-temple__facts">
          <div>
            <dt>Temple character</dt>
            <dd>{temple.templeCharacter}</dd>
          </div>
          <div>
            <dt>Pilgrimage experience</dt>
            <dd>{temple.experience}</dd>
          </div>
          <div>
            <dt>Travel considerations</dt>
            <dd>{temple.travelNotes}</dd>
          </div>
          <div>
            <dt>Nearby</dt>
            <dd>
              <ul className="jyl-temple__nearby">
                {temple.nearby.map((place) => (
                  <li key={place}>{place}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        {temple.traditionNote ? <p className="jyl-note jyl-temple__tradition">{temple.traditionNote}</p> : null}

        <div className="jyl-temple__links">
          {related && temple.relatedLink ? (
            <Link href={related.href} className="jyl-link">
              {temple.relatedLink.text}
            </Link>
          ) : null}
          <a href="#explore-jyotirlingas" className="jyl-temple__back">
            Back to all 12 temples
          </a>
        </div>
      </div>
    </article>
  );
}

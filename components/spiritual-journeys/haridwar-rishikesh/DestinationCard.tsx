import Image from "next/image";
import Icon from "./Icon";
import type { SacredDestination } from "./data/types";

interface DestinationCardProps {
  destination: SacredDestination;
  optional?: boolean;
  /** Desktop column span, set by the parent grid. */
  span?: "third" | "half" | "full";
}

export default function DestinationCard({ destination: d, optional = false, span = "third" }: DestinationCardProps) {
  const detailsId = `${d.id}-details`;
  return (
    <article id={d.id} className={`hry-dest hry-dest--${span}`} aria-labelledby={`${d.id}-title`}>
      <div className="hry-dest__media">
        <Image
          src={d.image.src}
          alt={d.image.alt}
          fill
          sizes={span === "third" ? "(min-width: 1100px) 380px, (min-width: 700px) 50vw, 100vw" : "(min-width: 700px) 50vw, 100vw"}
          className="hry-dest__img"
        />
        {optional ? <span className="hry-tag hry-tag--optional hry-dest__flag">Optional extension</span> : null}
      </div>

      <div className="hry-dest__body">
        <h4 id={`${d.id}-title`} className="hry-dest__name">
          {d.name}
        </h4>
        <p className="hry-dest__location">
          <Icon name="pin" size={15} />
          {d.location}
        </p>
        <p className="hry-dest__significance">{d.significance}</p>
        <p className="hry-dest__desc">{d.description}</p>

        <p className="hry-dest__duration">
          <Icon name="clock" size={15} />
          <span>
            <span className="hry-dest__approx">Approx.</span> {d.visitDuration}
          </span>
        </p>

        <details className="hry-dest__details" id={detailsId}>
          <summary className="hry-dest__summary">
            <span>Explore destination</span>
            <Icon name="chevron" size={18} className="hry-dest__chevron" />
          </summary>
          <div className="hry-dest__more">
            <h5 className="hry-dest__subhead">Highlights</h5>
            <ul className="hry-dest__highlights">
              {d.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            {d.suggestedExperience ? (
              <p className="hry-dest__suggest">
                <strong>Suggested: </strong>
                {d.suggestedExperience}
              </p>
            ) : null}
            {d.notes?.map((note) => (
              <p key={note} className="hry-dest__note">
                <Icon name="info" size={16} />
                <span>{note}</span>
              </p>
            ))}
          </div>
        </details>
      </div>
    </article>
  );
}

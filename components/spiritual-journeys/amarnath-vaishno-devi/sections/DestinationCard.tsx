import Image from "next/image";
import type { Destination } from "../types";

interface Props {
  destination: Destination;
  variant: "feature" | "base" | "compact";
  cta?: { href: string; label: string };
  sizes: string;
}

const SHRINE_LABEL = { amarnath: "Amarnath", vaishno: "Vaishno Devi", kashmir: "Kashmir" } as const;

export function DestinationCard({ destination: d, variant, cta, sizes }: Props) {
  return (
    <article className={`avd-dest avd-dest--${variant}`} aria-labelledby={`avd-dest-${d.id}`}>
      <div className="avd-dest__media">
        <Image src={d.image.src} alt={d.image.alt} fill sizes={sizes} className="avd-dest__img" />
      </div>
      <div className="avd-dest__body">
        <div className="avd-dest__meta">
          <span className={`avd-tag avd-tag--${d.shrine}`}>
            {d.optional ? "Optional extension" : `${SHRINE_LABEL[d.shrine]} ${d.role.toLowerCase()}`}
          </span>
        </div>
        <h4 id={`avd-dest-${d.id}`} className="avd-dest__name">
          {d.name}
        </h4>
        <p className="avd-dest__loc">
          {d.location}
          {d.elevationM ? (
            <>
              <span aria-hidden="true"> | </span>
              <span>Approx. {d.elevationM.toLocaleString("en-IN")} m</span>
            </>
          ) : null}
        </p>

        {d.significance ? <p className="avd-dest__text">{d.significance}</p> : null}
        <p className="avd-dest__text">{d.experience}</p>

        {d.highlights.length > 0 && variant !== "compact" ? (
          <ul className="avd-dest__highlights" aria-label={`${d.name} highlights`}>
            {d.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        ) : null}

        {d.note ? <p className="avd-dest__note">{d.note}</p> : null}

        {cta ? (
          <a href={cta.href} className="avd-dest__cta">
            {cta.label}
          </a>
        ) : null}
      </div>
    </article>
  );
}

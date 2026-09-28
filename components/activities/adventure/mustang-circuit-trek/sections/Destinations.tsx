import Image from "next/image";
import Link from "next/link";
import { anchors, headings } from "../data/config";
import { destinations } from "../data/destinations";
import type { Destination } from "../data/types";
import SectionHeading from "../shared/SectionHeading";
import { Icon } from "../shared/Icon";
import { staggerStyle } from "../shared/stagger";
import "./destinations.css";

/** Real page if one exists, otherwise the matching stage in the route section. */
function destinationLink(d: Destination) {
  if (d.href) return { href: d.href, label: "Explore Destination", internal: false };
  if (d.routeStageId) return { href: `#${d.routeStageId}`, label: "See it on the route", internal: true };
  return null;
}

export default function Destinations() {
  const h = headings.destinations;
  return (
    <section
      id={anchors.destinations.id}
      className="mc-section mc-section--white mc-dest"
      aria-labelledby="mc-dest-title"
    >
      <div className="mc-container">
        <SectionHeading id="mc-dest-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />

        <ul className="mc-dest__grid">
          {destinations.map((d, i) => {
            const link = destinationLink(d);
            return (
              <li key={d.id} className="mc-dest__card" data-reveal style={staggerStyle(i % 4)}>
                <div className="mc-dest__media mc-frame">
                  <Image
                    src={d.image.src}
                    alt={d.image.alt}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                    style={d.image.focal ? { objectPosition: d.image.focal } : undefined}
                  />
                  <span className="mc-badge mc-dest__category">{d.category}</span>
                </div>
                <div className="mc-dest__body">
                  <p className="mc-dest__location">
                    <Icon name="pin" />
                    {d.location}
                  </p>
                  <h3 className="mc-dest__name">
                    {link ? (
                      link.internal ? (
                        <a href={link.href} className="mc-dest__link">
                          {d.name}
                        </a>
                      ) : (
                        <Link href={link.href} className="mc-dest__link">
                          {d.name}
                        </Link>
                      )
                    ) : (
                      d.name
                    )}
                  </h3>
                  <p className="mc-dest__tagline">{d.tagline}</p>
                  <p className="mc-dest__text">{d.description}</p>
                  {link ? (
                    <span className="mc-dest__more" aria-hidden="true">
                      {link.label}
                      <Icon name="arrow" />
                    </span>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

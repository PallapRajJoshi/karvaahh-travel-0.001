import Image from "next/image";
import Link from "next/link";
import { anchors, headings, links } from "../data/config";
import { packages, styleLabels } from "../data/packages";
import type { TravelStyle } from "../data/types";
import SectionHeading from "../shared/SectionHeading";
import { Icon } from "../shared/Icon";
import { staggerStyle } from "../shared/stagger";
import "./packages.css";

const legend: { style: TravelStyle; text: string }[] = [
  { style: "trek", text: "Multi-day walking between villages" },
  { style: "road", text: "Jeep travel with short walks" },
  { style: "mixed", text: "Drive in, explore on foot" },
];

export default function Packages() {
  const h = headings.packages;
  return (
    <section id={anchors.packages.id} className="mc-section mc-section--white mc-pkg" aria-labelledby="mc-pkg-title">
      <div className="mc-container">
        <SectionHeading id="mc-pkg-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />

        <ul className="mc-pkg__legend" aria-label="Trip styles" data-reveal>
          {legend.map((l) => (
            <li key={l.style}>
              <span className={`mc-pkg__style mc-pkg__style--${l.style}`}>{styleLabels[l.style]}</span>
              {l.text}
            </li>
          ))}
        </ul>

        <ul className="mc-pkg__grid">
          {packages.map((p, i) => {
            const viewHref = p.href ?? links.packageEnquiry(p.id);
            const titleId = `mc-pkg-${p.id}`;
            return (
              <li key={p.id} data-reveal style={staggerStyle(i % 3)}>
                <article className="mc-pkg__card" aria-labelledby={titleId}>
                  <div className="mc-pkg__media mc-frame">
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                    />
                    <span className={`mc-pkg__style mc-pkg__style--${p.style} mc-pkg__style--float`}>
                      {styleLabels[p.style]}
                    </span>
                  </div>

                  <div className="mc-pkg__body">
                    <p className="mc-pkg__category">{p.category}</p>
                    <h3 id={titleId} className="mc-pkg__title">
                      {p.title}
                    </h3>
                    <p className="mc-pkg__text">{p.description}</p>

                    <p className="mc-pkg__route">
                      <span className="mc-sr-only">Route: </span>
                      <Icon name="route" />
                      <span>
                        {p.route.map((stop, idx) => (
                          <span key={stop}>
                            {idx > 0 ? <span className="mc-pkg__arrow" aria-hidden="true"> → </span> : null}
                            {stop}
                          </span>
                        ))}
                      </span>
                    </p>

                    <dl className="mc-pkg__meta">
                      <div>
                        <dt>
                          <Icon name="clock" />
                          Duration
                        </dt>
                        <dd>{p.duration ?? "On request"}</dd>
                      </div>
                      <div>
                        <dt>
                          <Icon name="gauge" />
                          Grade
                        </dt>
                        <dd>{p.difficulty ?? "On request"}</dd>
                      </div>
                    </dl>

                    <div className="mc-pkg__foot">
                      <p className="mc-pkg__price">
                        {p.price ? (
                          <>
                            <span className="mc-pkg__price-value">{p.price}</span>
                            {p.priceVerifiedOn ? (
                              <span className="mc-pkg__price-note">
                                Indicative, verified {p.priceVerifiedOn} · subject to confirmation
                              </span>
                            ) : null}
                          </>
                        ) : (
                          <span className="mc-pkg__price-value mc-pkg__price-value--quote">Request a quote</span>
                        )}
                      </p>
                      <div className="mc-pkg__actions">
                        <Link href={viewHref} className="mc-btn mc-btn--secondary mc-pkg__btn">
                          {p.href ? "View Package" : "Get Itinerary"}
                          <span className="mc-sr-only">: {p.title}</span>
                        </Link>
                        <Link href={links.packageEnquiry(p.id, true)} className="mc-pkg__custom">
                          Customize Your Trek
                          <span className="mc-sr-only">: {p.title}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

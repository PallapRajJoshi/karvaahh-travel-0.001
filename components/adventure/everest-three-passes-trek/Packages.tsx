import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { packages, customPackage } from "@/data/adventure/everest-three-passes-trek/packages";
import { LINKS } from "@/data/adventure/everest-three-passes-trek/config";
import { formatPrice } from "@/data/adventure/everest-three-passes-trek/format";
import "./Packages.css";

/**
 * Renders verified package cards when `packages` has entries; otherwise a single
 * "Request a Customized Trek Package" enquiry card. Nothing is invented.
 */
export default function Packages() {
  const hasPackages = packages.length > 0;

  return (
    <section className="etp-section etp-pkg" id="packages" aria-labelledby="etp-pkg-title">
      <div className="etp-wrap">
        <SectionHeading
          id="etp-pkg-title"
          eyebrow="Plan your trek"
          title="Explore Everest Three Passes Trek Packages"
          intro="Every Three Passes departure is planned around the group's experience, the season and the acclimatisation it needs."
        />

        {hasPackages ? (
          <ul className="etp-pkg__grid">
            {packages.map((p, i) => (
              <li key={p.id} className="etp-pkg__card" data-reveal style={{ "--i": i } as React.CSSProperties}>
                <div className="etp-pkg__top">
                  <span className="etp-pill">{p.durationDays} days</span>
                  <span className="etp-pill etp-pill--gold">{p.difficulty}</span>
                </div>
                <h3 className="etp-pkg__title">{p.title}</h3>
                <p className="etp-pkg__route">{p.routeSummary}</p>
                <dl className="etp-pkg__meta">
                  <div>
                    <dt>Accommodation</dt>
                    <dd>{p.accommodation}</dd>
                  </div>
                </dl>
                <div className="etp-pkg__cols">
                  <div>
                    <p className="etp-pkg__label">Included</p>
                    <ul className="etp-pkg__inc">
                      {p.inclusions.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="etp-pkg__label">Not included</p>
                    <ul className="etp-pkg__exc">
                      {p.exclusions.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {p.price && (
                  <p className="etp-pkg__price">
                    <span>From</span> <strong>{formatPrice(p.price)}</strong> <span>{p.price.basis}</span>
                    <small>Price verified {p.price.verifiedOn}, subject to confirmation.</small>
                  </p>
                )}
                <div className="etp-pkg__ctas">
                  {p.detailsHref && (
                    <Link href={p.detailsHref} className="etp-btn etp-btn--blue">
                      View Package Details
                    </Link>
                  )}
                  <Link href={LINKS.customize} className="etp-btn etp-btn--outline">
                    Customize Your Trek
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="etp-pkg__custom" data-reveal>
            <div className="etp-pkg__custom-main">
              <span className="etp-pill etp-pill--gold">Private & small-group departures</span>
              <h3 className="etp-pkg__custom-title">{customPackage.title}</h3>
              <p className="etp-pkg__custom-body">{customPackage.body}</p>
              <div className="etp-pkg__ctas">
                <Link href={LINKS.customize} className="etp-btn etp-btn--gold">
                  Customize Your Trek <Icon name="arrow" />
                </Link>
                <Link href={LINKS.contact} className="etp-btn etp-btn--ghost">
                  Contact Karvaahh
                </Link>
              </div>
            </div>
            <ul className="etp-pkg__custom-points">
              {customPackage.points.map((pt) => (
                <li key={pt}>
                  <Icon name="mountain" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

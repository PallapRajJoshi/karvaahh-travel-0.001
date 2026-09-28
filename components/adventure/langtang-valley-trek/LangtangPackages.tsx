import { packages, links } from "@/data/adventure/langtang-valley-trek";
import SectionHeading from "./SectionHeading";
import LangtangIcon from "./LangtangIcon";
import "./LangtangPackages.css";

export default function LangtangPackages() {
  return (
    <section className="lt-section lt-packages" id="packages" aria-labelledby="lt-packages-title">
      <div className="lt-container">
        <SectionHeading id="lt-packages-title" eyebrow="Plan Your Trek" title="Explore Langtang Valley Trek Packages" align="center"
          intro="Start from a sample route or build your own. Every Karvaahh trek can be adjusted to your dates, pace and group." />
        <ul className="lt-pk__grid" role="list">
          {packages.map((p, i) => {
            const customize = `${links.customize}&package=${p.id}`;
            return (
              <li key={p.id} className={`lt-pk ${p.featured ? "lt-pk--featured" : ""}`} data-reveal style={{ ["--i" as string]: i }}>
                {p.featured ? <span className="lt-pk__flag">Most chosen route</span> : null}
                <h3 className="lt-pk__title">{p.title}</h3>
                <dl className="lt-pk__meta">
                  <div><dt>Duration</dt><dd>{p.duration}</dd></div>
                  <div><dt>Difficulty</dt><dd>{p.difficulty}</dd></div>
                  <div><dt>Stay</dt><dd>{p.accommodation}</dd></div>
                </dl>
                <p className="lt-pk__route">{p.route}</p>
                <div className="lt-pk__lists">
                  <div>
                    <p className="lt-pk__lh">Includes</p>
                    <ul>{p.includes.map((x) => <li key={x}><LangtangIcon name="check" size={15} />{x}</li>)}</ul>
                  </div>
                  <div>
                    <p className="lt-pk__lh">Excludes</p>
                    <ul className="is-ex">{p.excludes.map((x) => <li key={x}><LangtangIcon name="cross" size={15} />{x}</li>)}</ul>
                  </div>
                </div>
                <div className="lt-pk__foot">
                  {p.price ? (
                    <p className="lt-pk__price">{p.price}{p.priceNote ? <span>{p.priceNote}</span> : null}</p>
                  ) : (
                    <p className="lt-pk__price lt-pk__price--ask">Price on request<span>Tailored quote within your budget</span></p>
                  )}
                  <div className="lt-pk__actions">
                    {p.detailsHref ? <a className="lt-btn lt-btn--outline" href={p.detailsHref}>View Package Details</a> : null}
                    {p.price ? (
                      <a className="lt-btn lt-btn--blue" href={customize}>Customize Your Trek</a>
                    ) : (
                      <a className="lt-btn lt-btn--blue" href={customize}>Request a Customized Package</a>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

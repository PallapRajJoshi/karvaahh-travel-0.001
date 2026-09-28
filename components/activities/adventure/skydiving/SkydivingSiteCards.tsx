import NotifyLink from "./NotifyLink";
import SectionHeading from "./SectionHeading";
import { sites, sitesSection } from "./data/skydivingData";
import "./SkydivingSiteCards.css";

export default function SkydivingSiteCards() {
  return (
    <section id="experiences" className="sky-section" aria-labelledby="sky-sites-title">
      <div className="sky-container">
        <SectionHeading id="sky-sites-title" title={sitesSection.heading} intro={sitesSection.intro} />
        <div className="sky-sites">
          {sites.map((site) => (
            <article
              key={site.id}
              className={`sky-site${site.featured ? " sky-site--featured" : ""}`}
              aria-labelledby={`sky-site-${site.id}`}
            >
              <header className="sky-site__head">
                <p className="sky-site__region">{site.region}</p>
                <span className={`sky-status${site.featured ? " sky-status--on-dark" : ""}`}>{site.status}</span>
              </header>
              <h3 id={`sky-site-${site.id}`} className="sky-site__name">
                {site.name}
              </h3>
              <p className="sky-site__desc">{site.description}</p>

              <dl className="sky-site__facts">
                {site.facts.map((f) => (
                  <div key={f.label} className="sky-site__fact">
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>

              <footer className="sky-site__foot">
                <div className="sky-site__price">
                  <span className="sky-site__price-label">Indicative price</span>
                  <strong className="sky-site__price-value">{site.price}</strong>
                  {site.priceType && <span className="sky-site__price-type">{site.priceType}</span>}
                </div>
                <NotifyLink
                  interest={site.interest}
                  className={`sky-btn ${site.featured ? "sky-btn--gold" : "sky-btn--outline"}`}
                >
                  {site.cta}
                </NotifyLink>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

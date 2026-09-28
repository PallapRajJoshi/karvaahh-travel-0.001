import { CUSTOM_TRIP, PACKAGES, ROUTES } from "@/data/destinations/tsum-valley/content";
import type { TsumPackage } from "@/data/destinations/tsum-valley/types";
import SectionHeading from "./shared/SectionHeading";
import Reveal from "./shared/Reveal";
import { ArrowRight, Bed, Check, Clock, Gauge, Minus, Route } from "./shared/Icons";
import "./TsumValleyPackages.css";

function formatPrice(p: NonNullable<TsumPackage["price"]>) {
  const locale = p.currency === "INR" ? "en-IN" : "en-US";
  return new Intl.NumberFormat(locale, { style: "currency", currency: p.currency, maximumFractionDigits: 0 }).format(p.amount);
}

function PackageCard({ pkg }: { pkg: TsumPackage }) {
  return (
    <article className="tsum-pkg__card" aria-labelledby={`pkg-${pkg.id}`}>
      <header className="tsum-pkg__head">
        <h3 className="tsum-pkg__title" id={`pkg-${pkg.id}`}>{pkg.title}</h3>
        <div className="tsum-pkg__price">
          {pkg.price ? (
            <>
              <span className="tsum-pkg__from">From</span>
              <span className="tsum-pkg__amount">{formatPrice(pkg.price)}</span>
              <span className="tsum-pkg__basis">{pkg.price.basis} · verified {pkg.price.verifiedOn} · subject to confirmation</span>
            </>
          ) : (
            <span className="tsum-pkg__amount tsum-pkg__amount--request">Price on request</span>
          )}
        </div>
      </header>

      <dl className="tsum-pkg__facts">
        <div><dt><Clock /> Duration</dt><dd>{pkg.duration}</dd></div>
        <div><dt><Gauge /> Difficulty</dt><dd>{pkg.difficulty}</dd></div>
        <div><dt><Bed /> Stay</dt><dd>{pkg.accommodation}</dd></div>
      </dl>

      <p className="tsum-pkg__route"><Route aria-hidden="true" /> {pkg.route}</p>

      <div className="tsum-pkg__lists">
        <div>
          <h4>Included</h4>
          <ul className="tsum-pkg__list tsum-pkg__list--in">
            {pkg.inclusions.map((x) => <li key={x}><Check /> {x}</li>)}
          </ul>
        </div>
        <div>
          <h4>Not included</h4>
          <ul className="tsum-pkg__list tsum-pkg__list--out">
            {pkg.exclusions.map((x) => <li key={x}><Minus /> {x}</li>)}
          </ul>
        </div>
      </div>

      <div className="tsum-pkg__ctas">
        {pkg.detailsHref && (
          <a className="tsum-btn tsum-btn--secondary" href={pkg.detailsHref}>
            View Package Details <ArrowRight />
          </a>
        )}
        <a className="tsum-btn tsum-btn--ghost" href={ROUTES.customize}>Customize Your Trek</a>
      </div>
    </article>
  );
}

function CustomTripPanel({ compact = false }: { compact?: boolean }) {
  return (
    <Reveal as="article" className={`tsum-pkg__custom${compact ? " tsum-pkg__custom--compact" : ""}`} aria-labelledby="tsum-custom-title">
      <div className="tsum-pkg__custom-intro">
        <p className="tsum-pkg__custom-kicker">Private departures</p>
        <h3 className="tsum-pkg__custom-title" id="tsum-custom-title">{CUSTOM_TRIP.title}</h3>
        <p className="tsum-pkg__custom-text">{CUSTOM_TRIP.text}</p>
        <div className="tsum-pkg__ctas">
          <a className="tsum-btn tsum-btn--primary" href={ROUTES.customize}>
            Customize Your Trek <ArrowRight />
          </a>
          <a className="tsum-btn tsum-btn--ghost tsum-btn--light-ghost" href={ROUTES.contact}>Talk to our team</a>
        </div>
        <p className="tsum-pkg__custom-note">{CUSTOM_TRIP.note}</p>
      </div>

      {!compact && (
        <ul className="tsum-pkg__options" aria-label="Popular trip styles">
          {CUSTOM_TRIP.options.map((o) => (
            <li key={o.title} className="tsum-pkg__option">
              <a href={ROUTES.customize}>
                <span className="tsum-pkg__option-title">{o.title}</span>
                <span className="tsum-pkg__option-text">{o.text}</span>
                <ArrowRight className="tsum-pkg__option-arrow" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  );
}

export default function TsumValleyPackages() {
  const hasPackages = PACKAGES.length > 0;

  return (
    <section className="tsum-section tsum-section--tint tsum-pkg" id="packages" aria-labelledby="tsum-pkg-title">
      <div className="tsum-container">
        <SectionHeading
          id="tsum-pkg-title"
          eyebrow="Trek with Karvaahh"
          title="Explore Tsum Valley Trek Packages"
          intro={
            hasPackages
              ? "Every departure includes a licensed guide and restricted-area permits. Choose a starting point and we’ll tailor the rest."
              : "Tsum is best done as a private trip at your pace. Tell us what you have in mind and we’ll design and quote it."
          }
        />

        {hasPackages ? (
          <>
            <ul className="tsum-pkg__grid">
              {PACKAGES.map((pkg, i) => (
                <Reveal as="li" key={pkg.id} delay={i * 80}>
                  <PackageCard pkg={pkg} />
                </Reveal>
              ))}
            </ul>
            <CustomTripPanel compact />
          </>
        ) : (
          <CustomTripPanel />
        )}
      </div>
    </section>
  );
}

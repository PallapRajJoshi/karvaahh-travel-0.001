import Link from "next/link";
import { PACKAGES, PACKAGES_META } from "./data/packages";
import { ANCHORS, INQUIRY } from "./data/routes";
import type { TrekPackage } from "./data/types";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import { ArrowRight, Check, Clock, Home, Minus, Mountain } from "./shared/icons";
import "./ApiNampaPackages.css";

function formatPrice(p: NonNullable<TrekPackage["price"]>) {
  return new Intl.NumberFormat(p.currency === "INR" ? "en-IN" : "en", {
    style: "currency",
    currency: p.currency,
    maximumFractionDigits: 0,
  }).format(p.amount);
}

function PackageCard({ pkg }: { pkg: TrekPackage }) {
  return (
    <article className="an-pkg">
      <header className="an-pkg__head">
        <h3 className="an-pkg__title">{pkg.title}</h3>
        <ul className="an-pkg__meta">
          <li>
            <Clock /> {pkg.duration}
          </li>
          <li>
            <Mountain /> {pkg.difficulty}
          </li>
          <li>
            <Home /> {pkg.accommodation}
          </li>
        </ul>
      </header>
      <p className="an-pkg__route">{pkg.routeSummary}</p>
      <div className="an-pkg__lists">
        <div>
          <h4>Included</h4>
          <ul>
            {pkg.inclusions.map((x) => (
              <li key={x}>
                <Check /> {x}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Not included</h4>
          <ul className="an-pkg__excl">
            {pkg.exclusions.map((x) => (
              <li key={x}>
                <Minus /> {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="an-pkg__foot">
        <p className="an-pkg__price">
          {pkg.price ? (
            <>
              <span>From</span> {formatPrice(pkg.price)} <small>{pkg.price.basis}</small>
            </>
          ) : (
            <>Price on request</>
          )}
        </p>
        <div className="an-pkg__actions">
          {pkg.detailsHref ? (
            <Link className="an-btn an-btn--blue" href={pkg.detailsHref}>
              View Package Details
            </Link>
          ) : null}
          <a className="an-btn an-btn--outline" href={INQUIRY.custom}>
            Customize Your Trek
          </a>
        </div>
      </footer>
    </article>
  );
}

export default function ApiNampaPackages() {
  const { custom } = PACKAGES_META;
  return (
    <section className="an-section an-pkgs" id={ANCHORS.packages} aria-labelledby="an-pkgs-title">
      <div className="an-container">
        <SectionHeading id="an-pkgs-title" eyebrow="Trek packages" title={PACKAGES_META.title} intro={PACKAGES_META.intro} />

        {PACKAGES.length ? (
          <div className="an-pkgs__grid">
            {PACKAGES.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 80}>
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
        ) : null}

        <Reveal className="an-custom">
          <div className="an-custom__main">
            <p className="an-custom__kicker">Private departures only</p>
            <h3 className="an-custom__title">{custom.title}</h3>
            <p className="an-custom__body">{custom.body}</p>
            <div className="an-custom__actions">
              <a className="an-btn an-btn--gold" href={INQUIRY.custom}>
                Customize Your Trek
                <ArrowRight />
              </a>
              <a className="an-btn an-btn--ghost" href={INQUIRY.general}>
                Talk to a trek planner
              </a>
            </div>
            <p className="an-custom__note">{custom.note}</p>
          </div>
          <div className="an-custom__side">
            <p className="an-custom__side-title">Tell us about</p>
            <ol className="an-custom__steps">
              {custom.planPoints.map((p, i) => (
                <li key={p}>
                  <span aria-hidden="true">{i + 1}</span>
                  {p}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

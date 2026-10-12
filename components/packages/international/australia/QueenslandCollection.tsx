import { ArrowRight, Check, Info } from "lucide-react";
import { australiaDestinationById } from "@/data/australia/destinations";
import { australiaImage } from "@/data/australia/images";
import { pickPackages } from "@/data/australia/packages";
import { queenslandSplit as q } from "@/data/australia/sections";
import Reveal from "../../Reveal";
import SafeImage from "../../SafeImage";
import { FilterButton } from "./AustraliaFilterControls";
import PackageRail from "./PackageRail";

/** Queensland as a split screen: the Gold Coast and Tropical North Queensland side by side. */
export default function QueenslandCollection() {
  return (
    <section className="pkg-section au-qld" id={q.id} aria-labelledby={`${q.id}-h`}>
      <div className="pkg-container">
        <div className="pkg-section__head asia-head--center">
          <p className="asia-eyebrow">{q.eyebrow}</p>
          <h2 id={`${q.id}-h`} className="pkg-h2 us-h2--xl">{q.title}</h2>
          <p className="pkg-lede">{q.intro}</p>
        </div>

        <div className="au-qld__split">
          {q.panels.map((p, i) => {
            const img = australiaImage(p.image);
            return (
              <Reveal key={p.id} className={`au-qld__panel au-qld__panel--${i + 1}`}>
                <div className="au-qld__media" aria-hidden="true">
                  <SafeImage src={img?.src} alt="" sizes="(min-width: 1024px) 50vw, 100vw" className="asia-media__img" />
                </div>
                <div className="au-qld__body">
                  <p className="au-qld__tag">{p.tagline}</p>
                  <h3 className="au-qld__title">{p.title}</h3>
                  <ul className="au-qld__focus">
                    {p.focus.map((f) => (
                      <li key={f}><Check size={14} aria-hidden="true" /> {f}</li>
                    ))}
                  </ul>
                  <ul className="au-qld__dests" aria-label={`${p.title} destinations`}>
                    {p.destinations.map((id) => {
                      const d = australiaDestinationById(id);
                      return d ? (
                        <li key={id}>
                          <FilterButton filter={{ destination: id }} className="au-qld__dest">
                            {d.shortName ?? d.name}
                            <span className="pkg-sr"> packages</span>
                          </FilterButton>
                        </li>
                      ) : null;
                    })}
                  </ul>
                  <a href={p.sectionLink.href} className="au-qld__more">
                    {p.sectionLink.label} <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="us-note"><Info size={14} aria-hidden="true" /> {q.note}</p>

        <PackageRail id="qld-pkgs" title="Queensland packages" packages={pickPackages(q.packageIds)} />
      </div>
    </section>
  );
}

import { Info, Sparkles } from "lucide-react";
import { pickPackages } from "@/data/australia/packages";
import { sydneyFlagship as syd } from "@/data/australia/sections";
import Reveal from "../../Reveal";
import { FilterButton } from "./AustraliaFilterControls";
import PackageRail from "./PackageRail";
import SydneyLandmarks from "./SydneyLandmarks";

/** Flagship editorial split: landmark explorer + copy, packages and optional experiences. */
export default function SydneyCollection() {
  return (
    <section className="pkg-section us-story us-story--light us-story--flagship" id={syd.id} aria-labelledby={`${syd.id}-h`}>
      <div className="pkg-container">
        <div className="us-ny__grid">
          <Reveal className="us-ny__visual">
            <SydneyLandmarks landmarks={syd.landmarks} />
          </Reveal>
          <div className="us-story__copy">
            <p className="asia-eyebrow">{syd.eyebrow}</p>
            <h2 id={`${syd.id}-h`} className="pkg-h2 us-h2--xl">{syd.title}</h2>
            <p className="pkg-lede">{syd.intro}</p>
            <h3 className="us-story__h3">What you&apos;ll see</h3>
            <ul className="us-highlights">
              {syd.highlights.map((h) => (
                <li key={h}><Sparkles size={13} aria-hidden="true" /> {h}</li>
              ))}
            </ul>
            <FilterButton filter={{ destination: "sydney" }} className="pkg-btn asia-btn--navy au-story__go">
              See all Sydney packages
            </FilterButton>
          </div>
        </div>

        <PackageRail id="syd-pkgs" title="Sydney packages" packages={pickPackages(syd.packageIds)} />

        <div className="us-ext">
          <h3 className="us-ext__h">Optional Sydney experiences</h3>
          <ul className="us-ext__list">
            {syd.experiences.map((e) => (
              <li key={e.label}>
                <div className="us-ext__item au-ext__item">
                  <span className="au-ext__tag">{e.tag}</span>
                  <span className="us-ext__name">{e.label}</span>
                  <span className="us-ext__text">{e.text}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="us-note"><Info size={14} aria-hidden="true" /> {syd.note}</p>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Info, Sparkles } from "lucide-react";
import { pickPackages } from "@/data/usa/packages";
import { newYorkFlagship as ny } from "@/data/usa/sections";
import Reveal from "../../Reveal";
import NewYorkLandmarks from "./NewYorkLandmarks";
import PackageRail from "./PackageRail";
import { FilterButton } from "./USAFilterControls";

/** Flagship editorial split: landmark explorer + copy, packages, and optional extensions. */
export default function NewYorkExperience() {
  return (
    <section className="pkg-section us-story us-story--light us-story--flagship" id={ny.id} aria-labelledby={`${ny.id}-h`}>
      <div className="pkg-container">
        <div className="us-ny__grid">
          <Reveal className="us-ny__visual">
            <NewYorkLandmarks landmarks={ny.landmarks} />
          </Reveal>
          <div className="us-story__copy">
            <p className="asia-eyebrow">{ny.eyebrow}</p>
            <h2 id={`${ny.id}-h`} className="pkg-h2 us-h2--xl">{ny.title}</h2>
            <p className="pkg-lede">{ny.intro}</p>
            <h3 className="us-story__h3">What you&apos;ll see</h3>
            <ul className="us-highlights">
              {ny.highlights.map((h) => (
                <li key={h}><Sparkles size={13} aria-hidden="true" /> {h}</li>
              ))}
            </ul>
            <p className="us-note"><Info size={14} aria-hidden="true" /> {ny.note}</p>
          </div>
        </div>

        <PackageRail id="ny-pkgs" title="New York packages" packages={pickPackages(ny.packageIds)} />

        <div className="us-ext">
          <h3 className="us-ext__h">Optional extensions from New York</h3>
          <ul className="us-ext__list">
            {ny.extensions.map((e) => (
              <li key={e.label}>
                <FilterButton filter={{ destination: e.destinationId }} className="us-ext__item">
                  <span className="us-ext__name">{e.label}</span>
                  <span className="us-ext__text">{e.text}</span>
                  <span className="us-ext__go">See packages <ArrowRight size={14} aria-hidden="true" /></span>
                </FilterButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

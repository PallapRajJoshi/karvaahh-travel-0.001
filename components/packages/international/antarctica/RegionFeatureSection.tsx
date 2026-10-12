import { Info } from "lucide-react";
import { featureRegions, type FeatureRegionContent } from "@/data/antarctica/experiences";
import { WILDLIFE_DISCLAIMER } from "@/data/antarctica/wildlife";
import Reveal from "../../Reveal";
import { ExpeditionRail } from "./AntarcticaPackageGrid";
import PolarIcon from "./PolarIcon";
import PolarMedia from "./PolarMedia";
import SectionHead from "./SectionHead";

/**
 * Shared layout for the island regions: photo triptych, highlight grid,
 * possible wildlife and the expedition templates that visit the region.
 * Tone switches between light, sand and a dark cinematic treatment.
 */
export default function RegionFeatureSection({ c }: { c: FeatureRegionContent }) {
  const dark = c.tone === "dark";
  return (
    <section
      className={`pkg-section an-region an-region--${c.tone}${c.tone === "sand" ? " pkg-section--sand" : ""}`}
      id={c.id}
      aria-labelledby={`${c.id}-h`}
    >
      <div className="pkg-container">
        <div className="an-region__layout">
          <div className="an-region__copy">
            <SectionHead id={`${c.id}-h`} eyebrow={c.eyebrow} title={c.title} lede={c.lede} light={dark} />
            <ul className="an-region__highlights">
              {c.highlights.map((h) => (
                <li key={h.id}>
                  <span className="an-region__icon"><PolarIcon name={h.icon} size={18} /></span>
                  <div>
                    <h3>{h.title}</h3>
                    <p>{h.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Reveal className="an-region__photos">
            {c.images.map((id, i) => (
              <div key={id} className={`an-region__photo an-region__photo--${i}`}>
                <PolarMedia id={id} sizes="(min-width: 1024px) 30vw, 50vw" />
              </div>
            ))}
          </Reveal>
        </div>

        <div className="an-region__wild">
          <p className="an-region__wild-h">Possible encounters may include</p>
          <ul className="an-tags">{c.wildlife.map((w) => <li key={w}>{w}</li>)}</ul>
          <p className={`an-fine${dark ? " an-fine--light" : ""}`}>{WILDLIFE_DISCLAIMER}</p>
        </div>

        <ul className={`an-region__notes${dark ? " is-dark" : ""}`}>
          {c.notes.map((n) => (
            <li key={n}><Info size={15} aria-hidden="true" /> {n}</li>
          ))}
        </ul>

        <ExpeditionRail ids={c.expeditionIds} dark={dark} label={`Expeditions including ${c.eyebrow.split(" · ")[0]}`} />
      </div>
    </section>
  );
}

export const SouthShetlandSection = () => <RegionFeatureSection c={featureRegions["south-shetland"]} />;
export const SouthGeorgiaSection = () => <RegionFeatureSection c={featureRegions["south-georgia"]} />;
export const FalklandSection = () => <RegionFeatureSection c={featureRegions.falklands} />;

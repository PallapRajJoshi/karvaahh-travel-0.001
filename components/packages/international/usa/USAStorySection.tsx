import Image from "next/image";
import { ArrowRight, Check, Info, Sparkles } from "lucide-react";
import { circuitById } from "@/data/usa/circuits";
import { usaImage } from "@/data/usa/images";
import { pickPackages } from "@/data/usa/packages";
import type { StorySection } from "@/data/usa/sections";
import { journeyView } from "@/lib/usa/routes";
import Reveal from "../../Reveal";
import SafeImage from "../../SafeImage";
import DestMedia from "../asia/DestMedia";
import PackageRail from "./PackageRail";
import RouteJourney from "./RouteJourney";
import { FilterButton } from "./USAFilterControls";

const DARK = new Set<StorySection["tone"]>(["dark", "desert", "glacier", "ocean", "forest"]);
const SPOT_TONES: Record<StorySection["tone"], [string, string]> = {
  light: ["#0e1a33", "#2c4a7a"],
  sand: ["#3a2a1c", "#8c5a3a"],
  dark: ["#0e1a33", "#2c4a7a"],
  desert: ["#3d1f14", "#b5622f"],
  ocean: ["#073b4c", "#1fa39a"],
  glacier: ["#0b1d33", "#3f7f9a"],
  forest: ["#1b2f2a", "#5b8a6a"],
};

/**
 * One layout for every regional story (East Coast, Niagara, Florida,
 * Southwest, California, Hawaii, Alaska, Midwest, Texas, Mountain States).
 * Content comes from data/usa/sections.ts. Tones and the split / immersive
 * layouts keep consecutive sections visually distinct.
 */
export default function USAStorySection({ config: c }: { config: StorySection }) {
  const dark = DARK.has(c.tone);
  const images = c.images.map((id) => usaImage(id)).filter((i) => !!i);
  const packages = pickPackages(c.packageIds);
  const journeys = (c.routeIds ?? []).map(circuitById).filter((x) => !!x).map((x) => journeyView(x));
  const h = `${c.id}-h`;
  const immersive = c.layout === "immersive" && images[0];

  return (
    <section className={`pkg-section us-story us-story--${c.tone} us-story--${c.layout}`} id={c.id} aria-labelledby={h}>
      {immersive && (
        <div className="us-story__bg" aria-hidden="true">
          <Image src={images[0].src} alt="" fill sizes="100vw" className="us-story__bg-img" />
          <span className="us-story__bg-scrim" />
        </div>
      )}
      <div className="pkg-container">
        <div className={`us-story__grid${immersive ? " us-story__grid--immersive" : ""}`}>
          {!immersive && images.length > 0 && (
            <Reveal className={`us-story__media us-story__media--${Math.min(images.length, 3)}`}>
              {images.slice(0, 3).map((img, i) => (
                <div key={img.src} className={`us-story__img us-story__img--${i + 1}`}>
                  <SafeImage
                    src={img.src}
                    alt={img.alt}
                    sizes={i === 0 ? "(min-width: 1024px) 45vw, 92vw" : "(min-width: 1024px) 22vw, 45vw"}
                    className="asia-media__img"
                  />
                </div>
              ))}
            </Reveal>
          )}

          <div className={`us-story__copy${immersive ? " us-story__copy--glass" : ""}`}>
            <p className={`asia-eyebrow${dark ? " asia-eyebrow--light" : ""}`}>{c.eyebrow}</p>
            <h2 id={h} className={`pkg-h2${dark ? " pkg-h2--light" : ""}`}>{c.title}</h2>
            <p className={`pkg-lede${dark ? " pkg-lede--light" : ""}`}>{c.intro}</p>
            <h3 className="us-story__h3">{c.highlightsTitle}</h3>
            <ul className="us-highlights">
              {c.highlights.map((x) => (
                <li key={x}><Sparkles size={13} aria-hidden="true" /> {x}</li>
              ))}
            </ul>
            {c.callout && (
              <div className="us-callout">
                <p className="us-callout__title">{c.callout.title}</p>
                <p>{c.callout.text}</p>
              </div>
            )}
            {c.notes?.map((n) => (
              <p key={n} className="us-note"><Info size={14} aria-hidden="true" /> {n}</p>
            ))}
          </div>
        </div>

        {c.spotlights && (
          <div className="us-spots">
            {c.spotlightsTitle && <h3 className="us-rail__h">{c.spotlightsTitle}</h3>}
            <ul className={`us-spots__grid us-spots__grid--${Math.min(c.spotlights.length, 5)}`}>
              {c.spotlights.map((sp, i) => (
                <li key={sp.title} style={{ "--i": i } as React.CSSProperties}>
                  <Reveal className="us-spot">
                    <span className="us-spot__media">
                      <DestMedia image={usaImage(sp.image)} label={sp.title} tone={SPOT_TONES[c.tone]} sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 80vw" />
                    </span>
                    <span className="us-spot__body">
                      {sp.tag && <span className="us-spot__tag">{sp.tag}</span>}
                      <span className="us-spot__title">{sp.title}</span>
                      <span className="us-spot__text">{sp.text}</span>
                      {sp.points && (
                        <span className="us-spot__points">
                          {sp.points.map((pt) => (
                            <span key={pt}><Check size={13} aria-hidden="true" /> {pt}</span>
                          ))}
                        </span>
                      )}
                      {sp.destinationId && (
                        <FilterButton filter={{ destination: sp.destinationId }} className="us-spot__go">
                          View packages <ArrowRight size={14} aria-hidden="true" />
                          <span className="pkg-sr"> for {sp.title}</span>
                        </FilterButton>
                      )}
                    </span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        )}

        {journeys.length > 0 && (
          <div className="us-story__routes">
            {c.routesTitle && <h3 className="us-rail__h">{c.routesTitle}</h3>}
            <RouteJourney journeys={journeys} label={c.routesTitle ?? `${c.title} routes`} tone={dark ? "dark" : "light"} />
          </div>
        )}

        <PackageRail id={`${c.id}-pkgs`} title={c.packagesTitle} packages={packages} dark={dark} />
      </div>
    </section>
  );
}

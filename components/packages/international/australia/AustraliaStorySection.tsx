import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, Check, Info, Sparkles, TriangleAlert } from "lucide-react";
import { circuitById } from "@/data/australia/circuits";
import { australiaImage } from "@/data/australia/images";
import { pickPackages } from "@/data/australia/packages";
import type { StorySection, StoryTone } from "@/data/australia/sections";
import { journeyView } from "@/lib/australia/routes";
import Reveal from "../../Reveal";
import SafeImage from "../../SafeImage";
import DestMedia from "../asia/DestMedia";
import { FilterButton } from "./AustraliaFilterControls";
import PackageRail from "./PackageRail";
import RouteJourney from "./RouteJourney";

const DARK = new Set<StoryTone>(["dark", "desert", "ocean", "forest", "dusk", "wine"]);
const SPOT_TONES: Record<StoryTone, [string, string]> = {
  light: ["#0b2530", "#2f6f8f"],
  sand: ["#3a2a1c", "#8c5a3a"],
  dark: ["#0b2530", "#2f6f8f"],
  desert: ["#3a1a0f", "#b4532a"],
  ocean: ["#063b44", "#1e9b98"],
  forest: ["#14281f", "#4e7a5c"],
  dusk: ["#26203a", "#c46a3a"],
  wine: ["#2e1a1f", "#8a3b45"],
};

/**
 * One layout for the regional stories (Melbourne + Victoria, Gold Coast,
 * Western Australia, South Australia, Tasmania, Outback). Content comes from
 * data/australia/sections.ts. Tones and the split / immersive layouts keep
 * consecutive sections visually distinct. `children` adds a feature block
 * (e.g. Uluru through the day) under the intro.
 */
export default function AustraliaStorySection({ config: c, children }: { config: StorySection; children?: ReactNode }) {
  const dark = DARK.has(c.tone);
  const images = c.images.map((id) => australiaImage(id)).filter((i) => !!i);
  const packages = pickPackages(c.packageIds);
  const journeys = (c.routeIds ?? []).map(circuitById).filter((x) => !!x).map((x) => journeyView(x));
  const h = `${c.id}-h`;
  const immersive = c.layout === "immersive" && images[0];

  return (
    <section className={`pkg-section us-story us-story--${c.tone} us-story--${c.layout} au-story au-story--${c.tone}${dark ? " au-story--ondark" : ""}`} id={c.id} aria-labelledby={h}>
      {immersive && (
        <div className="us-story__bg au-story__bg" aria-hidden="true">
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
            {c.pillars && (
              <ul className="au-pillars" aria-label="Known for">
                {c.pillars.map((p, i) => (
                  <li key={p} style={{ "--i": i } as React.CSSProperties}>{p}</li>
                ))}
              </ul>
            )}
            <h3 className="us-story__h3">{c.highlightsTitle}</h3>
            <ul className="us-highlights">
              {c.highlights.map((x) => (
                <li key={x}><Sparkles size={13} aria-hidden="true" /> {x}</li>
              ))}
            </ul>
            {c.callout && (
              <div className="us-callout au-callout">
                <p className="us-callout__title"><TriangleAlert size={16} aria-hidden="true" /> {c.callout.title}</p>
                <p>{c.callout.text}</p>
                {c.callout.points && (
                  <ul className="au-callout__points">
                    {c.callout.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            {c.notes?.map((n) => (
              <p key={n} className="us-note"><Info size={14} aria-hidden="true" /> {n}</p>
            ))}
          </div>
        </div>

        {children}

        {c.spotlights && (
          <div className="us-spots">
            {c.spotlightsTitle && <h3 className={`us-rail__h${dark ? " us-rail__h--light" : ""}`}>{c.spotlightsTitle}</h3>}
            <ul className={`us-spots__grid us-spots__grid--${Math.min(c.spotlights.length, 5)}`}>
              {c.spotlights.map((sp, i) => (
                <li key={sp.title} style={{ "--i": i } as React.CSSProperties}>
                  <Reveal className={`us-spot${sp.image ? "" : " au-spot--text"}`}>
                    {sp.image && (
                      <span className="us-spot__media">
                        <DestMedia image={australiaImage(sp.image)} label={sp.title} tone={SPOT_TONES[c.tone]} sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 80vw" />
                      </span>
                    )}
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
            {c.routesTitle && <h3 className={`us-rail__h${dark ? " us-rail__h--light" : ""}`}>{c.routesTitle}</h3>}
            <RouteJourney journeys={journeys} label={c.routesTitle ?? `${c.title} routes`} tone={dark ? "dark" : "light"} />
          </div>
        )}

        <PackageRail id={`${c.id}-pkgs`} title={c.packagesTitle} packages={packages} dark={dark} />
      </div>
    </section>
  );
}

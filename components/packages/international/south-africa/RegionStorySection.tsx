import type { ReactNode } from "react";
import { Info, Ticket } from "lucide-react";
import { TICKETS_NOTE, storySections, type StorySection } from "@/data/south-africa/sections";
import Reveal from "../../Reveal";
import { PackageRail } from "./SouthAfricaPackageGrid";
import { ZaIcon, ZaMedia } from "./ZaPrimitives";
import ZaRouteLine from "./ZaRouteLine";
import BigFiveStrip from "./BigFiveStrip";

/**
 * One data-driven layout for every region. `layout` changes the
 * composition (flagship mosaic, split, journey route, paired cities) and
 * `tone` the palette, so consecutive regions never look the same.
 */
export default function RegionStorySection({ s, children }: { s: StorySection; children?: ReactNode }) {
  const dark = s.tone === "dark" || s.tone === "earth";
  const headId = `${s.id}-h`;

  const head = (
    <div className="za-story__head">
      <p className={`asia-eyebrow${dark ? " asia-eyebrow--light" : ""}`}>{s.eyebrow}</p>
      <h2 id={headId} className={`za-story__title${dark ? " is-light" : ""}`}>
        {s.title}
        {s.titleAccent && <em>{s.titleAccent}</em>}
      </h2>
      <p className={`pkg-lede${dark ? " pkg-lede--light" : ""}`}>{s.lede}</p>
      {s.facts && (
        <dl className="za-story__facts">
          {s.facts.map((f) => <div key={f.k}><dt>{f.k}</dt><dd>{f.v}</dd></div>)}
        </dl>
      )}
    </div>
  );

  const highlights = s.highlights.length > 0 && (
    <ul className={`za-story__highlights${s.layout === "flagship" ? " is-wide" : ""}`}>
      {s.highlights.map((h) => (
        <li key={h.id} className={h.image ? "has-image" : undefined}>
          {h.image ? (
            <figure className="za-story__hl-photo">
              <ZaMedia id={h.image} decorative sizes="(min-width: 1024px) 25vw, 50vw" />
              <figcaption><strong>{h.title}</strong><span>{h.text}</span></figcaption>
            </figure>
          ) : (
            <div className="za-story__hl">
              <span className="za-story__icon"><ZaIcon name={h.icon} size={18} /></span>
              <div><strong>{h.title}</strong><span>{h.text}</span></div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <section className={`pkg-section za-story za-story--${s.tone} za-story--${s.layout}`} id={s.id} aria-labelledby={headId}>
      <div className="pkg-container">
        {s.layout === "flagship" && (
          <>
            <div className="za-story__flag">
              {head}
              <Reveal className="za-story__mosaic">
                {s.images.slice(0, 5).map((id, i) => (
                  <div key={id} className={`za-story__tile za-story__tile--${i}`}><ZaMedia id={id} sizes="(min-width: 1024px) 30vw, 50vw" /></div>
                ))}
              </Reveal>
            </div>
            {highlights}
          </>
        )}

        {(s.layout === "split" || s.layout === "split-reverse" || s.layout === "route") && (
          <>
            <div className="za-story__split">
              {head}
              <Reveal className="za-story__stack">
                {s.images.slice(0, 3).map((id, i) => (
                  <div key={id} className={`za-story__shot za-story__shot--${i}`}><ZaMedia id={id} sizes="(min-width: 1024px) 40vw, 90vw" /></div>
                ))}
              </Reveal>
            </div>
            {s.route && <ZaRouteLine stops={s.route} light={dark} label={`${s.title} route`} />}
            {highlights}
          </>
        )}

        {s.layout === "pair" && (
          <>
            {head}
            <div className="za-story__pair">
              {s.pair?.map((p) => (
                <article key={p.title} className="za-story__pair-card">
                  <div className="za-story__pair-media"><ZaMedia id={p.image} sizes="(min-width: 900px) 45vw, 100vw" /></div>
                  <div className="za-story__pair-body">
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <ul className="za-list">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {children}

        {s.extras && (
          <div className={`za-story__extras${dark ? " is-dark" : ""}`}>
            <p className="za-story__extras-h"><Ticket size={16} aria-hidden="true" /> Optional experiences</p>
            <ul className="za-tags">{s.extras.map((x) => <li key={x.title}>{x.title}{x.note ? ` · ${x.note}` : ""}</li>)}</ul>
            <p className={`za-fine${dark ? " za-fine--light" : ""}`}>{TICKETS_NOTE}</p>
          </div>
        )}

        {s.notes && (
          <ul className={`za-story__notes${dark ? " is-dark" : ""}`}>
            {s.notes.map((n) => <li key={n}><Info size={15} aria-hidden="true" /> {n}</li>)}
          </ul>
        )}

        <div className="za-story__pkgs">
          <p className={`za-story__pkgs-h${dark ? " is-light" : ""}`}>Customizable {s.title} packages</p>
          <PackageRail ids={s.packageIds} dark={dark} label={`${s.title} packages`} />
        </div>
      </div>
    </section>
  );
}

const S = storySections;
export const CapeTownSection = () => <RegionStorySection s={S["cape-town"]} />;
export const CapeWinelandsSection = () => <RegionStorySection s={S.winelands} />;
export const HermanusSection = () => <RegionStorySection s={S.hermanus} />;
export const KrugerSafariSection = () => (
  <RegionStorySection s={S.kruger}>
    <BigFiveStrip />
  </RegionStorySection>
);
export const SabiSandSection = () => <RegionStorySection s={S["sabi-sand"]} />;
export const PanoramaRouteSection = () => <RegionStorySection s={S.panorama} />;
/** Johannesburg and Pretoria share one paired section. */
export const JohannesburgSection = () => <RegionStorySection s={S.johannesburg} />;
/** Sun City and Pilanesberg share one paired section. */
export const SunCitySection = () => <RegionStorySection s={S["sun-city"]} />;
export const GardenRouteSection = () => <RegionStorySection s={S["garden-route"]} />;
export const AddoSection = () => <RegionStorySection s={S.addo} />;
export const DurbanSection = () => <RegionStorySection s={S.durban} />;
export const DrakensbergSection = () => <RegionStorySection s={S.drakensberg} />;
export const NorthernCapeSection = () => <RegionStorySection s={S["northern-cape"]} />;

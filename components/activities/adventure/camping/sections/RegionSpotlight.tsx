import SectionHeading from "../shared/SectionHeading";
import CampImage from "../shared/CampImage";
import PlaceList from "../shared/PlaceList";
import Counter from "../shared/Counter";
import { IconInfo, IconMountain } from "../shared/Icons";
import type { RegionSpotlight as Spotlight } from "@/data/campingContent";
import "./RegionSpotlight.css";

type Props = { region: Spotlight; reverse?: boolean };

const LIGHT_THEMES = new Set(["snow"]);

function RouteLine({ stops }: { stops: string[] }) {
  return (
    <div className="cmp-route" data-draw>
      <span className="cmp-route__line" aria-hidden="true" />
      <ol className="cmp-route__list" aria-label="Suggested route order">
      {stops.map((s, i) => (
        <li key={s} className="cmp-route__stop" style={{ ["--i" as string]: i }}>
          <span className="cmp-route__num" aria-hidden="true">{i + 1}</span>
          <span className="cmp-route__name">{s}</span>
        </li>
      ))}
      </ol>
    </div>
  );
}

function Waypoints({ stops }: { stops: string[] }) {
  return (
    <ol className="cmp-waypoints" data-draw aria-label="Approach route">
      {stops.map((s, i) => (
        <li key={s} style={{ ["--i" as string]: i }}>
          <span className="cmp-waypoints__mark" aria-hidden="true" />
          <span>{s}</span>
        </li>
      ))}
    </ol>
  );
}

function AltitudeGauge({ from, to, label }: { from: number; to: number; label: string }) {
  return (
    <div className="cmp-alt" data-draw>
      <p className="cmp-alt__label"><IconMountain size={16} /> {label}</p>
      <div className="cmp-alt__row">
        <div className="cmp-alt__bar" aria-hidden="true"><span /></div>
        <div className="cmp-alt__values">
          <p className="cmp-alt__to"><Counter from={from} to={to} duration={2200} />m+</p>
          <p className="cmp-alt__from">from {from.toLocaleString("en-IN")}m</p>
        </div>
      </div>
      <p className="sr-only">Altitude rises from {from} metres to over {to} metres.</p>
    </div>
  );
}

export default function RegionSpotlight({ region, reverse = false }: Props) {
  const light = LIGHT_THEMES.has(region.theme);
  const tone = light ? "dark" : "light";
  const showGroups = !(region.visual === "expedition" && region.route);

  return (
    <section
      id={region.id}
      className={`cmp-spot cmp-spot--${region.theme} cmp-spot--${region.visual} ${reverse ? "cmp-spot--reverse" : ""}`}
      aria-labelledby={`cmp-spot-${region.id}`}
    >
      {region.visual === "expedition" && <span className="cmp-spot__contours" aria-hidden="true" />}
      <div className="cmp-container cmp-spot__grid">
        <div className="cmp-spot__media">
          <div className="cmp-spot__photo" data-reveal>
            <div className="cmp-spot__photo-inner" data-parallax="0.08">
              <CampImage src={region.image} alt={region.imageAlt} tone={region.tone} loading="lazy" sizes="(max-width: 960px) 92vw, 44vw" />
            </div>
            {region.visual === "altitude" && region.altitude && (
              <div className="cmp-spot__overlay"><AltitudeGauge {...region.altitude} /></div>
            )}
          </div>
        </div>

        <div className="cmp-spot__copy">
          <SectionHeading id={`cmp-spot-${region.id}`} tone={tone} kicker={region.kicker} title={region.heading} lead={region.intro} />

          {region.visual === "route" && region.route && <RouteLine stops={region.route} />}
          {region.visual === "expedition" && region.route && <Waypoints stops={region.route} />}

          {showGroups && (
            <div className={`cmp-spot__groups ${region.visual === "split" ? "cmp-spot__groups--split" : ""} ${region.visual === "vertical" ? "cmp-spot__groups--timeline" : ""}`}>
              {region.groups.map((g, i) => (
                <div className="cmp-spot__group" key={g.title ?? i} data-reveal style={{ ["--d" as string]: `${i * 120}ms` }}>
                  {g.title && <h3 className="cmp-spot__group-title">{g.title}</h3>}
                  <PlaceList places={g.places} tone={tone} label={g.title ?? `${region.kicker} places`} />
                </div>
              ))}
            </div>
          )}

          {region.note && (
            <p className={`cmp-note ${light ? "" : "cmp-note--light"}`}>
              <IconInfo size={16} /> {region.note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

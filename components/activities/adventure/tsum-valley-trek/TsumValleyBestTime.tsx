import { SEASONS, SEASON_NOTE } from "@/data/destinations/tsum-valley/content";
import type { TsumSeason } from "@/data/destinations/tsum-valley/types";
import SectionHeading from "./shared/SectionHeading";
import Reveal from "./shared/Reveal";
import { Info, Leaf, Rain, Snow, Sun } from "./shared/Icons";
import "./TsumValleyBestTime.css";

const ICONS: Record<TsumSeason["id"], typeof Sun> = {
  spring: Leaf,
  autumn: Sun,
  winter: Snow,
  monsoon: Rain,
};

const RATING_LABEL: Record<TsumSeason["rating"], string> = {
  recommended: "Recommended",
  good: "Good",
  challenging: "Challenging",
};

/** Month strip — which months each season covers (Jan = 0). */
const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const MONTH_SEASON: TsumSeason["id"][] = ["winter", "winter", "spring", "spring", "spring", "monsoon", "monsoon", "monsoon", "autumn", "autumn", "autumn", "winter"];
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function TsumValleyBestTime() {
  return (
    <section className="tsum-section tsum-section--tint tsum-season" id="best-time" aria-labelledby="tsum-season-title">
      <div className="tsum-container">
        <SectionHeading
          id="tsum-season-title"
          eyebrow="Seasons"
          title="When to Trek Tsum Valley"
          intro="Spring and autumn are the usual trekking windows, but every season has its own character — and its own challenges."
        />

        <ol className="tsum-season__months" aria-label="Trekking seasons by month">
          {MONTHS.map((m, i) => (
            <li key={i} className={`tsum-season__month tsum-season__month--${MONTH_SEASON[i]}`}>
              <span aria-hidden="true">{m}</span>
              <span className="tsum-sr-only">{MONTH_NAMES[i]}: {MONTH_SEASON[i]}</span>
            </li>
          ))}
        </ol>

        <div className="tsum-season__grid">
          {SEASONS.map((s, i) => {
            const Icon = ICONS[s.id];
            return (
              <Reveal as="article" key={s.id} className={`tsum-season__card tsum-season__card--${s.id}`} delay={i * 80}>
                <div className="tsum-season__top">
                  <span className="tsum-season__icon"><Icon /></span>
                  <span className={`tsum-season__badge tsum-season__badge--${s.rating}`}>{RATING_LABEL[s.rating]}</span>
                </div>
                <h3 className="tsum-season__name">{s.name}</h3>
                <p className="tsum-season__months-label">{s.months}</p>
                <p className="tsum-season__verdict">{s.verdict}</p>
                <ul className="tsum-season__points">
                  {s.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <p className="tsum-season__note" role="note">
          <Info aria-hidden="true" />
          {SEASON_NOTE}
        </p>
      </div>
    </section>
  );
}

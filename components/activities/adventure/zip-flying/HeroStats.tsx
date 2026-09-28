import type { HeroStat } from "./data/zipFlyingData";

/**
 * Three stats laid out as a descent: each block sits lower than the last,
 * joined by a cable running Sarangkot (top-left) → Hemja (bottom-right).
 * A single rider marker travels the cable once on load.
 */
export default function HeroStats({ stats }: { stats: HeroStat[] }) {
  return (
    <div className="zf-hstats">
      <div className="zf-hstats__cable" aria-hidden="true">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100" y2="100" />
          <line x1="0" y1="4" x2="100" y2="104" />
          <line x1="0" y1="-4" x2="100" y2="96" />
        </svg>
        <span className="zf-hstats__rider" />
      </div>
      <ul className="zf-hstats__list">
        {stats.map((s) => (
          <li key={s.label} className="zf-hstats__item">
            <p className="zf-hstats__value">
              {s.value}
              <span className="zf-hstats__unit"> {s.unit}</span>
            </p>
            <p className="zf-hstats__label">{s.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { profile } from "@/data/adventure/everest-three-passes-trek/itinerary";
import { ELEVATIONS_VERIFIED } from "@/data/adventure/everest-three-passes-trek/config";
import { num } from "@/data/adventure/everest-three-passes-trek/format";
import "./ElevationProfile.css";

const W = 1000;
const H = 320;
const PAD = { l: 56, r: 28, t: 58, b: 34 };
const Y_MIN = 2400;
const Y_MAX = 5800;
const GRID = [3000, 4000, 5000];
/** Labelled beyond the passes, to keep the chart legible. */
const LABELLED = new Set(["Lukla", "Namche", "Dingboche", "Gorak Shep", "Kala Patthar", "Gokyo", "Thame"]);

const x = (i: number) => PAD.l + (i / (profile.length - 1)) * (W - PAD.l - PAD.r);
const y = (m: number) => PAD.t + (1 - (m - Y_MIN) / (Y_MAX - Y_MIN)) * (H - PAD.t - PAD.b);

/**
 * Server-rendered SVG — zero JS. Horizontal axis is route sequence, not
 * distance, and the chart says so. Scrolls inside its own box on small screens.
 */
export default function ElevationProfile() {
  const line = profile.map((p, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(p.elevationM).toFixed(1)}`).join(" ");
  const area = `${line} L${x(profile.length - 1)} ${H - PAD.b} L${x(0)} ${H - PAD.b} Z`;
  const seen = new Set<string>();

  const summary = profile.map((p) => `${p.name} ${num(p.elevationM)} m`).join(", ");

  return (
    <figure className="etp-profile" data-reveal>
      <figcaption className="etp-profile__cap">
        <span className="etp-profile__title">Elevation profile</span>
        <span className="etp-profile__legend">
          <span className="etp-profile__key etp-profile__key--pass" aria-hidden="true" /> High pass
          <span className="etp-profile__key etp-profile__key--view" aria-hidden="true" /> Viewpoint / Base Camp
        </span>
      </figcaption>

      <div className="etp-profile__scroll" tabIndex={0} role="region" aria-label="Elevation profile chart, scrollable">
        <svg viewBox={`0 0 ${W} ${H}`} className="etp-profile__svg" role="img" aria-labelledby="etp-profile-desc">
          <desc id="etp-profile-desc">
            Approximate elevation along the Everest Three Passes route in trekking order: {summary}.
          </desc>
          <defs>
            <linearGradient id="etp-profile-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2a7f82" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#2a7f82" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {GRID.map((g) => (
            <g key={g} className="etp-profile__grid">
              <line x1={PAD.l} x2={W - PAD.r} y1={y(g)} y2={y(g)} />
              <text x={PAD.l - 10} y={y(g) + 4} textAnchor="end">
                {num(g)} m
              </text>
            </g>
          ))}

          <path d={area} fill="url(#etp-profile-fill)" />
          <path d={line} className="etp-profile__line" />

          {profile.map((p, i) => {
            const cx = x(i);
            const cy = y(p.elevationM);
            const isPass = p.kind === "pass";
            const isView = p.kind === "viewpoint" || p.kind === "camp";
            const key = `${p.name}-${i}`;
            // Label each named village once (Namche/Lukla appear twice).
            const labelVillage = LABELLED.has(p.name) && !seen.has(p.name) && (seen.add(p.name), true);

            return (
              <g key={key}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={isPass ? 7 : isView ? 5 : 3.5}
                  className={isPass ? "etp-profile__pt--pass" : isView ? "etp-profile__pt--view" : "etp-profile__pt"}
                >
                  <title>{`${p.name} · ${num(p.elevationM)} m`}</title>
                </circle>

                {isPass && (
                  <g className="etp-profile__passlabel">
                    <line x1={cx} x2={cx} y1={cy - 10} y2={cy - 22} />
                    <text x={cx} y={cy - 40} textAnchor="middle" className="etp-profile__passname">
                      {p.name}
                    </text>
                    <text x={cx} y={cy - 26} textAnchor="middle" className="etp-profile__passelev">
                      {num(p.elevationM)} m
                    </text>
                  </g>
                )}

                {p.name === "Kala Patthar" && (
                  <text x={cx + 10} y={cy - 12} className="etp-profile__label etp-profile__label--strong">
                    Kala Patthar
                  </text>
                )}
                {p.kind === "camp" && (
                  <text x={cx} y={cy + 20} textAnchor="middle" className="etp-profile__label etp-profile__label--strong">
                    EBC
                  </text>
                )}
                {labelVillage && p.name !== "Kala Patthar" && (
                  <text x={cx} y={cy + 20} textAnchor="middle" className="etp-profile__label">
                    {p.name}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <p className="etp-profile__note">
        {ELEVATIONS_VERIFIED ? "Elevations" : "Approximate elevations"} in route order — not drawn to distance. Your
        itinerary may differ.
      </p>
    </figure>
  );
}

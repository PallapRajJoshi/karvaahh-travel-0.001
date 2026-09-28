import { ALTITUDE_PROFILE } from "../../data/altitude";

const W = 800;
const H = 320;
const M = { top: 34, right: 28, bottom: 58, left: 70 };
const MIN = 1000;
const MAX = 6000;
const GRID = [2000, 3000, 4000, 5000, 6000];

const plotW = W - M.left - M.right;
const plotH = H - M.top - M.bottom;
const y = (m: number) => M.top + ((MAX - m) / (MAX - MIN)) * plotH;

/* Kathmandu sits apart: the unplotted road ascent gets a wider gap */
const FIRST_GAP = 190;
const step = (plotW - FIRST_GAP) / (ALTITUDE_PROFILE.length - 2);
const x = (i: number) => (i === 0 ? M.left + 26 : M.left + FIRST_GAP + (i - 1) * step);

const fmt = new Intl.NumberFormat("en-IN");
const pts = ALTITUDE_PROFILE.map((p, i) => ({ ...p, x: x(i), y: y(p.metres) }));
const solid = pts.slice(1);
const solidPath = solid.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
/* Label for the unplotted road ascent, set along the dashed segment */
const ascent = {
  x: (pts[0].x + pts[1].x) / 2,
  y: (pts[0].y + pts[1].y) / 2,
  angle: (Math.atan2(pts[1].y - pts[0].y, pts[1].x - pts[0].x) * 180) / Math.PI,
};
const areaPath = `${solidPath} L${solid[solid.length - 1].x.toFixed(1)} ${y(MIN)} L${solid[0].x.toFixed(1)} ${y(MIN)} Z`;

export default function AltitudeProfile() {
  return (
    <figure className="km-alt" data-reveal>
      <div className="km-alt__scroll" tabIndex={0} aria-label="Altitude profile chart, scrollable">
        <svg className="km-alt__svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="km-alt-title km-alt-desc">
          <title id="km-alt-title">Approximate altitude profile of the overland Yatra and the Kora</title>
          <desc id="km-alt-desc">
            Elevation rises from about 1,400 metres in Kathmandu to about 4,640 metres at Saga, stays near 4,600
            metres at Lake Mansarovar and Darchen, then climbs on the Kora to about 4,900 metres at Dirapuk and a
            high point of about 5,630 metres at Dolma La before descending to Zuthulpuk and Darchen.
          </desc>
          <defs>
            <linearGradient id="km-alt-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2e9a96" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#2e9a96" stopOpacity="0" />
            </linearGradient>
          </defs>

          {GRID.map((g) => (
            <g key={g} className="km-alt__grid">
              <line x1={M.left} x2={W - M.right} y1={y(g)} y2={y(g)} />
              <text x={M.left - 12} y={y(g) + 4} textAnchor="end">
                {fmt.format(g)} m
              </text>
            </g>
          ))}

          <line className="km-alt__base" x1={M.left} x2={W - M.right} y1={y(MIN)} y2={y(MIN)} />

          <path className="km-alt__area" d={areaPath} />
          <path
            className="km-alt__dashed"
            d={`M${pts[0].x} ${pts[0].y} L${pts[1].x} ${pts[1].y}`}
          />
          <text
            className="km-alt__note"
            x={ascent.x}
            y={ascent.y}
            dy={-9}
            textAnchor="middle"
            transform={`rotate(${ascent.angle.toFixed(1)} ${ascent.x.toFixed(1)} ${ascent.y.toFixed(1)})`}
          >
            road ascent via the border
          </text>
          <path className="km-alt__line km-alt__draw" d={solidPath} pathLength={1} />

          {pts.map((p, i) => (
            <g key={`${p.place}-${i}`} className={`km-alt__pt ${p.highlight ? "is-high" : ""}`}>
              <circle cx={p.x} cy={p.y} r={p.highlight ? 6 : 4.5} />
              <text
                className="km-alt__value"
                x={i === 0 ? p.x + 12 : p.x}
                y={i === 0 ? p.y + 5 : p.y - 14}
                textAnchor={i === 0 ? "start" : "middle"}
              >
                {fmt.format(p.metres)}
              </text>
              <text className="km-alt__place" x={p.x} y={y(MIN) + 24} textAnchor="middle">
                {p.place}
              </text>
            </g>
          ))}

          <text className="km-alt__band" x={(pts[3].x + pts[7].x) / 2} y={y(MIN) + 52} textAnchor="middle">
            Kora
          </text>
          <line
            className="km-alt__band-line"
            x1={pts[3].x}
            x2={pts[7].x}
            y1={y(MIN) + 36}
            y2={y(MIN) + 36}
          />
        </svg>
      </div>
      <figcaption className="km-alt__caption">
        Approximate, commonly cited elevations in metres. Intermediate stops on the road ascent vary by route and
        are not plotted.
      </figcaption>
    </figure>
  );
}

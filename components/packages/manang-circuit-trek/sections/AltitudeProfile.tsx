import { formatMetres } from "../data/content";
import { itinerary } from "../data/itinerary";
import SectionHeading from "../SectionHeading";
import "./altitude-profile.css";

/*
 * Server-rendered SVG altitude profile. There is no client JS: hover and focus
 * tooltips are CSS, and each point links to its itinerary day. The table
 * below the chart is the accessible and no-CSS equivalent.
 */

const W = 1000;
const H = 380;
const PAD = { top: 44, right: 28, bottom: 46, left: 64 };
const Y_MAX = 6000;
const GRID = [1000, 2000, 3000, 4000, 5000];

const innerW = W - PAD.left - PAD.right;
const innerH = H - PAD.top - PAD.bottom;
const x = (i: number) => PAD.left + (innerW * i) / (itinerary.length - 1);
const y = (m: number) => PAD.top + innerH - (innerH * m) / Y_MAX;

const points = itinerary.map((d, i) => ({ ...d, cx: x(i), cy: y(d.sleepAltitude) }));
const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.cx.toFixed(1)},${p.cy.toFixed(1)}`).join(" ");
const areaPath = `${linePath} L${x(itinerary.length - 1).toFixed(1)},${y(0)} L${x(0)},${y(0)} Z`;

const highestSleep = Math.max(...itinerary.map((d) => d.sleepAltitude));
const nightsAbove4000 = itinerary.filter((d) => d.sleepAltitude >= 4000).length;
const peak = itinerary.reduce((a, d) => ((d.maxAltitude ?? 0) > (a.maxAltitude ?? 0) ? d : a));

/** Keep tooltips inside the viewBox near the edges. */
const TIP_W = 224;
const tipX = (cx: number) => Math.min(Math.max(cx - TIP_W / 2, PAD.left - 40), W - TIP_W - 4);

export default function AltitudeProfile() {
  return (
    <section id="altitude" className="mc-section mc-section--dark mc-alt" aria-labelledby="mc-alt-title">
      <div className="mc-container">
        <SectionHeading
          id="mc-alt-title"
          eyebrow="Altitude profile"
          title="Climb slowly, cross safely"
          intro="Each point is where you sleep. The gentle climb, the rest day in Manang and several nights near 4,000 m all prepare your body for Thorong La. Select any point to jump to that day."
        />

        <dl className="mc-alt__stats">
          <div>
            <dt>High point</dt>
            <dd>
              {formatMetres(peak.maxAltitude ?? 0)} <span>{peak.maxAltitudeLabel}</span>
            </dd>
          </div>
          <div>
            <dt>Highest night</dt>
            <dd>{formatMetres(highestSleep)}</dd>
          </div>
          <div>
            <dt>Nights at 4,000 m+</dt>
            <dd>{nightsAbove4000}</dd>
          </div>
          <div>
            <dt>Rest days</dt>
            <dd>{itinerary.filter((d) => d.flag === "acclimatise").length} in Manang</dd>
          </div>
        </dl>

        <figure className="mc-alt__figure">
          <ul className="mc-alt__legend" aria-hidden="true">
            <li>
              <span className="mc-alt__key mc-alt__key--line" /> Sleeping altitude
            </li>
            <li>
              <span className="mc-alt__key mc-alt__key--dash" /> Day&apos;s high point
            </li>
          </ul>

          <div className="mc-alt__scroll">
            <svg
              className="mc-alt__svg"
              viewBox={`0 0 ${W} ${H}`}
              role="img"
              aria-labelledby="mc-alt-svg-title mc-alt-svg-desc"
            >
              <title id="mc-alt-svg-title">Manang Circuit Trek altitude profile</title>
              <desc id="mc-alt-svg-desc">
                Sleeping altitude rises from 1,400 m in Kathmandu to 4,450 m at Thorong Phedi over twelve days,
                with day climbs to Tilicho Lake at 4,919 m and Thorong La at 5,416 m, then drops to 822 m in Pokhara.
                The same data is in the table below.
              </desc>

              <defs>
                <linearGradient id="mc-alt-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#c9a45c" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#c9a45c" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid + y labels */}
              <g className="mc-alt__grid" aria-hidden="true">
                {GRID.map((g) => (
                  <g key={g}>
                    <line x1={PAD.left} x2={W - PAD.right} y1={y(g)} y2={y(g)} />
                    <text x={PAD.left - 12} y={y(g) + 4} textAnchor="end">
                      {formatMetres(g)}
                    </text>
                  </g>
                ))}
                <line className="mc-alt__baseline" x1={PAD.left} x2={W - PAD.right} y1={y(0)} y2={y(0)} />
              </g>

              {/* Rest-day band */}
              {points
                .filter((p) => p.flag === "acclimatise")
                .map((p) => (
                  <g key={`rest-${p.day}`} className="mc-alt__rest" aria-hidden="true">
                    <rect x={p.cx - 18} y={PAD.top} width={36} height={innerH} rx={6} />
                    <text x={p.cx} y={PAD.top - 12} textAnchor="middle">
                      Rest day
                    </text>
                  </g>
                ))}

              <path d={areaPath} fill="url(#mc-alt-fill)" aria-hidden="true" />
              <path d={linePath} className="mc-alt__line" aria-hidden="true" />

              {/* Day excursions above the sleeping altitude */}
              {points
                .filter((p) => p.maxAltitude)
                .map((p) => {
                  const top = y(p.maxAltitude as number);
                  const labelled = p.flag === "pass" || p.flag === "lake";
                  return (
                    <g key={`ex-${p.day}`} className="mc-alt__excursion" aria-hidden="true">
                      <line x1={p.cx} x2={p.cx} y1={p.cy - 7} y2={top} />
                      <path d={`M${p.cx} ${top - 7} L${p.cx + 7} ${top + 5} L${p.cx - 7} ${top + 5} Z`} />
                      {labelled ? (
                        <text x={p.cx} y={top - 14} textAnchor="middle">
                          <tspan className="mc-alt__peak-name">{p.maxAltitudeLabel}</tspan>
                          <tspan dx="6">{formatMetres(p.maxAltitude as number)}</tspan>
                        </text>
                      ) : null}
                    </g>
                  );
                })}

              {/* X axis */}
              <g className="mc-alt__xaxis" aria-hidden="true">
                {points.map((p) => (
                  <text key={`x-${p.day}`} x={p.cx} y={H - PAD.bottom + 24} textAnchor="middle">
                    {p.day}
                  </text>
                ))}
                <text className="mc-alt__xtitle" x={PAD.left} y={H - 6}>
                  Day
                </text>
              </g>

              {/* Interactive points */}
              {points.map((p) => {
                const tx = tipX(p.cx);
                const ty = Math.max(p.cy - 76, 4);
                return (
                  <a
                    key={`pt-${p.day}`}
                    href={`#day-${p.day}`}
                    className="mc-alt__pt"
                    aria-label={`Day ${p.day}: ${p.title}. Sleep at ${p.overnight}, ${formatMetres(p.sleepAltitude)}`}
                  >
                    <circle className="mc-alt__hit" cx={p.cx} cy={p.cy} r={18} />
                    <circle className="mc-alt__dot" cx={p.cx} cy={p.cy} r={5.5} />
                    <g className="mc-alt__tip">
                      <rect x={tx} y={ty} width={TIP_W} height={56} rx={8} />
                      <text x={tx + 12} y={ty + 22} className="mc-alt__tip-k">
                        Day {p.day} · {p.overnight}
                      </text>
                      <text x={tx + 12} y={ty + 42} className="mc-alt__tip-v">
                        Sleep {formatMetres(p.sleepAltitude)}
                        {p.maxAltitude ? ` · high ${formatMetres(p.maxAltitude)}` : ""}
                      </text>
                    </g>
                  </a>
                );
              })}
            </svg>
          </div>

          <figcaption className="mc-alt__caption">
            Altitudes are approximate and for planning only. Your guide may adjust overnight stops to suit the group and conditions.
          </figcaption>
        </figure>

        <details className="mc-alt__table-wrap">
          <summary>View altitudes as a table</summary>
          <div className="mc-alt__table-scroll">
            <table className="mc-alt__table">
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Overnight</th>
                  <th scope="col">Sleeping altitude</th>
                  <th scope="col">Day&apos;s high point</th>
                </tr>
              </thead>
              <tbody>
                {itinerary.map((d) => (
                  <tr key={d.day}>
                    <td>{d.day}</td>
                    <td>{d.overnight}</td>
                    <td>{formatMetres(d.sleepAltitude)}</td>
                    <td>{d.maxAltitude ? `${formatMetres(d.maxAltitude)} (${d.maxAltitudeLabel})` : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </section>
  );
}

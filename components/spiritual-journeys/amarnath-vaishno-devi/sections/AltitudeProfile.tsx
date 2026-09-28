/**
 * The page's signature graphic: the two shrines on one elevation axis.
 * Vertical scale is true (0–4,000 m); horizontal distance is schematic.
 */
const Y0 = 270; // 0 m
const PX_PER_M = 0.06; // 4,000 m → y = 30
const y = (m: number) => Y0 - m * PX_PER_M;

const VAISHNO = { x: 180, m: 1580 };
const AMARNATH = { x: 505, m: 3888 };

const RIDGE =
  "M40,270 L40,255 C80,250 110,235 135,220 C155,205 165,182 180,175.2 C195,170 210,190 230,212 " +
  "C255,235 280,242 305,238 C335,232 352,200 375,168 L395,140 L410,150 L430,102 L448,116 L468,72 " +
  "L486,58 L505,36.7 L522,48 L540,26 L560,58 L585,86 L612,112 L640,128 L640,270 Z";

export function AltitudeProfile() {
  return (
    <figure className="avd-alt">
      <svg
        className="avd-alt__svg"
        viewBox="0 0 640 290"
        role="img"
        aria-labelledby="avd-alt-title avd-alt-desc"
      >
        <title id="avd-alt-title">Elevation of the two shrines</title>
        <desc id="avd-alt-desc">
          Mata Vaishno Devi stands at approximately 1,580 metres in the Trikuta Hills. Shri Amarnath Cave stands at
          approximately 3,888 metres in the high Himalayas — more than twice as high.
        </desc>
        <defs>
          <linearGradient id="avd-alt-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f4f1e8" />
            <stop offset="0.35" stopColor="#9fb3ad" />
            <stop offset="1" stopColor="#1d3529" />
          </linearGradient>
        </defs>

        {[1000, 2000, 3000, 4000].map((m) => (
          <g key={m} className="avd-alt__grid">
            <line x1="40" x2="640" y1={y(m)} y2={y(m)} />
            <text x="0" y={y(m) + 4}>{`${m.toLocaleString("en-IN")} m`}</text>
          </g>
        ))}

        <path d={RIDGE} fill="url(#avd-alt-fill)" />

        <g className="avd-alt__marker avd-alt__marker--vaishno">
          <circle cx={VAISHNO.x} cy={y(VAISHNO.m)} r="6" />
          <text x={VAISHNO.x} y={y(VAISHNO.m) - 34} textAnchor="middle" className="avd-alt__name">
            Vaishno Devi
          </text>
          <text x={VAISHNO.x} y={y(VAISHNO.m) - 16} textAnchor="middle">
            1,580 m
          </text>
        </g>

        <g className="avd-alt__marker avd-alt__marker--amarnath">
          <circle cx={AMARNATH.x} cy={y(AMARNATH.m)} r="6" />
          <text x="490" y="22" textAnchor="end" className="avd-alt__name">
            Amarnath Cave
          </text>
          <text x="490" y="40" textAnchor="end">
            3,888 m
          </text>
        </g>
      </svg>
      <figcaption className="avd-alt__caption">
        Approximate elevations. Height is to scale; distance between the shrines is not.
      </figcaption>
    </figure>
  );
}

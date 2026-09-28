/**
 * Schematic Kora map — pure SVG, driven entirely by `parikrama.map` data.
 * Not a geographic map: positions are editorial, and the caption says so.
 *
 * The loop is drawn as a closed Catmull-Rom spline through the waypoints;
 * each stage's highlight is the sub-spline between its waypoints, so the
 * highlighted segment always sits exactly on the base route.
 */
import type { MapWaypoint, ParikramaContent } from "../../types";

type Pt = { x: number; y: number };

/** Cubic-bezier path for the closed spline, from loop index `from` to `to` (inclusive, wrapping). */
function splinePath(loop: Pt[], from: number, to: number): string {
  const n = loop.length;
  const at = (i: number) => loop[((i % n) + n) % n];
  const steps = ((to - from + n) % n) || n;
  let d = `M ${at(from).x} ${at(from).y}`;
  for (let s = 0; s < steps; s++) {
    const i = from + s;
    const p0 = at(i - 1);
    const p1 = at(i);
    const p2 = at(i + 1);
    const p3 = at(i + 2);
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
    d += ` C ${c1.x.toFixed(2)} ${c1.y.toFixed(2)}, ${c2.x.toFixed(2)} ${c2.y.toFixed(2)}, ${p2.x} ${p2.y}`;
  }
  return d;
}

const markerRadius: Record<MapWaypoint["kind"], number> = {
  base: 2.6,
  monastery: 2.2,
  pass: 2.4,
  lake: 2,
  gate: 1.4,
};

interface KoraMapProps {
  map: ParikramaContent["map"];
  stages: ParikramaContent["stages"];
  activeId: string;
  onSelect: (stageId: string) => void;
}

export default function KoraMap({ map, stages, activeId, onSelect }: KoraMapProps) {
  const loop = map.waypoints;
  const indexOf = (id: string) => loop.findIndex((w) => w.id === id);
  const full = splinePath(loop, 0, 0);

  return (
    <figure className="km-kora-map">
      <svg viewBox="-14 -8 128 114" className="km-kora-map__svg" role="img" aria-labelledby="km-kora-map-title">
        <title id="km-kora-map-title">
          Schematic map of the clockwise Kailash Kora from Darchen via Dirapuk, Dolma La and Zuthulpuk
        </title>

        {/* Summit */}
        <g className="km-kora-map__summit" aria-hidden="true">
          <circle cx={map.summit.x} cy={map.summit.y} r="15" className="km-kora-map__halo" />
          <path
            d={`M ${map.summit.x - 10} ${map.summit.y + 6} L ${map.summit.x - 2} ${map.summit.y - 7} L ${map.summit.x + 1} ${map.summit.y - 3} L ${map.summit.x + 3} ${map.summit.y - 6} L ${map.summit.x + 10} ${map.summit.y + 6} Z`}
            className="km-kora-map__peak"
          />
          <path
            d={`M ${map.summit.x - 4.5} ${map.summit.y - 2} L ${map.summit.x - 2} ${map.summit.y - 7} L ${map.summit.x + 1} ${map.summit.y - 3} L ${map.summit.x - 0.5} ${map.summit.y - 1.5} Z`}
            className="km-kora-map__snow"
          />
          <text x={map.summit.x} y={map.summit.y + 12} textAnchor="middle" className="km-kora-map__summit-label">
            {map.summit.label}
          </text>
        </g>

        {/* Base route */}
        <path d={full} className="km-kora-map__route" />

        {/* Stage highlights */}
        {stages.map((s) => {
          const from = indexOf(s.mapSegment[0]);
          const to = indexOf(s.mapSegment[s.mapSegment.length - 1]);
          if (from < 0 || to < 0) return null;
          const active = s.id === activeId;
          return (
            <path
              key={s.id + (active ? "-on" : "")}
              d={splinePath(loop, from, to)}
              pathLength={1}
              className={`km-kora-map__stage${active ? " is-active" : ""}`}
            />
          );
        })}

        {/* Waypoints */}
        {loop
          .filter((w) => w.label)
          .map((w) => {
            const left = w.x < 50;
            return (
              <g key={w.id} className={`km-kora-map__pt km-kora-map__pt--${w.kind}`} aria-hidden="true">
                <circle cx={w.x} cy={w.y} r={markerRadius[w.kind]} />
                <text
                  x={w.x + (left ? -4 : 4)}
                  y={w.y + 1.2}
                  textAnchor={left ? "end" : "start"}
                  className="km-kora-map__label"
                >
                  {w.label}
                </text>
              </g>
            );
          })}

        {/* Direction cue */}
        <g aria-hidden="true" className="km-kora-map__dir">
          <path d="M 4 98 a 5 5 0 1 1 5 5" />
          <path d="M 7.2 101.4 L 9 103 L 7 104.6" />
          <text x="14" y="101">
            Clockwise
          </text>
        </g>
      </svg>

      {/* Stage selector (keyboard-accessible alternative to the map) */}
      <div className="km-kora-map__days" role="group" aria-label="Highlight a day on the map">
        {stages.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`km-kora-map__day${s.id === activeId ? " is-active" : ""}`}
            aria-pressed={s.id === activeId}
            onClick={() => onSelect(s.id)}
          >
            Day {s.day}
          </button>
        ))}
      </div>
      <figcaption className="km-kora-map__caption">{map.caption}</figcaption>
    </figure>
  );
}

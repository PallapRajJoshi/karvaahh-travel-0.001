import type { MapPoint, RouteMapConfig, RouteStage } from "@/data/india-pilgrimage/adi-kailash-om-parvat/types";
import { routeCopy } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";

/**
 * Schematic route map — no tiles, no API, no library.
 *
 * Why not Leaflet/OSM here: this corridor runs through a border area where
 * tile providers draw (and label) contested boundaries. A schematic keeps the
 * brand out of cartographic politics, costs ~0 KB, and still shows the real
 * relative positions of the stops (equirectangular projection of approximate
 * coordinates). Lines are SVG; markers and labels are HTML so text stays
 * crisp and readable at any width.
 */

interface Projected {
  x: number; // 0–100 (%)
  y: number; // 0–100 (%)
}

function buildProjection(points: MapPoint[], padding: { lat: number; lng: number }) {
  const lats = points.map((p) => p.lat);
  const lngs = points.map((p) => p.lng);
  const minLat = Math.min(...lats) - padding.lat;
  const maxLat = Math.max(...lats) + padding.lat;
  const minLng = Math.min(...lngs) - padding.lng;
  const maxLng = Math.max(...lngs) + padding.lng;
  const kx = Math.cos((((minLat + maxLat) / 2) * Math.PI) / 180);
  const width = (maxLng - minLng) * kx;
  const height = maxLat - minLat;

  return {
    aspect: width / height,
    project: (p: MapPoint): Projected => ({
      x: (((p.lng - minLng) * kx) / width) * 100,
      y: ((maxLat - p.lat) / height) * 100,
    }),
  };
}

interface RouteMapProps {
  stages: RouteStage[];
  config: RouteMapConfig;
  activeId: string;
  onSelect?: (id: string) => void;
}

export function RouteMap({ stages, config, activeId, onSelect }: RouteMapProps) {
  const plotted = stages.filter((s) => s.mapPoint);
  const allPoints = [...plotted.map((s) => s.mapPoint as MapPoint), ...config.landmarks.map((l) => l.point)];
  if (allPoints.length < 2) return null;

  const { aspect, project } = buildProjection(allPoints, config.padding);
  const order = new Map(stages.map((s, i) => [s.id, i]));
  const activeOrder = order.get(activeId) ?? 0;
  const byId = new Map(plotted.map((s) => [s.id, s]));

  // Unique segments from the configured path (A→B and B→A are the same).
  const seen = new Set<string>();
  const segments: { a: RouteStage; b: RouteStage; travelled: boolean }[] = [];
  for (let i = 0; i < config.path.length - 1; i++) {
    const a = byId.get(config.path[i]);
    const b = byId.get(config.path[i + 1]);
    if (!a || !b) continue;
    const key = [a.id, b.id].sort().join("|");
    if (seen.has(key)) continue;
    seen.add(key);
    const reach = Math.max(order.get(a.id) ?? 0, order.get(b.id) ?? 0);
    segments.push({ a, b, travelled: reach <= activeOrder });
  }

  // viewBox in "percent" units, scaled to keep the real aspect ratio.
  const vbW = 100 * aspect;
  const toVb = (p: Projected) => ({ x: (p.x / 100) * vbW, y: p.y });

  return (
    <figure className="akop-map">
      <div className="akop-map__canvas" style={{ aspectRatio: `${aspect}` }} role="img" aria-label={`${routeCopy.mapLabel}: ${plotted.map((s) => s.name).join(", ")}`}>
        <svg className="akop-map__svg" viewBox={`0 0 ${vbW} 100`} preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <defs>
            <pattern id="akop-map-dots" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.35" className="akop-map__dot" />
            </pattern>
          </defs>
          <rect width={vbW} height="100" fill="url(#akop-map-dots)" />

          {/* Soft "contour" rings around the sacred peaks — decorative. */}
          {config.landmarks
            .filter((l) => l.kind === "peak")
            .map((l) => {
              const c = toVb(project(l.point));
              return (
                <g key={l.id} className="akop-map__contours">
                  {[5, 9, 13].map((r) => (
                    <ellipse key={r} cx={c.x} cy={c.y} rx={r * 1.2} ry={r} />
                  ))}
                </g>
              );
            })}

          {segments.map(({ a, b, travelled }) => {
            const p1 = toVb(project(a.mapPoint as MapPoint));
            const p2 = toVb(project(b.mapPoint as MapPoint));
            return (
              <line
                key={`${a.id}-${b.id}`}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                className={`akop-map__segment${travelled ? " is-travelled" : ""}`}
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </svg>

        <div className="akop-map__layer" aria-hidden="true">
          {config.landmarks.map((l) => {
            const p = project(l.point);
            return (
              <span
                key={l.id}
                className={`akop-map__landmark akop-map__landmark--${l.kind} akop-map__label--${l.labelSide ?? "right"}`}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <span className="akop-map__landmark-mark" />
                <span className="akop-map__label">{l.name}</span>
              </span>
            );
          })}

          {plotted.map((s) => {
            const p = project(s.mapPoint as MapPoint);
            const i = order.get(s.id) ?? 0;
            const state = s.id === activeId ? " is-active" : i < activeOrder ? " is-past" : "";
            return (
              <button
                key={s.id}
                type="button"
                tabIndex={-1}
                className={`akop-map__stop akop-map__label--${s.labelSide ?? "right"}${state}`}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                onClick={onSelect ? () => onSelect(s.id) : undefined}
              >
                <span className="akop-map__stop-mark">{i + 1}</span>
                <span className="akop-map__label">{s.name.split(" / ")[0]}</span>
              </button>
            );
          })}

          <span className="akop-map__north">N</span>
        </div>
      </div>
      <figcaption className="akop-map__caption">{config.caption}</figcaption>
    </figure>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { KORA_NODES, KORA_STAGES } from "../../data/kora";

const CX = 200;
const CY = 200;
const R = 138;

function point(deg: number, radius = R) {
  const rad = (deg * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

function anchorFor(deg: number): "start" | "middle" | "end" {
  const c = Math.cos((deg * Math.PI) / 180);
  if (c > 0.3) return "start";
  if (c < -0.3) return "end";
  return "middle";
}

/** Clockwise chevron at a given angle (tangent for increasing angle on screen). */
function Chevron({ angle }: { angle: number }) {
  const p = point(angle);
  return (
    <path
      className="km-circuit__chevron"
      d="M-4 -5 L3 0 L-4 5"
      transform={`translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${angle + 90})`}
    />
  );
}

/**
 * Schematic Kora loop with stage list. The diagram follows the stage currently
 * being read (scroll-linked via IntersectionObserver). All stage content is in
 * the DOM at all times; the diagram is a visual companion and is aria-hidden
 * apart from its text description.
 */
export default function KoraCircuit() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list || !("IntersectionObserver" in window)) return;
    const items = Array.from(list.querySelectorAll<HTMLElement>("[data-stage]"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.stage));
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const stage = KORA_STAGES[active];
  const progress = (stage.progressAngle - 90) / 360;

  return (
    <div className="km-circuit">
      <figure className="km-circuit__figure" data-reveal>
        <svg
          className="km-circuit__svg"
          viewBox="-24 -8 448 416"
          role="img"
          aria-labelledby="km-circuit-desc"
        >
          <desc id="km-circuit-desc">
            Schematic diagram of the Kailash Kora: a clockwise loop around Mount Kailash starting and ending at
            Darchen in the south, passing Yamadwar, Dirapuk in the north-west, Dolma La Pass in the north-east at
            about 5,630 metres, and Zuthulpuk in the east.
          </desc>

          {/* North marker */}
          <g className="km-circuit__north" transform="translate(396 356)">
            <path d="M0 10 L0 -10 M-5 -4 L0 -10 L5 -4" />
            <text x="0" y="26" textAnchor="middle">
              N
            </text>
          </g>

          {/* Mountain glyph */}
          <g className="km-circuit__mountain">
            <path className="km-circuit__peak" d="M150 238 L184 186 L200 160 L216 186 L250 238 Z" />
            <path className="km-circuit__cap" d="M184 186 L200 160 L216 186 L208 182 L200 191 L192 182 Z" />
            <text x="200" y="262" textAnchor="middle" className="km-circuit__mountain-label">
              Mount Kailash
            </text>
          </g>

          {/* Base loop (drawn once on reveal) */}
          <circle
            className="km-circuit__loop km-circuit__draw"
            cx={CX}
            cy={CY}
            r={R}
            pathLength={1}
            transform={`rotate(90 ${CX} ${CY})`}
          />

          {/* Progress arc: from Darchen to the stage being read */}
          <circle
            className="km-circuit__progress"
            cx={CX}
            cy={CY}
            r={R}
            pathLength={1}
            strokeDasharray={`${progress} 1`}
            transform={`rotate(90 ${CX} ${CY})`}
          />

          <Chevron angle={180} />
          <Chevron angle={345} />

          {KORA_NODES.map((node) => {
            const p = point(node.angle);
            const lp = point(node.angle, R + 22);
            const anchor = anchorFor(node.angle);
            const isActive = stage.nodeId === node.id;
            const below = Math.sin((node.angle * Math.PI) / 180) > 0.6;
            const labelY = below ? lp.y + 8 : lp.y;
            return (
              <g
                key={node.id}
                className={[
                  "km-circuit__node",
                  node.highlight ? "is-high" : "",
                  isActive ? "is-active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <circle className="km-circuit__halo" cx={p.x} cy={p.y} r={16} />
                <circle className="km-circuit__dot" cx={p.x} cy={p.y} r={node.highlight ? 8 : 6.5} />
                <text x={lp.x} y={labelY} textAnchor={anchor} className="km-circuit__label">
                  {node.label}
                </text>
                {node.sublabel && (
                  <text x={lp.x} y={labelY + 15} textAnchor={anchor} className="km-circuit__sublabel">
                    {node.sublabel}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
        <figcaption className="km-circuit__caption">
          Schematic, not to scale. The route is walked clockwise by most pilgrims.
        </figcaption>
      </figure>

      <ol ref={listRef} className="km-circuit__stages">
        {KORA_STAGES.map((s, i) => (
          <li
            key={s.id}
            data-stage={i}
            className={[
              "km-stage",
              s.highlight ? "km-stage--high" : "",
              i === active ? "is-active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span className="km-stage__num" aria-hidden="true">
              {i + 1}
            </span>
            <div className="km-stage__body">
              <div className="km-stage__head">
                <h3 className="km-stage__name">{s.name}</h3>
                {s.elevation && <p className="km-stage__elev">{s.elevation}</p>}
              </div>
              <p className="km-stage__summary">{s.summary}</p>
              <dl className="km-stage__meta">
                <div>
                  <dt>Landscape</dt>
                  <dd>{s.landscape}</dd>
                </div>
                <div>
                  <dt>Physical challenge</dt>
                  <dd>{s.challenge}</dd>
                </div>
                {s.significance && (
                  <div>
                    <dt>Significance</dt>
                    <dd>{s.significance}</dd>
                  </div>
                )}
              </dl>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

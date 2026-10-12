"use client";

import { useId } from "react";
import { motion } from "motion/react";
import { saDestinationById } from "@/data/south-africa/destinations";
import { LAND, MAP_H, MAP_W, legPaths, project } from "@/lib/south-africa/map";

/** Small route map: the country outline with an animated route, legs drawn in sequence. */
export default function ZaMiniMap({ stops, flightLegs = [], label }: { stops: string[]; flightLegs?: number[]; label: string }) {
  const uid = useId();
  const pts = stops.map((id) => saDestinationById(id)).filter(Boolean).map((d) => project(d!.coords));
  const legs = legPaths(pts);
  const key = stops.join("-");

  return (
    <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="za-mini" role="img" aria-labelledby={`${uid}-t`} focusable="false">
      <title id={`${uid}-t`}>{label}</title>
      <path d={LAND.country} className="za-mini__land" />
      <path d={LAND.lesotho} className="za-mini__neighbour" />
      <path d={LAND.eswatini} className="za-mini__neighbour" />
      {legs.map((d, i) => (
        <motion.path
          key={`${key}-${i}`}
          d={d}
          className={`za-mini__route${flightLegs.includes(i) ? " is-flight" : ""}`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: i * 0.7, ease: "easeInOut" }}
        />
      ))}
      {pts.map(([x, y], i) => (
        <motion.g key={`${key}-p${i}`} initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.7, duration: 0.3 }} style={{ transformOrigin: `${x}px ${y}px` }}>
          <circle cx={x} cy={y} r={i === 0 || i === pts.length - 1 ? 13 : 10} className="za-mini__stop" />
          <text x={x} y={y + 5} textAnchor="middle" className="za-mini__n">{i + 1}</text>
        </motion.g>
      ))}
    </svg>
  );
}

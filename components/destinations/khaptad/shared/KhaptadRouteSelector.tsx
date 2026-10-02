"use client";

import { useState } from "react";
import type { StartingPoint } from "@/data/destinations/khaptad/khaptad-facts";

interface KhaptadRouteSelectorProps {
  startingPoints: StartingPoint[];
}

/**
 * Route-planning interface: selectable starting points. Deliberately does not
 * fabricate distances, durations, or fares — selecting a point surfaces a
 * disclaimer instead of invented figures, per the brief's accuracy constraints.
 */
export default function KhaptadRouteSelector({ startingPoints }: KhaptadRouteSelectorProps) {
  const [selectedId, setSelectedId] = useState<string>(startingPoints[0]?.id ?? "");
  const selected = startingPoints.find((point) => point.id === selectedId);

  return (
    <div className="khaptad-route-selector-wrap">
      <div className="khaptad-route-selector" role="group" aria-label="Choose a starting point">
        {startingPoints.map((point) => (
          <button
            key={point.id}
            type="button"
            className="khaptad-route-selector__chip"
            aria-pressed={selectedId === point.id}
            onClick={() => setSelectedId(point.id)}
          >
            {point.name}
          </button>
        ))}
      </div>
      {selected && (
        <p className="khaptad-route-selector__note">
          From <strong>{selected.name}</strong>: the appropriate route to Khaptad depends on current road
          conditions, park access points, and your selected trekking itinerary. Our travel team will confirm
          exact routing, transport, and timing when planning your trip.
        </p>
      )}
    </div>
  );
}

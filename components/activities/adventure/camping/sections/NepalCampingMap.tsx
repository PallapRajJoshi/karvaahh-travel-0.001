"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { MapRegion } from "@/data/campingContent";

type Props = {
  regions: MapRegion[];
  activeId: string | null;
  onSelect: (id: string) => void;
};

const NEPAL_BOUNDS: L.LatLngBoundsExpression = [[26.3, 80.0], [30.5, 88.3]];

/**
 * Leaflet + OpenStreetMap tiles (no API key). Loaded client-only via
 * next/dynamic from RegionExplorer, and only once the section is near
 * the viewport.
 */
export default function NepalCampingMap({ regions, activeId, onSelect }: Props) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const markers = useRef(new Map<string, L.Marker>());
  const selectRef = useRef(onSelect);
  selectRef.current = onSelect;

  useEffect(() => {
    if (!el.current || map.current) return;
    const m = L.map(el.current, {
      scrollWheelZoom: false,
      zoomSnap: 0.25,
      minZoom: 6,
      maxZoom: 11,
      maxBounds: [[25, 78.5], [31.8, 89.8]],
      attributionControl: true,
    });
    m.fitBounds(NEPAL_BOUNDS, { padding: [10, 10] });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      detectRetina: false,
      maxZoom: 11,
    }).addTo(m);

    regions.forEach((r) => {
      const icon = L.divIcon({
        className: "cmp-marker",
        html: `<span class="cmp-marker__pulse"></span><span class="cmp-marker__dot"></span><span class="cmp-marker__label">${r.name}</span>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });
      const mk = L.marker(r.coords, { icon, keyboard: true, title: r.name, alt: r.name })
        .addTo(m)
        .on("click", () => selectRef.current(r.id));
      markers.current.set(r.id, mk);
    });

    map.current = m;
    return () => { m.remove(); map.current = null; markers.current.clear(); };
  }, [regions]);

  useEffect(() => {
    const m = map.current;
    if (!m) return;
    markers.current.forEach((mk, id) => {
      mk.getElement()?.classList.toggle("is-active", id === activeId);
      mk.setZIndexOffset(id === activeId ? 1000 : 0);
    });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const region = regions.find((r) => r.id === activeId);
    if (region) {
      m.flyTo(region.coords, 8, { duration: reduce ? 0 : 1.1 });
    } else {
      m.flyToBounds(NEPAL_BOUNDS, { padding: [10, 10], duration: reduce ? 0 : 1.1 });
    }
  }, [activeId, regions]);

  return <div ref={el} className="cmp-map__canvas" role="region" aria-label="Map of camping regions in Nepal" />;
}

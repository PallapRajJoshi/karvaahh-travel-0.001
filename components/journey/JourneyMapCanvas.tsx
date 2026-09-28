'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import type { JourneyStop } from '@/data/journey/nepalJourney';
import { pointAtProgress, type JourneyRoute } from './geo';
import './JourneyMapCanvas.css';

/**
 * Imperative surface the scroll timeline drives. Everything here is a direct,
 * synchronous write — no React state per frame, no re-render per frame.
 */
export interface JourneyMapHandle {
  setCamera: (lat: number, lng: number, zoom: number) => void;
  setRouteProgress: (progress: number) => void;
  setActiveStop: (index: number) => void;
  invalidate: () => void;
}

interface JourneyMapCanvasProps {
  stops: JourneyStop[];
  route: JourneyRoute;
  /** Called once the map is live and safe to drive. */
  onReady: (handle: JourneyMapHandle) => void;
  /** Jump instead of easing, and skip the traveller dot. */
  reducedMotion: boolean;
}

/**
 * Standard OpenStreetMap raster — keyless, no account, no watermark.
 * CARTO's Positron endpoint now stamps "API KEY REQUIRED" across every tile,
 * so it is not usable without a token. The muted look is done in CSS instead
 * (see the .jm-tiles filter), which keeps the basemap swappable.
 *
 * osm.org's tile policy asks for low, non-commercial volume. Before this page
 * carries real traffic, move to a self-hosted or hosted vector/raster style —
 * OpenFreeMap and Protomaps are both keyless options, and self-hosting
 * openmaptiles removes the question entirely. Only TILE_URL changes.
 */
const TILE_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

export default function JourneyMapCanvas({
  stops,
  route,
  onReady,
  reducedMotion,
}: JourneyMapCanvasProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const map = L.map(container, {
      // Fractional zoom is what makes the camera glide rather than step.
      zoomSnap: 0,
      zoomDelta: 0.25,
      wheelPxPerZoomLevel: 240,
      zoomControl: false,
      attributionControl: true,
      // The map is a scroll-driven stage, not a toy: never steal the gesture.
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
      boxZoom: false,
      keyboard: false,
      tap: false,
      fadeAnimation: true,
      zoomAnimation: false,
      renderer: L.svg({ padding: 0.8 }),
    });

    map.setView([stops[0].lat, stops[0].lng], stops[0].zoom, { animate: false });
    map.attributionControl.setPrefix('');

    L.tileLayer(TILE_URL, {
      attribution: TILE_ATTRIBUTION,
      maxZoom: 19,
      // detectRetina doubles the zoom level and quadruples requests. osm.org's
      // usage policy asks us not to; the CSS filter softens the tiles anyway.
      detectRetina: false,
      className: 'jm-tiles',
    }).addTo(map);

    // Two lines: the whole itinerary sitting quiet underneath, and the
    // travelled portion drawn over it.
    const baseLine = L.polyline(route.path, {
      className: 'jm-route jm-route--base',
      interactive: false,
    }).addTo(map);

    const activeLine = L.polyline(route.path, {
      className: 'jm-route jm-route--active',
      interactive: false,
    }).addTo(map);

    const markers = stops.map((stop, index) =>
      L.marker([stop.lat, stop.lng], {
        interactive: false,
        keyboard: false,
        zIndexOffset: 400,
        icon: L.divIcon({
          className: 'jm-pin',
          iconSize: [30, 30],
          iconAnchor: [15, 15],
          html:
            '<span class="jm-pin__pulse" aria-hidden="true"></span>' +
            '<span class="jm-pin__ring" aria-hidden="true"></span>' +
            '<span class="jm-pin__dot" aria-hidden="true"></span>' +
            `<span class="jm-pin__label">${stop.name}</span>` +
            `<span class="jm-pin__index">${index + 1}</span>`,
        }),
      }).addTo(map),
    );

    const traveller = reducedMotion
      ? null
      : L.marker(route.path[0], {
          interactive: false,
          keyboard: false,
          zIndexOffset: 600,
          icon: L.divIcon({
            className: 'jm-traveller',
            iconSize: [18, 18],
            iconAnchor: [9, 9],
            html: '<span class="jm-traveller__core" aria-hidden="true"></span>',
          }),
        }).addTo(map);

    let progress = 0;
    let activeIndex = -1;

    const pathEl = (): SVGPathElement | null =>
      (activeLine as unknown as { _path?: SVGPathElement })._path ?? null;

    /**
     * Leaflet rebuilds the `d` attribute on every pan and zoom, which resets
     * the dash. Re-derive the offset from the current geometry each time
     * rather than caching a length that goes stale.
     */
    const applyDash = (): void => {
      const el = pathEl();
      if (!el) return;

      const length = el.getTotalLength();
      if (!length) return;

      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length * (1 - progress)}`;
      el.style.opacity = progress <= 0.0005 ? '0' : '1';
    };

    const positionTraveller = (): void => {
      if (!traveller) return;
      traveller.setLatLng(pointAtProgress(route, progress));
      const el = traveller.getElement();
      if (el) el.style.opacity = progress <= 0.004 || progress >= 0.998 ? '0' : '1';
    };

    map.on('zoomend moveend viewreset', applyDash);
    applyDash();

    const handle: JourneyMapHandle = {
      setCamera: (lat, lng, zoom) => {
        map.setView([lat, lng], zoom, { animate: false });
      },
      setRouteProgress: (next) => {
        progress = Math.min(Math.max(next, 0), 1);
        applyDash();
        positionTraveller();
      },
      setActiveStop: (index) => {
        if (index === activeIndex) return;
        activeIndex = index;
        markers.forEach((marker, i) => {
          const el = marker.getElement();
          if (!el) return;
          el.classList.toggle('jm-pin--active', i === index);
          el.classList.toggle('jm-pin--visited', i < index);
        });
      },
      invalidate: () => {
        map.invalidateSize({ animate: false });
        applyDash();
      },
    };

    // Container is sticky and its box changes on mobile browser chrome.
    const resizeObserver = new ResizeObserver(() => handle.invalidate());
    resizeObserver.observe(container);

    handle.setActiveStop(0);
    onReadyRef.current(handle);

    return () => {
      resizeObserver.disconnect();
      map.off('zoomend moveend viewreset', applyDash);
      map.remove();
    };
    // Route and stops are static for the lifetime of the page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  return (
    <div className="jm-map">
      <div ref={containerRef} className="jm-map__canvas" aria-hidden="true" />
      <div className="jm-map__veil" aria-hidden="true" />
      <div className="jm-map__grain" aria-hidden="true" />
    </div>
  );
}

// Exported so other maps on the site can share the same basemap and credit.
export { TILE_URL, TILE_ATTRIBUTION };

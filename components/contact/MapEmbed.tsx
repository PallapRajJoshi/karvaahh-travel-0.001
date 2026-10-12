"use client";

import { useState, type ReactNode } from "react";

type Props = {
  /** Allow-listed https embed URL from channels.ts, or null for placeholder-only. */
  embedUrl: string | null;
  /** The illustrated placeholder (server-rendered, passed as children). */
  children: ReactNode;
};

/**
 * Click-to-load map. The third-party frame (and its cookies / requests) is
 * only created after the visitor asks for it — good for privacy, the cookie
 * policy, and Core Web Vitals. With no embedUrl configured it just shows the
 * placeholder artwork.
 *
 * To enable: set `mapEmbedUrl` in lib/site-config.ts to the https "Embed a
 * map" URL from Google Maps (Share → Embed a map → copy the src value) or
 * OpenStreetMap (Share → HTML). No API key is needed for either.
 */
export function MapEmbed({ embedUrl, children }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="ct-map__stage">
      {children}
      {embedUrl && loaded ? (
        <iframe
          className="ct-map__frame"
          src={embedUrl}
          title="Map showing the Karvaahh Tours & Travels office location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : null}
      {embedUrl && !loaded ? (
        <div className="ct-map__load">
          <button type="button" className="ct-btn ct-btn--dark" onClick={() => setLoaded(true)}>
            Load interactive map
          </button>
          <p className="ct-map__load-note">Loading the map connects to a third-party map service.</p>
        </div>
      ) : null}
    </div>
  );
}

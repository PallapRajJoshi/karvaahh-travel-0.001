'use client';

import { useEffect, useState } from 'react';

const VIDEO_SRC = '/videos/hero-nepal.mp4';
const POSTER_SRC = '/images/hero-nepal-poster.webp';

export default function HeroBackground() {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const isNarrowViewport = window.matchMedia(
      '(max-width: 767px)'
    ).matches;

    const connection = (
      navigator as Navigator & {
        connection?: {
          saveData?: boolean;
        };
      }
    ).connection;

    const saveData = connection?.saveData ?? false;

    if (!prefersReducedMotion && !isNarrowViewport && !saveData) {
      setShouldLoadVideo(true);
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#081422]">
      {/* VIDEO / POSTER */}
      {shouldLoadVideo ? (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90"
            style={{
              width: '100vh',
              height: '100vw',
            }}
          >
            <div className="absolute inset-0 hero-video-zoom">
              <video
                src={VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster={POSTER_SRC}
                aria-hidden="true"
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={POSTER_SRC}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[100vw] w-[100vh] -translate-x-1/2 -translate-y-1/2 rotate-90 object-cover"
        />
      )}

      {/* LEFT GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081422]/90 via-[#081422]/45 to-[#081422]/10" />

      {/* BOTTOM GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#081422]/85 via-transparent to-[#081422]/20" />

      {/* TOP GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081422]/30 via-transparent to-transparent" />

      {/* VIGNETTE */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 38% 38%, transparent 30%, rgba(8, 20, 34, 0.58) 100%)',
        }}
      />

      {/* GOLDEN BRAND WASH */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F4A300]/15 via-transparent to-transparent mix-blend-soft-light" />

      {/* ANIMATION */}
      <style>{`
        .hero-video-zoom {
          animation: heroSlowZoom 28s ease-in-out infinite alternate;
        }

        @keyframes heroSlowZoom {
          0% {
            transform: scale(1.04);
          }

          50% {
            transform: scale(1.08);
          }

          100% {
            transform: scale(1.12);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-video-zoom {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
'use client';

import dynamic from 'next/dynamic';
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { NEPAL_JOURNEY, type JourneyStop } from '@/data/journey/nepalJourney';
import { buildRoute, type LatLngTuple } from './geo';
import type { JourneyMapHandle } from './JourneyMapCanvas';
import JourneyPanel from './JourneyPanel';
import JourneyProgress from './JourneyProgress';
import './NepalJourneyMap.css';

const JourneyMapCanvas = dynamic(() => import('./JourneyMapCanvas'), {
  ssr: false,
  loading: () => <div className="jm-map jm-map--loading" aria-hidden="true" />,
});

/* --- Timeline shape -------------------------------------------------------
   The whole section is one scrubbed timeline measured in abstract "units".
   Each stop gets a HOLD (camera parked, panel readable) followed by a TRAVEL
   (camera flies, route draws, panels cross over). Scroll distance per unit is
   deliberate: too short and the flight feels twitchy, too long and it drags.
   ------------------------------------------------------------------------- */
const HOLD = 1;
const TRAVEL = 1.5;
const UNIT_VH = 52;

interface NepalJourneyMapProps {
  stops?: JourneyStop[];
  eyebrow?: string;
  title?: string;
  intro?: string;
}

const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
const easeInOutSine = (t: number): number => 0.5 - 0.5 * Math.cos(Math.PI * t);

export default function NepalJourneyMap({
  stops = NEPAL_JOURNEY,
  eyebrow = 'Signature route',
  title = 'Seven stops from the valley to the plains',
  intro = 'Kathmandu to Lumbini, the long way round — over the Nagarkot ridge, west through Bandipur and Pokhara, up to Ghandruk, then down into the Terai. Scroll to travel it.',
}: NepalJourneyMapProps): JSX.Element {
  const total = stops.length;

  const route = useMemo(
    () => buildRoute(stops.map((stop): LatLngTuple => [stop.lat, stop.lng])),
    [stops],
  );

  const trackRef = useRef<HTMLDivElement | null>(null);
  const chapterRefs = useRef<Array<HTMLDivElement | null>>([]);
  const panelRefs = useRef<Array<HTMLElement | null>>([]);
  const progressRef = useRef<HTMLElement | null>(null);
  const mapRef = useRef<JourneyMapHandle | null>(null);

  const [ready, setReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const handleMapReady = useCallback((handle: JourneyMapHandle) => {
    mapRef.current = handle;
    setReady(true);
  }, []);

  /** Unit position at which each stop settles. */
  const chapterStart = useMemo(
    () => stops.map((_, index) => index * (HOLD + TRAVEL)),
    [stops],
  );
  const totalUnits = total * HOLD + (total - 1) * TRAVEL;

  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const goToStop = useCallback(
    (index: number) => {
      const st = scrollTriggerRef.current;
      if (!st) return;

      const target = (chapterStart[index] + HOLD * 0.4) / totalUnits;
      const y = st.start + (st.end - st.start) * target;

      window.scrollTo({
        top: y,
        behavior: reducedMotion ? 'auto' : 'smooth',
      });
    },
    [chapterStart, totalUnits, reducedMotion],
  );

  useLayoutEffect(() => {
    if (!ready || !trackRef.current || !mapRef.current) return undefined;

    gsap.registerPlugin(ScrollTrigger);
    const handle = mapRef.current;

    const ctx = gsap.context(() => {
      const panels = panelRefs.current.filter(Boolean) as HTMLElement[];
      const mm = gsap.matchMedia();

      const setActive = (index: number): void => {
        handle.setActiveStop(index);
        setActiveIndex((current) => (current === index ? current : index));
      };

      /* --- Reduced motion: same story, told in cuts ---------------------- */
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(panels, { opacity: 0, y: 0 });
        gsap.set(panels[0], { opacity: 1 });
        gsap.set('[data-reveal]', { opacity: 1, y: 0 });

        const settle = (index: number): void => {
          const stop = stops[index];
          handle.setCamera(stop.lat, stop.lng, stop.zoom);
          handle.setRouteProgress(route.waypointProgress[index]);
          setActive(index);
          gsap.set(panels, { opacity: 0 });
          gsap.set(panels[index], { opacity: 1 });
          if (progressRef.current) {
            progressRef.current.style.setProperty(
              '--jm-progress',
              `${index / Math.max(total - 1, 1)}`,
            );
          }
        };

        settle(0);

        const triggers = chapterRefs.current
          .filter(Boolean)
          .map((chapter, index) =>
            ScrollTrigger.create({
              trigger: chapter as HTMLDivElement,
              start: 'top 62%',
              end: 'bottom 62%',
              onEnter: () => settle(index),
              onEnterBack: () => settle(index),
            }),
          );

        return () => triggers.forEach((trigger) => trigger.kill());
      });

      /* --- Full motion: one scrubbed cinematic timeline ------------------ */
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set(panels, { opacity: 0, y: 16 });
        panels.forEach((panel, index) => {
          if (index === 0) return;
          gsap.set(panel.querySelectorAll('[data-reveal]'), { opacity: 0, y: 14 });
          gsap.set(panel.querySelectorAll('.jm-panel__line'), { yPercent: 108 });
        });

        // The first stop is the landing state, not something to scroll into.
        // Its tween would sit at timeline position 0 and therefore never have
        // played by the time the section is first painted.
        if (panels[0]) {
          gsap.set(panels[0], { opacity: 1, y: 0 });
          gsap.set(panels[0].querySelectorAll('[data-reveal]'), { opacity: 1, y: 0 });
          gsap.set(panels[0].querySelectorAll('.jm-panel__line'), { yPercent: 0 });
          gsap.set(panels[0].querySelectorAll('[data-parallax]'), { yPercent: 0, scale: 1 });
        }

        const timeline = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: trackRef.current,
            start: 'top top',
            end: 'bottom bottom',
            // A touch of smoothing is the difference between a camera and a slider.
            scrub: 0.85,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const units = self.progress * totalUnits;

              // Hand over at the midpoint of each flight, so the label changes
              // while the camera is moving rather than after it lands.
              let next = 0;
              for (let i = total - 1; i >= 0; i -= 1) {
                if (units >= chapterStart[i] - TRAVEL / 2) {
                  next = i;
                  break;
                }
              }
              setActive(next);

              progressRef.current?.style.setProperty('--jm-progress', `${self.progress}`);
            },
          },
        });

        scrollTriggerRef.current = (timeline.scrollTrigger as ScrollTrigger) ?? null;

        const revealPanel = (index: number, at: number): void => {
          const panel = panels[index];
          if (!panel) return;

          const reveals = panel.querySelectorAll('[data-reveal]');
          const line = panel.querySelectorAll('.jm-panel__line');
          const frame = panel.querySelectorAll('[data-parallax]');

          timeline
            .to(panel, { opacity: 1, y: 0, duration: 0.42 }, at)
            .to(line, { yPercent: 0, duration: 0.46, ease: 'power2.out' }, at + 0.04)
            .to(
              reveals,
              { opacity: 1, y: 0, duration: 0.34, stagger: 0.055, ease: 'power1.out' },
              at + 0.08,
            )
            .fromTo(
              frame,
              { yPercent: 3.2, scale: 1.05 },
              { yPercent: 0, scale: 1, duration: 0.5, ease: 'power2.out' },
              at,
            );
        };

        const hidePanel = (index: number, at: number): void => {
          const panel = panels[index];
          if (!panel) return;

          timeline
            .to(panel, { opacity: 0, y: -14, duration: 0.4 }, at)
            .to(panel.querySelectorAll('[data-parallax]'), { yPercent: -3.2, duration: 0.4 }, at);
        };

        for (let i = 0; i < total; i += 1) {
          const at = chapterStart[i];

          if (i > 0) revealPanel(i, at - 0.52);
          if (i < total - 1) hidePanel(i, at + HOLD * 0.72);

          if (i < total - 1) {
            const from = stops[i];
            const to = stops[i + 1];
            const fromProgress = route.waypointProgress[i];
            const toProgress = route.waypointProgress[i + 1];

            // Longer hops pull the camera back further before settling.
            const span = (toProgress - fromProgress) * route.total;
            const arc = Math.min(Math.max(0.35 + span / 260, 0.35), 1.5);

            const flight = { t: 0 };

            timeline.to(
              flight,
              {
                t: 1,
                duration: TRAVEL,
                onUpdate: () => {
                  const eased = easeInOutSine(flight.t);
                  handle.setCamera(
                    lerp(from.lat, to.lat, eased),
                    lerp(from.lng, to.lng, eased),
                    lerp(from.zoom, to.zoom, eased) - arc * Math.sin(Math.PI * flight.t),
                  );
                  // Route runs slightly ahead of the camera, so the line is
                  // always arriving somewhere rather than trailing behind.
                  handle.setRouteProgress(
                    lerp(fromProgress, toProgress, Math.min(eased * 1.06, 1)),
                  );
                },
              },
              at + HOLD * 0.62,
            );
          }
        }

        handle.setCamera(stops[0].lat, stops[0].lng, stops[0].zoom);
        handle.setRouteProgress(route.waypointProgress[0]);

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
          scrollTriggerRef.current = null;
        };
      });

      return () => mm.revert();
    }, trackRef);

    // Fonts and images landing late change the sticky measurements.
    const refresh = (): void => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);

    return () => {
      window.removeEventListener('load', refresh);
      ctx.revert();
    };
  }, [ready, stops, route, chapterStart, totalUnits, total]);

  return (
    <section className="journey-map" aria-labelledby="journey-map-title">
      <header className="jm-intro">
        <p className="jm-intro__eyebrow">{eyebrow}</p>
        <h2 className="jm-intro__title" id="journey-map-title">
          {title}
        </h2>
        <p className="jm-intro__text">{intro}</p>
      </header>

      <div
        className="jm-track"
        ref={trackRef}
        style={{ height: `${Math.round(totalUnits * UNIT_VH)}vh` }}
      >
        <div className="jm-track__chapters" aria-hidden="true">
          {stops.map((stop, index) => (
            <div
              key={stop.id}
              className="jm-track__chapter"
              ref={(node) => {
                chapterRefs.current[index] = node;
              }}
            />
          ))}
        </div>

        <div className="jm-stage">
          <div className="jm-stage__map">
            <JourneyMapCanvas
              stops={stops}
              route={route}
              onReady={handleMapReady}
              reducedMotion={reducedMotion}
            />
            <div className="jm-stage__seam" aria-hidden="true" />
          </div>

          <div className="jm-stage__inner">
            <JourneyProgress
              ref={progressRef}
              stops={stops}
              activeIndex={activeIndex}
              onSelect={goToStop}
            />

            <div className="jm-stage__panels">
              {stops.map((stop, index) => (
                <JourneyPanel
                  key={stop.id}
                  ref={(node) => {
                    panelRefs.current[index] = node;
                  }}
                  stop={stop}
                  index={index}
                  total={total}
                  distanceKm={Math.round(route.waypointProgress[index] * route.total)}
                  isActive={index === activeIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Plain list for search engines and anyone without JavaScript. */}
      <noscript>
        <ol className="jm-fallback">
          {stops.map((stop) => (
            <li key={stop.id}>
              <strong>{stop.name}</strong> — {stop.region}. {stop.blurb}
            </li>
          ))}
        </ol>
      </noscript>
    </section>
  );
}

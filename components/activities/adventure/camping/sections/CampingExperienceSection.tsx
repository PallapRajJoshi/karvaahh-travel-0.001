"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CampImage from "../shared/CampImage";
import { campScenes } from "@/data/campingContent";
import type { ImageTone } from "@/data/campingImages";
import "./CampingExperienceSection.css";

gsap.registerPlugin(ScrollTrigger);

/* Abstract timeline units — every animated property shares one scrubbed timeline. */
const HOLD = 1;
const TRAVEL = 0.6;
const UNIT_VH = 55; // viewport-height % of scroll per timeline unit

const TONES: ImageTone[] = ["forest", "forest", "dusk", "dusk", "night", "snow"];
const pad = (n: number) => String(n).padStart(2, "0");

export default function CampingExperienceSection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      el.classList.add("is-pinned");
      const q = gsap.utils.selector(el);
      const media = q(".cmp-night__media-layer");
      const texts = q(".cmp-night__scene");
      const dots = q(".cmp-night__step");
      const n = texts.length;

      // Explicit first-visible state.
      gsap.set(media, { autoAlpha: 0, scale: 1.08 });
      gsap.set(texts, { autoAlpha: 0, y: 40 });
      gsap.set([media[0], texts[0]], { autoAlpha: 1, y: 0 });
      gsap.set(media[0], { scale: 1 });

      const total = (n - 1) * (HOLD + TRAVEL) + HOLD;
      const tl = gsap.timeline({ defaults: { ease: "none" } });
      for (let i = 1; i < n; i++) {
        const at = (i - 1) * (HOLD + TRAVEL) + HOLD;
        tl.to(texts[i - 1], { autoAlpha: 0, y: -40, duration: TRAVEL * 0.6 }, at)
          .to(media[i - 1], { autoAlpha: 0, duration: TRAVEL }, at)
          .to(media[i], { autoAlpha: 1, scale: 1, duration: TRAVEL }, at)
          .to(texts[i], { autoAlpha: 1, y: 0, duration: TRAVEL * 0.6 }, at + TRAVEL * 0.4);
      }
      tl.to({}, { duration: 0 }, total); // pad the final hold

      let current = -1;
      const setStep = (idx: number) => {
        if (idx === current) return;
        current = idx;
        dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
      };
      setStep(0);

      ScrollTrigger.create({
        trigger: q(".cmp-night__stage")[0],
        start: "top top",
        end: () => `+=${(window.innerHeight * total * UNIT_VH) / 100}`,
        pin: true,
        scrub: 0.6,
        animation: tl,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const t = self.progress * total;
          const idx = Math.floor((t - HOLD - TRAVEL / 2) / (HOLD + TRAVEL)) + 1;
          setStep(Math.max(0, Math.min(n - 1, idx)));
        },
      });

      return () => el.classList.remove("is-pinned");
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="night" className="cmp-night" aria-labelledby="cmp-night-title">
      <div className="cmp-night__stage">
        <div className="cmp-night__media" aria-hidden="true">
          {campScenes.map((s, i) => (
            <div key={s.id} className="cmp-night__media-layer">
              <CampImage src={s.image} alt="" tone={TONES[i]} loading="lazy" sizes="(max-width: 899px) 92vw, 60vw" />
            </div>
          ))}
          <div className="cmp-night__media-shade" />
        </div>

        <div className="cmp-night__content">
          <h2 id="cmp-night-title" className="cmp-night__title">A Night at Camp</h2>
          <ol className="cmp-night__scenes">
            {campScenes.map((s, i) => (
              <li key={s.id} className="cmp-night__scene">
                <div className="cmp-night__scene-media" aria-hidden="true">
                  <CampImage src={s.image} alt="" tone={TONES[i]} loading="lazy" sizes="92vw" />
                </div>
                <span className="cmp-night__num">{pad(i + 1)}</span>
                <h3 className="cmp-night__scene-title">{s.title}</h3>
                <p className="cmp-night__scene-text">{s.text}</p>
              </li>
            ))}
          </ol>
          <ol className="cmp-night__steps" aria-hidden="true">
            {campScenes.map((s, i) => (
              <li key={s.id} className="cmp-night__step"><span>{pad(i + 1)}</span></li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

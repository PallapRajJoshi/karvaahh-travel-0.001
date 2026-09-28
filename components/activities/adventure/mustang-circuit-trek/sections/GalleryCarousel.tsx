"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "../data/types";
import { Icon } from "../shared/Icon";

/**
 * Native swipe via CSS scroll-snap (no gesture library); arrow buttons for
 * mouse and keyboard users. Images below the fold load lazily via next/image.
 */
export default function GalleryCarousel({ images }: { images: GalleryImage[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      setAtStart(el.scrollLeft <= 4);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const page = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="mc-gal" role="region" aria-roledescription="carousel" aria-label="Mustang photo gallery">
      <ul ref={track} className="mc-gal__track" tabIndex={0} aria-label="Photos — scroll horizontally">
        {images.map((img, i) => (
          <li
            key={img.id}
            className={`mc-gal__slide${img.wide ? " mc-gal__slide--wide" : ""}`}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${images.length}`}
          >
            <figure className="mc-gal__figure mc-frame">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={img.wide ? "(min-width: 1024px) 50vw, 88vw" : "(min-width: 1024px) 26vw, 72vw"}
                style={img.focal ? { objectPosition: img.focal } : undefined}
              />
              <figcaption className="mc-gal__caption">{img.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mc-container mc-gal__controls">
        <button type="button" className="mc-gal__btn" onClick={() => page(-1)} disabled={atStart} aria-label="Previous photos">
          <Icon name="chevron-left" />
        </button>
        <button type="button" className="mc-gal__btn" onClick={() => page(1)} disabled={atEnd} aria-label="Next photos">
          <Icon name="chevron-right" />
        </button>
      </div>
    </div>
  );
}

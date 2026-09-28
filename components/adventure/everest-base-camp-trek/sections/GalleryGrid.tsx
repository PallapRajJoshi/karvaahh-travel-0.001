"use client";

/**
 * Gallery: mosaic grid on desktop, swipeable scroll-snap carousel on mobile
 * (native touch scrolling — no gesture library). Any tile opens a lightbox
 * built on the native <dialog> element: focus trapping, Esc to close and
 * background inertness come from the browser. ←/→ navigate inside it.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryItem } from "../types";
import SmartImage from "../ui/SmartImage";
import Icon from "../ui/Icon";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = useCallback(() => dialogRef.current?.close(), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setIndex(null);
    dlg.addEventListener("keydown", onKey);
    dlg.addEventListener("close", onClose);
    return () => {
      dlg.removeEventListener("keydown", onKey);
      dlg.removeEventListener("close", onClose);
    };
  }, [step]);

  const scrollTrack = (d: number) => {
    const t = trackRef.current;
    if (t) t.scrollBy({ left: d * t.clientWidth * 0.85, behavior: "smooth" });
  };

  const current = index !== null ? items[index] : null;

  return (
    <>
      <ul ref={trackRef} className="ebc-gallery__grid" aria-label="Everest photo gallery">
        {items.map((item, i) => (
          <li key={item.id} className={`ebc-gallery__item ebc-gallery__item--${item.size ?? "regular"}`} data-reveal="zoom" style={{ ["--i" as string]: i % 4 }}>
            <button type="button" className="ebc-gallery__btn" onClick={() => open(i)} aria-label={`Open photo: ${item.caption}`}>
              <span className="ebc-img ebc-gallery__frame">
                <SmartImage image={item} sizes="(max-width: 767px) 85vw, (max-width: 1023px) 50vw, 33vw" />
              </span>
              <span className="ebc-gallery__caption">
                <span>{item.caption}</span>
                <Icon name="expand" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="ebc-gallery__mobile-nav">
        <button type="button" onClick={() => scrollTrack(-1)} aria-label="Previous photos">
          <Icon name="chevron-left" />
        </button>
        <span>Swipe to explore</span>
        <button type="button" onClick={() => scrollTrack(1)} aria-label="Next photos">
          <Icon name="chevron-right" />
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className="ebc-lightbox"
        aria-label={current ? `Photo: ${current.caption}` : "Photo viewer"}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        {current && (
          <figure className="ebc-lightbox__figure">
            <div className="ebc-lightbox__img">
              <SmartImage key={current.id} image={current} sizes="90vw" fit="contain" />
            </div>
            <figcaption className="ebc-lightbox__caption">
              <strong>{current.caption}</strong>
              <span>{current.alt}</span>
              <span className="ebc-lightbox__count">
                {index! + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
        )}
        <button type="button" className="ebc-lightbox__close" onClick={close} aria-label="Close photo viewer" autoFocus>
          <Icon name="close" />
        </button>
        <button type="button" className="ebc-lightbox__arrow ebc-lightbox__arrow--prev" onClick={() => step(-1)} aria-label="Previous photo">
          <Icon name="chevron-left" />
        </button>
        <button type="button" className="ebc-lightbox__arrow ebc-lightbox__arrow--next" onClick={() => step(1)} aria-label="Next photo">
          <Icon name="chevron-right" />
        </button>
      </dialog>
    </>
  );
}

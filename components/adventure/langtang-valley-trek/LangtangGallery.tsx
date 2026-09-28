"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gallery, images } from "@/data/adventure/langtang-valley-trek";
import LangtangImage from "./LangtangImage";
import LangtangIcon from "./LangtangIcon";
import "./LangtangGallery.css";

export default function LangtangGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number, btn: HTMLButtonElement) => {
    openerRef.current = btn;
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = useCallback(() => dialogRef.current?.close(), []);
  const step = useCallback((dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length)), []);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onClose = () => { setIndex(null); openerRef.current?.focus(); };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    d.addEventListener("close", onClose);
    d.addEventListener("keydown", onKey);
    return () => { d.removeEventListener("close", onClose); d.removeEventListener("keydown", onKey); };
  }, [step]);

  const current = index !== null ? gallery[index] : null;

  return (
    <section className="lt-section lt-section--deep lt-gallery" id="gallery" aria-labelledby="lt-gallery-title">
      <div className="lt-container">
        <header className="lt-heading lt-heading--dark lt-heading--center" data-reveal>
          <p className="lt-heading__eyebrow">Gallery</p>
          <h2 className="lt-heading__title" id="lt-gallery-title">Moments from Langtang Valley</h2>
        </header>
        <ul className="lt-gallery__grid" role="list">
          {gallery.map((g, i) => (
            <li key={`${g.image}-${i}`} className={`lt-gallery__item lt-gallery__item--${g.size ?? "regular"}`} data-reveal style={{ ["--i" as string]: i % 3 }}>
              <button type="button" className="lt-gallery__btn" onClick={(e) => open(i, e.currentTarget)} aria-label={`View larger: ${g.caption}`}>
                <LangtangImage id={g.image} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="lt-zoom" />
                <span className="lt-gallery__cap">{g.caption}<LangtangIcon name="expand" size={16} /></span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog ref={dialogRef} className="lt-lightbox" aria-label="Image viewer" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
        {current ? (
          <figure className="lt-lightbox__fig">
            <div className="lt-lightbox__img">
              <LangtangImage id={current.image} sizes="90vw" alt={images[current.image as keyof typeof images]?.alt} />
            </div>
            <figcaption>{current.caption} <span>{(index ?? 0) + 1} / {gallery.length}</span></figcaption>
          </figure>
        ) : null}
        <button type="button" className="lt-lightbox__close" onClick={close} aria-label="Close image viewer"><LangtangIcon name="cross" /></button>
        <button type="button" className="lt-lightbox__nav lt-lightbox__nav--prev" onClick={() => step(-1)} aria-label="Previous image"><LangtangIcon name="arrow" /></button>
        <button type="button" className="lt-lightbox__nav lt-lightbox__nav--next" onClick={() => step(1)} aria-label="Next image"><LangtangIcon name="arrow" /></button>
      </dialog>
    </section>
  );
}

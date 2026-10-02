"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Media from "../shared/Media";
import SectionHeading from "../shared/SectionHeading";
import { ArrowRight, Close } from "../shared/Icons";
import { GALLERY } from "../data/planning";
import "./CruiseGallery.css";

export default function CruiseGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const open = (i: number) => {
    setActive(i);
    dialogRef.current?.showModal();
  };
  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);
  const step = useCallback((dir: 1 | -1) => {
    setActive((cur) =>
      cur === null ? cur : (cur + dir + GALLERY.length) % GALLERY.length,
    );
  }, []);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onKey = (e: KeyboardEvent) => {
      if (!d.open) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setActive(null);
    window.addEventListener("keydown", onKey);
    d.addEventListener("close", onClose);
    return () => {
      window.removeEventListener("keydown", onKey);
      d.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = active === null ? null : GALLERY[active];

  return (
    <section
      id="cruise-gallery"
      className="cr-section cr-gal"
      aria-labelledby="cr-gal-title"
    >
      <div className="cr-container">
        <SectionHeading
          id="cr-gal-title"
          eyebrow="Gallery"
          title="Moments Across the Water"
          lead="A glimpse of the scenery you can explore. Imagery is illustrative of each destination."
        />
        <ul className="cr-gal__grid">
          {GALLERY.map((g, i) => (
            <li key={g.file} className={`cr-gal__cell cr-gal__cell--${g.size}`}>
              <button
                type="button"
                className="cr-gal__btn"
                onClick={() => open(i)}
                aria-label={`View larger: ${g.alt}`}
              >
                <Media
                  image={{ file: g.file, alt: g.alt, placeholderLabel: g.label }}
                  sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 300px"
                />
                <span className="cr-gal__cap">
                  {g.label} <ArrowRight />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog ref={dialogRef} className="cr-lb" aria-label="Image viewer">
        <button type="button" className="cr-lb__close" onClick={close} aria-label="Close viewer">
          <Close />
        </button>
        {current && (
          <figure className="cr-lb__fig">
            <div className="cr-lb__frame">
              <Media
                image={{
                  file: current.file,
                  alt: current.alt,
                  placeholderLabel: current.label,
                }}
                sizes="90vw"
              />
            </div>
            <figcaption>{current.alt}</figcaption>
          </figure>
        )}
        <div className="cr-lb__nav">
          <button type="button" onClick={() => step(-1)} aria-label="Previous image">
            ‹
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next image">
            ›
          </button>
        </div>
      </dialog>
    </section>
  );
}

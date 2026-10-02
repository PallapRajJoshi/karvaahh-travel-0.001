"use client";

import { useEffect, useRef, useState } from "react";
import WellnessImage from "./shared/WellnessImage";
import SectionHeading from "./shared/SectionHeading";
import { gallery } from "./data/gallery-faq";
import "./WellnessGallery.css";

export default function WellnessGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (openIndex !== null && !dlg.open) dlg.showModal();
    if (openIndex === null && dlg.open) dlg.close();
  }, [openIndex]);

  function open(i: number, el: HTMLElement) {
    lastTrigger.current = el;
    setOpenIndex(i);
  }

  function handleClose() {
    setOpenIndex(null);
    lastTrigger.current?.focus();
  }

  function step(dir: 1 | -1) {
    setOpenIndex((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length));
  }

  const current = openIndex === null ? null : gallery[openIndex];

  return (
    <section className="ykw-section ykw-section--white" aria-labelledby="ykw-gal-title">
      <div className="ykw-container">
        <SectionHeading
          id="ykw-gal-title"
          eyebrow="Gallery"
          title="Moments of Calm"
          intro="A visual taste of the settings and moments these journeys are built around."
        />
        <ul className="ykw-gal__grid">
          {gallery.map((g, i) => (
            <li key={g.id} className={`ykw-gal__tile ykw-gal__tile--${g.size}`}>
              <button
                type="button"
                className="ykw-gal__btn"
                onClick={(e) => open(i, e.currentTarget)}
                aria-label={`Open larger view: ${g.image.label}`}
              >
                <WellnessImage
                  image={g.image}
                  sizes={g.size === "small" ? "(max-width: 700px) 50vw, 25vw" : "(max-width: 700px) 100vw, 50vw"}
                />
                <span className="ykw-gal__cap">{g.image.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className="ykw-lightbox"
        aria-label="Gallery image viewer"
        onClose={handleClose}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
      >
        {current ? (
          <div className="ykw-lightbox__inner">
            <div className="ykw-lightbox__stage">
              <WellnessImage image={current.image} sizes="90vw" />
            </div>
            <p className="ykw-lightbox__cap">
              {current.image.label}
              <span> · {(openIndex ?? 0) + 1} / {gallery.length}</span>
            </p>
            <div className="ykw-lightbox__controls">
              <button type="button" onClick={() => step(-1)} aria-label="Previous image">
                ←
              </button>
              <button type="button" onClick={() => dialogRef.current?.close()}>
                Close
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Next image">
                →
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import CultureImage from "../shared/CultureImage";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import { ArrowIcon, CloseIcon } from "../shared/Icons";
import { GALLERY, GALLERY_HEADING, GALLERY_LEDE } from "../data/values-gallery-respect";
import { IDS } from "../data/page";
import "./CultureGallery.css";

export default function CultureGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const item = GALLERY[index];

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const step = (d: number) => setIndex((i) => (i + d + GALLERY.length) % GALLERY.length);

  return (
    <section id={IDS.gallery} className="culture-gallery" aria-labelledby="culture-gallery-title">
      <div className="cx-container">
        <Reveal>
          <SectionHeading id="culture-gallery-title" title={GALLERY_HEADING} lede={GALLERY_LEDE} align="center" />
        </Reveal>

        <ul className="culture-gallery__masonry">
          {GALLERY.map((g, i) => (
            <Reveal as="li" key={g.id} delay={(i % 3) * 80} className="gallery-tile">
              <button
                type="button"
                className="gallery-tile__button"
                onClick={() => open(i)}
                aria-haspopup="dialog"
                aria-label={`View larger: ${g.caption}`}
              >
                <span className="gallery-tile__frame" style={{ aspectRatio: g.ratio }}>
                  <CultureImage id={g.media} sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 25vw" />
                </span>
                <span className="gallery-tile__caption">{g.caption}</span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className="culture-lightbox"
        aria-label="Photo viewer"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            step(1);
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            step(-1);
          }
        }}
      >
        <div className="culture-lightbox__inner">
          <button type="button" className="culture-lightbox__close" onClick={() => dialogRef.current?.close()} aria-label="Close photo viewer">
            <CloseIcon />
          </button>

          <div className="culture-lightbox__stage" style={{ aspectRatio: item.ratio }}>
            <CultureImage id={item.media} sizes="90vw" />
          </div>

          <div className="culture-lightbox__bar">
            <button type="button" className="culture-lightbox__nav culture-lightbox__nav--prev" onClick={() => step(-1)} aria-label="Previous photo">
              <ArrowIcon />
            </button>
            <p className="culture-lightbox__caption" aria-live="polite">
              <span>{item.caption}</span>
              <span className="culture-lightbox__count">
                {index + 1} / {GALLERY.length}
              </span>
            </p>
            <button type="button" className="culture-lightbox__nav" onClick={() => step(1)} aria-label="Next photo">
              <ArrowIcon />
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}

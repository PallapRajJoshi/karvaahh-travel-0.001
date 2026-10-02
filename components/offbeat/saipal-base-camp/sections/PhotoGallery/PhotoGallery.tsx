"use client";

import { useCallback, useEffect, useState } from "react";
import SectionHeading from "../../shared/SectionHeading";
import Reveal from "../../shared/Reveal";
import ImageSlot from "../../shared/ImageSlot";
import { ChevronIcon } from "../../shared/Icon";
import { galleryImages } from "@/data/gallery";
import "./PhotoGallery.css";

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length)),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex !== null ? galleryImages[activeIndex] : null;

  return (
    <section className="saipal-page__section saipal-gallery">
      <div className="saipal-page__inner">
        <SectionHeading eyebrow="Photo Gallery" title="Saipal — Captured in the Wild" align="center" />

        <div className="saipal-gallery__grid">
          {galleryImages.map((image, index) => (
            <Reveal key={image.id} delay={(index % 4) * 70} className="saipal-gallery__tile">
              <button
                type="button"
                className="saipal-gallery__trigger"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open full-screen view: ${image.label}`}
              >
                <ImageSlot alt={image.label} label={image.label} />
                <span className="saipal-gallery__caption">{image.label}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active ? (
        <div className="saipal-lightbox" role="dialog" aria-modal="true" aria-label={active.label}>
          <button type="button" className="saipal-lightbox__close" onClick={close} aria-label="Close gallery">
            Close
          </button>
          <button
            type="button"
            className="saipal-lightbox__nav saipal-lightbox__nav--prev"
            onClick={showPrev}
            aria-label="Previous image"
          >
            <ChevronIcon className="saipal-lightbox__chevron saipal-lightbox__chevron--left" />
          </button>
          <div className="saipal-lightbox__stage">
            <ImageSlot alt={active.label} label={active.label} />
          </div>
          <button
            type="button"
            className="saipal-lightbox__nav saipal-lightbox__nav--next"
            onClick={showNext}
            aria-label="Next image"
          >
            <ChevronIcon className="saipal-lightbox__chevron saipal-lightbox__chevron--right" />
          </button>
          <p className="saipal-lightbox__caption">{active.label}</p>
        </div>
      ) : null}
    </section>
  );
}

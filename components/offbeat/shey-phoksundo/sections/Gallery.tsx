"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import { GALLERY_IMAGES } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./Gallery.css";

export default function Gallery() {
  const ref = useScrollReveal<HTMLElement>();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, close, showPrev, showNext]);

  const activeImage = activeIndex !== null ? GALLERY_IMAGES[activeIndex] : null;

  return (
    <section className="phoksundo-gallery" ref={ref}>
      <div className="phoksundo-page__container">
        <SectionHeading eyebrow="Gallery" title="Shey Phoksundo in Pictures" />

        <div className="phoksundo-gallery__grid">
          {GALLERY_IMAGES.map((image, index) => (
            <button
              key={image.id}
              type="button"
              className="phoksundo-gallery__thumb"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open image: ${image.caption}`}
              data-reveal
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 20vw"
                className="phoksundo-gallery__image"
              />
            </button>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          className="phoksundo-gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.caption}
          onClick={close}
        >
          <button
            type="button"
            className="phoksundo-gallery__lightbox-close"
            onClick={close}
            aria-label="Close gallery"
          >
            ×
          </button>
          <button
            type="button"
            className="phoksundo-gallery__lightbox-nav phoksundo-gallery__lightbox-nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="phoksundo-gallery__lightbox-media" onClick={(e) => e.stopPropagation()}>
            <div className="phoksundo-gallery__lightbox-image-wrap">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="90vw"
                className="phoksundo-gallery__lightbox-image"
              />
            </div>
            <p className="phoksundo-gallery__lightbox-caption">{activeImage.caption}</p>
          </div>

          <button
            type="button"
            className="phoksundo-gallery__lightbox-nav phoksundo-gallery__lightbox-nav--next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      ) : null}
    </section>
  );
}

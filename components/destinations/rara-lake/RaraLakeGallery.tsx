"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import { galleryImages } from "@/data/destinations/rara-lake/gallery";
import "./RaraLakeGallery.css";

export default function RaraLakeGallery() {
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
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, close, showPrev, showNext]);

  const activeImage = activeIndex !== null ? galleryImages[activeIndex] : null;

  return (
    <section className="rara-gallery" aria-labelledby="rara-gallery-heading">
      <SectionHeading eyebrow="In Pictures" title="Photo Gallery" />

      <div className="rara-gallery__grid">
        {galleryImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className="rara-gallery__thumb"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open larger view: ${image.caption}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              sizes="(max-width: 700px) 45vw, (max-width: 1100px) 30vw, 22vw"
              className="rara-gallery__image"
            />
            <span className="rara-gallery__caption">{image.caption}</span>
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="rara-gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.caption}
          onClick={close}
        >
          <button
            type="button"
            className="rara-gallery__lightbox-close"
            onClick={close}
            aria-label="Close gallery view"
          >
            ✕
          </button>
          <button
            type="button"
            className="rara-gallery__lightbox-nav rara-gallery__lightbox-nav--prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <div className="rara-gallery__lightbox-media" onClick={(event) => event.stopPropagation()}>
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="90vw"
              className="rara-gallery__lightbox-image"
            />
            <p className="rara-gallery__lightbox-caption">{activeImage.caption}</p>
          </div>
          <button
            type="button"
            className="rara-gallery__lightbox-nav rara-gallery__lightbox-nav--next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

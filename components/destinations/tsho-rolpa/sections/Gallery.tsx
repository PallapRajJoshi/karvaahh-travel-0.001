"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/tsho-rolpa/gallery";
import SectionHeading from "../shared/SectionHeading";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./Gallery.css";

/**
 * Section 16 — Photo Gallery with a minimal, dependency-free lightbox
 * (keyboard accessible: Escape closes, arrow keys navigate).
 */
export default function Gallery() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();
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

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <section className="tsho-gallery tsho-section" ref={containerRef}>
      <div className="tsho-container">
        <SectionHeading
          eyebrow="Visual Journey"
          title="Photo Gallery"
          description="Tsho Rolpa Lake, the Rolwaling Valley, and the villages, glaciers, and peaks along the way."
        />

        <div className="tsho-gallery__grid">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              className="tsho-gallery__item tsho-reveal"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open larger view: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 25vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null ? (
        <div
          className="tsho-gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={galleryImages[activeIndex].alt}
          onClick={close}
        >
          <button
            type="button"
            className="tsho-gallery__lightbox-close"
            onClick={close}
            aria-label="Close gallery"
          >
            ×
          </button>
          <button
            type="button"
            className="tsho-gallery__lightbox-nav tsho-gallery__lightbox-nav--prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <div className="tsho-gallery__lightbox-media" onClick={(event) => event.stopPropagation()}>
            <Image
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              fill
              sizes="90vw"
              style={{ objectFit: "contain" }}
            />
          </div>
          <button
            type="button"
            className="tsho-gallery__lightbox-nav tsho-gallery__lightbox-nav--next"
            onClick={(event) => {
              event.stopPropagation();
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

"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/data/destinations/khaptad/khaptad-gallery";

interface KhaptadLightboxGalleryProps {
  images: GalleryImage[];
}

export default function KhaptadLightboxGallery({ images }: KhaptadLightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className="khaptad-gallery__grid">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className="khaptad-gallery__item"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open image: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="khaptad-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
        >
          <div className="khaptad-lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <Image src={active.src} alt={active.alt} fill sizes="90vw" />
            <button
              type="button"
              className="khaptad-lightbox__close"
              onClick={close}
              aria-label="Close gallery"
            >
              ✕
            </button>
            <button
              type="button"
              className="khaptad-lightbox__nav khaptad-lightbox__nav--prev"
              onClick={showPrev}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              className="khaptad-lightbox__nav khaptad-lightbox__nav--next"
              onClick={showNext}
              aria-label="Next image"
            >
              ›
            </button>
            <p className="khaptad-lightbox__caption">{active.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}

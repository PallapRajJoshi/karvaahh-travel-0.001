"use client";

import { useCallback, useEffect, useState } from "react";
import SafeImage from "@/components/shared/SafeImage";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { galleryImages } from "@/data/panch-pokhari/gallery";
import "./gallery.css";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % galleryImages.length
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  return (
    <section className="pp-gallery" aria-labelledby="gallery-heading">
      <div className="pp-container">
        <SectionHeading
          eyebrow="Photo Gallery"
          title="Panch Pokhari Through the Lens"
        />

        <div className="pp-gallery__masonry">
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.id}
              variant="fade-up"
              delay={(index % 4) * 70}
              className="pp-gallery__item"
            >
              <button
                type="button"
                className="pp-gallery__trigger"
                onClick={() => setActiveIndex(index)}
                aria-label={`View larger image: ${image.caption}`}
              >
                <div className="pp-gallery__image-wrap">
                  <SafeImage
                    src={image.src}
                    alt={image.alt}
                    fallbackLabel={image.caption}
                    fill
                    loading="lazy"
                    sizes="(max-width: 900px) 50vw, 25vw"
                    className="pp-gallery__image"
                  />
                  <div className="pp-gallery__caption-overlay">
                    <Icon name="camera" />
                    <span>{image.caption}</span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          className="pp-gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.caption}
          onClick={close}
        >
          <button
            type="button"
            className="pp-gallery__lightbox-close"
            onClick={close}
            aria-label="Close gallery"
          >
            <Icon name="close" />
          </button>

          <button
            type="button"
            className="pp-gallery__lightbox-nav pp-gallery__lightbox-nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            <Icon name="arrow-right" className="pp-gallery__nav-icon-left" />
          </button>

          <div
            className="pp-gallery__lightbox-frame"
            onClick={(e) => e.stopPropagation()}
          >
            <SafeImage
              src={activeImage.src}
              alt={activeImage.alt}
              fallbackLabel={activeImage.caption}
              fill
              sizes="90vw"
              className="pp-gallery__lightbox-image"
            />
            <p className="pp-gallery__lightbox-caption">{activeImage.caption}</p>
          </div>

          <button
            type="button"
            className="pp-gallery__lightbox-nav pp-gallery__lightbox-nav--next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <Icon name="arrow-right" />
          </button>
        </div>
      ) : null}
    </section>
  );
}

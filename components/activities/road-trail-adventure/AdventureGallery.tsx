"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import AdventureImage from "./AdventureImage";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GALLERY_ITEMS } from "./data/gallery";
import { HEADINGS } from "./data/copy";
import { ANCHORS } from "./data/site";
import "./AdventureGallery.css";

/**
 * Masonry gallery with an accessible lightbox built on the native <dialog>
 * element (focus trap, Esc to close and focus return come from the browser).
 */
export default function AdventureGallery() {
  const h = HEADINGS.gallery;
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const count = GALLERY_ITEMS.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    }
    if (active === null && dialog.open) {
      dialog.close();
    }
    if (active === null) {
      document.body.style.overflow = "";
    }
  }, [active]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const step = useCallback(
    (delta: number) => {
      setActive((current) => (current === null ? current : (current + delta + count) % count));
    },
    [count],
  );

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
  };

  const onDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    // A click on the dialog element itself (not its content) is a backdrop click.
    if (event.target === event.currentTarget) setActive(null);
  };

  const current = active === null ? null : GALLERY_ITEMS[active];

  return (
    <section
      id={ANCHORS.gallery}
      className="rt-section rt-section--alt"
      aria-labelledby="rt-gallery-title"
    >
      <div className="rt-container">
        <SectionHeading
          id="rt-gallery-title"
          eyebrow={h.eyebrow}
          title={h.title}
          intro={h.intro}
          align="center"
        />

        <ul className="rt-gallery">
          {GALLERY_ITEMS.map((item, i) => (
            <Reveal as="li" key={item.id} index={i % 3} className="rt-gallery__item">
              <button
                type="button"
                className={`rt-gallery__button rt-gallery__button--${item.shape}`}
                onClick={() => setActive(i)}
                aria-haspopup="dialog"
              >
                <AdventureImage
                  image={item.image}
                  sizes="(min-width: 1100px) 32vw, (min-width: 640px) 48vw, 100vw"
                />
                <span className="rt-gallery__caption">{item.caption}</span>
                <span className="rt-sr-only">. Open larger view</span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className="rt-lightbox"
        aria-label={current ? `Photo: ${current.caption}` : "Photo viewer"}
        onClose={() => setActive(null)}
        onKeyDown={onKeyDown}
        onClick={onDialogClick}
      >
        {current ? (
          <div className="rt-lightbox__panel">
            <div className="rt-lightbox__stage">
              <AdventureImage image={current.image} sizes="90vw" />
            </div>
            <p className="rt-lightbox__caption">
              <span>{current.caption}</span>
              <span className="rt-lightbox__count" aria-live="polite">
                {(active ?? 0) + 1} / {count}
              </span>
            </p>
            <button
              type="button"
              className="rt-lightbox__btn rt-lightbox__btn--close"
              onClick={() => setActive(null)}
              aria-label="Close photo viewer"
            >
              <Icon name="close" />
            </button>
            <button
              type="button"
              className="rt-lightbox__btn rt-lightbox__btn--prev"
              onClick={() => step(-1)}
              aria-label="Previous photo"
            >
              <Icon name="prev" />
            </button>
            <button
              type="button"
              className="rt-lightbox__btn rt-lightbox__btn--next"
              onClick={() => step(1)}
              aria-label="Next photo"
            >
              <Icon name="next" />
            </button>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { GALLERY } from "../data/content";
import { Icon } from "../shared/Icon";
import { MediaFrame } from "../shared/MediaFrame";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import "./EducationalGallery.css";

export function EducationalGallery() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const count = GALLERY.items.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open !== null && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    }
    if (open === null && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const step = (dir: 1 | -1) => setOpen((i) => (i === null ? null : (i + dir + count) % count));
  const current = open === null ? null : GALLERY.items[open];

  return (
    <section id="gallery" className="et-section" aria-labelledby="et-gallery-title">
      <div className="et-container">
        <SectionHeading eyebrow={GALLERY.eyebrow} title={GALLERY.title} id="et-gallery-title" />

        <ul className="et-gal__masonry">
          {GALLERY.items.map((item, i) => (
            <Reveal as="li" key={item.key} index={i % 3} className="et-gal__item">
              <button
                type="button"
                className={`et-gal__btn ${item.tall ? "is-tall" : ""}`}
                onClick={() => setOpen(i)}
                aria-label={`Open larger view: ${item.caption}`}
              >
                <MediaFrame mediaKey={item.key} showCaption={false} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" />
                <span className="et-gal__cap">
                  <span>{item.caption}</span>
                  <Icon name="expand" size={18} />
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
        <p className="et-note">{GALLERY.note}</p>
      </div>

      <dialog
        ref={dialogRef}
        className="et-lightbox"
        aria-label="Gallery image viewer"
        onClose={() => {
          setOpen(null);
          document.body.style.overflow = "";
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
      >
        {current ? (
          <figure className="et-lightbox__figure">
            <div className="et-lightbox__frame">
              <MediaFrame mediaKey={current.key} showCaption={false} sizes="90vw" />
            </div>
            <figcaption className="et-lightbox__caption">
              {current.caption} <span aria-hidden="true">· {(open ?? 0) + 1} / {count}</span>
            </figcaption>
          </figure>
        ) : null}
        <button type="button" className="et-lightbox__btn et-lightbox__close" onClick={() => setOpen(null)} aria-label="Close viewer">
          <Icon name="close" size={22} />
        </button>
        <button type="button" className="et-lightbox__btn et-lightbox__prev" onClick={() => step(-1)} aria-label="Previous image">
          <Icon name="arrow" size={22} />
        </button>
        <button type="button" className="et-lightbox__btn et-lightbox__next" onClick={() => step(1)} aria-label="Next image">
          <Icon name="arrow" size={22} />
        </button>
      </dialog>
    </section>
  );
}

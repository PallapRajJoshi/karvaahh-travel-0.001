"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gallery, photographyServices } from "../data/celebration";
import WeddingImage from "../shared/WeddingImage";
import "./PhotographyGallery.css";

export default function PhotographyGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number, opener: HTMLButtonElement) => {
    openerRef.current = opener;
    setIndex(i);
    dialogRef.current?.showModal();
  };

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const step = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length));
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => {
      setIndex(null);
      openerRef.current?.focus();
    };
    dialog.addEventListener("keydown", onKey);
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("keydown", onKey);
      dialog.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = index === null ? null : gallery[index];

  return (
    <section className="dw-section dw-photo dw-dark" aria-labelledby="dw-photo-title">
      <div className="dw-container">
        <div className="dw-photo__head" data-reveal="">
          <div>
            <p className="dw-eyebrow">Photography & film</p>
            <h2 id="dw-photo-title" className="dw-h2">
              Your destination. Your people. <em>Your story.</em>
            </h2>
          </div>
          <ul className="dw-photo__services">
            {photographyServices.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <ul className="dw-photo__grid">
          {gallery.map((g, i) => (
            <li key={g.file} className={`dw-photo__item dw-photo__item--${g.shape}`} data-reveal="image">
              <button
                type="button"
                className="dw-photo__open"
                onClick={(e) => open(i, e.currentTarget)}
                aria-label={`Open photo: ${g.alt}`}
              >
                <WeddingImage image={g} sizes="(min-width: 900px) 33vw, 50vw" compact />
                <span className="dw-photo__caption">{g.caption}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className="dw-lightbox"
        aria-label="Wedding photo viewer"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {current && index !== null && (
          <div className="dw-lightbox__inner">
            <div key={current.file} className="dw-lightbox__frame">
              <WeddingImage image={current} sizes="90vw" />
            </div>
            <div className="dw-lightbox__bar">
              <p className="dw-lightbox__caption">
                <span>
                  {index + 1} / {gallery.length}
                </span>{" "}
                {current.caption}
              </p>
              <div className="dw-lightbox__controls">
                <button type="button" onClick={() => step(-1)} aria-label="Previous photo">
                  ←
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next photo">
                  →
                </button>
                <button type="button" onClick={close} aria-label="Close photo viewer" autoFocus>
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}

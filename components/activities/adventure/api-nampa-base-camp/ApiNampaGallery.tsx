"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { GALLERY } from "./data/content";
import { ANCHORS } from "./data/routes";
import { ArrowLeft, ArrowRight, Close, Expand } from "./shared/icons";
import "./ApiNampaGallery.css";

export default function ApiNampaGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number, el: HTMLButtonElement) => {
    triggerRef.current = el;
    setIndex(i);
    dialogRef.current?.showModal();
  };

  const close = useCallback(() => dialogRef.current?.close(), []);

  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + GALLERY.length) % GALLERY.length)),
    [],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      setIndex(null);
      triggerRef.current?.focus();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    dialog.addEventListener("close", onClose);
    dialog.addEventListener("keydown", onKey);
    return () => {
      dialog.removeEventListener("close", onClose);
      dialog.removeEventListener("keydown", onKey);
    };
  }, [step]);

  const current = index === null ? null : GALLERY[index];

  return (
    <section className="an-section an-section--stone an-gallery" id={ANCHORS.gallery} aria-labelledby="an-gallery-title">
      <div className="an-container">
        <div className="an-heading an-heading--center">
          <p className="an-heading__eyebrow">Gallery</p>
          <h2 className="an-heading__title" id="an-gallery-title">
            Moments from the Api Nampa Wilderness
          </h2>
        </div>

        <ul className="an-gallery__grid" role="list">
          {GALLERY.map((img, i) => (
            <li key={img.src + i} className={`an-gallery__item an-gallery__item--${img.shape ?? "square"}`}>
              <button
                type="button"
                className="an-gallery__btn"
                onClick={(e) => open(i, e.currentTarget)}
                aria-label={`View larger: ${img.caption}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="an-gallery__image"
                />
                <span className="an-gallery__cap" aria-hidden="true">
                  {img.caption}
                  <Expand />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className="an-lightbox"
        aria-label="Image viewer"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {current ? (
          <figure className="an-lightbox__figure">
            <div className="an-lightbox__frame">
              <Image src={current.src} alt={current.alt} fill sizes="92vw" className="an-lightbox__image" />
            </div>
            <figcaption className="an-lightbox__caption">
              <span>{current.caption}</span>
              <span className="an-lightbox__count">
                {(index ?? 0) + 1} / {GALLERY.length}
              </span>
            </figcaption>
          </figure>
        ) : null}
        <button type="button" className="an-lightbox__close" onClick={close} aria-label="Close image viewer">
          <Close />
        </button>
        <button type="button" className="an-lightbox__nav an-lightbox__nav--prev" onClick={() => step(-1)} aria-label="Previous image">
          <ArrowLeft />
        </button>
        <button type="button" className="an-lightbox__nav an-lightbox__nav--next" onClick={() => step(1)} aria-label="Next image">
          <ArrowRight />
        </button>
      </dialog>
    </section>
  );
}

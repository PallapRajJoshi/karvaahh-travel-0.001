"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { TsumImage } from "@/data/destinations/tsum-valley/types";
import { ChevronLeft, ChevronRight, Close, Expand } from "./shared/Icons";

type GalleryImage = TsumImage & { caption: string; shape: "tall" | "wide" | "square" };

/**
 * Editorial grid + lightbox built on the native <dialog> element, which gives
 * focus trapping, Esc-to-close and inert background for free.
 */
export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };

  const close = useCallback(() => dialogRef.current?.close(), []);

  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      setIndex((last) => {
        if (last !== null) triggerRefs.current[last]?.focus();
        return null;
      });
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

  const current = index !== null ? images[index] : null;

  return (
    <>
      <ul className="tsum-gallery__grid">
        {images.map((img, i) => (
          <li key={img.src} className={`tsum-gallery__item tsum-gallery__item--${img.shape}`}>
            <button
              type="button"
              className="tsum-gallery__btn"
              onClick={() => open(i)}
              ref={(el) => { triggerRefs.current[i] = el; }}
              aria-label={`View larger: ${img.alt}`}
            >
              <span className="tsum-media tsum-gallery__media">
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes={img.shape === "wide" ? "(max-width: 700px) 100vw, 50vw" : "(max-width: 700px) 50vw, 25vw"}
                />
              </span>
              <span className="tsum-gallery__caption">{img.caption}</span>
              <span className="tsum-gallery__expand" aria-hidden="true"><Expand /></span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="tsum-lightbox"
        aria-label="Image viewer"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        {current && (
          <div className="tsum-lightbox__inner">
            <figure className="tsum-lightbox__figure">
              <div className="tsum-lightbox__frame">
                <Image src={current.src} alt={current.alt} fill sizes="90vw" />
              </div>
              <figcaption className="tsum-lightbox__caption">
                <strong>{current.caption}</strong>
                <span>{current.alt}</span>
                <span className="tsum-lightbox__count" aria-live="polite">
                  {(index ?? 0) + 1} / {images.length}
                </span>
              </figcaption>
            </figure>
            <button type="button" className="tsum-lightbox__nav tsum-lightbox__nav--prev" onClick={() => step(-1)} aria-label="Previous image">
              <ChevronLeft />
            </button>
            <button type="button" className="tsum-lightbox__nav tsum-lightbox__nav--next" onClick={() => step(1)} aria-label="Next image">
              <ChevronRight />
            </button>
            <button type="button" className="tsum-lightbox__close" onClick={close} aria-label="Close image viewer" autoFocus>
              <Close />
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}

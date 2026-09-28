"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Media from "./Media";
import Icon from "./Icon";
import type { EtpImage } from "@/data/adventure/everest-three-passes-trek/types";
import "./Gallery.css";

/**
 * Editorial grid + native <dialog> lightbox (focus trapping, Esc and backdrop
 * handled by the browser). Arrow keys move between photos. Data arrives as a
 * prop so the full content file is not shipped to the client.
 */
export type GalleryItem = EtpImage & { caption: string; wide?: boolean; tall?: boolean };

export default function Gallery({ items: gallery }: { items: GalleryItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };

  const close = useCallback(() => dialogRef.current?.close(), []);

  const count = gallery.length;
  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i === null ? i : (i + dir + count) % count));
    },
    [count],
  );

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    const onClose = () => setIndex(null);
    d.addEventListener("keydown", onKey);
    d.addEventListener("close", onClose);
    return () => {
      d.removeEventListener("keydown", onKey);
      d.removeEventListener("close", onClose);
    };
  }, [go]);

  const current = index === null ? null : gallery[index];

  return (
    <section className="etp-section etp-section--white etp-gallery" aria-labelledby="etp-gallery-title">
      <div className="etp-wrap">
        <header className="etp-heading etp-heading--center" data-reveal>
          <p className="etp-heading__eyebrow">Gallery</p>
          <h2 className="etp-heading__title" id="etp-gallery-title">
            Moments Across the Everest Three Passes
          </h2>
        </header>

        <ul className="etp-gallery__grid">
          {gallery.map((g, i) => (
            <li
              key={`${g.file}-${i}`}
              className={`etp-gallery__item${g.wide ? " is-wide" : ""}${g.tall ? " is-tall" : ""}`}
              data-reveal="fade"
            >
              <button type="button" className="etp-gallery__btn" onClick={() => open(i)} aria-label={`Open photo: ${g.caption}`}>
                <Media image={g} sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" className="etp-gallery__media" quietPlaceholder />
                <span className="etp-gallery__cap">{g.caption}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className="etp-lightbox"
        aria-label={current ? `${current.caption} — photo ${index! + 1} of ${gallery.length}` : "Photo viewer"}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        {current && (
          <figure className="etp-lightbox__fig">
            <Media image={current} sizes="100vw" className="etp-lightbox__media" />
            <figcaption className="etp-lightbox__cap">
              <span>{current.caption}</span>
              <span className="etp-lightbox__count">
                {index! + 1} / {gallery.length}
              </span>
            </figcaption>
          </figure>
        )}
        <button type="button" className="etp-lightbox__btn etp-lightbox__close" onClick={close} aria-label="Close photo viewer">
          <Icon name="close" />
        </button>
        <button type="button" className="etp-lightbox__btn etp-lightbox__prev" onClick={() => go(-1)} aria-label="Previous photo">
          <Icon name="arrow" className="etp-rail__flip" />
        </button>
        <button type="button" className="etp-lightbox__btn etp-lightbox__next" onClick={() => go(1)} aria-label="Next photo">
          <Icon name="arrow" />
        </button>
      </dialog>
    </section>
  );
}

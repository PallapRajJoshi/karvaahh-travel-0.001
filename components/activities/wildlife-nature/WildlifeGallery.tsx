"use client";

import { useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { GALLERY } from "@/data/activities/wildlife-nature/gallery";
import { IMAGES } from "@/data/activities/wildlife-nature/images";
import { WildImage } from "./shared/WildImage";
import { Reveal } from "./shared/Reveal";
import { SectionHeading } from "./shared/SectionHeading";
import { Icon } from "./shared/Icon";
import "./WildlifeGallery.css";

export function WildlifeGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : GALLERY[active];

  const openAt = (i: number) => {
    setActive(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = (dir: 1 | -1) =>
    setActive((i) => (i === null ? i : (i + dir + GALLERY.length) % GALLERY.length));

  const onKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };
  const onBackdrop = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) close();
  };

  return (
    <section className="wn-section wn-section--dark" aria-labelledby="wn-gal-title">
      <div className="wn-container">
        <SectionHeading
          id="wn-gal-title"
          eyebrow="Gallery"
          title="Into Nepal's Wilderness"
          lead="Species, habitats and landscapes from across the journeys on this page. Select any image to view it larger."
        />

        <ul className="wn-gal__grid">
          {GALLERY.map((g, i) => (
            <li key={g.id} className={`wn-gal__cell wn-gal__cell--${g.layout}`}>
              <Reveal delay={(i % 4) * 60} className="wn-gal__reveal">
                <button
                  type="button"
                  className="wn-gal__tile wn-media"
                  onClick={() => openAt(i)}
                  aria-label={`View larger: ${g.caption}`}
                >
                  <WildImage name={g.image} sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 400px" />
                  <span className="wn-gal__cap">{g.caption}</span>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className="wn-lb"
        aria-label="Image viewer"
        onClose={() => setActive(null)}
        onKeyDown={onKeyDown}
        onClick={onBackdrop}
      >
        {current ? (
          <figure className="wn-lb__fig">
            <div className="wn-media wn-lb__media">
              <WildImage name={current.image} sizes="90vw" />
            </div>
            <figcaption className="wn-lb__cap">
              <span>{current.caption}</span>
              <span className="wn-lb__count">
                {(active ?? 0) + 1} / {GALLERY.length}
              </span>
            </figcaption>
            <p className="wn-visually-hidden">{IMAGES[current.image].alt}</p>
          </figure>
        ) : null}
        <button type="button" className="wn-lb__btn wn-lb__close" onClick={close} aria-label="Close viewer">
          <Icon name="close" size={22} />
        </button>
        <button type="button" className="wn-lb__btn wn-lb__prev" onClick={() => step(-1)} aria-label="Previous image">
          <Icon name="chevron-left" size={24} />
        </button>
        <button type="button" className="wn-lb__btn wn-lb__next" onClick={() => step(1)} aria-label="Next image">
          <Icon name="chevron-right" size={24} />
        </button>
      </dialog>
    </section>
  );
}

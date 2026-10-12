"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Testimonial } from "@/lib/about/types";
import { AboutIcon } from "../shared/AboutIcon";

interface TestimonialSliderProps {
  items: Testimonial[];
}

function clampRating(value: number): number {
  return Math.min(5, Math.max(0, Math.round(value)));
}

/**
 * Scroll-snap carousel: native scrolling (touch, trackpad, keyboard on the focusable
 * region) plus prev/next buttons. No timers and no auto-advance, so nothing moves
 * unless the visitor asks it to.
 */
export function TestimonialSlider({ items }: TestimonialSliderProps) {
  const trackRef = useRef<HTMLUListElement | null>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("li");
    const step = (card?.offsetWidth ?? track.clientWidth) + 20;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <div className="ab-slider" data-reveal="">
      <ul
        ref={trackRef}
        className="ab-slider__track"
        tabIndex={0}
        aria-label="Traveler testimonials, scroll horizontally"
      >
        {items.map((item) => {
          const rating = clampRating(item.rating);
          return (
            <li className="ab-slider__card" key={item.id}>
              <figure className="ab-slider__figure">
                <p className="ab-slider__stars" role="img" aria-label={`Rated ${rating} out of 5`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <AboutIcon key={i} name="star" className={i < rating ? "is-on" : "is-off"} />
                  ))}
                </p>
                <blockquote className="ab-slider__quote">{item.quote}</blockquote>
                <figcaption className="ab-slider__who">
                  {item.photo ? (
                    <span className="ab-slider__avatar">
                      <Image src={item.photo} alt="" fill sizes="48px" style={{ objectFit: "cover" }} />
                    </span>
                  ) : null}
                  <span>
                    <span className="ab-slider__name">{item.name}</span>
                    <span className="ab-slider__dest">{item.destination}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>

      {items.length > 1 ? (
        <div className="ab-slider__controls">
          <button type="button" className="ab-slider__btn" onClick={() => scrollByCard(-1)} aria-label="Previous testimonial">
            <AboutIcon name="arrow" className="ab-slider__btn-icon ab-slider__btn-icon--prev" />
          </button>
          <button type="button" className="ab-slider__btn" onClick={() => scrollByCard(1)} aria-label="Next testimonial">
            <AboutIcon name="arrow" className="ab-slider__btn-icon" />
          </button>
        </div>
      ) : null}
    </div>
  );
}

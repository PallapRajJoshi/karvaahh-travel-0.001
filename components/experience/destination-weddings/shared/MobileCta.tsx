"use client";

import { useEffect, useState } from "react";
import { ANCHORS } from "../data/config";
import "./shared.css";

/**
 * Sticky bottom CTA for small screens. Appears after the hero and steps
 * aside when the proposal form itself is on screen.
 */
export default function MobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const plan = document.getElementById(ANCHORS.plan);
    let pastHero = false;
    let formInView = false;
    const update = () => setShow(pastHero && !formInView);

    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.85;
      update();
    };

    const observer = plan
      ? new IntersectionObserver(([entry]) => {
          formInView = entry.isIntersecting;
          update();
        })
      : null;
    if (plan && observer) observer.observe(plan);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className={`dw-mobile-cta${show ? " is-visible" : ""}`} aria-hidden={!show}>
      <a href={`#${ANCHORS.plan}`} className="dw-btn dw-mobile-cta__btn" tabIndex={show ? 0 : -1}>
        Plan My Destination Wedding
      </a>
    </div>
  );
}

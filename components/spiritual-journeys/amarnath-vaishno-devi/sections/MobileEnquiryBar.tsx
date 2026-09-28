"use client";

import { useEffect, useState } from "react";
import "./MobileEnquiryBar.css";

/**
 * Mobile-only sticky CTA. Appears after the hero and hides while the enquiry form is on screen,
 * so it never covers the form it points to.
 */
export function MobileEnquiryBar() {
  const [pastHero, setPastHero] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".avd-hero");
    const form = document.getElementById("enquiry");
    if (!("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) setPastHero(!e.isIntersecting);
        if (e.target === form) setFormVisible(e.isIntersecting);
      }
    });
    if (hero) obs.observe(hero);
    if (form) obs.observe(form);
    return () => obs.disconnect();
  }, []);

  const shown = pastHero && !formVisible;

  return (
    <div className={`avd-mbar${shown ? " is-shown" : ""}`} aria-hidden={!shown}>
      <p className="avd-mbar__text">Planning this Yatra?</p>
      <a href="#enquiry" className="avd-btn avd-btn--primary avd-mbar__btn" tabIndex={shown ? 0 : -1}>
        Enquire now
      </a>
    </div>
  );
}

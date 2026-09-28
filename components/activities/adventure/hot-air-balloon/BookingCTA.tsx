"use client";

import { useEffect, useState } from "react";
import { ANCHORS, enquireHref } from "./data/hotAirBalloonData";
import "./BookingCTA.css";

/** Mobile-only sticky enquiry bar. Appears after the hero, hides at the form. */
export default function BookingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hab-hero");
    const form = document.getElementById(ANCHORS.availability)?.closest("section");
    let pastHero = false;
    let atForm = false;
    const update = () => setVisible(pastHero && !atForm);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.target === hero) pastHero = !e.isIntersecting;
        if (e.target === form) atForm = e.isIntersecting;
      });
      update();
    });
    if (hero) io.observe(hero);
    if (form) io.observe(form);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`hab-sticky${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <div className="hab-sticky__text">
        <strong>Hot air balloon</strong>
        <span>Seasonal · from NPR 8,000 (indicative)</span>
      </div>
      <a href={enquireHref()} className="hab-btn hab-btn--primary hab-sticky__btn" tabIndex={visible ? 0 : -1}>
        Check Availability
      </a>
    </div>
  );
}

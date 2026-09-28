"use client";

import { useEffect, useState } from "react";
import { SECTION } from "./data/config";
import "./mobile-enquiry-bar.css";

/**
 * Small-screen enquiry shortcut. Appears after the hero, hides while the
 * enquiry section is on screen and once the page end is reached, so it never
 * covers the form or the site footer.
 */
export default function MobileEnquiryBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const enquire = document.getElementById(SECTION.enquire);
    const end = document.getElementById("hry-end");
    if (!hero || !enquire || !end || !("IntersectionObserver" in window)) return;

    const state = { hero: true, enquire: false, end: false };
    const update = () => setVisible(!state.hero && !state.enquire && !state.end);

    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) state.hero = e.isIntersecting;
        if (e.target === enquire) state.enquire = e.isIntersecting;
        if (e.target === end) state.end = e.isIntersecting || e.boundingClientRect.top < 0;
      }
      update();
    });
    [hero, enquire, end].forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hry-mbar" data-visible={visible} aria-hidden={!visible}>
      <p className="hry-mbar__text">Plan your Haridwar &amp; Rishikesh yatra</p>
      <a href={`#${SECTION.enquire}`} className="hry-btn hry-btn--primary hry-mbar__btn" tabIndex={visible ? 0 : -1}>
        Enquire now
      </a>
    </div>
  );
}

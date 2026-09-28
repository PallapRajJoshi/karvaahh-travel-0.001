"use client";

import { useEffect, useState } from "react";
import { ENQUIRY_ANCHOR } from "./data/zipFlyingData";

/** Mobile-only. Appears once the hero has scrolled away; hides again over the enquiry form. */
export default function StickyEnquiryCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".zf-hero");
    const form = document.getElementById("enquiry");
    if (!hero || !form || !("IntersectionObserver" in window)) return;
    const seen = new Map<Element, boolean>([[hero, true], [form, false]]);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => seen.set(e.target, e.isIntersecting));
      setShow(!seen.get(hero) && !seen.get(form));
    });
    io.observe(hero);
    io.observe(form);
    return () => io.disconnect();
  }, []);

  return (
    <a className={`zf-sticky-cta${show ? " is-visible" : ""}`} href={ENQUIRY_ANCHOR} aria-hidden={!show} tabIndex={show ? 0 : -1}>
      Check ZipFlyer Options
    </a>
  );
}

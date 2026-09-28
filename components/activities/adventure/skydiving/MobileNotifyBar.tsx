"use client";

import { useEffect, useState } from "react";
import NotifyLink from "./NotifyLink";

/** Mobile-only sticky CTA. Hidden over the hero and whenever a [data-sky-hide-bar] section is visible. */
export default function MobileNotifyBar() {
  const [pastHero, setPastHero] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setBlocked(visible.size > 0);
    });
    document.querySelectorAll("[data-sky-hide-bar]").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const shown = pastHero && !blocked;

  return (
    <div className={`sky-mbar${shown ? " is-shown" : ""}`}>
      <NotifyLink className="sky-btn sky-btn--gold sky-mbar__btn">Notify Me When Dates Are Announced</NotifyLink>
    </div>
  );
}

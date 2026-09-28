"use client";

import { useEffect, useRef } from "react";

type Props = { count?: number; className?: string };

/**
 * Sparse drifting particles: a mix of faint stars/dust and warm embers.
 * Pauses when off-screen or when the tab is hidden; disabled entirely
 * for prefers-reduced-motion.
 */
export default function EmberParticles({ count = 42, className = "" }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const small = window.matchMedia("(max-width: 767px)").matches;
    const n = small ? Math.round(count * 0.5) : count;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0, h = 0, raf = 0, running = false;

    type Pt = { x: number; y: number; r: number; vx: number; vy: number; a: number; ember: boolean; ph: number };
    let pts: Pt[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const spawn = (anywhere: boolean): Pt => {
      const ember = Math.random() < 0.35;
      return {
        x: Math.random() * w,
        y: anywhere ? Math.random() * h : h + 10,
        r: ember ? 0.8 + Math.random() * 1.4 : 0.4 + Math.random() * 0.9,
        vx: (Math.random() - 0.5) * 0.15,
        vy: ember ? -(0.15 + Math.random() * 0.35) : -(0.02 + Math.random() * 0.06),
        a: ember ? 0.35 + Math.random() * 0.4 : 0.15 + Math.random() * 0.35,
        ember, ph: Math.random() * Math.PI * 2,
      };
    };

    resize();
    pts = Array.from({ length: n }, () => spawn(true));

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx + Math.sin(t / 1800 + p.ph) * 0.08;
        p.y += p.vy;
        if (p.y < -10 || p.x < -10 || p.x > w + 10) pts[i] = spawn(false);
        const flicker = 0.7 + 0.3 * Math.sin(t / 400 + p.ph);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.ember
          ? `rgba(240, 150, 70, ${p.a * flicker})`
          : `rgba(247, 245, 239, ${p.a * flicker})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    const start = () => { if (!running && !document.hidden) { running = true; raf = requestAnimationFrame(draw); } };
    const stop = () => { running = false; cancelAnimationFrame(raf); };

    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()));
    io.observe(canvas);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("resize", resize);

    return () => {
      stop(); io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return <canvas ref={ref} className={`cmp-particles ${className}`} aria-hidden="true" />;
}

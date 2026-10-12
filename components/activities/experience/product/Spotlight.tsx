"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Check, Info, MessageCircle } from "lucide-react";
import { OpenBookingButton } from "../booking";
import ParallaxImage from "../ParallaxImage";
import type { Spotlight as SpotlightData } from "../product-types";
import { CONTACT } from "../site";
import { BTN_PRIMARY, CONTAINER, PageIcon, PageImageFill, SERIF, SectionHeading } from "../ui";
import { ANCHOR } from "./constants";

const EASE = [0.22, 1, 0.36, 1] as const;

function Cta({ cta }: { cta: NonNullable<SpotlightData["cta"]> }) {
  const cls = `group ${BTN_PRIMARY}`;
  const inner = (
    <>
      {cta.message && !cta.href ? <MessageCircle className="h-4 w-4" aria-hidden="true" /> : null}
      {cta.label}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </>
  );
  if (cta.href)
    return (
      <Link href={cta.href} className={cls}>
        {inner}
      </Link>
    );
  if (cta.message)
    return (
      <a href={CONTACT.whatsappHref(cta.message)} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  return <OpenBookingButton className={cls}>{inner}</OpenBookingButton>;
}

function Body({ s }: { s: SpotlightData }) {
  const dark = s.dark || s.variant === "immersive";
  return (
    <>
      <div className={`mt-6 space-y-4 text-[16px] leading-8 ${dark ? "text-white/80" : "text-[#4A5B6C]"}`}>
        {s.paragraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>
      {s.points && (
        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {s.points.map((pt, i) => (
            <motion.li
              key={pt}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i, ease: EASE }}
              className={`flex items-start gap-2.5 text-[14.5px] font-medium ${dark ? "text-white" : "text-[#0B2942]"}`}
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F4A300] text-[#0C1D30]">
                <Check className="h-3 w-3" aria-hidden="true" />
              </span>
              {pt}
            </motion.li>
          ))}
        </ul>
      )}
      {(s.cta || s.note) && (
        <div className="mt-8">
          {s.cta && <Cta cta={s.cta} />}
          {s.note && (
            <p className={`mt-5 flex items-start gap-2 text-[12.5px] leading-5 ${dark ? "text-white/55" : "text-[#5B6B7B]"}`}>
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C98500]" aria-hidden="true" />
              {s.note}
            </p>
          )}
        </div>
      )}
    </>
  );
}

function CardsGrid({ s }: { s: SpotlightData }) {
  if (!s.cards) return null;
  const dark = s.dark;
  return (
    <ul className={`mt-12 grid gap-4 sm:grid-cols-2 ${s.cards.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {s.cards.map((c, i) => (
        <motion.li
          key={c.title}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: EASE }}
          className={`group rounded-[24px] p-6 transition-all duration-500 hover:-translate-y-1 ${
            dark ? "bg-white/[0.06] ring-1 ring-white/10 hover:bg-white/[0.1]" : "bg-white ring-1 ring-[#0B2942]/[0.07] hover:shadow-[0_24px_50px_-30px_rgba(11,41,66,0.5)]"
          }`}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B2942] text-[#F4A300] transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[#F4A300] group-hover:text-[#0C1D30]">
            <PageIcon name={c.icon} className="h-5 w-5" />
          </span>
          <h3 className={`mt-5 text-[17px] font-semibold ${dark ? "text-white" : "text-[#0B2942]"}`}>{c.title}</h3>
          <p className={`mt-2 text-[14px] leading-6 ${dark ? "text-white/70" : "text-[#5B6B7B]"}`}>{c.text}</p>
        </motion.li>
      ))}
    </ul>
  );
}

/** Full-bleed image with a parallax drift and the copy over it. */
function Immersive({ s }: { s: SpotlightData }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <section ref={ref} id={s.id} aria-labelledby={`${s.id}-title`} className={`${ANCHOR} relative isolate overflow-hidden bg-[#071421] py-24 text-white lg:py-36`}>
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute -inset-y-[12%] inset-x-0 -z-10">
        {s.image ? <PageImageFill image={s.image} sizes="100vw" /> : <div className="absolute inset-0 bg-gradient-to-br from-[#123653] to-[#071421]" />}
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(7,20,33,0.94)_0%,rgba(7,20,33,0.78)_50%,rgba(7,20,33,0.35)_100%)]" />
      <div className={CONTAINER}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="max-w-[680px]"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#F4A300] sm:text-xs">{s.eyebrow}</p>
          <h2 id={`${s.id}-title`} className={`${SERIF} mt-4 text-[40px] font-medium leading-[1.04] tracking-[-0.02em] sm:text-[54px] lg:text-[64px]`}>
            {s.title}
          </h2>
          <Body s={s} />
        </motion.div>
        <CardsGrid s={{ ...s, dark: true }} />
      </div>
    </section>
  );
}

/**
 * Generic storytelling block for a yatra mode, an audience or a destination.
 * Variants: split (image beside copy), immersive (full-bleed image) and
 * cards (heading + card grid).
 */
export default function Spotlight({ spotlight: s }: { spotlight: SpotlightData }) {
  if (s.variant === "immersive") return <Immersive s={s} />;
  const dark = s.dark;
  const bg = dark ? "bg-[#0B2942] text-white" : "bg-[#F8F6F1]";

  if (s.variant === "cards" || !s.image) {
    return (
      <section id={s.id} aria-labelledby={`${s.id}-title`} className={`${ANCHOR} ${bg} py-20 sm:py-24 lg:py-28`}>
        <div className={CONTAINER}>
          <div className="mx-auto max-w-[760px] text-center">
            <SectionHeading id={`${s.id}-title`} eyebrow={s.eyebrow} title={s.title} dark={dark} center />
            <div className="[&_ul]:text-left">
              <Body s={s} />
            </div>
          </div>
          <CardsGrid s={s} />
        </div>
      </section>
    );
  }

  return (
    <section id={s.id} aria-labelledby={`${s.id}-title`} className={`${ANCHOR} ${bg} overflow-hidden py-20 sm:py-24 lg:py-28`}>
      <div className={`${CONTAINER} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
        <motion.div
          initial={{ clipPath: "inset(10% 10% 10% 10% round 28px)", opacity: 0.4 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0% round 28px)", opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1.1, ease: EASE }}
          className={s.reverse ? "lg:order-2" : ""}
        >
          <ParallaxImage image={s.image} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/3] rounded-[28px] lg:aspect-[5/6]" />
        </motion.div>
        <div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }}>
            <SectionHeading id={`${s.id}-title`} eyebrow={s.eyebrow} title={s.title} dark={dark} />
          </motion.div>
          <Body s={s} />
        </div>
      </div>
      {s.cards && (
        <div className={CONTAINER}>
          <CardsGrid s={s} />
        </div>
      )}
    </section>
  );
}

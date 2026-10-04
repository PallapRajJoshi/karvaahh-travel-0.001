import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { contactInfo } from "@/lib/navigation-data";
import type { HelicopterProductTour } from "../product-types";
import { CONTACT } from "../site";
import { BTN_GHOST, BTN_PRIMARY, SERIF } from "../ui";

export default function ProductCta({ tour }: { tour: HelicopterProductTour }) {
  const { cta } = tour;
  const quoteHref = `mailto:${contactInfo.nepal.email}?subject=${encodeURIComponent(cta.quoteSubject)}`;

  return (
    <section
      id="enquire"
      aria-labelledby="cta-title"
      className="relative isolate flex min-h-[560px] scroll-mt-[100px] md:scroll-mt-[144px] items-center overflow-hidden bg-[#071421] py-24 text-white lg:min-h-[640px]"
    >
      <Image
        src={cta.image.src}
        alt={cta.image.alt}
        fill
        sizes="100vw"
        className="-z-10 object-cover"
        style={{ objectPosition: cta.image.objectPosition ?? "center" }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#071421]/65" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(7,20,33,0.15)_0%,rgba(7,20,33,0.85)_75%)]"
      />

      <Reveal className="mx-auto w-full max-w-[860px] px-5 text-center sm:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#F4A300] sm:text-xs">Karvaahh Tours &amp; Travels</p>
        <h2 id="cta-title" className={`${SERIF} mt-5 text-[36px] font-medium leading-[1.06] tracking-[-0.02em] sm:text-[52px] lg:text-[62px]`}>
          {cta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[600px] text-[16px] leading-7 text-white/80 sm:text-[17px] sm:leading-8">{cta.text}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <a href={CONTACT.phoneHref} className={BTN_PRIMARY}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            {cta.primaryLabel}
          </a>
          <a href={quoteHref} className={BTN_GHOST}>
            <Mail className="h-4 w-4" aria-hidden="true" />
            Get a Quote
          </a>
          <a href={CONTACT.whatsappHref(cta.planMessage)} target="_blank" rel="noopener noreferrer" className={BTN_GHOST}>
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp Karvaahh
          </a>
        </div>
        <p className="mt-5 text-[13px] text-white/55">
          Call {CONTACT.phoneDisplay} · Email {contactInfo.nepal.email}
        </p>
      </Reveal>
    </section>
  );
}

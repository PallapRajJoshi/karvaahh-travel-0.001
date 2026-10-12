import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Reveal from "@/components/shared/Reveal";
import "@/components/shared/reveal.css";
import "@/components/shared/breadcrumb.css";
import { HELICOPTER_CATALOG, type CatalogSlug } from "@/data/helicopter-tours/catalog";
import { listHelicopterTours } from "@/data/helicopter-tours";
import { mustangRidgeMonastery } from "@/data/helicopter-tours/images";
import HeliTrustBar from "@/components/activities/experience/product/HeliTrustBar";
import { serializeJsonLd } from "@/components/activities/experience/structured-data";
import { SITE_URL } from "@/components/activities/experience/site";
import { CONTAINER, HelicopterIcon, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";

/** Collection index: every helicopter destination from the registry. */
export default function HelicopterCollection() {
  const tours = listHelicopterTours();
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Karvaahh Helicopter Tours",
    itemListElement: tours.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.title, url: `${SITE_URL}${t.path}` })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(itemList) }} />
      <Navbar />
      <main className="font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">
        <section aria-labelledby="collection-title" className="relative isolate overflow-hidden bg-[#071421] text-white">
          <Image
            src={mustangRidgeMonastery.src}
            alt={mustangRidgeMonastery.alt}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="-z-10 object-cover"
            style={{ objectPosition: mustangRidgeMonastery.objectPosition }}
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,20,33,0.92)_0%,rgba(7,20,33,0.6)_55%,rgba(7,20,33,0.25)_100%)]" />
          <div className={`${CONTAINER} py-20 sm:py-28 lg:py-32`}>
            <Breadcrumb className="pp-breadcrumb--on-dark text-white" items={[{ label: "Home", href: "/" }, { label: "Helicopter Tours" }]} />
            <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#F4A300]/40 bg-[#F4A300]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F4A300]">
              <HelicopterIcon className="h-3.5 w-3.5" />
              Karvaahh Helicopter Experiences
            </p>
            <h1 id="collection-title" className={`${SERIF} mt-6 max-w-[820px] text-[42px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-[60px] lg:text-[76px]`}>
              Helicopter Tours in <span className="text-[#F4A300]">Nepal & the Himalaya</span>
            </h1>
            <p className="mt-6 max-w-[620px] text-[16px] leading-8 text-white/80">
              Pilgrimages, scenic flights and remote mountain kingdoms — every journey planned around your dates, with availability, permits and prices confirmed before you book.
            </p>
          </div>
        </section>

        <HeliTrustBar />

        <section aria-labelledby="tours-title" className="bg-[#F8F6F1] pb-24 pt-10">
          <div className={CONTAINER}>
            <SectionHeading id="tours-title" eyebrow="All Destinations" title="Choose Your Helicopter Experience" />
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tours.map((t, i) => {
                const c = HELICOPTER_CATALOG[t.slug as CatalogSlug];
                return (
                  <li key={t.slug}>
                    <Reveal delay={(i % 3) * 90} className="h-full">
                      <Link
                        href={t.path}
                        className="group flex h-full flex-col overflow-hidden rounded-[26px] bg-white ring-1 ring-[#0B2942]/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,41,66,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                            <PageImageFill image={c?.image ?? t.hero.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                          </div>
                          <span className="absolute left-4 top-4 rounded-full bg-[#071421]/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                            {c?.region ?? t.region}
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <h2 className={`${SERIF} text-[24px] font-medium leading-tight text-[#0B2942]`}>{t.title}</h2>
                          <p className="mt-2 flex-1 text-[14.5px] leading-6 text-[#5B6B7B]">{c?.text ?? t.description}</p>
                          <div className="mt-5 flex items-center justify-between border-t border-[#0B2942]/[0.08] pt-4 text-[13px]">
                            <span className="flex items-center gap-1.5 text-[#5B6B7B]">
                              <MapPin className="h-3.5 w-3.5 text-[#C98500]" aria-hidden="true" />
                              From {c?.from ?? t.startingPoint}
                            </span>
                            <span className="inline-flex items-center gap-1 font-semibold text-[#0B2942]">
                              Explore
                              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

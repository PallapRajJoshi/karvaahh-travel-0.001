"use client";

import "@/app/navbar.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { siteInfo, ctaLink } from "@/lib/navigation-data";
import Logomark from "./Logomark";
import TopBar from "./TopBar";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal"],
  display: "swap",
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      
      {/* TOP CONTACT BAR */}
      <TopBar />

      {/* MAIN NAVIGATION */}
      <div
        className={`border-b transition-all duration-300 ${
          isScrolled
            ? "border-slate-200/70 bg-white/95 shadow-[0_8px_30px_-12px_rgba(10,37,64,0.18)] backdrop-blur-md"
            : "border-slate-100 bg-white"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between px-6 transition-all duration-300 lg:px-10 ${
            isScrolled ? "py-3" : "py-4"
          }`}
        >

          {/* LOGO */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            aria-label={`${siteInfo.brand} — Home`}
          >
            <Logomark className="h-11 w-11" />

            <span
              className={`${fraunces.className} text-[25px] leading-none tracking-tight text-[#0A2540]`}
            >
              {siteInfo.brand}
            </span>
          </Link>


          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-7 lg:flex">
            <DesktopNav />

            {/* CTA */}
            <Link
              href={ctaLink.href}
              className="group flex h-12 items-center justify-center rounded-full bg-[#0A2540] px-6 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(10,37,64,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-[0_12px_28px_rgba(16,185,129,0.22)]"
            >
              {ctaLink.label}
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>


          {/* MOBILE */}
          <MobileNav />

        </div>
      </div>
    </header>
  );
}
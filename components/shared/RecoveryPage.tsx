import Link from "next/link";
import type { ReactNode } from "react";

/** Popular destinations offered when a visitor hits a missing or failed page. */
const SUGGESTIONS = [
  { label: "All Tour Packages", href: "/packages" },
  { label: "Nepal Trekking", href: "/packages/nepal/trekking-hiking-packages" },
  { label: "Kailash Mansarovar Yatra", href: "/packages/kailash-mansarovar-yatra" },
  { label: "Char Dham Yatra", href: "/spiritual-journeys/char-dham-yatra-uttarakhand" },
  { label: "Helicopter Tours", href: "/activities/helicopter-tours" },
  { label: "Destinations", href: "/destinations" },
] as const;

interface RecoveryPageProps {
  eyebrow: string;
  title: string;
  message: string;
  /** Extra action rendered before the default buttons (e.g. "Try again"). */
  action?: ReactNode;
}

/** Shared layout for the 404 and error screens. Server-safe: no client hooks. */
export default function RecoveryPage({ eyebrow, title, message, action }: RecoveryPageProps) {
  return (
    <main
      id="main-content"
      className="relative flex min-h-[78vh] items-center overflow-hidden bg-gradient-to-b from-[#0B2942] via-[#123B5D] to-[#0B2942] px-4 py-24 text-white sm:px-6"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-white/[0.06] sm:h-56"
        viewBox="0 0 1200 260"
        preserveAspectRatio="none"
      >
        <path d="M0 260V150l120-70 90 50 130-100 110 80 120-60 100 70 130-110 120 90 110-40 170 70V260Z" fill="currentColor" />
      </svg>

      <div className="relative mx-auto w-full max-w-3xl text-center motion-safe:animate-[recoveryIn_0.7s_cubic-bezier(0.22,1,0.36,1)_both]">
        <style>{`@keyframes recoveryIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}`}</style>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D39A17]">{eyebrow}</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">{message}</p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          {action}
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D39A17] px-7 font-semibold text-[#0B2942] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#E5AD2A]"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-7 font-semibold text-white transition-colors duration-300 hover:bg-white/10"
          >
            Talk to a Travel Expert
          </Link>
        </div>

        <nav aria-label="Popular pages" className="mt-12">
          <p className="text-sm text-white/60">Or explore popular journeys</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
            {SUGGESTIONS.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="inline-flex min-h-10 items-center rounded-full border border-white/15 bg-white/[0.04] px-4 text-sm text-white/85 transition-colors duration-300 hover:border-[#D39A17]/60 hover:text-white"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}

import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroCTA from './hero/HeroCTA';
import TrustIndicators from './hero/TrustIndicators';
import HeroStats from './hero/HeroStats';

export default function HeroSection() {
  return (
    <section
      aria-label="Karvaahh Tours & Travels — Discover Nepal, experience the extraordinary"
      className="relative h-[100dvh] min-h-[620px] w-full overflow-hidden bg-[#081422] font-[var(--font-body,inherit)]"
    >
      {/* ============================================================
          CINEMATIC VIDEO BACKGROUND
      ============================================================ */}
      <HeroBackground />

      {/* ============================================================
          HERO CONTENT
      ============================================================ */}




      
      <div className="relative z-10 flex h-full min-h-0 flex-col">

        {/* Small spacing below navbar */}
        <div
          className="h-6 shrink-0 sm:h-8 lg:h-10"
          aria-hidden="true"
        />

        {/* ==========================================================
            MAIN CONTENT
        ========================================================== */}
        <div className="mx-auto flex min-h-0 w-full max-w-[1500px] flex-1 items-center px-6 sm:px-10 lg:px-14 xl:px-20">
          <div className="w-full max-w-[760px] pb-4 lg:pb-8">




            {/* Hero heading + description */}
            <HeroContent />

            {/* CTA BUTTONS */}
            <div className="mt-6 sm:mt-7">
              <HeroCTA />
            </div>

            {/* TRUST INDICATORS */}
            <div className="mt-6 hidden lg:block">
              <TrustIndicators />
            </div>

          </div>
        </div>

        {/* ==========================================================
            MOBILE TRUST INDICATORS
        ========================================================== */}
        <div className="px-6 pb-3 sm:px-10 lg:hidden">
          <TrustIndicators />
        </div>

        {/* ==========================================================
            BOTTOM STATS
        ========================================================== */}
        <div className=" max-w-[1500px] shrink-0 px-6 pb-4 sm:px-10 sm:pb-5 lg:px-14 lg:pb-6 xl:px-20">
          <HeroStats />
        </div>

      </div>
    </section>
  );
}
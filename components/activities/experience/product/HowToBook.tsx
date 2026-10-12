import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import { CONTAINER, SERIF } from "../ui";
import Accordion from "../sections/Accordion";

/** Registration steps, departures and booking terms (optional; sits under the booking options). */
export default function HowToBook({ tour }: { tour: HelicopterProductTour }) {
  const { booking } = tour;
  if (!booking) return null;

  return (
    <section aria-labelledby="how-to-book-title" className="bg-[#F8F6F1] pb-20 sm:pb-24 lg:pb-28">
      <div className={CONTAINER}>
        <div className="rounded-[30px] bg-white p-7 ring-1 ring-[#0B2942]/[0.06] sm:p-10">
          <Reveal className="max-w-[720px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C98500]">Registration</p>
            <h2 id="how-to-book-title" className={`${SERIF} mt-3 text-[28px] font-medium leading-tight text-[#0B2942] sm:text-[36px]`}>
              {booking.title}
            </h2>
            <p className="mt-3 text-[15.5px] leading-7 text-[#4A5B6C]">{booking.intro}</p>
          </Reveal>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {booking.steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 80} className="relative h-full rounded-[22px] bg-[#F8F6F1] p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B2942] text-[13px] font-semibold text-[#F4A300]">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-[15.5px] font-semibold text-[#0B2942]">{s.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-[#5B6B7B]">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={120} className="mt-10">
            <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#C98500]">Booking terms</h3>
            <Accordion items={booking.policies.map((p) => ({ title: p.title, body: p.text }))} openFirst={false} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

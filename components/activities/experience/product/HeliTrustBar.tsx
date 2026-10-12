import Reveal from "@/components/shared/Reveal";
import { TRUST_STATEMENTS } from "../site";
import { CONTAINER, PageIcon } from "../ui";

/** Slim band of verified company statements (no invented figures). */
export default function HeliTrustBar() {
  return (
    <section aria-label="Why travel with Karvaahh" className="bg-[#F8F6F1] py-8">
      <div className={CONTAINER}>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 border-y border-[#0B2942]/[0.08] py-6">
          {TRUST_STATEMENTS.map((t, i) => (
            <li key={t.label}>
              <Reveal delay={i * 70} className="flex items-center gap-2.5 text-[13.5px] font-semibold text-[#0B2942]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300]">
                  <PageIcon name={t.icon} className="h-4 w-4" />
                </span>
                {t.label}
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

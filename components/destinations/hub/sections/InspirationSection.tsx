import Link from "next/link";
import type { HubContext } from "@/lib/destinations/discover-routes";
import { ArrowIcon } from "../Icons";
import { Section } from "../Section";
import "./sections.css";

/** Links to journey pages that already exist. Renders nothing if none are found in the project. */
export function InspirationSection({ ctx }: { ctx: HubContext }) {
  if (ctx.knownPages.length === 0) return null;
  return (
    <Section
      id="inspiration"
      eyebrow="Travel inspiration"
      title="Journeys you can plan today"
      lede="Detailed guides to some of our most requested yatras and adventures."
    >
      <ul className="dinspire" role="list">
        {ctx.knownPages.map((k) => (
          <li key={k.href} className="dh-reveal">
            <Link href={k.href} className="dinspire__card">
              <span className="dinspire__label">{k.label}</span>
              <span className="dinspire__blurb">{k.blurb}</span>
              <span className="dinspire__go">
                Read the guide <ArrowIcon />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

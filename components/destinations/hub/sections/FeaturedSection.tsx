import { DestinationFeaturedCard } from "../cards/DestinationFeaturedCard";
import { ArrowIcon } from "../Icons";
import { DESTINATIONS, FEATURED, pick } from "@/lib/destinations/data";
import type { ResolveContext } from "@/lib/destinations/types";
import { Section } from "../Section";
import "./sections.css";

/** "Where Will You Go Next?" — twelve editorial cards, first one double-size. */
export function FeaturedSection({ ctx }: { ctx: ResolveContext }) {
  const items = pick(FEATURED);
  return (
    <Section
      id="featured"
      eyebrow="Most-loved destinations"
      title="Where Will You Go Next?"
      lede="Twelve places travellers ask us about most, from Kathmandu's temple squares to Maldives lagoons."
      actions={
        <a className="dh-link" href="#explore">
          Browse all {DESTINATIONS.length} destinations
          <ArrowIcon width={18} height={18} />
        </a>
      }
    >
      <ul className="dfeatured" role="list">
        {items.map((d, i) => (
          <li key={d.slug} className={`dfeatured__item${i === 0 ? " dfeatured__item--lead" : ""} dh-reveal`}>
            <DestinationFeaturedCard destination={d} ctx={ctx} wide={i === 0} priority={false} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

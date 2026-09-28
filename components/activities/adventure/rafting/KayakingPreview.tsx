import Link from "next/link";
import SectionHeading from "@/components/activities/shared/SectionHeading";
import { kayakingPreview } from "@/data/activities/raftingData";
import { ACTIVITY_ROUTES } from "@/data/activities/activityRoutes";

export default function KayakingPreview() {
  const kayaking = ACTIVITY_ROUTES.kayaking;

  return (
    <section className="kayak" aria-labelledby="kayaking">
      <SectionHeading
        title="Looking for Kayaking?"
        lead="Kayaking deserves its own product page because it ranges from beginner clinics to supported multi-day expeditions."
        id="kayaking"
      />

      <ul className="kayak__list">
        {kayakingPreview.map((option) => (
          <li className="kayak__item" key={option.slug}>
            <h3 className="kayak__title">{option.title}</h3>
            <p className="kayak__where">
              {option.where}
              {option.from ? ` · from ${option.from}` : ""}
            </p>
            <p className="kayak__detail">{option.detail}</p>
            <p className="kayak__price">{option.price}</p>
          </li>
        ))}
      </ul>

      <div className="kayak__actions">
        {kayaking.available ? (
          <Link className="act-btn act-btn--primary" href={kayaking.href}>
            Explore Kayaking
          </Link>
        ) : (
          <>
            <Link className="act-btn act-btn--primary" href="/contact">
              View Kayaking Options
            </Link>
            <p className="kayak__soon">
              The full kayaking page is in preparation. Until it is live, ask us
              directly about clinics, lake sessions and supported expeditions.
            </p>
          </>
        )}
      </div>
    </section>
  );
}

import { khaptadAccessRoutes, khaptadStartingPoints } from "@/data/destinations/khaptad/khaptad-facts";
import KhaptadSectionHeading from "../shared/KhaptadSectionHeading";
import KhaptadRouteSelector from "../shared/KhaptadRouteSelector";
import { useKhaptadReveal } from "../shared/useKhaptadReveal";

export default function KhaptadAccess() {
  const revealRef = useKhaptadReveal<HTMLDivElement>();

  return (
    <section className="khaptad-access" aria-labelledby="khaptad-access-heading">
      <div className="khaptad-page__container">
        <KhaptadSectionHeading
          eyebrow="Getting There"
          title="How to Reach Khaptad National Park"
          description="Khaptad is reached by road to a regional gateway, followed by onward travel and trekking into the park."
        />

        <div className="khaptad-access__routes">
          {khaptadAccessRoutes.map((route) => (
            <div className="khaptad-access__route" key={route.id}>
              <h3>{route.name}</h3>
              <p>{route.description}</p>
            </div>
          ))}
        </div>

        <div ref={revealRef} className="khaptad-reveal khaptad-access__planner">
          <h3 className="khaptad-access__planner-title">Suggested Starting Points</h3>
          <p className="khaptad-access__planner-copy">
            Select a starting point to see what to consider when planning your route.
          </p>
          <KhaptadRouteSelector startingPoints={khaptadStartingPoints} />
        </div>
      </div>
    </section>
  );
}

import { khaptadEssentialsChecklist, khaptadPermitNotes } from "@/data/destinations/khaptad/khaptad-facts";
import KhaptadSectionHeading from "../shared/KhaptadSectionHeading";
import { useKhaptadReveal } from "../shared/useKhaptadReveal";

export default function KhaptadEssentials() {
  const checklistRef = useKhaptadReveal<HTMLDivElement>();
  const permitsRef = useKhaptadReveal<HTMLDivElement>();

  return (
    <section className="khaptad-essentials" aria-labelledby="khaptad-essentials-heading">
      <div className="khaptad-page__container">
        <KhaptadSectionHeading
          eyebrow="Before You Go"
          title="Travel Essentials, Permits & Safety"
          description="A practical checklist and permit guidance for a safe, well-prepared trip."
        />

        <div className="khaptad-essentials__grid">
          <div ref={checklistRef} className="khaptad-reveal khaptad-essentials__panel">
            <h3>Packing Checklist</h3>
            <ul className="khaptad-essentials__checklist">
              {khaptadEssentialsChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div ref={permitsRef} className="khaptad-reveal khaptad-essentials__panel khaptad-essentials__panel--permits">
            <h3>Permits &amp; Regulations</h3>
            <ul className="khaptad-essentials__permits">
              {khaptadPermitNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

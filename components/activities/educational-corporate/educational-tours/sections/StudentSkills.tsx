import { SKILLS, SKILLS_SECTION } from "../data/content";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import "./StudentSkills.css";

const R = 40; // node radius (% of the square stage)

export function StudentSkills() {
  const nodes = SKILLS.map((label, i) => {
    const angle = (i / SKILLS.length) * Math.PI * 2 - Math.PI / 2;
    return { label, x: 50 + R * Math.cos(angle), y: 50 + R * Math.sin(angle) };
  });

  return (
    <section id="skills" className="et-section et-section--dark" aria-labelledby="et-skills-title">
      <div className="et-container">
        <SectionHeading eyebrow={SKILLS_SECTION.eyebrow} title={SKILLS_SECTION.title} id="et-skills-title" align="center" />

        <Reveal className="et-skills__stage">
          <svg className="et-skills__lines" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
            <circle cx="50" cy="50" r={R} className="et-skills__orbit" />
            {nodes.map((n, i) => (
              <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} pathLength={1} className="et-skills__line" style={{ ["--i" as string]: i }} />
            ))}
          </svg>

          <div className="et-skills__center">
            <span className="et-skills__pulse" aria-hidden="true" />
            <strong>{SKILLS_SECTION.center}</strong>
          </div>

          <ul className="et-skills__nodes">
            {nodes.map((n, i) => (
              <li key={n.label} className="et-skills__node" style={{ left: `${n.x}%`, top: `${n.y}%`, ["--i" as string]: i }}>
                {n.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

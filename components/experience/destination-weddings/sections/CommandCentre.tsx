import { commandCentre } from "../data/planning";
import SectionHeading from "../shared/SectionHeading";
import "./CommandCentre.css";

export default function CommandCentre() {
  return (
    <section className="dw-section dw-section--tight dw-command dw-paper" aria-labelledby="dw-command-title">
      <div className="dw-container">
        <SectionHeading
          id="dw-command-title"
          eyebrow="Wedding command centre"
          title={
            <>
              One team coordinating <em>the moving parts</em>
            </>
          }
          intro="Karvaahh acts as a central coordination point connecting destination travel, guest hospitality, wedding services and on-ground execution."
          align="center"
        />

        <figure className="dw-command__chart" data-reveal="">
          <figcaption className="dw-sr-only">
            Organisation: the wedding planner leads the event manager, who coordinates the{" "}
            {commandCentre.teams.join(", ")} teams.
          </figcaption>
          <div className="dw-command__node dw-command__node--lead" aria-hidden="true">
            <span>Your point of contact</span>
            {commandCentre.planner}
          </div>
          <div className="dw-command__stem" aria-hidden="true" />
          <div className="dw-command__node" aria-hidden="true">
            <span>On the ground</span>
            {commandCentre.manager}
          </div>
          <div className="dw-command__stem" aria-hidden="true" />
          <ul className="dw-command__teams" aria-hidden="true">
            {commandCentre.teams.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </figure>
      </div>
    </section>
  );
}

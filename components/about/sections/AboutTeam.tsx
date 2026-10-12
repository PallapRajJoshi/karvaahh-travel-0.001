import Image from "next/image";
import { team, teamCopy } from "@/lib/about/people";
import { AboutIcon } from "../shared/AboutIcon";
import { SectionHeading } from "../shared/SectionHeading";
import { DevPlaceholder } from "./DevPlaceholder";
import "./about-team.css";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function AboutTeam() {
  const isEmpty = team.length === 0;
  if (isEmpty && process.env.NODE_ENV === "production") return null;

  return (
    <section className="ab-section ab-team" aria-labelledby="about-team-title">
      <div className="ab-container">
        <SectionHeading id="about-team-title" eyebrow={teamCopy.eyebrow} title={teamCopy.title} />

        {isEmpty ? (
          <DevPlaceholder what="team members" file="lib/about/people.ts" />
        ) : (
          <ul className="ab-team__grid">
            {team.map((member, i) => (
              <li className="ab-team__card" key={member.id} data-reveal="" style={{ ["--d" as string]: i % 4 }}>
                <div className="ab-team__photo ab-frame">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`Portrait of ${member.name}`}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 44vw, 92vw"
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <span className="ab-team__initials" aria-hidden="true">
                      {initials(member.name)}
                    </span>
                  )}
                </div>
                <h3 className="ab-team__name">{member.name}</h3>
                <p className="ab-team__role">{member.role}</p>
                <p className="ab-team__bio">{member.bio}</p>
                {member.email || member.linkedin ? (
                  <p className="ab-team__links">
                    {member.linkedin ? (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                        <span className="sr-only-ab"> profile of {member.name} (opens in a new tab)</span>
                        <AboutIcon name="arrow" className="ab-team__arrow" />
                      </a>
                    ) : null}
                    {member.email ? (
                      <a href={`mailto:${member.email}`}>
                        Email<span className="sr-only-ab"> {member.name}</span>
                        <AboutIcon name="arrow" className="ab-team__arrow" />
                      </a>
                    ) : null}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

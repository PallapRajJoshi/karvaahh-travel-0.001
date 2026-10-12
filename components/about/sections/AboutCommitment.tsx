import { commitment } from "@/lib/about/copy";
import "./about-commitment.css";

export function AboutCommitment() {
  return (
    <section className="ab-section ab-commit" aria-labelledby="about-commit-title">
      <div className="ab-container ab-commit__grid">
        <div className="ab-commit__main">
          <header className="ab-commit__head" data-reveal="">
            <p className="ab-eyebrow">{commitment.eyebrow}</p>
            <h2 id="about-commit-title" className="ab-commit__title">
              {commitment.title}
            </h2>
          </header>
          <div className="ab-commit__body">
            {commitment.paragraphs.map((text, i) => (
              <p
                key={text}
                className={i === 0 ? "ab-commit__p ab-commit__p--lead" : "ab-commit__p"}
                data-reveal=""
                style={{ ["--d" as string]: i + 1 }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        <blockquote className="ab-commit__highlight">
          {commitment.highlightLines.map((line, i) => (
            <span className="ab-commit__line" key={line} data-reveal="" style={{ ["--d" as string]: i + 1 }}>
              {line}
            </span>
          ))}
        </blockquote>
      </div>
    </section>
  );
}

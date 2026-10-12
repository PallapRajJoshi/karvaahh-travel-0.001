import { CHAPTERS } from "../data/config";
import "./shared.css";

type Props = { index: number; tone?: "light" | "dark" };

/**
 * The small editorial marker that opens each chapter of the story.
 * Decorative for screen readers — section headings carry the meaning.
 */
export default function ChapterMark({ index, tone = "light" }: Props) {
  const chapter = CHAPTERS[index];
  return (
    <div className={`dw-chapter dw-chapter--${tone}`} aria-hidden="true" data-reveal="fade">
      <span className="dw-chapter__numeral">{chapter.numeral}</span>
      <span className="dw-chapter__line" />
      <span className="dw-chapter__label">Chapter · {chapter.label}</span>
    </div>
  );
}

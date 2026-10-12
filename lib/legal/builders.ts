import type {
  CalloutVariant,
  CookieCategoryKey,
  InfoCardItem,
  LegalBlock,
  LegalSection,
  LegalSectionDraft,
  MatrixRow,
} from "./types";

/**
 * Small authoring helpers so the content files stay readable.
 * They return plain data — nothing here renders UI.
 */

/** Assigns zero-padded numbers ("01", "02" …) so reordering never needs manual renumbering. */
export function defineSections(drafts: LegalSectionDraft[]): LegalSection[] {
  const seen = new Set<string>();
  return drafts.map((draft, index) => {
    if (seen.has(draft.id)) {
      throw new Error(`Duplicate legal section id: "${draft.id}"`);
    }
    seen.add(draft.id);
    return { ...draft, number: String(index + 1).padStart(2, "0") };
  });
}

export function section(
  id: string,
  title: string,
  content: string[],
  blocks?: LegalBlock[],
): LegalSectionDraft {
  return blocks && blocks.length > 0
    ? { id, title, content, blocks }
    : { id, title, content };
}

export const para = (text: string): LegalBlock => ({ type: "paragraph", text });

export const list = (items: string[], ordered = false): LegalBlock => ({
  type: "list",
  items,
  ordered,
});

export const sub = (
  title: string,
  content: string[] = [],
  items?: string[],
): LegalBlock => ({ type: "subsection", title, content, items });

export const callout = (
  variant: CalloutVariant,
  title: string,
  text: string,
): LegalBlock => ({ type: "callout", variant, title, text });

export const cards = (
  cardItems: InfoCardItem[],
  title?: string,
): LegalBlock => ({ type: "infoCards", title, cards: cardItems });

export const matrix = (caption: string, rows: MatrixRow[]): LegalBlock => ({
  type: "matrix",
  caption,
  rows,
});

export const cookieTable = (
  filter: { category?: CookieCategoryKey; party?: "first" | "third" } = {},
): LegalBlock => ({ type: "cookieTable", ...filter });

export const cookiePreferencesBlock = (): LegalBlock => ({ type: "cookiePreferences" });

export const contactBlock = (): LegalBlock => ({ type: "contact" });

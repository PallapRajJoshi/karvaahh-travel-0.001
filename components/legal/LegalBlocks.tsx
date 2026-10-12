import { CookiePreferencesCard } from "@/components/cookie/CookiePreferencesCard";
import type { LegalBlock } from "@/lib/legal/types";
import { CancellationMatrix } from "./CancellationMatrix";
import { CookieTable } from "./CookieTable";
import { LegalCallout } from "./LegalCallout";
import { LegalContactCard } from "./LegalContactCard";
import { LegalMiniCards } from "./LegalInfoCard";
import { RichText } from "./RichText";

/** Renders one structured block. Add a new `type` here and in `lib/legal/types.ts` to extend. */
export function LegalBlockView({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );

    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag className={`legal-list${block.ordered ? " legal-list--ordered" : ""}`}>
          {block.items.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </Tag>
      );
    }

    case "subsection":
      return (
        <div className="legal-subsection">
          <h3 className="legal-subsection__title">{block.title}</h3>
          {block.content?.map((text) => (
            <p key={text}>
              <RichText text={text} />
            </p>
          ))}
          {block.items && block.items.length > 0 ? (
            <ul className="legal-list">
              {block.items.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      );

    case "callout":
      return <LegalCallout variant={block.variant} title={block.title} text={block.text} />;

    case "infoCards":
      return <LegalMiniCards title={block.title} cards={block.cards} />;

    case "matrix":
      return <CancellationMatrix caption={block.caption} rows={block.rows} />;

    case "contact":
      return <LegalContactCard />;

    case "cookiePreferences":
      return <CookiePreferencesCard />;

    case "cookieTable":
      return <CookieTable category={block.category} party={block.party} />;
  }
}

import SectionHeading from "./SectionHeading";
import "./PriceDriver.css";

export interface PriceDriverItem {
  title: string;
  description: string;
}

interface PriceDriverProps {
  heading: string;
  items: PriceDriverItem[];
  footnote?: string;
  id?: string;
}

export default function PriceDriver({
  heading,
  items,
  footnote,
  id,
}: PriceDriverProps) {
  return (
    <section className="price-driver" aria-labelledby={id ?? "price-driver"}>
      <SectionHeading title={heading} id={id ?? "price-driver"} />
      <ul className="price-driver__list">
        {items.map((item) => (
          <li className="price-driver__item" key={item.title}>
            <h3 className="price-driver__title">{item.title}</h3>
            <p className="price-driver__text">{item.description}</p>
          </li>
        ))}
      </ul>
      {footnote ? <p className="price-driver__footnote">{footnote}</p> : null}
    </section>
  );
}

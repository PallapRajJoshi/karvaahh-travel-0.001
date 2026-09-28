import { PACKING } from "../../data/packing";

/** Packing list displayed as simple point list. */
export default function PackingChecklist() {
  return (
    <div className="km-pack">
      <div className="km-pack__grid">
        {PACKING.map((cat) => (
          <fieldset key={cat.id} className="km-pack__group">
            <legend className="km-pack__legend">{cat.title}</legend>

            <ul className="km-pack__list">
              {cat.items.map((item) => (
                <li key={item} className="km-pack__item">
                  <span className="km-pack__bullet" aria-hidden="true">
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </fieldset>
        ))}
      </div>
    </div>
  );
}
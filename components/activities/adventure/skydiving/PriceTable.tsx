import { priceTable } from "./data/skydivingData";

export default function PriceTable() {
  return (
    <section className="sky-section sky-section--cream sky-section--flush" aria-labelledby="sky-price-table-title">
      <div className="sky-container">
        <h3 id="sky-price-table-title" className="sky-subheading">
          {priceTable.heading}
        </h3>
        <div className="sky-table-wrap" role="region" aria-labelledby="sky-price-table-title" tabIndex={0}>
          <table className="sky-table sky-table--compact">
            <thead>
              <tr>
                <th scope="col">Experience</th>
                <th scope="col" className="sky-table__num">
                  Indicative price
                </th>
                <th scope="col">Price type</th>
              </tr>
            </thead>
            <tbody>
              {priceTable.rows.map((r) => (
                <tr key={r.experience}>
                  <th scope="row">{r.experience}</th>
                  <td className="sky-table__num">{r.price}</td>
                  <td>{r.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="sky-note">{priceTable.note}</p>
      </div>
    </section>
  );
}

import KoshiSectionHeading from "../heading/KoshiSectionHeading";
import {
  koshiCommunities,
  koshiFestivals,
  koshiProducts,
} from "@/data/koshi/guide";
import "./koshi-guide.css";

export default function KoshiFlavours() {
  return (
    <section
      id="culture-cuisine"
      className="koshi-guide koshi-guide--cream"
      aria-labelledby="koshi-flavours-title"
    >
      <div className="koshi-shell">
        <KoshiSectionHeading
          eyebrow="PEOPLE, FESTIVALS & FOOD"
          titleId="koshi-flavours-title"
          title={
            <>
              Kirat kitchens, Sherpa gompas and <em>Ilam tea.</em>
            </>
          }
          description="Dozens of ethnic communities call Koshi home, each with its own language, calendar of festivals and food traditions."
        />

        <div className="koshi-guide__pair">
          <div className="koshi-guide__panel koshi-reveal">
            <h3>Communities</h3>
            <ul className="koshi-guide__chips" aria-label="Ethnic communities of Koshi Province">
              {koshiCommunities.map((community) => (
                <li key={community}>{community}</li>
              ))}
            </ul>
            <p className="koshi-guide__note">
              Homestays in Rai, Limbu and Sherpa villages are the best way to
              experience daily life, language and hospitality first-hand.
            </p>
          </div>

          <div className="koshi-guide__panel koshi-reveal">
            <h3>Festivals &amp; traditions</h3>
            <dl className="koshi-guide__dl">
              {koshiFestivals.map((festival) => (
                <div key={festival.name}>
                  <dt>{festival.name}</dt>
                  <dd>{festival.text}</dd>
                </div>
              ))}
            </dl>
            <p className="koshi-guide__note">
              Festival dates follow lunar calendars and change each year.
            </p>
          </div>
        </div>

        <h3 className="koshi-guide__subtitle">Local cuisine &amp; regional products</h3>
        <ul className="koshi-guide__grid koshi-guide__grid--3">
          {koshiProducts.map((product) => (
            <li key={product.name} className="koshi-guide__card koshi-reveal">
              <h4>{product.name}</h4>
              <p>{product.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

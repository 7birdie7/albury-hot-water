import PageHero from "@/components/PageHero";
export const metadata = {
  title: "Choosing a Hot Water System in Albury–Wodonga",
  description:
    "Compare hot water system types and practical replacement factors.",
};
export default function Guide() {
  return (
    <>
      <PageHero
        eyebrow="System selection guide"
        title="How to choose a hot water system for your household"
        intro="Balance running costs, upfront cost, available energy, space, demand and replacement urgency."
        image="/images/system-options.webp"
      />
      <main>
        <article className="section">
          <div className="container article">
            <p className="lead">
              There is no universal best system. A good recommendation begins
              with the property and the people using it.
            </p>
            <h2>Start with household demand</h2>
            <p>
              Consider household size, when showers and appliances run, whether
              demand clusters in the morning or evening, and whether the
              household may grow.
            </p>
            <h2>Compare the main options</h2>
            <h3>Heat pump</h3>
            <p>
              Heat pumps move heat from surrounding air into water. Placement,
              airflow, noise, ambient temperature, tariffs and purchase cost
              deserve discussion.
            </p>
            <h3>Electric storage</h3>
            <p>
              These familiar systems can be straightforward to replace. Tank
              size, tariff access, element capacity and energy use should be
              considered together.
            </p>
            <h3>Gas and continuous flow</h3>
            <p>
              Continuous-flow systems heat water as required. Suitability
              depends on energy supply, flow-rate needs, pipework and site
              constraints.
            </p>
            <h3>Solar</h3>
            <p>
              Solar systems use roof collectors plus a booster. Roof
              orientation, shading, frost protection and household use patterns
              affect suitability.
            </p>
            <h2>Questions to ask</h2>
            <ul>
              <li>Why is this capacity suitable?</li>
              <li>What electrical, gas or plumbing work is included?</li>
              <li>What is excluded?</li>
              <li>What warranties apply?</li>
              <li>Are incentives relevant, and who confirms eligibility?</li>
              <li>How is the old unit removed?</li>
            </ul>
            <div className="notice">
              <strong>Compare like with like.</strong>
              <p>
                A cheaper quote may omit upgrades, disposal, valves, electrical
                work or difficult access.
              </p>
            </div>
            <h2>Local climate matters</h2>
            <p>
              Albury–Wodonga has cold winter mornings and hot summers.
              Temperature, frost and outdoor placement can affect performance.
              Ask how the recommendation suits the site.
            </p>
            <div className="section-actions">
            <a className="button button-dark" href="/contact">
              Ask about your property
            </a>
            <a
              className="text-link"
              href="/services/hot-water-replacement"
            >
              Replacement information
            </a>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

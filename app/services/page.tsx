import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
export const metadata: Metadata = {
  title: "Hot-Water Services Albury–Wodonga",
  description:
    "Explore hot-water installation, replacement, repairs, heat pumps and system options across Albury–Wodonga.",
  alternates: { canonical: "/services" },
};
const items = [
  [
    "Hot-water replacement",
    "/services/hot-water-replacement",
    "When a leaking, ageing or underperforming system needs a practical replacement path.",
  ],
  [
    "Hot-water repairs",
    "/services/hot-water-repairs",
    "Information for systems that are cold, leaking, noisy or running out too quickly.",
  ],
  [
    "Heat-pump hot water",
    "/services/heat-pump-hot-water",
    "Efficiency-focused upgrades, system sizing and installation considerations.",
  ],
  [
    "Electric storage",
    "/guides/choosing-a-hot-water-system",
    "Reliable storage options and the questions to ask about capacity and tariffs.",
  ],
  [
    "Gas & continuous flow",
    "/guides/choosing-a-hot-water-system",
    "Space-saving options where the property and energy connection are suitable.",
  ],
  [
    "Solar hot water",
    "/guides/choosing-a-hot-water-system",
    "Roof, orientation, booster and installation considerations for solar systems.",
  ],
];
export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Hot-water services"
        title="Clear options for hot water at home or work."
        intro="Explore installation, replacement, repairs and system choices across Albury–Wodonga."
        image="/images/system-options.webp"
      />
      <section className="content-section">
        <p className="eyebrow">Choose a starting point</p>
        <h2>Services organised around real customer needs.</h2>
        <p>
          The aim is to help you identify the relevant service, understand the
          main considerations and submit enough information for a useful
          discussion.
        </p>
        <div className="info-grid">
          {items.map(([t, h, d]) => (
            <Link href={h} className="info-card" key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
              <span className="text-link">
                Learn more <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="section split-content">
        <div className="split-image">
          <Image
            src="/images/heat-pump.webp"
            alt="New heat-pump hot-water system in a cold regional setting"
            fill
            sizes="(max-width:900px) 100vw,50vw"
          />
        </div>
        <div>
          <p className="eyebrow">Not sure where to begin?</p>
          <h2>Start with the current system and the problem.</h2>
          <p>
            System type, household size, access and symptoms provide more useful
            context than choosing a product based on advertising alone.
          </p>
          <Link className="button button-dark" href="/contact">
            Ask about your options
          </Link>
        </div>
      </section>
      <section className="content-section">
        <p className="eyebrow">Hot-water systems compared</p>
        <h2>Installation choices for Albury and Wodonga properties</h2>
        <p>
          Hot-water installation in Albury–Wodonga may involve electric storage,
          heat-pump, gas storage, continuous-flow or solar hot water. Each
          option has different requirements for space, electrical supply, gas
          connections, roof access, ventilation, drainage and household demand.
          The best starting point is the property—not a preferred brand.
        </p>
        <h3>Electric storage hot water</h3>
        <p>
          Electric storage systems are familiar and can provide a practical
          replacement path where the tank capacity, tariff and electrical supply
          suit the household. Compare recovery rate, standing losses,
          installation position and whether electrical upgrades are included.
        </p>
        <h3>Heat-pump hot water</h3>
        <p>
          Heat pumps use electricity to move heat from surrounding air into the
          water. They can be an efficient choice, but noise, airflow, cold
          weather operation, frost management, tank size and placement must be
          considered. Ask how the proposed model performs during Albury and
          Wodonga winter conditions.
        </p>
        <h3>Gas, continuous-flow and solar systems</h3>
        <p>
          Gas and continuous-flow suitability depends on fuel availability, flow
          rate, pipe sizing, ventilation and outlet demand. Solar systems
          require suitable roof conditions, frost protection and a booster.
          Quotes should clearly describe every trade and installation change.
        </p>
      </section>
      <section className="section split-content">
        <div>
          <p className="eyebrow">Repair and replacement</p>
          <h2>Match the response to the fault—not just the system age.</h2>
          <p>
            No hot water, lukewarm water, rapid depletion, leaks, corrosion,
            unusual sounds and repeated faults can have different causes. Some
            component faults may be repairable, while a leaking cylinder or
            heavily deteriorated unit may point towards replacement.
          </p>
          <p>
            A useful assessment should identify the fault, explain the repair
            scope and compare that outcome with replacement where appropriate.
            Never remove covers or attempt electrical or gas repairs yourself.
          </p>
          <div className="section-actions">
            <a
              className="button button-dark"
              href="/services/hot-water-repairs"
            >
              Hot-water repair information
            </a>
            <a className="text-link" href="/services/hot-water-replacement">
              Replacement options
            </a>
          </div>
        </div>
        <div className="split-image">
          <Image
            src="/images/system-inspection.webp"
            alt="Hot-water repair and replacement assessment in Albury–Wodonga"
            fill
            sizes="(max-width:900px) 100vw,50vw"
          />
        </div>
      </section>
      <section className="content-section">
        <p className="eyebrow">Plan the enquiry</p>
        <h2>Information that helps produce a clearer hot-water quote</h2>
        <p>
          Include the property suburb, household size, existing system type,
          visible brand and model, approximate age, symptoms and access details.
          Safe photographs of the unit and surrounding area can help. For a new
          installation or upgrade, mention available energy connections,
          preferred location and whether lower running costs are a priority.
        </p>
        <p>
          Ask the provider to itemise removal, disposal, valves, pipework,
          electrical or gas work, roof work, commissioning, warranties and
          exclusions. This makes quotes easier to compare and reduces surprises.
        </p>
        <div className="section-actions">
          <a className="button button-dark" href="/contact">
            Request a hot-water quote
          </a>
          <a className="text-link" href="/faq">
            Read all hot-water FAQs
          </a>
        </div>
      </section>
    </main>
  );
}

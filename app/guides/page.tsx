import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hot-Water Advice & Guides | Albury–Wodonga",
  description: "Practical hot-water guides for Albury–Wodonga households comparing repairs, replacement, heat pumps, capacity, quotes and system choices.",
  alternates: { canonical: "/guides" },
};

export default function Guides() {
  return <><PageHero eyebrow="Practical advice" title="Hot-water decisions, explained without the hard sell" intro="Prepare for a quote, compare system types and ask better questions about your Albury–Wodonga property." image="/images/steam-shower.webp" />
    <main>
      <section className="content-section"><p className="eyebrow">Start with your situation</p><h2>Advice organised around the decision you need to make</h2>
        <p>Hot-water advice is most useful when it answers a real question: can the fault be repaired, is replacement becoming more practical, which system types suit the property, and what should a complete quotation include? The guides below help households, landlords and property managers gather the right facts before contacting a service provider.</p>
        <p>They are written for the Albury–Wodonga border region, where cold winter mornings make capacity, recovery, frost management and outdoor placement worth discussing. They do not replace an onsite assessment, and they avoid assuming that one technology or brand is right for every property.</p>
        <div className="card-grid three">
          <article className="card feature-card"><img src="/images/system-options.webp" alt="Electric, gas, solar and heat-pump hot-water options" /><p className="eyebrow">Choosing a system</p><h3>Which system suits your home?</h3><p>Compare heat pumps, electric storage, gas, continuous-flow and solar using demand, energy, space, climate and installation scope.</p><Link className="text-link" href="/guides/choosing-a-hot-water-system">Read the comparison guide</Link></article>
          <article className="card"><p className="eyebrow">Repairs</p><h3>No hot water or an unreliable system?</h3><p>Learn which observations help identify the problem and which safety warning signs require urgent professional attention.</p><Link className="text-link" href="/blog/no-hot-water-what-to-check">Use the safe first-check list</Link></article>
          <article className="card"><p className="eyebrow">Efficiency</p><h3>Considering a heat pump?</h3><p>Understand sizing, placement, airflow, operating sound, cold-weather performance, boosting and quote inclusions.</p><Link className="text-link" href="/services/heat-pump-hot-water">Explore heat-pump considerations</Link></article>
        </div>
      </section>

      <section className="content-section"><p className="eyebrow">Direct answer</p><h2>What should you know before requesting a hot-water quote?</h2>
        <p>Know the property suburb, current system type, visible model details, approximate age, household size and what has changed. Explain whether the water is completely cold, inconsistent, running out quickly, leaking, discoloured or accompanied by unusual sounds. Photographs taken from a safe distance can provide useful context.</p>
        <p>For a planned replacement, also identify the existing energy supply, practical installation positions and whether lower running costs, fast recovery, quiet operation or a lower upfront price is the main priority. A provider can then explain the trade-offs instead of guessing what “best” means for your household.</p>
      </section>

      <section className="section split-content"><div className="split-image"><img src="/images/system-inspection.webp" alt="Hot-water system label and installation area being checked" /></div><div>
        <p className="eyebrow">Compare complete quotes</p><h2>The appliance price is only part of the decision</h2>
        <p>Ask whether the quotation includes disconnection, removal and disposal of the old unit; valves, drainage and pipework; electrical or gas work; roof work where relevant; bases or supports; commissioning; and applicable warranties. Also ask which site conditions could change the price.</p>
        <p>This makes it easier to compare like with like. A low headline price may not remain lower if essential installation work appears later as an extra.</p><Link className="button button-dark" href="/contact">Prepare a local enquiry</Link>
      </div></section>

      <section className="content-section"><p className="eyebrow">Continue researching</p><h2>More practical answers for Albury–Wodonga properties</h2>
        <p>The advice library also covers warning signs, repair-versus-replace decisions, local system comparisons and rebate questions. Read the article that matches your immediate concern, then use the service and area pages to connect that information with a relevant enquiry.</p>
        <div className="section-actions"><Link className="button button-dark" href="/blog">Browse all hot-water advice</Link><Link className="text-link" href="/faq">Read frequently asked questions</Link></div>
      </section>
    </main></>;
}

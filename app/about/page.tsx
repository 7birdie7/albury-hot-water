import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Albury Hot Water | Local Enquiry Service",
  description: "Learn how Albury Hot Water helps households, landlords and property managers make clearer hot-water enquiries across Albury–Wodonga.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return <><PageHero eyebrow="Clear advice. Local focus." title="A straightforward starting point for hot-water help" intro="Albury Hot Water helps people ask informed questions about repairs, replacements and efficient system options across Albury–Wodonga." image="/images/murray-region.webp" />
    <main>
      <section className="section"><div className="container split"><div><p className="eyebrow">Why this site exists</p><h2>Useful information before the sales conversation</h2>
        <p>A hot-water problem often arrives at an inconvenient time. The temptation is to accept the first available replacement, yet household size, existing energy connections, outdoor space, recovery time, access and budget can all change the sensible solution. This website gives Albury–Wodonga property owners a practical place to understand those factors before requesting a quote.</p>
        <p>It covers hot-water repairs, system replacement, heat-pump upgrades and comparisons between electric storage, gas, continuous-flow and solar options. The aim is not to prescribe a product online. It is to help you describe the property and the problem clearly enough for a useful discussion.</p></div>
        <img src="/images/system-inspection.webp" alt="Hot-water system being assessed outside a regional home" /></div></section>

      <section className="section section-tint"><div className="container"><p className="eyebrow">What customers can expect</p><h2>A clear, relevant and properly qualified enquiry</h2><div className="card-grid three">
        <article className="card"><span className="icon-mark">01</span><h3>Clear questions</h3><p>You can explain the current system, symptoms, household demand, property access and preferred outcome in one structured enquiry.</p></article>
        <article className="card"><span className="icon-mark">02</span><h3>Property-specific options</h3><p>A recommendation should relate to the site, energy supply, winter performance, capacity and installation requirements—not simply a popular model.</p></article>
        <article className="card"><span className="icon-mark">03</span><h3>Scope confirmed in writing</h3><p>Pricing, availability, licensing, warranties, removal and any associated electrical, gas or roof work should be confirmed by the responding provider.</p></article>
      </div></div></section>

      <section className="content-section"><p className="eyebrow">Who the information is for</p><h2>Homes, rental properties and suitable business premises</h2>
        <p>Owner-occupiers may be comparing running costs, reliability and the disruption involved in changing system type. Landlords and property managers often need a quick description of the fault, safe access to the unit and clear communication with occupants. Businesses may need to explain demand patterns, operating hours and how an interruption affects the premises.</p>
        <p>These situations require different questions even when the equipment looks similar. A family replacing an ageing storage tank, for example, may want to consider future demand and rooftop solar. A rental-property repair may place greater emphasis on diagnosis, availability and a written approval process. The enquiry form allows those details to be included from the beginning.</p>
      </section>

      <section className="content-section"><p className="eyebrow">Honest local positioning</p><h2>What this website does—and does not—claim</h2>
        <p>Albury Hot Water is an online service-enquiry website covering Albury, Wodonga and nearby border communities. It is not presented as a walk-in showroom. We do not publish invented reviews, completed-job totals, years in business, trade qualifications or guaranteed response times. Those facts must belong to, and be verifiable by, the provider handling the work.</p>
        <p>Before proceeding, confirm the provider’s identity, relevant licence, insurance where appropriate, availability, written scope, product and workmanship warranties, and the final price. Government incentives and certificate discounts can change, so eligibility should also be checked against the current official program rather than assumed from an advertisement.</p>
      </section>

      <section className="content-section"><p className="eyebrow">A useful next step</p><h2>Prepare the details that make a quote clearer</h2>
        <p>Include the suburb, current system type, visible make and model, approximate age, household size and the symptoms you have noticed. Safe photographs of the unit, label and surrounding access can help. If you are planning an upgrade, explain whether efficiency, recovery, available space, noise or compatibility with rooftop solar is a priority.</p>
        <p>Never remove covers or touch electrical, gas or very hot components. Gas smells, sparking, smoke or significant flooding require urgent help from the appropriate emergency or licensed service.</p>
        <div className="section-actions"><Link className="button button-dark" href="/contact">Request a hot-water quote</Link><Link className="text-link" href="/guides">Read practical hot-water guides</Link></div>
      </section>
    </main></>;
}

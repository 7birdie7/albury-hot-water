import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact Albury Hot Water | Request a Quote",
  description: "Call or send a detailed hot-water repair, replacement, heat-pump or installation enquiry for Albury, Wodonga and nearby areas.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return <><PageHero eyebrow="Online enquiries" title="Tell us what is happening with your hot water" intro="Include your suburb, current system type, age if known, and whether you have no hot water, a leak or a planned replacement." image="/images/twilight-home.webp" />
    <main>
      <section className="section"><div className="container contact-layout"><div><p className="eyebrow">Contact details</p><h2>A better enquiry gets a better response</h2>
        <p>Phone: <a href="tel:0490008212">0490 008 212</a></p><p>Email: <a href="mailto:info@alburyhotwater.com">info@alburyhotwater.com</a></p><p>Service focus: Albury, Wodonga and surrounding border-region communities.</p><p>No street address is listed because this is an online enquiry service, not a walk-in storefront.</p>
        <div className="notice"><strong>Urgent safety issue?</strong><p>For gas smells, sparking, smoke, significant flooding or another immediate hazard, keep people away and contact the relevant emergency service or appropriately licensed professional directly.</p></div>
      </div><QuoteForm /></div></section>

      <section className="content-section"><p className="eyebrow">Information to include</p><h2>Help the responding provider understand the job before calling</h2>
        <p>Start with the property suburb and whether it is an owner-occupied home, rental property or suitable business premises. If possible, identify the current system as electric storage, gas storage, continuous flow, solar or heat pump. Add the visible brand, model, capacity and approximate age without removing any covers.</p>
        <p>Describe what has changed: no hot water, lukewarm water, rapid depletion, a visible leak, unusual sounds, discolouration, pressure changes or repeated resetting. Explain when the problem started and whether every hot outlet is affected. For a replacement or upgrade, include household size, usual peak demand, available energy connections and any priority such as lower running costs, quieter operation or compatibility with rooftop solar.</p>
      </section>

      <section className="content-section"><p className="eyebrow">Photographs and access</p><h2>Safe images can make the first discussion more useful</h2>
        <p>A photograph of the complete unit, its label and the surrounding installation area may help identify the equipment and likely access requirements. Show nearby walls, fences, gates or roof access where relevant. Do not touch hot pipework, wiring, gas fittings or water near electrical components to obtain a photograph.</p>
        <p>Mention narrow access, stairs, locked areas, tenants, pets or restricted appointment times. These details do not replace an onsite assessment, but they can reduce avoidable uncertainty when the enquiry is first reviewed.</p>
      </section>

      <section className="section section-tint"><div className="container"><p className="eyebrow">Before accepting a quote</p><h2>Confirm the complete scope—not only the new unit</h2><div className="card-grid three">
        <article className="card"><h3>Equipment and capacity</h3><p>Ask for the exact proposed system, capacity and a plain-language explanation of why it suits the property and expected demand.</p></article>
        <article className="card"><h3>Installation inclusions</h3><p>Confirm removal, disposal, valves, drainage, pipework, electrical or gas work, supports, roof work and commissioning.</p></article>
        <article className="card"><h3>Provider and warranties</h3><p>Confirm identity, relevant licensing, availability, payment terms, product warranty, workmanship warranty and exclusions in writing.</p></article>
      </div></div></section>

      <section className="content-section"><p className="eyebrow">What happens next</p><h2>A straightforward enquiry process</h2>
        <p>After the form is submitted, the information is sent to <a className="text-link" href="mailto:info@alburyhotwater.com">info@alburyhotwater.com</a> for review. A responding provider can then ask follow-up questions, discuss availability and determine whether an onsite assessment is required. Submitting the form does not commit you to work or guarantee a particular response time.</p>
        <p>When comparing recommendations, look for reasoning that relates to your household and property. Keep a copy of the written scope and ask about anything that is unclear before approving the work.</p>
      </section>
    </main></>;
}

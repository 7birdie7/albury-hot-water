import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hot-Water Advice & Blog | Albury–Wodonga",
  description: "Detailed hot-water advice for Albury–Wodonga homes, including repairs, replacement, heat pumps, rebates, warning signs and system comparisons.",
  alternates: { canonical: "/blog" },
};

const posts = [
  ["No hot water? What to check before requesting help", "/blog/no-hot-water-what-to-check", "A safe, practical checklist that helps you describe the fault clearly.", "/images/steam-shower.webp"],
  ["Is a heat-pump system suitable for Albury–Wodonga?", "/blog/heat-pump-hot-water-albury-wodonga", "Placement, winter conditions, household demand and the questions worth asking.", "/images/heat-pump.webp"],
  ["Repair or replace your hot-water system?", "/blog/repair-or-replace-hot-water-system", "Use condition, fault type, repair value and likely remaining life to guide the conversation.", "/images/system-inspection.webp"],
  ["Hot-water rebates for Albury and Wodonga", "/blog/hot-water-rebates-albury-wodonga", "A starting point for checking NSW, Victorian and federal incentives.", "/images/heat-pump.webp"],
  ["What is the best hot-water system for the Albury area?", "/blog/best-hot-water-system-albury", "Compare common options against climate, household demand and the property.", "/images/system-options.webp"],
  ["Warning signs your hot-water system may be failing", "/blog/hot-water-system-warning-signs", "Recognise changes worth investigating before the water runs cold.", "/images/twilight-home.webp"],
];

export default function Blog() {
  return <><PageHero eyebrow="Hot-water advice" title="Practical answers for better hot-water decisions" intro="Straightforward information for households, landlords and property managers across the border region." image="/images/murray-region.webp" />
    <main>
      <section className="content-section"><p className="eyebrow">Advice with a purpose</p><h2>Find the article that matches your immediate question</h2>
        <p>The Albury Hot Water advice library is designed around the decisions people make before a repair, replacement or efficiency upgrade. It explains safe first observations, common warning signs, system differences, quotation details and the local factors worth raising with a provider.</p>
        <p>Each article gives a direct starting answer and then adds the practical detail needed for a more useful enquiry. The information is educational rather than diagnostic: faults involving electricity, gas, pressure, very hot water or leaking equipment require appropriately licensed assistance.</p>
      </section>
      <section className="section"><div className="blog-grid">{posts.map(([t,h,d,img]) => <Link className="blog-card card-link" href={h} key={h}><img src={img} alt="" /><div><p className="eyebrow">Advice</p><h2>{t}</h2><p>{d}</p><span className="text-link">Read article</span></div></Link>)}</div></section>

      <section className="content-section"><p className="eyebrow">Where to begin</p><h2>Repair problem, planned replacement or efficiency upgrade?</h2>
        <h3>If the water is unexpectedly cold</h3><p>Start with the no-hot-water checklist. Note whether every outlet is affected, what the system is doing differently and whether there is water, noise, discolouration, smoke, sparking or a gas smell. Do not dismantle the unit.</p>
        <h3>If the system is ageing or repeatedly unreliable</h3><p>Read the warning-sign and repair-versus-replace articles. The decision should consider the actual fault, tank condition, repair value, recurring problems, household demand and what replacement work would involve—not age alone.</p>
        <h3>If you are comparing lower-energy options</h3><p>Use the heat-pump and best-system guides to compare capacity, recovery, cold-weather performance, operating sound, placement, energy supply, installation changes and the complete quoted price.</p>
      </section>

      <section className="content-section"><p className="eyebrow">Local context</p><h2>Why Albury and Wodonga enquiries need some different details</h2>
        <p>Albury properties are in NSW while Wodonga properties are in Victoria. That distinction can matter when checking current state incentive programs and approved-product requirements. Across both cities, cold winter mornings make recovery, frost management and outdoor placement important discussion points for some technologies.</p>
        <p>Local relevance does not mean forcing a suburb name into every paragraph. It means connecting the region’s climate, state border, housing variety and service-area practicalities with information that genuinely helps a customer decide what to ask next.</p>
        <div className="section-actions"><Link className="button button-dark" href="/guides/choosing-a-hot-water-system">Compare system types</Link><Link className="text-link" href="/contact">Send a detailed enquiry</Link></div>
      </section>
    </main></>;
}

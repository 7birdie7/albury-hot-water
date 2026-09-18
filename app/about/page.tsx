import PageHero from "@/components/PageHero";
import Link from "next/link";
export const metadata = {
  title: "About Albury Hot Water",
  description:
    "An honest online enquiry service for hot water help across Albury–Wodonga.",
};
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Clear advice. Local focus."
        title="A straightforward starting point for hot water help"
        intro="Albury Hot Water helps people ask informed questions about repairs, replacements and efficient system options across Albury–Wodonga."
        image="/images/murray-region.webp"
      />
      <main>
        <section className="section">
          <div className="container split">
            <div>
              <p className="eyebrow">Why this site exists</p>
              <h2>Useful information before the sales conversation</h2>
              <p>
                Hot water decisions are rarely one-size-fits-all. Household
                size, available energy, outdoor space, recovery time, site
                constraints and budget all matter.
              </p>
              <p>
                We do not publish invented reviews, job counts, years in
                business or trade qualifications. The responding provider should
                confirm licensing, availability, pricing and warranties for each
                job.
              </p>
            </div>
            <img
              src="/images/system-inspection.webp"
              alt="Hot water system being assessed outside a regional home"
            />
          </div>
        </section>
        <section className="section section-tint">
          <div className="container">
            <p className="eyebrow">Service standard</p>
            <h2>What a good enquiry experience should feel like</h2>
            <div className="card-grid three">
              <article className="card">
                <span className="icon-mark">01</span>
                <h3>Clear</h3>
                <p>
                  Plain-language questions about the property, current system
                  and problem.
                </p>
              </article>
              <article className="card">
                <span className="icon-mark">02</span>
                <h3>Relevant</h3>
                <p>
                  Options considered against your household, site and energy
                  source.
                </p>
              </article>
              <article className="card">
                <span className="icon-mark">03</span>
                <h3>Honest</h3>
                <p>
                  No unsupported promises. Scope, price, timing and credentials
                  must be confirmed.
                </p>
              </article>
            </div>
            <div className="section-actions">
              <Link className="button" href="/contact">
                Make an enquiry
              </Link>
              <Link className="text-link" href="/guides">
                Read practical guides
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

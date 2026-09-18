import Image from "next/image";
import PageHero from "./PageHero";
import QuoteForm from "./QuoteForm";
import { CheckCircle2, HelpCircle, ClipboardCheck } from "lucide-react";
type Props = {
  title: string;
  eyebrow: string;
  intro: string;
  image: string;
  summary: string;
  problems: string[];
  considerations: string[];
  faqs: { q: string; a: string }[];
};
export default function ServicePage(p: Props) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.eyebrow,
    description: p.intro,
    areaServed: [
      { "@type": "City", name: "Albury" },
      { "@type": "City", name: "Wodonga" },
    ],
    provider: {
      "@type": "Organization",
      name: "Albury Hot Water",
      url: "https://alburyhotwater.com",
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        intro={p.intro}
        image={p.image}
      />
      <section className="content-section">
        <p className="eyebrow">A practical overview</p>
        <h2>Understand the situation before choosing the next step.</h2>
        <p>{p.summary}</p>
        <div className="info-grid">
          <div className="info-card">
            <CheckCircle2 />
            <h3>Property fit</h3>
            <p>
              Capacity, access, energy source and household demand can influence
              the right approach.
            </p>
          </div>
          <div className="info-card">
            <HelpCircle />
            <h3>Clear questions</h3>
            <p>
              Ask what is included, which trades are needed and how the proposed
              solution was selected.
            </p>
          </div>
          <div className="info-card">
            <ClipboardCheck />
            <h3>Quote detail</h3>
            <p>
              Review removal, installation, valves, electrical work and
              applicable warranties.
            </p>
          </div>
        </div>
      </section>
      <section className="section split-content">
        <div className="split-image">
          <Image
            src="/images/system-options.webp"
            alt="Modern continuous-flow and storage hot-water system options"
            fill
            sizes="(max-width:900px) 100vw,50vw"
          />
        </div>
        <div>
          <p className="eyebrow">Common signs</p>
          <h2>When to make an enquiry</h2>
          <ul className="check-list">
            {p.problems.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <a className="text-link" href="/contact">
            Discuss your situation
          </a>
        </div>
      </section>
      <section className="content-section">
        <p className="eyebrow">Direct answer</p>
        <h2>What does {p.eyebrow.toLowerCase()} involve?</h2>
        <p>
          {p.eyebrow} in Albury–Wodonga begins with understanding the existing
          unit, the property and the way hot water is used. The next step may
          involve diagnosis, comparison of suitable systems, sizing, removal of
          old equipment, plumbing alterations, electrical or gas work,
          installation, commissioning and an explanation of applicable product
          and workmanship warranties. The exact scope depends on the service
          requested and must be confirmed in writing.
        </p>
        <p>
          Useful recommendations should explain why a particular approach suits
          the household rather than simply naming a brand. Capacity, recovery
          time, available tariffs, energy source, noise, outdoor space, access
          and future household demand can all affect the practical result.
        </p>
      </section>
      <section className="content-section">
        <p className="eyebrow">Before proceeding</p>
        <h2>Useful points to consider</h2>
        {p.considerations.map((x, i) => (
          <div key={x}>
            <h3>
              {i + 1}. {x}
            </h3>
            <p>
              Ask for a clear explanation that relates this point to your
              property rather than relying on a one-size-fits-all
              recommendation.
            </p>
          </div>
        ))}
      </section>
      <section className="dark-feature">
        <div className="dark-copy">
          <p className="eyebrow light">Albury–Wodonga conditions</p>
          <h2>Plan for cold mornings, peak demand and the actual property.</h2>
          <p>
            Winter temperatures can make reliable recovery especially important.
            Heat-pump performance, frost management, storage size and placement
            deserve careful attention, while electric, gas, solar and
            continuous-flow systems each bring different connection and
            installation requirements.
          </p>
          <p>
            For rental homes and business premises, access, interruption time
            and communication with occupants may also influence the work plan.
            Describe these details early so the quotation can address the real
            site rather than an assumed standard installation.
          </p>
          <a
            className="button button-ochre"
            href="/guides/choosing-a-hot-water-system"
          >
            Compare hot-water systems
          </a>
        </div>
        <div className="dark-image">
          <Image
            src="/images/twilight-home.webp"
            alt="Albury home at cold twilight with reliable hot water"
            fill
            sizes="(max-width:900px) 100vw,50vw"
          />
        </div>
      </section>
      <section className="content-section">
        <p className="eyebrow">A clearer quotation</p>
        <h2>Questions worth asking before approving hot-water work</h2>
        <ul>
          <li>
            Why does the recommended capacity suit this household or property?
          </li>
          <li>Which plumbing, electrical, gas or roof work is included?</li>
          <li>Are valves, supports, drainage and disposal included?</li>
          <li>What site conditions could change the quoted price?</li>
          <li>Which product and workmanship warranties apply?</li>
          <li>
            Who confirms eligibility for any rebate or certificate discount?
          </li>
          <li>How will the new system be commissioned and explained?</li>
        </ul>
        <p>
          These questions help Albury and Wodonga property owners compare the
          complete scope of work rather than choosing from a headline price.
          Read the{" "}
          <a className="text-link" href="/faq">
            hot-water FAQs
          </a>{" "}
          or review{" "}
          <a className="text-link" href="/blog/hot-water-system-warning-signs">
            warning signs of system failure
          </a>{" "}
          before sending an enquiry.
        </p>
      </section>
      <section className="quote-section">
        <div className="quote-intro">
          <p className="eyebrow light">Send an enquiry</p>
          <h2>Share the system, property and symptoms.</h2>
          <p>
            Useful details make it easier to discuss repair, replacement and
            installation considerations.
          </p>
        </div>
        <QuoteForm />
      </section>
      <section className="content-section">
        <p className="eyebrow">Questions answered</p>
        <h2>{p.title} FAQs</h2>
        <div className="faq-list">
          {p.faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

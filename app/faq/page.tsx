import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Hot Water FAQs Albury–Wodonga",
  description:
    "Practical answers about hot-water repairs, replacement, system choices, rebates and enquiries across Albury–Wodonga.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  [
    "What information should I include in a hot-water enquiry?",
    "Include your suburb, the current system type if known, approximate system age, household size and what has changed. Photographs of the unit, label and any visible leak can also help the responding provider understand the situation.",
  ],
  [
    "Should a leaking hot-water system be repaired or replaced?",
    "That depends on the source of the leak, the unit’s condition and the likely value of a repair. A leaking connection or valve may be repairable; a leaking or badly corroded storage tank often makes replacement more likely. An onsite assessment is needed before deciding.",
  ],
  [
    "Which hot-water system is best for an Albury–Wodonga home?",
    "There is no single best system for every property. Household demand, existing energy connections, available space, winter conditions, budget and installation requirements all matter.",
  ],
  [
    "Can heat-pump hot water work during cold Albury winters?",
    "Heat pumps can operate in cool conditions, but model selection, placement, airflow, frost management and recovery performance matter. Ask how the proposed model performs at local winter temperatures.",
  ],
  [
    "Are hot-water rebates available?",
    "Rebates and certificate-based discounts may be available for some eligible installations, but programs, products and eligibility rules can change. Confirm current requirements through the relevant NSW or Victorian government program and with an accredited provider.",
  ],
  [
    "How long does hot-water replacement take?",
    "Timing varies with system type, access, existing connections and whether electrical, gas, roof or plumbing alterations are required. Ask the provider to explain the proposed work and expected timing in the written quote.",
  ],
  [
    "What should a hot-water quote include?",
    "Look for the proposed system and capacity, removal of the old unit, valves and pipework, electrical or gas work, access costs, commissioning, disposal, warranties and any exclusions.",
  ],
  [
    "Do you accept enquiries from Wodonga and nearby communities?",
    "Yes. Enquiries are welcomed from Albury, Wodonga and surrounding communities. Actual travel coverage and appointment availability should be confirmed with the responding service provider.",
  ],
  [
    "What warning signs suggest a hot-water system needs attention?",
    "Common warning signs include water running out sooner, fluctuating temperature, visible leaks, rust-coloured water, unusual sounds, repeated resets or rising energy use. Gas smells, smoke, sparking or significant flooding require urgent professional attention.",
  ],
  [
    "Can I request a quote without choosing a system first?",
    "Yes. Describe the property, household demand, current system and the outcome you need. A useful discussion should help narrow the options before you commit to a particular system.",
  ],
];

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="Questions answered"
        title="Hot-water questions for Albury–Wodonga households"
        intro="Clear, practical information to help you prepare for a repair, replacement or new-system enquiry."
        image="/images/system-inspection.webp"
      />
      <main>
        <section className="content-section faq-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Frequently asked questions</p>
              <h2>Start with the facts that affect your property.</h2>
            </div>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {question}
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
          <div className="cta-panel">
            <h2>Still unsure where to begin?</h2>
            <p>
              Tell us what is happening, where the property is located and which
              system you currently have, if known.
            </p>
            <a className="button button-ochre" href="/contact">
              Ask about your hot water
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

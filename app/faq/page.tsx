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
    "Include the property suburb, whether it is a home, rental or business premises, the current system type if known, its approximate age and the number of people normally using hot water. Describe exactly what has changed—for example, no hot water, slow recovery, fluctuating temperature, unusual sounds, discolouration or visible water near the unit. Safe photographs of the equipment label, the full installation area and any visible leak can help a provider understand the likely scope before attending. Also mention access restrictions, tenants, pets and preferred contact times. Never remove a cover or touch wet electrical equipment simply to obtain more information.",
  ],
  [
    "Should a leaking hot-water system be repaired or replaced?",
    "That depends first on where the water is coming from. A loose connection, faulty valve or accessible piece of pipework may be repairable, while water escaping from a corroded storage cylinder often makes replacement more likely. The system’s age, previous faults, general condition, repair cost and ability to meet current household demand should all be considered together. Ask the provider to identify the source of the leak and explain what the proposed repair is expected to achieve. Significant flooding, water near electrical components or very hot discharge requires prompt professional attention; keep people away and do not dismantle the system yourself.",
  ],
  [
    "Which hot-water system is best for an Albury–Wodonga home?",
    "There is no single best technology for every Albury–Wodonga property. A useful comparison begins with peak household demand, the existing electricity or gas supply, available outdoor or roof space, access, budget and whether rooftop solar is already installed. Local winter conditions can make recovery, frost management and cold-weather performance particularly important for some systems. Electric storage may provide a straightforward replacement path, while a heat pump may appeal to households prioritising lower electricity use. Gas, continuous-flow and solar systems each have different site requirements. Compare the complete installed scope, expected use and warranty—not only the appliance price or advertised efficiency figure.",
  ],
  [
    "Can heat-pump hot water work during cold Albury winters?",
    "Many modern heat-pump systems are designed to operate in cool conditions, but their performance is not identical. Ask for model-specific operating-temperature information, recovery data and an explanation of when the electric boost may be used. Correct sizing matters because a household that draws heavily on the tank may notice slow recovery if the chosen system is marginal for its needs. Placement also affects airflow, drainage, frost management, service access and operating sound. A suitable recommendation should explain how the proposed model and tank capacity match local winter conditions and the household’s peak use rather than relying on a general claim that all heat pumps perform the same way.",
  ],
  [
    "Are hot-water rebates available?",
    "Rebates or certificate-based discounts may be available for some eligible heat-pump or solar hot-water installations, but they are not automatic or identical for every property. Albury addresses fall under NSW arrangements, while Wodonga addresses fall under Victorian programs, and the rules, approved products and provider requirements can differ. Ask for the normal price, the incentive being applied and the final payable amount to be shown separately in writing. Confirm eligibility through the current government program and an appropriately accredited provider before relying on the discount. A system should still suit the household’s demand, climate, placement and budget; a large advertised rebate does not by itself make a product the right choice.",
  ],
  [
    "How long does hot-water replacement take?",
    "A straightforward like-for-like replacement may be completed more quickly than a change of technology, but no single timeframe applies to every property. Timing can be affected by equipment availability, site access, disconnection and removal, changes to pipework or valves, electrical or gas work, roof work, drainage, supports and the need for more than one licensed trade. Ask whether the quoted timeframe includes delivery, removal of the old unit, installation, commissioning and any required paperwork. If the property currently has no hot water, explain this clearly when enquiring, but confirm actual attendance and completion timing directly rather than relying on an unverified same-day promise.",
  ],
  [
    "What should a hot-water quote include?",
    "A useful written quote should identify the exact make, model and capacity, the proposed location and why the system suits the property’s expected demand. It should state whether disconnection, removal and disposal of the old unit are included, together with valves, drainage, pipework, electrical or gas work, roof work, bases, supports and access costs. Look for commissioning, customer instructions, product and workmanship warranties, payment terms and clear exclusions. If a rebate or certificate discount is included, ask for it to be itemised. Comparing complete scopes is more reliable than comparing headline equipment prices, because omitted installation work can substantially change the final cost.",
  ],
  [
    "Do you accept enquiries from Wodonga and nearby communities?",
    "Yes. Enquiries are welcomed from Albury, Wodonga, Lavington, Thurgoona, North Albury, West Wodonga, Baranduda, Jindera and nearby border-region communities. Include the exact suburb or locality because travel, appointment availability and the practical service radius can vary between providers. Regional or semi-rural properties should also mention access conditions, gate instructions, tank position and whether the site uses unusual power, water or gas arrangements. The website provides a focused local enquiry point, but actual travel coverage, timing and any call-out charge should be confirmed directly with the provider before an appointment is arranged.",
  ],
  [
    "What warning signs suggest a hot-water system needs attention?",
    "Changes worth investigating include hot water running out sooner than usual, slow recovery, fluctuating temperature, repeated loss of heating, visible leaks, corrosion, rust-coloured water, unusual rumbling or popping sounds and unexplained increases in energy use. These signs do not all mean the complete system must be replaced—a valve, thermostat, element, burner or connection may sometimes be repairable—but they do justify proper assessment. Record when the problem occurs and which outlets are affected. Gas smells, smoke, sparking, exposed wiring, water around electrical equipment or significant flooding are safety issues: keep clear and contact the appropriate emergency or licensed service rather than continuing normal troubleshooting.",
  ],
  [
    "Can I request a quote without choosing a system first?",
    "Yes. You do not need to select a technology, brand or tank size before making an enquiry. Describe the property, household size, current system, available energy connections, hot-water pattern and the outcome that matters most—such as reliable recovery, lower running costs, quiet operation, limited space or a manageable upfront price. Mention rooftop solar and any planned household changes. A useful provider should use those details to narrow the practical options and explain the trade-offs. Ask why a particular model and capacity are being recommended, what installation changes are required and what the complete written price includes before committing to the work.",
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

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Choosing a Hot-Water System in Albury–Wodonga",
  description: "Compare heat-pump, electric, gas, continuous-flow and solar hot-water systems for Albury–Wodonga homes using demand, climate, space and full installation cost.",
  alternates: { canonical: "/guides/choosing-a-hot-water-system" },
};

export default function Guide() {
  return <><PageHero eyebrow="System selection guide" title="How to choose a hot-water system for your household" intro="Balance running costs, upfront cost, available energy, space, demand and replacement urgency." image="/images/system-options.webp" />
    <main><article className="section"><div className="container article">
      <p className="lead">There is no universal best hot-water system. The right shortlist begins with the property, household demand and complete installation requirements.</p>

      <h2>Start with household demand—not a product brochure</h2>
      <p>Count more than the number of occupants. Consider shower length, baths, laundry and dishwasher use, whether several outlets operate together and whether demand is concentrated in the morning or evening. Think about guests, teenagers, a growing household or future downsizing. Storage capacity and recovery must work together: a smaller tank with fast recovery can behave differently from a larger tank heated on a restricted tariff.</p>
      <p>For rental or business premises, explain occupancy, operating hours and the consequences of running out. A system that looks adequate on paper may be inconvenient if it cannot recover between peak periods.</p>

      <h2>Compare the main hot-water options</h2>
      <h3>Heat-pump hot water</h3><p>Heat pumps use electricity to move heat from surrounding air into stored water. They can use less electricity for water heating than conventional resistance storage, but performance depends on model quality, sizing, airflow, ambient conditions and settings. Ask about winter operation, boost use, recovery time, operating sound, drainage and the distance from bedrooms or neighbours.</p>
      <h3>Electric storage</h3><p>Electric storage is familiar and can provide a practical replacement path where capacity, electrical supply and tariff arrangements suit the household. Discuss element size, recovery, standing losses, installation position and whether heating can make useful use of rooftop solar generation. A like-for-like replacement is not automatically the best long-term choice, but neither should it be dismissed without comparison.</p>
      <h3>Gas storage and continuous flow</h3><p>Gas storage holds heated water while continuous-flow equipment heats it as required. Suitability depends on gas availability, appliance location, ventilation, pipe sizing, flow rate and how many outlets may operate simultaneously. Changing energy source can involve more work than replacing an existing gas unit, so the whole installation must be quoted.</p>
      <h3>Solar hot water</h3><p>Solar systems use roof-mounted collectors and a booster. Roof orientation, pitch, shading, structural and access considerations, frost protection, booster type and household use patterns all affect suitability. Ask how the system performs through winter and what maintenance applies to both collectors and storage components.</p>

      <h2>Use Albury–Wodonga climate as one factor</h2>
      <p>The border region experiences cold winter mornings and hot summers. For outdoor heat-pump or solar equipment, ask about the manufacturer’s operating range, frost management, placement and seasonal recovery. Climate matters, but it should not replace site-specific assessment: available space, pipe runs, household demand, tariffs and existing connections can be equally important.</p>

      <h2>Compare upfront cost with the complete installed result</h2>
      <p>The equipment price is only one part of a quotation. Confirm whether the price includes removal and disposal of the old unit, valves, drainage, new pipework, electrical circuits or upgrades, gas work, roof work, bases or supports, difficult access, commissioning and all applicable warranties. Ask which discoveries onsite could change the price.</p>
      <p>Running-cost estimates should also explain their assumptions. Household use, tariffs, climate, settings and rooftop solar can materially change the outcome. Treat broad savings statements as a prompt for questions rather than a guarantee.</p>

      <h2>Questions to ask before choosing</h2>
      <ul><li>Why does this capacity and recovery rate suit our peak demand?</li><li>How does the proposed model perform during cold weather?</li><li>Where will the equipment be placed, and what noise or clearance matters?</li><li>Which plumbing, electrical, gas, drainage or roof work is included?</li><li>What is excluded, and what could alter the final price?</li><li>Which product and workmanship warranties apply?</li><li>Who confirms eligibility for any current incentive?</li><li>How will the old equipment be removed and the new system commissioned?</li></ul>

      <div className="notice"><strong>Compare like with like.</strong><p>A lower headline price may exclude disposal, valves, electrical work, access costs or another essential part of the installation.</p></div>

      <h2>A practical decision sequence</h2>
      <ol><li>Record the existing system and household demand.</li><li>Identify available energy sources and realistic equipment locations.</li><li>Shortlist technologies that fit the property.</li><li>Compare complete written scopes, not product prices alone.</li><li>Confirm provider credentials, warranties and incentive eligibility.</li><li>Keep the approved scope and commissioning information.</li></ol>
      <p>If you are still unsure, submit the current system, suburb, household size, symptoms and priorities. You do not need to select the technology before requesting a useful discussion.</p>
      <div className="section-actions"><a className="button button-dark" href="/contact">Ask about your property</a><a className="text-link" href="/services/hot-water-replacement">Replacement information</a></div>
    </div></article></main></>;
}

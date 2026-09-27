type Kind = "no-hot-water" | "heat-pump" | "repair-replace" | "rebates" | "best-system" | "warning-signs";

export default function ArticleEnhancement({ kind }: { kind: Kind }) {
  if (kind === "no-hot-water") return <>
    <h2>Why the pattern of the problem matters</h2>
    <p>If the water is cold at every outlet, the likely investigation differs from a problem affecting one shower or mixer. Intermittent hot water, slow recovery and water that becomes cold only during peak use can also point in different directions. Note whether the issue occurs at a particular time, after several showers or whenever another appliance runs.</p>
    <p>For storage systems, visible water may come from a connection, valve, drain or the cylinder itself. Those possibilities have very different implications, so avoid describing every leak as a burst tank. For continuous-flow equipment, note any visible error code without resetting or dismantling the unit repeatedly.</p>
    <h2>What the first service conversation should establish</h2>
    <p>A useful first conversation should confirm the property location, equipment type, symptoms, safety concerns and whether there is any hot water available. It should also identify access limitations and whether the property is occupied by tenants. The provider can then explain availability and whether diagnosis, a component repair or a replacement discussion is the appropriate next step.</p>
    <h2>Common mistakes to avoid</h2>
    <ul><li>Removing covers or attempting electrical or gas repairs</li><li>Touching wet equipment or very hot discharge pipework</li><li>Repeatedly resetting a system without understanding the fault</li><li>Assuming the largest replacement will automatically perform better</li><li>Accepting a replacement price without checking the complete scope</li></ul>
  </>;

  if (kind === "heat-pump") return <>
    <h2>How to judge a heat-pump recommendation</h2>
    <p>Ask for the proposed model and tank capacity, then request an explanation of how they match peak household demand. Recovery performance matters alongside capacity, particularly when several showers occur close together. Ask when the electric boost operates and whether normal settings are likely to rely on it during winter or unusually heavy use.</p>
    <p>Placement should be assessed rather than selected only for convenience. The unit needs airflow, drainage, service clearance and a position that manages operating sound responsibly. Pipe distance can also affect installation work and heat loss. Photographs help with an initial discussion, but final siting should be confirmed for the actual property.</p>
    <h2>Running cost and rebate claims need context</h2>
    <p>Efficiency figures do not produce the same bill saving in every home. Water use, tariffs, climate, settings, installation and rooftop solar all influence the result. Ask which assumptions support any estimate. If an incentive is included, the quote should identify the relevant program, eligible product and price before and after the discount.</p>
    <h2>A complete heat-pump quote should clarify</h2>
    <ul><li>Exact model, capacity and cold-weather operating information</li><li>Proposed position, clearance, drainage and sound considerations</li><li>Electrical and plumbing alterations</li><li>Removal and disposal of the existing system</li><li>Commissioning, settings and customer instructions</li><li>Product and workmanship warranties</li></ul>
  </>;

  if (kind === "repair-replace") return <>
    <h2>Ask what the repair is expected to achieve</h2>
    <p>A repair recommendation should identify the failed component, the work proposed and whether the wider system appears serviceable. It is reasonable to ask whether the repair is likely to restore normal operation for a useful period or whether other deterioration is already evident. No provider can promise the future, but the reasoning should be understandable.</p>
    <p>Replacement deserves consideration when the storage cylinder is leaking, corrosion is extensive, faults keep returning or the existing system no longer meets demand. It can also be an opportunity to compare energy sources. However, changing technology may require electrical, plumbing, gas, roof or placement work that a like-for-like replacement would not.</p>
    <h2>Compare two complete scenarios</h2>
    <p>Rather than comparing only today’s repair invoice with the equipment price of a new system, compare the complete likely outcomes. For repair, consider scope, remaining condition and interruption risk. For replacement, include removal, installation changes, capacity, expected use, warranties and any verified incentive.</p>
    <h2>When another opinion may be worthwhile</h2>
    <p>A second written opinion can be useful when the diagnosis is unclear, the proposed system is substantially different from the existing one or quotes contain very different scopes. Provide each person with the same household and property information so the comparisons are fair.</p>
  </>;

  if (kind === "rebates") return <>
    <h2>Why advertised discounts can differ</h2>
    <p>An incentive is not necessarily a fixed cash rebate. Some programs operate through certificates or approved providers, and the value can depend on the old system, new equipment, installation location and current scheme settings. Two quotations may therefore present the discount differently. Ask to see the normal price, the incentive applied and the final payable amount.</p>
    <h2>Check the state before checking the product</h2>
    <p>Albury properties are in NSW and Wodonga properties are in Victoria, so the relevant state pathway is determined by the installation address. After identifying the program, check whether the proposed product and provider satisfy its current rules. Do this before treating the discount as part of the household budget.</p>
    <h2>Keep evidence of what was represented</h2>
    <p>Retain the written quotation, product model, eligibility explanation, assigned-certificate documents and final invoice. Ask who submits the paperwork and what happens if the application is rejected. A genuine efficiency upgrade should still suit the property even when the headline incentive is removed from the comparison.</p>
    <h2>Rebate questions belong beside installation questions</h2>
    <p>Do not let the discount distract from sizing, cold-weather performance, placement, noise, electrical work, removal, commissioning and warranties. The least expensive rebated product is not automatically the best-value installation for every household.</p>
  </>;

  if (kind === "best-system") return <>
    <h2>“Best” should mean best fit—not one universal technology</h2>
    <p>For one household, best may mean low ongoing electricity use. Another may prioritise quick replacement, strong recovery, limited outdoor space or the lowest complete upfront cost. Define the priority before comparing systems. This prevents an attractive feature from overshadowing a poor fit with the property.</p>
    <h2>Shortlist using the property</h2>
    <p>Record the existing energy source, switchboard or gas availability, rooftop solar, roof suitability, outdoor space, access and likely equipment positions. Then estimate peak demand and future household changes. These facts can eliminate impractical options before detailed quotations are requested.</p>
    <h2>Compare complete proposals</h2>
    <p>Each quote should identify the model, capacity, installation location and all associated work. Ask about removal, valves, drainage, pipework, electrical or gas alterations, supports, roof work, commissioning and warranties. A product with a lower purchase price can produce a higher installed price when the required work is included.</p>
    <h2>Questions that improve the recommendation</h2>
    <ul><li>What household-demand assumptions were used?</li><li>How will the system recover during consecutive showers?</li><li>How does it perform during local winter conditions?</li><li>Which maintenance and warranty requirements apply?</li><li>What future changes could make the selected capacity unsuitable?</li></ul>
  </>;

  return <>
    <h2>Build a useful record before the system stops</h2>
    <p>Take a safe photograph of the equipment label and note the installation date if known. Keep previous invoices and warranty information together. If performance changes, record when the symptom occurs, which outlets are affected and whether household demand has changed. This history helps distinguish a new fault from a capacity issue that has developed gradually.</p>
    <h2>Not every warning sign means immediate replacement</h2>
    <p>A valve, thermostat, element, burner or connection may be repairable. The significance depends on the source of the symptom and the condition of the wider system. Conversely, repeatedly treating symptoms without considering corrosion, tank integrity or recurring faults can postpone an unavoidable replacement.</p>
    <h2>Plan before an urgent failure where possible</h2>
    <p>Early assessment gives a household time to compare capacity, energy source, placement and full installation scope. It may also reduce the pressure to accept the first available product after a complete loss of hot water. Ask for the diagnosis and options in writing so repair and replacement proposals can be compared properly.</p>
    <h2>Safety signs are different from performance signs</h2>
    <p>Reduced capacity and slow recovery warrant investigation. Gas smells, smoke, sparking, exposed wiring or significant flooding require an urgent safety response. Keep people away and contact the appropriate emergency or licensed service rather than continuing normal troubleshooting.</p>
  </>;
}

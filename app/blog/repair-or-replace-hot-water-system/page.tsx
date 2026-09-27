import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import ArticleEnhancement from "@/components/ArticleEnhancement";
export const metadata: Metadata = { title: "Repair or Replace a Hot-Water System?", description: "A practical Albury–Wodonga guide to comparing hot-water repair value, system condition, replacement scope and household needs.", alternates: { canonical: "/blog/repair-or-replace-hot-water-system" } };
export default function Post(){return <><PageHero eyebrow="Replacement guide" title="Should you repair or replace your hot-water system?" intro="The answer depends on the fault, the condition of the system and what another repair is likely to achieve." image="/images/system-inspection.webp"/><main><article className="section article">
  <p className="lead">A repair can be sensible when the fault is isolated and the wider system remains sound. Replacement becomes more likely when the tank has failed, faults repeat or the unit no longer meets household needs.</p>
  <h2>Consider the source of the problem</h2><p>A faulty valve, thermostat, element or connection may be repairable. Corrosion, a leaking storage cylinder or multiple ageing components can change the economics. An assessment is needed before assuming either outcome.</p>
  <h2>Age is useful—but not the only factor</h2><p>System age helps frame the decision, but maintenance history, installation quality and the specific fault also matter. Avoid replacing solely because of age, or repairing solely because the first invoice looks lower.</p>
  <h2>Compare the next several years</h2><ul><li>Immediate repair cost and likely remaining life</li><li>Risk of another interruption or leak</li><li>Current household demand</li><li>Potential running-cost differences</li><li>Installation work required for another system type</li></ul>
  <ArticleEnhancement kind="repair-replace"/>
  <div className="section-actions"><Link className="button button-dark" href="/services/hot-water-replacement">Replacement information</Link><Link className="text-link" href="/contact">Discuss your system</Link></div>
</article></main></>}

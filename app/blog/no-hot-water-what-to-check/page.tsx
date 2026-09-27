import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import ArticleEnhancement from "@/components/ArticleEnhancement";
export const metadata: Metadata = { title: "No Hot Water? Safe Checks for Albury–Wodonga Homes", description: "A safe, detailed checklist for Albury–Wodonga households before requesting hot-water repairs.", alternates: { canonical: "/blog/no-hot-water-what-to-check" } };
export default function Post(){return <><PageHero eyebrow="Fault guide" title="No hot water? What to check before requesting help" intro="A few observations can make the first conversation far more useful—without attempting unsafe DIY repairs." image="/images/steam-shower.webp"/><main><article className="section article">
  <p className="lead">First determine whether the problem affects every hot tap or only one outlet. If one fixture is affected, the issue may be local rather than a failure of the whole hot-water system.</p>
  <h2>Check what has changed</h2><ul><li>Is the water completely cold, lukewarm or running out sooner?</li><li>Did the problem begin suddenly or gradually?</li><li>Is there visible water around the tank, valves or pipework?</li><li>Are there unusual sounds, odours or discoloured water?</li><li>Has household demand recently increased?</li></ul>
  <h2>Look at the system—do not dismantle it</h2><p>Note the brand, model and approximate age if visible. A clear photograph of the unit and label can help identify it. Do not remove covers or touch wiring, gas components, hot pipework or wet electrical equipment.</p>
  <div className="notice"><strong>Stop and seek urgent help</strong><p>Gas smells, sparking, smoke, significant flooding or exposed electrical components require immediate professional attention. Keep people away and isolate services only when you know it is safe.</p></div>
  <ArticleEnhancement kind="no-hot-water"/>
  <div className="section-actions"><Link className="button button-dark" href="/services/hot-water-repairs">Hot-water repair information</Link><Link className="text-link" href="/contact">Send an enquiry</Link></div>
</article></main></>}

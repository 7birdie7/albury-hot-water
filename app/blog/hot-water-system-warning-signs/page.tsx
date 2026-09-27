import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import ArticleEnhancement from "@/components/ArticleEnhancement";
export const metadata: Metadata = { title: "Hot-Water System Warning Signs", description: "Detailed warning signs that an Albury–Wodonga hot-water system may need repair, assessment or replacement.", alternates: { canonical: "/blog/hot-water-system-warning-signs" } };
export default function Post(){return <><PageHero eyebrow="Early warning guide" title="Warning signs your hot-water system may be about to fail" intro="Changes in temperature, water quality, noise or leakage can justify an assessment before a complete loss of hot water." image="/images/twilight-home.webp"/><main><article className="section article">
  <p className="lead">Not every change means the whole system is failing, but repeated or worsening symptoms should not be ignored.</p>
  <h2>Hot water runs out sooner</h2><p>A noticeable reduction can relate to a thermostat, element, burner, sediment or capacity issue. First consider whether household demand has changed.</p>
  <h2>Water is no longer consistently hot</h2><p>Fluctuating temperature or slow recovery can indicate a control, heating or performance problem. Note when it occurs and whether every hot tap is affected.</p>
  <h2>Moisture or corrosion appears</h2><p>Water around valves or connections may be repairable. Rust, tank corrosion or water escaping from the cylinder can be more serious. Do not touch hot pipework or electrical components.</p>
  <h2>New noises or discoloured water</h2><p>Popping, rumbling or banging may relate to sediment, pressure or components. Rust-coloured hot water can indicate corrosion or another issue requiring investigation.</p>
  <div className="notice"><strong>Act immediately for safety hazards.</strong><p>Gas smells, smoke, sparking, exposed wiring or significant flooding need urgent professional attention.</p></div>
  <ArticleEnhancement kind="warning-signs"/>
  <div className="section-actions"><Link className="button button-dark" href="/services/hot-water-repairs">Repair information</Link><Link className="text-link" href="/contact">Send an enquiry</Link></div>
</article></main></>}

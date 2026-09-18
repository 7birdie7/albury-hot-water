import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { MapPin, ArrowRight } from "lucide-react";
export const metadata: Metadata = {
  title: "Hot-Water Service Areas | Albury–Wodonga",
  description:
    "Hot-water installation, replacement and repair enquiry areas across Albury, Wodonga and the border region.",
  alternates: { canonical: "/locations" },
};
const areas = [
  [
    "Albury",
    "/locations/albury",
    "Core NSW service area including North Albury, East Albury, Glenroy and Lavington.",
  ],
  [
    "Wodonga",
    "/locations/wodonga",
    "Core Victorian service area including West Wodonga, East Wodonga, Bandiana and Baranduda.",
  ],
  [
    "Lavington",
    "/locations/albury",
    "Residential and rental-property hot-water enquiries north of central Albury.",
  ],
  [
    "Thurgoona",
    "/locations/albury",
    "Hot-water needs for established homes and growing residential areas.",
  ],
  [
    "Jindera",
    "/locations/albury",
    "Surrounding-area enquiries, with actual travel coverage confirmed before service.",
  ],
  [
    "Baranduda",
    "/locations/wodonga",
    "Replacement, repair and system-upgrade enquiries southeast of Wodonga.",
  ],
];
export default function Locations() {
  return (
    <main>
      <PageHero
        eyebrow="Service areas"
        title="Albury, Wodonga and the communities around them."
        intro="A focused border-region service area with useful local pages—not dozens of thin suburb-name copies."
        image="/images/murray-region.webp"
      />
      <section className="content-section">
        <p className="eyebrow">Local coverage</p>
        <h2>Start with your nearest major service area.</h2>
        <div className="info-grid">
          {areas.map(([t, h, d]) => (
            <Link href={h} className="info-card" key={t}>
              <MapPin />
              <h3>{t}</h3>
              <p>{d}</p>
              <span className="text-link">
                Area information <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
        <div className="cta-panel">
          <h2>Outside these areas?</h2>
          <p>
            You can still send an enquiry from a nearby border-region community.
            Actual service coverage should be confirmed before making
            arrangements.
          </p>
          <Link className="button button-ochre" href="/contact">
            Ask about your location
          </Link>
        </div>
      </section>
      <section className="section split-content">
        <div>
          <p className="eyebrow">Border-region focus</p>
          <h2>Hot-water enquiries shaped around Albury–Wodonga conditions</h2>
          <p>
            Albury and Wodonga form one connected service market across the NSW
            and Victorian border. Homes range from older properties with
            established storage systems to newer developments considering heat
            pumps, continuous-flow units and efficiency upgrades.
          </p>
          <p>
            Cold winter mornings can place extra attention on recovery,
            capacity, frost management and outdoor placement. Property access,
            existing energy supply and household demand remain just as important
            as the suburb name.
          </p>
          <a
            className="button button-dark"
            href="/guides/choosing-a-hot-water-system"
          >
            Compare system types
          </a>
        </div>
        <div className="split-image">
          <Image
            src="/images/twilight-home.webp"
            alt="Albury–Wodonga home in cool twilight needing reliable hot water"
            fill
            sizes="(max-width:900px) 100vw,50vw"
          />
        </div>
      </section>
      <section className="content-section">
        <p className="eyebrow">What people search for</p>
        <h2>Hot-water installation, repairs and replacement near you</h2>
        <p>
          The service-area pages connect common local searches—including hot
          water Albury, hot-water repairs Wodonga, heat-pump hot water Albury
          and hot-water system replacement near Albury–Wodonga—to information
          that helps property owners choose the next step.
        </p>
        <p>
          Nearby suburbs and communities are grouped with their closest major
          city page so the website remains useful rather than publishing dozens
          of nearly identical location pages. Enquiries from surrounding areas
          are welcomed, with actual travel coverage confirmed before service.
        </p>
        <div className="section-actions">
          <a className="button button-dark" href="/locations/albury">
            Hot water in Albury
          </a>
          <a className="button button-dark" href="/locations/wodonga">
            Hot water in Wodonga
          </a>
          <a className="text-link" href="/contact">
            Ask about another location
          </a>
        </div>
      </section>
    </main>
  );
}

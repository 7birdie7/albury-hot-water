import Image from "next/image";
import PageHero from "./PageHero";
import { MapPin, Home, Building2 } from "lucide-react";
export default function LocationPage({
  city,
  intro,
  nearby,
}: {
  city: string;
  intro: string;
  nearby: string[];
}) {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Hot-water services in ${city}`,
    serviceType: "Hot-water installation, replacement and repair enquiries",
    areaServed: { "@type": "City", name: city },
    provider: {
      "@type": "Organization",
      name: "Albury Hot Water",
      url: "https://alburyhotwater.com",
    },
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <PageHero
        eyebrow="Border-region service area"
        title={"Hot water in " + city}
        intro={intro}
        image="/images/murray-region.webp"
      />
      <section className="content-section">
        <p className="eyebrow">Local enquiries</p>
        <h2>
          Installation, replacement and repair information for {city}{" "}
          properties.
        </h2>
        <p>
          Hot-water needs vary between households, rental properties and
          commercial premises. The current system, available energy source,
          access, household demand and the urgency of the problem all help shape
          the next conversation.
        </p>
        <div className="info-grid">
          <div className="info-card">
            <Home />
            <h3>Homes</h3>
            <p>
              System replacements, efficiency upgrades and troubleshooting for
              owner-occupied homes.
            </p>
          </div>
          <div className="info-card">
            <Building2 />
            <h3>Rental properties</h3>
            <p>
              Clear enquiries for landlords and property managers dealing with
              failed or unreliable hot water.
            </p>
          </div>
          <div className="info-card">
            <MapPin />
            <h3>Nearby coverage</h3>
            <p>
              Enquiries are also welcomed from surrounding communities, subject
              to actual service availability.
            </p>
          </div>
        </div>
      </section>
      <section className="section split-content">
        <div>
          <p className="eyebrow">What to include</p>
          <h2>Make your {city} enquiry useful from the start.</h2>
          <ul className="check-list">
            <li>Property suburb and access details</li>
            <li>Existing system type and approximate age if known</li>
            <li>Whether the unit is leaking, cold or running out quickly</li>
            <li>Household size and likely peak demand</li>
            <li>Photographs of the unit and connections where practical</li>
          </ul>
          <a className="button button-dark" href="/contact">
            Request a local quote
          </a>
        </div>
        <div className="split-image">
          <Image
            src="/images/system-inspection.webp"
            alt={
              "Hot-water system inspection for a residential property near " +
              city
            }
            fill
            sizes="(max-width:900px) 100vw,50vw"
          />
        </div>
      </section>
      <section className="content-section">
        <p className="eyebrow">Choosing a system locally</p>
        <h2>Hot-water options for {city} homes and properties</h2>
        <p>
          A hot-water system should be selected for the property rather than
          from a generic product list. Electric storage can offer a familiar
          replacement path where the electrical supply and tariff are suitable.
          Heat pumps may reduce electricity use compared with conventional
          resistance storage, but placement, airflow, noise, cold-weather
          performance and upfront cost need consideration.
        </p>
        <p>
          Gas storage and continuous-flow systems depend on the available gas
          supply, flow requirements, ventilation and pipework. Solar hot water
          adds questions about roof orientation, shading, frost protection and
          booster operation. In {city}, cold winter mornings make capacity,
          recovery and system siting particularly important.
        </p>
        <div className="section-actions">
          <a className="button button-dark" href="/services">
            Explore hot-water services
          </a>
          <a className="text-link" href="/guides/choosing-a-hot-water-system">
            Read the system comparison guide
          </a>
        </div>
      </section>
      <section className="section split-content">
        <div className="split-image">
          <Image
            src="/images/heat-pump.webp"
            alt={`Heat-pump hot-water option for a ${city} property`}
            fill
            sizes="(max-width:900px) 100vw,50vw"
          />
        </div>
        <div>
          <p className="eyebrow">Repair or replace?</p>
          <h2>Use the fault and overall condition to guide the decision.</h2>
          <p>
            A failed valve, thermostat, element or connection may be repairable.
            A leaking storage cylinder, significant corrosion, repeated faults
            or a system that no longer meets demand can make replacement more
            practical. Age is relevant, but it should not be the only factor.
          </p>
          <p>
            Ask for the fault, repair scope and likely remaining service life to
            be explained. If replacement is recommended, compare capacity,
            running considerations, installation changes and the complete quoted
            scope.
          </p>
          <a
            className="text-link"
            href="/blog/repair-or-replace-hot-water-system"
          >
            Read the repair-or-replace guide
          </a>
        </div>
      </section>
      <section className="content-section">
        <p className="eyebrow">Useful local search answers</p>
        <h2>Hot-water installation, repairs and replacement in {city}</h2>
        <p>
          People searching for hot-water installation in {city}, hot-water
          repairs in {city}, heat-pump hot water in {city} or hot-water system
          replacement in {city} generally need one of two things: prompt help
          with a failed system, or clear advice before an upgrade. This site
          supports both paths without making an unverified response-time claim.
        </p>
        <p>
          For a useful enquiry, include the suburb, system type, visible model
          details, symptoms, household size, access and photographs where safe.
          Never remove covers or touch gas, wiring or very hot pipework. Gas
          smells, smoke, sparking or significant flooding require urgent help
          from the appropriate emergency or licensed service.
        </p>
      </section>
      <section className="content-section">
        <p className="eyebrow">Surrounding areas</p>
        <h2>Near {city}</h2>
        <div className="area-chips">
          {nearby.map((x) => (
            <span key={x}>
              <MapPin size={14} />
              {x}
            </span>
          ))}
        </div>
        <div className="faq-list">
          <details>
            <summary>
              Can I request help with an urgent hot-water problem in {city}?
            </summary>
            <p>
              Yes, you can describe an urgent problem through the enquiry form.
              Response time and immediate availability must be confirmed when
              the enquiry is reviewed; the website does not make an unverified
              same-day or 24-hour promise.
            </p>
          </details>
          <details>
            <summary>Can I compare heat-pump and conventional systems?</summary>
            <p>
              Yes. Include your current system, household size and property
              details so the practical considerations can be discussed.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}

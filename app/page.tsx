import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import QuoteForm from "@/components/QuoteForm";
import {
  Droplets,
  Gauge,
  Leaf,
  ThermometerSun,
  ArrowRight,
  MapPin,
} from "lucide-react";

const services = [
  {
    href: "/services/hot-water-replacement",
    title: "Replacement",
    text: "Compare practical replacement paths when an existing unit is leaking, unreliable or no longer keeping up.",
    icon: Droplets,
  },
  {
    href: "/services/heat-pump-hot-water",
    title: "Heat-pump systems",
    text: "Understand efficiency, household sizing, installation considerations and questions to ask before upgrading.",
    icon: Leaf,
  },
  {
    href: "/services/hot-water-repairs",
    title: "Repairs",
    text: "Describe the symptoms, system type and location so the right next step can be discussed.",
    icon: Gauge,
  },
  {
    href: "/services",
    title: "System options",
    text: "Explore electric storage, gas, solar, heat-pump and continuous-flow choices without the jargon.",
    icon: ThermometerSun,
  },
];
const areas = [
  "Albury",
  "Wodonga",
  "Lavington",
  "Thurgoona",
  "North Albury",
  "West Wodonga",
  "Baranduda",
  "Jindera",
];

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <section className="section intro-grid">
        <div>
          <p className="eyebrow">Hot water, explained properly</p>
          <h2>Start with the right questions—not a rushed system choice.</h2>
        </div>
        <div className="prose-large">
          <p>
            When hot water stops, it is tempting to replace like-for-like
            without considering household demand, energy source, available space
            or running costs. Albury Hot Water makes it easier to explore the
            main options and send a detailed local enquiry.
          </p>
          <p>
            The site covers installations, replacements, repairs and
            efficiency-focused upgrades for homes, rental properties and
            suitable business premises across Albury, Wodonga and nearby
            communities.
          </p>
        </div>
      </section>
      <section className="section services-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Ways we can help</p>
            <h2>Find the service that fits your situation.</h2>
          </div>
          <Link className="text-link" href="/services">
            View all hot-water services <ArrowRight size={17} />
          </Link>
        </div>
        <div className="service-grid">
          {services.map(({ href, title, text, icon: Icon }, i) => (
            <a className="service-card" href={href} key={title}>
              <div className="service-number">0{i + 1}</div>
              <Icon className="ochre-icon" size={26} />
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="service-card-link">
                Explore service <ArrowRight size={15} />
              </span>
            </a>
          ))}
        </div>
      </section>
      <section className="image-story section">
        <div className="image-frame tall">
          <Image
            src="/images/heat-pump.webp"
            alt="Modern heat-pump hot-water system installed beside an Australian home"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
        <div className="story-copy">
          <p className="eyebrow">A considered upgrade</p>
          <h2>Choosing between electric, gas, solar and heat pump?</h2>
          <p>
            No single system is right for every property. Household size,
            peak-use times, existing connections, outdoor space and installation
            requirements can all influence the choice.
          </p>
          <ul className="check-list">
            <li>Compare system types in plain language</li>
            <li>Consider capacity and recovery time</li>
            <li>Ask what is included in the quotation</li>
            <li>Confirm warranties and ongoing maintenance</li>
          </ul>
          <Link
            className="button button-dark"
            href="/guides/choosing-a-hot-water-system"
          >
            Compare hot-water options
          </Link>
        </div>
      </section>
      <section className="dark-feature">
        <div className="dark-copy">
          <p className="eyebrow light">When the water runs cold</p>
          <h2>A useful enquiry begins with the symptoms.</h2>
          <p>
            Tell us whether the water is completely cold, running out quickly,
            leaking, discoloured or producing unusual sounds. Include the system
            type if known and a photograph where helpful.
          </p>
          <Link className="button button-ochre" href="/contact">
            Describe the problem
          </Link>
        </div>
        <div className="dark-image">
          <Image
            src="/images/steam-shower.webp"
            alt="Hot steaming shower in a modern bathroom during cool twilight"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>
      <section className="section region-section">
        <div className="region-copy">
          <p className="eyebrow">Across the border region</p>
          <h2>Hot-water enquiries across Albury–Wodonga.</h2>
          <p>
            Local pages provide relevant information for the two cities and
            surrounding communities, while avoiding generic pages that simply
            repeat a suburb name.
          </p>
          <div className="area-chips">
            {areas.map((a) => (
              <span key={a}>
                <MapPin size={14} />
                {a}
              </span>
            ))}
          </div>
          <Link className="text-link" href="/locations">
            Explore service areas <ArrowRight size={17} />
          </Link>
        </div>
        <div className="image-frame region-image">
          <Image
            src="/images/murray-region.webp"
            alt="Misty winter sunrise over the Murray River region near Albury and Wodonga"
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
          />
        </div>
      </section>
      <section className="section process-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What to expect</p>
            <h2>A straightforward enquiry process.</h2>
          </div>
        </div>
        <div className="process-grid">
          <div>
            <span>1</span>
            <h3>Explain the need</h3>
            <p>
              Share the property location, current system and what has changed.
            </p>
          </div>
          <div>
            <span>2</span>
            <h3>Discuss the options</h3>
            <p>
              Ask about repair, replacement, sizing and installation
              considerations.
            </p>
          </div>
          <div>
            <span>3</span>
            <h3>Review the quote</h3>
            <p>
              Check inclusions, applicable warranties and the proposed work
              before proceeding.
            </p>
          </div>
        </div>
      </section>
      <section className="quote-section" id="quote">
        <div className="quote-intro">
          <p className="eyebrow light">Request a local quote</p>
          <h2>Tell us what is happening with your hot water.</h2>
          <p>
            Complete the form and we’ll get back to you with a clear, honest
            quote.
          </p>
        </div>
        <QuoteForm />
      </section>
      <section className="section faq-section">
        <div>
          <p className="eyebrow">Common questions</p>
          <h2>Before you organise hot-water work.</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>
              Should a leaking hot-water system be repaired or replaced?
            </summary>
            <p>
              It depends on where the leak is coming from, the age and condition
              of the unit, and the cost of repair compared with replacement. A
              leaking tank itself often points toward replacement, while a valve
              or connection may be repairable.
            </p>
          </details>
          <details>
            <summary>Which hot-water system is best for a family home?</summary>
            <p>
              The right choice depends on household size, usage patterns, energy
              source, site constraints and budget. Heat pumps can suit many
              households seeking efficiency, while storage and continuous-flow
              systems each have practical advantages.
            </p>
          </details>
          <details>
            <summary>Can I enquire from Wodonga as well as Albury?</summary>
            <p>
              Yes. Enquiries are welcomed from Albury, Wodonga and surrounding
              areas. Actual travel coverage should always be confirmed when
              service arrangements are discussed.
            </p>
          </details>
          <details>
            <summary>
              What details should I include with a quote request?
            </summary>
            <p>
              Include your suburb, current system type if known, approximate
              household size, the symptoms or reason for replacement, access
              considerations and photographs where useful.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}

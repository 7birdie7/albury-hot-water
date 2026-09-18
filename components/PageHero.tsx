import Image from "next/image";
import Link from "next/link";
export default function PageHero({
  eyebrow,
  title,
  intro,
  image = "/images/twilight-home.webp",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
}) {
  return (
    <section className="page-hero">
      <Image src={image} alt="" fill priority sizes="100vw" />
      <div className="page-hero-content">
        <p className="eyebrow light">{eyebrow}</p>
        <p className="hero-service-area">Servicing Albury–Wodonga</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <div className="hero-actions">
          <Link className="button button-ochre" href="/contact">
            Request a quote
          </Link>
          <a className="button button-ghost" href="tel:0490008212">
            Call 0490 008 212
          </a>
        </div>
      </div>
    </section>
  );
}

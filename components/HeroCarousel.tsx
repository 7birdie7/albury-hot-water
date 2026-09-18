"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
const slides = [
  {
    image: "/images/twilight-home.webp",
    eyebrow: "Albury–Wodonga hot water",
    title: "Hot water. Clear choices.",
    text: "Repairs, replacement and new-system enquiries across the border region.",
    primary: "Request a quote",
    href: "/#quote",
    secondary: "Explore services",
    secondaryHref: "/services",
  },
  {
    image: "/images/heat-pump.webp",
    eyebrow: "Efficient system options",
    title: "Considering a heat pump?",
    text: "Compare the practical questions before choosing a replacement.",
    primary: "Explore heat pumps",
    href: "/services/heat-pump-hot-water",
    secondary: "Compare systems",
    secondaryHref: "/guides/choosing-a-hot-water-system",
  },
  {
    image: "/images/system-inspection.webp",
    eyebrow: "Repair or replace?",
    title: "Hot water",
    titleSuffix: "— or not enough?",
    text: "Tell us what is happening and which system you currently have.",
    primary: "Describe the problem",
    href: "/contact",
    secondary: "Repair information",
    secondaryHref: "/services/hot-water-repairs",
  },
];
export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setActive((v) => (v + 1) % slides.length),
      7000,
    );
    return () => clearInterval(id);
  }, []);
  const slide = slides[active];
  return (
    <section className="hero" aria-roledescription="carousel">
      {slides.map((s, i) => (
        <Image
          key={s.image}
          src={s.image}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={i === active ? "hero-img active" : "hero-img"}
        />
      ))}
      <div className="hero-overlay" />
      <div className="hero-inner">
        <p className="eyebrow light">{slide.eyebrow}</p>
        <p className="hero-service-area">Servicing Albury–Wodonga</p>
          <h1>
            {slide.title}
            {slide.titleSuffix && (
              <span className="hero-title-suffix"> {slide.titleSuffix}</span>
            )}
          </h1>
        <p className="hero-text">{slide.text}</p>
        <div className="hero-actions">
          <Link className="button button-ochre" href={slide.href}>
            {slide.primary}
            <ArrowRight size={17} />
          </Link>
          <Link className="button button-ghost" href={slide.secondaryHref}>
            {slide.secondary}
          </Link>
        </div>
      </div>
      <div className="hero-trust" aria-label="Service overview">
        <span>
          <b>01</b> Clear system comparisons
        </span>
        <span>
          <b>02</b> Albury–Wodonga coverage
        </span>
        <span>
          <b>03</b> Property-specific enquiries
        </span>
      </div>
      <div className="hero-controls">
        <button
          aria-label="Previous slide"
          onClick={() =>
            setActive((active + slides.length - 1) % slides.length)
          }
        >
          <ChevronLeft />
        </button>
        <div>
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={"Go to slide " + (i + 1)}
              className={i === active ? "dot active" : "dot"}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
        <button
          aria-label="Next slide"
          onClick={() => setActive((active + 1) % slides.length)}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Droplets, Phone, Mail, ChevronDown } from "lucide-react";

function NavGroup({
  label,
  href,
  name,
  selected,
  active,
  setActive,
  children,
}: {
  label: string;
  href: string;
  name: string;
  selected: boolean;
  active: string | null;
  setActive: (name: string | null) => void;
  children: React.ReactNode;
}) {
  const open = active === name;
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const keepOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(name);
  };
  const closeAfterPause = () => {
    closeTimer.current = setTimeout(() => setActive(null), 650);
  };
  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );
  return (
    <div
      data-section={name}
      className={`${open ? "nav-group is-open" : "nav-group"}${selected ? " current" : ""}`}
      onMouseEnter={keepOpen}
      onMouseLeave={closeAfterPause}
    >
      <div className="nav-group-label">
        <a
          href={href}
          className={selected ? "current-link" : ""}
          aria-current={selected ? "page" : undefined}
          data-active={selected ? "true" : "false"}
        >
          {label}
        </a>
        <button
          type="button"
          className={selected ? "current-nav-toggle" : ""}
          aria-label={`Show ${label} links`}
          aria-expanded={open}
          onClick={() => setActive(open ? null : name)}
        >
          <ChevronDown size={14} />
        </button>
      </div>
      <div className="nav-dropdown">{children}</div>
    </div>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const path = (pathname || "/").replace(/\/$/, "") || "/";
  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
    setActive(null);
  }, [pathname]);
  const inPath = (root: string) => path === root || path.startsWith(root + "/");
  return (
    <header className="site-header">
      <a href="/" className="brand">
        <span>
          <Droplets size={22} />
        </span>
        <div>
          <strong>Albury Hot Water</strong>
          <small>Albury · Wodonga · Border Region</small>
        </div>
      </a>
      <div className="header-right">
        <div className="header-contact">
          <a href="tel:0490008212">
            <Phone size={14} />
            0490 008 212
          </a>
          <a href="mailto:info@alburyhotwater.com">
            <Mail size={14} />
            info@alburyhotwater.com
          </a>
        </div>
        <nav className={open ? "nav open" : "nav"}>
          <NavGroup
            label="Services"
            href="/services"
            name="services"
            selected={inPath("/services")}
            active={active}
            setActive={setActive}
          >
            <a href="/services">All hot-water services</a>
            <a href="/services/hot-water-replacement">System replacement</a>
            <a href="/services/hot-water-repairs">Hot-water repairs</a>
            <a href="/services/heat-pump-hot-water">Heat-pump systems</a>
          </NavGroup>
          <NavGroup
            label="Areas"
            href="/locations"
            name="areas"
            selected={inPath("/locations")}
            active={active}
            setActive={setActive}
          >
            <a href="/locations">All service areas</a>
            <a href="/locations/albury">Albury</a>
            <a href="/locations/wodonga">Wodonga</a>
            <a href="/contact">Ask about nearby communities</a>
          </NavGroup>
          <NavGroup
            label="Advice"
            href="/guides"
            name="advice"
            selected={inPath("/guides") || inPath("/blog")}
            active={active}
            setActive={setActive}
          >
            <a href="/guides">Guides</a>
            <a href="/guides/choosing-a-hot-water-system">Choosing a system</a>
            <a href="/blog">Hot-water blog</a>
            <a href="/blog/hot-water-rebates-albury-wodonga">Rebates</a>
            <a href="/blog/hot-water-system-warning-signs">Warning signs</a>
          </NavGroup>
          <a
            href="/about"
            className={inPath("/about") ? "current-link" : ""}
            aria-current={inPath("/about") ? "page" : undefined}
          >
            About
          </a>
          <a
            href="/faq"
            className={inPath("/faq") ? "current-link" : ""}
            aria-current={inPath("/faq") ? "page" : undefined}
          >
            FAQ
          </a>
          <NavGroup
            label="Contact"
            href="/contact"
            name="contact"
            selected={inPath("/contact")}
            active={active}
            setActive={setActive}
          >
            <a href="/contact">Contact & quote form</a>
            <a href="tel:0490008212">Call 0490 008 212</a>
            <a href="mailto:info@alburyhotwater.com">Email us</a>
          </NavGroup>
          <a href="/#quote" className="nav-cta">
            Request a quote
          </a>
        </nav>
      </div>
      <button
        className="menu-button"
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

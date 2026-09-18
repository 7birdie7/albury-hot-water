import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://alburyhotwater.com"),
  title: {
    default: "Albury Hot Water | Installation, Replacement & Repairs",
    template: "%s | Albury Hot Water",
  },
  description:
    "Explore hot-water installation, replacement, repair and system options across Albury, Wodonga and surrounding areas.",
  keywords: [
    "hot water Albury",
    "hot water Wodonga",
    "hot water system replacement Albury",
    "hot water repairs Albury Wodonga",
    "heat pump hot water Albury",
    "hot water installation Albury",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Albury Hot Water",
    description:
      "Hot-water installation, replacement and repair enquiries across Albury–Wodonga.",
    type: "website",
    locale: "en_AU",
  },
  robots: { index: true, follow: true },
  verification: {
    other: {
      "msvalidate.01": "5C823D03C915508FDF285CFD549C7EBF",
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Albury Hot Water",
  url: "https://alburyhotwater.com",
  description:
    "Hot-water installation, replacement, repair and system information for Albury, Wodonga and surrounding communities.",
  inLanguage: "en-AU",
};
const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Albury Hot Water",
  url: "https://alburyhotwater.com",
  email: "info@alburyhotwater.com",
  telephone: "+61 490 008 212",
  areaServed: [
    "Albury",
    "Wodonga",
    "Lavington",
    "Thurgoona",
    "Jindera",
    "Baranduda",
  ],
};

const reliableNavigation = `
(function () {
  function markCurrentSection() {
    var path = window.location.pathname.replace(/\\/$/, '') || '/';
    var pageSection = path.indexOf('/services') === 0 ? 'services' : path.indexOf('/locations') === 0 ? 'areas' : (path.indexOf('/guides') === 0 || path.indexOf('/blog') === 0) ? 'advice' : path.indexOf('/about') === 0 ? 'about' : path.indexOf('/faq') === 0 ? 'faq' : path.indexOf('/contact') === 0 ? 'contact' : 'home';
    document.body.setAttribute('data-current-section', pageSection);
    document.querySelectorAll('.nav-group.current').forEach(function (el) { el.classList.remove('current'); });
    document.querySelectorAll('.nav > a.current-link').forEach(function (el) { el.classList.remove('current-link'); el.removeAttribute('aria-current'); });
    var section = path.indexOf('/services') === 0 ? 'services' : path.indexOf('/locations') === 0 ? 'areas' : (path.indexOf('/guides') === 0 || path.indexOf('/blog') === 0) ? 'advice' : path.indexOf('/contact') === 0 ? 'contact' : '';
    if (section) {
      var group = document.querySelector('.nav-group[data-section="' + section + '"]');
      if (group) { group.classList.add('current'); var link = group.querySelector('.nav-group-label > a'); if (link) { link.classList.add('current-link'); link.setAttribute('aria-current', 'page'); } var toggle = group.querySelector('.nav-group-label > button'); if (toggle) toggle.classList.add('current-nav-toggle'); }
    }
    if (path.indexOf('/about') === 0) {
      var about = document.querySelector('.nav > a[href="/about"]');
      if (about) { about.classList.add('current-link'); about.setAttribute('aria-current', 'page'); }
    }
    if (path.indexOf('/faq') === 0) {
      var faq = document.querySelector('.nav > a[href="/faq"]');
      if (faq) { faq.classList.add('current-link'); faq.setAttribute('aria-current', 'page'); }
    }
  }
  function followLink(event) {
    var anchor = event.target.closest && event.target.closest('a[href]');
    if (!anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    var href = anchor.getAttribute('href');
    if (!href || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0 || anchor.target === '_blank') return;
    var destination = new URL(anchor.href, window.location.href);
    if (destination.origin !== window.location.origin) return;
    event.preventDefault();
    window.location.assign(destination.href);
  }
  markCurrentSection();
  document.addEventListener('click', followLink, true);
  document.addEventListener('DOMContentLoaded', markCurrentSection);
  window.setTimeout(markCurrentSection, 250);
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationSchema),
          }}
        />
        {children}
        <SiteFooter />
        <script dangerouslySetInnerHTML={{ __html: reliableNavigation }} />
      </body>
    </html>
  );
}

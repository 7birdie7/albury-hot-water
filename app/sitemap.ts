import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const b = "https://alburyhotwater.com";
  const p = [
    "",
    "/services",
    "/services/hot-water-replacement",
    "/services/hot-water-repairs",
    "/services/heat-pump-hot-water",
    "/locations",
    "/locations/albury",
    "/locations/wodonga",
    "/about",
    "/faq",
    "/contact",
    "/guides",
    "/guides/choosing-a-hot-water-system",
    "/blog",
    "/blog/no-hot-water-what-to-check",
    "/blog/heat-pump-hot-water-albury-wodonga",
    "/blog/repair-or-replace-hot-water-system",
    "/blog/hot-water-rebates-albury-wodonga",
    "/blog/best-hot-water-system-albury",
    "/blog/hot-water-system-warning-signs",
  ];
  return p.map((x) => ({
    url: b + x,
    lastModified: new Date(),
    changeFrequency:
      x.startsWith("/blog") || x.startsWith("/guides") ? "monthly" : "weekly",
    priority: x === "" ? 1 : x === "/contact" ? 0.9 : 0.8,
  }));
}

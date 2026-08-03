import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { serviceCategories } from "@/lib/services";
import { serviceAreas } from "@/lib/areas";

/** XML sitemap served at /sitemap.xml */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly"
  ) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1.0, "weekly"),
    entry("/about", 0.8),
    entry("/contact", 0.9),
    ...serviceCategories.map((c) => entry(`/services/${c.slug}`, 0.9)),
    ...serviceCategories.flatMap((c) =>
      c.pages.map((p) => entry(`/services/${c.slug}/${p.slug}`, 0.8))
    ),
    ...serviceAreas.map((a) => entry(`/areas/${a.slug}`, 0.7)),
    entry("/sitemap", 0.3, "yearly"),
    entry("/privacy", 0.2, "yearly"),
    entry("/terms", 0.2, "yearly"),
  ];
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";
import { serviceCategories } from "@/lib/services";
import { serviceAreas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Every page on the TSB Accounting Solutions website — services, service areas, and company information, all in one place.",
  alternates: { canonical: "/sitemap" },
  openGraph: { title: `Sitemap | ${site.name}`, url: "/sitemap" },
};

const linkClass =
  "text-sm text-navy-900/75 transition-colors hover:text-gold-600";

export default function HtmlSitemapPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Sitemap", href: "/sitemap" }]}
        titlePre="Site"
        keyword="Map"
        subtitle="Every page on our site, in one place."
        showCtas={false}
      />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8" data-aos>
          <nav aria-label="Company pages">
            <h2 className="mb-4 border-b-2 border-gold-500 pb-2 font-display text-xl font-bold text-navy-900">
              Company
            </h2>
            <ul className="space-y-2.5">
              <li><Link href="/" className={linkClass}>Home</Link></li>
              <li><Link href="/about" className={linkClass}>About Us</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
              <li><Link href="/privacy" className={linkClass}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={linkClass}>Terms of Use</Link></li>
              <li><Link href="/sitemap" className={linkClass}>Sitemap</Link></li>
            </ul>
          </nav>

          {serviceCategories.map((cat) => (
            <nav key={cat.slug} aria-label={`${cat.shortName} pages`}>
              <h2 className="mb-4 border-b-2 border-gold-500 pb-2 font-display text-xl font-bold text-navy-900">
                {cat.shortName}
              </h2>
              <ul className="space-y-2.5">
                <li>
                  <Link href={`/services/${cat.slug}`} className={`${linkClass} font-semibold`}>
                    {cat.name} (Overview)
                  </Link>
                </li>
                {cat.pages.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/services/${cat.slug}/${p.slug}`} className={linkClass}>
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Service area pages">
            <h2 className="mb-4 border-b-2 border-gold-500 pb-2 font-display text-xl font-bold text-navy-900">
              Service Areas
            </h2>
            <ul className="space-y-2.5">
              {serviceAreas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className={linkClass}>
                    {a.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

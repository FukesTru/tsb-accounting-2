import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { serviceCategories, getCategory } from "@/lib/services";
import { serviceAreas } from "@/lib/areas";

type Params = { category: string };

export function generateStaticParams(): Params[] {
  return serviceCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const cat = getCategory((await params).category);
  if (!cat) return {};
  const path = `/services/${cat.slug}`;
  return {
    title: cat.metaTitle,
    description: cat.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: cat.metaTitle, description: cat.metaDescription, url: path },
  };
}

export default async function ServiceCategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const cat = getCategory((await params).category);
  if (!cat) notFound();

  const related = serviceCategories.filter((c) => c.slug !== cat.slug);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: cat.name,
          description: cat.metaDescription,
          path: `/services/${cat.slug}`,
        })}
      />

      <PageHero
        crumbs={[
          { name: "Services", href: `/services/${cat.slug}` },
          { name: cat.shortName, href: `/services/${cat.slug}` },
        ]}
        keyword={cat.heroKeyword}
        titlePost="in Northwest Arkansas"
        subtitle={cat.cardDescription}
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8" data-aos>
          {cat.intro.map((p, i) => (
            <p key={i} className={`leading-relaxed text-navy-900/80 ${i > 0 ? "mt-5" : ""}`}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Sub-service cards */}
      <section className="bg-cream-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center" data-aos>
            <p className="eyebrow">Our Services</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              {cat.shortName} <span className="accent-italic">services</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cat.subServices.map((sub, i) => {
              const href = sub.slug
                ? `/services/${cat.slug}/${sub.slug}`
                : `/services/${cat.slug}#what-we-handle`;
              return (
                <Link
                  key={sub.name}
                  href={href}
                  className="group rounded-lg border border-navy-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  data-aos
                  data-aos-delay={String((i % 3) * 100)}
                >
                  <span className="block h-1 w-10 rounded bg-gold-500" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-navy-900 group-hover:text-gold-600">
                    {sub.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/70">{sub.blurb}</p>
                  <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-teal-600">
                    {sub.slug ? "Learn More →" : "Included in this service →"}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section id="what-we-handle" className="bg-white py-20 scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div data-aos>
            <p className="eyebrow">What We Handle</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Everything <span className="accent-italic">covered</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {cat.handle.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy-900/80">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold-500"
                    aria-hidden="true"
                  >
                    <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div data-aos data-aos-delay="150">
            <img
              src={cat.image}
              alt={cat.imageAlt}
              loading="lazy"
              width="800"
              height="520"
              className="w-full rounded-lg shadow-xl"
            />
            <div className="mt-8 rounded-lg border-l-4 border-gold-500 bg-cream-50 p-6">
              <h3 className="font-display text-lg font-semibold text-navy-900">
                Why work with a dedicated accountant?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/75">{cat.why}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="on-dark bg-navy-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center" data-aos>
            <p className="eyebrow">Our Process</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white">
              How it <span className="accent-italic">works</span>
            </h2>
          </div>
          <div className="mt-14">
            <ProcessSteps steps={cat.process} onDark />
          </div>
        </div>
      </section>

      <CtaBand
        heading={`Ready to talk ${cat.shortName.toLowerCase()}?`}
        text="Book a free consultation and get a clear scope and flat quote — usually within a few days."
      />

      {/* Internal links: related services + areas */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-aos>
          <h2 className="font-display text-2xl font-bold text-navy-900">Explore more</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="rounded-lg border border-navy-900/10 p-5 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600"
              >
                {r.shortName} →
              </Link>
            ))}
            {serviceAreas.slice(0, 2).map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="rounded-lg border border-navy-900/10 p-5 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600"
              >
                Serving {a.displayName} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

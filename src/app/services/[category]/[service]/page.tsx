import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { serviceCategories, getSubService } from "@/lib/services";

type Params = { category: string; service: string };

export function generateStaticParams(): Params[] {
  return serviceCategories.flatMap((c) =>
    c.pages.map((p) => ({ category: c.slug, service: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, service } = await params;
  const found = getSubService(category, service);
  if (!found) return {};
  const path = `/services/${category}/${service}`;
  return {
    title: found.page.metaTitle,
    description: found.page.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: found.page.metaTitle,
      description: found.page.metaDescription,
      url: path,
    },
  };
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, service } = await params;
  const found = getSubService(category, service);
  if (!found) notFound();
  const { category: cat, page } = found;

  const siblings = cat.pages.filter((p) => p.slug !== page.slug);
  const path = `/services/${cat.slug}/${page.slug}`;

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: page.name,
          description: page.metaDescription,
          path,
        })}
      />

      <PageHero
        crumbs={[
          { name: "Services", href: `/services/${cat.slug}` },
          { name: cat.shortName, href: `/services/${cat.slug}` },
          { name: page.name, href: path },
        ]}
        keyword={page.heroKeyword}
        titlePost={page.name.includes(page.heroKeyword) ? page.name.replace(page.heroKeyword, "").trim() : ""}
        subtitle={`${page.name} for Northwest Arkansas businesses — and virtual clients nationwide.`}
      />

      {/* Intro + What's Included */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
          <div data-aos="fade-right">
            {page.intro.map((p, i) => (
              <p key={i} className={`leading-relaxed text-navy-900/80 ${i > 0 ? "mt-5" : ""}`}>
                {p}
              </p>
            ))}
          </div>
          <aside
            className="relative h-fit overflow-hidden rounded-lg border border-navy-900/10 bg-cream-50 p-8"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <span
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-500/10 blur-2xl"
              aria-hidden="true"
            />
            <h2 className="font-display text-xl font-bold text-navy-900">
              What&apos;s <span className="accent-italic">included</span>
            </h2>
            <ul className="mt-6 space-y-3.5">
              {page.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy-900/80">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold-500"
                    aria-hidden="true"
                  >
                    <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* 3-step process */}
      <section className="on-dark bg-navy-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center" data-aos>
            <p className="eyebrow">Our Process</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white">
              Three steps to <span className="accent-italic">done</span>
            </h2>
          </div>
          <div className="mt-14">
            <ProcessSteps steps={page.process} onDark />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              {page.name} <span className="accent-italic">questions</span>
            </h2>
          </div>
          <div className="mt-12" data-aos>
            <Faq items={page.faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        heading={`Ready to get started with ${page.name.toLowerCase()}?`}
        text="Book a free consultation — we'll scope your needs and quote a flat price before any work begins."
      />

      {/* Internal links: siblings + parent + contact */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-aos>
          <h2 className="font-display text-2xl font-bold text-navy-900">Related services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siblings.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${cat.slug}/${s.slug}`}
                className="card-lift arrow-link rounded-lg border border-navy-900/10 p-5 text-sm font-semibold text-navy-900 hover:border-gold-500 hover:text-gold-600"
              >
                {s.name} <span className="arrow">→</span>
              </Link>
            ))}
            <Link
              href={`/services/${cat.slug}`}
              className="rounded-lg border border-navy-900/10 p-5 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600"
            >
              All {cat.shortName} Services →
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-gold-500/60 bg-cream-50 p-5 text-sm font-semibold text-gold-600 transition-colors hover:border-gold-500"
            >
              Get a Free Consultation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

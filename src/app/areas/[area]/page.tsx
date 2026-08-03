import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import MapEmbed from "@/components/MapEmbed";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { serviceAreas, getArea } from "@/lib/areas";
import { serviceCategories } from "@/lib/services";
import { site, fullAddress } from "@/lib/site";

type Params = { area: string };

export function generateStaticParams(): Params[] {
  return serviceAreas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const area = getArea((await params).area);
  if (!area) return {};
  const path = `/areas/${area.slug}`;
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: area.metaTitle, description: area.metaDescription, url: path },
  };
}

export default async function AreaPage({ params }: { params: Promise<Params> }) {
  const area = getArea((await params).area);
  if (!area) notFound();

  const others = serviceAreas.filter((a) => a.slug !== area.slug);
  const [pre] = area.h1.split(area.heroKeyword);

  return (
    <>
      {/* LocalBusiness schema on every area page */}
      <JsonLd data={localBusinessSchema()} />

      <PageHero
        crumbs={[
          { name: "Service Areas", href: "/areas/northwest-arkansas" },
          { name: area.displayName, href: `/areas/${area.slug}` },
        ]}
        titlePre={pre.trim()}
        keyword={area.heroKeyword}
        subtitle={`Local accounting support for ${area.displayName} — plus fully virtual service for clients anywhere in the U.S.`}
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8" data-aos>
          {area.intro.map((p, i) => (
            <p key={i} className={`leading-relaxed text-navy-900/80 ${i > 0 ? "mt-5" : ""}`}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* NAP + map */}
      <section className="bg-cream-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8">
          <div data-aos="fade-right">
            <p className="eyebrow">Local to You</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Serving <span className="accent-italic">{area.city}</span> from Lowell
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-900/75">{area.localNote}</p>
            <ul className="mt-8 space-y-4 text-sm text-navy-900/80">
              <li>
                <span className="block font-semibold text-navy-900">Office</span>
                {fullAddress}
              </li>
              <li>
                <span className="block font-semibold text-navy-900">Phone</span>
                <a href={site.phoneHref} className="text-gold-600 hover:text-gold-500">
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="block font-semibold text-navy-900">Hours</span>
                {site.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </li>
            </ul>
          </div>
          <div data-aos="fade-left" data-aos-delay="150">
            <MapEmbed className="h-full min-h-96" />
          </div>
        </div>
      </section>

      {/* Services offered locally */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center" data-aos>
            <p className="eyebrow">What We Offer</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Services available in <span className="accent-italic">{area.city}</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {serviceCategories.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/services/${cat.slug}`}
                className="card-lift arrow-link group rounded-lg border border-navy-900/10 p-7 shadow-sm hover:border-gold-500/50 hover:shadow-lg"
                data-aos
                data-aos-delay={String(i * 100)}
              >
                <span
                  className="block h-1 w-10 rounded bg-gold-500 transition-all duration-500 group-hover:w-16"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-display text-xl font-semibold text-navy-900 transition-colors group-hover:text-gold-600">
                  {cat.shortName}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/70">
                  {cat.cardDescription}
                </p>
                <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-teal-600">
                  Explore <span className="arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust block: NWA + remote (replaces the reference's "local courthouse" block) */}
      <section className="on-dark bg-navy-900 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8" data-aos>
          <p className="eyebrow">Local &amp; Virtual</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white">
            Serving NWA businesses <span className="accent-italic">and</span> remote clients
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/70">
            We&apos;re headquartered in Lowell and happy to meet {area.city} clients
            face to face — but every service we offer also works fully virtually.
            Cloud bookkeeping, video reviews, and secure document sharing mean you
            get the same monthly rhythm whether you&apos;re down the road or across
            the country.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {site.trustChips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-gold-500/40 bg-white/5 px-4 py-1.5 text-xs font-semibold text-gold-300"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        heading={`Ready to work with an accountant who knows ${area.city}?`}
        text="Book a free consultation — in person or over video, whichever suits you."
      />

      {/* Other areas */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-aos>
          <h2 className="font-display text-2xl font-bold text-navy-900">Other areas we serve</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="rounded-lg border border-navy-900/10 p-5 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600"
              >
                {a.displayName} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

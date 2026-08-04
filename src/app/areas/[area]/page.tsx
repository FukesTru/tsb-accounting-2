import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import StatsBand from "@/components/StatsBand";
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

      {/* Intro + quick facts sidebar */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
          <div data-aos="fade-right">
            <p className="eyebrow">Local Accounting</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Your accountant in <span className="accent-italic">{area.city}</span>
            </h2>
            {area.intro.map((p, i) => (
              <p key={i} className="mt-5 leading-relaxed text-navy-900/80">
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
              {area.city} at a <span className="accent-italic">glance</span>
            </h2>
            <dl className="mt-6 space-y-4">
              {area.quickFacts.map((f) => (
                <div key={f.label} className="border-b border-navy-900/10 pb-3 last:border-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-gold-600">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm text-navy-900/80">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/contact" className="btn-primary !px-5 !py-3 text-xs">
                Free Consultation
              </Link>
              <a href={site.phoneHref} className="btn-outline-dark !px-5 !py-3 text-xs">
                Call {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* How we help — location-specific SEO content */}
      <section className="bg-cream-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center" data-aos>
            <p className="eyebrow">How We Help</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Accounting support for{" "}
              <span className="accent-italic">{area.city}</span> businesses
            </h2>
            <p className="mt-4 text-navy-900/70">
              What working with TSB Accounting Solutions looks like for a business
              based in {area.displayName}.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {area.howWeHelp.map((block, i) => (
              <div
                key={block.title}
                className="card-lift group rounded-lg border border-navy-900/10 bg-white p-7 shadow-sm hover:border-gold-500/50 hover:shadow-lg"
                data-aos
                data-aos-delay={String((i % 2) * 120)}
              >
                <span
                  className="block h-1 w-10 rounded bg-gold-500 transition-all duration-500 group-hover:w-16"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/70">{block.text}</p>
              </div>
            ))}
          </div>

          {/* Industries served locally */}
          <div className="mt-14" data-aos>
            <h3 className="text-center font-display text-xl font-bold text-navy-900">
              {area.city} industries we work with
            </h3>
            <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-3">
              {area.industries.map((industry) => (
                <li
                  key={industry}
                  className="rounded-full border border-navy-900/15 bg-white px-4 py-2 text-sm font-medium text-navy-900/80"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services offered locally */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center" data-aos>
            <p className="eyebrow">Our Services</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Services available in <span className="accent-italic">{area.city}</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/construction-accounting"
              className="card-lift arrow-link group rounded-lg border border-gold-500/40 bg-cream-50 p-7 shadow-sm hover:border-gold-500 hover:shadow-lg"
              data-aos
            >
              <span
                className="block h-1 w-10 rounded bg-gold-500 transition-all duration-500 group-hover:w-16"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-display text-xl font-semibold text-navy-900 transition-colors group-hover:text-gold-600">
                Construction Accounting
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/70">
                Our specialty — job costing, WIP reporting, and real-time job
                profitability for {area.city} contractors.
              </p>
              <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-teal-600">
                Explore <span className="arrow">→</span>
              </span>
            </Link>
            {serviceCategories.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/services/${cat.slug}`}
                className="card-lift arrow-link group rounded-lg border border-navy-900/10 p-7 shadow-sm hover:border-gold-500/50 hover:shadow-lg"
                data-aos
                data-aos-delay={String((i + 1) * 100)}
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

      {/* Visit us — NAP + map */}
      <section className="bg-cream-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center" data-aos>
            <p className="eyebrow">Visit Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Serving <span className="accent-italic">{area.city}</span> from our Lowell office
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-900/75">{area.localNote}</p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-6" data-aos="fade-right">
              <div className="rounded-lg border border-navy-900/10 bg-white p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gold-600">Office</h3>
                <p className="mt-2 text-sm text-navy-900/80">{fullAddress}</p>
              </div>
              <div className="rounded-lg border border-navy-900/10 bg-white p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gold-600">Phone</h3>
                <a
                  href={site.phoneHref}
                  className="mt-2 block font-display text-xl font-bold text-navy-900 transition-colors hover:text-gold-600"
                >
                  {site.phone}
                </a>
              </div>
              <div className="rounded-lg border border-navy-900/10 bg-white p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gold-600">Hours</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-navy-900/75">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-6">
                      <span>{h.days}</span>
                      <span className="font-medium">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="150">
              <MapEmbed className="h-full min-h-[26rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* Local & virtual trust block */}
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

      <StatsBand />

      <CtaBand
        heading={`Ready to work with an accountant who knows ${area.city}?`}
        text="Book a free consultation — in person or over video, whichever suits you."
      />

      {/* Nearby communities + other areas */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-aos>
          <h2 className="font-display text-2xl font-bold text-navy-900">
            Also serving near {area.city}
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {area.nearby.map((place) => (
              <li
                key={place}
                className="rounded-full bg-cream-50 px-4 py-1.5 text-sm text-navy-900/70"
              >
                {place}
              </li>
            ))}
          </ul>

          <h3 className="mt-12 font-display text-xl font-bold text-navy-900">
            Other service areas
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {others.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="card-lift arrow-link rounded-lg border border-navy-900/10 p-5 text-sm font-semibold text-navy-900 hover:border-gold-500 hover:text-gold-600"
              >
                {a.displayName} <span className="arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

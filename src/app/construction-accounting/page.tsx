import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import CtaBand from "@/components/CtaBand";
import StatsBand from "@/components/StatsBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { construction } from "@/lib/construction";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: construction.metaTitle,
  description: construction.metaDescription,
  alternates: { canonical: "/construction-accounting" },
  openGraph: {
    title: construction.metaTitle,
    description: construction.metaDescription,
    url: "/construction-accounting",
  },
};

export default function ConstructionPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Construction Accounting",
          description: construction.metaDescription,
          path: "/construction-accounting",
        })}
      />

      <PageHero
        crumbs={[{ name: "Construction", href: "/construction-accounting" }]}
        keyword="Construction Accounting"
        titlePost="in Northwest Arkansas"
        subtitle="Job costing, WIP reporting, and real-time job profitability — from a CPA who grew up in the construction business."
      />

      {/* Intro + What's Included sidebar */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
          <div data-aos="fade-right">
            <p className="eyebrow">Our Specialty</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Built for <span className="accent-italic">contractors</span>
            </h2>
            {construction.intro.map((p, i) => (
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
              What&apos;s <span className="accent-italic">included</span>
            </h2>
            <ul className="mt-6 space-y-3.5">
              {construction.included.map((item) => (
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

      {/* Problems we solve */}
      <section className="bg-cream-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center" data-aos>
            <p className="eyebrow">Problems We Solve</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Sound <span className="accent-italic">familiar?</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {construction.problems.map((p, i) => (
              <div
                key={p.title}
                className="card-lift group rounded-lg border border-navy-900/10 bg-white p-7 shadow-sm hover:border-gold-500/50 hover:shadow-lg"
                data-aos
                data-aos-delay={String((i % 2) * 120)}
              >
                <span
                  className="block h-1 w-10 rounded bg-gold-500 transition-all duration-500 group-hover:w-16"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div data-aos="fade-right">
            <p className="eyebrow">Who We Serve</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Contractors of every <span className="accent-italic">trade</span>
            </h2>
            <p className="mt-5 leading-relaxed text-navy-900/80">
              From one-crew specialty subs to general contractors running bonded
              commercial work, we handle the accounting side so you can stay on
              the job. Northwest Arkansas&apos;s building boom means we work with
              contractors across Lowell, Rogers, Bentonville, Springdale, and
              Fayetteville — plus construction clients nationwide, virtually.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Free Consultation
              </Link>
              <a href={site.phoneHref} className="btn-outline-dark">
                Call {site.phone}
              </a>
            </div>
          </div>
          <ul className="grid gap-3" data-aos="fade-left" data-aos-delay="150">
            {construction.whoWeServe.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-navy-900/10 bg-cream-50 px-5 py-4 text-sm font-medium text-navy-900/85"
              >
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
        </div>
      </section>

      {/* Process */}
      <section className="on-dark bg-navy-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center" data-aos>
            <p className="eyebrow">Our Process</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white">
              How we <span className="accent-italic">work</span>
            </h2>
          </div>
          <div className="mt-14">
            <ProcessSteps steps={construction.process} onDark />
          </div>
        </div>
      </section>

      <StatsBand />

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Construction accounting <span className="accent-italic">questions</span>
            </h2>
          </div>
          <div className="mt-12" data-aos>
            <Faq items={construction.faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        heading="Know your job costs before the job ends"
        text="Book a free consultation — we'll look at how your books handle jobs today and show you what real-time job costing would change."
      />

      {/* Internal links */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-aos>
          <h2 className="font-display text-2xl font-bold text-navy-900">Related services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/services/bookkeeping", label: "Monthly Bookkeeping" },
              { href: "/services/fractional-cfo-controller/fractional-cfo", label: "Fractional CFO" },
              { href: "/services/accounting-advisory/tax-planning", label: "Tax Planning" },
              { href: "/areas/northwest-arkansas", label: "Serving Northwest Arkansas" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="card-lift arrow-link rounded-lg border border-navy-900/10 p-5 text-sm font-semibold text-navy-900 hover:border-gold-500 hover:text-gold-600"
              >
                {l.label} <span className="arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

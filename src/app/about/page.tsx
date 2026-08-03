import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { personSchema, localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { serviceCategories } from "@/lib/services";

export const metadata: Metadata = {
  title: "About Victoria Harris-Pelletier",
  description:
    "Meet Victoria Harris-Pelletier, owner of TSB Accounting Solutions in Lowell, AR — accounting, bookkeeping & fractional CFO services built on accuracy and clarity.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Victoria Harris-Pelletier | ${site.name}`,
    description:
      "The story and philosophy behind TSB Accounting Solutions — treating your finances like our own.",
    url: "/about",
  },
};

/*
 * CLIENT-EDITABLE COPY: the bio below is drafted from the intake form and
 * should be reviewed/personalized by Victoria before launch. The client is
 * also finalizing an About/profile photo — swap /images/story-office.svg
 * when it arrives.
 */
export default function AboutPage() {
  return (
    <>
      <JsonLd data={[personSchema(), localBusinessSchema()]} />

      <PageHero
        crumbs={[{ name: "About", href: "/about" }]}
        titlePre="Meet"
        keyword="Victoria Harris-Pelletier"
        titlePost=", TSB Accounting Solutions"
        subtitle="Licensed CPA, owner, and the person who treats your business finances like her own — with 20+ years of accounting experience."
      />

      {/* Bio */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div className="relative" data-aos>
            <img
              src="/images/story-office.svg"
              alt="Victoria Harris-Pelletier, owner of TSB Accounting Solutions — professional photo coming soon"
              loading="lazy"
              width="700"
              height="800"
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-4 rounded-lg bg-gold-500 px-7 py-5 text-center shadow-xl sm:-right-6">
              <span className="block font-display text-3xl font-bold text-navy-950">
                {site.yearsBadge}
              </span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-navy-900/80">
                {site.yearsBadgeLabel}
              </span>
              <span className="mt-1 block border-t border-navy-950/20 pt-1 text-[0.65rem] font-semibold text-navy-900">
                {site.yearsBadgeName}
              </span>
            </div>
          </div>

          <div data-aos data-aos-delay="150">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Accounting built on <span className="accent-italic">trust</span>
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-navy-900/80">
              <p>
                Victoria Harris-Pelletier, a licensed CPA with more than 20
                years of accounting experience, founded TSB Accounting
                Solutions, LLC with a conviction that most small business owners
                share: your accountant should care about your money the way you
                do. From the firm&apos;s home base in Lowell, Arkansas, Victoria
                and her team provide bookkeeping, accounting and advisory
                services, and fractional CFO and controller support to
                businesses across Northwest Arkansas — and virtually across the
                country.
              </p>
              <p>
                Victoria grew up around the construction business and built her
                career in a region shaped by some of the largest companies in
                America — so she understands, firsthand, how serious
                organizations run their finances. Construction accounting
                remains one of the firm&apos;s deepest specialties: job costing,
                WIP reporting, and real-time job profitability for contractors
                who can&apos;t afford to wait until year-end to learn which jobs
                made money.
              </p>
              <p>
                The firm&apos;s philosophy comes down to three things. First,
                accuracy — numbers that are right, every time, because everything
                downstream depends on them. Second, clarity — reports and advice
                delivered in plain English, so you always understand what your
                finances are telling you. And third, ownership — we treat every
                client&apos;s finances like our own, which means catching problems
                early, answering the phone, and never letting things slide.
              </p>
              <p>
                TSB serves small businesses and founders at every stage: companies
                that need their first real bookkeeping system, growing teams that
                need controller oversight, and established businesses ready for
                CFO-level strategy without a full-time hire. If that sounds like
                you, the first conversation is free.
              </p>
              {/* Credentials — confirm exact license/state details with client before launch */}
              <p className="rounded-lg border-l-4 border-gold-500 bg-cream-50 p-4 text-sm font-medium text-navy-900/80">
                Licensed CPA · 20+ years of accounting experience · Construction
                accounting specialist
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Free Consultation
              </Link>
              <a href={site.phoneHref} className="btn-outline-dark">
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center" data-aos>
            <p className="eyebrow">What We Believe</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              The values behind the <span className="accent-italic">numbers</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Accuracy",
                text: "Books that are right, statements that reconcile, and reports you can bet the business on. Accuracy isn't a feature — it's the job.",
              },
              {
                title: "Clarity",
                text: "No jargon, no mystery. We explain what your numbers mean and what to do about them, in language any owner can act on.",
              },
              {
                title: "Ownership",
                text: "We treat your finances like our own. That means proactive communication, honest advice, and never letting things slide.",
              },
            ].map((v, i) => (
              <div
                key={v.title}
                className="rounded-lg border border-navy-900/10 bg-white p-8 shadow-sm"
                data-aos
                data-aos-delay={String(i * 100)}
              >
                <span className="block h-1 w-10 rounded bg-gold-500" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve + services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center" data-aos>
            <p className="eyebrow">Who We Serve</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Small businesses &amp; founders, <span className="accent-italic">everywhere</span>
            </h2>
            <p className="mt-4 text-navy-900/70">
              Local NWA companies we can meet for coffee, and virtual clients
              nationwide we meet over video — with the same care either way.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {serviceCategories.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/services/${cat.slug}`}
                className="group rounded-lg border border-navy-900/10 p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
                data-aos
                data-aos-delay={String(i * 100)}
              >
                <h3 className="font-display text-xl font-semibold text-navy-900 group-hover:text-gold-600">
                  {cat.shortName}
                </h3>
                <p className="mt-2 text-sm text-navy-900/70">{cat.cardDescription}</p>
                <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-teal-600">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Let's talk about your business"
        text="A free, friendly conversation with Victoria — no obligation, no sales pitch."
      />
    </>
  );
}

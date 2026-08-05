import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import MapEmbed from "@/components/MapEmbed";
import ProcessSteps from "@/components/ProcessSteps";
import { HeroBackdrop } from "@/components/PageHero";
import { localBusinessSchema } from "@/lib/schema";
import { site, fullAddress } from "@/lib/site";
import { serviceCategories } from "@/lib/services";
import { serviceAreas } from "@/lib/areas";
import { storyImage } from "@/lib/images";
import Marquee from "@/components/Marquee";
import StatsBand from "@/components/StatsBand";

export const metadata: Metadata = {
  title: `Accountant & Fractional CFO in Northwest Arkansas | ${site.name}`,
  description:
    "Bookkeeping, accounting & advisory, and fractional CFO/controller services for growing businesses in Northwest Arkansas — virtual nationwide. Free consultation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `Accountant & Fractional CFO in Northwest Arkansas | ${site.name}`,
    description:
      "Bookkeeping, advisory, and fractional CFO/controller support for growing businesses — local to NWA, available virtually nationwide.",
    url: "/",
  },
};

const homeFaqs = [
  {
    question: "Do you work with businesses outside Northwest Arkansas?",
    answer:
      "Yes. While we're proudly based in Lowell and serve all of NWA in person, everything we do runs in the cloud — so we work with businesses across the United States virtually, with the same monthly rhythm and responsiveness.",
  },
  {
    question: "What's the difference between bookkeeping, a controller, and a fractional CFO?",
    answer:
      "Bookkeeping records what happened — transactions categorized and accounts reconciled. A controller makes sure it's right — reviewing the books, managing the close, and enforcing process. A fractional CFO decides what should happen next — forecasting, cash strategy, and financial leadership. We offer all three, separately or together.",
  },
  {
    question: "Do you offer one-time cleanup or catch-up bookkeeping?",
    answer:
      "Yes — cleanup and catch-up is one of our most popular services. Whether you're a few months or a few years behind, we'll bring your books fully current for a one-time flat fee, with no obligation to continue monthly service afterward.",
  },
  {
    question: "What software do you work in?",
    answer:
      "Primarily QuickBooks Online, where we can set up, clean up, migrate, and train. We also work with other cloud accounting platforms — if you're on something else, just ask.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Every engagement starts with a free discovery call. We scope exactly what you need, then quote a flat monthly rate (or a one-time project fee for cleanups) — so you always know the cost before we start. No hourly billing, no surprise invoices.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      {/* 1 — Dark hero */}
      <section className="on-dark relative overflow-hidden bg-navy-900 pb-24 pt-40">
        <HeroBackdrop />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p
            className="mx-auto mb-7 inline-block rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-300"
            data-aos
          >
            Licensed CPA · Lowell, AR
          </p>
          <h1
            className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            data-aos
            data-aos-delay="100"
          >
            Accounting &amp; Fractional CFO Services in{" "}
            <span className="accent-underline">Northwest Arkansas</span>
          </h1>
          <p
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/75"
            data-aos
            data-aos-delay="200"
          >
            {site.tagline}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4" data-aos data-aos-delay="300">
            <Link href="/contact" className="btn-primary">
              Free Consultation
            </Link>
            <a href={site.phoneHref} className="btn-outline-light">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Scrolling services strip */}
      <Marquee />

      {/* 2 — What We Do */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center" data-aos>
            <p className="eyebrow">What We Do</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Your entire financial back office, <span className="accent-italic">handled</span>
            </h2>
            <p className="mt-4 text-navy-900/70">
              From clean monthly books to executive-level financial leadership —
              three service lines that grow with your business.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {serviceCategories.map((cat, i) => (
              <article
                key={cat.slug}
                className="card-lift group flex flex-col overflow-hidden rounded-lg border border-navy-900/10 bg-white shadow-sm hover:border-gold-500/50 hover:shadow-xl"
                data-aos
                data-aos-delay={String(i * 120)}
              >
                <Link href={`/services/${cat.slug}`} aria-label={cat.name}>
                  <span className="img-zoom block">
                    <img
                      src={cat.image}
                      alt={cat.imageAlt}
                      loading="lazy"
                      width="800"
                      height="520"
                      className="aspect-[8/5] w-full object-cover"
                    />
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-semibold text-navy-900">
                    <Link href={`/services/${cat.slug}`} className="transition-colors hover:text-gold-600">
                      {cat.shortName}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-900/70">
                    {cat.cardDescription}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {cat.subServices.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={
                            sub.slug
                              ? `/services/${cat.slug}/${sub.slug}`
                              : `/services/${cat.slug}`
                          }
                          className="group flex items-center gap-2 text-sm font-medium text-navy-900/80 transition-colors hover:text-teal-600"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${cat.slug}`}
                    className="arrow-link mt-auto pt-6 text-sm font-bold uppercase tracking-wider text-gold-600 transition-colors hover:text-gold-500"
                  >
                    Explore <span className="arrow">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Mid-page CTA strip */}
      <section className="on-dark bg-navy-900">
        <div
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-14 text-center sm:px-6 lg:flex-row lg:text-left lg:px-8"
          data-aos
        >
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Not sure which service you need?
            </h2>
            <p className="mt-2 text-white/70">
              Start with a free consultation — we&apos;ll point you in the right direction, no strings attached.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Free Consultation
            </Link>
            <a href={site.phoneHref} className="btn-outline-light">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 4 — Our Story */}
      <section className="bg-cream-50 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative" data-aos="fade-right">
            <span className="img-zoom block rounded-lg">
            <img
              src={storyImage.src}
              alt={storyImage.alt}
              loading="lazy"
              width={storyImage.width}
              height={storyImage.height}
              className={`aspect-[7/8] w-full rounded-lg object-cover shadow-2xl ${storyImage.objectPosition}`}
            />
            </span>
            {/* Floating stat badge — 20+ years, name underneath (per client edits) */}
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
          <div data-aos="fade-left" data-aos-delay="150">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Numbers with a <span className="accent-italic">personal</span> touch
            </h2>
            <p className="mt-6 leading-relaxed text-navy-900/75">
              TSB Accounting Solutions was founded by Victoria Harris-Pelletier —
              a licensed CPA with more than 20 years of accounting experience —
              on a simple standard: treat every client&apos;s finances like they&apos;re
              your own. Based in Lowell, Arkansas, we&apos;ve grown alongside the
              small businesses of Northwest Arkansas — handling their books,
              planning their taxes, and sitting beside them for the big decisions.
            </p>
            <p className="mt-4 leading-relaxed text-navy-900/75">
              We&apos;re not a faceless firm or a software subscription. When you
              call, a real person who knows your business answers. That&apos;s how
              accounting should work — accurate, clear, and personal.
            </p>
            <Link
              href="/about"
              className="arrow-link mt-7 inline-block text-sm font-bold uppercase tracking-wider text-gold-600 transition-colors hover:text-gold-500"
            >
              Our Full Story <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Animated count-up stats */}
      <StatsBand />

      {/* 5 — How We Work */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center" data-aos>
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              A simple, <span className="accent-italic">proven</span> process
            </h2>
          </div>
          <div className="mt-16">
            <ProcessSteps
              steps={[
                {
                  title: "Discovery Call",
                  description:
                    "A free, no-pressure conversation about your business, your books, and what's not working today.",
                },
                {
                  title: "Custom Scope & Quote",
                  description:
                    "A defined engagement at a flat, predictable price — you know exactly what you're getting and what it costs.",
                },
                {
                  title: "We Get to Work",
                  description:
                    "Cleanup, setup, and onboarding handled by us. Most clients are fully up and running within weeks.",
                },
                {
                  title: "Ongoing Support & Reporting",
                  description:
                    "Books closed, reports delivered, questions answered — month after month, like clockwork.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 6 — Where We Work */}
      <section className="on-dark bg-navy-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center" data-aos>
            <p className="eyebrow">Where We Work</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Rooted in <span className="accent-italic">Lowell</span>, serving NWA &amp; beyond
            </h2>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <Link
              href="/areas/lowell-ar"
              className="card-lift group relative overflow-hidden rounded-lg border border-gold-500/30 bg-navy-800 p-10 hover:border-gold-500/60"
              data-aos="fade-right"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
                Headquarters
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold text-white group-hover:text-gold-300">
                Lowell, AR
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                Our home base at {fullAddress} — serving neighbors across
                Benton and Washington County with local, face-to-face service.
              </p>
              <span className="mt-6 inline-block text-sm font-bold uppercase tracking-wider text-gold-400">
                Visit Page →
              </span>
            </Link>
            <div className="grid gap-4" data-aos="fade-left" data-aos-delay="150">
              {serviceAreas
                .filter((a) => !a.isPrimary)
                .map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-7 py-5 transition-colors hover:border-gold-500/50 hover:bg-white/10"
                  >
                    <span className="font-display text-lg font-semibold text-white">
                      {area.displayName}
                    </span>
                    <span className="text-gold-400" aria-hidden="true">→</span>
                  </Link>
                ))}
              <div className="rounded-lg border border-dashed border-white/20 px-7 py-5 text-sm text-white/60">
                Anywhere in the U.S. — fully virtual engagements nationwide
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — Full-width CTA band */}
      <CtaBand />

      {/* 9 — FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Frequently asked <span className="accent-italic">questions</span>
            </h2>
          </div>
          <div className="mt-12" data-aos>
            <Faq items={homeFaqs} />
          </div>
        </div>
      </section>

      {/* 10 — Find Us */}
      <section className="bg-cream-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center" data-aos>
            <p className="eyebrow">Find Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Visit us in <span className="accent-italic">Lowell</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div className="space-y-8" data-aos>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy-900">Call Us</h3>
                <a
                  href={site.phoneHref}
                  className="mt-1 block font-display text-2xl font-bold text-gold-600 hover:text-gold-500"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy-900">Address</h3>
                <p className="mt-1 text-navy-900/75">{fullAddress}</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy-900">Business Hours</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-navy-900/75">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-8 border-b border-navy-900/10 pb-1.5">
                      <span>{h.days}</span>
                      <span className="font-medium">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div data-aos data-aos-delay="150">
              <MapEmbed className="h-full min-h-96" />
            </div>
          </div>
        </div>
      </section>

      {/* 11 — Final Get Started CTA with trust chips */}
      <section className="on-dark relative overflow-hidden bg-navy-900 py-24">
        <HeroBackdrop />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8" data-aos>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s get your numbers <span className="accent-italic">working</span> for you
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            One free call is all it takes to find out where you stand and what it
            would cost to fix. No pressure, no jargon — just answers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get Started Today
            </Link>
            <a href={site.phoneHref} className="btn-outline-light">
              Call {site.phone}
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
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
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Free Consultation",
  description:
    "Contact TSB Accounting Solutions in Lowell, AR. Call (479) 633-1206 or send a message for a free consultation on bookkeeping, accounting & fractional CFO services.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact Us | ${site.name}`,
    description:
      "Call, email, or send a message — free consultations for NWA businesses and virtual clients nationwide.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <PageHero
        crumbs={[{ name: "Contact", href: "/contact" }]}
        titlePre="Let's"
        keyword="Talk"
        subtitle="Free consultations, straight answers, and a real person on the other end. Reach out however you prefer."
        showCtas={false}
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          {/* Contact details */}
          <div className="space-y-8" data-aos>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900">
                Get in <span className="accent-italic">touch</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-900/70">
                Whether you&apos;re months behind on the books or planning your
                next stage of growth, the first conversation is free — and
                genuinely useful.
              </p>
            </div>
            <ul className="space-y-6">
              <li>
                <span className="block text-xs font-bold uppercase tracking-wider text-gold-600">Phone</span>
                <a
                  href={site.phoneHref}
                  className="mt-1 block font-display text-2xl font-bold text-navy-900 transition-colors hover:text-gold-600"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="block text-xs font-bold uppercase tracking-wider text-gold-600">Email</span>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block break-all font-medium text-navy-900 transition-colors hover:text-gold-600"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <span className="block text-xs font-bold uppercase tracking-wider text-gold-600">Office</span>
                <p className="mt-1 text-navy-900/80">{fullAddress}</p>
              </li>
              <li>
                <span className="block text-xs font-bold uppercase tracking-wider text-gold-600">Hours</span>
                <ul className="mt-2 max-w-xs space-y-1.5 text-sm text-navy-900/75">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-8 border-b border-navy-900/10 pb-1.5">
                      <span>{h.days}</span>
                      <span className="font-medium">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div
            className="rounded-lg border border-navy-900/10 bg-cream-50 p-8 shadow-sm sm:p-10"
            data-aos
            data-aos-delay="150"
          >
            <h2 className="font-display text-2xl font-bold text-navy-900">Send a message</h2>
            <p className="mb-7 mt-2 text-sm text-navy-900/70">
              We reply within one business day.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-aos>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="eyebrow">Find Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Our office in <span className="accent-italic">Lowell</span>
            </h2>
          </div>
          <MapEmbed className="h-[28rem]" />
        </div>
      </section>
    </>
  );
}

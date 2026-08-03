import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use & Disclaimer",
  description:
    "Terms of use and professional disclaimer for the TSB Accounting Solutions website — informational content, no client relationship without an engagement letter.",
  alternates: { canonical: "/terms" },
  openGraph: { title: `Terms of Use | ${site.name}`, url: "/terms" },
};

/*
 * TEMPLATE LEGAL COPY — have the client (and ideally their attorney) review
 * before launch. Update the effective date when finalized.
 */
export default function TermsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Terms of Use", href: "/terms" }]}
        titlePre="Terms of Use &"
        keyword="Disclaimer"
        subtitle="The ground rules for using this website."
        showCtas={false}
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-4 text-navy-900/80 sm:px-6 lg:px-8" data-aos>
          <p className="text-sm text-navy-900/60">Effective date: [DATE — set at launch]</p>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">Acceptance of terms</h2>
            <p className="mt-3 leading-relaxed">
              By accessing this website, operated by {site.legalName} ({fullAddress}), you agree to
              these Terms of Use. If you do not agree, please do not use the site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              Informational purposes only — no professional advice
            </h2>
            <p className="mt-3 leading-relaxed">
              Content on this website is provided for general informational purposes and does not
              constitute accounting, tax, legal, or investment advice. Every business&apos;s
              situation is different; nothing here should be acted on without advice specific to
              your circumstances.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">No client relationship</h2>
            <p className="mt-3 leading-relaxed">
              Viewing this website, submitting the contact form, or communicating with us does not
              create a client relationship. A client relationship is established only by a signed
              engagement letter describing the scope of services.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">Intellectual property</h2>
            <p className="mt-3 leading-relaxed">
              All content on this site — text, graphics, logos, and layout — is the property of{" "}
              {site.legalName} or its licensors and may not be reproduced without permission.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">Third-party links</h2>
            <p className="mt-3 leading-relaxed">
              Links to third-party sites and embedded services (such as Google Maps) are provided
              for convenience. We are not responsible for the content or practices of external
              sites.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">Limitation of liability</h2>
            <p className="mt-3 leading-relaxed">
              This website is provided &quot;as is,&quot; without warranties of any kind. To the
              fullest extent permitted by law, {site.legalName} is not liable for any damages
              arising from your use of, or reliance on, this website or its content.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">Governing law &amp; contact</h2>
            <p className="mt-3 leading-relaxed">
              These terms are governed by the laws of the State of Arkansas. Questions may be
              directed to {site.legalName}, {fullAddress}, {site.phone}, {site.email}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

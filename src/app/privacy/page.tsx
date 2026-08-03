import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How TSB Accounting Solutions, LLC collects, uses, and protects your information — including contact form data, analytics, and client financial records.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: `Privacy Policy | ${site.name}`, url: "/privacy" },
};

/*
 * TEMPLATE LEGAL COPY — have the client (and ideally their attorney) review
 * before launch. Update the effective date when finalized.
 */
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Privacy Policy", href: "/privacy" }]}
        titlePre="Our"
        keyword="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
        showCtas={false}
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-4 text-navy-900/80 sm:px-6 lg:px-8" data-aos>
          <p className="text-sm text-navy-900/60">Effective date: [DATE — set at launch]</p>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">Who we are</h2>
            <p className="mt-3 leading-relaxed">
              {site.legalName} (&quot;TSB,&quot; &quot;we,&quot; &quot;us&quot;) is an accounting and
              financial advisory firm located at {fullAddress}. This policy describes how we handle
              information collected through this website, {site.url.replace("https://", "")}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">Information we collect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
              <li>
                <strong>Information you provide:</strong> name, phone number, email address, and
                message contents submitted through our contact form or by calling/emailing us.
              </li>
              <li>
                <strong>Usage information:</strong> standard analytics data (pages visited, device
                type, approximate location) collected via Google Analytics or similar tools, using
                cookies or comparable technologies.
              </li>
              <li>
                <strong>Client records:</strong> financial information shared during an engagement is
                governed by our engagement letter and professional confidentiality obligations, not
                just this website policy.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">How we use information</h2>
            <p className="mt-3 leading-relaxed">
              We use information to respond to inquiries, provide and improve our services, operate
              and secure this website, and comply with legal obligations. We do not sell your
              personal information, and we do not share it with third parties for their own
              marketing.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">Third-party services</h2>
            <p className="mt-3 leading-relaxed">
              This site may embed services from third parties — such as Google Maps and Google
              Analytics — which may set their own cookies and collect data under their own privacy
              policies. Links to external sites (including our Google Business Profile and Facebook
              page) are governed by those platforms&apos; policies.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">Data security &amp; retention</h2>
            <p className="mt-3 leading-relaxed">
              We take reasonable administrative and technical measures to protect the information we
              hold, and we retain it only as long as needed for the purposes above or as required by
              law and professional standards.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">Your choices</h2>
            <p className="mt-3 leading-relaxed">
              You may request access to, correction of, or deletion of the personal information we
              hold about you by contacting us at{" "}
              <a href={`mailto:${site.email}`} className="text-teal-600 underline">
                {site.email}
              </a>{" "}
              or {site.phone}. You can also control cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">Changes &amp; contact</h2>
            <p className="mt-3 leading-relaxed">
              We may update this policy from time to time; the current version will always be posted
              on this page. Questions? Contact {site.legalName}, {fullAddress}, {site.phone},{" "}
              {site.email}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

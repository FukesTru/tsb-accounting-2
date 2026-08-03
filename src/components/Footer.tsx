import Link from "next/link";
import Logo from "./Logo";
import { site, fullAddress } from "@/lib/site";
import { serviceCategories } from "@/lib/services";
import { serviceAreas } from "@/lib/areas";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed">
              Bookkeeping, accounting &amp; advisory, and fractional CFO/controller
              services for growing businesses — local to Northwest Arkansas,
              available virtually nationwide.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {site.trustChips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-gold-500/40 px-3 py-1 text-xs font-medium text-gold-400"
                >
                  {chip}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TSB Accounting Solutions on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a
                href={site.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TSB Accounting Solutions on Google"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M12 2C7.6 2 4 5.6 4 10c0 5.4 7 11.5 7.3 11.8.4.3 1 .3 1.4 0C13 21.5 20 15.4 20 10c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Footer services">
            <h3 className="mb-4 font-display text-base font-semibold text-white">Services</h3>
            <ul className="space-y-2.5 text-sm">
              {serviceCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/services/${cat.slug}`} className="transition-colors hover:text-gold-400">
                    {cat.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/bookkeeping/monthly-bookkeeping" className="transition-colors hover:text-gold-400">
                  Monthly Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/services/bookkeeping/cleanup-catch-up" className="transition-colors hover:text-gold-400">
                  Cleanup &amp; Catch-Up
                </Link>
              </li>
              <li>
                <Link href="/services/accounting-advisory/tax-planning" className="transition-colors hover:text-gold-400">
                  Tax Planning &amp; Strategy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Service Areas */}
          <nav aria-label="Footer service areas">
            <h3 className="mb-4 font-display text-base font-semibold text-white">Service Areas</h3>
            <ul className="space-y-2.5 text-sm">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="transition-colors hover:text-gold-400">
                    {area.displayName}
                  </Link>
                </li>
              ))}
              <li className="text-white/50">+ Virtual clients nationwide</li>
            </ul>
          </nav>

          {/* Contact — consistent NAP for local SEO */}
          <div>
            <h3 className="mb-4 font-display text-base font-semibold text-white">Contact</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="font-medium text-white">{site.legalName}</li>
              <li>{fullAddress}</li>
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-gold-400">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-gold-400">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 font-display text-base font-semibold text-white">Hours</h3>
            <ul className="space-y-2.5 text-sm">
              {site.hours.map((h) => (
                <li key={h.days}>
                  <span className="block text-white/90">{h.days}</span>
                  <span className="text-white/60">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-gold-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gold-400">
              Terms of Use
            </Link>
            <Link href="/sitemap" className="transition-colors hover:text-gold-400">
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { serviceCategories } from "@/lib/services";
import { serviceAreas } from "@/lib/areas";

/**
 * Sticky nav: transparent over the dark hero, solid navy on scroll.
 * Desktop: Services mega-menu, About, Service Areas dropdown, Contact,
 * phone + "Free Consultation" CTA. Mobile: slide-down panel.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-navy-950/95 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo variant="light" />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {/* Services mega-menu */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white transition-colors hover:text-gold-300"
              aria-expanded={openMenu === "services"}
              onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
            >
              Services <Chevron open={openMenu === "services"} />
            </button>
            {openMenu === "services" && (
              <div className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-2">
                <div className="grid grid-cols-3 gap-6 rounded-lg border border-white/10 bg-navy-900 p-6 shadow-2xl shadow-black/40">
                  {serviceCategories.map((cat) => (
                    <div key={cat.slug}>
                      <Link
                        href={`/services/${cat.slug}`}
                        className="mb-3 block border-b border-gold-500/40 pb-2 font-display text-base font-semibold text-gold-400 hover:text-gold-300"
                      >
                        {cat.shortName}
                      </Link>
                      <ul className="space-y-2">
                        {cat.subServices.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={
                                sub.slug
                                  ? `/services/${cat.slug}/${sub.slug}`
                                  : `/services/${cat.slug}`
                              }
                              className="block text-sm text-white/75 transition-colors hover:text-gold-300"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="px-4 py-2 text-sm font-medium text-white transition-colors hover:text-gold-300"
          >
            About
          </Link>

          {/* Service Areas dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("areas")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white transition-colors hover:text-gold-300"
              aria-expanded={openMenu === "areas"}
              onClick={() => setOpenMenu(openMenu === "areas" ? null : "areas")}
            >
              Service Areas <Chevron open={openMenu === "areas"} />
            </button>
            {openMenu === "areas" && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2">
                <ul className="rounded-lg border border-white/10 bg-navy-900 p-3 shadow-2xl shadow-black/40">
                  {serviceAreas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas/${area.slug}`}
                        className="block rounded px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-gold-300"
                      >
                        {area.displayName}
                        {area.isPrimary && (
                          <span className="ml-2 text-xs text-gold-500">HQ</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium text-white transition-colors hover:text-gold-300"
          >
            Contact
          </Link>
        </nav>

        {/* Phone + CTA (desktop) */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-white transition-colors hover:text-gold-300"
          >
            {site.phone}
          </a>
          <Link href="/contact" className="btn-primary !px-5 !py-2.5">
            Free Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-navy-950/98 px-4 pb-8 pt-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <MobileSection
            label="Services"
            open={openMenu === "m-services"}
            onToggle={() =>
              setOpenMenu(openMenu === "m-services" ? null : "m-services")
            }
          >
            {serviceCategories.map((cat) => (
              <div key={cat.slug} className="mb-4">
                <Link
                  href={`/services/${cat.slug}`}
                  className="block py-1.5 text-sm font-semibold text-gold-400"
                >
                  {cat.shortName}
                </Link>
                {cat.subServices
                  .filter((s) => s.slug)
                  .map((sub) => (
                    <Link
                      key={sub.name}
                      href={`/services/${cat.slug}/${sub.slug}`}
                      className="block py-1.5 pl-4 text-sm text-white/70"
                    >
                      {sub.name}
                    </Link>
                  ))}
              </div>
            ))}
          </MobileSection>

          <Link href="/about" className="block border-b border-white/10 py-3.5 font-medium text-white">
            About
          </Link>

          <MobileSection
            label="Service Areas"
            open={openMenu === "m-areas"}
            onToggle={() => setOpenMenu(openMenu === "m-areas" ? null : "m-areas")}
          >
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="block py-1.5 text-sm text-white/70"
              >
                {area.displayName}
              </Link>
            ))}
          </MobileSection>

          <Link href="/contact" className="block border-b border-white/10 py-3.5 font-medium text-white">
            Contact
          </Link>

          <div className="mt-6 flex flex-col gap-3">
            <a href={site.phoneHref} className="btn-outline-light">
              Call {site.phone}
            </a>
            <Link href="/contact" className="btn-primary">
              Free Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MobileSection({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        className="flex w-full items-center justify-between py-3.5 font-medium text-white"
        onClick={onToggle}
        aria-expanded={open}
      >
        {label} <Chevron open={open} />
      </button>
      {open && <div className="pb-4 pl-2">{children}</div>}
    </div>
  );
}

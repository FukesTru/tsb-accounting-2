"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Lightweight AOS-style scroll animations: observes every [data-aos]
 * element and adds .aos-in when it enters the viewport (see globals.css).
 * Re-scans on every route change so client-side navigations animate too.
 * Optional per-element stagger via data-aos-delay="150" (ms).
 */
export default function AosInit() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-aos]:not(.aos-in)")
    );
    if (elements.length === 0) return;

    const reveal = (el: HTMLElement) => {
      const delay = el.dataset.aosDelay;
      if (delay) el.style.setProperty("--aos-delay", `${delay}ms`);
      el.classList.add("aos-in");
    };

    if (!("IntersectionObserver" in window)) {
      elements.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

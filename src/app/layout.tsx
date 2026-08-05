import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import AosInit from "@/components/AosInit";
import { site } from "@/lib/site";

/**
 * Fonts are self-hosted by next/font (no render-blocking request to
 * fonts.googleapis.com, and font-display: swap is applied automatically).
 * Same typefaces as before — Playfair Display for headings, Inter for body.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-display-family",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-family",
});

/**
 * GA4: set NEXT_PUBLIC_GA_ID to the client's real Measurement ID
 * (e.g. G-ABC123XYZ) to enable analytics. Left unset, no tag loads —
 * which avoids shipping ~142 KiB of gtag.js for a placeholder ID.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Accountant & Fractional CFO in Northwest Arkansas | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <AosInit />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCall />

        {/* LeadConnector chat widget — site-wide, loaded off the critical path */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a68f6fd702ca026d57bd00b"
          strategy="lazyOnload"
        />

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

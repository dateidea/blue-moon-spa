import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], display: "swap", axes: ["SOFT", "WONK", "opsz"], variable: "--font-fraunces" });
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://puremassagesd.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Pure Massage — An Honest Hour on El Cajon Boulevard, San Diego", template: "%s · Pure Massage" },
  description: "Pure Massage at 6979 El Cajon Blvd, San Diego. Full body, foot, shiatsu, and couples massage. Sixty minutes for fifty dollars. Open every day, 9 AM to 11 PM. New clients get $10 off the first session. Walk-ins welcome. Call (858) 381-5959.",
  keywords: ["Pure Massage","massage San Diego","El Cajon Blvd massage","foot massage San Diego","shiatsu San Diego","couples massage San Diego","Asian-owned massage","College Area massage","walk-in massage San Diego"],
  openGraph: { title: "Pure Massage — An Honest Hour on El Cajon Boulevard, San Diego", description: "Full body, foot, shiatsu, couples — sixty minutes for fifty dollars. Open every day, 9 AM to 11 PM at 6979 El Cajon Blvd, San Diego. New clients get $10 off.", url: SITE_URL, siteName: "Pure Massage", locale: "en_US", type: "website", images: [{ url: "/images/og-01.jpg", width: 1200, height: 630, alt: "Pure Massage — quiet treatment room on El Cajon Boulevard, San Diego" }] },
  twitter: { card: "summary_large_image", title: "Pure Massage — An Honest Hour on El Cajon Boulevard, San Diego", description: "Sixty minutes for fifty dollars. Open every day, 9 AM to 11 PM.", images: ["/images/og-01.jpg"] },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-cream text-ink antialiased">
        <a href="#booking" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-cream">Skip to booking</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "MassageTherapy", "@id": `${SITE_URL}/#business`,
          name: "Pure Massage", image: `${SITE_URL}/images/hero-01.jpg`, url: SITE_URL,
          telephone: "+18583815959", priceRange: "$$",
          address: { "@type": "PostalAddress", streetAddress: "6979 El Cajon Blvd", addressLocality: "San Diego", addressRegion: "CA", postalCode: "92115", addressCountry: "US" },
          geo: { "@type": "GeoCoordinates", latitude: 32.7685696, longitude: -117.0476186 },
          openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "09:00", closes: "23:00" }],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.2", reviewCount: "17" },
          paymentAccepted: "Cash, Card, Apple Pay", hasMap: "https://maps.app.goo.gl/5R3WdrN6BM31wU9x6",
        }) }} />
      </body>
    </html>
  );
}

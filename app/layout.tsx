import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], display: "swap", axes: ["SOFT", "WONK", "opsz"], variable: "--font-fraunces" });
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://navajo-spa.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Gold Spa — 6957 El Cajon Blvd, San Diego", template: "%s · Gold Spa" },
  description: "Gold Spa is a massage spa at 6957 El Cajon Blvd, San Diego, CA 92115. Open every day, 9 AM to 9 PM. Walk-ins welcome. Call (619) 337-0166 for current pricing and to book.",
  keywords: ["Gold Spa","massage San Diego","El Cajon Blvd massage","walk-in massage San Diego","College Area massage spa"],
  openGraph: {
    title: "Gold Spa — 6957 El Cajon Blvd, San Diego",
    description: "A massage spa at 6957 El Cajon Blvd, San Diego. Open every day, 9 AM to 9 PM. Call (619) 337-0166 to book.",
    url: SITE_URL, siteName: "Gold Spa", locale: "en_US", type: "website",
    images: [{ url: "/images/og-01.jpg", width: 1200, height: 630, alt: "Gold Spa — 6957 El Cajon Blvd, San Diego" }],
  },
  twitter: { card: "summary_large_image", title: "Gold Spa — 6957 El Cajon Blvd, San Diego", description: "Open every day, 9 AM to 9 PM. Call (619) 337-0166.", images: ["/images/og-01.jpg"] },
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
          name: "Gold Spa", image: `${SITE_URL}/images/hero-01.jpg`, url: SITE_URL,
          telephone: "+16193370166",
          address: { "@type": "PostalAddress", streetAddress: "6957 El Cajon Blvd", addressLocality: "San Diego", addressRegion: "CA", postalCode: "92115", addressCountry: "US" },
          geo: { "@type": "GeoCoordinates", latitude: 32.7683792, longitude: -117.0479536 },
          openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "09:00", closes: "21:00" }],
          paymentAccepted: "Cash, Credit Card", hasMap: "https://maps.app.goo.gl/JMd4asWRLgScwdAv7",
        }) }} />
      </body>
    </html>
  );
}

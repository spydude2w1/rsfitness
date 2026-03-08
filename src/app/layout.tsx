import type { Metadata, Viewport } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementStrip from "@/components/ui/AnnouncementStrip";
import FloatingOfferNotification from "@/components/ui/FloatingOfferNotification";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#080808",
};

export const metadata: Metadata = {
  title: "RS Fitness | Premium Gym in Hongasandra & Akshayanagar, Bangalore",
  description:
    "RS Fitness offers premium gym facilities with certified personal trainers in Hongasandra and Akshayanagar, Bangalore. Two branches, RS Cafe on-site, and flexible membership plans.",
  keywords: [
    "gym in Hongasandra",
    "gym in Akshayanagar",
    "Premium gym in akshayanagar",
    "Premium gym in hongasandra",
    "fitness center Bangalore",
    "personal trainer Bangalore south",
    "RS Fitness Bangalore",
    "gym with cafe Bangalore",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "RS Fitness | Train Hard. Live Strong.",
    description: "Two gym branches in South Bangalore with certified trainers and RS Cafe.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://rsfitness.in" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: "RS Fitness - Hongasandra",
    address: { "@type": "PostalAddress", streetAddress: "Opposite to CNT Liquor, Hongasandra", addressLocality: "Bangalore", addressRegion: "Karnataka", addressCountry: "IN" },
    telephone: "+917349089859",
    openingHours: "Mo-Sa 05:00-22:00, Su 06:00-20:00",
  },
  {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: "RS Fitness - Akshayanagar",
    address: { "@type": "PostalAddress", streetAddress: "Akshayanagar", addressLocality: "Bangalore", addressRegion: "Karnataka", addressCountry: "IN" },
    telephone: "+917349089859",
    openingHours: "Mo-Sa 05:00-22:00, Su 06:00-20:00",
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <head>
        {jsonLd.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </head>
      <body
        className="bg-[#080808] text-[#F5F5F5] antialiased w-full"
        style={{ fontFamily: "var(--font-dm-sans), sans-serif", overflowX: "hidden" }}
      >
        <AnnouncementStrip />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingOfferNotification />
      </body>
    </html>
  );
}


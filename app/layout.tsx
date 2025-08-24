import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sell Old Phone Online - Best Mobile Buyback Platform India | Instant Cash for Used Phones",
  description:
    "Sell old phone online for instant cash in India. Best mobile buyback platform with maximum value for used iPhone, Samsung, Google phones. Trade in old mobile for cash with free pickup & guaranteed payments. Sell used mobile online today!",
  keywords: [
    "sell old phone online",
    "sell used mobile for cash",
    "mobile buyback",
    "sell phone online India",
    "instant cash for old phone",
    "best site to sell used mobile",
    "trade in old mobile",
    "phone buyback online",
    "sell used iPhone",
    "sell used Samsung",
    "mobile resale value",
    "old phone buyers",
    "used phone buyers",
    "sell mobile online",
    "cash for old phones",
    "mobile buyback India",
    "sell old smartphone",
    "second hand phone buyers",
  ],
  authors: [{ name: "Sell Old Phone" }],
  creator: "Sell Old Phone",
  publisher: "Sell Old Phone",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://selloldphone.com",
    siteName: "Sell Old Phone",
    title: "Sell Old Phone Online - Best Mobile Buyback Platform India",
    description:
      "Sell old phone online for instant cash. Best mobile buyback platform in India with maximum value for used phones.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sell Old Phone Online - Mobile Buyback Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Old Phone Online - Instant Cash for Used Phones",
    description: "Best mobile buyback platform in India. Sell used mobile for cash with instant quotes.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://selloldphone.com",
  },
  other: {
    "google-site-verification": "your-google-verification-code",
  },
  generator: "v0.app",
  
  // Updated favicon configuration
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Manual favicon fallback - remove if icons metadata works */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sell Old Phone",
              description: "Best mobile buyback platform in India for selling old phones online",
              url: "https://selloldphone.com",
              logo: "https://selloldphone.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91",
                email: "itsselloldphone@gmail.com",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://facebook.com/selloldphone",
                "https://twitter.com/selloldphone",
                "https://instagram.com/selloldphone",
              ],
              service: {
                "@type": "Service",
                name: "Mobile Buyback Service",
                description: "Sell old phone online for instant cash with free pickup",
                provider: {
                  "@type": "Organization",
                  name: "Sell Old Phone",
                },
                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
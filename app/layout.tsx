import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { SiteAnalytics } from "@/components/site-analytics"

export const metadata: Metadata = {
  // Add this line to fix the warnings
  metadataBase: new URL('https://www.contreat.in'),
  
  title: "Sell Old Phone Online | Contreat.in - Instant Cash & Buyback India",
  description:
    "Sell old phone online on Contreat.in for instant cash in India. Best mobile buyback platform with maximum value for used iPhone, Samsung, Google phones. Trade in old mobile for cash with free pickup & guaranteed payments.",
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
  authors: [{ name: "Contreat" }],
  creator: "Contreat",
  publisher: "Contreat",
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
    url: "https://contreat.in",
    siteName: "Contreat",
    title: "Sell Old Phone Online - Best Mobile Buyback Platform India | Contreat",
    description:
      "Sell old phone online for instant cash. Best mobile buyback platform in India with maximum value for used phones.",
    images: [
      {
        url: "/og-image.jpg", // Now resolves to https://contreat.in/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Sell Old Phone Online - Mobile Buyback Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Old Phone Online - Instant Cash for Used Phones | Contreat",
    description: "Best mobile buyback platform in India. Sell used mobile for cash with instant quotes.",
    images: ["/twitter-image.jpg"], // Now resolves to https://contreat.in/twitter-image.jpg
  },
  alternates: {
    canonical: "https://www.contreat.in",
  },
  // Google Search Console: set NEXT_PUBLIC_GSC_VERIFICATION in Vercel to the code from the HTML-tag method.
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
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
              name: "Contreat",
              description: "Best mobile buyback platform in India for selling old phones online",
              url: "https://contreat.in",
              logo: "https://contreat.in/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91",
                email: "itsselloldphone@gmail.com",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://facebook.com/contreat",
                "https://twitter.com/contreat",
                "https://instagram.com/contreat",
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
        
        {/* AdSense script - replace with your actual ad client ID */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          id="adsense-script"
        />
      </head>
      <body>
        {children}
        <Toaster />
        <SiteAnalytics />
      </body>
    </html>
  )
}
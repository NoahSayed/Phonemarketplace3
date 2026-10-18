import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { SiteAnalytics } from "@/components/site-analytics"

export const viewport: Viewport = {
  themeColor: "#15803d",
}

export const metadata: Metadata = {
  // Add this line to fix the warnings
  metadataBase: new URL('https://www.contreat.in'),
  
  title: {
    default: "Sell Old Phone Online for Instant Cash | Contreat.in",
    template: "%s | Contreat.in",
  },
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
    url: "/",
    siteName: "Contreat",
    title: "Sell Old Phone Online - Best Mobile Buyback Platform India | Contreat",
    description:
      "Sell old phone online for instant cash. Best mobile buyback platform in India with maximum value for used phones.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Old Phone Online - Instant Cash for Used Phones | Contreat",
    description: "Best mobile buyback platform in India. Sell used mobile for cash with instant quotes.",
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
              url: "https://www.contreat.in",
              logo: "https://www.contreat.in/android-chrome-512x512.png",
              email: "itsselloldphone@gmail.com",
              contactPoint: {
                "@type": "ContactPoint",
                email: "itsselloldphone@gmail.com",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              makesOffer: {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Mobile Buyback Service",
                  description: "Sell old phone online for instant cash with free pickup",
                  areaServed: { "@type": "Country", name: "India" },
                },
              },
            }),
          }}
        />
        <meta name="google-adsense-account" content="ca-pub-9902910443810636" />
      </head>
      <body>
        <main>{children}</main>
        <Toaster />
        <SiteAnalytics />
      </body>
    </html>
  )
}
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata = {
  title: "Page not found",
  robots: { index: false },
}

const links = [
  { href: "/brand/apple", label: "Sell iPhone" },
  { href: "/brand/samsung", label: "Sell Samsung Galaxy" },
  { href: "/brand/google", label: "Sell Google Pixel" },
  { href: "/brand/all-other-phones", label: "Sell any other phone" },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="max-w-3xl mx-auto px-4 py-24 text-center">
        <p className="text-sm font-semibold text-green-700">404</p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">We couldn&apos;t find that page</h1>
        <p className="mt-4 text-lg text-gray-600">
          The page may have moved. Pick your phone brand below to get an instant quote.
        </p>
        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block rounded-xl border border-gray-200 px-6 py-4 font-semibold text-gray-900 hover:border-green-700 hover:text-green-700 transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="inline-block mt-10 font-medium text-green-700 hover:text-green-800">
          ← Back to home
        </Link>
      </section>
      <Footer />
    </div>
  )
}

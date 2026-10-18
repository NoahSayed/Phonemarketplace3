import Link from "next/link"
import { phoneData, type PhoneModel } from "@/lib/phone-data"

// Internal links to nearby models of the same brand, so every phone page is
// reachable from other phone pages (helps search engines find and rank them).
export function RelatedPhones({ phone }: { phone: PhoneModel }) {
  const sameBrand = phoneData.filter((p) => p.brand === phone.brand)
  const at = sameBrand.findIndex((p) => p.id === phone.id)
  const related = sameBrand
    .map((p, i) => ({ p, d: Math.abs(i - at) }))
    .filter(({ p }) => p.id !== phone.id)
    .sort((a, b) => a.d - b.d)
    .slice(0, 8)
    .map(({ p }) => p)
  if (related.length === 0) return null

  return (
    <section className="bg-white border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sell other {phone.brand} phones</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {related.map((p) => (
            <li key={p.id}>
              <Link
                href={`/phone/${p.id}`}
                className="block rounded-lg border border-gray-200 px-4 py-3 text-gray-800 hover:border-green-700 hover:text-green-700 transition-colors"
              >
                Sell used {p.name}
                <span className="block text-sm text-gray-600">Up to ₹{p.basePrice.toLocaleString("en-IN")}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={`/brand/${phone.brand.toLowerCase()}`}
          className="inline-block mt-6 font-medium text-green-700 hover:text-green-800"
        >
          See all {phone.brand} phones →
        </Link>
      </div>
    </section>
  )
}

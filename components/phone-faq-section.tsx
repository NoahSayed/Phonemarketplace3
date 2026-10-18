import type { PhoneModel } from "@/lib/phone-data"
import { phoneFaq } from "@/lib/phone-faq"

export function PhoneFaqSection({ phone }: { phone: PhoneModel }) {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Selling your {phone.name}: questions</h2>
        <dl className="space-y-4">
          {phoneFaq(phone).map((f) => (
            <div key={f.question} className="bg-white rounded-xl border border-gray-200 p-5">
              <dt className="font-semibold text-gray-900">{f.question}</dt>
              <dd className="mt-2 text-gray-700">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

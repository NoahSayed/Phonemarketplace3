import type { PhoneModel } from "@/lib/phone-data"
import { MISSING_BOX_PERCENT, MISSING_CHARGER_PERCENT, quotePrice } from "@/lib/price-formula"

// Per-model questions and answers, built from the model's own data and the real
// price formula. Shown on the phone page and sent as FAQPage structured data.
export function phoneFaq(phone: PhoneModel) {
  const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`
  const yearOld = quotePrice(phone.basePrice, { selected: ["age_11_plus"], hasBox: true, hasCharger: true })
  const yearOldNoBox = quotePrice(phone.basePrice, { selected: ["age_11_plus"], hasBox: false, hasCharger: false })
  const unlock = phone.brand === "Apple" ? "Face ID does not work, it drops by 18%" : "the fingerprint sensor does not work, it drops by 10%"
  const a = /^[aeiou]/i.test(phone.name) ? "an" : "a"

  return [
    {
      question: `How much can I get for my used ${phone.name}?`,
      answer:
        `Up to ${inr(phone.basePrice)} for ${a} ${phone.name} that is less than 3 months old, has its box and charger and has no damage. ` +
        `${a[0].toUpperCase() + a.slice(1)} ${phone.name} older than 11 months in good condition with box and charger gets about ${inr(yearOld)} ` +
        `(about ${inr(yearOldNoBox)} without box and charger). Use the price calculator above for your exact quote.`,
    },
    {
      question: `What lowers the price of ${a} ${phone.name}?`,
      answer:
        `Age lowers the price by up to 25%. A cracked screen glass lowers it by 45%, and lines, dots or no display by 50%. ` +
        `If ${unlock}. A missing box lowers it by ${MISSING_BOX_PERCENT}% and a missing charger by ${MISSING_CHARGER_PERCENT}%.`,
    },
    {
      question: `Which ${phone.name} variants do you buy?`,
      answer:
        `We buy every ${phone.name} storage variant (${phone.specs.storage.join(", ")}) ` +
        `with ${phone.specs.ram.join(" or ")} RAM, in any condition.`,
    },
    {
      question: `How do I sell my ${phone.name} to Contreat?`,
      answer:
        `Pick your storage and condition in the form above and send it. We call you to confirm the price, ` +
        `pick the phone up from your home for free and pay you at pickup.`,
    },
  ]
}

export function phoneFaqJsonLd(phone: PhoneModel) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: phoneFaq(phone).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }
}

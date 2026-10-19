import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "How to sell old phone online?",
    answer: "Selling your old phone to Contreat is quick and profitable. Visit our website, enter your phone details like brand and model, get an instant cash quote, and schedule free pickup from your home. We buy used phones directly from you and pay the highest prices in India for second hand mobiles."
  },
  {
    question: "Why should I sell my used phone to Contreat instead of other buyers?",
    answer: "Contreat pays 30-40% more than local phone dealers and offers transparent pricing with no hidden deductions. We are professional phone buyers who purchase thousands of used mobiles monthly. Unlike individual buyers or small dealers, we guarantee payment and provide instant cash without bargaining or delays."
  },
  {
    question: "Which phone brands does Contreat buy from customers?",
    answer: "We buy all smartphone brands including iPhone, Samsung Galaxy, OnePlus, Xiaomi, Realme, Oppo, Vivo, Motorola, Honor, Google Pixel, and Huawei phones. As leading mobile phone buyers in India, we purchase both Android and iOS devices regardless of age or condition. Sell your iPhone 15, Galaxy S24, OnePlus 12, or any smartphone model to us."
  },
  {
    question: "Do you buy broken or damaged phones for cash?",
    answer: "Yes, we buy broken phones, cracked screen devices, water damaged mobiles, and non-functional smartphones. As professional phone buyers, we understand that damaged phones still have value through parts and refurbishment. Even if your phone doesn't turn on, you can sell it to Contreat for cash."
  },
  {
    question: "How much cash can I get for my old phone?",
    answer: "Phone prices depend on brand, model, condition, and market demand. iPhones typically sell for ₹15,000-₹80,000, Samsung phones for ₹8,000-₹60,000, and other Android phones for ₹3,000-₹40,000. We are competitive phone buyers offering the best rates because we resell phones professionally across India."
  },
  {
    question: "Is Contreat a legitimate phone buying company?",
    answer: "Contreat is India's trusted phone buying company serving customers nationwide since years. We have purchased over 100,000 used phones and maintain high customer ratings. As registered phone buyers, we provide secure transactions, instant payments, and complete data protection when you sell your mobile to us."
  },
  {
    question: "How quickly do you pay cash when I sell my phone?",
    answer: "We pay instant cash during pickup within 15 minutes of device verification. As professional mobile buyers, we carry sufficient cash for immediate payment. You receive money in hand before we leave your location. No waiting for bank transfers or payment processing delays."
  },
  {
    question: "Can I sell multiple phones to Contreat at once?",
    answer: "Absolutely. We buy multiple phones from customers including old family devices, business phones, or bulk quantities. As wholesale phone buyers, we offer competitive rates for multiple device sales. Contact us for special pricing if you have 5 or more phones to sell."
  },
  {
    question: "Do you buy phones from all cities in India?",
    answer: "Our phone buying service covers Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur, and 50+ major cities across India. We are expanding mobile phone buyers with doorstep pickup available in most urban areas. Rural customers can ship phones to us with free courier service."
  },
  {
    question: "What makes Contreat different from other phone buyers?",
    answer: "Unlike local dealers who lowball prices, we are professional phone buyers with transparent pricing. We specialize in buying used phones for resale, so we can pay higher rates than dealers who only buy for parts. Our phone buying business model allows us to offer competitive prices while ensuring quick, secure transactions."
  },
  {
    question: "Do you buy old iPhones at good prices?",
    answer: "We are active iPhone buyers purchasing all models from iPhone 7 to iPhone 15 Pro Max. iPhone resale values are highest among all brands, and we pay premium rates for Apple devices. Sell your old iPhone to us for 60-80% of current market value depending on condition and storage capacity."
  },
  {
    question: "How do you determine the price for my used phone?",
    answer: "Our phone buying experts use real-time market data, refurbishment costs, and resale demand to price devices fairly. We consider factors like phone condition, battery health, screen quality, and current market trends. As volume phone buyers, we can afford to pay competitive rates because we resell phones efficiently."
  },
  {
    question: "Can I negotiate the price when selling my phone?",
    answer: "Our prices are already set at maximum rates based on current market conditions. As professional phone buyers, we eliminate bargaining by offering the best upfront price. However, if you find a higher genuine offer, we may match it for valuable devices because we want to be your preferred phone buyer."
  },
  {
    question: "What happens after I sell my phone to Contreat?",
    answer: "After buying your phone, we professionally refurbish working devices for resale as certified pre-owned phones. Non-repairable phones are sent to authorized recycling facilities. As responsible phone buyers, we ensure proper data wiping and environmental disposal of electronic components."
  },
  {
    question: "Do I need any documents to sell my phone to you?",
    answer: "Yes, we require valid photo ID (Aadhaar card, PAN card, or driving license) for all phone purchases as per legal requirements for second hand goods buyers. This protects both parties and ensures legitimate transactions. The document verification takes only 2 minutes during pickup."
  },
  {
    question: "Can I change my mind after booking phone pickup?",
    answer: "You can cancel phone pickup anytime before our buyer arrives at your location. Even during pickup, you can choose not to sell if you're unsatisfied with the final quote. As customer-focused phone buyers, we never pressure customers and respect your decision to keep your device."
  },
  {
    question: "Do you buy phones with outstanding EMI or loans?",
    answer: "We can buy phones with clear ownership but cannot purchase devices with active EMI or loan obligations. If your phone EMI is complete but still shows outstanding, provide clearance documents. As legitimate phone buyers, we only purchase legally clear devices to avoid complications."
  },
  {
    question: "How safe is it to sell my personal phone to Contreat?",
    answer: "Completely safe. We are certified phone buyers who perform military-grade data wiping on all purchased devices. Your personal information, photos, contacts, and apps are permanently deleted using professional software. We provide data deletion certificates to customers who request them for added security assurance."
  }
]

export default function FAQAccordion() {
  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item, index) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <details
            key={index}
            className="group bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer w-full px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-inset">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                <ChevronDown
                  className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180 group-open:text-green-700"
                  aria-hidden="true"
                />
              </div>
            </summary>
            <div className="px-6 pb-4">
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </>
  )
}

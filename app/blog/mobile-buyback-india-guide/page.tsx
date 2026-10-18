"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function MobileBuybackGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Mobile Buyback Guide India</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Everything you need to know about selling your old phone safely and getting the best price.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h2>Understanding Mobile Buyback Programs</h2>
          <p>
            Mobile buyback programs are services that purchase used smartphones from consumers. These programs offer a
            convenient way to sell your old phone while ensuring you get a fair price. Here's everything you need to
            know about the process.
          </p>

          <h2>Step-by-Step Guide to Selling Your Phone</h2>
          
          <h3>1. Prepare Your Phone for Sale</h3>
          <ul>
            <li>Back up all important data</li>
            <li>Sign out of all accounts (iCloud, Google, etc.)</li>
            <li>Factory reset your device</li>
            <li>Clean the phone thoroughly</li>
            <li>Gather all original accessories</li>
          </ul>

          <h3>2. Get an Accurate Valuation</h3>
          <p>Several factors determine your phone's value:</p>
          <ul>
            <li>Brand and model</li>
            <li>Age of the device</li>
            <li>Physical condition</li>
            <li>Storage capacity</li>
            <li>Availability of original accessories</li>
            <li>Warranty status</li>
          </ul>

          <h3>3. Choose the Right Buyback Service</h3>
          <p>Look for these features in a buyback service:</p>
          <ul>
            <li>Transparent pricing</li>
            <li>Free pickup service</li>
            <li>Instant payment options</li>
            <li>Good customer reviews</li>
            <li>Secure data handling</li>
          </ul>

          <h2>Safety Tips for Selling Your Phone</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
            <h3 className="text-yellow-800 font-semibold mb-3">Important Safety Checklist</h3>
            <ul className="text-yellow-700 list-disc pl-5 space-y-2">
              <li>Never share personal banking details on unofficial websites</li>
              <li>Verify the buyback service's credibility</li>
              <li>Keep all transaction records</li>
              <li>Take photos of your device before selling</li>
              <li>Get proper documentation for the sale</li>
            </ul>
          </div>

          <h2>Common Mistakes to Avoid</h2>
          <ol>
            <li><strong>Not comparing prices:</strong> Always check multiple buyback options</li>
            <li><strong>Skipping device backup:</strong> Ensure all data is safely backed up</li>
            <li><strong>Forgetting to remove accounts:</strong> Sign out of all services</li>
            <li><strong>Accepting cash without documentation:</strong> Always get proper receipts</li>
            <li><strong>Not checking buyer credentials:</strong> Verify the service provider</li>
          </ol>

          <h2>Understanding Buyback Valuations</h2>
          <p>Phone valuations are typically based on:</p>
          <ul>
            <li><strong>Market Demand:</strong> Popular models get better prices</li>
            <li><strong>Age:</strong> Newer phones fetch higher values</li>
            <li><strong>Condition Grade:</strong>
              <ul>
                <li>Like New: 80-90% of market value</li>
                <li>Excellent: 70-80% of market value</li>
                <li>Good: 60-70% of market value</li>
                <li>Fair: 40-60% of market value</li>
              </ul>
            </li>
          </ul>

          <h2>Benefits of Professional Buyback Services</h2>
          <ul>
            <li>Guaranteed fair market value</li>
            <li>Safe and secure transaction</li>
            <li>Professional data wiping</li>
            <li>Convenient doorstep pickup</li>
            <li>Instant payment options</li>
            <li>Proper documentation</li>
          </ul>

          <h2>After Selling Your Phone</h2>
          <p>Important steps after completing the sale:</p>
          <ul>
            <li>Keep the transaction receipt safe</li>
            <li>Monitor your payment confirmation</li>
            <li>Keep track of pickup details</li>
            <li>Save the data erasure certificate</li>
            <li>Maintain communication records</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h3 className="text-green-800 font-semibold mb-3">Ready to Sell Your Phone?</h3>
            <p className="text-green-700">
              Use our instant quote calculator to get the best price for your device. We offer safe, secure, and
              hassle-free buyback service across India.
            </p>
            <Link href="/" className="text-green-700 hover:text-green-800 font-medium inline-block mt-2">
              Get Started Now →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}

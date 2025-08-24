"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function BestPhonesToSellPage() {
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

          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best Phones to Sell in 2024</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Find out which phones have the highest resale value in 2024 and the best time to sell them.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h2>Top Phones with Best Resale Value in 2024</h2>
          
          <h3>1. iPhone Series</h3>
          <p>iPhones consistently maintain the highest resale value in the market:</p>
          <ul>
            <li><strong>iPhone 15 Pro Max:</strong> Retains up to 75% of its value after 6 months</li>
            <li><strong>iPhone 15 Pro:</strong> Maintains 70-72% value retention</li>
            <li><strong>iPhone 14 Series:</strong> Still commands 65% of original price</li>
            <li><strong>iPhone 13 Series:</strong> Holds steady at 55-60% value retention</li>
          </ul>

          <h3>2. Samsung Galaxy Series</h3>
          <p>Samsung's flagship devices offer good resale value:</p>
          <ul>
            <li><strong>Galaxy S24 Ultra:</strong> Retains 65% value after 6 months</li>
            <li><strong>Galaxy S24+:</strong> Maintains 60% value retention</li>
            <li><strong>Galaxy Z Fold 5:</strong> Holds 55% of its original value</li>
            <li><strong>Galaxy S23 Series:</strong> Still fetches 50% of launch price</li>
          </ul>

          <h3>3. Google Pixel Series</h3>
          <ul>
            <li><strong>Pixel 8 Pro:</strong> Maintains 60% value after 6 months</li>
            <li><strong>Pixel 8:</strong> Retains 55% of original price</li>
            <li><strong>Pixel 7 Series:</strong> Holds 45-50% value</li>
          </ul>

          <h3>4. OnePlus Devices</h3>
          <ul>
            <li><strong>OnePlus 12:</strong> Retains 55% value after 6 months</li>
            <li><strong>OnePlus 11:</strong> Maintains 45% value retention</li>
          </ul>

          <h2>Best Time to Sell Your Phone</h2>
          <p>To maximize your phone's resale value, consider these timing tips:</p>
          <ul>
            <li><strong>Before New Model Launch:</strong> Sell 1-2 months before the next model release</li>
            <li><strong>During Festival Season:</strong> Higher demand during Diwali and other festivals</li>
            <li><strong>Avoid Waiting Too Long:</strong> Phones typically depreciate 30-40% in the first year</li>
          </ul>

          <h2>Factors Affecting Resale Value</h2>
          <ol>
            <li><strong>Brand Reputation:</strong> Premium brands like Apple and Samsung retain value better</li>
            <li><strong>Phone Condition:</strong> Well-maintained phones with no damage get better prices</li>
            <li><strong>Original Accessories:</strong> Having original box and accessories increases value</li>
            <li><strong>Warranty Status:</strong> Phones under warranty fetch higher prices</li>
            <li><strong>Storage Capacity:</strong> Higher storage variants typically retain more value</li>
          </ol>

          <h2>Tips to Maintain Phone Value</h2>
          <ul>
            <li>Use protective case and screen guard from day one</li>
            <li>Keep original packaging and accessories</li>
            <li>Regular software updates and maintenance</li>
            <li>Avoid unauthorized repairs</li>
            <li>Keep phone clean and in good working condition</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h3 className="text-green-800 font-semibold mb-3">Ready to Sell Your Phone?</h3>
            <p className="text-green-700">
              Get an instant quote for your device and sell it for the best price. We offer free pickup and instant
              payment across India.
            </p>
            <Link href="/brand/all-other-phones" className="text-green-600 hover:text-green-700 font-medium inline-block mt-2">
              Get Instant Quote →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}

"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star, ShieldCheck, Clock } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function HomePage() {
  const router = useRouter()

  const brandData = [
    {
      name: "Apple",
      logo: "🍎",
      description: "iPhone 6 to iPhone 16 series",
      count: "20+ models",
      color: "from-gray-900 to-gray-700",
    },
    {
      name: "Samsung",
      logo: "📱",
      description: "Galaxy S6 to S25 series",
      count: "25+ models",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Google",
      logo: "🔍",
      description: "Pixel 2 to Pixel 9 series",
      count: "15+ models",
      color: "from-green-500 to-green-700",
    },
  ]

  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Instant Cash for Old Phone",
      description: "Get immediate payment for your used mobile phone",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Phone Buyback Online",
      description: "Quick mobile buyback process with instant quotes",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Best Site to Sell Old Phone",
      description: "Maximum value for your used iPhone and Samsung phones",
    },
  ]

  const customerReviews = [
    {
      name: "Asher",
      rating: 5,
      review: "I was looking for the fastest way to sell my phone online, and this platform exceeded my expectations. Got the best price and quick payment"
    },
    {
      name: "Abrar Khan",
      rating: 5,
      review: "Kya service hai bhai",
      initial: "A",
    },
    {
      name: "Mahlakha",
      rating: 5,
      review: "If you need to sell old phone without hassle, this is the site to trust. Super smooth process from start to finish.",
      initial: "M",
    },
    {
      name: "Yusuf Khan",
      rating: 5,
      review: "I decided to sell my cell phone online, and within a day, I had multiple offers. Amazing service and great value",
      initial: "Y",
    },
    {
      name: "Sumit.K",
      rating: 5,
      review: "Needed cash urgently so I tried to sell my phone here. The process was fast transparent, and I got paid instantly",
      initial: "S",
    },
    {
      name: "Rahil",
      rating: 5,
      review: "Best experience ever! I could sell phone online in minutes without worrying about fake buyers. Safe and reliable",
      initial: "R",
    },
    {
      name: "Nabil A",
      rating: 5,
      review: "If you're stuck wondering how to find the best platform to sell old phones, just try Sell Old Phone!",
      initial: "P",
    },
    {
      name: "Laxit",
      rating: 5,
      review: "Great UI, great support — everything worked when I went to sell my device for cash instantly.",
      initial: "A",
    },
    {
      name: "Anushka",
      rating: 5,
      review: "Sell Old Phone is now my go-to app whenever I need to sell gadgets online for best prices.",
      initial: "N",
    },
    {
      name: "Ravi Kumar",
      rating: 5,
      review: "A friend told me about this platform to find a way to sell old phones for cash instantly.",
      initial: "R",
    },
  ]

  const scrollToBrands = () => {
    document.getElementById("brands-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="w-full bg-[#f9fcf7] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Headline and Actions */}
          <div className="flex-1 text-left space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Sell Old Phone Online for <span className="text-green-600">Instant Cash</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Best mobile buyback platform in India. Sell used mobile for cash with instant quotes, free pickup, and
              guaranteed payments. Trade in old mobile for maximum value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToBrands}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-lg shadow"
              >
                Sell My Phone Now
              </Button>
            </div>
            <div className="flex gap-8 pt-8">
              <div className="flex items-center gap-2">
                <span className="inline-block bg-green-100 text-green-600 rounded-full p-2">₹</span>
                <span className="text-gray-700 font-medium">Best Prices</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block bg-green-100 text-green-600 rounded-full p-2">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path
                      d="M3 10h14M10 3l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-gray-700 font-medium">Free Pickup</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block bg-green-100 text-green-600 rounded-full p-2">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M10 6v4l2 2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-gray-700 font-medium">Secure Process</span>
              </div>
            </div>
          </div>
          {/* Right: Quick Price Check Card */}
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Mobile Resale Value Calculator</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-gray-700 font-medium mb-2">Select Brand to Sell</div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => router.push("/brand/apple")}
                    >
                      Apple
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => router.push("/brand/samsung")}
                    >
                      Samsung
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => router.push("/brand/google")}
                    >
                      Google
                    </Button>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg rounded-lg mt-4">
                  Get Instant Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Trusted by thousands for selling old phones online</p>
          </div>

          {/* Two horizontal rows of reviews */}
          <div className="space-y-6">
            {/* First row */}
            <div className="flex animate-scroll-horizontal space-x-6">
              {[...customerReviews.slice(0, 5), ...customerReviews.slice(0, 5)].map((review, index) => (
                <div key={`row1-${index}`} className="flex-shrink-0 w-80 bg-white rounded-lg p-6 review-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-semibold text-green-600">
                      {review.initial}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{review.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second row */}
            <div className="flex animate-scroll-horizontal-reverse space-x-6">
              {[...customerReviews.slice(5, 10), ...customerReviews.slice(5, 10)].map((review, index) => (
                <div key={`row2-${index}`} className="flex-shrink-0 w-80 bg-white rounded-lg p-6 review-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-semibold text-green-600">
                      {review.initial}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{review.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Mobile Buyback Service?</h2>
            <p className="text-lg text-gray-600">Best site to sell old phone with guaranteed satisfaction</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full text-green-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sell Used iPhone, Samsung & Google Phones
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trade in old mobile for cash from top brands. Get maximum value for your used smartphone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12">
            {brandData.map((brand, index) => (
              <Link
                key={brand.name}
                href={`/brand/${brand.name.toLowerCase()}`}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${brand.color} rounded-xl flex items-center justify-center text-2xl mb-6 hover:scale-110 transition-transform duration-300`}
                >
                  {brand.logo}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sell Used {brand.name}</h3>
                <p className="text-gray-600 mb-4">{brand.description}</p>
                <div className="inline-flex items-center text-green-600 font-semibold">
                  <span>{brand.count}</span>
                  <ArrowRight className="ml-2 h-4 w-4 hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Top Picks for You</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked refurbished phones with quality guarantee
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Phone Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg"
                  alt="Refurbished iPhone 15 for sale"
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                95% Battery Health
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                Under 3 months Apple warranty
              </div>
            </div>
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Refurbished iPhone 15</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">₹58,000</div>
                <p className="text-lg text-gray-600 mb-6">
                  Buy certified pre-owned iPhone 15 with quality guarantee. All refurbished smartphones under ₹60,000
                  come with warranty and original accessories.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Quality tested and certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Warranty included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Original accessories</span>
                </div>
              </div>
              <Link href="/buy-phone">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-lg shadow">
                  Buy Refurbished Phone
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sell Your Phone Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Sell Old Phone Online?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get instant cash for old phone with our mobile buyback service. Best prices guaranteed for used mobiles in
            India.
          </p>
          <Button
            onClick={scrollToBrands}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Sell My Phone for Cash
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

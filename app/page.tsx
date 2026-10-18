import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TypewriterText } from "@/components/ui/typewriter-text"
import { ArrowRight, CheckCircle, Star, ShieldCheck, Clock, Smartphone, DollarSign, Zap } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FAQAccordion from "@/components/faq-accordion"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta(
  "/",
  "Sell Old Phone Online for Instant Cash | Contreat.in",
  "Sell your old phone online at Contreat.in for instant cash. Best buyback prices for used iPhone, Samsung and Pixel phones, free doorstep pickup and instant payment.",
  true,
)

export default function HomePage() {
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
    {
      name: "All Other Phones",
      logo: "📲",
      description: "Oppo, OnePlus, Vivo, Mi & more",
      count: "50+ brands",
      color: "from-purple-600 to-purple-800",
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

  const quickLinks = [
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Sell iPhone",
      description: "Get best price for iPhone",
      href: "/brand/apple",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: <DollarSign className="h-5 w-5" />,
      title: "Sell Samsung",
      description: "Maximum value for Galaxy",
      href: "/brand/samsung",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Sell Google Pixel",
      description: "Quick cash for Pixel phones",
      href: "/brand/google",
      color: "from-green-600 to-green-800",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Sell Other Phones",
      description: "All brands accepted",
      href: "/brand/all-other-phones",
      color: "from-purple-600 to-purple-800",
    },
  ]

const comprehensiveQuickLinks: Record<string, Array<{ name: string; href: string; onClick?: () => void }>> = {
  "Popular Phone Brands": [
    { name: "Sell iPhone Online", href: "/brand/apple" },
    { name: "Sell Samsung Galaxy Phone", href: "/brand/samsung" },
    { name: "Sell Google Pixel Phone", href: "/brand/google" },
        { name: "Sell All phones", href: "/brand/all-other-phones" },


  ],
"Top iPhone Models": [
  { name: "Sell Used iPhone 17", href: "/phone/used-iphone-17" },
  { name: "Sell Used iPhone 16", href: "/phone/used-iphone-16" },
  { name: "Sell Used iPhone 15", href: "/phone/used-iphone-15" },
  { name: "Sell Used iPhone 14", href: "/phone/used-iphone-14" },
  { name: "Sell Used iPhone 13", href: "/phone/used-iphone-13" },
  { name: "Iphone 15 vs iphone 16", href: "/blog/iphone-15-vs-iphone-16-comparison" },
],
"Top Samsung Models": [
  { name: "Sell Used Galaxy S25", href: "/phone/used-galaxy-s25" },
  { name: "Sell Used Galaxy S24", href: "/phone/used-galaxy-s24" },
  { name: "Sell Used Galaxy S23", href: "/phone/used-galaxy-s23" },
  { name: "Sell Used Galaxy S22", href: "/phone/used-galaxy-s22" },
],
"Top Google Pixel Models": [
  { name: "Sell Used Pixel 10", href: "/phone/used-pixel-10" },
  { name: "Sell Used Pixel 9", href: "/phone/used-pixel-9" },
  { name: "Sell Used Pixel 8", href: "/phone/used-pixel-8" },
  { name: "Sell Used Pixel 7", href: "/phone/used-pixel-7" },
  { name: "Sell Old Phone Online India:", href: "/blog/sell-old-phone-online-india" },
],
  
  
  
};

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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="w-full  py-20 lg:py-32 relative overflow-hidden hero-radial-bg">
        {/* Decorative floating shapes */}
        {/* Third semi-circle positioned where user marked */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          {/* Left: Headline and Actions */}
          <div className="flex-1 text-left space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              <span className="block">Sell Old Phone</span>
              <span className="block">Online for</span>
              <span className="block text-green-700">
                <TypewriterText baseText="Instant " words={["Cash", "Save", "Gain"]} />
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Best mobile buyback platform in India. Sell used mobile for cash with instant quotes, free pickup, and
              guaranteed payments. Trade in old mobile for maximum value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <a href="#brands-section">Sell My Phone Now</a>
              </Button>
            </div>
            <div className="flex gap-8 pt-8">
              <div className="flex items-center gap-2">
                <span className="inline-block bg-green-100 text-green-700 rounded-full p-2">₹</span>
                <span className="text-gray-700 font-medium">Best Prices</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block bg-green-100 text-green-700 rounded-full p-2">
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
                <span className="inline-block bg-green-100 text-green-700 rounded-full p-2">
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
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm space-y-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Mobile Resale Value Calculator</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-gray-700 font-medium mb-2">Select Brand to Sell</div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      className="bg-transparent hover:bg-green-50 hover:border-green-300 transition-colors"
                      asChild
                    >
                      <Link href="/brand/apple">Apple</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-transparent hover:bg-blue-50 hover:border-blue-300 transition-colors"
                      asChild
                    >
                      <Link href="/brand/samsung">Samsung</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-transparent hover:bg-green-50 hover:border-green-300 transition-colors"
                      asChild
                    >
                      <Link href="/brand/google">Google</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-transparent hover:bg-purple-50 hover:border-purple-300 transition-colors "
                      asChild
                    >
                      <Link href="/brand/all-other-phones">Sell Other Phones</Link>
                    </Button>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-green-700 hover:bg-green-800 text-white text-lg rounded-xl mt-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <a href="#brands-section">Get Instant Quote</a>
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
              {customerReviews.slice(0, 5).map((review, index) => (
                <div key={`row1-${index}`} className="flex-shrink-0 w-80 bg-white rounded-xl p-6 review-card shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-semibold text-green-700">
                      {review.initial}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <p className="font-semibold text-gray-900">{review.name}</p>
                        <span className="text-yellow-400 text-sm leading-none tracking-tight" aria-label={`${review.rating} out of 5 stars`}>
                          {"★".repeat(review.rating)}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{review.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second row */}
            <div className="flex animate-scroll-horizontal-reverse space-x-6">
              {customerReviews.slice(5, 10).map((review, index) => (
                <div key={`row2-${index}`} className="flex-shrink-0 w-80 bg-white rounded-xl p-6 review-card shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-semibold text-green-700">
                      {review.initial}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <p className="font-semibold text-gray-900">{review.name}</p>
                        <span className="text-yellow-400 text-sm leading-none tracking-tight" aria-label={`${review.rating} out of 5 stars`}>
                          {"★".repeat(review.rating)}
                        </span>
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Mobile Buyback Service?</h2>
            <p className="text-lg text-gray-600">Best site to sell old phone with guaranteed satisfaction</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center space-y-4 animate-fade-in-up bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full text-green-700">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {brandData.map((brand, index) => (
              <Link
                key={brand.name}
                href={`/brand/${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in-up border border-gray-100 hover:border-gray-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${brand.color} rounded-xl flex items-center justify-center text-2xl mb-6 hover:scale-110 transition-transform duration-300`}
                >
                  {brand.logo}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sell Used {brand.name}</h3>
                <p className="text-gray-600 mb-4">{brand.description}</p>
                <div className="inline-flex items-center text-green-700 font-semibold">
                  <span>{brand.count}</span>
                  <ArrowRight className="ml-2 h-4 w-4 hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>


          { /* IPHONE 15 PROMO SECTION 

  { /*
 <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Top Picks for You</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked second hand phones with quality guarantee
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Phone Image 
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg"
                  alt="second hand iPhone 15 for sale"
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                95% Battery Health
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                Under 3 months Apple warranty
              </div>
            </div>
            {/* Content 
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">second hand iPhone 15</h3>
                <div className="text-4xl font-bold text-green-700 mb-6">₹45000</div>
                <p className="text-lg text-gray-600 mb-6">
                  Buy certified pre-owned iPhone 15 with quality guarantee. All second hand smartphones under ₹60,000
                  come with warranty and original accessories.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <span className="text-gray-700">Quality tested and certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <span className="text-gray-700">Warranty included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <span className="text-gray-700">Original accessories</span>
                </div>
              </div>
              <Link href="/buy-phone">
                <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Buy second hand Phone
                </Button>
              </Link>
            </div>
          </div>


        </div>
      </section> */}
      
          {/* Comprehensive Quick Links Section 
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(comprehensiveQuickLinks).map(([category, links]) => (
                <div key={category} className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">{category}</h4>
                  <div className="space-y-2">
                    {links.map((link, index) => (
                      'onClick' in link && link.onClick ? (
                        <button
                          key={index}
                          onClick={link.onClick}
                          className="block text-left w-full text-gray-600 hover:text-green-700 transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform cursor-pointer"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <Link
                          key={index}
                          href={link.href}
                          className="block text-gray-600 hover:text-green-700 transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform"
                        >
                          {link.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Top Picks for You</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked second hand phones with quality guarantee
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Phone Image  */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <Image
                  src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg"
                  alt="second hand iPhone 15 for sale"
                  width={570}
                  height={650}
                  sizes="(max-width: 1024px) 90vw, 570px"
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-green-700 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                95% Battery Health
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-700 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                Under 3 months Apple warranty
              </div>
            </div>
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">second hand iPhone 15</h3>
                <div className="text-4xl font-bold text-green-700 mb-6">₹45000</div>
                <p className="text-lg text-gray-600 mb-6">
                  Buy certified pre-owned iPhone 15 with quality guarantee. All second hand smartphones under ₹60,000
                  come with warranty and original accessories.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <span className="text-gray-700">Quality tested and certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <span className="text-gray-700">Warranty included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <span className="text-gray-700">Original accessories</span>
                </div>
              </div>
              <Button
                asChild
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/buy-phone">Buy second hand iPhone</Link>
              </Button>
            </div>
          </div>


        </div>

        
      </section>

       <div className="mt-12 pb-12"> 
  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Links</h3>
  
  <div className="max-w-6xl mx-auto px-1 ">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {Object.entries(comprehensiveQuickLinks).map(([category, links]) => (
        <div key={category} className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pt-5 pb-2 text-center">
            {category}
          </h4>
          <div className="space-y-2 text-center">
            {links.map((link, index) =>
              'onClick' in link && link.onClick ? (
                <button
                  key={index}
                  onClick={link.onClick}
                  className="block w-full text-gray-600 hover:text-green-700 transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform cursor-pointer"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-gray-600 hover:text-green-700 transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Blog Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sell Old Phone Online & Buy Refurbished Mobiles Contreat</h3>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Looking to sell your old mobile phone or upgrade to a new one without overspending? Contreat is India's most reliable platform to sell old phones online and buy refurbished smartphones at the best prices. With instant quotes, free doorstep pickup, and quick cash payments, we make selling and buying mobiles simple, fast, and trustworthy.
            </p>
            
            <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Sell Your Old Phone in Minutes</h4>
            <p>
              Turn your unused phone into instant cash with Contreat. Get an instant quote by entering your phone details and receive the best resale value in seconds. Schedule free doorstep pickup at a time that works for you, and we'll collect your phone from your location. Receive instant cash payment at the time of pickup without any delays.
            </p>
            <p>
              Whether it's an iPhone, Samsung, OnePlus, or any other brand, Contreat ensures you always get the highest value for your old phone. Our transparent pricing system guarantees fair market rates for all smartphone brands and models.
            </p>
            
            <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Buy Old & Refurbished Phones at Affordable Prices</h4>
            <p>
              Upgrade smartly with Contreat's wide selection of refurbished smartphones that look and perform like new. Every device goes through strict quality checks to guarantee performance and reliability. Our refurbished phones come with comprehensive quality assurance including 32-point quality inspection, 6-month warranty, and 15-day replacement policy.
            </p>
            <p>
              Choose from trusted brands like Apple, Samsung, OnePlus, Xiaomi, Realme, and more at nearly half the cost of new devices. All refurbished smartphones are thoroughly tested for battery life, screen quality, camera functionality, and overall performance before being listed for sale.
            </p>
            
            <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How Contreat Works</h4>
            
            <h5 className="text-lg font-semibold text-gray-800 mt-6 mb-3">To Sell a Phone</h5>
            <p>
              Visit our website or download the Contreat app to get started. Enter your device details including brand, model, storage capacity, and condition to get an instant quote. Schedule a free pickup from your home at your preferred time slot. Our pickup executive will visit your location and complete the transaction. Receive cash instantly when we collect your phone after final verification.
            </p>
            
            <h5 className="text-lg font-semibold text-gray-800 mt-6 mb-3">To Buy a Phone</h5>
            <p>
              Browse our extensive refurbished phone section with detailed listings and high-quality images. Select your preferred brand, model, storage variant, and condition rating (Fair, Good, or Superb). Complete secure online payment through multiple payment options including UPI, card, or net banking. Get your refurbished phone delivered to your doorstep with secure packaging and tracking details.
            </p>
            
            <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Why Choose Contreat</h4>
            <p>
              Contreat offers the best resale price for old phones in the market with competitive valuations. Our hassle-free selling process eliminates the need for negotiations or multiple buyer meetings. Free home pickup service available across major Indian cities with flexible timing options. Instant cash payment ensures you get money immediately without waiting periods.
            </p>
            <p>
              We guarantee 100% secure data wipe from old devices to protect your personal information. All refurbished phones come with warranty and replacement policies for customer satisfaction. Our customer support team assists throughout the buying and selling process.
            </p>
            
            <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Sell or Buy Popular Phone Brands</h4>
            <p>
              <strong>Sell Popular Brands:</strong> Sell iPhone models including iPhone 13, iPhone 14, and iPhone 15. Sell Samsung Galaxy series including S23, S24, and Note series. Sell OnePlus smartphones, Xiaomi phones, and Oppo devices for instant cash.
            </p>
            <p>
              <strong>Buy Refurbished Phones:</strong> Buy iPhone at discounted prices with warranty coverage. Buy Samsung refurbished phones with quality guarantee. Buy Realme, Vivo, and Motorola smartphones at affordable rates with complete functionality checks.
            </p>
            <p>
              With Contreat, selling and buying mobiles is always safe, fast, and reliable. Our platform connects phone sellers with buyers across India, ensuring fair pricing and secure transactions.
            </p>
            
            <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Ready to Upgrade Your Phone</h4>
            <p>
              Sell your old phone online today and get instant cash for your unused device. Buy a certified refurbished smartphone with Contreat and save money while getting quality assurance. Contreat is India's trusted platform for old mobiles with thousands of satisfied customers nationwide.
            </p>
            <p>
              Contact Contreat customer support for any queries about phone selling prices, refurbished phone availability, or technical assistance. Join thousands of Indians who trust Contreat for their mobile phone buying and selling needs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Contreat Frequently Asked Questions</h3>
          
          <FAQAccordion />
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
            asChild
            className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <a href="#brands-section">Sell My Phone for Cash</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

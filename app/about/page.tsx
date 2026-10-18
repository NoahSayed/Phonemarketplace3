import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Shield, Award, Users, Recycle } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Every device undergoes comprehensive testing and certification",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Best Prices",
      description: "We offer competitive rates for both buying and selling",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer First",
      description: "Your satisfaction is our top priority",
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Sustainability",
      description: "Promoting eco-friendly technology reuse",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Sell Old Phone</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            India's best mobile buyback platform for selling used phones online. Get instant cash for your old iPhone,
            Samsung, and Google phones.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Sell Old Phone, we are India's leading mobile buyback platform where you can sell used mobile for
                cash instantly. Our mission is to provide the best site to sell old phone online, offering maximum value
                for your used iPhone, Samsung, and Google devices.
              </p>
              <p className="text-lg text-gray-600">
                We specialize in phone buyback online services, making it easy to trade in old mobile for cash while
                promoting electronic recycling and sustainability.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-6xl mb-4 text-center">🌱</div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Sustainability Focus</h3>
              <p className="text-gray-600 text-center">
                Every Second hand phone sold prevents electronic waste and reduces environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full text-green-700">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-xl">Phones Second Hand</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-xl">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-xl">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

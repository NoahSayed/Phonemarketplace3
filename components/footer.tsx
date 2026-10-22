import Link from "next/link"
import { Smartphone, Mail, MapPin } from "lucide-react"
import { AdSlot } from "@/components/ad-slot"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
    <AdSlot placement="bottom" />
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
                <Smartphone className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Sell Old Phone</span>
            </div>
            <p className="text-gray-400">
              Best site to sell old phone online for instant cash. Mobile buyback platform for used iPhone, Samsung &
              Google phones in India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/buy-phone" className="text-gray-400 hover:text-white transition-colors">
                  Buy Phone
                </Link>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Brands</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/brand/apple" className="text-gray-400 hover:text-white transition-colors">
                  Apple
                </Link>
              </li>
              <li>
                <Link href="/brand/samsung" className="text-gray-400 hover:text-white transition-colors">
                  Samsung
                </Link>
              </li>
              <li>
                <Link href="/brand/google" className="text-gray-400 hover:text-white transition-colors">
                  Google
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-700" />
                <a href="mailto:itsselloldphone@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  admin@contreat.in
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-700" />
                <span className="text-gray-400">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-400"> {currentYear} Sell Old Phone.</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer

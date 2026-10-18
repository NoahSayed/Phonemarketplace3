"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation" // Added usePathname hook for active state detection
import { Button } from "@/components/ui/button"
import { Menu, X, Smartphone } from "lucide-react"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname() // Get current pathname for active state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/buy-phone", label: "Buy Phone" },
    { href: "/brand/all-other-phones", label: "Sell All Other Phones" },
  ]

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
              <Smartphone className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Sell Old Phone</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  isActiveLink(link.href)
                    ? "text-green-700 border-b-2 border-green-700 pb-1" // Active state styling with green color and bottom border
                    : "text-gray-700 hover:text-green-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 font-medium transition-colors ${
                    isActiveLink(link.href)
                      ? "text-green-700 bg-green-50 rounded-md" // Active state styling for mobile with background color
                      : "text-gray-700 hover:text-green-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

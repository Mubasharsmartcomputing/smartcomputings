"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo/image.png" alt="Smart Computing" width={120} height={100}  />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`hover:text-cyan-400 transition-colors ${pathname === '/' ? 'text-cyan-400' : 'text-white'}`}>
              Home
            </Link>
            <Link href="/about" className={`hover:text-cyan-400 transition-colors ${pathname === '/about' ? 'text-cyan-400' : 'text-white'}`}>
              About Us
            </Link>
            <Link href="/services" className={`hover:text-cyan-400 transition-colors ${pathname === '/services' ? 'text-cyan-400' : 'text-white'}`}>
              Services
            </Link>
            {/* <Link href="/portfolio" className={`hover:text-cyan-400 transition-colors ${pathname === '/portfolio' ? 'text-cyan-400' : 'text-white'}`}>
              Portfolio
            </Link> */}
            <Link href="/contact" className={`hover:text-cyan-400 transition-colors ${pathname === '/contact' ? 'text-cyan-400' : 'text-white'}`}>
              Contact Us
            </Link>
          </nav>

          {/* Mobile dropdown menu */}
          <div className="relative md:hidden">
            <button 
              className="text-white hover:text-cyan-400 transition-colors" 
              style={{ fontFamily: 'Inter' }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {isDropdownOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-[#183762] border border-cyan-400/20 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  <Link 
                    href="/" 
                    className={`block px-4 py-2 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors ${pathname === '/' ? 'text-cyan-400 bg-cyan-400/10' : 'text-white'}`}
                    style={{ fontFamily: 'Inter' }}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about" 
                    className={`block px-4 py-2 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors ${pathname === '/about' ? 'text-cyan-400 bg-cyan-400/10' : 'text-white'}`}
                    style={{ fontFamily: 'Inter' }}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/services" 
                    className={`block px-4 py-2 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors ${pathname === '/services' ? 'text-cyan-400 bg-cyan-400/10' : 'text-white'}`}
                    style={{ fontFamily: 'Inter' }}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Services
                  </Link>
                  <Link 
                    href="/portfolio" 
                    className={`block px-4 py-2 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors ${pathname === '/portfolio' ? 'text-cyan-400 bg-cyan-400/10' : 'text-white'}`}
                    style={{ fontFamily: 'Inter' }}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Portfolio
                  </Link>
                  <Link 
                    href="/contact" 
                    className={`block px-4 py-2 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors ${pathname === '/contact' ? 'text-cyan-400 bg-cyan-400/10' : 'text-white'}`}
                    style={{ fontFamily: 'Inter' }}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
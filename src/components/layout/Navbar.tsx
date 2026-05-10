'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div
        className={`mx-4 md:mx-8 lg:mx-16 rounded-lg transition-all duration-500 ${
          scrolled ? 'glass border border-white/5 px-6 py-3' : 'px-0 py-0'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 bg-cyan-400 rounded-sm rotate-12 group-hover:rotate-45 transition-transform duration-300 opacity-20" />
              <div className="relative w-full h-full border border-cyan-400/60 rounded-sm flex items-center justify-center">
                <span className="font-display font-800 text-cyan-400 text-sm tracking-wider">OP</span>
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-white text-lg tracking-tight">Outpro</span>
              <span className="font-display font-bold text-cyan-400 text-lg">.India</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-white/60 hover:text-white link-underline transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="btn-primary text-sm py-2.5 px-6">
              Get Started
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5 mt-2 mx-4 rounded-lg p-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-white/70 hover:text-cyan-400 transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-center text-sm mt-2">
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

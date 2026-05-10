import Link from 'next/link'
import { Linkedin, Twitter, Instagram, Github, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const services = ['Brand Strategy', 'UI/UX Design', 'Web Development', 'Digital Marketing', 'Cloud Solutions', 'Data Analytics']
const company = ['About Us', 'Portfolio', 'Case Studies', 'Careers', 'Blog', 'Contact']

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-400/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 border border-cyan-400/60 rounded-sm flex items-center justify-center">
                <span className="font-display font-bold text-cyan-400 text-sm">OP</span>
              </div>
              <span className="font-display font-bold text-white text-lg">Outpro<span className="text-cyan-400">.India</span></span>
            </div>
            <p className="font-body text-white/40 text-sm leading-relaxed mb-6">
              Redefining how businesses show up digitally. We build experiences that convert, inspire, and endure.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 glass rounded-sm flex items-center justify-center text-white/40 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-6 tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="font-body text-white/40 text-sm hover:text-cyan-400 transition-colors link-underline">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-6 tracking-wider uppercase">Company</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c}>
                  <Link href="#" className="font-body text-white/40 text-sm hover:text-cyan-400 transition-colors link-underline">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-6 tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                <a href="mailto:hello@outpro.india" className="font-body text-white/40 text-sm hover:text-white transition-colors">
                  hello@outpro.india
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                <a href="tel:+919876543210" className="font-body text-white/40 text-sm hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                <span className="font-body text-white/40 text-sm">
                  Bengaluru, Karnataka, India 560001
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-display text-cyan-400 hover:gap-3 transition-all">
                Start a project <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-white/25 text-xs">
            © 2025 Outpro.India. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((t) => (
              <Link key={t} href="#" className="font-body text-white/25 text-xs hover:text-white/60 transition-colors">
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

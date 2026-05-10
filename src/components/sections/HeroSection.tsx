'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none transition-transform duration-700"
        style={{
          background: 'radial-gradient(circle, #00D4FF, transparent)',
          transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-8 blur-3xl pointer-events-none transition-transform duration-1000"
        style={{
          background: 'radial-gradient(circle, #7B2FBE, transparent)',
          transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)`,
        }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full opacity-8 blur-3xl pointer-events-none transition-transform duration-1000"
        style={{
          background: 'radial-gradient(circle, #FFB800, transparent)',
          transform: `translate(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px)`,
        }}
      />

      {/* Geometric orbit decoration */}
      <div
        className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[280px] h-[280px] opacity-20 hidden lg:block transition-transform duration-500"
        style={{ transform: `translate(${mousePos.x * 0.05}px, ${mousePos.y * 0.05 - 50}%)` }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-spin-slow" />
          <div className="absolute inset-8 rounded-full border border-violet-500/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
          <div className="absolute inset-16 rounded-full border border-amber-400/20 animate-spin-slow" style={{ animationDuration: '10s' }} />

          {/* Orbit dots */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="orbit-1 absolute">
              <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_12px_#00D4FF]" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotate(60deg)' }}>
            <div className="orbit-2 absolute">
              <div className="w-2 h-2 bg-violet-400 rounded-full shadow-[0_0_8px_#7B2FBE]" />
            </div>
          </div>

          {/* Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-cyan-400/50 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="tag tag-cyan mb-8 animate-[fadeIn_0.6s_ease_both]">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            Now Accepting Q3 Projects
          </div>

          {/* Headline */}
          <h1
            className="font-display font-extrabold text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight mb-8"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block text-white">We Build</span>
            <span className="block gradient-text">Digital Empires</span>
            <span className="block text-white/80 text-[0.75em] font-semibold mt-2">
              That Last.
            </span>
          </h1>

          {/* Description */}
          <p className="font-body text-white/50 text-xl max-w-xl leading-relaxed mb-12">
            Outpro.India crafts high-performance digital experiences for enterprises 
            ready to dominate their market — with precision, velocity, and uncompromising quality.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-3 text-base">
              Start Your Project
              <ArrowRight size={18} />
            </Link>
            <Link href="/portfolio" className="btn-outline inline-flex items-center gap-3 text-base">
              <div className="w-8 h-8 rounded-full border border-cyan-400/40 flex items-center justify-center">
                <Play size={12} className="ml-0.5" />
              </div>
              View Our Work
            </Link>
          </div>

          {/* Social proof bar */}
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex -space-x-3">
              {[
                'bg-gradient-to-br from-cyan-400 to-blue-500',
                'bg-gradient-to-br from-violet-400 to-purple-600',
                'bg-gradient-to-br from-amber-400 to-orange-500',
                'bg-gradient-to-br from-green-400 to-emerald-500',
              ].map((bg, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full ${bg} border-2 border-brand-dark flex items-center justify-center text-xs font-bold text-white`}
                >
                  {['A', 'B', 'C', '+'][i]}
                </div>
              ))}
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
              <p className="font-body text-white/40 text-xs">Trusted by 50+ companies across India</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="font-mono text-cyan-400 text-sm font-bold">200+</p>
              <p className="font-body text-white/40 text-xs">Projects delivered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <p className="font-mono text-white/60 text-xs tracking-widest uppercase">Scroll</p>
        <ChevronDown size={16} className="text-cyan-400" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
    </section>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered', desc: 'Across 12+ industries' },
  { value: 50, suffix: '+', label: 'Enterprise Clients', desc: 'From startups to Fortune 500s' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', desc: 'Based on post-project surveys' },
  { value: 5, suffix: 'x', label: 'Average ROI', desc: 'Reported by our clients in year 1' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const step = target / (duration / 16)
          let current = 0
          const timer = setInterval(() => {
            current += step
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="font-display font-extrabold text-5xl lg:text-6xl text-white">
      {count}{suffix}
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="glass rounded-lg p-8 border-gradient card-hover relative overflow-hidden group"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="font-display font-semibold text-white/80 text-base mt-2 mb-1">{stat.label}</p>
            <p className="font-body text-white/30 text-xs">{stat.desc}</p>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-cyan-400/20 rounded-bl-lg" />
          </div>
        ))}
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ArrowUpRight, Layers, Globe, BarChart3, Cloud, Smartphone, Palette } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand & UI/UX Design',
    desc: 'Crafting identities that resonate. From brand strategy to pixel-perfect interfaces that convert visitors into loyal customers.',
    tags: ['Figma', 'Branding', 'Design Systems'],
    color: 'from-violet-500/20 to-purple-900/10',
    accent: '#7B2FBE',
  },
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'High-performance, scalable web applications built with Next.js, React and modern cloud infrastructure.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    color: 'from-cyan-500/20 to-blue-900/10',
    accent: '#00D4FF',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    desc: 'Native and cross-platform mobile experiences for iOS and Android that users love and engage with daily.',
    tags: ['React Native', 'iOS', 'Android'],
    color: 'from-green-500/20 to-emerald-900/10',
    accent: '#00F5A0',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    desc: 'Data-driven strategies that grow your digital footprint, drive qualified traffic, and maximize conversion rates.',
    tags: ['SEO', 'PPC', 'Analytics'],
    color: 'from-amber-500/20 to-yellow-900/10',
    accent: '#FFB800',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'Enterprise-grade cloud architecture on AWS, GCP, or Azure — scalable, secure, and cost-optimized.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
    color: 'from-blue-500/20 to-indigo-900/10',
    accent: '#4F8EF7',
  },
  {
    icon: Layers,
    title: 'Enterprise Software',
    desc: 'Custom ERP, CRM, and workflow automation solutions that transform how your team operates.',
    tags: ['ERP', 'CRM', 'Automation'],
    color: 'from-rose-500/20 to-pink-900/10',
    accent: '#FF4D6D',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <div className="tag tag-cyan mb-4">Our Services</div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="font-display font-extrabold text-5xl lg:text-6xl text-white leading-tight">
            What We <span className="gradient-text-cyan">Do Best</span>
          </h2>
          <p className="font-body text-white/40 max-w-sm text-base leading-relaxed">
            End-to-end digital solutions engineered for impact. Every service is a building block of your digital dominance.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((svc, i) => {
          const Icon = svc.icon
          return (
            <div
              key={i}
              className={`relative glass rounded-lg p-8 card-hover group overflow-hidden cursor-pointer`}
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon */}
              <div
                className="relative w-12 h-12 rounded-md flex items-center justify-center mb-6"
                style={{ background: `${svc.accent}15`, border: `1px solid ${svc.accent}30` }}
              >
                <Icon size={22} style={{ color: svc.accent }} />
              </div>

              {/* Content */}
              <h3 className="relative font-display font-bold text-xl text-white mb-3 group-hover:text-white transition-colors">
                {svc.title}
              </h3>
              <p className="relative font-body text-white/40 text-sm leading-relaxed mb-6">
                {svc.desc}
              </p>

              {/* Tags */}
              <div className="relative flex flex-wrap gap-2 mb-6">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2.5 py-1 rounded-sm"
                    style={{
                      background: `${svc.accent}10`,
                      color: svc.accent,
                      border: `1px solid ${svc.accent}20`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="relative flex items-center gap-2 text-white/30 group-hover:text-white/70 transition-colors">
                <Link href="/services" className="font-display text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5">
                  Learn More <ArrowUpRight size={13} />
                </Link>
              </div>

              {/* Corner */}
              <div
                className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(circle at bottom right, ${svc.accent}20, transparent)`,
                }}
              />
            </div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <Link href="/services" className="btn-outline text-sm inline-flex items-center gap-2">
          Explore All Services <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  )
}

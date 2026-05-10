import Link from 'next/link'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'NovaPay Financial Platform',
    category: 'FinTech · Web App',
    desc: 'End-to-end payment infrastructure redesign resulting in 340% increase in transaction volume.',
    kpis: ['340% Transaction Growth', '2.1s Load Time', '99.99% Uptime'],
    color: '#00D4FF',
    bg: 'from-cyan-950 to-blue-950',
    size: 'lg:col-span-2',
  },
  {
    title: 'GreenLeaf E-Commerce',
    category: 'Retail · Shopify Plus',
    desc: 'Complete brand overhaul and custom Shopify experience for India\'s leading sustainable brand.',
    kpis: ['5x Revenue', '60% Cart Recovery'],
    color: '#00F5A0',
    bg: 'from-emerald-950 to-green-950',
    size: '',
  },
  {
    title: 'HealthCore Dashboard',
    category: 'HealthTech · SaaS',
    desc: 'Real-time patient monitoring dashboard built for 200+ hospital network.',
    kpis: ['200+ Hospitals', '3M+ Patients'],
    color: '#FF4D6D',
    bg: 'from-rose-950 to-pink-950',
    size: '',
  },
  {
    title: 'Axiom Legal CRM',
    category: 'LegalTech · Enterprise',
    desc: 'Custom case management and workflow automation for one of India\'s top law firms.',
    kpis: ['70% Efficiency Gain', '500+ Users'],
    color: '#FFB800',
    bg: 'from-amber-950 to-yellow-950',
    size: 'lg:col-span-2',
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-16">
        <div className="tag tag-cyan mb-4">Featured Work</div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="font-display font-extrabold text-5xl lg:text-6xl text-white leading-tight">
            Results That <span className="gradient-text-cyan">Speak</span>
          </h2>
          <Link href="/portfolio" className="btn-outline text-sm inline-flex items-center gap-2 self-start lg:self-auto">
            View All Projects <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((proj, i) => (
          <div
            key={i}
            className={`${proj.size} relative rounded-lg overflow-hidden group cursor-pointer card-hover bg-gradient-to-br ${proj.bg} border border-white/5`}
          >
            {/* Fake browser mockup area */}
            <div className="relative h-48 overflow-hidden bg-black/30">
              {/* Browser bar */}
              <div className="flex items-center gap-1.5 p-3 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <div className="flex-1 ml-2 h-5 bg-white/5 rounded-sm flex items-center px-2">
                  <span className="font-mono text-white/20 text-xs">outpro.india/{proj.title.toLowerCase().replace(/\s+/g, '-')}</span>
                </div>
                <ExternalLink size={12} className="text-white/20" />
              </div>

              {/* Abstract content preview */}
              <div className="p-4 space-y-2">
                <div
                  className="h-2 rounded-full w-3/4 opacity-30"
                  style={{ background: proj.color }}
                />
                <div className="h-1.5 rounded-full w-full bg-white/10" />
                <div className="h-1.5 rounded-full w-5/6 bg-white/10" />
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="h-12 rounded bg-white/5" />
                  ))}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="tag" style={{ background: `${proj.color}20`, color: proj.color, border: `1px solid ${proj.color}40` }}>
                  View Case Study
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="tag mb-3" style={{ background: `${proj.color}10`, color: proj.color, border: `1px solid ${proj.color}20` }}>
                {proj.category}
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-2">{proj.title}</h3>
              <p className="font-body text-white/40 text-sm mb-5">{proj.desc}</p>

              {/* KPIs */}
              <div className="flex flex-wrap gap-2">
                {proj.kpis.map((kpi) => (
                  <span key={kpi} className="font-mono text-xs text-white/50 bg-white/5 px-2.5 py-1 rounded-sm">
                    {kpi}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

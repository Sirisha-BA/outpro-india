import { ExternalLink, TrendingUp } from 'lucide-react'

const projects = [
  {
    title: 'NovaPay Financial Platform',
    client: 'NovaPay Fintech Pvt. Ltd.',
    category: 'FinTech',
    year: '2024',
    desc: 'End-to-end payment infrastructure redesign. We rebuilt the entire user experience from ground up, migrated 2M+ users without downtime, and delivered a platform that now processes ₹500Cr+ monthly.',
    kpis: [
      { label: 'Transaction Growth', value: '340%' },
      { label: 'Load Time', value: '1.8s' },
      { label: 'User Retention', value: '+60%' },
      { label: 'Uptime', value: '99.99%' },
    ],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
    color: '#00D4FF',
    bg: 'from-cyan-950/60 to-blue-950/40',
  },
  {
    title: 'GreenLeaf E-Commerce Overhaul',
    client: 'GreenLeaf Sustainable Products',
    category: 'Retail',
    year: '2024',
    desc: 'Complete brand overhaul and custom Shopify Plus build for India\'s leading sustainable lifestyle brand. Included full brand identity, product photography direction, and multi-channel marketing setup.',
    kpis: [
      { label: 'Revenue Growth', value: '5x' },
      { label: 'Cart Recovery', value: '60%' },
      { label: 'Mobile Conversion', value: '+120%' },
      { label: 'Page Speed Score', value: '97' },
    ],
    stack: ['Shopify Plus', 'React', 'Klaviyo', 'Cloudflare', 'Figma'],
    color: '#00F5A0',
    bg: 'from-emerald-950/60 to-green-950/40',
  },
  {
    title: 'HealthCore Patient Dashboard',
    client: 'HealthCore Hospital Network',
    category: 'HealthTech',
    year: '2023',
    desc: 'Real-time patient monitoring and data management SaaS platform serving 200+ hospitals. Built with strict HIPAA-aligned data architecture and sub-second data refresh across millions of records.',
    kpis: [
      { label: 'Hospitals Connected', value: '200+' },
      { label: 'Patients Managed', value: '3M+' },
      { label: 'Data Refresh', value: '<1s' },
      { label: 'Cost Reduction', value: '45%' },
    ],
    stack: ['React', 'Python', 'PostgreSQL', 'GCP', 'WebSockets'],
    color: '#FF4D6D',
    bg: 'from-rose-950/60 to-pink-950/40',
  },
  {
    title: 'Axiom Legal CRM',
    client: 'Axiom Legal Partners LLP',
    category: 'LegalTech',
    year: '2023',
    desc: 'Custom case management, billing automation, and client portal for one of India\'s top 10 law firms. Replaced three legacy systems with one unified platform, eliminating hours of manual work daily.',
    kpis: [
      { label: 'Efficiency Gain', value: '70%' },
      { label: 'Active Users', value: '500+' },
      { label: 'Manual Work Saved', value: '4hr/day' },
      { label: 'Cases Managed', value: '10,000+' },
    ],
    stack: ['Vue.js', 'Laravel', 'MySQL', 'Azure', 'DocuSign'],
    color: '#FFB800',
    bg: 'from-amber-950/60 to-yellow-950/40',
  },
]

export default function PortfolioPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="tag tag-cyan mb-6">Our Portfolio</div>
        <h1 className="font-display font-extrabold text-6xl lg:text-8xl text-white leading-tight mb-8">
          Real Work. <br />
          <span className="gradient-text">Real Results.</span>
        </h1>
        <p className="font-body text-white/40 text-xl max-w-2xl leading-relaxed">
          We don't just build products — we create measurable competitive advantages. Every project here has a story of transformation behind it.
        </p>
      </section>

      {/* Projects */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto pb-24 space-y-8">
        {projects.map((proj, i) => (
          <div key={i} className={`rounded-xl overflow-hidden border border-white/5 bg-gradient-to-br ${proj.bg}`}>
            {/* Header */}
            <div className="p-8 lg:p-10 border-b border-white/5">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex gap-3 mb-3">
                    <span className="tag" style={{ background: `${proj.color}10`, color: proj.color, border: `1px solid ${proj.color}20` }}>
                      {proj.category}
                    </span>
                    <span className="tag tag-cyan">{proj.year}</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl lg:text-4xl text-white">{proj.title}</h2>
                  <p className="font-body text-white/30 text-sm mt-1">{proj.client}</p>
                </div>
                <button className="btn-outline text-sm inline-flex items-center gap-2 py-2.5 px-5">
                  <ExternalLink size={14} />
                  View Live
                </button>
              </div>
              <p className="font-body text-white/50 text-base leading-relaxed max-w-3xl">{proj.desc}</p>
            </div>

            {/* KPIs + Stack */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* KPIs */}
              <div className="p-8 lg:p-10 border-r border-white/5">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp size={16} style={{ color: proj.color }} />
                  <p className="font-mono text-xs text-white/30 tracking-widest uppercase">Key Results</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {proj.kpis.map((kpi) => (
                    <div key={kpi.label}>
                      <div className="font-display font-extrabold text-3xl" style={{ color: proj.color }}>
                        {kpi.value}
                      </div>
                      <div className="font-body text-white/40 text-xs mt-1">{kpi.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="p-8 lg:p-10">
                <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-6">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-sm px-4 py-2 rounded-sm"
                      style={{ background: `${proj.color}08`, color: proj.color, border: `1px solid ${proj.color}15` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

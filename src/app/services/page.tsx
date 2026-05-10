import Link from 'next/link'
import { ArrowRight, Layers, Globe, BarChart3, Cloud, Smartphone, Palette, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand & UI/UX Design',
    tagline: 'Design that converts',
    desc: 'We craft digital identities and user experiences that leave lasting impressions. From brand strategy and visual systems to interactive prototypes and design systems — every touchpoint is engineered for impact.',
    deliverables: ['Brand Identity System', 'UI Design (Figma)', 'Design System Documentation', 'Interactive Prototype', 'Brand Guidelines PDF'],
    color: '#7B2FBE',
  },
  {
    icon: Globe,
    title: 'Web Development',
    tagline: 'Pixel-perfect performance',
    desc: 'High-performance websites and web applications built with Next.js, React, and modern cloud infrastructure. We prioritize speed, accessibility, SEO, and scalability from day one.',
    deliverables: ['Next.js / React Application', 'Responsive Design (Mobile-first)', 'Performance Optimization', 'SEO Foundation', 'CMS Integration'],
    color: '#00D4FF',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    tagline: 'Apps users actually use',
    desc: 'Native and cross-platform mobile experiences for iOS and Android. We build apps that are fast, intuitive, and built to retain users — not just acquire them.',
    deliverables: ['React Native / Flutter App', 'App Store Submission', 'Push Notifications', 'Offline Support', 'Analytics Integration'],
    color: '#00F5A0',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    tagline: 'Growth that compounds',
    desc: 'Data-driven digital marketing strategies that grow your footprint and maximize ROI. We combine SEO, paid media, content, and conversion optimization into a unified growth engine.',
    deliverables: ['SEO Strategy & Implementation', 'Google & Meta Ads', 'Content Strategy', 'GA4 + Search Console Setup', 'Monthly Reporting Dashboard'],
    color: '#FFB800',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    tagline: 'Infrastructure that scales',
    desc: 'Enterprise-grade cloud architecture on AWS, GCP, or Azure. From initial setup to DevOps pipelines and cost optimization — we handle your entire cloud journey.',
    deliverables: ['Cloud Architecture Design', 'CI/CD Pipeline Setup', 'Security & Compliance', 'Cost Optimization', '24/7 Monitoring'],
    color: '#4F8EF7',
  },
  {
    icon: Layers,
    title: 'Enterprise Software',
    tagline: 'Software your team loves',
    desc: 'Custom ERP, CRM, and workflow automation solutions that transform how your team operates. We build tools that eliminate inefficiency and unlock productivity at scale.',
    deliverables: ['Custom ERP / CRM', 'Third-party Integrations', 'API Development', 'Data Migration', 'Staff Training & Docs'],
    color: '#FF4D6D',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="tag tag-cyan mb-6">Our Services</div>
        <h1 className="font-display font-extrabold text-6xl lg:text-8xl text-white leading-tight mb-8">
          Every Service. <br />
          <span className="gradient-text">One Mission.</span>
        </h1>
        <p className="font-body text-white/40 text-xl max-w-2xl leading-relaxed">
          Six core service pillars, each designed to deliver measurable outcomes. We don't do generic — every engagement is scoped, tailored, and executed with precision.
        </p>
      </section>

      {/* Services list */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto pb-24">
        <div className="space-y-6">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={i}
                className="glass rounded-xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Left */}
                  <div>
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-5"
                      style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}30` }}
                    >
                      <Icon size={26} style={{ color: svc.color }} />
                    </div>
                    <div className="tag mb-3" style={{ background: `${svc.color}10`, color: svc.color, border: `1px solid ${svc.color}20` }}>
                      {svc.tagline}
                    </div>
                    <h2 className="font-display font-bold text-3xl text-white">{svc.title}</h2>
                  </div>

                  {/* Middle */}
                  <div>
                    <p className="font-body text-white/45 leading-relaxed mb-6">{svc.desc}</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 font-display text-sm font-semibold" style={{ color: svc.color }}>
                      Get a Quote <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Right - Deliverables */}
                  <div className="rounded-lg p-6" style={{ background: `${svc.color}06`, border: `1px solid ${svc.color}15` }}>
                    <p className="font-mono text-xs text-white/30 mb-4 tracking-widest uppercase">What You Get</p>
                    <ul className="space-y-3">
                      {svc.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2.5">
                          <CheckCircle size={14} style={{ color: svc.color }} className="shrink-0" />
                          <span className="font-body text-white/60 text-sm">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

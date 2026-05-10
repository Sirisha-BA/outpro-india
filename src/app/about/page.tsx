import Link from 'next/link'
import { ArrowRight, Target, Eye, Heart, Award, Users, Globe, Zap } from 'lucide-react'

const values = [
  { icon: Target, title: 'Precision', desc: 'Every pixel, every line of code is deliberate. We obsess over details others overlook.' },
  { icon: Zap, title: 'Velocity', desc: 'Speed is a feature. We ship fast without cutting corners — agile at our core.' },
  { icon: Heart, title: 'Partnership', desc: 'Your success is our KPI. We think of ourselves as your digital growth partners.' },
  { icon: Globe, title: 'Scalability', desc: 'We build for where you\'re going, not just where you are today.' },
]

const team = [
  { name: 'Arjun Mehta', role: 'Founder & CEO', dept: 'Strategy', initials: 'AM', color: '#00D4FF' },
  { name: 'Nisha Patel', role: 'Head of Design', dept: 'Creative', initials: 'NP', color: '#7B2FBE' },
  { name: 'Kiran Rao', role: 'CTO', dept: 'Engineering', initials: 'KR', color: '#FFB800' },
  { name: 'Divya Iyer', role: 'Head of Marketing', dept: 'Growth', initials: 'DI', color: '#00F5A0' },
  { name: 'Sameer Joshi', role: 'Lead Developer', dept: 'Engineering', initials: 'SJ', color: '#FF4D6D' },
  { name: 'Preethi Nair', role: 'Client Success', dept: 'Ops', initials: 'PN', color: '#4F8EF7' },
]

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="tag tag-cyan mb-6">About Outpro.India</div>
        <h1 className="font-display font-extrabold text-6xl lg:text-8xl text-white leading-tight mb-8">
          Built to Build<br />
          <span className="gradient-text">Legends.</span>
        </h1>
        <div className="max-w-2xl">
          <p className="font-body text-white/50 text-xl leading-relaxed mb-6">
            Outpro.India was founded on a simple belief: Indian businesses deserve world-class digital infrastructure. We're not a vendor — we're a strategic partner in your growth story.
          </p>
          <p className="font-body text-white/35 text-base leading-relaxed">
            Since 2020, we've helped 50+ enterprises across FinTech, HealthTech, Retail, and Legal sectors transform their digital presence into measurable competitive advantages.
          </p>
        </div>
      </section>

      <div className="section-divider mx-16" />

      {/* Mission / Vision / Values */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Target,
              label: 'Mission',
              color: '#00D4FF',
              text: 'To empower Indian enterprises with globally competitive digital experiences that drive measurable growth, foster trust, and create lasting impact.',
            },
            {
              icon: Eye,
              label: 'Vision',
              color: '#7B2FBE',
              text: 'To become India\'s most trusted digital transformation partner — where every project we touch becomes a benchmark for excellence.',
            },
            {
              icon: Heart,
              label: 'Values',
              color: '#FFB800',
              text: 'Precision over speed. Partnership over transactions. Long-term thinking over short-term wins. We do right by our clients, always.',
            },
          ].map(({ icon: Icon, label, color, text }) => (
            <div key={label} className="glass rounded-lg p-8 border-gradient">
              <div className="w-12 h-12 rounded-md flex items-center justify-center mb-6" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                <Icon size={22} style={{ color }} />
              </div>
              <h3 className="font-display font-bold text-white text-2xl mb-4">{label}</h3>
              <p className="font-body text-white/40 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Our Values detail */}
        <div className="mb-16">
          <h2 className="font-display font-extrabold text-4xl text-white mb-10">
            What Drives <span className="gradient-text-cyan">Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass rounded-lg p-6 card-hover group">
                <Icon size={20} className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-display font-semibold text-white text-lg mb-2">{title}</h4>
                <p className="font-body text-white/35 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-16" />

      {/* Team */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="tag tag-gold mb-4">The Team</div>
          <h2 className="font-display font-extrabold text-5xl text-white">
            Meet the <span className="gradient-text">Builders</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {team.map((member) => (
            <div key={member.name} className="glass rounded-lg p-6 text-center card-hover group">
              <div
                className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center font-display font-bold text-white text-lg"
                style={{ background: `${member.color}20`, border: `1px solid ${member.color}40` }}
              >
                {member.initials}
              </div>
              <p className="font-display font-semibold text-white text-sm mb-1">{member.name}</p>
              <p className="font-body text-white/40 text-xs mb-2">{member.role}</p>
              <span className="tag" style={{ background: `${member.color}10`, color: member.color, border: `1px solid ${member.color}20` }}>
                {member.dept}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="glass rounded-2xl p-12 text-center border-gradient">
          <h2 className="font-display font-extrabold text-4xl text-white mb-4">Want to Join the Team?</h2>
          <p className="font-body text-white/40 mb-8">We're always looking for exceptional talent. Send your portfolio our way.</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}

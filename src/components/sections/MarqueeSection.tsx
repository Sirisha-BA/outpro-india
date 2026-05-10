const items = [
  'UI/UX Design',
  'Web Development',
  'Brand Strategy',
  'Digital Marketing',
  'Cloud Solutions',
  'Data Analytics',
  'Mobile Apps',
  'SEO Optimization',
  'E-Commerce',
  'Enterprise Software',
]

export default function MarqueeSection() {
  return (
    <div className="py-6 overflow-hidden border-y border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark z-10 pointer-events-none" />
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6 whitespace-nowrap">
            <span className="font-display font-semibold text-white/20 text-sm tracking-widest uppercase">
              {item}
            </span>
            <span className="text-cyan-400 text-lg">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}

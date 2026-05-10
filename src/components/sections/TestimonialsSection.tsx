const testimonials = [
  {
    quote: "Outpro.India transformed our digital presence completely. Our website now converts 3x better, and their team was extraordinary throughout the process. They don't just build websites — they build growth engines.",
    name: "Priya Sharma",
    title: "CEO, NovaPay Financial",
    initials: "PS",
    color: '#00D4FF',
    stars: 5,
  },
  {
    quote: "The attention to detail in design is unmatched. They took our vague vision and turned it into a stunning brand identity. Every interaction with their team was professional, swift, and genuinely impressive.",
    name: "Rahul Menon",
    title: "Founder, GreenLeaf India",
    initials: "RM",
    color: '#7B2FBE',
    stars: 5,
  },
  {
    quote: "Our HealthCore dashboard was delivered ahead of schedule and over-delivered on every promise. The system handles 3 million patients daily without a hiccup. Absolute rockstars.",
    name: "Dr. Ananya Krishnan",
    title: "CTO, HealthCore Systems",
    initials: "AK",
    color: '#FFB800',
    stars: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <div className="tag tag-gold mb-4 mx-auto w-fit">Testimonials</div>
        <h2 className="font-display font-extrabold text-5xl lg:text-6xl text-white">
          Clients <span className="gradient-text">Love Us</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="glass rounded-lg p-8 card-hover relative group">
            {/* Quote mark */}
            <div
              className="font-display text-8xl leading-none font-extrabold absolute top-4 right-6 opacity-10 group-hover:opacity-20 transition-opacity"
              style={{ color: t.color }}
            >
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(t.stars)].map((_, j) => (
                <span key={j} className="text-amber-400 text-sm">★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="font-body text-white/60 text-sm leading-relaxed mb-8 relative">
              "{t.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-white"
                style={{ background: `${t.color}30`, border: `1px solid ${t.color}40` }}
              >
                {t.initials}
              </div>
              <div>
                <p className="font-display font-semibold text-white text-sm">{t.name}</p>
                <p className="font-body text-white/30 text-xs">{t.title}</p>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: `linear-gradient(90deg, transparent, ${t.color}50, transparent)` }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

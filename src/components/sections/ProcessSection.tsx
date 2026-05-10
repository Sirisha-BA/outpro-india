const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'Deep-dive workshops to understand your business, goals, audience, and competitive landscape. We map the path to digital dominance.',
  },
  {
    num: '02',
    title: 'Design & Prototype',
    desc: 'Pixel-perfect Figma designs with interactive prototypes. You see exactly what you\'re getting before a single line of code is written.',
  },
  {
    num: '03',
    title: 'Develop & Test',
    desc: 'Agile sprints with weekly demos. Rigorous QA across devices, browsers, and screen sizes. Performance-first engineering.',
  },
  {
    num: '04',
    title: 'Launch & Scale',
    desc: 'Seamless deployment on your chosen cloud. Ongoing performance monitoring, analytics, and iterative improvements post-launch.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <div className="tag tag-gold mb-4 mx-auto w-fit">How We Work</div>
        <h2 className="font-display font-extrabold text-5xl lg:text-6xl text-white">
          Our <span className="gradient-text">Process</span>
        </h2>
      </div>

      <div className="relative">
        {/* Connecting line */}
        <div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent hidden lg:block" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative glass rounded-lg p-8 group card-hover">
              {/* Number */}
              <div className="font-mono text-5xl font-bold text-white/5 absolute top-4 right-6 group-hover:text-cyan-400/10 transition-colors">
                {step.num}
              </div>

              {/* Step indicator */}
              <div className="w-10 h-10 rounded-full border border-cyan-400/30 flex items-center justify-center mb-6 group-hover:border-cyan-400/60 group-hover:bg-cyan-400/5 transition-all">
                <span className="font-mono text-cyan-400 text-xs font-bold">{step.num}</span>
              </div>

              <h3 className="font-display font-bold text-white text-lg mb-3">{step.title}</h3>
              <p className="font-body text-white/35 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

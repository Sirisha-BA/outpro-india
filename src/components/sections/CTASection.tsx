import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden border border-white/5 p-12 lg:p-20 text-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/50 via-brand-darker to-violet-950/50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-3xl" />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 tag tag-cyan mb-6">
            <Zap size={12} />
            Let's Build Something Great
          </div>

          <h2 className="font-display font-extrabold text-5xl lg:text-7xl text-white mb-6 leading-tight">
            Ready to <span className="gradient-text">Dominate</span>
            <br />Your Market?
          </h2>

          <p className="font-body text-white/40 text-lg max-w-2xl mx-auto mb-10">
            Join 50+ businesses that trusted Outpro.India to build their digital future. Your transformation starts with one conversation.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-3 text-base px-10">
              Start Your Project Today
              <ArrowRight size={18} />
            </Link>
            <Link href="/portfolio" className="btn-outline inline-flex items-center gap-3 text-base px-8">
              See Our Work First
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
            {[
              '✓ Free Strategy Call',
              '✓ No Lock-in Contracts',
              '✓ 30-Day Guarantee',
              '✓ NDA Protected',
            ].map((item) => (
              <span key={item} className="font-body text-white/30 text-sm">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const services = ['Web Development', 'Brand & UI/UX Design', 'Mobile App', 'Digital Marketing', 'Cloud Solutions', 'Enterprise Software', 'Other']
const budgets = ['Under ₹5L', '₹5L – ₹15L', '₹15L – ₹50L', '₹50L+', 'Let\'s discuss']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="tag tag-cyan mb-6">Contact Us</div>
        <h1 className="font-display font-extrabold text-6xl lg:text-7xl text-white leading-tight mb-6">
          Let's Build <br />
          <span className="gradient-text">Together.</span>
        </h1>
        <p className="font-body text-white/40 text-lg max-w-xl leading-relaxed">
          Tell us about your project. We'll respond within 24 hours with a tailored strategy and clear next steps.
        </p>
      </section>

      <section className="px-6 lg:px-16 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {[
              { icon: Mail, label: 'Email Us', value: 'hello@outpro.india', sub: 'We reply within 24 hours', color: '#00D4FF' },
              { icon: Phone, label: 'Call Us', value: '+91 98765 43210', sub: 'Mon–Fri, 9 AM to 7 PM IST', color: '#7B2FBE' },
              { icon: MapPin, label: 'Visit Us', value: 'Bengaluru, Karnataka', sub: 'HSR Layout, 560102', color: '#FFB800' },
            ].map(({ icon: Icon, label, value, sub, color }) => (
              <div key={label} className="glass rounded-lg p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-md shrink-0 flex items-center justify-center" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="font-mono text-xs text-white/30 mb-1 tracking-wider uppercase">{label}</p>
                  <p className="font-display font-semibold text-white text-sm">{value}</p>
                  <p className="font-body text-white/30 text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            ))}

            <div className="glass rounded-lg p-6">
              <p className="font-display font-semibold text-white mb-4 text-sm">Our Guarantee</p>
              {['Free initial consultation', 'NDA on request', 'No lock-in contracts', 'Dedicated project manager'].map((item) => (
                <div key={item} className="flex items-center gap-2.5 mb-3">
                  <CheckCircle size={14} className="text-cyan-400 shrink-0" />
                  <span className="font-body text-white/40 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="glass rounded-xl p-16 text-center border-gradient">
                <div className="w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-cyan-400" />
                </div>
                <h2 className="font-display font-bold text-3xl text-white mb-3">Message Sent!</h2>
                <p className="font-body text-white/40">We'll reach out within 24 hours. Get ready to build something incredible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-xl p-8 lg:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: 'name', label: 'Full Name', placeholder: 'Priya Sharma', type: 'text' },
                    { name: 'email', label: 'Email Address', placeholder: 'priya@company.com', type: 'email' },
                    { name: 'company', label: 'Company', placeholder: 'Acme Corp', type: 'text' },
                  ].map((field) => (
                    <div key={field.name} className={field.name === 'company' ? 'md:col-span-2' : ''}>
                      <label className="font-mono text-xs text-white/30 tracking-widest uppercase block mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        value={(form as any)[field.name]}
                        onChange={e => setForm(f => ({ ...f, [field.name]: e.target.value }))}
                        className="w-full bg-white/3 border border-white/8 rounded-md px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-cyan-400/40 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                {/* Service select */}
                <div>
                  <label className="font-mono text-xs text-white/30 tracking-widest uppercase block mb-2">Service Needed</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, service: s }))}
                        className="font-body text-xs px-3 py-2 rounded-sm border transition-all"
                        style={form.service === s ? {
                          background: 'rgba(0,212,255,0.15)',
                          borderColor: 'rgba(0,212,255,0.5)',
                          color: '#00D4FF',
                        } : {
                          background: 'rgba(255,255,255,0.03)',
                          borderColor: 'rgba(255,255,255,0.08)',
                          color: 'rgba(255,255,255,0.4)',
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget select */}
                <div>
                  <label className="font-mono text-xs text-white/30 tracking-widest uppercase block mb-2">Budget Range</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, budget: b }))}
                        className="font-body text-xs px-3 py-2 rounded-sm border transition-all"
                        style={form.budget === b ? {
                          background: 'rgba(255,184,0,0.15)',
                          borderColor: 'rgba(255,184,0,0.5)',
                          color: '#FFB800',
                        } : {
                          background: 'rgba(255,255,255,0.03)',
                          borderColor: 'rgba(255,255,255,0.08)',
                          color: 'rgba(255,255,255,0.4)',
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-xs text-white/30 tracking-widest uppercase block mb-2">Project Details</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-white/3 border border-white/8 rounded-md px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-cyan-400/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-3 text-base py-4"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-brand-dark/40 border-t-brand-dark rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

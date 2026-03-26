'use client'
import { useState } from 'react'

const services = [
  'Mutual Fund Investment',
  'Tax Planning',
  'Insurance Planning',
  'Retirement Planning',
  'Risk Profiling',
  'Goal-Based Planning',
  'Not sure yet',
]

const ranges = [
  'Under ₹1 Lakh',
  '₹1L – ₹5L',
  '₹5L – ₹25L',
  '₹25L – ₹1 Crore',
  'Above ₹1 Crore',
  'Prefer not to say',
]

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxwfSSFmys083nIKAg9HvXPOJFl4EK96rM4Mn04zBzR48p38KuxsHClYMijrC9l_3cO/exec'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '',
    service: '', range: '', message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError]   = useState('')

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone) return

    console.log('Submitting to:', SHEET_URL)
    console.log('Form data:', form)

    setStatus('loading')
    setError('')

    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus('success')
      setForm({ name: '', email: '', phone: '', city: '', service: '', range: '', message: '' })
    } catch (err) {
      console.error('Submission error:', err)
      setStatus('error')
      setError('Something went wrong. Please try again or email us directly at support@synvestify.in')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8">
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6"
          style={{ background: 'rgba(37,99,235,0.10)' }}>
          ✅
        </div>
        <h3 className="font-serif text-[1.6rem] font-bold text-slate-900 mb-3">
          We&apos;ve received your enquiry!
        </h3>
        <p className="text-[.93rem] text-slate-500 leading-relaxed max-w-[360px] mb-8">
          Our team will reach out within 24 hours to schedule your free consultation.
        </p>
        <button onClick={() => setStatus('idle')}
          className="text-[.88rem] font-semibold text-accent hover:underline">
          Submit another enquiry →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[.76rem] font-semibold uppercase tracking-widest text-slate-500 mb-2">
            Full Name <span className="text-accent">*</span>
          </label>
          <input type="text" required placeholder="Rahul Sharma"
            value={form.name} onChange={e => set('name', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white text-[.92rem] text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label className="block text-[.76rem] font-semibold uppercase tracking-widest text-slate-500 mb-2">
            Email Address <span className="text-accent">*</span>
          </label>
          <input type="email" required placeholder="rahul@email.com"
            value={form.email} onChange={e => set('email', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white text-[.92rem] text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* Phone + City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[.76rem] font-semibold uppercase tracking-widest text-slate-500 mb-2">
            Phone Number <span className="text-accent">*</span>
          </label>
          <input type="tel" required placeholder="+91 98765 43210"
            value={form.phone} onChange={e => set('phone', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white text-[.92rem] text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label className="block text-[.76rem] font-semibold uppercase tracking-widest text-slate-500 mb-2">
            City
          </label>
          <input type="text" placeholder="New Delhi"
            value={form.city} onChange={e => set('city', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white text-[.92rem] text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label className="block text-[.76rem] font-semibold uppercase tracking-widest text-slate-500 mb-2">
          I&apos;m interested in
        </label>
        <div className="flex flex-wrap gap-2">
          {services.map(s => (
            <button key={s} type="button" onClick={() => set('service', s)}
              className={`text-[.8rem] font-medium px-3.5 py-2 rounded-lg border transition-all ${
                form.service === s
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-slate-600 border-brand-border hover:border-accent hover:text-accent'
              }`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Investment range */}
      <div>
        <label className="block text-[.76rem] font-semibold uppercase tracking-widest text-slate-500 mb-2">
          Investment Range
        </label>
        <div className="flex flex-wrap gap-2">
          {ranges.map(r => (
            <button key={r} type="button" onClick={() => set('range', r)}
              className={`text-[.8rem] font-medium px-3.5 py-2 rounded-lg border transition-all ${
                form.range === r
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-slate-600 border-brand-border hover:border-accent hover:text-accent'
              }`}>
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-[.76rem] font-semibold uppercase tracking-widest text-slate-500 mb-2">
          Anything else you&apos;d like us to know?
        </label>
        <textarea rows={4}
          placeholder="Tell us about your financial goals, current investments, or any specific questions..."
          value={form.message} onChange={e => set('message', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white text-[.92rem] text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <p className="text-[.84rem] text-red-500 bg-red-50 px-4 py-3 rounded-xl">{error}</p>
      )}

      {/* Submit */}
      <button type="submit" disabled={status === 'loading'}
        className="w-full bg-navy text-white font-semibold text-[.95rem] py-4 rounded-xl hover:bg-navy-mid transition-all hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
        {status === 'loading' ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Sending...
          </>
        ) : (
          'Book Free Consultation →'
        )}
      </button>

      <p className="text-center text-[.76rem] text-slate-400">
        We typically respond within 24 hours. Your data is never shared with third parties.
      </p>

    </form>
  )
}
const info = [
  {
    icon: '📧',
    label: 'Email Us',
    value: 'support@synvestify.in',
    href: 'mailto:support@synvestify.in',
  },
  {
    icon: '📞',
    label: 'Call Us',
    value: '+91-9599698871',
    href: 'tel:+919599698871',
  },
  {
    icon: '📍',
    label: 'Office',
    value: '14-F Nivedita Enclave A-6,\nPaschim Vihar, New Delhi – 110063',
    href: 'https://maps.google.com/?q=Paschim+Vihar+New+Delhi',
  },
  {
    icon: '🕐',
    label: 'Hours',
    value: 'Mon – Sat: 10am – 7pm IST\nSun: By appointment only',
    href: null,
  },
]

const faqs = [
  { q: 'Is the consultation really free?',         a: 'Yes — completely. No obligation, no hard sell.' },
  { q: 'How soon will you get back to me?',        a: 'Within 24 hours on business days.' },
  { q: 'Do you serve NRI clients?',                a: 'Yes — USA, UK, Canada, and more.' },
  { q: 'What should I prepare before the call?',  a: 'Nothing formal. Just your goals and any questions you have.' },
]

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">

      {/* Contact details */}
      <div className="rounded-2xl overflow-hidden border border-brand-border">
        <div className="p-6" style={{ background: '#1E3A8A' }}>
          <h3 className="font-serif text-[1.15rem] font-semibold text-white mb-1">
            Get in touch
          </h3>
          <p className="text-[.82rem] text-white/45 leading-relaxed">
            Prefer to reach out directly? We&apos;re available across all channels.
          </p>
        </div>
        <div className="bg-white divide-y divide-brand-border">
          {info.map(({ icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-4 px-6 py-4">
              <span className="text-lg flex-shrink-0 mt-0.5">{icon}</span>
              <div>
                <div className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400 mb-1">
                  {label}
                </div>
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-[.88rem] font-medium text-slate-800 hover:text-accent transition-colors whitespace-pre-line">
                    {value}
                  </a>
                ) : (
                  <p className="text-[.88rem] font-medium text-slate-800 whitespace-pre-line">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick FAQs */}
      <div className="rounded-2xl border border-brand-border bg-brand-soft p-6">
        <h3 className="font-serif text-[1rem] font-semibold text-slate-900 mb-4">
          Quick answers
        </h3>
        <div className="flex flex-col gap-4">
          {faqs.map(({ q, a }) => (
            <div key={q}>
              <p className="text-[.84rem] font-semibold text-slate-800 mb-1">{q}</p>
              <p className="text-[.8rem] text-slate-500 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Client login */}
      <div className="rounded-2xl border border-brand-border bg-white p-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-[.88rem] font-semibold text-slate-900 mb-1">Existing client?</p>
          <p className="text-[.78rem] text-slate-400">Log in to track your portfolio.</p>
        </div>
        <a href="https://www.ifaplanet.com/login.php" target="_blank" rel="noopener noreferrer"
          className="flex-shrink-0 text-[.84rem] font-semibold px-5 py-2.5 rounded-xl bg-navy text-white hover:bg-navy-mid transition-all">
          Client Login →
        </a>
      </div>

    </div>
  )
}

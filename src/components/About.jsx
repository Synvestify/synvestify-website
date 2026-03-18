const pillars = [
  { n: '01', t: 'Risk Profiling Before Everything', d: 'We assess your risk, income & goals before recommending.' },
  { n: '02', t: 'Goal-Mapped Investing',            d: 'Every rupee tied to a specific, measurable goal with a clear timeline.' },
  { n: '03', t: 'Zero Conflict of Interest',        d: 'We distribute, not sell. Never influenced by product commissions.' },
]

export default function About() {
  return (
    <section className="py-24" id="about">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="reveal grid grid-cols-1 lg:grid-cols-2 rounded-[20px] overflow-hidden border border-brand-border">

          {/* Left — white */}
          <div className="p-14 bg-white">
            <span className="inline-block text-[.65rem] font-semibold uppercase tracking-[.16em] text-accent bg-accent/8 px-3 py-1 rounded-full mb-4">
              Our Philosophy
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-bold text-slate-900 leading-[1.2] mb-4">
              Advice built on honesty,<br />not incentives
            </h2>
            <p className="text-[.92rem] text-slate-600 leading-[1.85] mb-4">
              Synvestify operates on a pure distribution model. We recommend mutual funds and
              insurance products based entirely on your financial profile — not on what pays us more.
            </p>
            <p className="text-[.92rem] text-slate-600 leading-[1.85] mb-4">
              Every engagement starts with a comprehensive risk profiling session. Only then do we
              recommend anything — because the right investment fits <em>your</em> life, not a generic template.
            </p>
            <p className="text-[.92rem] text-slate-400 leading-[1.85]">
              Proudly serving investors across India, USA, UK &amp; Canada since 2018.
            </p>
          </div>

          {/* Right — navy */}
          <div className="p-14 relative overflow-hidden" style={{ background: '#1E3A8A' }}>
            <div className="absolute w-[280px] h-[280px] rounded-full pointer-events-none"
              style={{ background: 'rgba(37,99,235,0.20)', top: '-80px', right: '-80px' }} />
            <div className="absolute w-[140px] h-[140px] rounded-full pointer-events-none"
              style={{ background: 'rgba(96,165,250,0.10)', bottom: '-40px', left: '-30px' }} />

            <p className="relative z-10 font-serif text-[1.28rem] font-semibold text-white leading-[1.6] mb-3 opacity-100">
              &quot;The best investment a client can make is in an advisor who has{' '}
              <em className="italic text-accent-pale">no reason to lie to them.</em>&quot;
            </p>
            <p className="relative z-10 text-[.68rem] font-medium uppercase tracking-[.12em] text-white mb-8">
              — Synvestify&apos;s Core Belief
            </p>

            <div className="relative z-10 flex flex-col">
              {pillars.map(({ n, t, d }, i) => (
                <div key={n} className={`flex gap-3.5 py-4 ${i === 0 ? 'border-t' : ''} border-b border-white/7`}>
                  <span className="font-sans text-[1.05rem] text-accent-pale min-w-[22px] flex-shrink-0 mt-0.5" style={{fontFamily: 'Inter, sans-serif'}}>{n}</span>
                  <div>
                    <div className="text-[.84rem] font-semibold text-white mb-1">{t}</div>
                    <div className="text-[.77rem] text-white/80 leading-relaxed">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

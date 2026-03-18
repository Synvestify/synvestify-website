const values = [
  {
    icon: '⚖️',
    title: 'Pure Distribution Model',
    desc: 'We earn through distribution commissions from AMCs — never by pushing products that benefit us over you. Every recommendation is dictated by your financial profile alone.',
  },
  {
    icon: '🎯',
    title: 'Goal-First Approach',
    desc: 'Before recommending any fund or policy, we map your specific life goals — retirement, education, home, or freedom. Every rupee has a purpose.',
  },
  {
    icon: '🔍',
    title: 'Risk Profiling Before Everything',
    desc: 'We conduct a thorough assessment of your risk tolerance, investment horizon, and income before making any recommendation. No shortcuts.',
  },
  {
    icon: '🌏',
    title: 'Pan-India & NRI Friendly',
    desc: 'Whether you are in Delhi or Dubai, Bengaluru or Boston — we serve investors across India, USA, UK, and Canada with the same level of care.',
  },
  {
    icon: '📊',
    title: 'Research-Backed Decisions',
    desc: 'Every fund recommendation is backed by thorough research — performance history, fund manager track record, expense ratios, and risk metrics.',
  },
  {
    icon: '🤝',
    title: 'Long-Term Partnership',
    desc: 'We are not a one-time advisor. We grow with you — reviewing portfolios, adjusting strategies, and staying by your side through every market cycle.',
  },
]

export default function AboutValues() {
  return (
    <section className="py-24 bg-brand-soft" id="values">
      <div className="max-w-[1160px] mx-auto px-8">

        <div className="reveal text-center mb-14">
          <span className="inline-block text-[.65rem] font-semibold uppercase tracking-[.16em] text-accent bg-accent/8 px-3 py-1 rounded-full">
            What We Stand For
          </span>
          <h2 className="font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-bold text-slate-900 leading-[1.2] mt-3 max-w-[440px] mx-auto">
            Principles that guide<br />every decision we make
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map(({ icon, title, desc }) => (
            <div key={title}
              className="reveal bg-white border border-brand-border rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <div className="text-2xl mb-4">{icon}</div>
              <h3 className="font-serif text-[1.05rem] font-semibold text-slate-900 mb-3 leading-snug">{title}</h3>
              <p className="text-[.84rem] text-slate-500 leading-[1.78]">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

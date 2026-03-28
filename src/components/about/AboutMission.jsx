export default function AboutMission() {
  return (
    <section className="py-24" id="mission">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — text */}
          <div className="reveal">
            <span className="inline-block text-[.65rem] font-semibold uppercase tracking-[.16em] text-accent bg-accent/8 px-3 py-1 rounded-full">
              Our Mission
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-bold text-slate-900 leading-[1.2] mt-3 mb-6">
              Democratizing access to<br />unbiased financial advice
            </h2>
            <p className="text-[.93rem] text-slate-600 leading-[1.85] mb-5">
              In India, financial advice has long been synonymous with product selling. Advisors
              push high-commission insurance plans and NFOs not because they are the best choice
              for clients, but because they pay the most.
            </p>
            <p className="text-[.93rem] text-slate-600 leading-[1.85] mb-5">
              Synvestify was built to challenge that. We operate as a registered mutual fund
              distributor and insurance advisor — which means our income comes from AMCs and
              insurers, not from inflating your costs or hiding charges.
            </p>
            <p className="text-[.93rem] text-slate-600 leading-[1.85]">
              Our mission is simple: make honest, research-backed financial guidance accessible
              to every Indian household — whether you earn ₹30,000 a month or manage a ₹5 crore portfolio.
            </p>
          </div>

          {/* Right — stats card */}
          <div className="reveal">
            <div className="rounded-2xl overflow-hidden border border-brand-border">
              {/* Top — navy */}
              <div className="p-8 relative overflow-hidden" style={{ background: '#1E3A8A' }}>
                <div className="absolute w-[200px] h-[200px] rounded-full pointer-events-none"
                  style={{ background: 'rgba(37,99,235,0.20)', top: '-60px', right: '-60px' }} />
                <p className="relative z-10 font-serif text-[1.1rem] text-white leading-[1.6]">
                  &quot;We believe the best financial plan is the one that lets you sleep at night —
                  not the one that earns us the most.&quot;
                </p>
              </div>

              {/* Bottom — stats grid */}
              <div className="grid grid-cols-2 bg-white">
                {[
                  { n: '100+',   l: 'Happy Clients' },
                  { n: '₹7Cr+', l: 'Assets Under Management' },
                  { n: '4',      l: 'Countries Served' },
                  { n: '2018',   l: 'Founded' },
                ].map(({ n, l }, i) => (
                  <div key={l}
                    className={`px-7 py-6
                      ${i % 2 === 0 ? 'border-r border-brand-border' : ''}
                      ${i < 2 ? 'border-b border-brand-border' : ''}`}>
                    <div className="font-sans text-[2rem] font-bold text-slate-900 leading-none" style={{fontFamily: 'Inter, sans-serif'}}>{n}</div>
                    <div className="text-[.7rem] font-medium text-slate-400 uppercase tracking-widest mt-2">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

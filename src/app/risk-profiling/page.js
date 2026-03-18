import Navbar        from '@/components/Navbar'
import Footer        from '@/components/Footer'
import ScrollReveal  from '@/components/ScrollReveal'
import RiskProfiler  from '@/components/risk/RiskProfiler'

export const metadata = {
  title: 'Risk Profiling — Synvestify',
  description: 'Discover your investor risk profile in 3 minutes. Answer 8 questions and get a personalized investment recommendation — free, no signup required.',
}

export default function RiskProfilingPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>

        {/* Hero */}
        <section className="pt-[66px] bg-dark relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
          <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.16), transparent 65%)', top: '-100px', right: '-80px' }} />

          <div className="relative z-10 max-w-[1160px] mx-auto px-8 py-20">
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-7 h-[1.5px] bg-accent-light" />
              <span className="text-[.97rem] text-white/50 leading-[1.82] max-w-[460px]">
                Know Yourself First
              </span>
            </div>
            <h1 className="font-serif text-[clamp(2.4rem,4vw,3.4rem)] font-bold text-white leading-[1.1] mb-5 max-w-[560px]">
              What kind of investor<br />
              <em className="italic text-accent-pale">are you?</em>
            </h1>
            <p className="text-[.97rem] text-white/50 leading-[1.82] max-w-[480px]">
              No two investors are alike. Before we recommend a single fund, we need to understand
              your goals, income, and comfort with risk. This assessment helps us do exactly that.
            </p>
          </div>
        </section>

        {/* Profiler */}
        <section className="py-8 bg-brand-soft">
          <div className="max-w-[1160px] mx-auto px-8">
            <RiskProfiler />
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-16">
          <div className="max-w-[1160px] mx-auto px-8">
            <div className="reveal text-center mb-12">
              <span className="inline-block text-[.65rem] font-semibold uppercase tracking-[.16em] text-accent bg-accent/8 px-3 py-1 rounded-full">
                Why This Matters
              </span>
              <h2 className="font-serif text-[clamp(1.9rem,3vw,2.4rem)] font-bold text-slate-900 leading-[1.2] mt-3 max-w-[480px] mx-auto">
                The right investment starts with knowing yourself
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: '🎯', title: 'Avoid Mismatched Investments', desc: 'Investing beyond your risk tolerance leads to panic selling at market lows — destroying long-term returns. Knowing your profile prevents this.' },
                { icon: '😴', title: 'Sleep Better at Night', desc: 'When your portfolio matches your risk appetite, you stay calm during market corrections instead of making emotional decisions.' },
                { icon: '📈', title: 'Stay Invested Longer', desc: 'Investors who understand their risk profile are more likely to stay the course through volatility — and benefit from compounding over time.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="reveal bg-brand-soft border border-brand-border rounded-2xl p-7">
                  <div className="text-2xl mb-4">{icon}</div>
                  <h3 className="font-serif text-[1.05rem] font-semibold text-slate-900 mb-3">{title}</h3>
                  <p className="text-[.84rem] text-slate-500 leading-[1.78]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

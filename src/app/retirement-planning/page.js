import Navbar                  from '@/components/Navbar'
import Footer                  from '@/components/Footer'
import CTA                     from '@/components/CTA'
import ScrollReveal            from '@/components/ScrollReveal'
import RetirementCalculator    from '@/components/retirement/RetirementCalculator'
import ThreeBucketStrategy     from '@/components/retirement/ThreeBucketStrategy'

export const metadata = {
  title: 'Retirement Planning — Synvestify',
  description: 'Calculate your retirement corpus, discover your FIRE number, and learn the 3 Bucket Strategy for a stress-free retirement.',
}

const phases = [
  { icon: '🌱', title: 'Accumulation Phase',  desc: 'Age 25–50. Build your corpus aggressively through equity SIPs, ELSS, and goal-based investing. Time is your biggest asset — compounding works best here.' },
  { icon: '🌿', title: 'Consolidation Phase', desc: 'Age 50–60. Gradually shift from high-risk equity to balanced and debt funds. Protect the wealth you\'ve built while continuing to grow it.' },
  { icon: '🌳', title: 'Distribution Phase',  desc: 'Age 60+. Deploy the 3 Bucket Strategy. Your corpus is now your income engine — designed to last your entire lifetime without running out.' },
]

export default function RetirementPlanningPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>

        {/* Hero */}
        <section className="pt-[66px] bg-dark relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
          <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.16), transparent 65%)', top: '-150px', right: '-100px' }} />

          <div className="relative z-10 max-w-[1160px] mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2.5 mb-8">
                <div className="w-7 h-[1.5px] bg-accent-light" />
                <span className="text-[.68rem] font-semibold tracking-[.2em] uppercase text-white/38">
                  Retirement Planning
                </span>
              </div>
              <h1 className="font-serif text-[clamp(2.6rem,4vw,3.6rem)] font-bold text-white leading-[1.1] mb-6">
                Retire on your terms,<br />
                <em className="italic text-accent-pale">not the market's.</em>
              </h1>
              <p className="text-[.97rem] text-white/50 leading-[1.82] max-w-[460px]">
                A successful retirement doesn't happen by accident. It's the result of knowing your
                number, starting early, and following a strategy that protects your wealth while
                making it last a lifetime.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '₹5Cr+',  l: 'Avg retirement corpus needed\nfor a comfortable retirement' },
                { n: '30 yrs', l: 'Average retirement duration\npeople plan for' },
                { n: '6–8%',   l: 'Inflation erodes your\npurchasing power annually' },
                { n: 'Day 1',  l: 'Best time to start\nplanning your retirement' },
              ].map(({ n, l }) => (
                <div key={n} className="rounded-2xl p-5"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="font-serif text-[1.7rem] font-bold text-white mb-2">{n}</div>
                  <div className="text-[.72rem] text-white/35 leading-relaxed whitespace-pre-line">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phases */}
        <section className="py-20">
          <div className="max-w-[1160px] mx-auto px-8">
            <div className="reveal text-center mb-12">
              <span className="inline-block text-[.65rem] font-semibold uppercase tracking-[.16em] text-accent bg-accent/8 px-3 py-1 rounded-full">
                The Journey
              </span>
              <h2 className="font-serif text-[clamp(1.9rem,3vw,2.4rem)] font-bold text-slate-900 leading-[1.2] mt-3">
                Three phases of retirement planning
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {phases.map(({ icon, title, desc }) => (
                <div key={title} className="reveal bg-brand-soft border border-brand-border rounded-2xl p-7">
                  <div className="text-3xl mb-4">{icon}</div>
                  <h3 className="font-serif text-[1.05rem] font-semibold text-slate-900 mb-3">{title}</h3>
                  <p className="text-[.84rem] text-slate-500 leading-[1.78]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-20 bg-brand-soft" id="calculator">
          <div className="max-w-[1160px] mx-auto px-8">
            <div className="reveal text-center mb-12">
              <span className="inline-block text-[.65rem] font-semibold uppercase tracking-[.16em] text-accent bg-accent/8 px-3 py-1 rounded-full">
                Retirement Calculator
              </span>
              <h2 className="font-serif text-[clamp(1.9rem,3vw,2.4rem)] font-bold text-slate-900 leading-[1.2] mt-3">
                Find your retirement number
              </h2>
              <p className="text-[.92rem] text-slate-400 mt-3 max-w-[480px] mx-auto leading-relaxed">
                How much do you need to retire comfortably? How much should you invest every month?
                Find out in seconds.
              </p>
            </div>
            <RetirementCalculator />
          </div>
        </section>

        {/* 3 Bucket Strategy */}
        <section className="py-20" id="bucket-strategy">
          <div className="max-w-[1160px] mx-auto px-8">
            <div className="reveal text-center mb-14">
              <span className="inline-block text-[.65rem] font-semibold uppercase tracking-[.16em] text-accent bg-accent/8 px-3 py-1 rounded-full">
                Withdrawal Strategy
              </span>
              <h2 className="font-serif text-[clamp(1.9rem,3vw,2.4rem)] font-bold text-slate-900 leading-[1.2] mt-3">
                The 3 Bucket Strategy
              </h2>
              <p className="text-[.92rem] text-slate-400 mt-3 max-w-[540px] mx-auto leading-relaxed">
                The most effective way to manage retirement withdrawals. Divide your corpus into
                three buckets based on time horizon — so you always have cash when you need it
                and growth when you don't.
              </p>
            </div>
            <ThreeBucketStrategy />
          </div>
        </section>

        {/* Why start early */}
        <section className="py-20 bg-brand-soft">
          <div className="max-w-[1160px] mx-auto px-8">
            <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-[.65rem] font-semibold uppercase tracking-[.16em] text-accent bg-accent/8 px-3 py-1 rounded-full">
                  The Power of Starting Early
                </span>
                <h2 className="font-serif text-[clamp(1.9rem,3vw,2.4rem)] font-bold text-slate-900 leading-[1.2] mt-3 mb-6">
                  Time is your most valuable asset
                </h2>
                <p className="text-[.93rem] text-slate-600 leading-[1.85] mb-5">
                  Two investors both want ₹5 Crore at retirement. Investor A starts at 25,
                  Investor B starts at 35. Assuming 12% returns — Investor A needs a ₹4,000/month
                  SIP. Investor B needs ₹13,000/month. Same goal, same returns — but 10 years
                  makes a 3x difference in monthly investment.
                </p>
                <p className="text-[.93rem] text-slate-600 leading-[1.85]">
                  The earlier you start, the less you need to invest monthly. Compounding rewards
                  patience above all else — start today, even if it's small.
                </p>
              </div>

              {/* Comparison table */}
              <div className="reveal rounded-2xl overflow-hidden border border-brand-border">
                <div className="px-6 py-4" style={{ background: '#1E3A8A' }}>
                  <p className="font-serif text-[1rem] font-semibold text-white">
                    Starting at 25 vs 35 — to reach ₹5 Crore
                  </p>
                  <p className="text-[.74rem] text-white/40 mt-1">Assuming 12% annual returns, retire at 60</p>
                </div>
                <div className="bg-white">
                  <div className="grid grid-cols-3 px-6 py-3 border-b border-brand-border">
                    <span className="text-[.72rem] font-semibold uppercase tracking-widest text-slate-400"></span>
                    <span className="text-[.72rem] font-semibold uppercase tracking-widest text-accent text-center">Start at 25</span>
                    <span className="text-[.72rem] font-semibold uppercase tracking-widest text-slate-400 text-center">Start at 35</span>
                  </div>
                  {[
                    ['Years to invest',    '35 years',      '25 years'],
                    ['Monthly SIP needed', '~₹4,000',       '~₹13,000'],
                    ['Total invested',     '~₹16.8 Lakh',   '~₹39 Lakh'],
                    ['Corpus at 60',       '₹5 Crore',      '₹5 Crore'],
                    ['Gains from market',  '~₹4.83 Crore',  '~₹4.61 Crore'],
                  ].map(([label, a, b], i) => (
                    <div key={label}
                      className={`grid grid-cols-3 px-6 py-3.5 ${i < 4 ? 'border-b border-brand-border' : ''}`}>
                      <span className="text-[.82rem] text-slate-500">{label}</span>
                      <span className="text-[.88rem] font-semibold text-accent text-center">{a}</span>
                      <span className="text-[.88rem] font-semibold text-slate-500 text-center">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA />

      </main>
      <Footer />
    </>
  )
}

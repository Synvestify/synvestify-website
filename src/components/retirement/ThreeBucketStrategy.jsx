'use client'
import { useState } from 'react'

const buckets = [
  {
    number: '01',
    name: 'Bucket 1',
    label: 'Liquidity Bucket',
    horizon: '0 – 2 Years',
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.07)',
    border: 'rgba(37,99,235,0.20)',
    icon: '🛡️',
    purpose: 'Covers your immediate living expenses. This money should never be invested in volatile assets — it needs to be accessible at any time without market risk.',
    allocation: '10 – 15% of corpus',
    instruments: [
      'Savings Account',
      'Liquid Mutual Funds',
      'Short-Term Fixed Deposits',
      'Overnight Funds',
    ],
    goal: 'Capital preservation + immediate liquidity',
    tip: 'Keep 1–2 years of living expenses here. When markets fall, you live off this bucket — so you never need to sell your equity investments at a loss.',
  },
  {
    number: '02',
    name: 'Bucket 2',
    label: 'Income Bucket',
    horizon: '2 – 10 Years',
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.07)',
    border: 'rgba(99,102,241,0.20)',
    icon: '📊',
    purpose: 'Generates steady income to refill Bucket 1 as it gets depleted. Moderate risk, stable returns. This is the engine that keeps your retirement income flowing.',
    allocation: '40 – 50% of corpus',
    instruments: [
      'Debt Mutual Funds',
      'Corporate Bonds',
      'Senior Citizens Savings Scheme (SCSS)',
      'Post Office Monthly Income Scheme',
      'Conservative Hybrid Funds',
      'RBI Floating Rate Bonds',
    ],
    goal: 'Steady income generation with low volatility',
    tip: 'As Bucket 1 depletes over 1–2 years, Bucket 2 refills it. Think of it as your income pipeline — steady, predictable, and low-risk.',
  },
  {
    number: '03',
    name: 'Bucket 3',
    label: 'Growth Bucket',
    horizon: '10+ Years',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.07)',
    border: 'rgba(16,185,129,0.20)',
    icon: '🚀',
    purpose: 'Fights inflation over the long term. This bucket stays invested in equity for 10+ years, growing your wealth to ensure your money lasts your entire retirement.',
    allocation: '35 – 50% of corpus',
    instruments: [
      'Equity Mutual Funds (Large Cap / Flexi Cap)',
      'Index Funds (Nifty 50, Nifty Next 50)',
      'International Equity Funds',
      'REITs & InvITs',
      'Dividend-Paying Stocks',
    ],
    goal: 'Long-term inflation-beating growth',
    tip: 'You never touch this bucket for at least 10 years. Market crashes don\'t scare you — because Bucket 1 and 2 cover your near-term needs. Time is your biggest asset here.',
  },
]

export default function ThreeBucketStrategy() {
  const [active, setActive] = useState(0)
  const bucket = buckets[active]

  return (
    <div>
      {/* How it flows */}
      <div className="reveal mb-14">
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 max-w-[760px] mx-auto">
          {buckets.map((b, i) => (
            <div key={b.number} className="flex flex-col md:flex-row items-center flex-1">
              <button
                onClick={() => setActive(i)}
                className={`w-full md:w-auto flex flex-col items-center text-center px-6 py-5 rounded-2xl border-2 transition-all duration-200 ${
                  active === i
                    ? 'scale-105 shadow-md'
                    : 'hover:scale-102 opacity-70 hover:opacity-100'
                }`}
                style={{
                  borderColor: active === i ? b.color : 'transparent',
                  background: active === i ? b.bg : 'white',
                  border: `2px solid ${active === i ? b.color : '#DBEAFE'}`,
                }}>
                <span className="text-2xl mb-2">{b.icon}</span>
                <span className="text-[.68rem] font-semibold uppercase tracking-widest mb-1"
                  style={{ color: b.color }}>{b.name}</span>
                <span className="font-serif text-[.95rem] font-semibold text-slate-900">{b.label}</span>
                <span className="text-[.72rem] text-slate-400 mt-1">{b.horizon}</span>
              </button>

              {/* Arrow between buckets */}
              {i < buckets.length - 1 && (
                <div className="hidden md:flex flex-col items-center px-3">
                  <div className="text-slate-300 text-[1.2rem]">→</div>
                  <div className="text-[.6rem] text-slate-300 mt-0.5">refills</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      <div className="reveal grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">

        {/* Left */}
        <div className="rounded-2xl p-8 border-2 transition-all duration-300"
          style={{ background: bucket.bg, borderColor: bucket.border }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">{bucket.icon}</span>
            <div>
              <div className="text-[.68rem] font-semibold uppercase tracking-widest" style={{ color: bucket.color }}>
                {bucket.name} · {bucket.horizon}
              </div>
              <h3 className="font-serif text-[1.3rem] font-bold text-slate-900">{bucket.label}</h3>
            </div>
          </div>
          <p className="text-[.9rem] text-slate-600 leading-[1.82] mb-5">{bucket.purpose}</p>

          {/* Tip box */}
          <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.7)', border: `1px solid ${bucket.border}` }}>
            <p className="text-[.76rem] font-semibold uppercase tracking-widest mb-2" style={{ color: bucket.color }}>
              💡 Pro Tip
            </p>
            <p className="text-[.84rem] text-slate-600 leading-relaxed">{bucket.tip}</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-5">
          {/* Allocation */}
          <div className="bg-white border border-brand-border rounded-2xl p-6">
            <p className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400 mb-2">Recommended Allocation</p>
            <p className="font-serif text-[1.6rem] font-bold" style={{ color: bucket.color }}>{bucket.allocation}</p>
            <p className="text-[.76rem] text-slate-400 mt-1">of your total retirement corpus</p>
          </div>

          {/* Goal */}
          <div className="bg-white border border-brand-border rounded-2xl p-6">
            <p className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400 mb-2">Primary Goal</p>
            <p className="text-[.92rem] font-semibold text-slate-900">{bucket.goal}</p>
          </div>

          {/* Instruments */}
          <div className="bg-white border border-brand-border rounded-2xl p-6">
            <p className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400 mb-4">Where to Invest</p>
            <div className="flex flex-col gap-2.5">
              {bucket.instruments.map(inst => (
                <div key={inst} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: bucket.color }} />
                  <span className="text-[.86rem] text-slate-700">{inst}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

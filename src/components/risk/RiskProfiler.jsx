'use client'
import { useState } from 'react'
import Link from 'next/link'

const questions = [
  {
    id: 1,
    question: 'What is your primary investment goal?',
    options: [
      { label: 'Preserve my capital — I cannot afford to lose any money',       score: 1 },
      { label: 'Generate regular income with some capital protection',           score: 2 },
      { label: 'Balance growth and stability over the long term',               score: 3 },
      { label: 'Grow my wealth significantly, accepting some ups and downs',    score: 4 },
      { label: 'Maximum long-term growth — I can handle high volatility',       score: 5 },
    ],
  },
  {
    id: 2,
    question: 'How long do you plan to stay invested?',
    options: [
      { label: 'Less than 1 year',         score: 1 },
      { label: '1 – 3 years',              score: 2 },
      { label: '3 – 5 years',              score: 3 },
      { label: '5 – 10 years',             score: 4 },
      { label: 'More than 10 years',       score: 5 },
    ],
  },
  {
    id: 3,
    question: 'Your portfolio drops 20% in a market crash. What do you do?',
    options: [
      { label: 'Sell everything immediately — I cannot handle losses',          score: 1 },
      { label: 'Sell some investments to reduce my exposure',                   score: 2 },
      { label: 'Hold and wait for the market to recover',                       score: 3 },
      { label: 'Stay calm and continue my SIPs as planned',                     score: 4 },
      { label: 'Invest more — this is a great buying opportunity',              score: 5 },
    ],
  },
  {
    id: 4,
    question: 'What percentage of your monthly income do you save and invest?',
    options: [
      { label: 'Less than 5%',             score: 1 },
      { label: '5% – 10%',                 score: 2 },
      { label: '10% – 20%',                score: 3 },
      { label: '20% – 35%',                score: 4 },
      { label: 'More than 35%',            score: 5 },
    ],
  },
  {
    id: 5,
    question: 'How stable is your income?',
    options: [
      { label: 'Very uncertain — freelance or irregular income',                score: 1 },
      { label: 'Somewhat stable but can vary significantly',                    score: 2 },
      { label: 'Stable with occasional variation',                              score: 3 },
      { label: 'Very stable — salaried with good job security',                 score: 4 },
      { label: 'Multiple income streams — very secure',                         score: 5 },
    ],
  },
  {
    id: 6,
    question: 'Do you have an emergency fund covering 6+ months of expenses?',
    options: [
      { label: 'No emergency fund at all',                                      score: 1 },
      { label: 'Less than 3 months of expenses saved',                          score: 2 },
      { label: '3 – 6 months of expenses saved',                                score: 3 },
      { label: 'Yes, 6+ months fully covered',                                  score: 4 },
      { label: 'Yes, and I have additional liquid assets beyond that',          score: 5 },
    ],
  },
  {
    id: 7,
    question: 'Which investment would you be most comfortable with?',
    options: [
      { label: 'Fixed Deposits — guaranteed returns, zero risk',                score: 1 },
      { label: 'Debt mutual funds — low risk, modest returns',                  score: 2 },
      { label: 'Balanced funds — mix of equity and debt',                       score: 3 },
      { label: 'Large-cap equity funds — growth with some stability',           score: 4 },
      { label: 'Small/mid-cap or sectoral funds — high risk, high reward',      score: 5 },
    ],
  },
  {
    id: 8,
    question: 'How much investment experience do you have?',
    options: [
      { label: 'None — this is my first time investing',                        score: 1 },
      { label: 'Basic — I have an FD or savings account',                       score: 2 },
      { label: 'Moderate — I have invested in mutual funds before',             score: 3 },
      { label: 'Good — I actively track and manage my portfolio',               score: 4 },
      { label: 'Experienced — I understand equity, debt, and alternatives',     score: 5 },
    ],
  },
]

const profiles = [
  {
    range: [8, 16],
    label: 'Conservative',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.08)',
    icon: '🛡️',
    desc: 'You prioritize capital protection above everything else. You prefer predictable, stable returns even if they are modest. Market volatility makes you uncomfortable and you prefer to sleep soundly over chasing high returns.',
    suitable: ['Liquid Funds', 'Overnight Funds', 'Short Duration Debt Funds', 'Fixed Deposits', 'RBI Bonds'],
    avoid: ['Pure Equity Funds', 'Small & Mid Cap Funds', 'Sectoral Funds'],
  },
  {
    range: [17, 24],
    label: 'Moderately Conservative',
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    icon: '⚖️',
    desc: 'You lean toward safety but are open to a small portion in growth assets. You can tolerate minor fluctuations if it means slightly better returns over the long term. A mostly debt-oriented portfolio with a small equity allocation suits you.',
    suitable: ['Conservative Hybrid Funds', 'Debt Funds', 'Balanced Advantage Funds', 'Large Cap Funds (small allocation)'],
    avoid: ['Small Cap Funds', 'High Risk Sectoral Funds', 'International Equity'],
  },
  {
    range: [25, 32],
    label: 'Moderate',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    icon: '📊',
    desc: 'You seek a balance between growth and stability. You understand that short-term volatility is normal and are comfortable staying invested through market cycles. A diversified mix of equity and debt works best for you.',
    suitable: ['Balanced Hybrid Funds', 'Flexi Cap Funds', 'Multi Asset Funds', 'Index Funds', 'Debt Funds'],
    avoid: ['Pure Thematic Funds', 'Leveraged Products'],
  },
  {
    range: [33, 37],
    label: 'Moderately Aggressive',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
    icon: '📈',
    desc: 'You are growth-oriented and comfortable with market fluctuations. You have a long investment horizon and understand that equity markets can be volatile in the short term but rewarding over time. A predominantly equity portfolio fits you well.',
    suitable: ['Large & Mid Cap Funds', 'Flexi Cap Funds', 'ELSS', 'Index Funds', 'International Funds'],
    avoid: ['Overleveraged Products', 'Very Short Term Speculation'],
  },
  {
    range: [38, 40],
    label: 'Aggressive',
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.08)',
    icon: '🚀',
    desc: 'You are a high-risk, high-reward investor. You have a long time horizon, strong financial stability, and the temperament to stay invested even during sharp market corrections. You actively seek maximum wealth creation.',
    suitable: ['Small & Mid Cap Funds', 'Sectoral/Thematic Funds', 'International Equity', 'Direct Equity', 'REITs & InvITs'],
    avoid: ['Keeping too much in FDs or debt during wealth-building years'],
  },
]

function getProfile(score) {
  return profiles.find(p => score >= p.range[0] && score <= p.range[1]) || profiles[2]
}

export default function RiskProfiler() {
  const [answers,  setAnswers]  = useState({})
  const [current,  setCurrent]  = useState(0)
  const [result,   setResult]   = useState(null)
  const [started,  setStarted]  = useState(false)

  const totalQ    = questions.length
  const answered  = Object.keys(answers).length
  const progress  = (answered / totalQ) * 100

  const select = (qId, score) => {
    const updated = { ...answers, [qId]: score }
    setAnswers(updated)
    if (current < totalQ - 1) {
      setTimeout(() => setCurrent(c => c + 1), 300)
    }
  }

  const submit = () => {
    const total = Object.values(answers).reduce((a, b) => a + b, 0)
    setResult(getProfile(total))
  }

  const restart = () => {
    setAnswers({})
    setCurrent(0)
    setResult(null)
    setStarted(false)
  }

  // ── LANDING ──
  if (!started) {
    return (
      <div className="max-w-[640px] mx-auto text-center py-8">
        <div className="text-5xl mb-6">🎯</div>
        <h2 className="font-serif text-[1.8rem] font-bold text-slate-900 mb-4">
          Discover your investor profile
        </h2>
        <p className="text-[.95rem] text-slate-500 leading-relaxed mb-8 max-w-[480px] mx-auto">
          Answer 8 simple questions about your goals, income, and comfort with risk.
          Takes about 3 minutes. No personal data required.
        </p>
        <div className="grid grid-cols-3 gap-4 mb-10 max-w-[420px] mx-auto">
          {[['8', 'Questions'], ['3 min', 'To complete'], ['Free', 'No signup']].map(([n, l]) => (
            <div key={l} className="bg-brand-soft border border-brand-border rounded-xl py-4">
              <div className="font-serif text-[1.4rem] font-bold text-navy">{n}</div>
              <div className="text-[.7rem] text-slate-400 uppercase tracking-widest mt-1">{l}</div>
            </div>
          ))}
        </div>
        <button onClick={() => setStarted(true)}
          className="inline-flex items-center gap-2 bg-navy text-white font-semibold text-[.95rem] px-8 py-4 rounded-xl hover:bg-navy-mid transition-all hover:-translate-y-px">
          Start Risk Assessment
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    )
  }

  // ── RESULT ──
  if (result) {
    const total = Object.values(answers).reduce((a, b) => a + b, 0)
    const pct   = Math.round(((total - 8) / 32) * 100)

    return (
      <div className="max-w-[680px] mx-auto">
        {/* Score bar */}
        <div className="bg-white border border-brand-border rounded-2xl p-8 mb-5 text-center">
          <div className="text-4xl mb-4">{result.icon}</div>
          <span className="inline-block text-[.68rem] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
            style={{ background: result.bg, color: result.color }}>
            Your Risk Profile
          </span>
          <h2 className="font-serif text-[2rem] font-bold text-slate-900 mb-2">{result.label}</h2>
          <p className="text-[.87rem] text-slate-500 mb-6">Score: {total} / 40</p>

          {/* Progress bar */}
          <div className="relative h-3 bg-brand-soft rounded-full overflow-hidden mb-2">
            <div className="absolute left-0 top-0 h-full rounded-full transition-all duration-1000"
              style={{ width: `${pct}%`, background: result.color }} />
          </div>
          <div className="flex justify-between text-[.68rem] text-slate-400">
            <span>Conservative</span><span>Moderate</span><span>Aggressive</span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white border border-brand-border rounded-2xl p-8 mb-5">
          <h3 className="font-serif text-[1.1rem] font-semibold text-slate-900 mb-3">What this means for you</h3>
          <p className="text-[.9rem] text-slate-600 leading-[1.85]">{result.desc}</p>
        </div>

        {/* Suitable + Avoid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div className="bg-white border border-brand-border rounded-2xl p-6">
            <h4 className="text-[.76rem] font-semibold uppercase tracking-widest text-green-600 mb-4">✅ Suitable for you</h4>
            <ul className="flex flex-col gap-2.5">
              {result.suitable.map(s => (
                <li key={s} className="text-[.85rem] text-slate-700 flex items-start gap-2">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">›</span> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-brand-border rounded-2xl p-6">
            <h4 className="text-[.76rem] font-semibold uppercase tracking-widest text-red-500 mb-4">⚠️ Approach with caution</h4>
            <ul className="flex flex-col gap-2.5">
              {result.avoid.map(s => (
                <li key={s} className="text-[.85rem] text-slate-700 flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">›</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 text-center" style={{ background: '#1E3A8A' }}>
          <h3 className="font-serif text-[1.2rem] font-semibold text-white mb-2">
            Want a personalized portfolio based on your profile?
          </h3>
          <p className="text-[.84rem] text-white/50 mb-6">
            Our advisors will build a custom investment plan tailored to your {result.label.toLowerCase()} risk profile.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact"
              className="inline-block bg-accent text-white font-semibold text-[.9rem] px-7 py-3.5 rounded-xl hover:bg-[#1d4ed8] transition-all">
              Book Free Consultation →
            </Link>
            <button onClick={restart}
              className="inline-block text-white/60 font-medium text-[.9rem] px-7 py-3.5 rounded-xl border border-white/15 hover:bg-white/10 transition-colors">
              Retake Assessment
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── QUESTIONS ──
  const q = questions[current]

  return (
    <div className="max-w-[640px] mx-auto">

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-[.76rem] text-slate-400 mb-2">
          <span>Question {current + 1} of {totalQ}</span>
          <span>{answered} answered</span>
        </div>
        <div className="h-1.5 bg-brand-soft rounded-full overflow-hidden">
          <div className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${((current) / totalQ) * 100}%` }} />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white border border-brand-border rounded-2xl p-8 mb-5">
        <p className="text-[.72rem] font-semibold uppercase tracking-widest text-accent mb-3">
          Question {current + 1}
        </p>
        <h3 className="font-serif text-[1.3rem] font-semibold text-slate-900 leading-snug mb-6">
          {q.question}
        </h3>
        <div className="flex flex-col gap-3">
          {q.options.map(({ label, score }) => {
            const selected = answers[q.id] === score
            return (
              <button key={score} onClick={() => select(q.id, score)}
                className={`text-left px-5 py-4 rounded-xl border text-[.9rem] font-medium transition-all duration-150 ${
                  selected
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-slate-700 border-brand-border hover:border-accent hover:bg-brand-soft'
                }`}>
                {label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Nav */}
      <div className="flex justify-between items-center">
        <button onClick={() => setCurrent(c => Math.max(0, c - 1))}
          disabled={current === 0}
          className="text-[.85rem] font-medium text-slate-400 hover:text-slate-700 disabled:opacity-30 transition-colors">
          ← Previous
        </button>

        {answered === totalQ ? (
          <button onClick={submit}
            className="bg-accent text-white font-semibold text-[.9rem] px-8 py-3 rounded-xl hover:bg-[#1d4ed8] transition-all hover:-translate-y-px">
            See My Risk Profile →
          </button>
        ) : (
          <button onClick={() => setCurrent(c => Math.min(totalQ - 1, c + 1))}
            disabled={!answers[q.id]}
            className="text-[.85rem] font-medium text-slate-500 hover:text-navy disabled:opacity-30 transition-colors">
            Next →
          </button>
        )}
      </div>

    </div>
  )
}

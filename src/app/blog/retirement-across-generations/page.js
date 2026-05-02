'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function SH({ children }) {
  return (
    <h2 className="font-serif text-[1.45rem] font-bold text-slate-900 mt-12 mb-5 leading-snug flex items-center gap-3">
      <span className="block w-1 h-6 rounded-full bg-accent flex-shrink-0" />
      {children}
    </h2>
  )
}

function PullQuote({ text, source }) {
  return (
    <div className="my-10 border-l-4 border-navy pl-6 py-2">
      <p className="font-serif text-[1.15rem] italic text-slate-700 leading-relaxed mb-2">&ldquo;{text}&rdquo;</p>
      {source && <p className="text-[.75rem] font-semibold uppercase tracking-widest text-slate-400">— {source}</p>}
    </div>
  )
}

function InfoBox({ icon, title, children, color = '#EFF6FF', borderColor = '#BFDBFE' }) {
  return (
    <div className="rounded-xl p-5 my-6" style={{ background: color, border: `1px solid ${borderColor}` }}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{icon}</span>
        <strong className="text-[.88rem] font-bold text-slate-900">{title}</strong>
      </div>
      <div className="text-[.85rem] text-slate-600 leading-relaxed">{children}</div>
    </div>
  )
}

// Life expectancy chart
function LifeExpectancyChart() {
  const data = [
    { gen: 'Silent Gen\n(1940s–50s)', lifeExp: 62, retireAge: 55, color: '#94A3B8' },
    { gen: 'Boomers\n(1960s–70s)',    lifeExp: 65, retireAge: 58, color: '#6366F1' },
    { gen: 'Gen X\n(1980s–90s)',      lifeExp: 68, retireAge: 60, color: '#2563EB' },
    { gen: 'Millennials\n(2000s–10s)',lifeExp: 75, retireAge: 62, color: '#0891B2' },
    { gen: 'Gen Z\n(2020s+)',         lifeExp: 82, retireAge: 65, color: '#059669' },
  ]

  const W = 560, H = 240
  const pad = { t: 30, r: 20, b: 70, l: 50 }
  const iW = W - pad.l - pad.r
  const iH = H - pad.t - pad.b
  const barW = iW / data.length - 10
  const maxVal = 90

  return (
    <div className="bg-white border border-brand-border rounded-2xl overflow-hidden mb-8">
      <div className="px-6 py-4 border-b border-brand-border">
        <p className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400">Across Generations — India</p>
        <p className="font-serif text-[1.1rem] font-bold text-slate-900">Life Expectancy vs Retirement Age (approximate)</p>
      </div>
      <div className="px-4 py-4">
        <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
          {/* Grid lines */}
          {[20, 40, 60, 80].map(v => (
            <g key={v}>
              <line x1={pad.l} y1={pad.t + iH - (v / maxVal) * iH} x2={W - pad.r} y2={pad.t + iH - (v / maxVal) * iH} stroke="#f1f5f9" strokeWidth="1"/>
              <text x={pad.l - 6} y={pad.t + iH - (v / maxVal) * iH + 4} textAnchor="end" fontSize="8" fill="#94a3b8">{v}</text>
            </g>
          ))}

          {data.map((d, i) => {
            const x = pad.l + i * (barW + 10)
            const lifeH = (d.lifeExp / maxVal) * iH
            const retireH = (d.retireAge / maxVal) * iH
            const lifeY = pad.t + iH - lifeH
            const retireY = pad.t + iH - retireH
            const lines = d.gen.split('\n')

            return (
              <g key={d.gen}>
                {/* Life expectancy bar (full height, light) */}
                <rect x={x} y={lifeY} width={barW} height={lifeH} rx="4" fill={d.color} opacity="0.18"/>

                {/* Retirement age bar (solid, shorter) */}
                <rect x={x} y={retireY} width={barW} height={retireH} rx="4" fill={d.color} opacity="0.9"/>

                {/* Life expectancy label — above the light bar */}
                <text x={x + barW / 2} y={lifeY - 6} textAnchor="middle" fontSize="9" fill={d.color} fontWeight="700">
                  {d.lifeExp}yr
                </text>

                {/* Retirement age label — above the solid bar, inside gap */}
                <text x={x + barW / 2} y={retireY - 6} textAnchor="middle" fontSize="9" fill={d.color} fontWeight="700">
                  {d.retireAge}
                </text>

                {/* X-axis labels */}
                {lines.map((l, li) => (
                  <text key={li} x={x + barW / 2} y={H - pad.b + 16 + li * 11} textAnchor="middle" fontSize="8" fill="#64748B">{l}</text>
                ))}
              </g>
            )
          })}

          {/* Legend */}
          <rect x={pad.l} y={H - 12} width="12" height="8" rx="2" fill="#2563EB" opacity="0.9"/>
          <text x={pad.l + 16} y={H - 5} fontSize="8" fill="#64748B">Retirement age</text>
          <rect x={pad.l + 110} y={H - 12} width="12" height="8" rx="2" fill="#2563EB" opacity="0.18"/>
          <text x={pad.l + 126} y={H - 5} fontSize="8" fill="#64748B">Life expectancy</text>
        </svg>
      </div>
    </div>
  )
}
// Retirement corpus needed chart
function CorpusChart() {
  const data = [
    { label: '1970s retiree', corpus: 2, color: '#94A3B8', note: '₹2L enough' },
    { label: '1990s retiree', corpus: 15, color: '#6366F1', note: '₹15L enough' },
    { label: '2010 retiree', corpus: 80, color: '#2563EB', note: '₹80L needed' },
    { label: '2026 retiree', corpus: 300, color: '#0891B2', note: '₹3Cr needed' },
    { label: '2040 retiree', corpus: 800, color: '#DC2626', note: '₹8Cr+ needed' },
  ]
  const W = 560, H = 180
  const pad = { t: 20, r: 100, b: 36, l: 130 }
  const iW = W - pad.l - pad.r
  const maxVal = 800

  return (
    <div className="bg-white border border-brand-border rounded-2xl overflow-hidden mb-8">
      <div className="px-6 py-4 border-b border-brand-border">
        <p className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400">Estimated Corpus Required</p>
        <p className="font-serif text-[1.1rem] font-bold text-slate-900">How Much You Need to Retire Comfortably — Then vs Now</p>
      </div>
      <div className="px-4 py-4">
        <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
          {data.map((d, i) => {
            const y = pad.t + i * ((H - pad.t - pad.b) / data.length)
            const bH = (H - pad.t - pad.b) / data.length - 6
            const bW = (d.corpus / maxVal) * iW
            return (
              <g key={d.label}>
                <text x={pad.l - 8} y={y + bH / 2 + 4} textAnchor="end" fontSize="9" fill="#475569" fontWeight="500">{d.label}</text>
                <rect x={pad.l} y={y} width={bW} height={bH} rx="3" fill={d.color} opacity="0.85"/>
                <text x={pad.l + bW + 8} y={y + bH / 2 + 4} fontSize="9.5" fill={d.color} fontWeight="700">{d.note}</text>
              </g>
            )
          })}
        </svg>
      </div>
      <p className="text-[.68rem] text-slate-400 px-6 pb-4">Based on middle-class urban India, 20–25 year retirement horizon, adjusted for inflation. Approximate estimates only.</p>
    </div>
  )
}

const generations = [
  {
    gen: 'The Silent Generation',
    period: 'Born 1930–1950 · Retired 1970s–80s',
    color: '#475569',
    bg: '#F8FAFC',
    border: '#E2E8F0',
    emoji: '🏡',
    retireAge: '55–58',
    lifeExp: '60–65 years',
    postRetire: '5–8 years',
    corpus: '₹1–3 lakh',
    support: 'Joint family + government pension',
    story: 'This generation barely knew what retirement planning meant. Most were government employees with defined benefit pensions — a guaranteed monthly amount for life. Those in private sector relied entirely on their children. The joint family system was the social security net. A retired father moved in with his son, and the arrangement was expected, natural, and culturally mandated.',
    reality: 'Life expectancy was around 52–60 years. Retirement at 55 often meant only 5–8 years of post-work life. The corpus needed was minimal — ₹1–3 lakh was enough for a comfortable retirement. Medical costs were low. Inflation was manageable. The pension covered the basics.',
    challenge: 'Almost none — if you were a government employee. For private sector workers, complete dependence on children was the only plan.',
    lesson: 'The system worked because the math worked — short retirement, low expenses, guaranteed pension, joint family support. None of these conditions exist today.',
  },
  {
    gen: 'The Baby Boomers',
    period: 'Born 1950–1965 · Retired 1990s–2010s',
    color: '#4F46E5',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    emoji: '🏗️',
    retireAge: '58–60',
    lifeExp: '65–70 years',
    postRetire: '8–12 years',
    corpus: '₹10–50 lakh',
    support: 'EPF + pension + some savings',
    story: 'This generation witnessed India\'s economic liberalisation. Private sector jobs multiplied. EPF became the primary retirement tool. The old pension system (OPS) still covered government employees with a guaranteed pension. Many boomers bought a flat, put money in FDs, and called it retirement planning.',
    reality: 'Life expectancy rose to 65–70 years, extending the post-retirement period to 10–12 years. The corpus needed jumped to ₹10–50 lakh. Inflation started eating into savings. Medical costs began rising. But many still had children supporting them and owned their homes outright.',
    challenge: 'Rising inflation eroded FD returns. Many underestimated how long they would live and ran out of money in their late 70s. Medical expenses caught most families off guard.',
    lesson: 'FD-heavy portfolios with no equity exposure left most boomers underprepared. Inflation silently destroyed purchasing power over 15 years.',
  },
  {
    gen: 'Generation X',
    period: 'Born 1965–1980 · Retiring 2020s–2030s',
    color: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    emoji: '💼',
    retireAge: '58–62',
    lifeExp: '70–75 years',
    postRetire: '12–17 years',
    corpus: '₹80L – ₹2 crore',
    support: 'EPF + NPS + mutual funds',
    story: 'Generation X is the transition generation — too old for the pension system, too young for the full benefits of digital-age investing. They entered the workforce just as the New Pension System (NPS) replaced the old defined-benefit pension for government employees. Many are currently in their peak earning years, scrambling to build a corpus for retirement that is only 5–10 years away.',
    reality: 'This is the first generation facing the retirement crisis in full. Life expectancy of 70–75 means 12–17 years of post-retirement life. Nuclear families are now the norm — children may not be nearby or financially positioned to support parents. The corpus needed is ₹80 lakh to ₹2 crore for a middle-class lifestyle.',
    challenge: 'Started investing too late. Lost years in low-yield FDs and endowment plans. Now racing against time with only 5–10 working years left.',
    lesson: 'The single biggest mistake of Gen X: treating retirement as a future problem. The cost of starting at 45 vs 30 is enormous.',
  },
  {
    gen: 'Millennials',
    period: 'Born 1981–1996 · Will retire 2030s–2050s',
    color: '#0891B2',
    bg: '#ECFEFF',
    border: '#A5F3FC',
    emoji: '📱',
    retireAge: '55–65 (or never — FIRE movement)',
    lifeExp: '75–80 years',
    postRetire: '15–25 years',
    corpus: '₹3–8 crore',
    support: 'NPS + SIPs + real estate + multiple income streams',
    story: 'Millennials are the first generation to have access to digital investing from the start of their careers. SIPs, direct mutual funds, NPS, and digital gold are all available at their fingertips. They are also the first generation to seriously consider FIRE — Financial Independence, Retire Early. Many millennials are targeting retirement at 45–50, not 60.',
    reality: 'With life expectancy projected at 75–80 years and retirement potentially starting at 55, millennials face 20–25 years of post-retirement life. The corpus needed is ₹3–8 crore for a comfortable lifestyle in today\'s money — adjusted for inflation, significantly more. The 2026 NPS charge reforms and EPFO changes directly affect this generation.',
    challenge: 'Lifestyle inflation, high EMIs, rising real estate costs, and delayed marriages are pushing savings rates down. Many millennials are stuck between YOLO spending today and the anxiety of not saving enough for tomorrow.',
    lesson: 'Millennials have the best tools in history for retirement planning. The question is whether they will use them consistently enough.',
  },
  {
    gen: 'Generation Z',
    period: 'Born 1997–2012 · Will retire 2050s–2070s',
    color: '#059669',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    emoji: '🤖',
    retireAge: '50–60 or self-defined',
    lifeExp: '80–90 years',
    postRetire: '25–40 years',
    corpus: '₹8–25 crore (inflation-adjusted)',
    support: 'AI-driven investing + gig income + digital assets + SIPs',
    story: 'Gen Z will face a retirement landscape that is almost unrecognisable from their grandparents\'. They are entering a workforce being reshaped by AI — some jobs will disappear, new ones will emerge, and gig work will likely define large parts of their career. Life expectancy is projected to cross 82 years. Some will live past 90.',
    reality: 'With a 30–40 year post-retirement period, Gen Z will need the largest corpus in history. Traditional employment may not offer EPF or pension. Many will need to self-fund their entire retirement through decades of disciplined investing. The earlier they start, the more compounding works in their favour.',
    challenge: 'No guaranteed pension. Gig economy means no automatic EPF. AI disruption could mean multiple career reinventions. Higher cost of living in urban India. But also — the most powerful investing tools ever built.',
    lesson: 'For Gen Z, starting a ₹1,000 SIP at 22 is worth more than a ₹10,000 SIP at 35. Time is the only asset that cannot be recovered.',
  },
]

export default function RetirementGenerationsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <section className="pt-[66px] relative overflow-hidden"
          style={{ background: 'linear-gradient(150deg, #0F172A 0%, #1E3A8A 55%, #1254B0 100%)' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
          <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.18), transparent 65%)', top: '-150px', right: '-80px' }} />

          <div className="relative z-10 max-w-[860px] mx-auto px-8 pt-16 pb-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[.78rem] font-medium text-white/35 hover:text-white/70 transition-colors mb-8">
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="text-[.65rem] font-semibold uppercase tracking-widest text-accent bg-accent/15 px-2.5 py-1 rounded-full">
                🏡 Retirement Planning
              </span>
              <span className="text-[.72rem] text-white/35">May 2, 2026</span>
              <span className="text-[.72rem] text-white/35">· 9 min read</span>
            </div>
            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.12] mb-5">
              The Changing Face of Retirement:<br className="hidden md:block"/> What Each Generation Got — and What You Need
            </h1>
            <p className="text-[1rem] text-white/55 leading-relaxed max-w-[640px] mb-10">
              Your grandfather retired at 55 with a pension and a son to support him. You will retire at 62 into a nuclear family, with no guaranteed pension, and live until 80. The retirement problem is not the same across generations — and the solution cannot be either.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-10">
              {[
                { label: 'Life expectancy 2025', val: '70.8 yrs', sub: 'up from 52 in 1960s' },
                { label: 'Post-retirement life', val: '20+ yrs', sub: 'for today\'s retirees' },
                { label: 'Corpus needed today', val: '₹3–5Cr', sub: 'middle-class urban India' },
                { label: 'Workforce in informal', val: '90%+', sub: 'with no pension access' },
              ].map(({ label, val, sub }) => (
                <div key={label} className="rounded-xl px-4 py-3"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>
                  <p className="text-[.62rem] font-semibold uppercase tracking-widest text-white/40 mb-1">{label}</p>
                  <p className="font-serif text-[1.35rem] font-bold text-white leading-none mb-1">{val}</p>
                  <p className="text-[.7rem] text-white/60">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <article className="bg-white">
          <div className="max-w-[760px] mx-auto px-8 py-14">

            {/* Byline */}
            <div className="flex items-center gap-3 mb-10 pb-8 border-b border-brand-border">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #1E3A8A, #2563EB)' }}>S</div>
              <div>
                <p className="text-[.84rem] font-semibold text-slate-900">Synvestify Research Desk</p>
                <p className="text-[.72rem] text-slate-400">Published May 2, 2026 · New Delhi</p>
              </div>
            </div>

            {/* Intro */}
            <p className="text-[1rem] text-slate-700 leading-[1.85] mb-5">
              Ask your parents what their retirement plan was. Chances are, the answer involves a government pension, an FD, a flat, and an expectation that you would be nearby. Ask your grandparents the same question and the answer is simpler still — there was no plan. There was family.
            </p>
            <p className="text-[1rem] text-slate-600 leading-[1.85] mb-8">
              The retirement problem in India has changed fundamentally across three generations. Life expectancy has risen from 52 to 70. Nuclear families have replaced joint families. Government pensions have been replaced by self-funded NPS accounts. And the corpus needed to retire comfortably has grown from ₹2 lakh to ₹3 crore — and rising. Understanding how retirement has evolved is the first step to planning for it correctly.
            </p>

            <SH>The Numbers That Changed Everything</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-6">
              Three numbers tell the entire story of India's retirement crisis — and they are all moving in the wrong direction for the unprepared investor.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: '⬆️', title: 'Life expectancy rising', val: '52 → 70.8 years', desc: 'From 1960 to 2025. Projected to reach 82 by 2050.' },
                { icon: '⬇️', title: 'Support systems shrinking', val: 'Joint → Nuclear', desc: 'From extended family support to complete financial self-reliance.' },
                { icon: '⬆️', title: 'Corpus needed growing', val: '₹2L → ₹3–5Cr', desc: 'The cost of a comfortable retirement has grown 1,500x in 50 years.' },
              ].map(({ icon, title, val, desc }) => (
                <div key={title} className="bg-brand-soft border border-brand-border rounded-xl p-5 text-center">
                  <p className="text-2xl mb-2">{icon}</p>
                  <p className="text-[.72rem] font-semibold uppercase tracking-widest text-slate-400 mb-1">{title}</p>
                  <p className="font-serif text-[1.1rem] font-bold text-slate-900 mb-1">{val}</p>
                  <p className="text-[.76rem] text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <LifeExpectancyChart />
            <CorpusChart />

            <SH>A Generation-by-Generation Story</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-8">
              Each generation in India has faced a fundamentally different retirement reality. Here is how the story has evolved — and what each generation got right and wrong.
            </p>

            {/* Generation cards */}
            <div className="space-y-6 mb-12">
              {generations.map(({ gen, period, color, bg, border, emoji, retireAge, lifeExp, postRetire, corpus, support, story, reality, challenge, lesson }) => (
                <div key={gen} className="rounded-2xl overflow-hidden border-2" style={{ borderColor: border }}>
                  {/* Header */}
                  <div className="px-6 py-4 flex items-center gap-3" style={{ background: color }}>
                    <span className="text-2xl">{emoji}</span>
                    <div>
                      <p className="font-serif text-[1.1rem] font-bold text-white leading-none">{gen}</p>
                      <p className="text-[.68rem] text-white/55 mt-0.5">{period}</p>
                    </div>
                  </div>
                  {/* Stats strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0" style={{ background: bg, borderColor: border }}>
                    {[
                      { label: 'Retire age', val: retireAge },
                      { label: 'Life expectancy', val: lifeExp },
                      { label: 'Post-retire life', val: postRetire },
                      { label: 'Corpus needed', val: corpus },
                    ].map(({ label, val }) => (
                      <div key={label} className="px-4 py-3" style={{ borderColor: border }}>
                        <p className="text-[.62rem] font-semibold uppercase tracking-widest mb-1" style={{ color }}>{label}</p>
                        <p className="text-[.88rem] font-bold text-slate-900 leading-snug">{val}</p>
                      </div>
                    ))}
                  </div>
                  {/* Content */}
                  <div className="px-6 py-5 space-y-4" style={{ background: bg }}>
                    <p className="text-[.88rem] text-slate-700 leading-relaxed">{story}</p>
                    <p className="text-[.86rem] text-slate-600 leading-relaxed">{reality}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-white rounded-xl p-4 border" style={{ borderColor: border }}>
                        <p className="text-[.68rem] font-bold uppercase tracking-widest text-red-500 mb-1.5">Main Challenge</p>
                        <p className="text-[.82rem] text-slate-600 leading-relaxed">{challenge}</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 border" style={{ borderColor: border }}>
                        <p className="text-[.68rem] font-bold uppercase tracking-widest mb-1.5" style={{ color }}>Key Lesson</p>
                        <p className="text-[.82rem] text-slate-600 leading-relaxed">{lesson}</p>
                      </div>
                    </div>
                    <p className="text-[.72rem] text-slate-400">Primary retirement support: <strong className="text-slate-600">{support}</strong></p>
                  </div>
                </div>
              ))}
            </div>

            <SH>What Changed in India's Pension System</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-5">
              The shift from a guaranteed pension system to a self-funded one is the single biggest structural change in India's retirement landscape — and most people don't fully understand its implications.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  year: 'Before 2004',
                  title: 'Old Pension System (OPS)',
                  desc: 'Government employees received a defined benefit pension — 50% of last drawn salary, guaranteed for life, with DA revisions. The government bore all the risk. Employees contributed nothing. This was the gold standard of retirement security.',
                  tag: 'Guaranteed',
                  color: '#10B981',
                },
                {
                  year: '2004 onwards',
                  title: 'New Pension System (NPS)',
                  desc: 'OPS was replaced by NPS for new central government employees. NPS is market-linked — both employee and employer contribute 10% of basic pay each. Returns depend on market performance. At retirement, 40% must be used to buy an annuity. The government shifted the risk to the employee.',
                  tag: 'Market-linked',
                  color: '#2563EB',
                },
                {
                  year: '2023–2025',
                  title: 'Unified Pension Scheme (UPS)',
                  desc: 'In response to political pressure to restore OPS, the government introduced UPS — a hybrid offering 50% of average last 12 months\' salary as pension after 25 years of service. A compromise between OPS and NPS, effective from April 2025.',
                  tag: 'Hybrid',
                  color: '#7C3AED',
                },
                {
                  year: 'July 2026',
                  title: 'NPS Charge Restructuring',
                  desc: 'PFRDA has introduced revised AMC charges effective July 1, 2026 — aligning Tier I and Tier II account charges, introducing concessional fees for dormant accounts (only 10% of AMC), and improving transparency. Each pension scheme under a single PRAN is now treated as a separate account for charging purposes.',
                  tag: 'Latest update',
                  color: '#DC2626',
                },
              ].map(({ year, title, desc, tag, color }) => (
                <div key={year} className="border border-brand-border rounded-xl p-5">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <p className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400 mb-1">{year}</p>
                      <h4 className="font-serif text-[1rem] font-semibold text-slate-900">{title}</h4>
                    </div>
                    <span className="text-[.65rem] font-bold px-2.5 py-1 rounded-full"
                      style={{ background: color + '15', color }}>{tag}</span>
                  </div>
                  <p className="text-[.84rem] text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <PullQuote
              text="Over 90% of India's workforce is in the informal sector — with no access to EPF, NPS, or any formal pension scheme. For them, the only retirement plan is family, land, or nothing."
              source="World Bank Report on India's Pension Coverage"
            />

            <SH>The Retirement Math for You — Right Now</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-5">
              Regardless of your generation, the retirement calculation is the same. The question is how much time you have to solve it.
            </p>

            <InfoBox icon="🧮" title="The FIRE Number — Your Retirement Target" color="#EFF6FF" borderColor="#BFDBFE">
              <strong>Your FIRE Number = Annual Expenses × 25</strong><br/><br/>
              If you spend ₹1 lakh per month today (₹12 lakh per year), your FIRE number is ₹3 crore. But that is in today's money. At 6% inflation, in 20 years, ₹1 lakh per month becomes ₹3.2 lakh per month — making your actual target corpus ₹9.6 crore. This is why starting early is not just good advice — it is mathematically necessary.
            </InfoBox>

            <InfoBox icon="⏰" title="The cost of waiting — compounding works both ways" color="#FEF2F2" borderColor="#FECACA">
              A 25-year-old investing ₹10,000/month at 12% CAGR for 35 years accumulates approximately ₹6.4 crore by age 60. A 35-year-old investing the same amount for 25 years accumulates approximately ₹1.9 crore. The 10-year delay costs ₹4.5 crore — for the exact same monthly investment. Every year of delay is exponentially more expensive than the last.
            </InfoBox>

            <SH>What the Next Generation Must Do Differently</SH>

            <div className="space-y-3 mb-10">
              {[
                { num: '01', title: 'Start before you feel ready', desc: 'The perfect time to start investing for retirement was yesterday. The second best time is today. A ₹500 SIP at 22 creates more wealth than a ₹5,000 SIP at 35.' },
                { num: '02', title: 'Do not rely on children', desc: 'Nuclear families, geographic mobility, and rising costs mean your children may not be able to support you. Plan as if they won\'t. If they do, treat it as a bonus.' },
                { num: '03', title: 'Equity is not optional', desc: 'FDs and gold cannot beat inflation over 25 years. A retirement corpus built purely on safe instruments will be inadequate. Equity must be the core of a long retirement plan.' },
                { num: '04', title: 'Account for medical inflation', desc: 'Medical inflation in India runs at approximately 10% per year. A hospitalisation that costs ₹5 lakh today will cost ₹34 lakh in 20 years. Health insurance is retirement planning.' },
                { num: '05', title: 'Plan for 30 years post-retirement, not 15', desc: 'If you retire at 60 and live to 90, you need 30 years of corpus. Most calculators use 15–20 years. Use 25–30 years for conservative planning.' },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex items-start gap-4 bg-brand-soft border border-brand-border rounded-xl p-5">
                  <span className="font-serif text-[1.3rem] font-bold text-accent flex-shrink-0 leading-none mt-0.5">{num}</span>
                  <div>
                    <p className="text-[.9rem] font-semibold text-slate-900 mb-1">{title}</p>
                    <p className="text-[.82rem] text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <SH>The Bottom Line</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-4">
              Your grandfather's retirement plan worked because his life was short, his family was joint, and his pension was guaranteed. None of those things are true for you.
            </p>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-4">
              Your retirement will last 20–30 years. You will likely spend it in a nuclear family setup. You have no guaranteed pension unless you work for the government. And the cost of living in 2050 will be unrecognisable compared to today.
            </p>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-10">
              The good news is that the tools available today — SIPs, NPS, Gold ETFs, direct mutual funds — are the most powerful in history. The compounding machine has never been more accessible. The only question is whether you will start early enough to let it work.
              <strong className="font-semibold text-slate-900"> The best retirement plan is the one you start today.</strong>
            </p>

            {/* CTA */}
            <div className="rounded-2xl p-8" style={{ background: '#1E3A8A' }}>
              <h3 className="font-serif text-[1.2rem] font-semibold text-white mb-2">
                What does your retirement number look like?
              </h3>
              <p className="text-[.88rem] text-white/50 mb-5 leading-relaxed">
                Book a free consultation. We'll calculate your personal FIRE number, review your current investments, identify the gap, and build a step-by-step plan to close it — however many working years you have left.
              </p>
              <Link href="/contact"
                className="inline-block bg-accent text-white text-[.92rem] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#1d4ed8] transition-colors">
                Book Free Consultation →
              </Link>
            </div>

            <p className="text-[.72rem] text-slate-400 leading-relaxed mt-8 pt-6 border-t border-brand-border">
              <strong className="font-semibold">Disclaimer:</strong> This article is for educational and informational purposes only and does not constitute investment advice. Corpus estimates are approximate and vary based on lifestyle, location, and inflation assumptions. Past performance is not indicative of future returns. Please consult your SEBI-registered financial advisor before making any investment decisions.
            </p>

          </div>
        </article>

      </main>
      <Footer />
    </>
  )
}

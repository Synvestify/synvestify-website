'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ── Nifty Impact Chart ──
function NiftyChart() {
  const points = [
    { label: 'Feb 28', val: 22900 },
    { label: 'Mar 3',  val: 22500 },
    { label: 'Mar 7',  val: 22100 },
    { label: 'Mar 10', val: 21800 },
    { label: 'Mar 14', val: 22200 },
    { label: 'Mar 17', val: 21600 },
    { label: 'Mar 20', val: 22000 },
    { label: 'Mar 24', val: 22562 },
    { label: 'Mar 27', val: 23007 },
    { label: 'Apr 1',  val: 22800 },
  ]
  const W = 560, H = 200, pad = { t: 24, r: 24, b: 36, l: 60 }
  const minV = 21000, maxV = 23500
  const iW = W - pad.l - pad.r
  const iH = H - pad.t - pad.b
  const toX = i => pad.l + (i / (points.length - 1)) * iW
  const toY = v => pad.t + iH - ((v - minV) / (maxV - minV)) * iH
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toY(p.val).toFixed(1)}`).join(' ')
  const fillD = pathD + ` L${toX(points.length - 1).toFixed(1)},${H - pad.b} L${toX(0).toFixed(1)},${H - pad.b} Z`

  return (
    <div className="bg-white border border-brand-border rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-brand-border flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400">Nifty 50 Index</p>
          <p className="font-serif text-[1.1rem] font-bold text-slate-900">Feb 28 – Apr 1, 2026 (Points)</p>
        </div>
        <div className="text-right">
          <div className="font-serif text-[1.6rem] font-bold text-red-500">–13%</div>
          <div className="text-[.72rem] font-semibold text-red-400">from pre-war levels</div>
        </div>
      </div>
      <div className="px-4 py-4">
        <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="niftyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.01"/>
            </linearGradient>
          </defs>
          {[21500, 22000, 22500, 23000].map(v => (
            <g key={v}>
              <line x1={pad.l} y1={toY(v)} x2={W - pad.r} y2={toY(v)} stroke="#f1f5f9" strokeWidth="1"/>
              <text x={pad.l - 6} y={toY(v) + 4} textAnchor="end" fontSize="8" fill="#94a3b8">{(v / 1000).toFixed(1)}K</text>
            </g>
          ))}
          <path d={fillD} fill="url(#niftyGrad)"/>
          <path d={pathD} fill="none" stroke="#EF4444" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
          {points.map((p, i) => (
            <g key={i}>
              <circle cx={toX(i)} cy={toY(p.val)} r="3" fill="white" stroke="#EF4444" strokeWidth="1.5"/>
              {i % 2 === 0 && <text x={toX(i)} y={H - pad.b + 14} textAnchor="middle" fontSize="8" fill="#94a3b8">{p.label}</text>}
            </g>
          ))}
          <line x1={toX(0)} y1={pad.t} x2={toX(0)} y2={H - pad.b} stroke="#1E3A8A" strokeWidth="1" strokeDasharray="3 2"/>
          <text x={toX(0) + 4} y={pad.t + 10} fontSize="8" fill="#1E3A8A">War begins</text>
        </svg>
      </div>
    </div>
  )
}

// ── Oil Price Chart ──
function OilChart() {
  const points = [
    { label: 'Feb 28', price: 78 },
    { label: 'Mar 3',  price: 83 },
    { label: 'Mar 7',  price: 89 },
    { label: 'Mar 10', price: 94 },
    { label: 'Mar 14', price: 98 },
    { label: 'Mar 17', price: 111 },
    { label: 'Mar 20', price: 103 },
    { label: 'Mar 24', price: 99  },
    { label: 'Mar 27', price: 106 },
    { label: 'Apr 1',  price: 108 },
  ]
  const W = 560, H = 180, pad = { t: 20, r: 24, b: 36, l: 48 }
  const minP = 70, maxP = 125
  const iW = W - pad.l - pad.r
  const iH = H - pad.t - pad.b
  const toX = i => pad.l + (i / (points.length - 1)) * iW
  const toY = v => pad.t + iH - ((v - minP) / (maxP - minP)) * iH
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toY(p.price).toFixed(1)}`).join(' ')
  const fillD = pathD + ` L${toX(points.length - 1).toFixed(1)},${H - pad.b} L${toX(0).toFixed(1)},${H - pad.b} Z`

  return (
    <div className="bg-white border border-brand-border rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-brand-border flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400">Brent Crude (USD/barrel)</p>
          <p className="font-serif text-[1.1rem] font-bold text-slate-900">Feb 28 – Apr 1, 2026</p>
        </div>
        <div className="text-right">
          <div className="font-serif text-[1.6rem] font-bold text-red-500">$108</div>
          <div className="text-[.72rem] font-semibold text-red-400">+38% since Feb 28</div>
        </div>
      </div>
      <div className="px-4 py-4">
        <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="oilGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.18"/>
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.01"/>
            </linearGradient>
          </defs>
          {[80, 90, 100, 110, 120].map(v => (
            <g key={v}>
              <line x1={pad.l} y1={toY(v)} x2={W - pad.r} y2={toY(v)} stroke="#f1f5f9" strokeWidth="1"/>
              <text x={pad.l - 6} y={toY(v) + 4} textAnchor="end" fontSize="8" fill="#94a3b8">${v}</text>
            </g>
          ))}
          <line x1={pad.l} y1={toY(100)} x2={W - pad.r} y2={toY(100)} stroke="#fca5a5" strokeWidth="1" strokeDasharray="4 3"/>
          <path d={fillD} fill="url(#oilGrad2)"/>
          <path d={pathD} fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
          {points.map((p, i) => (
            <g key={i}>
              <circle cx={toX(i)} cy={toY(p.price)} r="3" fill="white" stroke="#F59E0B" strokeWidth="1.5"/>
              {i % 2 === 0 && <text x={toX(i)} y={H - pad.b + 14} textAnchor="middle" fontSize="8" fill="#94a3b8">{p.label}</text>}
            </g>
          ))}
          <line x1={toX(0)} y1={pad.t} x2={toX(0)} y2={H - pad.b} stroke="#1E3A8A" strokeWidth="1" strokeDasharray="3 2"/>
        </svg>
      </div>
    </div>
  )
}

// ── Historical Recovery Chart ──
function RecoveryChart() {
  const events = [
    { name: 'Gulf War I (1990)',        drop: -19.9, recovery: 26,   color: '#3B82F6' },
    { name: '9/11 (2001)',              drop: -11.6, recovery: 21,   color: '#6366F1' },
    { name: 'Iraq War (2003)',          drop: -14.7, recovery: 14.8, color: '#8B5CF6' },
    { name: '2008 Financial Crisis',   drop: -56.8, recovery: 68,   color: '#F59E0B' },
    { name: 'Sensex 26/11 (2008)',     drop: -12,   recovery: 18,   color: '#10B981' },
    { name: 'COVID Crash (2020)',      drop: -38,   recovery: 78,   color: '#06B6D4' },
    { name: 'Russia-Ukraine (2022)',   drop: -8,    recovery: 12,   color: '#2563EB' },
  ]
  const W = 560
  const barH = 22, gap = 8
  const chartH = events.length * (barH + gap)
  const padL = 148, padR = 72, padT = 28, padB = 16
  const iW = W - padL - padR
  const maxVal = 80
  const midX = padL + iW / 2

  return (
    <div className="bg-white border border-brand-border rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-brand-border">
        <p className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400">Global Market History</p>
        <p className="font-serif text-[1.1rem] font-bold text-slate-900">Initial Drop vs Recovery — Major Crises</p>
      </div>
      <div className="px-4 py-4">
        <svg width="100%" viewBox={`0 0 ${W} ${chartH + padT + padB}`} preserveAspectRatio="xMidYMid meet">
          <text x={midX - 10} y={padT - 8} textAnchor="end" fontSize="9" fill="#EF4444" fontWeight="700">DROP</text>
          <text x={midX + 10} y={padT - 8} textAnchor="start" fontSize="9" fill="#1E3A8A" fontWeight="700">RECOVERY</text>
          <line x1={midX} y1={padT - 18} x2={midX} y2={chartH + padT} stroke="#e2e8f0" strokeWidth="1"/>
          {events.map((e, i) => {
            const y = padT + i * (barH + gap)
            const dropW = (Math.abs(e.drop) / maxVal) * (iW / 2)
            const recW  = (e.recovery / maxVal) * (iW / 2)
            return (
              <g key={e.name}>
                <text x={padL - 8} y={y + barH / 2 + 4} textAnchor="end" fontSize="8.5" fill="#475569">{e.name}</text>
                <rect x={midX - dropW} y={y} width={dropW} height={barH} rx="3" fill="#FEE2E2"/>
                <text x={midX - dropW - 4} y={y + barH / 2 + 4} textAnchor="end" fontSize="8.5" fill="#EF4444" fontWeight="700">{e.drop}%</text>
                <rect x={midX} y={y} width={recW} height={barH} rx="3" fill={e.color} opacity="0.85"/>
                <text x={midX + recW + 4} y={y + barH / 2 + 4} textAnchor="start" fontSize="8.5" fill={e.color} fontWeight="700">+{e.recovery}%</text>
              </g>
            )
          })}
        </svg>
      </div>
    </div>
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
        <strong className="text-[.85rem] font-bold text-slate-900">{title}</strong>
      </div>
      <div className="text-[.85rem] text-slate-600 leading-relaxed">{children}</div>
    </div>
  )
}

function SH({ children }) {
  return (
    <h2 className="font-serif text-[1.45rem] font-bold text-slate-900 mt-12 mb-5 leading-snug flex items-center gap-3">
      <span className="block w-1 h-6 rounded-full bg-accent flex-shrink-0" />
      {children}
    </h2>
  )
}

export default function WarFinancePage() {
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
            style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.12), transparent 65%)', top: '-150px', right: '-100px' }} />

          <div className="relative z-10 max-w-[860px] mx-auto px-8 pt-16 pb-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[.78rem] font-medium text-white/35 hover:text-white/70 transition-colors mb-8">
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="text-[.65rem] font-semibold uppercase tracking-widest text-red-300 bg-red-500/15 px-2.5 py-1 rounded-full">
                🔴 Live Update — April 2026
              </span>
              <span className="text-[.72rem] text-white/35">April 1, 2026</span>
              <span className="text-[.72rem] text-white/35">· 6 min read</span>
            </div>
            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.12] mb-5">
              War &amp; Your Portfolio: What the Iran‑Israel‑USA<br className="hidden md:block"/>
              Conflict Means for Indian Investors
            </h1>
            <p className="text-[1rem] text-white/55 leading-relaxed max-w-[640px] mb-10">
              ₹47.53 lakh crore wiped from Indian markets in 23 days. Nifty at a 1-year low.
              Rupee at its worst in 14 years. FIIs selling a record ₹1.12 lakh crore in March alone.
              Here is what is really happening — and what you should do right now.
            </p>

            {/* India-specific live stat strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-10">
              {[
                { label: 'Nifty 50 drop', val: '–13%', sub: 'from pre-war levels', alert: true },
                { label: 'Rupee (INR/USD)', val: '₹94.71', sub: 'record 14-year low', alert: true },
                { label: 'FII outflows', val: '₹1.12L Cr', sub: 'March alone — record', alert: false },
                { label: 'Wealth wiped', val: '₹47.5L Cr', sub: 'in just 23 trading days', alert: false },
              ].map(({ label, val, sub, alert }) => (
                <div key={label} className="rounded-xl px-4 py-3"
                  style={{ background: alert ? 'rgba(239,68,68,0.12)' : 'rgba(255,255,255,0.06)', border: `1px solid ${alert ? 'rgba(239,68,68,0.25)' : 'rgba(255,255,255,0.10)'}` }}>
                  <p className="text-[.62rem] font-semibold uppercase tracking-widest mb-1"
                    style={{ color: alert ? '#fca5a5' : 'rgba(255,255,255,0.4)' }}>{label}</p>
                  <p className="font-serif text-[1.35rem] font-bold text-white leading-none mb-1">{val}</p>
                  <p className="text-[.7rem]" style={{ color: alert ? '#fca5a5' : 'rgba(255,255,255,0.38)' }}>{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARTICLE */}
        <article className="bg-white">
          <div className="max-w-[760px] mx-auto px-8 py-14">

            {/* Byline */}
            <div className="flex items-center gap-3 mb-10 pb-8 border-b border-brand-border">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #1E3A8A, #2563EB)' }}>S</div>
              <div>
                <p className="text-[.84rem] font-semibold text-slate-900">Synvestify Research Desk</p>
                <p className="text-[.72rem] text-slate-400">Updated April 1, 2026 · New Delhi</p>
              </div>
            </div>

            {/* Intro */}
            <p className="text-[1rem] text-slate-700 leading-[1.85] mb-5">
              The US-Israel war with Iran entered its fifth week. For global investors, it has been
              painful. For Indian investors specifically, the combination of forces at play makes this
              one of the most difficult macro environments since the 2020 COVID crash — and in some
              ways, harder to navigate because the triggers are external and deeply uncertain.
            </p>
            <p className="text-[1rem] text-slate-600 leading-[1.85] mb-8">
              This article is written specifically for Indian investors. We will tell you exactly what
              is happening to your markets, your currency, and your portfolio — and more importantly,
              what history tells us you should do about it.
            </p>

            <SH>The India Damage Report</SH>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: '📉', label: 'Nifty 50 fall (March)',   val: '–13% to –15%', sub: 'Worst month in years' },
                { icon: '💱', label: 'Rupee record low',        val: '₹94.71/USD',   sub: 'Biggest fall in 14 years — down 10% in FY26' },
                { icon: '🏦', label: 'FII selling (Mar 2026)',  val: '₹1.12L Cr',    sub: 'Record — surpasses Oct 2024\'s ₹94,000 Cr' },
                { icon: '💸', label: 'Market cap wiped',        val: '₹47.53L Cr',   sub: 'In 23 trading days since Feb 28' },
                { icon: '⛽', label: 'Govt excise cut',         val: '₹10/litre',    sub: 'On petrol & diesel to absorb oil shock' },
                { icon: '📊', label: 'India VIX surge',         val: '+119%',        sub: 'Fear index hit 27.88 in FY26' },
              ].map(({ icon, label, val, sub }) => (
                <div key={label} className="flex items-center gap-4 bg-brand-soft border border-brand-border rounded-xl p-4">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <p className="text-[.67rem] font-semibold uppercase tracking-widest text-slate-400">{label}</p>
                    <p className="font-serif text-[1.25rem] font-bold text-slate-900">{val}</p>
                    <p className="text-[.72rem] text-slate-500">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Nifty chart */}
            <div className="mb-4">
              <NiftyChart />
            </div>
            <p className="text-[.75rem] text-slate-400 text-center mb-8">Nifty 50 is currently near its 52-week low. The last time it traded at these levels was April 2025.</p>

            <SH>Why India Is More Exposed Than Most Countries</SH>

            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-5">
              India is not a bystander in this conflict. We are economically one of the most exposed countries in the world — for three structural reasons.
            </p>

            <InfoBox icon="🛢️" title="Reason 1 — We import 85% of our crude oil" color="#FFF7ED" borderColor="#FED7AA">
              India is the world&apos;s third-largest oil importer. We import over 85% of our crude requirements, and approximately <strong>50% of that oil transits through the Strait of Hormuz</strong> — the exact chokepoint Iran has effectively closed. Every $10 rise in Brent crude adds roughly ₹70,000–80,000 crore to India&apos;s annual import bill. At $108 a barrel — up from $78 when the war began — the incremental cost to India is estimated at <strong>$57.4 billion annually</strong>, according to Lakshmishree Investment research.
            </InfoBox>

            <InfoBox icon="💱" title="Reason 2 — The rupee is in freefall" color="#FEF2F2" borderColor="#FECACA">
              The Indian rupee hit a record low of ₹94.71 against the US dollar on March 27, 2026 — its steepest decline in 14 years. The currency has fallen over 10% in FY26 and 4% in March alone. A weaker rupee makes imported oil <strong>even more expensive in rupee terms</strong>, creates a negative feedback loop with FII outflows, and raises the cost of imports across electronics, edible oils, and pharmaceuticals. Goldman Sachs has forecast the rupee could fall to ₹95 under sustained pressure.
            </InfoBox>

            <InfoBox icon="🏦" title="Reason 3 — FIIs are running for the exit" color="#EFF6FF" borderColor="#BFDBFE">
              Foreign Institutional Investors pulled out a record <strong>₹1.12 lakh crore ($12.1 billion) in March 2026 alone</strong> — the worst monthly FII outflow in India&apos;s history, surpassing even October 2024. Total FII selling in 2026 has crossed ₹1.34 lakh crore. &quot;The longer the conflict persists, the deeper the negative impact on India&apos;s economic growth,&quot; said Peeyush Mittal, Portfolio Manager at Matthews Asia, speaking to CNBC.
            </InfoBox>

            <SH>The Oil Price Story</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-6">
              Brent crude was at $78 on February 28. It briefly crossed $111 when Israel struck Iran&apos;s LNG refinery. It has since settled around $106–$108 — still 38% above pre-war levels. Every Trump tweet about peace sends it down; every missile exchange sends it back up.
            </p>
            <div className="mb-8"><OilChart /></div>

            <SH>What Has Happened to Indian Sectors</SH>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="rounded-xl p-5 border" style={{ background: '#FEF2F2', borderColor: '#FECACA' }}>
                <p className="text-[.72rem] font-bold uppercase tracking-widest text-red-500 mb-3">⬇ Biggest Losers</p>
                {[
                  'Nifty Realty — down 21%',
                  'Nifty IT — down 20%',
                  'Nifty FMCG — down 13%',
                  'Aviation — IndiGo fell 9.15% in a single day',
                  'Paints — Asian Paints, Berger under pressure',
                  'Auto — Maruti, M&M corrected ~15%',
                  'Private Banks — HDFC Bank, ICICI Bank led falls',
                ].map(s => (
                  <div key={s} className="flex items-start gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"/>
                    <span className="text-[.82rem] text-slate-700">{s}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl p-5 border" style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}>
                <p className="text-[.72rem] font-bold uppercase tracking-widest text-green-600 mb-3">⬆ Relative Winners</p>
                {[
                  'Defence — HAL, BEL, Bharat Dynamics up 25–40%',
                  'Upstream Oil — ONGC, Oil India surging',
                  'Gold ETFs — up 9.2% to ₹1.89L/10g',
                  'IT exporters — TCS, HCL Tech (USD hedge)',
                  'Pharma exporters — Sun Pharma, Dr Reddy\'s',
                  'PSU Energy — NTPC, Power Grid resilient',
                  'Non-ferrous metals — benefiting from supply shock',
                ].map(s => (
                  <div key={s} className="flex items-start gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-1.5"/>
                    <span className="text-[.82rem] text-slate-700">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[.88rem] text-slate-500 leading-relaxed mb-8 bg-brand-soft border border-brand-border rounded-xl p-4">
              <strong className="text-slate-700">Defence note:</strong> The Indian government announced an emergency ₹80,000 crore defence procurement on March 4. This has driven defence PSUs into a strong bull run even as the broader market bleeds — a pattern that matches the Iraq War of 2003 exactly, according to ICICI Direct research.
            </p>

            <SH>The Macro Picture for India</SH>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: '📈',
                  label: 'Inflation rising',
                  text: 'The OECD raised India\'s inflation forecast to 5.1% for 2026. Edible oil prices have risen ₹11–20/kg. Petrol and diesel prices would have risen by ₹1/litre if the government hadn\'t cut excise duty by ₹10/litre (at significant fiscal cost). Input costs for FMCG, paints, tyres, and logistics are all rising.',
                  color: '#EF4444',
                },
                {
                  icon: '📉',
                  label: 'GDP growth at risk',
                  text: 'India\'s GDP growth may fall to 6.5% from the earlier forecast of 7.2%, according to Renaissance Investment Managers CEO Pankaj Murarka. HSBC\'s PMI for March showed India\'s private sector activity at its weakest since October 2022.',
                  color: '#F59E0B',
                },
                {
                  icon: '🏦',
                  label: 'RBI in a bind',
                  text: 'The RBI faces a classic dilemma — cut rates to support growth, or hold to defend inflation and the rupee. Fed Chair Powell has also signalled that rate cuts are on pause due to Iran-driven inflation. The RBI is expected to follow suit, keeping financial conditions tight for longer.',
                  color: '#6366F1',
                },
                {
                  icon: '💰',
                  label: 'Fiscal deficit widening',
                  text: 'The excise cut on petrol and diesel will cost the government significant tax revenue. Petroleum minister Hardeep Singh Puri acknowledged the government will take a "huge hit" on taxation to fund oil company losses. This widens the fiscal deficit at a time when capital outflows are already pressuring the rupee.',
                  color: '#EF4444',
                },
              ].map(({ icon, label, text, color }) => (
                <div key={label} className="border border-brand-border rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[.72rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ background: color + '12', color }}>{icon} {label}</span>
                  </div>
                  <p className="text-[.86rem] text-slate-500 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <PullQuote
              text="India is one of the most vulnerable countries to higher oil prices as its net oil imports amount to 3.5% of GDP."
              source="Hanna Luchnikava-Schorsch, Head of Asia-Pacific Economics, S&P Global"
            />

            <SH>What History Tells Indian Investors</SH>

            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-4">
              Here is the most important data point in this entire article. We analysed six major geopolitical events between 1990 and 2026. The average duration of market impact was <strong className="font-semibold text-slate-900">approximately 4 weeks</strong>. After the correction phase, the Sensex delivered:
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { period: '3 months', return: '+28%', sub: 'average Sensex return' },
                { period: '6 months', return: '+38%', sub: 'average Sensex return' },
                { period: '2–3 years', return: 'Strong', sub: 'favourable entry points' },
              ].map(({ period, return: ret, sub }) => (
                <div key={period} className="text-center bg-brand-soft border border-brand-border rounded-xl py-5 px-3">
                  <p className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400 mb-1">{period} after crisis</p>
                  <p className="font-serif text-[1.6rem] font-bold text-green-600">{ret}</p>
                  <p className="text-[.72rem] text-slate-500 mt-1">{sub}</p>
                </div>
              ))}
            </div>

            {/* Recovery chart */}
            <div className="mb-8"><RecoveryChart /></div>

            <div className="space-y-4 mb-8">
              {[
                {
                  event: 'Sensex during Kargil War — May 1999',
                  drop: '–18%',
                  recovery: '+57% in the following year',
                  detail: 'The Kargil conflict sent Indian markets into a sharp tailspin. Investors who held through the uncertainty were rewarded with massive gains as the economy reasserted its fundamentals.',
                  months: '6 months to full recovery',
                },
                {
                  event: 'Sensex during 26/11 Attacks — November 2008',
                  drop: '–12%',
                  recovery: '+18% in 12 months',
                  detail: 'Coming on top of the global financial crisis, 26/11 delivered a double blow to Indian markets. Yet within a year, the market had recovered substantially. Investors who stayed invested were vindicated.',
                  months: '12 months to full recovery',
                },
                {
                  event: 'Russia-Ukraine War — February 2022 (Nifty)',
                  drop: '–8%',
                  recovery: '+12% by December 2022',
                  detail: 'Nifty fell as oil crossed $130. By December 2022, Nifty delivered positive returns for the year — one of the only major indices globally to do so. The pattern mirrors our current situation almost exactly.',
                  months: '10 months to full recovery',
                },
                {
                  event: 'COVID Market Crash — March 2020 (Sensex)',
                  drop: '–38%',
                  recovery: '+78% in 12 months',
                  detail: 'The sharpest crash in living memory for most investors. Those who stayed the course — or increased their SIPs — saw the Sensex reach all-time highs within 12 months. Those who sold in panic locked in the worst losses of their financial lives.',
                  months: '7 months to full recovery',
                },
              ].map(({ event, drop, recovery, detail, months }) => (
                <div key={event} className="border border-brand-border rounded-xl p-5">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <h4 className="font-serif text-[1rem] font-semibold text-slate-900 flex-1">{event}</h4>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-[.72rem] font-bold text-red-500 bg-red-50 px-2.5 py-1 rounded-full">{drop}</span>
                      <span className="text-[.72rem] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">↑ {recovery}</span>
                    </div>
                  </div>
                  <p className="text-[.84rem] text-slate-500 leading-relaxed mb-2">{detail}</p>
                  <p className="text-[.72rem] font-semibold text-accent">⏱ {months}</p>
                </div>
              ))}
            </div>
           
            <SH>What You Should Do Right Now</SH>

            <InfoBox icon="💡" title="Your SIP is doing its job — let it run" color="#EFF6FF" borderColor="#BFDBFE">
              When NAV falls, your fixed monthly SIP buys more units. A ₹10,000 SIP that bought 100 units when NAV was ₹100 will buy 125 units if NAV drops to ₹80. That is 25% more ownership for the same money. The Nifty 13% correction means every SIP instalment today is buying significantly more than it was in January. <strong>Do not pause your SIP.</strong> This is precisely the moment it creates long-term wealth.
            </InfoBox>

            <InfoBox icon="📊" title="The cost of missing the best market days" color="#F0FDF4" borderColor="#BBF7D0">
              Studies of the Sensex over 20 years show that missing just the 10 best trading days reduces your returns by over 60%. Those best days almost always come <strong>during or immediately after periods of maximum fear</strong> — often triggered by a single diplomatic headline. The Dow surged 1,000 points on one Trump tweet. Indian markets will have an equivalent day. Investors who exited will miss it entirely.
            </InfoBox>

            <div className="space-y-3 mb-10">
              {[
                { num: '01', title: 'Do not make panic-driven decisions', desc: 'The worst financial decisions in Indian market history were made in March 2020, November 2008, and May 1999 — all during maximum fear. "Of course I should sell now" is the most expensive sentence in investing.' },
                { num: '02', title: 'Keep your SIPs running', desc: 'If anything, consider stepping up your SIP amount. The Nifty is 13% cheaper than it was six weeks ago. You are buying the same quality assets at a significant discount.' },
                { num: '03', title: 'Review allocation — not portfolio value', desc: 'If equity has drifted below your target due to the fall, this may be a rebalancing opportunity. Do not sell equity to "reduce risk" — you are selling at a loss and will likely miss the recovery.' },
                { num: '04', title: 'Ensure 6–12 months of emergency fund in liquid assets', desc: 'If your emergency fund is intact and your income is stable, you have no reason to touch your long-term investments. The portfolio\'s short-term value is irrelevant to your long-term goals.' },
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

            <SH>The Bottom Line for Indian Investors</SH>

            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-4">
              The Iran-Israel-USA conflict is the most significant external shock to India&apos;s economy since COVID. The numbers are real — ₹47 lakh crore of market cap erased, the rupee at a 14-year low, record FII outflows, and oil at 38% above pre-war levels.
            </p>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-4">
              But India has been here before. Kargil. 26/11. COVID. Russia-Ukraine. Every time, the same thing happened: the market fell, fear peaked, long-term investors stayed the course, and the market recovered — often sharply and without warning.
            </p>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-10">
              India&apos;s GDP growth remains among the strongest in the world. FII shorts are at levels historically associated with sharp reversals. Defence spending is surging. And every historical pattern says the recovery — when it comes — will reward those who stayed invested.
              <strong className="font-semibold text-slate-900"> Wars end. Markets recover. India grows. Your goals have not changed. Your plan should not either.</strong>
            </p>

            {/* CTA */}
            <div className="rounded-2xl p-8" style={{ background: '#1E3A8A' }}>
              <h3 className="font-serif text-[1.2rem] font-semibold text-white mb-2">
                Worried about your portfolio in this volatile market?
              </h3>
              <p className="text-[.88rem] text-white/50 mb-5 leading-relaxed">
                Book a free consultation. We&apos;ll review your portfolio, stress-test it against the
                current macro environment, and make sure your plan is built to last through this — and every crisis after it.
              </p>
              <Link href="/contact"
                className="inline-block bg-accent text-white text-[.92rem] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#1d4ed8] transition-colors">
                Book Free Consultation →
              </Link>
            </div>

            {/* Disclaimer */}
            <p className="text-[.72rem] text-slate-400 leading-relaxed mt-8 pt-6 border-t border-brand-border">
              <strong className="font-semibold">Disclaimer:</strong> This article is for educational and informational purposes only and does not constitute investment advice. Past performance is not indicative of future returns. Investments are subject to market risk. 
            </p>
          </div>
        </article>

      </main>
      <Footer />
    </>
  )
}
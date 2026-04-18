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

function PullQuote({ text }) {
  return (
    <div className="my-10 border-l-4 pl-6 py-2" style={{ borderColor: '#D97706' }}>
      <p className="font-serif text-[1.15rem] italic text-slate-700 leading-relaxed">&ldquo;{text}&rdquo;</p>
    </div>
  )
}

function InfoBox({ icon, title, children, color = '#FFF7ED', borderColor = '#FED7AA' }) {
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

// Gold price history chart SVG
function GoldHistoryChart() {
  const data = [
    { year: '2015', price: 26343 },
    { year: '2016', price: 28623 },
    { year: '2017', price: 29668 },
    { year: '2018', price: 31438 },
    { year: '2019', price: 35220 },
    { year: '2020', price: 48651 },
    { year: '2021', price: 47765 },
    { year: '2022', price: 52670 },
    { year: '2023', price: 60476 },
    { year: '2024', price: 72000 },
    { year: '2025', price: 94630 },
    { year: '2026', price: 152228 },
  ]

  const W = 560, H = 220
  const pad = { t: 20, r: 20, b: 40, l: 60 }
  const iW = W - pad.l - pad.r
  const iH = H - pad.t - pad.b
  const minP = 0, maxP = 160000

  const toX = i => pad.l + (i / (data.length - 1)) * iW
  const toY = v => pad.t + iH - ((v - minP) / (maxP - minP)) * iH

  const pathD = data.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toY(p.price).toFixed(1)}`).join(' ')
  const fillD = pathD + ` L${toX(data.length - 1).toFixed(1)},${H - pad.b} L${toX(0).toFixed(1)},${H - pad.b} Z`

  const fmt = v => v >= 100000 ? `₹${(v / 100000).toFixed(1)}L` : `₹${(v / 1000).toFixed(0)}K`

  return (
    <div className="bg-white border border-brand-border rounded-2xl overflow-hidden mb-8">
      <div className="px-6 py-4 border-b border-brand-border flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400">Gold Price in India (24K per 10g)</p>
          <p className="font-serif text-[1.1rem] font-bold text-slate-900">2015 to 2026 — The Long-Term Story</p>
        </div>
        <div className="text-right">
          <div className="font-serif text-[1.6rem] font-bold text-amber-500">₹1.52L</div>
          <div className="text-[.72rem] font-semibold text-amber-400">per 10g on Akshaya Tritiya</div>
        </div>
      </div>
      <div className="px-4 py-4">
        <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.02"/>
            </linearGradient>
          </defs>
          {[40000, 80000, 120000, 160000].map(v => (
            <g key={v}>
              <line x1={pad.l} y1={toY(v)} x2={W - pad.r} y2={toY(v)} stroke="#f1f5f9" strokeWidth="1"/>
              <text x={pad.l - 6} y={toY(v) + 4} textAnchor="end" fontSize="8" fill="#94a3b8">{fmt(v)}</text>
            </g>
          ))}
          <path d={fillD} fill="url(#goldGrad)"/>
          <path d={pathD} fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
          {data.map((p, i) => (
            <g key={i}>
              {(i === 0 || i === data.length - 1 || i === 6) && (
                <circle cx={toX(i)} cy={toY(p.price)} r="3.5" fill="white" stroke="#F59E0B" strokeWidth="1.5"/>
              )}
              <text x={toX(i)} y={H - pad.b + 14} textAnchor="middle" fontSize="8" fill="#94a3b8">{p.year}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}

// Gold vs other assets comparison
function ReturnsComparison() {
  const assets = [
    { name: 'Gold (India)', returns5yr: 118, returns10yr: 194, color: '#F59E0B' },
    { name: 'Nifty 50',     returns5yr: 102, returns10yr: 186, color: '#2563EB' },
    { name: 'FD (avg)',     returns5yr: 32,  returns10yr: 65,  color: '#10B981' },
    { name: 'Savings A/C', returns5yr: 18,  returns10yr: 38,  color: '#94A3B8' },
  ]
  const maxVal = 200
  const W = 560, barH = 28, gap = 10
  const padL = 100, padR = 60, padT = 30, padB = 10
  const iW = W - padL - padR

  return (
    <div className="bg-white border border-brand-border rounded-2xl overflow-hidden mb-8">
      <div className="px-6 py-4 border-b border-brand-border">
        <p className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400">Approximate Total Returns</p>
        <p className="font-serif text-[1.1rem] font-bold text-slate-900">Gold vs Other Assets — 5 Year & 10 Year</p>
      </div>
      <div className="px-4 py-4">
        <svg width="100%" viewBox={`0 0 ${W} ${padT + assets.length * (barH * 2 + gap + 12) + padB}`} preserveAspectRatio="xMidYMid meet">
          <text x={padL + iW * 0.25} y={padT - 8} textAnchor="middle" fontSize="8.5" fill="#64748B" fontWeight="600">5 YEAR</text>
          <text x={padL + iW * 0.75} y={padT - 8} textAnchor="middle" fontSize="8.5" fill="#94A3B8" fontWeight="600">10 YEAR</text>
          {assets.map((a, i) => {
            const y = padT + i * (barH * 2 + gap + 12)
            const w5 = (a.returns5yr / maxVal) * (iW / 2 - 10)
            const w10 = (a.returns10yr / maxVal) * (iW / 2 - 10)
            const midX = padL + iW / 2
            return (
              <g key={a.name}>
                <text x={padL - 8} y={y + barH + 4} textAnchor="end" fontSize="9" fill="#475569" fontWeight="500">{a.name}</text>
                {/* 5yr bar */}
                <rect x={padL} y={y} width={w5} height={barH} rx="4" fill={a.color} opacity="0.85"/>
                <text x={padL + w5 + 5} y={y + barH / 2 + 4} fontSize="9" fill={a.color} fontWeight="700">+{a.returns5yr}%</text>
                {/* 10yr bar */}
                <rect x={midX + 10} y={y} width={w10} height={barH} rx="4" fill={a.color} opacity="0.45"/>
                <text x={midX + 10 + w10 + 5} y={y + barH / 2 + 4} fontSize="9" fill="#94A3B8" fontWeight="700">+{a.returns10yr}%</text>
                <line x1={midX} y1={y - 4} x2={midX} y2={y + barH + 4} stroke="#e2e8f0" strokeWidth="1"/>
              </g>
            )
          })}
        </svg>
      </div>
      <p className="text-[.68rem] text-slate-400 px-6 pb-4">Returns are approximate, based on historical data. Past performance is not indicative of future results.</p>
    </div>
  )
}

export default function AkshayaTritiyaPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <section className="pt-[66px] relative overflow-hidden"
          style={{ background: 'linear-gradient(150deg, #0F172A 0%, #78350F 55%, #92400E 100%)' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
          <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.15), transparent 65%)', top: '-150px', right: '-80px' }} />

          <div className="relative z-10 max-w-[860px] mx-auto px-8 pt-16 pb-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[.78rem] font-medium text-white/35 hover:text-white/70 transition-colors mb-8">
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="text-[.65rem] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(245,158,11,0.2)', color: '#FCD34D' }}>
                🪙 Gold & Investing
              </span>
              <span className="text-[.72rem] text-white/35">April 18, 2026</span>
              <span className="text-[.72rem] text-white/35">· 7 min read</span>
            </div>
            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.12] mb-5">
              Akshaya Tritiya 2026: The Right Way<br className="hidden md:block"/> to Buy Gold This Year
            </h1>
            <p className="text-[1rem] leading-relaxed max-w-[640px] mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Gold is already at ₹1.52 lakh per 10g — near record highs. The Iran war, a weak rupee, and global uncertainty are all in play. Here is what smart investors should actually do on Akshaya Tritiya this year.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-10">
              {[
                { label: 'Gold price today', val: '₹1.52L', sub: 'per 10g (24K)', alert: true },
                { label: '10-year return', val: '+194%', sub: 'approximate in India', alert: false },
                { label: 'Akshaya Tritiya', val: 'Apr 19', sub: 'Muhurat: 10:49 AM', alert: false },
                { label: 'CAGR (42 years)', val: '10.9%', sub: 'backed by RBI data', alert: false },
              ].map(({ label, val, sub, alert }) => (
                <div key={label} className="rounded-xl px-4 py-3"
                  style={{ background: alert ? 'rgba(245,158,11,0.15)' : 'rgba(255,255,255,0.06)', border: `1px solid ${alert ? 'rgba(245,158,11,0.3)' : 'rgba(255,255,255,0.10)'}` }}>
                  <p className="text-[.62rem] font-semibold uppercase tracking-widest mb-1"
                    style={{ color: alert ? '#FCD34D' : 'rgba(255,255,255,0.4)' }}>{label}</p>
                  <p className="font-serif text-[1.4rem] font-bold text-white leading-none mb-1">{val}</p>
                  <p className="text-[.7rem]" style={{ color: alert ? '#FCD34D' : 'rgba(255,255,255,0.38)' }}>{sub}</p>
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
                <p className="text-[.72rem] text-slate-400">Published April 18, 2026 · New Delhi</p>
              </div>
            </div>

            {/* Intro */}
            <p className="text-[1rem] text-slate-700 leading-[1.85] mb-5">
              Every Akshaya Tritiya, jewellery stores across India overflow with buyers. The tradition is ancient — "Akshaya" means never diminishing, and gold purchased on this day is believed to bring lasting prosperity. For generations, Indian households have used this date as an anchor for gold investments.
            </p>
            <p className="text-[1rem] text-slate-600 leading-[1.85] mb-8">
              But Akshaya Tritiya 2026 is different from previous years in one important way. <strong className="font-semibold text-slate-900">Gold is already at near-record highs.</strong> The Iran-USA war, a collapsing rupee, and global inflation have sent prices to ₹1.52 lakh per 10g — up from ₹94,000 just a year ago. This changes the investment calculus significantly.
            </p>

            <SH>The Tradition and Its Meaning</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-4">
              Akshaya Tritiya falls on the third lunar day of the bright half of Vaishakha month. The word "Akshaya" translates to "never diminishing," forming the core belief that anything initiated or acquired on this day continues to grow.
            </p>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-4">
              A unique feature of Akshaya Tritiya is that it is an Abujh Muhurat — meaning the entire day is considered auspicious without the need for specific timing calculations. This year, the Tritiya Tithi begins at 10:49 AM on April 19 and ends at 7:27 AM on April 20.
            </p>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-8">
              Gold is closely associated with Goddess Lakshmi, and buying gold on this day is seen as inviting her blessings. Beyond the spiritual dimension, the tradition has endured because it has, quite simply, been good financial advice — gold bought on any Akshaya Tritiya over the past 40 years has multiplied in value.
            </p>

            <SH>Where Gold Stands Today</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-6">
              As of April 2026, gold is trading around ₹1,52,228 per 10g. To put this in context, it was ₹72,000 in 2024 and ₹48,000 in 2020. The rally has been driven by a perfect storm of factors — the Iran war, Strait of Hormuz disruptions, a weakening rupee, and global central banks buying gold aggressively.
            </p>

            <GoldHistoryChart />

            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-8">
              Over the last 42 years, gold's CAGR in India has been approximately 10.9%, growing from ₹1,858 in 1983 to over ₹1.52 lakh today. That is a return that has comfortably beaten inflation and kept pace with equities — with far lower volatility during crisis periods.
            </p>

            <SH>Gold vs Other Assets — The Data</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-6">
              The case for gold is not just cultural. Over the last decade, gold has delivered returns that compare favourably with equities — and with dramatically lower correlation to market crashes.
            </p>

            <ReturnsComparison />

            <InfoBox icon="💡" title="The real value of gold is not the return — it is the resilience" color="#FFF7ED" borderColor="#FED7AA">
              Gold does not replace equity in your portfolio. It complements it. During the COVID crash of 2020, when the Sensex fell 38%, gold rose 28%. During the Iran war of 2026, gold is up 41% while equity markets are down 13%. This is exactly what gold is supposed to do — be the anchor when everything else is sinking.
            </InfoBox>

            <SH>Should You Buy Gold This Akshaya Tritiya?</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-5">
              Akshaya Tritiya 2026 comes at a time when gold prices are already elevated due to strong global factors. Unlike earlier years, festive demand alone may not trigger a fresh rally. So is this the right time to buy?
            </p>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-5">
              The answer depends on your purpose. There are two completely different reasons to buy gold, and they have two completely different answers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="rounded-xl p-5 border" style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}>
                <p className="text-[.72rem] font-bold uppercase tracking-widest text-green-600 mb-3">✅ Buy if...</p>
                {[
                  'You are starting or continuing a systematic gold investment',
                  'Gold is below 10% of your total portfolio',
                  'You want a hedge against rupee depreciation',
                  'You are buying for a wedding or life event in the next 2–3 years',
                  'You want a non-correlated asset during global uncertainty',
                ].map(s => (
                  <div key={s} className="flex items-start gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-1.5"/>
                    <span className="text-[.82rem] text-slate-700">{s}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl p-5 border" style={{ background: '#FEF2F2', borderColor: '#FECACA' }}>
                <p className="text-[.72rem] font-bold uppercase tracking-widest text-red-500 mb-3">⚠️ Think twice if...</p>
                {[
                  'You are chasing short-term gains from the Iran war rally',
                  'Gold would exceed 15–20% of your total portfolio',
                  'You are taking a loan or using emergency fund to buy',
                  'You are buying physical gold purely as investment',
                  'You expect prices to keep rising indefinitely from here',
                ].map(s => (
                  <div key={s} className="flex items-start gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"/>
                    <span className="text-[.82rem] text-slate-700">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <PullQuote text="The auspiciousness of Akshaya Tritiya does not change based on the gold price. But your investment decision should." />

            <SH>Physical Gold vs Gold Funds vs Sovereign Gold Bond</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-6">
              How you buy gold matters as much as when you buy it. Here is the honest comparison:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  type: 'Physical Gold (jewellery)',
                  pros: 'Emotionally and culturally meaningful. Usable for weddings and ceremonies.',
                  cons: 'Making charges of 8–25%. Storage risk. No easy liquidity. GST applicable.',
                  verdict: 'Buy for cultural and emotional reasons. Not ideal as pure investment.',
                  tag: 'Cultural purchase',
                  tagColor: '#F59E0B',
                },
                {
                  type: 'Physical Gold (coins/bars)',
                  pros: 'Pure investment. No making charges. Easy to understand.',
                  cons: 'Storage cost and risk. No yield. Resale spread. GST applicable.',
                  verdict: 'Better than jewellery for investment but Gold Funds are more practical.',
                  tag: 'Acceptable',
                  tagColor: '#6366F1',
                },
                {
                  type: 'Gold Funds (ETFs or mutual funds)',
                  pros: 'No storage cost. Highly liquid. Tracks gold price exactly. No GST on purchase.',
                  cons: 'Small fund management fee (0.3–0.5%). Needs a demat account.',
                  verdict: 'Best option for pure gold investment. Buy on any day, not just Akshaya Tritiya.',
                  tag: 'Recommended',
                  tagColor: '#10B981',
                },
                {
                  type: 'Sovereign Gold Bond (SGB)',
                  pros: '2.5% annual interest over gold returns. No capital gains tax on redemption after 8 years. Government backed.',
                  cons: '8-year lock-in (5-year exit window). New tranches not always available.',
                  verdict: 'Best long-term option if you can find an active tranche. Superior to all other forms.',
                  tag: 'Best for long-term',
                  tagColor: '#2563EB',
                },
              ].map(({ type, pros, cons, verdict, tag, tagColor }) => (
                <div key={type} className="border border-brand-border rounded-xl p-5">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <h4 className="font-serif text-[1rem] font-semibold text-slate-900">{type}</h4>
                    <span className="text-[.65rem] font-bold px-2.5 py-1 rounded-full"
                      style={{ background: tagColor + '15', color: tagColor }}>{tag}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <p className="text-[.7rem] font-semibold text-green-600 uppercase tracking-widest mb-1">Pros</p>
                      <p className="text-[.82rem] text-slate-500 leading-relaxed">{pros}</p>
                    </div>
                    <div>
                      <p className="text-[.7rem] font-semibold text-red-500 uppercase tracking-widest mb-1">Cons</p>
                      <p className="text-[.82rem] text-slate-500 leading-relaxed">{cons}</p>
                    </div>
                  </div>
                  <div className="bg-brand-soft rounded-lg p-3">
                    <p className="text-[.82rem] font-semibold text-slate-700">→ {verdict}</p>
                  </div>
                </div>
              ))}
            </div>

            <SH>How Much Gold Should You Own?</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-5">
              We recommend keeping gold between 5% and 15% of your total investment portfolio. At current prices, this is a meaningful allocation — not a token one.
            </p>

            <InfoBox icon="📊" title="The 10% rule for gold allocation" color="#EFF6FF" borderColor="#BFDBFE">
              If your total investable portfolio is ₹20 lakhs, aim for ₹1.5–2 lakhs in gold (7–10%). At ₹1.52 lakh per 10g, that is roughly 10–13 grams of gold. You do not need to buy this all at once — a monthly Gold fund SIP of ₹5,000–10,000 achieves the same result more efficiently through rupee cost averaging.
            </InfoBox>

            <SH>The Synvestify View on Gold in 2026</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-4">
              Gold at ₹1.52 lakh is not cheap. Anyone who tells you to buy aggressively at these levels without considering your overall portfolio is giving you festive advice, not financial advice.
            </p>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-4">
              That said, gold's role in your portfolio has not changed. The Iran war has demonstrated — again — that when equity markets panic, gold holds its ground. The rupee's 10% decline this year has made imported goods more expensive for every Indian household. Gold in your portfolio partially offsets that.
            </p>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-10">
              Our recommendation: if you are underweight gold (below 7–10% of portfolio), this Akshaya Tritiya is a good trigger to start. Use a Gold ETF or Mutual Fund. Buy systematically, not in a lump sum at peak prices. And if you are already at your target allocation — the most auspicious thing you can do today is keep your SIPs running and let your equity portfolio recover.
            </p>

            {/* CTA */}
            <div className="rounded-2xl p-8" style={{ background: '#1E3A8A' }}>
              <h3 className="font-serif text-[1.2rem] font-semibold text-white mb-2">
                Not sure how much gold fits into your portfolio?
              </h3>
              <p className="text-[.88rem] mb-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Every investor&apos;s gold allocation depends on their age, risk profile, existing portfolio, and goals. Book a free consultation — we&apos;ll review your complete portfolio and tell you exactly where gold fits.
              </p>
              <Link href="/contact"
                className="inline-block bg-accent text-white text-[.92rem] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#1d4ed8] transition-colors">
                Book Free Consultation →
              </Link>
            </div>

            <p className="text-[.72rem] text-slate-400 leading-relaxed mt-8 pt-6 border-t border-brand-border">
              <strong className="font-semibold">Disclaimer:</strong> This article is for educational and informational purposes only and does not constitute investment advice. Gold prices referenced are as of April 18–19, 2026. Past performance is not indicative of future returns. Investments are subject to market risk. Please consult your financial advisor before making any investment decisions.
            </p>

          </div>
        </article>

      </main>
      <Footer />
    </>
  )
}

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: "The Real Cost of Your Child's Education — Nursery to Post-Graduation | Synvestify",
  description: 'Education inflation in India runs at 10–12% per year — nearly double the general rate. A ₹25 lakh MBA today will cost over ₹1 crore in 15 years. Here is what every parent needs to know and plan for.',
  alternates: { canonical: 'https://www.synvestify.in/blog/education-cost-india' },
  openGraph: {
    title: "The Real Cost of Your Child's Education — Nursery to Post-Graduation",
    description: 'Education inflation in India runs at 10–12% per year. A ₹25 lakh MBA today will cost over ₹1 crore in 15 years.',
    url: 'https://www.synvestify.in/blog/education-cost-india',
    siteName: 'Synvestify',
    type: 'article',
    images: [{ url: 'https://www.synvestify.in/images/blog/education-cost.jpg', width: 1200, height: 630, alt: 'Cost of Education in India' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Real Cost of Your Child's Education — Nursery to Post-Graduation",
    description: 'Education inflation in India runs at 10–12% per year. A ₹25 lakh MBA today will cost over ₹1 crore in 15 years.',
    images: ['https://www.synvestify.in/images/blog/education-cost.jpg'],
  },
}

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
    <div className="my-10 border-l-4 border-teal-500 pl-6 py-2">
      <p className="font-serif text-[1.15rem] italic text-slate-700 leading-relaxed mb-2">&ldquo;{text}&rdquo;</p>
      {source && <p className="text-[.75rem] font-semibold uppercase tracking-widest text-slate-400">— {source}</p>}
    </div>
  )
}

function InfoBox({ icon, title, children, color = '#F0FDFA', borderColor = '#99F6E4' }) {
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

function InflationChart() {
  const data = [
    { label: 'General CPI', rate: 4,    color: '#94A3B8' },
    { label: 'Food & Fuel', rate: 5.5,  color: '#6366F1' },
    { label: 'Healthcare',  rate: 7.5,  color: '#2563EB' },
    { label: 'Education',   rate: 11,   color: '#0D9488' },
    { label: 'Foreign Edu', rate: 13.5, color: '#DC2626' },
  ]
  const W = 560, H = 200
  const pad = { t: 20, r: 60, b: 40, l: 110 }
  const iW = W - pad.l - pad.r
  const iH = H - pad.t - pad.b
  const maxVal = 16
  const rowH = iH / data.length

  return (
    <div className="bg-white border border-brand-border rounded-2xl overflow-hidden mb-8">
      <div className="px-6 py-4 border-b border-brand-border">
        <p className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400">India — Approximate 2026</p>
        <p className="font-serif text-[1.1rem] font-bold text-slate-900">Education Inflation vs Other Categories (annual %)</p>
      </div>
      <div className="px-4 py-4">
        <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
          {data.map((d, i) => {
            const y = pad.t + i * rowH
            const bH = rowH - 5
            const bW = (d.rate / maxVal) * iW
            return (
              <g key={d.label}>
                <text x={pad.l - 8} y={y + bH / 2 + 4} textAnchor="end" fontSize="9.5" fill="#475569" fontWeight="500">{d.label}</text>
                <rect x={pad.l} y={y} width={bW} height={bH} rx="3" fill={d.color} opacity="0.85" />
                <text x={pad.l + bW + 6} y={y + bH / 2 + 4} fontSize="10" fill={d.color} fontWeight="700">{d.rate}%</text>
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}

function CostProjectionChart() {
  const data = [
    { label: 'Today (2026)',   val: 55,  color: '#0D9488' },
    { label: '5 yrs (2031)',   val: 89,  color: '#0891B2' },
    { label: '10 yrs (2036)',  val: 143, color: '#2563EB' },
    { label: '15 yrs (2041)',  val: 230, color: '#7C3AED' },
    { label: '18 yrs (2044)',  val: 305, color: '#DC2626' },
  ]
  const W = 560, H = 220
  const pad = { t: 20, r: 80, b: 40, l: 120 }
  const iW = W - pad.l - pad.r
  const iH = H - pad.t - pad.b
  const maxVal = 320
  const rowH = iH / data.length
  const baseW = (55 / maxVal) * iW

  return (
    <div className="bg-white border border-brand-border rounded-2xl overflow-hidden mb-8">
      <div className="px-6 py-4 border-b border-brand-border">
        <p className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400">Mid-tier urban India · ₹55L baseline today</p>
        <p className="font-serif text-[1.1rem] font-bold text-slate-900">Projected Total Education Cost (Nursery → PG) at 10% Inflation</p>
      </div>
      <div className="px-4 py-4">
        <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
          {data.map((d, i) => {
            const y = pad.t + i * rowH
            const bH = rowH - 6
            const bW = (d.val / maxVal) * iW
            return (
              <g key={d.label}>
                <text x={pad.l - 8} y={y + bH / 2 + 4} textAnchor="end" fontSize="9" fill="#475569">{d.label}</text>
                <rect x={pad.l} y={y} width={baseW} height={bH} rx="3" fill={d.color} opacity="0.18" />
                <rect x={pad.l} y={y} width={bW}    height={bH} rx="3" fill={d.color} opacity={i === 0 ? 0.9 : 0.72} />
                <text x={pad.l + bW + 6} y={y + bH / 2 + 4} fontSize="9.5" fill={d.color} fontWeight="700">₹{d.val}L</text>
              </g>
            )
          })}
        </svg>
      </div>
      <p className="text-[.68rem] text-slate-400 px-6 pb-4">Mid-tier private school + coaching + IIT/private UG + IIM-equivalent PG. Approximate projections only.</p>
    </div>
  )
}

const phases = [
  {
    emoji: '🧒', title: 'Pre-School & Nursery', period: 'Ages 2–5 · 3 years',
    color: '#0D9488', bg: '#F0FDFA', border: '#99F6E4',
    today: '₹1.5–6 lakh', future: '₹4–16 lakh', horizon: '15 years from now',
    detail: 'Metro playschools now charge ₹1–2 lakh per year. Premium pre-schools in Delhi and Mumbai charge ₹3–4 lakh per year. Add transport, uniforms, and activity fees on top.',
    tip: 'Start a ₹2,000–5,000 SIP at birth. The 3-year horizon is short but the investing habit matters more than the amount at this stage.',
  },
  {
    emoji: '📚', title: 'Primary School (Class 1–5)', period: 'Ages 6–10 · 5 years',
    color: '#0891B2', bg: '#ECFEFF', border: '#A5F3FC',
    today: '₹4–20 lakh', future: '₹10–55 lakh', horizon: '10 years from now',
    detail: 'Mid-range private schools: ₹2–4 lakh per year. International schools: ₹6–10 lakh per year. Hidden extras — Olympiads, coding classes, sports coaching — add 25–30% to the headline fee.',
    tip: 'Budget school fees from current income. The SIP you started at birth is building your college corpus — do not touch it for school.',
  },
  {
    emoji: '🏫', title: 'Secondary + Senior Secondary (Class 6–12)', period: 'Ages 11–17 · 7 years',
    color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE',
    today: '₹7–35 lakh', future: '₹20 lakh–1 crore', horizon: '10–15 years from now',
    detail: 'The longest and most expensive school phase. JEE/NEET coaching alone costs ₹1.5–4 lakh per year for 2–3 years. IB curriculum schools charge ₹12–15 lakh per year.',
    tip: 'Coaching fees are a separate budget line — plan ₹2–4L/year from age 14. Start shifting your long-term corpus from equity to hybrid as college nears.',
  },
  {
    emoji: '🎓', title: 'UG Degree (B.Tech / MBBS / BA)', period: 'Ages 18–21 · 3–5 years',
    color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE',
    today: '₹6–50 lakh', future: '₹25 lakh–2 crore', horizon: '15–18 years from now',
    detail: 'IIT B.Tech: ₹8–13 lakh total. Private engineering: ₹12–25 lakh. Private MBBS: ₹50 lakh–1.2 crore. Add hostel and living expenses of ₹1.5–3 lakh per year on top.',
    tip: 'This is the single largest outflow. Your 15-year SIP should be specifically targeted at this phase. Move to debt funds 2 years before your child turns 18.',
  },
  {
    emoji: '💼', title: 'PG Degree (MBA / M.Tech / MS)', period: 'Ages 22–24 · 1–2 years',
    color: '#DC2626', bg: '#FEF2F2', border: '#FECACA',
    today: '₹4–28 lakh', future: '₹16 lakh–1.1 crore', horizon: '20+ years from now',
    detail: 'IIM Ahmedabad MBA: ₹27.5 lakh. IIM Bangalore: ₹26 lakh. IIM Calcutta: ₹27 lakh. Range across all IIMs: ₹17–27.5 lakh for the 2026–28 batch.',
    tip: 'Many families fund PG through education loans. Still plan for 30–50% from your corpus. The rest can be covered by an education loan on your child\'s first salary.',
  },
]

export default function EducationCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: "The Real Cost of Your Child's Education — Nursery to Post-Graduation",
        description: 'Education inflation in India runs at 10–12% per year — nearly double the general rate. A ₹25 lakh MBA today will cost over ₹1 crore in 15 years.',
        image: 'https://www.synvestify.in/images/blog/education-cost.jpg',
        datePublished: '2026-05-28',
        dateModified: '2026-05-28',
        author: { '@type': 'Organization', name: 'Synvestify Research Desk', url: 'https://www.synvestify.in' },
        publisher: { '@type': 'Organization', name: 'Synvestify', url: 'https://www.synvestify.in' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.synvestify.in/blog/education-cost-india' },
      }) }} />
      <Navbar />
      <main>

        {/* HERO */}
        <section className="pt-[66px] relative overflow-hidden"
          style={{ background: 'linear-gradient(150deg, #0F172A 0%, #134E4A 55%, #0F766E 100%)' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
          <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.22), transparent 65%)', top: '-150px', right: '-80px' }} />

          <div className="relative z-10 max-w-[860px] mx-auto px-8 pt-16 pb-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[.78rem] font-medium text-white/35 hover:text-white/70 transition-colors mb-8">
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="text-[.65rem] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{ color: '#5EEAD4', background: 'rgba(94,234,212,0.15)' }}>
                🎓 Child Education Planning
              </span>
              <span className="text-[.72rem] text-white/35">May 28, 2026</span>
              <span className="text-[.72rem] text-white/35">· 6 min read</span>
            </div>
            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.12] mb-5">
              The Real Cost of Your Child&apos;s Education:<br className="hidden md:block" /> Nursery to Post-Graduation
            </h1>
            <p className="text-[1rem] text-white/55 leading-relaxed max-w-[640px] mb-10">
              Education inflation in India runs at 10–12% per year — nearly double the general rate. A ₹25 lakh MBA today will cost over ₹1 crore in 15 years. Here is what every parent needs to know and plan for.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-10">
              {[
                { label: 'Education inflation', val: '10–12%', sub: 'per year vs 5% general CPI' },
                { label: 'Costs double every', val: '6–7 yrs', sub: 'at current inflation rate' },
                { label: "For today's newborn", val: '₹1.2–3Cr', sub: 'nursery to post-graduation' },
                { label: 'SIP from birth', val: '₹10K/mo', sub: 'builds ₹76L by age 18' },
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
                style={{ background: 'linear-gradient(135deg, #134E4A, #0D9488)' }}>S</div>
              <div>
                <p className="text-[.84rem] font-semibold text-slate-900">Synvestify Research Desk</p>
                <p className="text-[.72rem] text-slate-400">Published May 28, 2026 · New Delhi</p>
              </div>
            </div>

            {/* Intro */}
            <p className="text-[1rem] text-slate-700 leading-[1.85] mb-5">
              Ask any Indian parent what keeps them up at night — after housing — and the answer is their child&apos;s education. From nursery admission fees to an MBA at IIM Ahmedabad (currently ₹27.5 lakh for two years), the cost of educating a child in India has become a multi-decade financial project. And unlike most other expenses, it inflates faster than your salary grows.
            </p>
            <p className="text-[1rem] text-slate-600 leading-[1.85] mb-8">
              While consumer inflation averages 3–5%, education costs rise at 10–12% annually. At that rate, a course costing ₹10 lakh today will cost roughly ₹40 lakh in 15 years. Most parents feel this instinctively every April when the fee circular arrives — but few have done the complete math across the full 20-year lifetime of their child&apos;s education.
            </p>

            {/* Key numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: '📈', title: 'Education inflation', val: '10–12% / year', desc: 'Nearly double the general CPI. Sustained for over two decades with no sign of slowing.' },
                { icon: '💸', title: 'Total cost today', val: '₹30–80 lakh', desc: 'Nursery to post-graduation, mid-tier urban India. Top-tier adds 50–100% more.' },
                { icon: '📅', title: "For today's newborn", val: '₹1.2–3 crore', desc: 'The same education journey in 18–22 years at 10% annual inflation.' },
              ].map(({ icon, title, val, desc }) => (
                <div key={title} className="bg-brand-soft border border-brand-border rounded-xl p-5 text-center">
                  <p className="text-2xl mb-2">{icon}</p>
                  <p className="text-[.72rem] font-semibold uppercase tracking-widest text-slate-400 mb-1">{title}</p>
                  <p className="font-serif text-[1.1rem] font-bold text-slate-900 mb-1">{val}</p>
                  <p className="text-[.76rem] text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <SH>Why Education Inflation Hits Harder</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-5">
              Education operates in a market with no real price elasticity. Parents do not comparison-shop for schools the way they buy groceries. Switching costs are enormous, demand for quality institutions far exceeds supply, and private schools raise fees every year citing infrastructure, technology, and regulatory compliance. The result is a structurally higher inflation rate that shows no sign of slowing.
            </p>

            <InflationChart />

            <SH>The Lifetime Cost — Phase by Phase</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-8">
              A child&apos;s education in India spans roughly 20 years across five distinct phases. Here is what each costs today in urban India — and what it will cost for a child born in 2026.
            </p>

            <div className="space-y-5 mb-10">
              {phases.map(({ emoji, title, period, color, bg, border, today, future, horizon, detail, tip }) => (
                <div key={title} className="rounded-2xl overflow-hidden border-2" style={{ borderColor: border }}>
                  <div className="px-5 py-4 flex items-center gap-3" style={{ background: color }}>
                    <span className="text-2xl">{emoji}</span>
                    <div>
                      <p className="font-serif text-[1rem] font-bold text-white leading-none">{title}</p>
                      <p className="text-[.68rem] text-white/55 mt-0.5">{period}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 divide-x" style={{ background: bg, borderColor: border }}>
                    <div className="px-5 py-3" style={{ borderColor: border }}>
                      <p className="text-[.62rem] font-semibold uppercase tracking-widest mb-1" style={{ color }}>Cost Today</p>
                      <p className="text-[.95rem] font-bold text-slate-900">{today}</p>
                    </div>
                    <div className="px-5 py-3">
                      <p className="text-[.62rem] font-semibold uppercase tracking-widest mb-1" style={{ color }}>{horizon}</p>
                      <p className="text-[.95rem] font-bold text-slate-900">{future}</p>
                    </div>
                  </div>
                  <div className="px-5 py-4 space-y-3" style={{ background: bg }}>
                    <p className="text-[.87rem] text-slate-600 leading-relaxed">{detail}</p>
                    <div className="bg-white rounded-xl p-3.5 border" style={{ borderColor: border }}>
                      <p className="text-[.68rem] font-bold uppercase tracking-widest mb-1" style={{ color }}>Planning Tip</p>
                      <p className="text-[.82rem] text-slate-600 leading-relaxed">{tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <CostProjectionChart />

            <PullQuote
              text="The hidden costs are what catch most parents off-guard. Coaching fees, hostel charges, activity fees, and 'development charges' can add 25–40% on top of headline tuition. Most parents plan only for college but forget the 12 years of school fees that come before it."
              source="Synvestify Research Desk"
            />

            <SH>What Most Parents Get Wrong</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-5">
              The biggest mistake is not failing to save — most Indian parents save diligently. The mistake is saving in the wrong instruments, treating education as a single lump sum, and starting too late.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: '❌', title: 'FDs/LIC/Children Plans for the education fund', desc: 'An FD/LIC/Children plan earning 6–7% against 10–12% education inflation means you lose 3–5% in real purchasing power every year. Over 15 years, this compounds into a shortfall of tens of lakhs.' },
                { icon: '❌', title: 'Planning for a single lump sum', desc: 'Education is a continuous 20-year outflow. School fees start at age 3. Coaching at 15. College at 18. PG at 22. Each phase needs its own funding strategy.' },
                { icon: '❌', title: 'Starting the SIP too late', desc: 'Delaying by 8 years (starting at 8 instead of birth) cuts the age-18 corpus from ₹1.52 crore to under ₹40 lakh — for the exact same monthly SIP amount.' },
                { icon: '❌', title: 'Ignoring JEE/NEET coaching costs', desc: 'Coaching alone runs ₹1.5–4 lakh per year for 2–3 years. Most education planning calculators don\'t include it. It can add ₹5–12 lakh to the total bill.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="rounded-xl p-5 border border-red-100 bg-red-50">
                  <p className="text-xl mb-2">{icon}</p>
                  <p className="text-[.88rem] font-semibold text-slate-900 mb-2">{title}</p>
                  <p className="text-[.82rem] text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <SH>The Education Fund Playbook</SH>

            <div className="space-y-3 mb-10">
              {[
                { num: '01', title: 'Estimate the full cost — not just college', desc: 'Map out all five phases: nursery, primary, secondary, UG, PG. Apply 10% inflation for the years until each milestone. Most parents are shocked at the real number.' },
                { num: '02', title: 'Start a dedicated SIP at birth', desc: 'Equity mutual funds averaging 12–14% CAGR over 15+ years can outpace education inflation. A ₹10,000/month SIP from birth grows to approximately ₹76 lakh by age 18.' },
                { num: '03', title: 'Step up by 10% every year', desc: 'Increasing your SIP by 10% each year boosts the final corpus by 50–60%. A ₹10,000 SIP with step-up reaches approximately ₹1.5 crore by age 18 — enough for a premium Indian education.' },
                { num: '04', title: 'Match the instrument to the time horizon', desc: 'Equity for milestones 10+ years away. Hybrid funds for 3–5 years. Liquid or debt funds for under 2 years. Do not keep UG money in equity when your child is 15.' },
                { num: '05', title: 'Never dip into the college fund for school fees', desc: 'Budget annual school fees from current monthly income. The long-term SIP is sacred — it is only for the big-ticket college and PG phases. Keep them separate.' },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex items-start gap-4 bg-brand-soft border border-brand-border rounded-xl p-5">
                  <span className="font-serif text-[1.3rem] font-bold flex-shrink-0 leading-none mt-0.5" style={{ color: '#0D9488' }}>{num}</span>
                  <div>
                    <p className="text-[.9rem] font-semibold text-slate-900 mb-1">{title}</p>
                    <p className="text-[.82rem] text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <SH>SIP Illustration — What You Need to Start Today</SH>

            <div className="rounded-2xl overflow-hidden border border-brand-border mb-8">
              <div className="px-6 py-4 border-b border-brand-border" style={{ background: '#134E4A' }}>
                <p className="font-serif text-[.95rem] font-semibold text-white">Monthly SIP → Corpus at Age 18 (at 12% CAGR)</p>
                <p className="text-[.72rem] text-white/40 mt-1">Starting from birth. Illustrative only — actual mutual fund returns vary and are subject to market risk.</p>
              </div>
              <div className="bg-white">
                <div className="grid grid-cols-4 px-5 py-3 border-b border-brand-border">
                  {['Monthly SIP', 'Duration', 'Return', 'Corpus at 18'].map((h) => (
                    <span key={h} className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400">{h}</span>
                  ))}
                </div>
                {[
                  ['₹5,000',                  '18 years', '12%', '₹37.9 lakh'],
                  ['₹10,000',                 '18 years', '12%', '₹75.8 lakh'],
                  ['₹10,000 + 10% step-up',   '18 years', '12%', '₹1.52 crore'],
                  ['₹20,000 + 10% step-up',   '18 years', '12%', '₹3.04 crore'],
                ].map(([sip, dur, ret, corpus], i) => (
                  <div key={i} className={`grid grid-cols-4 px-5 py-3.5 ${i < 3 ? 'border-b border-brand-border' : ''} ${i % 2 === 1 ? 'bg-brand-soft' : ''}`}>
                    <span className="text-[.86rem] font-semibold" style={{ color: '#0D9488' }}>{sip}</span>
                    <span className="text-[.84rem] text-slate-500">{dur}</span>
                    <span className="text-[.84rem] text-slate-500">{ret}</span>
                    <span className="text-[.88rem] font-bold text-slate-900">{corpus}</span>
                  </div>
                ))}
              </div>
            </div>

            <InfoBox icon="📌" title="The step-up advantage — why 10% more each year matters" color="#F0FDFA" borderColor="#99F6E4">
              A flat ₹10,000 SIP for 18 years at 12% CAGR = <strong>₹75.8 lakh.</strong><br />
              The same SIP with a 10% annual step-up = <strong>₹1.52 crore.</strong><br />
              That is <strong>2× the corpus</strong> for an increase of just ₹1,000 in Year 2. The step-up costs very little early on but compounds massively over 18 years. Set it up once, forget it, let it grow.
            </InfoBox>

            <SH>The Bottom Line</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-4">
              The math is unforgiving — but it works in your favour if you start early. A ₹10,000 monthly SIP with a 10% annual step-up, started at birth, can build over ₹1.5 crore by age 18. That is enough for a premium undergraduate and postgraduate education anywhere in India.
            </p>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-10">
              Delay the same by 8 years and the corpus shrinks to under ₹40 lakh — for the exact same monthly investment. Education inflation at 10–12% is the fastest-rising cost for Indian families. FDs and gold alone will not keep pace.
              <strong className="font-semibold text-slate-900"> Start your child&apos;s education SIP today — whatever amount you can manage — and step it up every year. Because whatever your child studies in 2040 will cost far more than you expect.</strong>
            </p>

            {/* CTA */}
            <div className="rounded-2xl p-8" style={{ background: '#134E4A' }}>
              <h3 className="font-serif text-[1.2rem] font-semibold text-white mb-2">
                How much do you need for your child&apos;s education?
              </h3>
              <p className="text-[.88rem] text-white/50 mb-5 leading-relaxed">
                Book a free consultation. We&apos;ll calculate the full cost of your child&apos;s education at current inflation, show you exactly how much to invest each month, and build a goal-based plan so you never fall short.
              </p>
              <Link href="/contact"
                className="inline-block bg-accent text-white text-[.92rem] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#1d4ed8] transition-colors">
                Book Free Consultation →
              </Link>
              <p className="text-[.78rem] text-white/45 mt-5">
                Or explore our{' '}
                <Link href="/goal-based-planning" className="text-white/70 hover:text-white underline underline-offset-2 transition-colors">
                  Goal-Based Planning service →
                </Link>
              </p>
            </div>

            <p className="text-[.72rem] text-slate-400 leading-relaxed mt-8 pt-6 border-t border-brand-border">
              <strong className="font-semibold">Disclaimer:</strong> This article is for educational and informational purposes only and does not constitute investment advice. Cost estimates are approximate and based on mid-tier urban India as of 2026. Education inflation rates are estimates based on historical trends. Mutual fund returns are subject to market risk. Past performance does not guarantee future results. Please consult your SEBI-registered financial advisor before making investment decisions.
            </p>

          </div>
        </article>

      </main>
      <Footer />
    </>
  )
}

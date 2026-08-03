import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Job Security Isn\'t What It Used to Be: A Financial Safety Net Plan for the AI Era | Synvestify',
  description: 'Nearly 80,000 tech workers lost their jobs in Q1 2026 alone. India ranks second globally in AI-related layoffs. Here is how to build a 5-layer financial safety net that holds — even when your job doesn\'t.',
  alternates: { canonical: 'https://www.synvestify.in/blog/job-security-ai-era' },
  openGraph: {
    title: 'Job Security Isn\'t What It Used to Be: A Financial Safety Net Plan for the AI Era',
    description: 'Nearly 80,000 tech workers lost their jobs in Q1 2026. India ranks second globally in AI-related layoffs. Here is how to build a 5-layer financial safety net.',
    url: 'https://www.synvestify.in/blog/job-security-ai-era',
    siteName: 'Synvestify',
    type: 'article',
    images: [{ url: 'https://www.synvestify.in/images/blog/job_security_ai.png', width: 1200, height: 630, alt: 'Financial Safety Net for the AI Era' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Job Security Isn\'t What It Used to Be: A Financial Safety Net Plan for the AI Era',
    description: 'Nearly 80,000 tech workers lost their jobs in Q1 2026. Here is how to build a 5-layer financial safety net.',
    images: ['https://www.synvestify.in/images/blog/job_security_ai.png'],
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

function InfoBox({ icon, title, children }) {
  return (
    <div className="rounded-xl p-5 my-6 bg-blue-50 border border-blue-200">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{icon}</span>
        <strong className="text-[.88rem] font-bold text-slate-900">{title}</strong>
      </div>
      <div className="text-[.85rem] text-slate-700 leading-relaxed">{children}</div>
    </div>
  )
}

const layoffs = [
  { company: 'Oracle',    count: '30,000',  note: 'roles eliminated globally' },
  { company: 'Amazon',    count: '16,000+', note: 'corporate positions cut'   },
  { company: 'Meta',      count: '8,000',   note: 'fresh round of layoffs'    },
  { company: 'Cognizant', count: '12–15K',  note: 'pivot to automation'       },
]

// Each layer: pastel header bg + dark text + lighter strip bg
const layers = [
  {
    num: '01', emoji: '🛡️',
    title: 'Emergency Cash Buffer',
    subtitle: '9 months of survival expenses in liquid form',
    hBg: '#DCFCE7', hText: '#14532D', hSub: '#166534', numCol: '#16A34A',
    sBg: '#F0FDF4', border: '#86EFAC', labelCol: '#16A34A',
    metrics: [
      { label: 'How Much',            val: '9 Months'   },
      { label: 'If ₹80K/mo expenses', val: '₹5–7L'      },
      { label: 'Where',               val: 'Liquid Fund' },
    ],
    body: 'The old 3-month rule was built for an era when jobs came in weeks. In 2026, tech job searches average 5–10 months. Split between a high-interest savings account and a liquid mutual fund. Your survival number = rent/EMI + groceries + utilities + insurance + school fees. Not subscriptions. Not dining out.',
  },
  {
    num: '02', emoji: '🏥',
    title: 'Personal Health Insurance',
    subtitle: 'Your biggest single financial risk',
    hBg: '#FEE2E2', hText: '#7F1D1D', hSub: '#991B1B', numCol: '#DC2626',
    sBg: '#FFF5F5', border: '#FECACA', labelCol: '#DC2626',
    metrics: [
      { label: 'Medical Inflation',     val: '12–15%'  },
      { label: 'Metro Hospitalisation', val: '₹3–8L'   },
      { label: 'Min Cover',             val: '₹10–25L' },
    ],
    body: 'Your employer\'s group cover vanishes the day you lose your job — exactly when you need it most. Buy a personal policy while still employed: ₹10L minimum individual, ₹15–25L for a family, with a super top-up. Individual health insurance is now completely GST-free (0%) since September 2025 — the 18% GST that previously inflated premiums has been fully removed.',
  },
  {
    num: '03', emoji: '👨‍👩‍👧',
    title: 'Term Life Insurance',
    subtitle: 'The absolute non-negotiable',
    hBg: '#DBEAFE', hText: '#1E3A8A', hSub: '#1E40AF', numCol: '#2563EB',
    sBg: '#EFF6FF', border: '#BFDBFE', labelCol: '#2563EB',
    metrics: [
      { label: 'Cover Needed',    val: '10–15× Income' },
      { label: '₹1Cr Cost',      val: '₹700–900/mo'  },
      { label: 'Ownership Rate', val: 'Only 43%'      },
    ],
    body: 'A 30-year-old can get ₹1 crore cover for ₹700–900 per month. Term insurance premiums are also now GST-free for individual policies. Yet more than half of working Indians lack this basic protection. If you are the primary earner and don\'t have a term plan, stop reading and buy one today. Everything else can wait.',
  },
  {
    num: '04', emoji: '🌉',
    title: 'Income Bridge Fund',
    subtitle: 'Career insurance for longer disruptions',
    hBg: '#FEF3C7', hText: '#78350F', hSub: '#92400E', numCol: '#D97706',
    sBg: '#FFFBEB', border: '#FDE68A', labelCol: '#D97706',
    metrics: [
      { label: 'Target',      val: '12 Months'  },
      { label: 'Build Via',   val: '₹5–10K SIP' },
      { label: 'In 5–7 Yrs', val: '₹7.5–15L'   },
    ],
    body: 'Different from your emergency fund. This covers the longer scenario — a career pivot, reskilling period, freelancing ramp-up, or a move to a different industry. Park in short-duration or corporate bond funds earning 7–8%. Think of it as the fund that buys you the luxury of choosing your next role instead of grabbing the first offer out of desperation.',
  },
  {
    num: '05', emoji: '🧠',
    title: 'Skill Insurance',
    subtitle: 'The only real job security left',
    hBg: '#EDE9FE', hText: '#2E1065', hSub: '#4C1D95', numCol: '#7C3AED',
    sBg: '#F5F3FF', border: '#DDD6FE', labelCol: '#7C3AED',
    metrics: [
      { label: 'Annual Budget', val: '5% of Income' },
      { label: 'Minimum',       val: '₹20–50K/yr'  },
      { label: 'ROI',           val: 'Highest'      },
    ],
    body: 'The professionals being laid off in 2026 are not unintelligent. They are people whose skills became obsolete faster than they could update them. Investing ₹30,000 per year in a relevant certification or course is not an expense — it is the highest-return investment in your portfolio because it directly protects your ability to earn.',
  },
]

const sampleBudget = [
  { layer: 'Emergency Buffer', what: 'Liquid fund + savings a/c',   cost: '₹8,000 SIP',        target: '₹10–12 lakh' },
  { layer: 'Health Insurance', what: '₹15L floater + ₹50L top-up', cost: '₹1,800 (GST-free)', target: '—'           },
  { layer: 'Term Insurance',   what: '₹1.5 crore, 30 years',       cost: '₹1,200 (GST-free)', target: '—'           },
  { layer: 'Income Bridge',    what: 'Short-duration debt fund',    cost: '₹7,000 SIP',        target: '₹8–10 lakh'  },
  { layer: 'Skill Insurance',  what: 'Courses & certifications',    cost: '₹2,500',            target: '₹30K/year'   },
]

export default function JobSecurityAIEraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Job Security Isn\'t What It Used to Be: A Financial Safety Net Plan for the AI Era',
        description: 'Nearly 80,000 tech workers lost their jobs in Q1 2026. India ranks second globally in AI-related layoffs. Here is how to build a 5-layer financial safety net.',
        image: 'https://www.synvestify.in/images/blog/job_security_ai.png',
        datePublished: '2026-08-03',
        dateModified:  '2026-08-03',
        author:    { '@type': 'Organization', name: 'Synvestify Research Desk', url: 'https://www.synvestify.in' },
        publisher: { '@type': 'Organization', name: 'Synvestify',               url: 'https://www.synvestify.in' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.synvestify.in/blog/job-security-ai-era' },
      }) }} />

      <Navbar />
      <main>

        {/* HERO — dark navy, white text */}
        <section className="pt-[66px] relative overflow-hidden bg-dark">
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
          <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.15), transparent 65%)', top: '-150px', right: '-80px' }} />

          <div className="relative z-10 max-w-[860px] mx-auto px-6 sm:px-8 pt-12 pb-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[.78rem] font-medium text-white/35 hover:text-white/70 transition-colors mb-8">
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="text-[.68rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-accent/15 text-accent">
                Financial Planning
              </span>
              <span className="text-[.72rem] text-white/35">Aug 3, 2026</span>
              <span className="text-[.72rem] text-white/35">· 7 min read</span>
            </div>
            <h1 className="font-serif text-[clamp(1.9rem,4vw,3rem)] font-bold text-white leading-[1.12] mb-5">
              Job Security Isn't What It Used to Be:<br className="hidden md:block" /> A Financial Safety Net for the AI Era
            </h1>
            <p className="text-[.97rem] text-white/55 leading-relaxed max-w-[640px] mb-10">
              Nearly 80,000 tech workers lost their jobs in Q1 2026 alone. India ranks second globally in AI-related layoffs. The old playbook — one steady job, one salary, one retirement plan — is breaking down. Here is how to build a safety net that holds.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-10">
              {[
                { label: 'Tech Layoffs Q1 2026', val: '~80,000', sub: 'jobs globally'                 },
                { label: 'India\'s Rank',         val: '#2',      sub: 'in AI-related layoffs'         },
                { label: 'Avg Job Search',        val: '3–6 mo',  sub: 'up to 10 months in tech'       },
                { label: 'Safety Net Cost',       val: '₹20K/mo', sub: 'for a mid-career professional' },
              ].map(({ label, val, sub }) => (
                <div key={label} className="rounded-xl px-4 py-3"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>
                  <p className="text-[.58rem] font-semibold uppercase tracking-widest text-white/40 mb-1">{label}</p>
                  <p className="font-serif text-[1.3rem] font-bold text-white leading-none mb-1">{val}</p>
                  <p className="text-[.66rem] text-white/55">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARTICLE */}
        <article className="bg-white">
          <div className="max-w-[760px] mx-auto px-6 sm:px-8 py-12">

            {/* Byline */}
            <div className="flex items-center gap-3 mb-10 pb-8 border-b border-brand-border">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-serif font-bold text-white text-sm">S</div>
              <div>
                <p className="text-[.84rem] font-semibold text-slate-900">Synvestify Research Desk</p>
                <p className="text-[.72rem] text-slate-400">Published Aug 3, 2026 · New Delhi</p>
              </div>
            </div>

            <SH>The Ground Has Shifted</SH>
            <p className="text-[1rem] text-slate-700 leading-[1.85] mb-5">
              There was a time when getting into a good company meant you were set. You joined at 22, got promoted every few years, retired at 58 with a pension or a fat provident fund, and that was that. Your parents probably lived this version. Many of you planned for it too.
            </p>
            <p className="text-[1rem] text-slate-600 leading-[1.85] mb-3">That version is over.</p>
            <p className="text-[1rem] text-slate-600 leading-[1.85] mb-8">
              In 2026, companies are not cutting jobs because they are losing money. Many are posting record profits. They are cutting jobs because AI and automation can now do what mid-level employees used to do — faster, cheaper, and around the clock.
            </p>

            {/* Layoff ticker */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {layoffs.map(({ company, count, note }) => (
                <div key={company} className="bg-white border border-brand-border rounded-xl p-4 text-center shadow-sm">
                  <p className="text-[.78rem] font-semibold text-slate-700">{company}</p>
                  <p className="font-serif text-[1.25rem] font-bold text-accent mt-1">{count}</p>
                  <p className="text-[.68rem] text-slate-400 mt-0.5">{note}</p>
                </div>
              ))}
            </div>

            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-5">
              The pattern is unmistakable. Routine work, entry-level tracks, and process-intensive roles are shrinking steadily. The demand is drifting toward highly specialised professionals who can work across AI, cloud, and data — a profile that most of India's vast IT workforce was not hired or trained for.
            </p>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-8">
              This is not a cyclical downturn. It is a structural shift. And it changes how every working professional in India should think about their finances.
            </p>

            <SH>Why Traditional Financial Planning Fails Here</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-5">
              Most financial planning in India assumes a continuous income stream from age 22 to 58–60. Your SIPs, your EMIs, your insurance premiums, your children's education fund — everything is built on the assumption that next month's salary will arrive on time.
            </p>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-5">
              But what happens when it doesn't? What happens when you lose your job at 35 or 42 — not because you performed poorly, but because your role was automated? The average job search in 2026 takes 3–6 months. In the tech sector, it stretches to nearly 10 months. During those months, your EMIs don't pause. Your child's school fees don't wait.
            </p>

            <InfoBox icon="⚠️" title="The Core Problem">
              The traditional financial plan has no chapter for career disruption. It assumes continuous income for 35+ years. In the AI era, that assumption is increasingly dangerous. The gap between your last salary and your next one can last 6–10 months — and without a safety net, it can permanently damage your long-term financial plan.
            </InfoBox>

            <SH>The 5-Layer Financial Safety Net</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-8">
              Think of your financial safety net not as a single emergency fund, but as five concentric layers — each protecting you against a different level of disruption.
            </p>

            {/* Layer cards — pastel header, dark text, lighter strip */}
            <div className="space-y-4 mb-12">
              {layers.map(({ num, emoji, title, subtitle, hBg, hText, hSub, numCol, sBg, border, labelCol, metrics, body }) => (
                <div key={num} className="rounded-2xl overflow-hidden" style={{ border: `1.5px solid ${border}` }}>

                  {/* Pastel header — dark text, fully readable */}
                  <div className="px-6 py-4 flex items-center gap-3" style={{ background: hBg }}>
                    <span className="font-mono text-[.72rem] font-bold" style={{ color: numCol, opacity: 0.6 }}>{num}</span>
                    <span className="text-xl">{emoji}</span>
                    <div>
                      <p className="font-serif text-[1rem] font-bold leading-none" style={{ color: hText }}>{title}</p>
                      <p className="text-[.66rem] mt-0.5" style={{ color: hSub }}>{subtitle}</p>
                    </div>
                  </div>

                  {/* Metric strip — very light tint, dark text */}
                  <div className="grid grid-cols-3 divide-x" style={{ background: sBg, borderBottom: `1px solid ${border}`, borderColor: border }}>
                    {metrics.map(({ label, val }) => (
                      <div key={label} className="px-4 py-3">
                        <p className="text-[.58rem] font-semibold uppercase tracking-widest mb-1" style={{ color: labelCol }}>{label}</p>
                        <p className="text-[.88rem] font-bold text-slate-800 leading-snug">{val}</p>
                      </div>
                    ))}
                  </div>

                  {/* Body */}
                  <div className="px-6 py-5 bg-white">
                    <p className="text-[.88rem] text-slate-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <SH>What This Looks Like in Practice</SH>
            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-5">
              Here is a sample financial safety net for a 32-year-old IT professional earning ₹15 lakh per year (₹1.25 lakh/month take-home), with a spouse and one child.
            </p>

            {/* Budget table */}
            <div className="rounded-2xl overflow-hidden mb-6 border border-brand-border">
              <div className="px-6 py-4 border-b border-brand-border bg-slate-50">
                <p className="text-[.65rem] font-semibold uppercase tracking-widest text-slate-400">Sample Safety Net Budget</p>
                <p className="font-serif text-[1.05rem] font-bold text-slate-900">32-year-old IT professional · ₹15 LPA · Family of 3</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[.84rem]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-brand-border">
                      <th className="text-left px-5 py-3 font-semibold text-slate-400 text-[.67rem] uppercase tracking-widest">Layer</th>
                      <th className="text-left px-5 py-3 font-semibold text-slate-400 text-[.67rem] uppercase tracking-widest">What</th>
                      <th className="text-left px-5 py-3 font-semibold text-slate-400 text-[.67rem] uppercase tracking-widest">Monthly Cost</th>
                      <th className="text-left px-5 py-3 font-semibold text-slate-400 text-[.67rem] uppercase tracking-widest">Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleBudget.map(({ layer, what, cost, target }, i) => (
                      <tr key={layer} className={i % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'}>
                        <td className="px-5 py-3 font-medium text-slate-800">{layer}</td>
                        <td className="px-5 py-3 text-slate-500">{what}</td>
                        <td className="px-5 py-3 font-semibold text-slate-700">{cost}</td>
                        <td className="px-5 py-3 text-slate-400">{target}</td>
                      </tr>
                    ))}
                    <tr className="bg-accent/5 border-t-2 border-accent/20">
                      <td className="px-5 py-3 font-bold text-slate-900">Total</td>
                      <td className="px-5 py-3 text-slate-500 italic text-[.82rem]">~16% of take-home pay</td>
                      <td className="px-5 py-3 font-bold text-accent text-[.95rem]">₹20,500/mo</td>
                      <td className="px-5 py-3" />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cost comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="rounded-xl p-5 text-center bg-green-50 border border-green-200">
                <p className="text-[.60rem] font-semibold uppercase tracking-widest text-green-600 mb-1">Monthly Safety Net Cost</p>
                <p className="font-serif text-[1.5rem] font-bold text-green-700">₹20,500</p>
                <p className="text-[.70rem] text-green-600/70 mt-1">~16% of take-home pay</p>
              </div>
              <div className="rounded-xl p-5 text-center bg-slate-50 border border-slate-200">
                <p className="text-[.60rem] font-semibold uppercase tracking-widest text-slate-400 mb-1">Cost of Being Unprotected</p>
                <p className="font-serif text-[1.5rem] font-bold text-slate-700">₹10–20 Lakh</p>
                <p className="text-[.70rem] text-slate-400 mt-1">in a single bad year</p>
              </div>
            </div>

            <p className="text-[.95rem] text-slate-600 leading-[1.82] mb-5">
              ₹20,500 per month sounds significant — until you compare it to the cost of being unprotected. One job loss without this safety net can force you into high-interest personal loans (14–18%), premature liquidation of long-term SIPs (losing years of compounding), or selling assets at distressed prices. The safety net costs ₹20,500 per month. The absence of one can cost ₹10–20 lakh in a single bad year.
            </p>

            <InfoBox icon="📌" title="Key Takeaway">
              The old 3-month emergency fund rule is dangerously outdated. In 2026, with AI-driven layoffs accelerating and job searches stretching to 6–10 months, every working Indian needs a 5-layer financial safety net: 9 months of emergency cash, personal health insurance (now GST-free), term life cover (also GST-free), a 12-month income bridge fund, and an annual skill investment budget. Build it while you are earning well — because by definition, you cannot build it after you need it.
            </InfoBox>

            {/* CTA */}
            <div className="rounded-2xl p-7 sm:p-8 mt-10 bg-dark">
              <h3 className="font-serif text-[1.15rem] font-semibold text-white mb-2">
                Is Your Financial Safety Net Strong Enough?
              </h3>
              <p className="text-[.87rem] text-white/50 mb-5 leading-relaxed">
                Book a free review. We'll assess your current coverage, identify gaps, and build a personalised protection + investment plan — so you're never one layoff away from a financial crisis.
              </p>
              <Link href="/contact"
                className="inline-block bg-accent text-white text-[.9rem] font-semibold px-7 py-3 rounded-xl hover:bg-[#1d4ed8] transition-colors">
                Book Free Review →
              </Link>
            </div>

            <p className="text-[.70rem] text-slate-400 leading-relaxed mt-8 pt-6 border-t border-brand-border">
              <strong className="font-semibold">Disclaimer:</strong> This article is for educational and informational purposes only and does not constitute investment advice. Insurance and investment products are subject to market risks. Please consult your SEBI-registered financial advisor or IRDAI-licensed insurance advisor before making any decisions.
            </p>

          </div>
        </article>

      </main>
      <Footer />
    </>
  )
}

import Link from 'next/link'

const smallPosts = [
  { date: 'May 03, 2025 · Investor Psychology', title: 'The Psychology Behind Poor Investment Decisions', desc: 'Loss aversion, herd mentality, recency bias — how emotions quietly destroy wealth.', href: '/blog/psychology' },
  { date: 'June 29, 2025 · FIRE Planning',       title: "FIRE: Financial Freedom Isn't a Dream — It's a Decision",   desc: 'Retire at 45 with a clear corpus target and disciplined SIP strategy.',            href: '/blog/fire' },
  { date: 'August 2025 · Wellness',              title: 'The Connection Between Your Health and Your Wealth',         desc: 'Your physical and financial wellbeing are more connected than you think.',          href: '/blog/health-wealth' },
]

export default function Blog() {
  return (
    <section className="py-24" id="blog">
      <div className="max-w-[1160px] mx-auto px-8">

        <div className="reveal flex justify-between items-end mb-8 flex-wrap gap-4">
          <div>
            <span className="inline-block text-[.65rem] font-semibold uppercase tracking-[.16em] text-accent bg-accent/8 px-3 py-1 rounded-full">
              Investor Education
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-bold text-slate-900 leading-[1.2] mt-3">
              Insights to invest smarter
            </h2>
          </div>
          <Link href="/blog"
            className="text-[.84rem] font-semibold px-[22px] py-[9px] rounded-[9px] bg-navy text-white hover:bg-navy-mid transition-all hover:-translate-y-px">
            All Articles →
          </Link>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-5 items-start">

          {/* Featured */}
          <Link href="/blog/doing-nothing-is-best"
            className="block rounded-2xl overflow-hidden border-[1.5px] border-brand-border bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <div className="h-[220px] flex items-center justify-center text-5xl relative"
              style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A8A)' }}>
              <span>📊</span>
              <span className="absolute top-3.5 left-3.5 text-[.58rem] font-semibold uppercase tracking-[.14em] text-white/45 px-2.5 py-1 rounded"
                style={{ background: 'rgba(255,255,255,0.08)', letterSpacing: '.14em' }}>
                FEATURED
              </span>
            </div>
            <div className="p-7">
              <p className="text-[.63rem] font-semibold uppercase tracking-[.12em] text-accent mb-2">Behavioral Finance · Feb 2026</p>
              <h3 className="font-serif text-[1.1rem] font-semibold text-slate-900 leading-[1.4] mb-4">
                When Doing Nothing Is the Smartest Investment Decision
              </h3>
              <span className="inline-flex items-center gap-1.5 text-[.8rem] font-semibold text-navy hover:gap-3 transition-all">
                Read Article →
              </span>
            </div>
          </Link>

          {/* Small posts */}
          <div className="flex flex-col gap-4">
            {smallPosts.map(({ date, title, desc, href }) => (
              <Link key={href} href={href}
                className="block bg-white border-[1.5px] border-brand-border rounded-2xl p-5 hover:bg-brand-soft hover:translate-x-1 transition-all duration-200">
                <p className="text-[.65rem] font-medium text-slate-400 mb-1.5">{date}</p>
                <h3 className="font-serif text-[.94rem] font-semibold text-slate-900 leading-[1.38] mb-1.5">{title}</h3>
                <p className="text-[.77rem] text-slate-400 leading-relaxed mb-3">{desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[.77rem] font-semibold text-navy">Read →</span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

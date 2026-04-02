import Link          from 'next/link'
import Navbar        from '@/components/Navbar'
import Footer        from '@/components/Footer'
import CTA           from '@/components/CTA'
import ScrollReveal  from '@/components/ScrollReveal'
import BlogSearch    from '@/components/BlogSearch'
import { posts }     from '@/lib/blogData'

export const metadata = {
  title: 'Blog & Investor Education — Synvestify',
  description: 'Practical guides on mutual funds, tax planning, retirement, behavioral finance, and more — written for every Indian investor.',
}

export default function BlogPage() {
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
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.16), transparent 65%)', top: '-120px', right: '-80px' }} />
          <div className="relative z-10 max-w-[1160px] mx-auto px-8 py-20">
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-7 h-[1.5px] bg-accent-light" />
              <span className="text-[.68rem] font-semibold tracking-[.2em] uppercase text-white/50">
                Investor Education
              </span>
            </div>
            <h1 className="font-serif text-[clamp(2.4rem,4vw,3.4rem)] font-bold text-white leading-[1.1] mb-5 max-w-[520px]">
              Insights to help you<br />
              <em className="italic text-accent-pale">invest smarter</em>
            </h1>
            <p className="text-[.97rem] text-white/50 leading-[1.82] max-w-[460px]">
              Practical guides on mutual funds, tax planning, retirement, behavioral finance,
              and everything in between — written for every Indian investor.
            </p>
          </div>
        </section>

        {/* Featured Container */}
        <section className="py-16 sm:py-24">
          <div className="max-w-[1160px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-start">
              {/* Featured */}
              <a href="https://www.synvestify.in/blog/war-and-finance-iran-israel-2026" target="_blank" rel="noopener noreferrer"
                className="md:col-span-2 block rounded-xl sm:rounded-2xl overflow-hidden border-[1.5px] border-brand-border bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group h-full">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image */}
                  <div className="md:w-1/2 h-[220px] sm:h-[280px] md:h-auto relative overflow-hidden bg-gradient-to-br from-slate-600 to-slate-800">
                    <img 
                      src="/images/blog/war-and-finance.jpg"
                      alt="Featured article"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 sm:top-4 left-2 sm:left-4 text-[.5rem] sm:text-[.58rem] font-semibold uppercase tracking-[.14em] text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                      FEATURED
                    </span>
                  </div>
                  {/* Content */}
                  <div className="md:w-1/2 p-5 sm:p-7 md:p-8 flex flex-col justify-center">
                    <p className="text-[.55rem] sm:text-[.63rem] font-semibold uppercase tracking-[.12em] text-accent mb-2 sm:mb-3">Market Insights · Mar 2026</p>
                    <h3 className="font-serif text-[.95rem] sm:text-[1.15rem] md:text-[1.3rem] font-semibold text-slate-900 leading-[1.35] mb-3 sm:mb-4">
                      War & Finance: What the Iran-Israel-USA Conflict Means for Your Investments
                    </h3>
                    <p className="text-[.75rem] sm:text-[.85rem] text-slate-600 leading-relaxed mb-4 sm:mb-5 line-clamp-2">
                      Markets are swinging wildly as geopolitical tension rises. Oil above $106. Here's what history tells us about volatility.
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[.7rem] sm:text-[.8rem] font-semibold text-navy hover:gap-3 transition-all">
                      Read Article →
                    </span>
                  </div>
                </div>
              </a>

              {/* Featured info box */}
              <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 border-[1.5px] border-brand-border bg-gradient-to-br from-blue-50 to-blue-100/50">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                <p className="text-[.6rem] sm:text-[.72rem] font-semibold uppercase tracking-[.12em] text-slate-600 mb-2 sm:mb-3">This Month's Focus</p>
                <h4 className="font-serif text-[.85rem] sm:text-[1rem] font-semibold text-slate-900 mb-2 leading-tight">Geopolitical Risk & Markets</h4>
                <p className="text-[.7rem] sm:text-[.8rem] text-slate-600 leading-relaxed mb-3 sm:mb-4">
                  Understanding how external events impact your portfolio and staying disciplined through volatility.
                </p>
              </div>
            </div>
          </div>
        </section>

        <BlogSearch posts={posts} />

        <CTA />

      </main>
      <Footer />
    </>
  )
}

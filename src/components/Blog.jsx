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

        <BlogSearch posts={posts} />

        <CTA />

      </main>
      <Footer />
    </>
  )
}
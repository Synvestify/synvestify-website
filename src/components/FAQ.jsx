'use client'
import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  { q: 'What makes Synvestify different from other advisors?',  a: 'We operate on a pure distribution model — no proprietary products, no hidden commissions. Every recommendation is based solely on what\'s right for your goals. We also conduct thorough risk profiling before any investment.' },
  { q: 'Do you serve NRI clients?',                            a: 'Yes! We actively serve clients in India, the USA, the UK, and Canada. We handle the complexities of NRI investing in Indian mutual funds seamlessly.' },
  { q: 'What is risk profiling and why does it matter?',       a: 'Risk profiling assesses your financial situation, investment horizon, income, and psychological comfort with market volatility. No investment is recommended without understanding your unique profile first.' },
  { q: 'What is the minimum investment to get started?',       a: 'You can start a SIP with as little as ₹500 per month. What matters most is consistency and the right strategy, not the size of your initial investment.' },
  { q: 'How do I get started with Synvestify?',               a: 'Simply email support@synvestify.in or call +91-9599698871. We\'ll schedule a no-obligation consultation to understand your financial situation and chart the best path forward.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-24 bg-brand-soft" id="faq">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16 lg:gap-20">

          {/* Left */}
          <div className="reveal">
            <span className="inline-block text-[.65rem] font-semibold uppercase tracking-[.16em] text-accent bg-accent/8 px-3 py-1 rounded-full">
              FAQ
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-bold text-slate-900 leading-[1.2] mt-3 mb-4">
              Questions we&apos;re<br />often asked
            </h2>
            <p className="text-[.9rem] text-slate-400 leading-[1.75] mb-7">
              Can&apos;t find an answer? Reach out directly — we&apos;re always happy to help.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white text-[.84rem] font-semibold px-[22px] py-3 rounded-xl hover:bg-navy-mid transition-all hover:-translate-y-px">
              Contact Us
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Accordion */}
          <div className="reveal flex flex-col">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="border-t border-brand-border last:border-b">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className={`w-full flex justify-between items-center gap-3 py-[18px] text-left font-serif text-[.96rem] font-semibold transition-colors ${open === i ? 'text-accent' : 'text-slate-900 hover:text-accent'}`}>
                  <span>{q}</span>
                  <span className={`text-accent text-[1.2rem] flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 text-[.86rem] text-slate-400 leading-[1.8] ${open === i ? 'max-h-[220px] pb-[18px]' : 'max-h-0'}`}>
                  {a}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

'use client'
import { useState } from 'react'
import Link from 'next/link'

function fmt(v) {
  if (v >= 10000000) return '₹' + (v / 10000000).toFixed(1) + 'Cr'
  if (v >= 100000)   return '₹' + (v / 100000).toFixed(1) + 'L'
  return '₹' + (v / 1000).toFixed(1) + 'K'
}

function calcSip(m, r, y) {
  const mo = y * 12, rate = r / 100 / 12
  const corpus = m * (((Math.pow(1 + rate, mo) - 1) / rate) * (1 + rate))
  return { corpus, invested: m * mo, gains: corpus - m * mo }
}

const stats = [
  { num: '100+',  label: 'Happy Clients' },
  { num: '₹7Cr+', label: 'Assets Managed' },
  { num: '4',     label: 'Countries Served' },
]

export default function Hero() {
  const [sip,   setSip]   = useState(5000)
  const [rate,  setRate]  = useState(12)
  const [years, setYears] = useState(10)
  const { corpus, invested, gains } = calcSip(sip, rate, years)

  return (
    <section className="pt-[66px] min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-dark">

      {/* ── LEFT: Hero copy ── */}
      <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 relative">
        {/* Right border line — desktop only */}
        <div className="hidden lg:block absolute right-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-white/7 to-transparent" />

        {/* Overline */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-7 h-[1.5px] bg-accent-light" />
          <span className="text-[.68rem] font-semibold tracking-[.2em] uppercase text-white/50">
            Mutual Fund Distributor &amp; Insurance Advisor
          </span>
        </div>

        <h1 className="font-serif text-[clamp(2.8rem,4.2vw,4rem)] font-bold text-white leading-[1.1] mb-6">
          Your money,<br />
          <em className="italic text-accent-pale">working harder</em><br />
          than you do.
        </h1>

        <p className="text-[.96rem] text-white/70 leading-[1.82] max-w-[400px] mb-10">
          Unbiased, research-backed financial guidance — no hidden commissions, no conflicts of interest.
          Tailored plans for every investor, across India, USA, UK &amp; Canada.
        </p>

        <div className="flex gap-3 flex-wrap">
          <Link href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-[.9rem] px-[26px] py-[13px] rounded-xl hover:bg-[#1d4ed8] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,.4)]">
            Book Free Consultation
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="#process"
            className="inline-block text-white/60 font-medium text-[.9rem] px-[26px] py-[13px] rounded-xl border border-white/14 hover:bg-white/5 transition-colors">
            How It Works
          </Link>
        </div>
      </div>

      {/* ── RIGHT: Stats + Calculator ── */}
      <div className="flex flex-col border-t lg:border-t-0 lg:border-l border-white/5">

        {/* Stats strip */}
        <div className="grid grid-cols-3 border-b border-white/5">
          {stats.map(({ num, label }, i) => (
            <div key={label}
              className={`px-7 py-9 ${i < 2 ? 'border-r border-white/5' : ''}`}>
              <div className="font-sans text-[2.3rem] font-bold text-white leading-none" style={{fontFamily: 'Inter, sans-serif'}}>{num}</div>
              <div className="text-[.66rem] font-medium text-white/70 uppercase tracking-widest mt-[7px]">{label}</div>
            </div>
          ))}
        </div>

        {/* SIP Calculator */}
        <div className="flex-1 px-10 py-10 flex flex-col justify-center">
          <p className="text-[.67rem] font-semibold uppercase tracking-[.18em] text-white/70 mb-1.5">
            SIP Growth Estimator
          </p>
          <h3 className="font-serif text-[1.25rem] font-semibold text-white mb-7">
            See your wealth compound
          </h3>

          {[
            { label: 'Monthly SIP',      val: sip,   display: '₹' + sip.toLocaleString('en-IN'), min: 500,  max: 100000, step: 500,  set: setSip },
            { label: 'Expected Return',  val: rate,  display: rate + '%',                         min: 6,    max: 20,     step: 0.5,  set: setRate },
            { label: 'Time Period',      val: years, display: years + (years > 1 ? ' Years' : ' Year'), min: 1, max: 30, step: 1, set: setYears },
          ].map(({ label, val, display, min, max, step, set }) => (
            <div key={label} className="mb-4">
              <div className="flex justify-between text-[.75rem] mb-2">
                <span className="text-white/70">{label}</span>
                <strong className="text-white font-semibold">{display}</strong>
              </div>
              <input type="range" min={min} max={max} step={step} value={val}
                onChange={e => set(+e.target.value)} />
            </div>
          ))}

          {/* Output */}
          <div className="grid grid-cols-3 gap-2 mt-6">
            {[
              { v: fmt(invested), l: 'Invested' },
              { v: fmt(gains),    l: 'Gains' },
              { v: fmt(corpus),   l: 'Total' },
            ].map(({ v, l }) => (
              <div key={l} className="text-center rounded-xl py-3.5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="font-sans text-[1.08rem] font-semibold text-accent-pale mb-1" style={{fontFamily: 'Inter, sans-serif'}}>{v}</div>
                <div className="text-[.56rem] font-medium uppercase tracking-widest text-white/60">{l}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

'use client'
import { useState } from 'react'

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

export default function SIPCalculator() {
  const [sip, setSip] = useState(5000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)
  const { corpus, invested, gains } = calcSip(sip, rate, years)

  return (
    <div className="max-w-[700px]">
      <div className="bg-white rounded-2xl border border-brand-border p-10">
        <h2 className="font-serif text-[1.4rem] font-bold text-slate-900 mb-2">
          SIP Growth Estimator
        </h2>
        <p className="text-[.87rem] text-slate-500 mb-8">
          Calculate how your regular monthly SIP investments will grow over time.
        </p>

        {/* Sliders */}
        <div className="space-y-6">
          {[
            { label: 'Monthly SIP',      val: sip,   display: '₹' + sip.toLocaleString('en-IN'), min: 500,  max: 100000, step: 500,  set: setSip },
            { label: 'Expected Return',  val: rate,  display: rate + '%',                         min: 6,    max: 20,     step: 0.5,  set: setRate },
            { label: 'Time Period',      val: years, display: years + (years > 1 ? ' Years' : ' Year'), min: 1, max: 30, step: 1, set: setYears },
          ].map(({ label, val, display, min, max, step, set }) => (
            <div key={label}>
              <div className="flex justify-between text-[.85rem] mb-3">
                <span className="font-medium text-slate-600">{label}</span>
                <input type="number" min={min} max={max} step={step} value={val}
                  onChange={e => set(+e.target.value)}
                  className="w-24 px-2 py-1 rounded border border-brand-border text-sm font-semibold text-navy text-right focus:outline-none focus:border-accent" />
              </div>
              <input type="range" min={min} max={max} step={step} value={val}
                onChange={e => set(+e.target.value)}
                className="w-full" />
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="grid grid-cols-3 gap-3 mt-10 pt-10 border-t border-brand-border">
          {[
            { v: fmt(invested), l: 'Invested' },
            { v: fmt(gains),    l: 'Gains' },
            { v: fmt(corpus),   l: 'Total Corpus' },
          ].map(({ v, l }) => (
            <div key={l} className="text-center rounded-xl py-5" style={{ background: 'rgba(37,99,235,0.08)' }}>
              <div className="font-sans text-[1.3rem] font-bold text-navy mb-2" style={{fontFamily: 'Inter, sans-serif'}}>{v}</div>
              <div className="text-[.7rem] font-medium uppercase tracking-widest text-slate-500">{l}</div>
            </div>
          ))}
        </div>

        <p className="text-[.76rem] text-slate-400 mt-8 text-center">
          *This is a simplified calculation assuming monthly compounding. Actual returns may vary based on market performance.
        </p>
      </div>
    </div>
  )
}

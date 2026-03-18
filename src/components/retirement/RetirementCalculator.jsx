'use client'
import { useState, useMemo } from 'react'

function fmtShort(v) {
  if (!v) return '₹0'
  if (v >= 10000000) return '₹' + (v / 10000000).toFixed(1) + 'Cr'
  if (v >= 100000)   return '₹' + (v / 100000).toFixed(1) + 'L'
  return '₹' + (v / 1000).toFixed(0) + 'K'
}

function fmtFull(v) {
  if (!v) return '₹0'
  if (v >= 10000000) return '₹' + (v / 10000000).toFixed(2) + ' Crore'
  if (v >= 100000)   return '₹' + (v / 100000).toFixed(1) + ' Lakh'
  return '₹' + Math.round(v).toLocaleString('en-IN')
}

export default function RetirementCalculator() {
  const [age,       setAge]       = useState(30)
  const [retireAge, setRetireAge] = useState(60)
  const [lifeExp,   setLifeExp]   = useState(85)
  const [monthly,   setMonthly]   = useState(50000)
  const [inflation, setInflation] = useState(6)
  const [returns,   setReturns]   = useState(12)
  const [postRet,   setPostRet]   = useState(7)
  const [existing,  setExisting]  = useState(0)

  const r = useMemo(() => {
    const yToRetire = retireAge - age
    const yInRet    = lifeExp - retireAge
    if (yToRetire <= 0 || yInRet <= 0) return null

    const futureMonthly  = monthly * Math.pow(1 + inflation / 100, yToRetire)
    const mPostRet       = postRet / 100 / 12
    const mInRet         = yInRet * 12
    const corpus         = futureMonthly * ((1 - Math.pow(1 + mPostRet, -mInRet)) / mPostRet)
    const grownExisting  = existing * Math.pow(1 + returns / 100, yToRetire)
    const needed         = Math.max(0, corpus - grownExisting)
    const mRate          = returns / 100 / 12
    const months         = yToRetire * 12
    const sip            = needed / (((Math.pow(1 + mRate, months) - 1) / mRate) * (1 + mRate))

    return {
      corpus:         Math.round(corpus),
      futureMonthly:  Math.round(futureMonthly),
      grownExisting:  Math.round(grownExisting),
      sipNeeded:      Math.round(sip),
      yToRetire,
      yInRet,
    }
  }, [age, retireAge, lifeExp, monthly, inflation, returns, postRet, existing])

  const sliders = [
    { label: 'Current Age',              val: age,       set: setAge,       min: 20,  max: 55,      step: 1,     display: age + ' yrs' },
    { label: 'Retirement Age',           val: retireAge, set: setRetireAge, min: 40,  max: 70,      step: 1,     display: retireAge + ' yrs' },
    { label: 'Life Expectancy',          val: lifeExp,   set: setLifeExp,   min: 65,  max: 100,     step: 1,     display: lifeExp + ' yrs' },
    { label: 'Monthly Expenses Today',   val: monthly,   set: setMonthly,   min: 10000, max: 500000, step: 5000, display: fmtShort(monthly) + '/mo' },
    { label: 'Inflation Rate',           val: inflation, set: setInflation, min: 3,   max: 12,      step: 0.5,   display: inflation + '%' },
    { label: 'Pre-Retirement Returns',   val: returns,   set: setReturns,   min: 6,   max: 18,      step: 0.5,   display: returns + '%' },
    { label: 'Post-Retirement Returns',  val: postRet,   set: setPostRet,   min: 4,   max: 10,      step: 0.5,   display: postRet + '%' },
    { label: 'Existing Savings',         val: existing,  set: setExisting,  min: 0,   max: 10000000, step: 50000, display: fmtShort(existing || 0) },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">

      {/* Sliders */}
      <div className="bg-white border border-brand-border rounded-2xl p-8">
        <h3 className="font-serif text-[1.2rem] font-bold text-slate-900 mb-1">Your Details</h3>
        <p className="text-[.82rem] text-slate-400 mb-7">Adjust the values to match your situation.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          {sliders.map(({ label, val, set, min, max, step, display }) => (
            <div key={label}>
              <div className="flex justify-between text-[.76rem] mb-2">
                <span className="font-medium text-slate-500">{label}</span>
                <strong className="font-semibold text-slate-900">{display}</strong>
              </div>
              <input type="range" min={min} max={max} step={step} value={val}
                onChange={e => set(+e.target.value)}
                className="w-full appearance-none h-[2px] rounded-full outline-none cursor-pointer bg-brand-border"
                style={{ accentColor: '#2563EB' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col gap-4 sticky top-[80px]">

        {/* Corpus needed */}
        <div className="rounded-2xl p-6 text-white relative overflow-hidden" style={{ background: '#1E3A8A' }}>
          <div className="absolute w-[200px] h-[200px] rounded-full pointer-events-none"
            style={{ background: 'rgba(37,99,235,0.25)', top: '-60px', right: '-60px' }} />
          <p className="text-[.68rem] font-semibold uppercase tracking-widest text-white/40 mb-1 relative z-10">
            Retirement Corpus Needed
          </p>
          <p className="font-serif text-[2.2rem] font-bold text-white relative z-10">
            {r ? fmtFull(r.corpus) : '—'}
          </p>
          <p className="text-[.78rem] text-white/40 mt-1 relative z-10">
            {r ? `to cover ${r.yInRet} years of retirement` : ''}
          </p>
        </div>

        {/* Key metrics */}
        <div className="bg-white border border-brand-border rounded-2xl overflow-hidden divide-y divide-brand-border">
          {[
            { label: 'Monthly SIP Required',       val: r ? fmtFull(r.sipNeeded)      : '—', highlight: true },
            { label: 'Monthly Expense at Retirement', val: r ? fmtShort(r.futureMonthly) : '—', highlight: false },
            { label: 'Years to Retirement',        val: r ? r.yToRetire + ' years'    : '—', highlight: false },
            { label: 'Existing Savings (grown)',   val: r ? fmtShort(r.grownExisting) : '—', highlight: false },
          ].map(({ label, val, highlight }) => (
            <div key={label} className={`flex justify-between items-center px-5 py-3.5 ${highlight ? 'bg-accent/5' : ''}`}>
              <span className="text-[.82rem] text-slate-500">{label}</span>
              <span className={`text-[.92rem] font-semibold ${highlight ? 'text-accent' : 'text-slate-900'}`}>{val}</span>
            </div>
          ))}
        </div>

        <p className="text-[.72rem] text-slate-400 text-center px-2 leading-relaxed">
          Estimates only. Actual results depend on market conditions. Consult an advisor before investing.
        </p>
      </div>

    </div>
  )
}

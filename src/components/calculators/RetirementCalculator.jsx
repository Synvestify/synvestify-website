'use client'
import { useState } from 'react'

function fmt(v) {
  if (v >= 10000000) return '₹' + (v / 10000000).toFixed(1) + 'Cr'
  if (v >= 100000)   return '₹' + (v / 100000).toFixed(1) + 'L'
  return '₹' + (v / 1000).toFixed(1) + 'K'
}

function calcRetirement(currentAge, retireAge, currentCorpus, monthlyInvestment, expectedReturn, inflationRate) {
  const yearsToRetirement = retireAge - currentAge
  const monthlyReturn = expectedReturn / 100 / 12
  
  // Calculate SIP corpus
  const mo = yearsToRetirement * 12
  const sipCorpus = monthlyInvestment * (((Math.pow(1 + monthlyReturn, mo) - 1) / monthlyReturn) * (1 + monthlyReturn))
  
  // Calculate current corpus growth
  const corpusGrowth = currentCorpus * Math.pow(1 + expectedReturn / 100, yearsToRetirement)
  
  // Total corpus
  const totalCorpus = sipCorpus + corpusGrowth
  
  return { totalCorpus, sipCorpus, corpusGrowth }
}

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(35)
  const [retireAge, setRetireAge] = useState(60)
  const [currentCorpus, setCurrentCorpus] = useState(500000)
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [inflationRate, setInflationRate] = useState(6)
  
  const { totalCorpus, sipCorpus, corpusGrowth } = calcRetirement(
    currentAge, retireAge, currentCorpus, monthlyInvestment, expectedReturn, inflationRate
  )

  return (
    <div className="max-w-[700px]">
      <div className="bg-white rounded-2xl border border-brand-border p-10">
        <h2 className="font-serif text-[1.4rem] font-bold text-slate-900 mb-2">
          Retirement Calculator
        </h2>
        <p className="text-[.87rem] text-slate-500 mb-8">
          Calculate how much corpus you'll need for a comfortable retirement based on your timeline.
        </p>

        {/* Sliders */}
        <div className="space-y-6">
          {[
            { label: 'Current Age', val: currentAge, display: currentAge + ' years', min: 18, max: 60, step: 1, set: setCurrentAge },
            { label: 'Retirement Age', val: retireAge, display: retireAge + ' years', min: 40, max: 75, step: 1, set: setRetireAge },
            { label: 'Current Corpus', val: currentCorpus, display: '₹' + currentCorpus.toLocaleString('en-IN'), min: 0, max: 5000000, step: 50000, set: setCurrentCorpus },
            { label: 'Monthly Investment', val: monthlyInvestment, display: '₹' + monthlyInvestment.toLocaleString('en-IN'), min: 1000, max: 100000, step: 1000, set: setMonthlyInvestment },
            { label: 'Expected Return', val: expectedReturn, display: expectedReturn + '%', min: 6, max: 20, step: 0.5, set: setExpectedReturn },
            { label: 'Inflation Rate', val: inflationRate, display: inflationRate + '%', min: 2, max: 10, step: 0.5, set: setInflationRate },
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
        <div className="mt-10 pt-10 border-t border-brand-border">
          <p className="text-[.85rem] font-medium text-slate-600 mb-4">Estimated Retirement Corpus:</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { v: fmt(corpusGrowth), l: 'Current Corpus Growth' },
              { v: fmt(sipCorpus), l: 'SIP Corpus' },
              { v: fmt(totalCorpus), l: 'Total Corpus' },
            ].map(({ v, l }) => (
              <div key={l} className="text-center rounded-xl py-5" style={{ background: 'rgba(37,99,235,0.08)' }}>
                <div className="font-sans text-[1.2rem] font-bold text-navy mb-2" style={{fontFamily: 'Inter, sans-serif'}}>{v}</div>
                <div className="text-[.65rem] font-medium text-slate-500">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[.76rem] text-slate-400 mt-8 text-center">
          *This is a simplified calculation for estimation purposes. Please consult with a financial advisor for comprehensive retirement planning.
        </p>
      </div>
    </div>
  )
}

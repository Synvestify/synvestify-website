'use client'
import { useState } from 'react'

function fmt(v) {
  if (v >= 10000000) return '₹' + (v / 10000000).toFixed(1) + 'Cr'
  if (v >= 100000)   return '₹' + (v / 100000).toFixed(1) + 'L'
  return '₹' + (v / 1000).toFixed(1) + 'K'
}

function calcEMI(principal, annualRate, months) {
  const monthlyRate = annualRate / 100 / 12
  const emi = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
  const totalPayment = emi * months
  const totalInterest = totalPayment - principal
  return { emi, totalPayment, totalInterest }
}

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(2000000)
  const [annualRate, setAnnualRate] = useState(7.5)
  const [months, setMonths] = useState(240) // 20 years
  
  const { emi, totalPayment, totalInterest } = calcEMI(principal, annualRate, months)
  const years = months / 12

  return (
    <div className="max-w-[700px]">
      <div className="bg-white rounded-2xl border border-brand-border p-10">
        <h2 className="font-serif text-[1.4rem] font-bold text-slate-900 mb-2">
          EMI Calculator
        </h2>
        <p className="text-[.87rem] text-slate-500 mb-8">
          Calculate your monthly EMI for loans like home, auto, or personal loans.
        </p>

        {/* Sliders */}
        <div className="space-y-6">
          {[
            { label: 'Loan Amount', val: principal, display: '₹' + principal.toLocaleString('en-IN'), min: 100000, max: 10000000, step: 100000, set: setPrincipal },
            { label: 'Annual Interest Rate', val: annualRate, display: annualRate.toFixed(2) + '%', min: 2, max: 20, step: 0.1, set: setAnnualRate },
            { label: 'Loan Duration', val: months, display: years + ' ' + (years > 1 ? 'Years' : 'Year'), min: 12, max: 480, step: 12, set: setMonths },
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
          <p className="text-[.85rem] font-medium text-slate-600 mb-4">EMI Breakdown:</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { v: '₹' + Math.round(emi).toLocaleString('en-IN'), l: 'Monthly EMI' },
              { v: fmt(totalInterest), l: 'Total Interest' },
              { v: fmt(totalPayment), l: 'Total Payment' },
            ].map(({ v, l }) => (
              <div key={l} className="text-center rounded-xl py-5" style={{ background: 'rgba(37,99,235,0.08)' }}>
                <div className="font-sans text-[1.2rem] font-bold text-navy mb-2" style={{fontFamily: 'Inter, sans-serif'}}>{v}</div>
                <div className="text-[.65rem] font-medium text-slate-500">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[.76rem] text-slate-400 mt-8 text-center">
          *This calculation assumes a fixed-rate loan with regular monthly EMI payments. Actual EMI may vary based on lender policies and other charges.
        </p>
      </div>
    </div>
  )
}

'use client'
import { useState } from 'react'

const steps = [
  {
    num: 'Step 1',
    title: 'Tax Profile Assessment',
    desc: 'We analyze your income, investments, family structure, and obligations to identify opportunities.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    num: 'Step 2',
    title: 'Deduction Mapping',
    desc: 'We identify all eligible deductions — 80C, 80D, 80E, 80G, and more you might miss.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    num: 'Step 3',
    title: 'Portfolio Optimization',
    desc: 'We structure investments in ELSS, EPF, life insurance, and tax-efficient vehicles strategically.',
    color: 'from-pink-500 to-rose-500',
  },
]

export default function TaxPlanningProcess() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="max-w-[1200px] mx-auto px-8">

        {/* Header */}
        <div className="reveal text-center mb-24">
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3rem)] font-bold text-slate-900 leading-[1.1] mb-4">
            Your Tax Planning Journey
          </h2>
          <p className="text-[.95rem] text-slate-600 max-w-[600px] mx-auto">
            A simplified, step-by-step process designed to maximize your savings and minimize complexity.
          </p>
        </div>

        {/* Interactive Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Step Display */}
          <div className="reveal">
            <div className={`relative h-96 rounded-3xl bg-gradient-to-br ${steps[active].color} shadow-2xl overflow-hidden group`}>
              
              {/* Animated Background Shapes */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20 blur-3xl group-hover:scale-110 transition-transform"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.5), transparent)' }} />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-20 blur-2xl" 
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3), transparent)' }} />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-12">
                <div className="text-6xl font-serif font-bold text-white/30 mb-4">
                  {steps[active].num}
                </div>
                <h3 className="text-[1.8rem] font-serif font-bold text-white mb-4 leading-tight">
                  {steps[active].title}
                </h3>
                <p className="text-[1rem] text-white/90 leading-relaxed">
                  {steps[active].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Step Navigation */}
          <div className="reveal space-y-5">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left p-8 rounded-2xl border-2 transition-all duration-300 group ${
                  active === i
                    ? 'bg-slate-900 border-slate-900 shadow-lg shadow-slate-900/30'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}>
                
                <div className="flex items-start gap-5">
                  {/* Number badge */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-serif font-bold text-[1.2rem] transition-all ${
                    active === i
                      ? 'bg-gradient-to-br from-cyan-400 to-blue-500 text-white'
                      : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                  }`}>
                    {i + 1}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className={`text-[.75rem] font-semibold uppercase tracking-widest mb-1 transition-colors ${
                      active === i ? 'text-blue-400' : 'text-slate-400'
                    }`}>
                      {step.num}
                    </p>
                    <h4 className={`font-serif text-[1.1rem] font-bold transition-colors ${
                      active === i ? 'text-white' : 'text-slate-900'
                    }`}>
                      {step.title}
                    </h4>
                  </div>

                  {/* Arrow */}
                  <div className={`flex-shrink-0 transition-all ${active === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                    <span className={`text-2xl ${active === i ? 'text-blue-400' : 'text-slate-400'}`}>→</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>

        {/* Progress indicator */}
        <div className="reveal flex justify-center gap-3 mt-16">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-3 rounded-full transition-all ${
                active === i
                  ? 'w-8 bg-gradient-to-r from-cyan-500 to-blue-500'
                  : 'w-3 bg-slate-300 hover:bg-slate-400'
              }`} />
          ))}
        </div>

      </div>
    </section>
  )
}

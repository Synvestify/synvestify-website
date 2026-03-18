'use client'
import { useState } from 'react'

const steps = [
  {
    title: 'Coverage Needs Assessment',
    desc: 'We evaluate your income, liabilities, family dependents, loan obligations, and lifestyle to determine optimal coverage amounts across all insurance types.',
    points: ['Review income & liabilities', 'Analyze family structure', 'Identify risk gaps', 'Calculate coverage need']
  },
  {
    title: 'Risk Gap Analysis',
    desc: 'We identify uninsured or underinsured risks—critical illnesses, disability, medical emergencies—and recommend strategic coverage to fill gaps in your protection.',
    points: ['Map existing coverage', 'Identify blind spots', 'Assess risk exposure', 'Recommend solutions']
  },
  {
    title: 'Portfolio Implementation',
    desc: 'We source best-rate policies, handle documentation, and set up your comprehensive insurance portfolio. We ensure claims support and annual review of coverage adequacy.',
    points: ['Source best policies', 'Complete documentation', 'Set up coverage', 'Annual reviews']
  },
]

export default function InsurancePlanningProcess() {
  const [expandedStep, setExpandedStep] = useState(0)

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="max-w-[1200px] mx-auto px-8">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3rem)] font-bold text-slate-900 leading-[1.1] mb-4">
            How We Build Your Insurance Strategy
          </h2>
          <p className="text-[.95rem] text-slate-600 max-w-[600px] mx-auto">
            A proven 3-step process that ensures comprehensive coverage tailored to your unique situation.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="reveal relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-cyan-400" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="md:pl-32 relative">
                
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-0 top-2 w-24 h-24 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-4 border-slate-50 shadow-lg" />
                  <div className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 animate-ping" />
                </div>

                {/* Step Content */}
                <div
                  onClick={() => setExpandedStep(expandedStep === i ? null : i)}
                  className="group cursor-pointer"
                >
                  <div className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
                    expandedStep === i
                      ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-accent shadow-lg shadow-accent/20'
                      : 'bg-white border-slate-200 hover:border-accent/50'
                  }`}>
                    
                    {/* Step Number and Title */}
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-serif font-bold text-lg transition-all ${
                        expandedStep === i
                          ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white'
                          : 'bg-slate-100 text-slate-700 group-hover:bg-blue-50'
                      }`}>
                        {i + 1}
                      </div>
                      <h3 className={`font-serif text-[1.2rem] md:text-[1.4rem] font-bold transition-colors ${
                        expandedStep === i ? 'text-slate-900' : 'text-slate-800 group-hover:text-accent'
                      }`}>
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className={`text-slate-600 leading-relaxed mb-4 transition-all ${
                      expandedStep === i ? 'opacity-100' : 'opacity-80'
                    }`}>
                      {step.desc}
                    </p>

                    {/* Action Points - Expandable */}
                    <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 overflow-hidden transition-all max-h-0 ${
                      expandedStep === i ? 'max-h-40' : ''
                    }`}>
                      {step.points.map((point, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200">
                          <p className="text-xs md:text-sm font-medium text-blue-900">{point}</p>
                        </div>
                      ))}
                    </div>

                    {/* Expand/Collapse Indicator */}
                    <div className="flex items-center gap-2 mt-4 text-accent">
                      <span className={`text-xs font-semibold uppercase tracking-wide transition-transform ${
                        expandedStep === i ? 'rotate-180' : ''
                      }`}>
                        ▼
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

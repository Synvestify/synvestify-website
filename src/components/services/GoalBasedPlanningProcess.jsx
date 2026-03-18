'use client'
import { useState } from 'react'

const steps = [
  {
    title: 'Goal Definition',
    desc: 'We sit down and understand your dreams—what do you want to achieve, by when, and why it matters? Clarity is the first step to success.',
    details: ['Understand aspirations', 'Define timelines', 'Set realistic targets', 'Prioritize goals']
  },
  {
    title: 'Financial Analysis',
    desc: 'We analyze your current financial situation—income, assets, liabilities, and expenses—to understand the gap between today and your goal.',
    details: ['Income assessment', 'Asset evaluation', 'Liability review', 'Cash flow analysis']
  },
  {
    title: 'Strategy Creation',
    desc: 'We craft a detailed, step-by-step plan with monthly contributions, investment allocation, and tax optimization tailored to your timeline.',
    details: ['Investment plan', 'Contribution schedule', 'Asset allocation', 'Tax strategy']
  },
  {
    title: 'Implementation',
    desc: 'We set up your investments, automate contributions, and ensure everything is in motion. You focus on life, we focus on execution.',
    details: ['Account setup', 'Automate SIP', 'Begin investments', 'Set reminders']
  },
  {
    title: 'Monitoring & Rebalancing',
    desc: 'We review your progress quarterly, track milestones, and rebalance investments to ensure you stay on course toward your goals.',
    details: ['Quarterly reviews', 'Performance tracking', 'Rebalancing', 'Goal adjustment']
  },
]

export default function GoalBasedPlanningProcess() {
  const [expandedStep, setExpandedStep] = useState(null)

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-[1200px] mx-auto px-8">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3rem)] font-bold text-blue-950 leading-[1.1] mb-4">
            Our 5-Step Goal Achievement Process
          </h2>
          <p className="text-[.95rem] text-slate-600 max-w-[600px] mx-auto">
            From first conversation to goal achievement, we guide you through every step with expertise and dedication.
          </p>
        </div>

        {/* Numbered Flow */}
        <div className="reveal">
          {/* Connection Line */}
          <div className="hidden md:block absolute left-1/2 top-32 h-96 w-1 bg-gradient-to-b from-blue-300 to-transparent transform -translate-x-1/2" />

          <div className="space-y-6 md:space-y-8">
            {steps.map((step, i) => (
              <div key={i} className={`relative flex gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Step Number Circle */}
                <div className="flex-shrink-0 flex items-start">
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg ring-4 ring-blue-100">
                    {i + 1}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-1">
                  <div
                    onClick={() => setExpandedStep(expandedStep === i ? null : i)}
                    className="group cursor-pointer"
                  >
                    <div className="p-6 rounded-2xl border-2 border-blue-100 bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all">
                      
                      {/* Title */}
                      <h3 className="font-serif text-xl font-bold text-blue-950 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-blue-900 group-hover:bg-clip-text transition-all">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 group-hover:text-slate-700 transition-colors">
                        {step.desc}
                      </p>

                      {/* Details Grid - Expandable */}
                      <div className={`grid grid-cols-2 gap-2 max-h-0 overflow-hidden transition-all ${
                        expandedStep === i ? 'max-h-32' : ''
                      }`}>
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="p-2 rounded-lg bg-blue-50 border border-blue-100">
                            <p className="text-xs font-semibold text-blue-900">{detail}</p>
                          </div>
                        ))}
                      </div>

                      {/* Expand indicator */}
                      {expandedStep === i && (
                        <div className="mt-3 flex items-center gap-2 text-blue-600 text-xs font-semibold">
                          <span>Less details</span>
                          <span>▲</span>
                        </div>
                      )}
                      {expandedStep !== i && (
                        <div className="group-hover:flex hidden items-center gap-2 text-blue-600 text-xs font-semibold mt-2">
                          <span>See details</span>
                          <span>▼</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-16">
          <p className="text-slate-600 mb-4">Ready to turn your financial goals into reality?</p>
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:shadow-lg hover:shadow-blue-600/50 transition-all">
            Start Your Goal Planning Journey
          </button>
        </div>

      </div>
    </section>
  )
}

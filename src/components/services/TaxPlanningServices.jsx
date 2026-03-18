'use client'
import { useState } from 'react'

const features = [
  { 
    num: '01', 
    title: '80C Deductions', 
    shortDesc: 'Maximize tax-saving investments',
    fullDesc: 'ELSS, PPF, Life Insurance, House Loan Principal. We structure your investments to capture every benefit and ensure you never miss a deduction opportunity.',
    icon: '📋' 
  },
  { 
    num: '02', 
    title: '80D Health Insurance', 
    shortDesc: 'Strategic health insurance planning',
    fullDesc: 'Reduce taxable income while ensuring comprehensive coverage for you, spouse, and parents. Get maximum deductions with optimal coverage.',
    icon: '🏥' 
  },
  { 
    num: '03', 
    title: 'HRA Exemption', 
    shortDesc: 'Maximize housing tax benefits',
    fullDesc: 'Optimize HRA exemption calculation to ensure you pay zero tax on housing benefits while maximizing your take-home salary.',
    icon: '🏠' 
  },
  { 
    num: '04', 
    title: 'Capital Gains', 
    shortDesc: 'Strategic portfolio timing',
    fullDesc: 'Strategic timing and portfolio structuring to defer long-term capital gains and minimize short-term capital gains tax impact.',
    icon: '💹' 
  },
  { 
    num: '05', 
    title: 'Advanced Planning', 
    shortDesc: 'Custom tax strategies',
    fullDesc: 'Tailored strategies for complex situations including business income, multiple properties, inheritance, and international income.',
    icon: '⚙️' 
  },
]

export default function TaxPlanningServices() {
  const [expandedCard, setExpandedCard] = useState(null)

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-navy-dark via-navy to-slate-950">
      <div className="max-w-[1200px] mx-auto px-8">
        
        {/* Header */}
        <div className="reveal mb-8 max-w-[700px]">
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3rem)] font-bold text-blue-900 leading-[1.1] mb-4 italic">
            Five Ways We Cut Your Tax Bill
          </h2>
          <p className="text-[1rem] text-accent leading-relaxed italic font-medium">
            From deductions to optimizations, we have strategic solutions for every aspect of your financial life.
          </p>
        </div>

        {/* Card Grid - 2-1-2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map(({ num, title, shortDesc, fullDesc, icon }, i) => (
            <div key={title} className={i === 2 ? 'md:flex md:justify-center' : ''}>
              <button
                onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                className={`w-full group relative rounded-2xl overflow-hidden border transition-all duration-300 text-left h-full ${
                expandedCard === i
                  ? 'border-accent/70 shadow-lg shadow-accent/20'
                  : 'border-white/10 hover:border-accent/50'
              } ${
                i === 0 ? 'bg-gradient-to-br from-blue-600 to-blue-800' :
                i === 1 ? 'bg-gradient-to-br from-cyan-600 to-cyan-800' :
                i === 2 ? 'bg-gradient-to-br from-amber-600 to-amber-800' :
                i === 3 ? 'bg-gradient-to-br from-rose-600 to-rose-800' :
                'bg-gradient-to-br from-indigo-600 to-indigo-800'
              }`}>
              
              {/* Animated background */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(255,255,255,0.3), transparent)',
                }} />

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                
                {/* Top: Icon and Number */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl font-serif font-bold text-white/25">{num}</div>
                  <div className="text-3xl">{icon}</div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-[1.15rem] font-bold text-white mb-3 leading-tight">
                  {title}
                </h3>

                {/* Description - expands */}
                <div className={`text-white/80 leading-relaxed text-[.9rem] flex-1 transition-all duration-300 ${
                  expandedCard === i ? 'opacity-100' : 'opacity-70'
                }`}>
                  <p>
                    {expandedCard === i ? fullDesc : shortDesc}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className={`mt-4 flex items-center gap-2 transition-all ${
                  expandedCard === i ? 'text-white' : 'text-white/60 group-hover:text-white'
                }`}>
                  <span className="text-[.8rem] font-medium">
                    {expandedCard === i ? 'Close' : 'Learn more'}
                  </span>
                  <span className={`w-4 h-px bg-current inline-block transition-transform ${
                    expandedCard === i ? 'rotate-90' : ''
                  }`} />
                </div>
              </div>
            </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

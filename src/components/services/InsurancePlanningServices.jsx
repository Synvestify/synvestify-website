'use client'
import { useState } from 'react'

const features = [
  { 
    title: 'Term Life Insurance', 
    desc: 'Cost-effective pure insurance protection with coverage up to ₹1 crore. Ideal for breadwinners—ensures your family gets financial security for 20-30 years at minimal cost.',
    icon: '💰',
    benefits: ['Pure risk coverage', 'Affordable premiums', 'High coverage amounts', 'Fixed tenure options']
  },
  { 
    title: 'Health Insurance', 
    desc: 'Family health plans covering hospitalization, pre-post care, and wellness benefits. Protects against rising healthcare costs and ensures timely medical treatment without financial stress.',
    icon: '🏥',
    benefits: ['Hospital cashless facility', 'Pre & post hospitalization', 'Wellness benefits', 'Worldwide coverage']
  },
  { 
    title: 'Critical Illness Insurance', 
    desc: 'Protection against 50+ critical illnesses like cancer, heart attack, stroke. Provides lump sum payout for treatment and recovery allowing you to focus on health, not finances.',
    icon: '⚕️',
    benefits: ['50+ disease coverage', 'Lump sum payout', 'Treatment flexibility', 'No waiting period option']
  },
  { 
    title: 'Disability Insurance', 
    desc: 'Replaces lost income if you become unable to work due to illness or accident. Ensures mortgage, loans, and living expenses are covered till you return to work.',
    icon: '🛡️',
    benefits: ['Income replacement', 'Loan protection', 'Recovery support', 'Cost of living']
  },
  { 
    title: 'Investment-Linked Insurance', 
    desc: 'Combines life insurance with investment in equity/debt funds for dual benefits. Build wealth while ensuring family protection—ideal for long-term financial goals.',
    icon: '📈',
    benefits: ['Life protection', 'Wealth building', 'Flexible investment', 'Tax benefits']
  },
]

export default function InsurancePlanningServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        
        {/* Header */}
        <div className="reveal mb-16 max-w-[800px]">
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3rem)] font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-[1.1] mb-4">
            Coverage Types for Every Need
          </h2>
          <p className="text-[1rem] text-slate-600 leading-relaxed font-medium">
            Each insurance type addresses specific risks and needs. Together, they create a comprehensive protection strategy.
          </p>
        </div>

        {/* Vertical Feature List with Feature Details */}
        <div className="space-y-4">
          {features.map(({ title, desc, icon, benefits }, i) => (
            <div
              key={title}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 bg-gradient-to-r from-white/5 to-transparent hover:from-white/10"
            >
              {/* Animated gradient background on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                style={{
                  background: 'linear-gradient(90deg, rgba(37,99,235,0.1), rgba(6,182,212,0.1))',
                }} />

              <div className="relative z-10 p-6 md:p-8">
                <div className="flex items-start gap-6 md:flex-row flex-col">
                  
                  {/* Icon */}
                  <div className="text-5xl flex-shrink-0">{icon}</div>

                  {/* Title and Description */}
                  <div className="flex-1">
                    <h3 className="font-serif text-[1.3rem] md:text-[1.5rem] font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-accent group-hover:bg-clip-text transition-all">
                      {title}
                    </h3>
                    <p className="text-slate-900 leading-relaxed text-[.95rem] mb-4 group-hover:text-slate-900 transition-colors">
                      {desc}
                    </p>

                    {/* Benefits - show on hover */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-300">
                      {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs md:text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span className="text-slate-900 group-hover:text-accent transition-colors">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 text-2xl text-accent opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}


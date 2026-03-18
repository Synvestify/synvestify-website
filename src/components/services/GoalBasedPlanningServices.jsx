'use client'

const services = [
  {
    title: 'Retirement Planning',
    desc: 'Calculate your retirement corpus, define lifestyle, and create a withdrawal strategy that ensures your golden years are truly golden.',
    icon: '🏖️',
    highlights: ['Corpus Calculation', 'Expense Planning', 'Investment Strategy', 'Income Options'],
  },
  {
    title: 'Education Planning',
    desc: 'Plan for your child\'s education from school to post-graduation. Account for inflation and secure quality education without debt burden.',
    icon: '🎓',
    highlights: ['School Planning', 'College Funds', 'Inflation Adjusted', 'Tax Benefits'],
  },
  {
    title: 'Property Purchase',
    desc: 'Smart home buying strategy. Analyze affordability, optimize financing, and plan the perfect time to buy your dream property.',
    icon: '🏠',
    highlights: ['Affordability Check', 'Home Loan Planning', 'Down Payment Strategy', 'Investment Analysis'],
  },
  {
    title: 'Wealth Creation',
    desc: 'Build and multiply your wealth through strategic investing. Create a diversified portfolio aligned with your goals and risk profile.',
    icon: '💎',
    highlights: ['Asset Allocation', 'Diversification', 'Risk Management', 'Growth Strategy'],
  },
  {
    title: 'Emergency Fund',
    desc: 'Establish a financial safety net with our emergency fund calculator. Know exactly how much you need and how to build it systematically.',
    icon: '🛡️',
    highlights: ['Fund Calculation', 'Savings Plan', 'Liquidity Strategy', 'Growth Options'],
  },
  {
    title: 'Legacy Planning',
    desc: 'Secure your family\'s future through smart succession planning. Maximize wealth transfer while minimizing tax burden for heirs.',
    icon: '👨‍👩‍👧‍👦',
    highlights: ['Will Planning', 'Tax Optimization', 'Asset Transfer', 'Beneficiary Strategy'],
  },
]

export default function GoalBasedPlanningServices() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        
        {/* Header */}
        <div className="reveal mb-16 max-w-[800px]">
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3rem)] font-bold bg-gradient-to-r from-blue-950 via-blue-800 to-slate-900 bg-clip-text text-transparent leading-[1.1] mb-4">
            Goals We Help You Achieve
          </h2>
          <p className="text-[1rem] text-slate-600 leading-relaxed font-medium">
            From retirement to education, we've helped thousands plan and achieve their most important financial milestones.
          </p>
        </div>

        {/* Staggered Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={service.title} 
              className={`group reveal ${i % 2 === 1 ? 'md:translate-y-8' : ''}`}
            >
              <div className="h-full rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-blue-50/50 to-transparent p-8 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300">
                
                {/* Icon */}
                <div className="text-5xl mb-4">{service.icon}</div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl font-bold text-blue-950 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-blue-900 group-hover:bg-clip-text transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 h-20 overflow-hidden group-hover:text-slate-700 transition-colors">
                  {service.desc}
                </p>

                {/* Highlights - appear as tags */}
                <div className="space-y-2">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-slate-600 group-hover:text-blue-700 transition-colors font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom accent bar */}
                <div className="mt-6 h-1 w-0 group-hover:w-12 bg-gradient-to-r from-blue-400 to-blue-600 transition-all rounded-full" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

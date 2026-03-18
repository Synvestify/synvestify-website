'use client'

export default function TaxPlanningHero() {
  return (
    <section className="pt-[66px] min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-navy-dark relative overflow-hidden flex items-center">
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #3B82F6, #1E40AF)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #8B5CF6, #6366F1)' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #EC4899, #F43F5E)' }} />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)', backgroundSize: '50px 50px', color: 'white' }} />

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1200px] mx-auto px-8 py-8 md:py-12">
          
          {/* Top Label */}
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse" />
            <span className="text-[.75rem] font-semibold uppercase tracking-widest text-white/60">
              Intelligent Tax Planning
            </span>
          </div>

          {/* Main Heading */}
          <div className="max-w-[900px] mb-16">
            <h1 className="font-serif text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Cut Your Taxes in
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Three Strategic Steps
              </span>
            </h1>

            <p className="text-[1.15rem] text-white/70 leading-relaxed max-w-[700px] mb-8">
              Tax planning isn't one-size-fits-all. We analyze your entire financial picture to find every legal deduction, strategically optimize your portfolio, and build a tax-efficient wealth strategy tailored to your goals.
            </p>
          </div>

          {/* Key Points Text */}
          <div className="reveal max-w-[800px] space-y-4">
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <p className="text-[.95rem] text-white/70 leading-relaxed">
                Discover overlooked deductions under 80C, 80D, 80E, and other tax sections that could save you ₹50,000 to ₹3,00,000 annually
              </p>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <p className="text-[.95rem] text-white/70 leading-relaxed">
                Optimize your investment portfolio with tax-efficient vehicles like ELSS, PPF, and life insurance aligned with your risk profile
              </p>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <p className="text-[.95rem] text-white/70 leading-relaxed">
                Get a personalized tax strategy that grows with your wealth and adapts to every life change — marriage, business, inheritance
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Floating CTA */}
      <div className="absolute right-8 bottom-12 reveal">
        <div className="flex flex-col items-end gap-4">
          <div className="text-right">
            <p className="text-[.85rem] text-white/40 mb-1">Ready to save?</p>
            <p className="text-[1rem] font-semibold text-white">Book a consultation</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white animate-bounce cursor-pointer hover:shadow-lg hover:shadow-blue-500/50 transition-all">
            ↓
          </div>
        </div>
      </div>

    </section>
  )
}

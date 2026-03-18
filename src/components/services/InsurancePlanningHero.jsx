'use client'

export default function InsurancePlanningHero() {
  return (
    <section className="pt-[66px] min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-navy-dark relative overflow-hidden flex items-center">
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #3B82F6, #1E40AF)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #06B6D4, #0891B2)' }} />
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #2563EB, #0284C7)' }} />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)', backgroundSize: '50px 50px', color: 'white' }} />

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1200px] mx-auto px-8 py-8 md:py-12">
          
          {/* Top Label */}
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse" />
            <span className="text-[.75rem] font-semibold uppercase tracking-widest text-white/60">
              Smart Insurance Strategy
            </span>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Main Heading and Description */}
            <div>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] mb-6">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Insurance That Adapts to
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Your Life
                </span>
              </h1>

              <p className="text-[1.05rem] text-white/70 leading-relaxed mb-10">
                Life changes. Your insurance should too. We build flexible coverage plans that grow with your family, adapt to your income changes, and protect what matters most—without the complexity.
              </p>

              {/* Stats */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-accent font-bold text-lg">→</span>
                  <span className="text-white/80">Coverage designed for your exact life stage</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent font-bold text-lg">→</span>
                  <span className="text-white/80">Best policies based on your unique needs</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent font-bold text-lg">→</span>
                  <span className="text-white/80">24/7 support from our dedicated team</span>
                </div>
              </div>
            </div>

            {/* Right: Visual Cards Stack */}
            <div className="reveal relative h-96">
              {/* Card Stack Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/40 to-cyan-600/40 border border-white/10 transform -rotate-3 -skew-y-1" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-600/40 to-blue-600/40 border border-white/10 transform -rotate-1 skew-y-1 translate-y-3" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/50 to-cyan-500/50 border border-accent/30 flex flex-col justify-center p-8">
                
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">Complete Protection</h3>
                <p className="text-white/80 mb-6 text-sm leading-relaxed">
                  Life, health, disability, critical illness—all coordinated for maximum coverage with zero gaps.
                </p>
                
                {/* Mini badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-cyan-300 border border-cyan-400/50">Term Insurance</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-cyan-300 border border-cyan-400/50">Health Cover</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-cyan-300 border border-cyan-400/50">Disability</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Floating CTA */}
      <div className="absolute right-8 bottom-12 reveal">
        <div className="flex flex-col items-end gap-4">
          <div className="text-right">
            <p className="text-[.85rem] text-white/40 mb-1">Need guidance?</p>
            <p className="text-[1rem] font-semibold text-white">Start here</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white animate-bounce cursor-pointer hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
            ↓
          </div>
        </div>
      </div>

    </section>
  )
}

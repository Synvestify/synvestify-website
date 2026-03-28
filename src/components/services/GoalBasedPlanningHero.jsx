'use client'
import { useState } from 'react'

const goals = [
  { emoji: '🏠', label: 'Home Purchase', amount: '₹1Cr - ₹7Cr', timeline: '3-5 years' },
  { emoji: '🎓', label: 'Child Education', amount: '₹20L - ₹50L', timeline: '10-18 years' },
  { emoji: '🌍', label: 'World Tour', amount: '₹10L - ₹30L', timeline: '2-3 years' },
  { emoji: '🏖️', label: 'Retirement', amount: '₹7Cr - ₹10Cr', timeline: '20-30 years' },
]

export default function GoalBasedPlanningHero() {
  const [activeGoal, setActiveGoal] = useState(0)

  return (
    <section className="pt-[66px] min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 relative overflow-hidden flex items-center">
      
      {/* Animated Background Shapes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #60A5FA, #3B82F6)' }} />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #1E3A8A, #1E40AF)' }} />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #0369A1, #1E40AF)' }} />

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1200px] mx-auto px-8 py-8 md:py-12">
          
          {/* Top Label */}
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 animate-pulse" />
            <span className="text-[.75rem] font-semibold uppercase tracking-widest text-white/60">
              Achieve Financial Milestones
            </span>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left */}
            <div className="reveal">
              <h1 className="font-serif text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.1] mb-6">
                <span className="text-white">
                  Turn Your Dreams
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent">
                  Into Reality
                </span>
              </h1>

              <p className="text-[1.1rem] text-white/75 leading-relaxed mb-8 max-w-[550px]">
                Every financial goal deserves a roadmap. Whether it's buying your dream home, funding education, or securing retirement, we create actionable plans that turn aspirations into achievements.
              </p>

              <div className="flex items-center gap-4 mb-12">
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                  Start Planning
                </button>
                </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-blue-300 font-bold text-lg">✓</span>
                  <span className="text-white/80 text-sm">Personalized goal timeline based on your situation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-300 font-bold text-lg">✓</span>
                  <span className="text-white/80 text-sm">Monthly contribution plans you can actually follow</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-300 font-bold text-lg">✓</span>
                  <span className="text-white/80 text-sm">Quarterly reviews and course corrections</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="reveal">
              <div className="relative h-96">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-800/40 to-blue-900/40 border border-blue-500/50 backdrop-blur-sm overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20 blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.5), transparent)' }} />
                  
                  <div className="relative z-10 h-full flex flex-col justify-center items-center p-12 text-center">
                    <div className="text-8xl mb-6 animate-bounce">{goals[activeGoal].emoji}</div>
                    <h2 className="font-serif text-3xl font-bold text-white mb-4">{goals[activeGoal].label}</h2>
                    <div className="space-y-2 mb-8">
                      <p className="text-blue-300 text-lg font-semibold">{goals[activeGoal].amount}</p>
                      <p className="text-white/70 text-sm">Timeline: {goals[activeGoal].timeline}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-3 mt-8">
                {goals.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveGoal(i)}
                    className={`h-3 rounded-full transition-all ${
                      activeGoal === i
                        ? 'w-8 bg-gradient-to-r from-blue-400 to-blue-500'
                        : 'w-3 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mt-8">
                {goals.map((goal, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveGoal(i)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      activeGoal === i
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {goal.emoji} {goal.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}
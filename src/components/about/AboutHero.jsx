export default function AboutHero() {
  return (
    <section className="pt-[66px] bg-dark relative overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.16), transparent 65%)', top: '-150px', right: '-100px' }} />

      <div className="relative z-10 max-w-[1160px] mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-7 h-[1.5px] bg-accent-light" />
            <span className="text-[.97rem] text-white/50 leading-[1.82] max-w-[460px]">
              Our Story
            </span>
          </div>
          <h1 className="font-serif text-[clamp(2.6rem,4vw,3.6rem)] font-bold text-white leading-[1.1] mb-6">
            Built on trust,<br />
            <em className="italic text-accent-pale">driven by purpose</em>
          </h1>
          <p className="text-[.97rem] text-white/50 leading-[1.82] max-w-[460px]">
            Synvestify was founded with one belief — that every investor, regardless of portfolio size,
            deserves honest, conflict-free financial guidance. No hidden agendas. No product quotas.
            Just advice that puts you first.
          </p>
        </div>

        {/* Right — founder card */}
        <div className="rounded-2xl p-8 relative overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}>
          <div className="absolute w-[200px] h-[200px] rounded-full pointer-events-none"
            style={{ background: 'rgba(37,99,235,0.12)', top: '-60px', right: '-60px' }} />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-serif text-2xl font-bold text-white mb-5"
              style={{ background: 'linear-gradient(135deg, #1E3A8A, #2563EB)', fontFamily: 'Inter, sans-serif' }}>
              S
            </div>
            <p className="font-serif text-[1.15rem] text-white leading-[1.6] mb-5">
              &quot;We started Synvestify because we saw too many investors being sold products
              instead of being given advice. That had to change.&quot;
            </p>
            <div className="h-px mb-5" style={{ background: 'rgba(255,255,255,0.08)' }} />
            <div>
              <div className="text-[.88rem] font-semibold text-white">Synvestify Team</div>
              <div className="text-[.74rem] text-white/35 mt-1">New Delhi · Est. 2018</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

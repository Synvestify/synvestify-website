export default function CalculatorHero() {
  return (
    <section className="pt-[66px] bg-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.16), transparent 65%)', top: '-150px', right: '-100px' }} />

      <div className="relative z-10 max-w-[1160px] mx-auto px-8 py-24">
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-7 h-[1.5px] bg-accent-light" />
          <span className="text-[.68rem] font-semibold tracking-[.2em] uppercase text-white/50">
            Financial Planning
          </span>
        </div>
        <h1 className="font-serif text-[clamp(2.4rem,4vw,3.4rem)] font-bold text-white leading-[1.1] mb-5 max-w-[560px]">
          Calculate your<br />
          <em className="italic text-accent-pale">financial future</em>
        </h1>
        <p className="text-[.97rem] text-white/70 leading-[1.82] max-w-[500px]">
          Use our interactive calculators to estimate SIP returns, lumpsum investments, retirement corpus, and EMI calculations. 
          All results are based on your inputs and market assumptions.
        </p>
      </div>
    </section>
  )
}

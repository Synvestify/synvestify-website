import Link from 'next/link'

export default function CTA() {
  return (
    <div className="relative overflow-hidden" style={{ background: '#1E3A8A' }} id="cta">
      <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.22), transparent 65%)', top: '-200px', right: '-100px' }} />

      <div className="relative z-10 max-w-[1160px] mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-14 items-center">

        <div className="reveal">
          <h2 className="font-serif text-[2.2rem] font-bold text-white leading-[1.22] mb-4">
            Ready to start your<br />financial journey?
          </h2>
            <p className="text-[.94rem] text-white leading-[1.75] max-w-[480px]">
              Book a free, no-obligation consultation. No jargon, no pressure — just honest financial
              guidance tailored entirely to you.
            </p>
        </div>

        <div className="reveal flex flex-col gap-3 flex-shrink-0">
          <Link href="/contact"
            className="text-center bg-accent text-white text-[.9rem] font-semibold px-8 py-3.5 rounded-xl hover:bg-[#1d4ed8] transition-all hover:-translate-y-0.5 whitespace-nowrap">
            Book Free Consultation →
          </Link>
          <Link href="/risk-profiling"
            className="text-center text-white/75 text-[.9rem] font-medium px-8 py-3.5 rounded-xl border border-white/15 hover:bg-white/10 transition-colors whitespace-nowrap"
            style={{ background: 'rgba(255,255,255,0.07)' }}>
            Take Risk Assessment
          </Link>
          <p className="text-center text-[.76rem] text-white/30 mt-1">
            📞 +91-9599698871 &nbsp;·&nbsp; ✉️ support@synvestify.in
          </p>
        </div>

      </div>
    </div>
  )
}

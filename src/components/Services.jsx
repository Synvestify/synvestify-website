import Link from 'next/link'

const services = [
  { n: '01', name: 'Goal Based Planning',      desc: 'Curated portfolios aligned to your risk profile and long-term financial goals.',     href: '/goal-based-planning' },
  { n: '02', name: 'Tax Planning',             desc: 'Reduce tax liability through smart investments under 80C, 80D, and more.',            href: '/tax-planning' },
  { n: '03', name: 'Insurance Planning',       desc: 'Complete protection — term, health, and more — without any sales bias.',             href: '/insurance-planning' },
  { n: '04', name: 'Retirement Planning',      desc: 'Define your FIRE number and build a systematic corpus to retire confidently.',       href: '/calculators' },
  { n: '05', name: 'Risk Profiling',           desc: 'A structured assessment of your risk appetite — before any recommendation.',        href: '/risk-profiling' },
]

export default function Services() {
  return (
    <section className="py-24 bg-brand-soft" id="services">
      <div className="max-w-[1160px] mx-auto px-8">

        <div className="reveal flex justify-between items-end mb-8 flex-wrap gap-4">
          <div>
            <span className="inline-block text-[.65rem] font-semibold uppercase tracking-[.16em] text-accent bg-accent/8 px-3 py-1 rounded-full">
              What We Offer
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-bold text-slate-900 leading-[1.2] mt-3">
              Our Financial Services
            </h2>
          </div>
          <Link href="/contact"
            className="text-[.84rem] font-semibold px-[22px] py-[9px] rounded-[9px] bg-navy text-white hover:bg-navy-mid transition-all hover:-translate-y-px">
            Get Started →
          </Link>
        </div>

        <div className="reveal rounded-2xl overflow-hidden border border-brand-border">
          {services.map(({ n, name, desc, href }, i) => (
            <Link key={n} href={href}
              className={`group grid grid-cols-[72px_1fr_1fr_32px] items-center gap-6 px-7 py-[26px] bg-white transition-all duration-200
                ${i < services.length - 1 ? 'border-b border-brand-border' : ''}
                hover:bg-brand-soft hover:pl-9`}>
              <span className="font-sans text-[1.5rem] font-bold text-brand-border leading-none" style={{fontFamily: 'Inter, sans-serif'}}>{n}</span>
              <span className="font-serif text-[1rem] font-semibold text-slate-900">{name}</span>
              <span className="text-[.81rem] text-slate-400 leading-relaxed hidden md:block">{desc}</span>
              <span className="text-[1.2rem] text-navy opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

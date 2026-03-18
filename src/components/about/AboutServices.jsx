import Link from 'next/link'

const services = [
  { title: 'Mutual Fund Distribution', desc: 'Direct and regular plans across equity, debt, hybrid, and international funds. Portfolio construction tailored to your risk profile and goals.', href: '/goal-based-planning' },
  { title: 'Tax Planning',             desc: 'Maximize deductions under 80C, 80D, 80CCD, and more. ELSS investments, HRA planning, and tax-efficient portfolio structuring.', href: '/tax-planning' },
  { title: 'Insurance Planning',       desc: 'Term life, health, and critical illness coverage. We find the right plan at the right premium — without pushing high-commission products.', href: '/insurance-planning' },
  { title: 'Retirement Planning',      desc: 'From calculating your FIRE number to building a systematic withdrawal plan. We help you retire on your terms, not on market terms.', href: '/calculators' },
  { title: 'Risk Profiling',           desc: 'A structured, science-backed assessment of your risk capacity and appetite. The foundation of every investment we recommend.', href: '/risk-profiling' },
  { title: 'Goal-Based Planning',      desc: 'Whether it\'s a child\'s education, a home purchase, or early retirement — we build dedicated investment baskets for each life goal.', href: '/goal-based-planning' },
]

export default function AboutServices() {
  return (
    <section className="py-24 bg-brand-soft" id="services">
      <div className="max-w-[1160px] mx-auto px-8">

        <div className="reveal flex justify-between items-end mb-10 flex-wrap gap-4">
          <div>
            <span className="inline-block text-[.65rem] font-semibold uppercase tracking-[.16em] text-accent bg-accent/8 px-3 py-1 rounded-full">
              What We Do
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-bold text-slate-900 leading-[1.2] mt-3">
              Services we offer
            </h2>
          </div>
          <Link href="/contact"
            className="text-[.84rem] font-semibold px-[22px] py-[9px] rounded-[9px] bg-navy text-white hover:bg-navy-mid transition-all hover:-translate-y-px">
            Book Free Consultation →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ title, desc, href }) => (
            <Link key={title} href={href}
              className="reveal group bg-white border border-brand-border rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-200 block">
              <h3 className="font-serif text-[1.05rem] font-semibold text-slate-900 mb-3 leading-snug group-hover:text-accent transition-colors">
                {title}
              </h3>
              <p className="text-[.84rem] text-slate-500 leading-[1.78] mb-4">{desc}</p>
              <span className="text-[.8rem] font-semibold text-navy inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

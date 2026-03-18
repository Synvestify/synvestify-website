import Link from 'next/link'
import Image from 'next/image'

const cols = {
  Explore: [
    { l: 'About',   h: '/about' },
    { l: 'Blog',    h: '/blog' },
    { l: 'Contact', h: '/contact' },
  ],
  Services: [
    { l: 'Goal-Based Planning', h: '/goal-based-planning' },
    { l: 'Tax Planning',        h: '/tax-planning' },
    { l: 'Insurance Planning',  h: '/insurance-planning' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-0">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr] gap-11 pb-11 border-b border-slate-200">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3.5">
              <Image src="/logo.png" alt="Synvestify" width={32} height={32} className="object-contain" />
              <span className="font-serif font-bold text-[.92rem] text-slate-800 tracking-[1px]">SYNVESTIFY</span>
            </div>
            <p className="text-[.77rem] text-slate-600 leading-[1.8] mb-4 max-w-[260px]">
              Synchronizing your investments across Mutual Funds, Insurance, Tax Planning &amp; more.
            </p>
            <div className="flex flex-col gap-1.5 text-[.75rem] text-slate-600">
              <span>📍 14-F Nivedita Enclave A-6, Paschim Vihar, New Delhi – 110063</span>
              <a href="tel:+919599698871" className="hover:text-slate-800 transition-colors">📞 +91-9599698871</a>
              <a href="mailto:support@synvestify.in" className="hover:text-slate-800 transition-colors">✉️ support@synvestify.in</a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([heading, links]) => (
            <div key={heading}>
              <h5 className="text-[.68rem] font-semibold uppercase tracking-[.14em] text-slate-700 mb-4">{heading}</h5>
              <ul className="flex flex-col gap-2.5 list-none">
                {links.map(({ l, h, ext }) => (
                  <li key={l}>
                    {ext ? (
                      <a href={h} target="_blank" rel="noopener noreferrer"
                        className="text-[.77rem] text-slate-600 hover:text-slate-800 transition-colors">{l}</a>
                    ) : (
                      <Link href={h} className="text-[.77rem] text-slate-600 hover:text-slate-800 transition-colors">{l}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-4 flex flex-col md:flex-row justify-between items-start gap-4">
            <p className="text-[.69rem] text-slate-500">© 2025 Synvestify. All rights reserved.</p>
            <p className="text-[.64rem] text-slate-500 leading-[1.65] max-w-[540px]">
            Investments are subject to market and credit risks. Past performance is not indicative of future returns.
          </p>
        </div>

      </div>
    </footer>
  )
}

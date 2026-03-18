'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  { label: 'Risk Profiling',        href: '/risk-profiling' },
  { label: 'Goal-Based Planning',   href: '/goal-based-planning' },
  { label: 'Tax Planning',          href: '/tax-planning' },
  { label: 'Insurance Planning',    href: '/insurance-planning' },
  { label: 'Retirement Planning',   href: '/retirement-planning' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]   = useState(false)
  const [mobileOpen,  setMobileOpen] = useState(false)
  const [dropOpen,    setDropOpen]   = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 bg-white border-b border-slate-200 transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
        <div className="max-w-[1160px] mx-auto px-8 h-[66px] flex items-center gap-1">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-[11px] mr-auto">
            <Image src="/logo.png" alt="Synvestify" width={38} height={38} className="object-contain" />
            <span className="font-serif font-bold text-[1rem] text-dark tracking-[1px]">SYNVESTIFY</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            <div className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
              <button className="flex items-center gap-1 text-[.84rem] font-medium text-slate-700 px-[13px] py-[7px] rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors">
                Services <span className="text-[.65rem] opacity-50">▾</span>
              </button>
              {dropOpen && (
                <div className="absolute top-[calc(100%+6px)] left-0 bg-white border border-brand-border rounded-xl shadow-md min-w-[200px] overflow-hidden z-50">
                  {services.map(s => (
                    <Link key={s.href} href={s.href} className="block px-4 py-[10px] text-[.84rem] text-slate-500 hover:bg-brand-soft hover:text-navy transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {[['About', '/about'], ['Calculators', '/calculators'], ['Blog', '/blog'], ['Contact', '/contact']].map(([l, h]) => (
              <Link key={h} href={h} className="text-[.84rem] font-medium text-slate-700 px-[13px] py-[7px] rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors">{l}</Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-2 ml-3">
              <div className="w-px h-[18px] bg-slate-200 mx-1" />
              <a href="https://www.ifaplanet.com/login.php" target="_blank" rel="noopener noreferrer"
                className="text-[.84rem] font-semibold px-[18px] py-[8px] rounded-[9px] border-[1.5px] border-slate-200 text-slate-700 hover:border-slate-300 transition-colors">
                Client Login
              </a>
              <Link href="/contact"
                className="text-[.84rem] font-semibold px-[22px] py-[9px] rounded-[9px] bg-slate-800 text-white hover:bg-slate-900 transition-all hover:-translate-y-px">
                Get Started
              </Link>
          </div>

          {/* Hamburger */}
          <button className="md:hidden ml-auto flex flex-col gap-[5px] p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className={`block w-6 h-0.5 bg-dark rounded transition-all ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-dark rounded transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-dark rounded transition-all ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed top-[66px] inset-x-0 bg-white border-t border-slate-200 shadow-md z-40 flex flex-col gap-1 px-6 py-4">
          {[['About', '/about'], ['Tax Planning', '/tax-planning'], ['Insurance Planning', '/insurance-planning'], ['Goal-Based Planning', '/goal-based-planning'], ['Risk Profiling', '/risk-profiling'], ['Calculators', '/calculators'], ['Blog', '/blog'], ['Contact', '/contact']].map(([l, h]) => (
            <Link key={h} href={h} onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-slate-700 py-2.5 px-3 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors">{l}</Link>
          ))}
          <div className="flex gap-2 mt-3 pt-3 border-t border-slate-200">
            <a href="https://www.ifaplanet.com/login.php" target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center text-sm font-semibold py-2.5 rounded-lg border border-slate-200 text-slate-700 hover:border-slate-300">Client Login</a>
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              className="flex-1 text-center text-sm font-semibold py-2.5 rounded-lg bg-slate-800 text-white hover:bg-slate-900">Get Started</Link>
          </div>
        </div>
      )}
    </>
  )
}

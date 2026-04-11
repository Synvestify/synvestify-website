'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

const months = [
  {
    month: 'April',
    year: '2026',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    emoji: '🌱',
    highlight: 'New year, new regime decision',
    tasks: [
      { icon: '🎯', title: 'Choose your tax regime', desc: 'Old vs New — decide and submit your investment declaration to your employer immediately. Delaying means higher TDS all year.' },
      { icon: '📋', title: 'Submit Form 121 (earlier 15G/15H)', desc: 'Prevent unnecessary TDS on interest income. Submit to your bank before April ends.' },
      { icon: '💼', title: 'Check if your salary has changed', desc: 'The New Wage Code restructures salary — Basic must be at least 50% of CTC. Your in-hand pay may be lower but PF contribution higher. Check your April payslip carefully and update your monthly budget.' },
      { icon: '📝', title: 'Update your Will and nominations', desc: 'New financial year, fresh start. One outdated nominee can undo years of careful planning.' },
      { icon: '🛡️', title: 'Review insurance coverage', desc: 'New baby, new home, new job? Your life cover (target: 10–12x annual income) and health cover need to keep pace.' },
      { icon: '🪙', title: 'Akshaya Tritiya — April 19', desc: 'Auspicious day to buy gold. Prefer Gold ETF or Sovereign Gold Bond over physical gold. Maintain allocation — don\'t splurge.' },
    ],
  },
  {
    month: 'May',
    year: '2026',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    emoji: '📊',
    highlight: 'Review numbers before filing season',
    tasks: [
      { icon: '📥', title: 'Download your AIS', desc: 'Check your Annual Information Statement for discrepancies now. A mismatch found in May is a crisis avoided in July.' },
      { icon: '💰', title: 'List every income source', desc: 'Salary, interest, capital gains, rent, dividends, freelance — the taxman sees everything. Make sure your list matches.' },
      { icon: '📈', title: 'Got a raise? Step up your SIP', desc: 'Don\'t let a hike become lifestyle inflation. Top up your SIP before the new salary feels normal.' },
      { icon: '💼', title: 'Recalculate monthly surplus', desc: 'If your take-home dropped due to the new wage code, recalculate your monthly investable surplus. Don\'t reduce SIPs — cut discretionary spend instead.' },
    ],
  },
  {
    month: 'June',
    year: '2026',
    color: '#0E7490',
    bg: '#ECFEFF',
    border: '#A5F3FC',
    emoji: '🏦',
    highlight: 'First advance tax instalment',
    tasks: [
      { icon: '🏦', title: 'Advance Tax Round 1 — June 15 (15%)', desc: 'Pay at least 15% of your estimated annual tax liability. Interest on delay runs at 1% per month under Section 234C.' },
      { icon: '📄', title: 'Download Form 130 (earlier Form 16)', desc: 'Employers must issue by June 15. Download, verify against your payslips, and check against your AIS.' },
      { icon: '🔄', title: 'Changed jobs or got a bonus?', desc: 'Recalculate your advance tax. Non-salary income like freelance or capital gains is easy to forget and expensive to miss.' },
    ],
  },
  {
    month: 'July',
    year: '2026',
    color: '#DC2626',
    bg: '#FEF2F2',
    border: '#FECACA',
    emoji: '📅',
    highlight: 'ITR filing deadline — July 31',
    tasks: [
      { icon: '📊', title: 'File your ITR by July 31', desc: 'File early — don\'t wait for July 30. Late filing attracts ₹5,000 penalty and blocks loss carry-forward benefits.' },
      { icon: '✅', title: 'Match AIS, Form 168 and Form 130', desc: 'A mismatch between your records and the government\'s is the #1 trigger for scrutiny notices. Verify everything first.' },
      { icon: '🌍', title: 'NRI status change?', desc: 'Returned to India unexpectedly? Your residency status may have changed, affecting which income is taxable. Check before filing.' },
    ],
  },
  {
    month: 'August',
    year: '2026',
    color: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    emoji: '🇮🇳',
    highlight: 'Independence Day — financial freedom check',
    tasks: [
      { icon: '🇮🇳', title: 'Are you financially independent?', desc: 'Calculate your FIRE number: annual expenses × 25. On track? If not, August 15 is as good a day as any to restart.' },
      { icon: '📅', title: 'Last call for non-audit filing — August 31', desc: 'Missed July 31? This is your final chance without a ₹5,000 penalty for non-audit cases.' },
      { icon: '🤝', title: 'Start a SIP for someone who needs it', desc: 'A ₹500/month SIP for your household staff started today can genuinely transform their financial life in 20 years.' },
    ],
  },
  {
    month: 'September',
    year: '2026',
    color: '#047857',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    emoji: '📈',
    highlight: 'Second advance tax + mid-year review',
    tasks: [
      { icon: '🏦', title: 'Advance Tax Round 2 — September 15 (45%)', desc: 'Must be at 45% of annual liability. Paid too little in June? Top it up now to avoid compounding interest charges.' },
      { icon: '📊', title: 'Mid-year portfolio review', desc: 'Halfway through FY 2026-27. Is your portfolio aligned to your goals? Review allocation, prune laggards, realign targets.' },
      { icon: '👥', title: 'Review joint accounts and nominees', desc: 'A nominee from years ago may no longer reflect your intentions. Update insurance, bank, and mutual fund nominees.' },
    ],
  },
  {
    month: 'October',
    year: '2026',
    color: '#C2410C',
    bg: '#FFF7ED',
    border: '#FED7AA',
    emoji: '🎉',
    highlight: 'Festive season — protect your wallet',
    tasks: [
      { icon: '🎉', title: 'Festive season — celebrate wisely', desc: 'Diwali deals are tempting. Your emergency fund is not a shopping budget. EMI is fine only if you can clear it by November.' },
      { icon: '👥', title: 'Check all nominees again', desc: 'Insurance policies, mutual funds, bank accounts — one outdated nominee can undo everything. Review and update.' },
      { icon: '💼', title: 'Wage code check — review your PF', desc: 'Higher Basic = higher PF. Check if the deduction is eroding your budget more than expected. You may need to rebalance savings vs expenses.' },
    ],
  },
  {
    month: 'November',
    year: '2026',
    color: '#1E3A8A',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    emoji: '🪔',
    highlight: 'Investment proof deadline approaching',
    tasks: [
      { icon: '🪔', title: 'Diwali — joy not debt', desc: 'Emergency fund is off-limits. Credit card is fine only if you can clear it fully in December.' },
      { icon: '👨‍👩‍👧', title: "Children's Day — November 14", desc: 'Open a mutual fund account in your child\'s name. Teach them about money before the world teaches them the wrong lessons.' },
      { icon: '📋', title: 'Submit investment proof to employer', desc: 'Get 80C, 80D, HRA, and other declarations ready now. Your employer needs them in December for final TDS adjustment.' },
    ],
  },
  {
    month: 'December',
    year: '2026',
    color: '#0F172A',
    bg: '#F1F5F9',
    border: '#CBD5E1',
    emoji: '📋',
    highlight: 'Third advance tax + year-end review',
    tasks: [
      { icon: '🏦', title: 'Advance Tax Round 3 — December 15 (75%)', desc: 'Three quarters of tax must be paid. Three quarters of the year gone. Run the numbers and top up if needed.' },
      { icon: '📊', title: 'Year-end review — do it now, not March', desc: 'Review fund performance, check allocation drift, book tax losses, plan rebalancing. No surprises allowed in March.' },
      { icon: '📅', title: 'Belated return deadline — December 31', desc: 'Missed July AND August deadlines? File now with ₹5,000 late fee. Don\'t carry this problem into the new year.' },
    ],
  },
  {
    month: 'January',
    year: '2027',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    emoji: '🎯',
    highlight: 'New year, measurable money goals',
    tasks: [
      { icon: '🎯', title: 'Set specific financial goals', desc: 'Not "save more" — but "increase SIP by ₹2,000 every quarter." Specific goals get achieved. Vague ones get forgotten by February.' },
      { icon: '🏥', title: 'Book your annual health check', desc: 'Your health insurance likely covers a free annual check. Book it in January, not December when you finally remember.' },
      { icon: '📋', title: 'Submit investment declarations early', desc: 'Your employer needs proof for TDS recalculation in Feb-March. Get ahead of the deadline.' },
    ],
  },
  {
    month: 'February',
    year: '2027',
    color: '#9D174D',
    bg: '#FDF2F8',
    border: '#FBCFE8',
    emoji: '📢',
    highlight: 'Budget Day — review every announcement',
    tasks: [
      { icon: '📢', title: 'Union Budget — February 1', desc: 'Review every announcement carefully. Tax slab changes, regime tweaks, new deductions — may require revisiting your employer declaration.' },
      { icon: '💝', title: "Valentine's Day — February 14", desc: 'The best gift to a partner is a clear joint financial plan. Review shared goals, insurance, and nominees together.' },
      { icon: '💼', title: 'Final salary TDS check', desc: 'Confirm your employer has correctly adjusted TDS for the full year. A shortfall means a tax demand. An excess means a slow refund after July.' },
    ],
  },
  {
    month: 'March',
    year: '2027',
    color: '#DC2626',
    bg: '#FEF2F2',
    border: '#FECACA',
    emoji: '⏰',
    highlight: 'Every deadline closes March 31 at midnight',
    tasks: [
      { icon: '🏦', title: 'Advance Tax Final — March 15 (100%)', desc: 'Full annual liability due. Last chance to book capital losses or lock in gains before the financial year ends.' },
      { icon: '⏰', title: '80C, 80D, NPS — closes March 31 at midnight', desc: 'ELSS, PPF, health insurance premium, NPS contribution — act before 11:59 PM on March 31. After that, the deduction is gone.' },
      { icon: '✏️', title: 'Revise your ITR by March 31', desc: 'Last chance to correct errors in your AY 2026-27 return. After March 31 it cannot be revised.' },
    ],
  },
]

function MonthCard({ month, year, color, bg, border, emoji, highlight, tasks }) {
  return (
    <div className="rounded-2xl overflow-hidden border-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
      style={{ borderColor: border }}>
      <div className="px-5 py-4 flex items-center gap-3" style={{ background: color }}>
        <span className="text-xl">{emoji}</span>
        <div className="flex-1 min-w-0">
          <p className="font-serif text-[1rem] font-bold text-white leading-none">{month} {year}</p>
          <p className="text-[.65rem] text-white/55 mt-0.5 truncate">{highlight}</p>
        </div>
        <span className="text-[.65rem] font-bold text-white/50 bg-white/10 px-2 py-0.5 rounded-full flex-shrink-0">
          {tasks.length} tasks
        </span>
      </div>
      <div className="px-5 py-4 space-y-3.5" style={{ background: bg }}>
        {tasks.map(({ icon, title, desc }) => (
          <div key={title} className="flex items-start gap-3">
            <span className="text-lg flex-shrink-0 mt-0.5">{icon}</span>
            <div>
              <p className="text-[.86rem] font-semibold text-slate-900 mb-0.5 leading-snug">{title}</p>
              <p className="text-[.78rem] text-slate-500 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function MoneyCalendarPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <section className="pt-[66px] relative overflow-hidden"
          style={{ background: 'linear-gradient(150deg, #0F172A 0%, #1E3A8A 60%, #1254B0 100%)' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
          <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.18), transparent 65%)', top: '-150px', right: '-80px' }} />

          <div className="relative z-10 max-w-[900px] mx-auto px-8 pt-16 pb-14">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[.78rem] font-medium text-white/35 hover:text-white/70 transition-colors mb-8">
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="text-[.65rem] font-semibold uppercase tracking-widest text-accent bg-accent/15 px-2.5 py-1 rounded-full">
                📅 Financial Planning
              </span>
              <span className="text-[.72rem] text-white/35">April 11, 2026</span>
              <span className="text-[.72rem] text-white/35">· 6 min read</span>
            </div>
            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.12] mb-5">
              Your Money Calendar<br className="hidden md:block" /> for FY 2026–27
            </h1>
            <p className="text-[1rem] text-white/55 leading-relaxed max-w-[640px] mb-10">
              Deadlines, reminders, and a nudge or two — including what the New Wage Code means for your take-home pay. Every important financial date mapped month by month so nothing slips through.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-10">
              {[
                { label: 'Advance tax dates', val: '4', sub: 'Jun · Sep · Dec · Mar' },
                { label: 'ITR deadline', val: 'Jul 31', sub: 'for salaried individuals' },
                { label: 'Tax saving closes', val: 'Mar 31', sub: 'at midnight' },
                { label: 'New Wage Code', val: '⚠️', sub: 'May reduce take-home' },
              ].map(({ label, val, sub }) => (
                <div key={label} className="rounded-xl px-4 py-3"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>
                  <p className="text-[.62rem] font-semibold uppercase tracking-widest text-white/40 mb-1">{label}</p>
                  <p className="font-serif text-[1.4rem] font-bold text-white leading-none mb-1">{val}</p>
                  <p className="text-[.7rem] text-white/35">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <article className="bg-white">
          <div className="max-w-[900px] mx-auto px-8 py-14">

            {/* Byline */}
            <div className="flex items-center gap-3 mb-10 pb-8 border-b border-brand-border">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #1E3A8A, #2563EB)' }}>S</div>
              <div>
                <p className="text-[.84rem] font-semibold text-slate-900">Synvestify Research Desk</p>
                <p className="text-[.72rem] text-slate-400">FY 2026–27 Edition · New Delhi</p>
              </div>
            </div>

            <p className="text-[1rem] text-slate-700 leading-[1.85] mb-5">
              A new financial year means fresh deadlines, new decisions, and this year — a significant change that may already be affecting your salary. The New Wage Code restructures how employers calculate pay, and for many salaried employees, the immediate effect is a lower monthly take-home.
            </p>
            <p className="text-[1rem] text-slate-600 leading-[1.85] mb-8">
              This calendar maps every important financial action across FY 2026–27 — tax dates, investment deadlines, insurance reviews — with specific callouts for how the wage code change should factor into your planning each quarter.
            </p>

            {/* Wage code explainer */}
            <div className="rounded-2xl overflow-hidden mb-10 border border-orange-200">
              <div className="px-6 py-4" style={{ background: '#C2410C' }}>
                <p className="font-serif text-[1.1rem] font-bold text-white">💼 The New Wage Code — Why Your Salary May Look Different</p>
              </div>
              <div className="px-6 py-5" style={{ background: '#FFF7ED' }}>
                <p className="text-[.9rem] text-slate-700 leading-relaxed mb-4">
                  The Code on Wages, 2019 redefines how Basic pay is calculated. Under the new rules, <strong>Basic pay must be at least 50% of total CTC</strong>. For most salaried employees, this means:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                  {[
                    { icon: '⬆️', label: 'Higher PF contribution', desc: 'Both you and your employer contribute more to PF, since PF is calculated on Basic pay' },
                    { icon: '⬆️', label: 'Higher gratuity', desc: 'Gratuity is calculated on Basic + DA, so your long-term retirement payout increases' },
                    { icon: '⬇️', label: 'Lower take-home pay', desc: 'More going to PF means less in your bank account — sometimes ₹3,000–8,000 less per month' },
                  ].map(({ icon, label, desc }) => (
                    <div key={label} className="bg-white rounded-xl p-4 border border-orange-100">
                      <p className="text-xl mb-2">{icon}</p>
                      <p className="text-[.84rem] font-semibold text-slate-900 mb-1">{label}</p>
                      <p className="text-[.76rem] text-slate-500 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl p-4 border border-orange-100">
                  <p className="text-[.84rem] font-semibold text-slate-900 mb-3">What you should do right now:</p>
                  <div className="space-y-2">
                    {[
                      'Compare your April 2026 payslip with March 2026 — identify the exact change in net take-home',
                      'Recalculate your monthly budget with the revised in-hand amount',
                      'Do not reduce SIPs to compensate — cut discretionary spending instead',
                      'Your higher PF contribution counts under Section 80C (up to ₹1.5L) — factor this into your tax planning',
                    ].map((t, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-accent font-bold text-[.9rem] flex-shrink-0 mt-0.5">→</span>
                        <p className="text-[.82rem] text-slate-600 leading-relaxed">{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* New IT Act note */}
            <div className="rounded-xl p-5 mb-10" style={{ background: '#FFF7ED', border: '1px solid #FED7AA' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">⚠️</span>
                <strong className="text-[.88rem] font-bold text-slate-900">New Income Tax Act 2025 — Form Numbers Have Changed</strong>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { old: 'Form 16', new_: 'Form 130', desc: 'Salary TDS certificate from employer' },
                  { old: 'Form 26AS', new_: 'Form 168', desc: 'Consolidated tax credit statement' },
                  { old: 'Form 15G/H', new_: 'Form 121', desc: 'Self-declaration for nil TDS' },
                ].map(({ old, new_, desc }) => (
                  <div key={old} className="bg-white rounded-lg p-3 border border-orange-100">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[.72rem] line-through text-slate-400">{old}</span>
                      <span className="text-[.65rem] text-slate-400">→</span>
                      <span className="text-[.82rem] font-bold text-orange-700">{new_}</span>
                    </div>
                    <p className="text-[.72rem] text-slate-500">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar grid */}
            <h2 className="font-serif text-[1.45rem] font-bold text-slate-900 mb-2 flex items-center gap-3">
              <span className="block w-1 h-6 rounded-full bg-accent flex-shrink-0" />
              Month-by-Month Action Plan
            </h2>
            <p className="text-[.84rem] text-slate-400 mb-7">April 2026 to March 2027 — all 12 months</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
              {months.map((m) => (
                <MonthCard key={m.month + m.year} {...m} />
              ))}
            </div>

            {/* Advance tax */}
            <h2 className="font-serif text-[1.3rem] font-bold text-slate-900 mb-5 flex items-center gap-3">
              <span className="block w-1 h-6 rounded-full bg-accent flex-shrink-0" />
              Advance Tax — 4 Dates to Never Miss
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
              {[
                { date: 'June 15', pct: '15%', label: 'Instalment 1' },
                { date: 'Sep 15',  pct: '45%', label: 'Instalment 2' },
                { date: 'Dec 15',  pct: '75%', label: 'Instalment 3' },
                { date: 'Mar 15',  pct: '100%', label: 'Final' },
              ].map(({ date, pct, label }) => (
                <div key={date} className="text-center bg-brand-soft border border-brand-border rounded-xl py-5 px-3">
                  <p className="text-[.65rem] font-semibold uppercase tracking-widest text-slate-400 mb-2">{label}</p>
                  <p className="font-serif text-[1.8rem] font-bold text-navy">{pct}</p>
                  <p className="text-[.8rem] font-semibold text-accent mt-1">{date}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl p-5 mb-12" style={{ background: '#EFF6FF', border: '1px solid #BFDBFE' }}>
              <p className="text-[.84rem] text-slate-600 leading-relaxed">
                <strong className="text-slate-800">Who pays advance tax?</strong> Anyone with tax liability exceeding ₹10,000 after TDS. Salaried employees with only salary income are usually covered by employer TDS. But rental income, interest, capital gains, freelance income, or dividends require you to calculate and pay in these 4 instalments. Delay attracts 1% interest per month under Section 234C.
              </p>
            </div>

            {/* SIP rule */}
            <div className="border border-brand-border rounded-2xl overflow-hidden mb-12">
              <div className="px-6 py-5" style={{ background: '#1E3A8A' }}>
                <p className="font-serif text-[1.1rem] font-bold text-white">The one rule for every single month: keep your SIPs running.</p>
              </div>
              <div className="px-6 py-5 bg-brand-soft space-y-3">
                {[
                  'Market up or down — your SIP buys more units during a fall, building long-term wealth automatically.',
                  'Do not pause SIPs to compensate for lower take-home from the new wage code. Adjust discretionary spending instead.',
                  'Step up your SIP by 10% every April when salaries increase. This one habit can nearly double your final corpus.',
                  'Review fund performance every 6 months, not every day. Short-term NAV movement is noise, not signal.',
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[.65rem] font-bold text-white"
                      style={{ background: '#2563EB' }}>{i + 1}</span>
                    <p className="text-[.86rem] text-slate-600 leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl p-8" style={{ background: '#1E3A8A' }}>
              <h3 className="font-serif text-[1.2rem] font-semibold text-white mb-2">
                Want a personalised financial plan for FY 2026–27?
              </h3>
              <p className="text-[.88rem] text-white/50 mb-5 leading-relaxed">
                Tax regime choice, advance tax calculation, wage code impact on your salary, investment gap analysis — every investor's situation is different. Book a free consultation and we'll build your personalised roadmap for the year.
              </p>
              <Link href="/contact"
                className="inline-block bg-accent text-white text-[.92rem] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#1d4ed8] transition-colors">
                Book Free Consultation →
              </Link>
            </div>

            <p className="text-[.72rem] text-slate-400 leading-relaxed mt-8 pt-6 border-t border-brand-border">
              <strong className="font-semibold">Disclaimer:</strong> This article is for educational and informational purposes only. Tax dates and provisions are based on the Income Tax Act, 2025 and Income Tax Rules, 2026. Wage code impact varies by employer and CTC structure. Please consult your SEBI-registered financial advisor or chartered accountant before making tax or investment decisions.
            </p>

          </div>
        </article>

      </main>
      <Footer />
    </>
  )
}

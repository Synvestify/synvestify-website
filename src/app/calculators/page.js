'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import CalculatorHero from '@/components/calculators/CalculatorHero'
import SIPCalculator from '@/components/calculators/SIPCalculator'
import LumpsumCalculator from '@/components/calculators/LumpsumCalculator'
import RetirementCalculator from '@/components/calculators/RetirementCalculator'
import EMICalculator from '@/components/calculators/EMICalculator'

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState('sip')

  const tabs = [
    { id: 'sip', label: 'SIP Calculator', component: SIPCalculator },
    { id: 'lumpsum', label: 'Lumpsum Calculator', component: LumpsumCalculator },
    { id: 'retirement', label: 'Retirement Calculator', component: RetirementCalculator },
    { id: 'emi', label: 'EMI Calculator', component: EMICalculator },
  ]

  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <CalculatorHero />

        {/* Calculators Section */}
        <section className="py-24">
          <div className="max-w-[1160px] mx-auto px-8">
            {/* Tabs */}
            <div className="reveal flex gap-3 mb-12 overflow-x-auto">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold text-[.9rem] whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-navy text-white'
                      : 'bg-brand-soft text-slate-600 hover:bg-brand-border'
                  }`}>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active Calculator */}
            <div className="reveal">
              {tabs.map(tab => (
                activeTab === tab.id && <tab.component key={tab.id} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

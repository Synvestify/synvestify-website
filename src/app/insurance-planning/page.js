import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import CTA from '@/components/CTA'
import InsurancePlanningHero from '@/components/services/InsurancePlanningHero'
import InsurancePlanningServices from '@/components/services/InsurancePlanningServices'
import InsurancePlanningProcess from '@/components/services/InsurancePlanningProcess'

export const metadata = {
  title: 'Insurance Planning — Synvestify',
  description: 'Comprehensive insurance solutions including life, health, critical illness, and disability coverage. Build a personalized insurance portfolio that protects your family and wealth.',
  keywords: 'insurance planning, life insurance, health insurance, term insurance, critical illness, disability insurance',
  openGraph: {
    title: 'Insurance Planning — Synvestify',
    description: 'Comprehensive insurance solutions including life, health, critical illness, and disability coverage.',
    type: 'website',
  },
}

export default function InsurancePlanningPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <InsurancePlanningHero />
        <InsurancePlanningServices />
        <InsurancePlanningProcess />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

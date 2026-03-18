import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import CTA from '@/components/CTA'
import TaxPlanningHero from '@/components/services/TaxPlanningHero'
import TaxPlanningServices from '@/components/services/TaxPlanningServices'
import TaxPlanningProcess from '@/components/services/TaxPlanningProcess'

export const metadata = {
  title: 'Tax Planning — Synvestify',
  description: 'Smart tax planning strategies using 80C, 80D, ELSS, and more. Reduce your tax liability legally and build wealth efficiently.',
}

export default function TaxPlanningPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <TaxPlanningHero />
        <TaxPlanningServices />
        <TaxPlanningProcess />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

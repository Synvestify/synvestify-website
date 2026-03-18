import Navbar         from '@/components/Navbar'
import Footer         from '@/components/Footer'
import CTA            from '@/components/CTA'
import ScrollReveal   from '@/components/ScrollReveal'
import AboutHero      from '@/components/about/AboutHero'
import AboutMission   from '@/components/about/AboutMission'
import AboutValues    from '@/components/about/AboutValues'
import AboutServices  from '@/components/about/AboutServices'

export const metadata = {
  title: 'About Us — Synvestify',
  description: 'Learn about Synvestify — a pure distribution model financial advisor serving 100+ clients across India, USA, UK & Canada. No commissions, no conflicts.',
}

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <AboutHero />
        <AboutMission />
        <AboutValues />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

import Navbar         from '@/components/Navbar'
import Hero           from '@/components/Hero'
import MarqueeTrustBar from '@/components/MarqueeTrustBar'
import About          from '@/components/About'
import SynvestifyModelVideo from '@/components/SynvestifyModelVideo'
import Services       from '@/components/Services'
import Testimonials   from '@/components/Testimonials'
import Blog           from '@/components/Blog'
import FAQ            from '@/components/FAQ'
import CTA            from '@/components/CTA'
import Footer         from '@/components/Footer'
import ScrollReveal   from '@/components/ScrollReveal'
import TruxlInit      from '@/components/TruxlInit'

export const metadata = {
  title: 'Synvestify — Synchronizing Your Investments',
  description: 'Expert mutual fund distribution, tax planning, insurance advisory, and retirement planning. Serving 100+ clients across India, USA, UK & Canada.',
}

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <TruxlInit />
      <Navbar />
      <main>
        <Hero />
        <MarqueeTrustBar />
        <About />
        <SynvestifyModelVideo />
        <Services />
        <Testimonials />
        <Blog />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

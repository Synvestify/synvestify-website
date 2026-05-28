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
  title: 'Synvestify — Mutual Fund Distributor & Financial Advisor | India',
  description: 'SEBI-registered mutual fund distributor offering retirement planning, tax planning, insurance advisory, and goal-based investing. Serving 100+ clients across India, USA, UK & Canada.',
  keywords: 'mutual fund distributor India, retirement planning India, financial advisor Delhi, tax planning, SIP investment, FIRE planning, NPS, insurance advisory',
  alternates: { canonical: 'https://www.synvestify.in' },
  openGraph: {
    title: 'Synvestify — Mutual Fund Distributor & Financial Advisor | India',
    description: 'SEBI-registered mutual fund distributor. Expert retirement planning, tax planning, and goal-based investing across India, USA, UK & Canada.',
    url: 'https://www.synvestify.in',
    siteName: 'Synvestify',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'The Synvestify Model — How We Synchronize Your Investments',
        description: 'Watch how Synvestify synchronizes your investments across different asset classes, tax strategies, and life goals — a holistic approach to wealth management.',
        thumbnailUrl: 'https://www.synvestify.in/images/synvestify-model-thumbnail.png',
        uploadDate: '2026-04-04',
        duration: 'PT6M',
        contentUrl: 'https://www.synvestify.in/videos/synvestify-model.mp4',
        publisher: { '@type': 'Organization', name: 'Synvestify', url: 'https://www.synvestify.in' },
      }) }} />
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

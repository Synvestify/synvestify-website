import Navbar       from '@/components/Navbar'
import Footer       from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm  from '@/components/contact/ContactForm'
import ContactInfo  from '@/components/contact/ContactInfo'

export const metadata = {
  title: 'Contact Us — Synvestify',
  description: 'Book a free consultation with Synvestify. No obligation, no jargon — just honest financial guidance tailored to you.',
}

export default function ContactPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>

        {/* Hero */}
        <section className="pt-[66px] bg-dark relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
          <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.16), transparent 65%)', top: '-120px', right: '-80px' }} />

          <div className="relative z-10 max-w-[1160px] mx-auto px-8 py-20">
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-7 h-[1.5px] bg-accent-light" />
              <span className="text-[.68rem] font-semibold tracking-[.2em] uppercase text-white/38">
                <span className="text-[.68rem] font-semibold tracking-[.2em] uppercase text-white/50">Free Consultation</span>
              </span>
            </div>
            <h1 className="font-serif text-[clamp(2.4rem,4vw,3.4rem)] font-bold text-white leading-[1.1] mb-5 max-w-[540px]">
              Let&apos;s start your<br />
              <em className="italic text-accent-pale">financial journey</em> together
            </h1>
            <p className="text-[.97rem] text-white/48 leading-[1.82] max-w-[480px]">
              <span className="text-[.97rem] text-white/70 leading-[1.82] max-w-[480px]">
                Fill in the form and we&apos;ll reach out within 24 hours to schedule a
                no-obligation consultation — no jargon, no pressure, just honest advice.
              </span>
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-20 bg-brand-soft">
          <div className="max-w-[1160px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">

              {/* Form card */}
              <div className="bg-white rounded-2xl border border-brand-border p-8 md:p-10 reveal">
                <h2 className="font-serif text-[1.4rem] font-bold text-slate-900 mb-2">
                  Book your free consultation
                </h2>
                <p className="text-[.87rem] text-slate-400 mb-8">
                  Fields marked <span className="text-accent font-semibold">*</span> are required.
                </p>
                <ContactForm />
              </div>

              {/* Sidebar */}
              <div className="reveal">
                <ContactInfo />
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

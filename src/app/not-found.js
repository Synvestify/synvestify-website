import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-[66px] bg-dark relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
          <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.16), transparent 65%)', top: '-120px', right: '-80px' }} />
          
          <div className="relative z-10 max-w-[760px] mx-auto px-4 sm:px-8 text-center">
            <div className="text-6xl font-bold text-white mb-4">404</div>
            <h1 className="font-serif text-[clamp(1.5rem,4vw,2.8rem)] font-bold text-white leading-[1.15] mb-4 sm:mb-5">
              Page Not Found
            </h1>
            <p className="text-[.8rem] sm:text-[.97rem] text-white/50 leading-[1.7] mb-6 sm:mb-8">
              The page you're looking for doesn't exist. Let's get you back on track.
            </p>
            <Link href="/"
              className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-accent text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors">
              Back to Home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

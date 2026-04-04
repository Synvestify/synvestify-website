'use client'

export default function SynvestifyModelVideo() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-[1160px] mx-auto px-8">
        
        {/* Section Header */}
        <div className="reveal text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2.5 mb-4 sm:mb-5">
            <div className="w-5 h-[1.5px] bg-accent-light" />
            <span className="text-[.68rem] font-semibold tracking-[.2em] uppercase text-accent">
              How It Works
            </span>
            <div className="w-5 h-[1.5px] bg-accent-light" />
          </div>
          <h2 className="font-serif text-[clamp(1.8rem,5vw,2.6rem)] font-bold text-slate-900 leading-[1.2] mb-4 sm:mb-5 max-w-[680px] mx-auto">
            The Synvestify Model
          </h2>
          <p className="text-[.95rem] text-slate-600 leading-[1.82] max-w-[640px] mx-auto">
            Watch how we synchronize your investments across different asset classes, tax strategies, and life goals.
          </p>
        </div>

        {/* Video Container */}
        <div className="reveal max-w-[900px] mx-auto">
          <div className="relative w-full bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg" 
            style={{ aspectRatio: '16 / 9' }}>
            <video 
              controls 
              className="w-full h-full object-cover"
              poster="/images/synvestify-model-thumbnail.png"
            >
              <source src="/videos/synvestify-model.mp4" type="video/mp4" />
              <source src="/videos/synvestify-model.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Description */}
          <div className="mt-8 sm:mt-10 text-center">
            <p className="text-[.88rem] text-slate-600 leading-[1.65] max-w-[640px] mx-auto">
              <span className="font-semibold text-slate-700">~6 minutes</span> to understand our holistic investment approach and why coordination between different strategies matters.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

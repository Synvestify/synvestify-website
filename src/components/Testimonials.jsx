const testimonials = [
  { initial: 'R', name: 'Shivi K.',  role: 'Phd. Professor, Lucknow', text: '"Synvestify has been amazing! Their team is knowledgeable, professional, and genuinely cares about my financial success. They provided tailored advice that improved my investments and kept me well-informed throughout. Their customer service is exceptional, always addressing my questions promptly. Highly recommend Synvestify for anyone seeking top-notch financial assistance!"' },
  { initial: 'P', name: 'Esha S.',  role: 'Tech Recruiter, UK',     text: '"As an NRI, If you would like to invest but don’t have the time to cherry pick MF’s your self, then reach out to Synvestify. Trustworthy and reliable, they will come up with the best plan to suit your budget, goal and aspirations."' },
  { initial: 'A', name: 'Archit M.',  role: 'Sales Director, New Delhi',      text: '"Whatever your financial goals are, Synvestify will help you with the best available options in the market. Would strongly recommend to all those who have never invested earlier and are looking for a friendly and experienced financial advisor."' },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-soft" id="testimonials">
      <div className="max-w-[1160px] mx-auto px-8">

        <div className="reveal text-center mb-12">
          <span className="inline-block text-[.65rem] font-semibold uppercase tracking-[.16em] text-accent bg-accent/8 px-3 py-1 rounded-full">
            Client Stories
          </span>
          <h2 className="font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-bold text-slate-900 mt-3">
            What our investors say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map(({ initial, name, role, text }) => (
            <blockquote key={name}
              className="reveal bg-white border-[1.5px] border-brand-border rounded-2xl p-8 hover:shadow-md hover:-translate-y-[3px] transition-all duration-200">
              <div className="text-amber-400 text-[.8rem] tracking-[2px] mb-4">★★★★★</div>
              <p className="font-serif text-[.97rem] italic text-slate-800 leading-[1.7] mb-5">{text}</p>
              <div className="h-px bg-brand-border mb-5" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-serif text-[.9rem] text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #1E3A8A, #2563EB)' }}>
                  {initial}
                </div>
                <div>
                  <div className="text-[.84rem] font-semibold text-slate-900">{name}</div>
                  <div className="text-[.7rem] text-slate-400 mt-0.5">{role}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  )
}

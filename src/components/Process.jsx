const steps = [
  { step: 'Step 01', title: 'Initial Consultation',  desc: 'A detailed conversation about your financial life — income, goals, commitments, and aspirations.' },
  { step: 'Step 02', title: 'Risk Assessment',       desc: 'We profile your risk tolerance, investment horizon, and financial knowledge before recommending anything.' },
  { step: 'Step 03', title: 'Personalized Strategy', desc: 'A bespoke plan mapped to your specific goals — not a generic template handed to every client.' },
  { step: 'Step 04', title: 'Ongoing Partnership',   desc: 'Regular reviews to keep your portfolio aligned as your life, goals, and markets evolve.' },
]

export default function Process() {
  return (
    <section className="py-24" id="process">
      <div className="max-w-[1160px] mx-auto px-8">

        <div className="reveal text-center">
          <span className="inline-block text-[.65rem] font-semibold uppercase tracking-[.16em] text-accent bg-accent/8 px-3 py-1 rounded-full">
            How It Works
          </span>
          <h2 className="font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-bold text-slate-900 leading-[1.2] mt-3 max-w-[420px] mx-auto">
            From first conversation to<br />lifelong partnership
          </h2>
        </div>

        <div className="reveal max-w-[700px] mx-auto mt-14 flex flex-col">
          {steps.map(({ step, title, desc }, i) => (
            <div key={step} className="grid items-start" style={{ gridTemplateColumns: '40px 1fr' }}>

              {/* Left: dot + line */}
              <div className="flex flex-col items-center pr-7">
                <div className="w-3 h-3 rounded-full bg-accent border-[3px] border-white flex-shrink-0"
                  style={{ boxShadow: '0 0 0 2px #2563EB', marginLeft: '-6px' }} />
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 min-h-[36px] mt-1"
                    style={{ background: 'linear-gradient(180deg, #2563EB, #DBEAFE)' }} />
                )}
              </div>

              {/* Right: content */}
              <div className={i < steps.length - 1 ? 'pb-6' : ''}>
                <p className="font-sans text-[.64rem] font-semibold uppercase tracking-[.16em] text-accent mb-1.5" style={{fontFamily: 'Inter, sans-serif'}}>{step}</p>
                <h3 className="font-serif text-[1.15rem] font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-[.87rem] text-slate-400 leading-[1.78]">{desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

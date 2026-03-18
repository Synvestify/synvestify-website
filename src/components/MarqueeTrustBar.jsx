const items = [
  'AMFI Registered Distributor', 'IRDAI Licensed Advisor', 'Pan India Service',
  'NRI Friendly', 'Zero Hidden Commissions', 'Goal-Based Planning',
  'Risk Profiling First', 'India · USA · UK · Canada',
]

export default function MarqueeTrustBar() {
  const all = [...items, ...items]
  return (
    <div className="bg-brand-soft border-b border-brand-border py-3 overflow-hidden" aria-hidden="true">
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {all.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-[.77rem] font-medium text-slate-600 px-[26px]">
            <span className="w-[3px] h-[3px] rounded-full bg-accent flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

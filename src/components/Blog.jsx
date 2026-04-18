import Link from 'next/link'
import { posts } from '@/lib/blogData'

export default function Blog() {
  const featured = posts.find(p => p.featured)
  const smallPosts = posts.filter(p => !p.featured).slice(0, 3)

  return (
    <section className="py-24" id="blog">
      <div className="max-w-[1160px] mx-auto px-8">

        <div className="reveal flex justify-between items-end mb-8 sm:mb-12 flex-wrap gap-4">
          <div>
            <span className="inline-block text-[.6rem] sm:text-[.65rem] font-semibold uppercase tracking-[.16em] text-accent bg-accent/8 px-2 sm:px-3 py-1 rounded-full">
              Investor Education
            </span>
            <h2 className="font-serif text-[clamp(1.5rem,5vw,2.6rem)] font-bold text-slate-900 leading-[1.2] mt-2 sm:mt-3">
              Insights to invest smarter
            </h2>
          </div>
          <Link href="/blog"
            className="text-[.7rem] sm:text-[.84rem] font-semibold px-4 sm:px-[22px] py-2 sm:py-[9px] rounded-lg sm:rounded-[9px] bg-navy text-white hover:bg-navy-mid transition-all hover:-translate-y-px whitespace-nowrap">
            All Articles →
          </Link>
        </div>

        {/* Featured article */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-start mb-8 sm:mb-12">
          {featured && (
            <Link href={`/blog/${featured.slug}`}
              className="md:col-span-2 block rounded-xl sm:rounded-2xl overflow-hidden border-[1.5px] border-brand-border bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group h-full">
              <div className="flex flex-col md:flex-row h-full">
                <div className={`md:w-1/2 h-[220px] sm:h-[280px] md:h-auto relative overflow-hidden bg-gradient-to-br ${featured.color || 'from-blue-700 to-blue-900'}`}>
                  {featured.image && (
                    <img src={featured.image} alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                  )}
                  <span className="absolute top-2 sm:top-4 left-2 sm:left-4 text-[.5rem] sm:text-[.58rem] font-semibold uppercase tracking-[.14em] text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                    FEATURED
                  </span>
                </div>
                <div className="md:w-1/2 p-5 sm:p-7 md:p-8 flex flex-col justify-center">
                  <p className="text-[.55rem] sm:text-[.63rem] font-semibold uppercase tracking-[.12em] text-accent mb-2 sm:mb-3">
                    {featured.category} · {featured.date}
                  </p>
                  <h3 className="font-serif text-[.95rem] sm:text-[1.15rem] md:text-[1.3rem] font-semibold text-slate-900 leading-[1.35] mb-3 sm:mb-4">
                    {featured.title}
                  </h3>
                  <p className="text-[.75rem] sm:text-[.85rem] text-slate-600 leading-relaxed mb-4 sm:mb-5 line-clamp-2">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[.7rem] sm:text-[.8rem] font-semibold text-navy hover:gap-3 transition-all">
                    Read Article →
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Side card */}
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 border-[1.5px] border-brand-border bg-gradient-to-br from-blue-50 to-blue-100/50">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📚</div>
            <p className="text-[.6rem] sm:text-[.72rem] font-semibold uppercase tracking-[.12em] text-slate-600 mb-2 sm:mb-3">On This Blog</p>
            <div className="space-y-2 mb-4">
              {['Mutual Fund Basics', 'Tax Planning', 'Behavioral Finance', 'Retirement Planning', 'Market Insights'].map(tag => (
                <div key={tag} className="text-[.72rem] sm:text-[.8rem] text-slate-600 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0"/>
                  {tag}
                </div>
              ))}
            </div>
            <Link href="/blog" className="text-[.7rem] sm:text-[.8rem] font-semibold text-navy hover:text-navy-mid transition-colors">
              Explore all →
            </Link>
          </div>
        </div>

        {/* 3 small posts */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {smallPosts.map(({ slug, date, title, excerpt, image, color, category }) => (
            <Link key={slug} href={`/blog/${slug}`}
              className="block bg-white border-[1.5px] border-brand-border rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200 group flex flex-col h-full">
              <div className={`h-40 sm:h-48 relative overflow-hidden bg-gradient-to-br ${color || 'from-blue-600 to-blue-800'}`}>
                {image && (
                  <img src={image} alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
                )}
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <p className="text-[.55rem] sm:text-[.65rem] font-semibold uppercase tracking-[.12em] text-slate-400 mb-2">
                  {date} · {category}
                </p>
                <h3 className="font-serif text-[.8rem] sm:text-[.95rem] font-semibold text-slate-900 leading-[1.35] mb-2 sm:mb-3 line-clamp-2 flex-grow group-hover:text-accent transition-colors">
                  {title}
                </h3>
                <p className="text-[.7rem] sm:text-[.78rem] text-slate-500 leading-relaxed mb-3 sm:mb-4 line-clamp-2">{excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-[.65rem] sm:text-[.77rem] font-semibold text-navy mt-auto">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

export default function BlogSearch({ posts }) {
  const [query, setQuery] = useState('')

  const featured = posts.find(p => p.featured)
  const restPosts = posts.filter(p => !p.featured)

  const filteredRest = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return restPosts

    return restPosts.filter(p => {
      const haystack = `${p.title} ${p.excerpt} ${p.category}`.toLowerCase()
      return haystack.includes(normalized)
    })
  }, [restPosts, query])

  const totalCount = filteredRest.length + (featured ? 1 : 0)

  return (
    <section className="py-20 bg-brand-soft">
      <div className="max-w-[1160px] mx-auto px-8">

        {/* Featured */}
        {featured && (
          <div className="reveal mb-12">
            <p className="text-[.6rem] sm:text-[.68rem] font-semibold uppercase tracking-widest text-accent mb-4">Featured Article</p>
            <Link href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-[1fr_420px] rounded-xl sm:rounded-2xl overflow-hidden border border-brand-border bg-white hover:shadow-lg transition-all duration-200">
              {/* Image */}
              <div className={`h-[220px] sm:h-[260px] lg:h-auto relative overflow-hidden bg-gradient-to-br ${featured.color}`}>
                <img 
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 sm:top-4 left-2 sm:left-4 text-[.5rem] sm:text-[.6rem] font-semibold uppercase tracking-widest text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>FEATURED</span>
              </div>
              {/* Content */}
              <div className="p-5 sm:p-10 flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="text-[.55rem] sm:text-[.65rem] font-semibold uppercase tracking-widest text-accent bg-accent/8 px-2 sm:px-2.5 py-1 rounded-full">
                    {featured.category}
                  </span>
                  <span className="text-[.6rem] sm:text-[.72rem] text-slate-400">{featured.date}</span>
                  <span className="text-[.6rem] sm:text-[.72rem] text-slate-400">· {featured.readTime}</span>
                </div>
                <h2 className="font-serif text-[.95rem] sm:text-[1.4rem] font-bold text-slate-900 leading-[1.3] mb-3 sm:mb-4 group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="text-[.75rem] sm:text-[.88rem] text-slate-500 leading-relaxed mb-4 sm:mb-6">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-[.7rem] sm:text-[.85rem] font-semibold text-navy group-hover:gap-4 transition-all">
                  Read Article →
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* All posts grid */}
        <div className="reveal">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-6">
            <p className="text-[.6rem] sm:text-[.68rem] font-semibold uppercase tracking-widest text-slate-400">
              All Articles — {totalCount} posts
            </p>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="search"
                aria-label="Search blog posts"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search posts"
                className="h-10 flex-1 sm:flex-initial rounded-full border border-brand-border bg-white/80 px-3 sm:px-4 text-[.75rem] sm:text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="h-10 rounded-full bg-slate-100 px-3 sm:px-4 text-[.7rem] sm:text-sm font-semibold text-slate-600 hover:bg-slate-200"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {filteredRest.length === 0 ? (
            <div className="py-16 text-center text-slate-500">
              No articles found. Try a different search term.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredRest.map(({ slug, title, excerpt, category, date, readTime, image, color }) => (
                <Link key={slug} href={`/blog/${slug}`}
                  className="group bg-white border border-brand-border rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
                  {/* Image */}
                  <div className={`h-36 sm:h-48 relative overflow-hidden bg-gradient-to-br ${color}`}>
                    <img 
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <span className="text-[.55rem] sm:text-[.63rem] font-semibold uppercase tracking-widest text-accent bg-accent/8 px-2 sm:px-2.5 py-1 rounded-full self-start mb-2 sm:mb-3">
                      {category}
                    </span>
                    <h3 className="font-serif text-[.8rem] sm:text-[1.05rem] font-bold text-slate-900 leading-[1.3] sm:leading-[1.35] mb-2 sm:mb-3 group-hover:text-accent transition-colors flex-1 line-clamp-2">
                      {title}
                    </h3>
                    <p className="text-[.7rem] sm:text-[.82rem] text-slate-400 leading-relaxed mb-3 sm:mb-5 line-clamp-2">{excerpt}</p>
                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-brand-border">
                      <span className="text-[.6rem] sm:text-[.72rem] text-slate-400">{date}</span>
                      <span className="text-[.6rem] sm:text-[.72rem] font-semibold text-navy">{readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

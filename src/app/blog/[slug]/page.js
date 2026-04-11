import Link         from 'next/link'
import { notFound, redirect } from 'next/navigation'
import Navbar        from '@/components/Navbar'
import Footer        from '@/components/Footer'
import ScrollReveal  from '@/components/ScrollReveal'
import { getPost, posts } from '@/lib/blogData'

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Synvestify`,
    description: post.excerpt,
  }
}

// Simple markdown-ish renderer
function renderContent(content) {
  if (!content || !content.trim()) return null
  return content
    .trim()
    .split('\n')
    .map((line, i) => {
      line = line.trim()
      if (!line) return <div key={i} className="h-3" />

      const imageMatch = line.match(/^!\[(.*?)\]\((.*?)\)$/)
      if (imageMatch) {
        const [, alt, src] = imageMatch
        return (
          <div key={i} className="my-8 sm:my-12 rounded-lg sm:rounded-2xl overflow-hidden bg-gray-100">
            <img src={src} alt={alt} className="w-full h-auto" />
          </div>
        )
      }
      if (line.startsWith('## ')) {
        return (
          <h2 key={i} className="font-serif text-[1.45rem] font-bold text-slate-900 mt-10 mb-4 leading-snug">
            {line.replace('## ', '')}
          </h2>
        )
      }
      if (line.startsWith('- ')) {
        return (
          <div key={i} className="flex items-start gap-2.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-[9px]" />
            <span className="text-[.93rem] text-slate-600 leading-[1.82]"
              dangerouslySetInnerHTML={{ __html: line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>') }}
            />
          </div>
        )
      }
      if (/^\d+\.\s\*\*/.test(line)) {
        return (
          <p key={i} className="text-[.93rem] text-slate-600 leading-[1.82] mb-2"
            dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>') }}
          />
        )
      }
      return (
        <p key={i} className="text-[.93rem] text-slate-600 leading-[1.82] mb-1"
          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>') }}
        />
      )
    })
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug)
  if (!post) notFound()
  if (!post.content || post.content === 'custom') notFound()
    
  const related = posts
    .filter(p => p.slug !== post.slug && p.content && p.content.trim())
    .slice(0, 3)

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
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.14), transparent 65%)', top: '-120px', right: '-80px' }} />
          <div className="relative z-10 max-w-[760px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
            <Link href="/blog"
              className="inline-flex items-center gap-2 text-[.7rem] sm:text-[.78rem] font-medium text-white/35 hover:text-white/70 transition-colors mb-6 sm:mb-8">
              ← Back to Blog
            </Link>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <span className="text-[.6rem] sm:text-[.65rem] font-semibold uppercase tracking-widest text-accent bg-accent/15 px-2 sm:px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-[.6rem] sm:text-[.72rem] text-white/35">{post.date}</span>
              <span className="text-[.6rem] sm:text-[.72rem] text-white/35">· {post.readTime}</span>
            </div>
            <h1 className="font-serif text-[clamp(1.5rem,4vw,2.8rem)] font-bold text-white leading-[1.15] mb-4 sm:mb-5">
              {post.title}
            </h1>
            <p className="text-[.8rem] sm:text-[.97rem] text-white/50 leading-[1.7] sm:leading-[1.82]">{post.excerpt}</p>
          </div>
        </section>

        {/* Featured image */}
        {post.image && (
          <section className="py-8 sm:py-12 bg-white">
            <div className="max-w-[760px] mx-auto px-4 sm:px-8">
              <div className="rounded-lg sm:rounded-2xl overflow-hidden h-56 sm:h-96 bg-gray-100 border border-brand-border">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </section>
        )}

        {/* Article body */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="max-w-[720px] mx-auto px-4 sm:px-8">
            <div className="flex items-center gap-4 mb-8 sm:mb-10">
              <div className="flex-1 h-px bg-brand-border" />
              <span className="text-[.6rem] sm:text-[.68rem] font-semibold uppercase tracking-widest text-slate-300">Article</span>
              <div className="flex-1 h-px bg-brand-border" />
            </div>
            <div className="prose-content">
              {renderContent(post.content)}
            </div>
            <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-brand-border">
              <div className="rounded-lg sm:rounded-2xl p-5 sm:p-7" style={{ background: '#1E3A8A' }}>
                <h3 className="font-serif text-[.95rem] sm:text-[1.1rem] font-semibold text-white mb-2">
                  Want personalized advice based on this?
                </h3>
                <p className="text-[.75rem] sm:text-[.84rem] text-white/45 mb-4 sm:mb-5 leading-relaxed">
                  Every investor&apos;s situation is different. Book a free consultation and we&apos;ll build a plan tailored specifically to you.
                </p>
                <Link href="/contact"
                  className="inline-block bg-accent text-white text-[.8rem] sm:text-[.88rem] font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-[#1d4ed8] transition-colors">
                  Book Free Consultation →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related posts */}
        <section className="py-10 sm:py-16 bg-brand-soft">
          <div className="max-w-[1160px] mx-auto px-4 sm:px-8">
            <p className="text-[.6rem] sm:text-[.68rem] font-semibold uppercase tracking-widest text-slate-400 mb-4 sm:mb-6">More Articles</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {related.map(({ slug, title, category, date, readTime, excerpt, image, color }) => (
                <Link key={slug} href={`/blog/${slug}`}
                  className="group bg-white border border-brand-border rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
                  <div className={`h-32 sm:h-40 w-full bg-gradient-to-br ${color || 'from-blue-600 to-blue-800'}`}>
                    {image && <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform"/>}
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <span className="text-[.55rem] sm:text-[.63rem] font-semibold uppercase tracking-widest text-accent bg-accent/8 px-2 sm:px-2.5 py-1 rounded-full self-start mb-2 sm:mb-3">
                      {category}
                    </span>
                    <h3 className="font-serif text-[.85rem] sm:text-[1rem] font-bold text-slate-900 leading-[1.3] mb-2 sm:mb-3 group-hover:text-accent transition-colors flex-1 line-clamp-2">
                      {title}
                    </h3>
                    <p className="text-[.7rem] sm:text-[.8rem] text-slate-400 leading-relaxed mb-3 sm:mb-4 line-clamp-2">{excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-brand-border">
                      <span className="text-[.6rem] sm:text-[.7rem] text-slate-400">{date}</span>
                      <span className="text-[.6rem] sm:text-[.7rem] font-semibold text-navy">{readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog"
                className="inline-block text-[.88rem] font-semibold px-7 py-3 rounded-xl border border-brand-border text-navy hover:bg-navy hover:text-white hover:border-navy transition-all">
                View All Articles →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
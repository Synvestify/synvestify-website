import Link         from 'next/link'
import { notFound } from 'next/navigation'
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

// Simple markdown-ish renderer — handles ## headings, **bold**, bullet points
function renderContent(content) {
  return content
    .trim()
    .split('\n')
    .map((line, i) => {
      line = line.trim()
      if (!line) return <div key={i} className="h-3" />

      // H2
      if (line.startsWith('## ')) {
        return (
          <h2 key={i} className="font-serif text-[1.45rem] font-bold text-slate-900 mt-10 mb-4 leading-snug">
            {line.replace('## ', '')}
          </h2>
        )
      }
      // Bullet
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
      // Bold numbered (1. **Title**)
      if (/^\d+\.\s\*\*/.test(line)) {
        return (
          <p key={i} className="text-[.93rem] text-slate-600 leading-[1.82] mb-2"
            dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>') }}
          />
        )
      }
      // Paragraph with inline bold
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

  const related = posts.filter(p => p.slug !== post.slug).slice(0, 3)

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

          <div className="relative z-10 max-w-[760px] mx-auto px-8 py-20">
            <Link href="/blog"
              className="inline-flex items-center gap-2 text-[.78rem] font-medium text-white/35 hover:text-white/70 transition-colors mb-8">
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[.65rem] font-semibold uppercase tracking-widest text-accent bg-accent/15 px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-[.72rem] text-white/35">{post.date}</span>
              <span className="text-[.72rem] text-white/35">· {post.readTime}</span>
            </div>
            <h1 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-white leading-[1.15] mb-5">
              {post.title}
            </h1>
            <p className="text-[.97rem] text-white/50 leading-[1.82]">{post.excerpt}</p>
          </div>
        </section>

        {/* Article body */}
        <section className="py-16 bg-white">
          <div className="max-w-[720px] mx-auto px-8">

            {/* Divider */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-brand-border" />
              <span className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-300">Article</span>
              <div className="flex-1 h-px bg-brand-border" />
            </div>

            {/* Content */}
            <div className="prose-content">
              {renderContent(post.content)}
            </div>

            {/* Footer divider */}
            <div className="mt-14 pt-8 border-t border-brand-border">
              <div className="rounded-2xl p-7" style={{ background: '#1E3A8A' }}>
                <h3 className="font-serif text-[1.1rem] font-semibold text-white mb-2">
                  Want personalized advice based on this?
                </h3>
                <p className="text-[.84rem] text-white/45 mb-5 leading-relaxed">
                  Every investor&apos;s situation is different. Book a free consultation and we&apos;ll
                  build a plan tailored specifically to you.
                </p>
                <Link href="/contact"
                  className="inline-block bg-accent text-white text-[.88rem] font-semibold px-6 py-3 rounded-xl hover:bg-[#1d4ed8] transition-colors">
                  Book Free Consultation →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related posts */}
        <section className="py-16 bg-brand-soft">
          <div className="max-w-[1160px] mx-auto px-8">
            <p className="text-[.68rem] font-semibold uppercase tracking-widest text-slate-400 mb-6">More Articles</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map(({ slug, title, category, date, readTime, excerpt }) => (
                <Link key={slug} href={`/blog/${slug}`}
                  className="group bg-white border border-brand-border rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col">
                  <div className="h-2 w-full" style={{ background: 'linear-gradient(90deg, #1E3A8A, #2563EB)' }} />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[.63rem] font-semibold uppercase tracking-widest text-accent bg-accent/8 px-2.5 py-1 rounded-full self-start mb-3">
                      {category}
                    </span>
                    <h3 className="font-serif text-[1rem] font-bold text-slate-900 leading-[1.35] mb-3 group-hover:text-accent transition-colors flex-1">
                      {title}
                    </h3>
                    <p className="text-[.8rem] text-slate-400 leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-brand-border">
                      <span className="text-[.7rem] text-slate-400">{date}</span>
                      <span className="text-[.7rem] font-semibold text-navy">{readTime}</span>
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

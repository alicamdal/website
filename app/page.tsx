import AvatarPlaceholder from '@/components/AvatarPlaceholder'
import { getAllBlogPosts } from '@/lib/mdx'
import publications from '@/data/publications.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '[YOUR NAME] — PhD Researcher & AI Engineer',
  description: 'PhD student and AI Engineer specializing in Computer Vision & Remote Sensing.',
}

const socialLinks = [
  { href: 'https://github.com/[USERNAME]', label: 'GitHub' },
  { href: 'https://linkedin.com/in/[USERNAME]', label: 'LinkedIn' },
  { href: 'https://scholar.google.com/citations?user=[SCHOLAR_ID]', label: 'Google Scholar' },
  { href: 'mailto:[EMAIL]@utwente.nl', label: 'Email' },
]

export default function HomePage() {
  const posts = getAllBlogPosts().slice(0, 2)
  const latestPub = publications[0]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-20">
        <AvatarPlaceholder initials="YN" size="lg" />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-2">
            [YOUR NAME]
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">PhD Researcher & AI Engineer</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
            <a href="https://www.utwente.nl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-950 transition-colors">
              <span className="w-2 h-2 rounded-full bg-blue-500" aria-hidden="true" />
              University of Twente
            </a>
            <a href="https://www.baykartech.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 text-sm font-medium hover:bg-red-100 dark:hover:bg-red-950/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#D01212]" aria-hidden="true" />
              Baykar Technology
            </a>
          </div>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-8">
            I am a PhD researcher at the University of Twente specializing in Computer Vision and Remote Sensing, investigating novel deep learning approaches for aerial and satellite image understanding. Concurrently, I work as an AI Software Engineer at Baykar Technology, building production-grade computer vision systems for real-world aerial intelligence applications.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            <a href="/research" className="px-5 py-2.5 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
              View Research →
            </a>
            <a href="/industry" className="px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Industry Work →
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                aria-label={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">Recent Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
            <span className="text-xs font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full">Publication</span>
            <h3 className="font-medium text-gray-900 dark:text-slate-100 mt-2 text-sm leading-snug">{latestPub.title}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{latestPub.venue} · {latestPub.year}</p>
            <a href="/research" className="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">See all publications →</a>
          </div>
          {posts.map((post) => (
            <div key={post.slug} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
              <span className="text-xs font-medium text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">Blog Post</span>
              <h3 className="font-medium text-gray-900 dark:text-slate-100 mt-2 text-sm leading-snug">
                <a href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{post.title}</a>
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{post.readingTime}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

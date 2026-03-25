import Image from 'next/image'
import { getAllBlogPosts } from '@/lib/mdx'
import publications from '@/data/publications.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ali Camdal — PhD Researcher & AI Engineer',
  description: 'PhD student and AI Engineer specializing in Computer Vision & Remote Sensing.',
}

const socialLinks = [
  { href: 'https://github.com/alicamdal', label: 'GitHub' },
  { href: 'https://linkedin.com/in/alicamdal', label: 'LinkedIn' },
  { href: 'https://scholar.google.com/citations?user=[SCHOLAR_ID]', label: 'Google Scholar' },
  { href: 'mailto:alicamdal0@gmail.com', label: 'Email' },
]

export default function HomePage() {
  const posts = getAllBlogPosts().slice(0, 2)
  const latestPub = publications[0]

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {/* Remote Sensing Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" className="opacity-[0.13] dark:opacity-[0.22]">
          <defs>
            <pattern id="rs-grid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
            </pattern>
            <radialGradient id="rs-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="1"/>
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
            </radialGradient>
          </defs>

          {/* Coordinate grid */}
          <rect width="1920" height="1080" fill="url(#rs-grid)"/>

          {/* Satellite glow origin */}
          <ellipse cx="1580" cy="160" rx="480" ry="480" fill="url(#rs-glow)" opacity="0.18"/>

          {/* Satellite orbit arc */}
          <ellipse cx="960" cy="-340" rx="1460" ry="930" fill="none" stroke="#06b6d4" strokeWidth="1.2" strokeDasharray="12 18"/>

          {/* Imagery tile 1 — left */}
          <rect x="120" y="240" width="360" height="300" fill="none" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="6 8"/>
          <path d="M 120 240 v20 M 120 240 h20" stroke="#22d3ee" strokeWidth="2"/>
          <path d="M 480 240 v20 M 480 240 h-20" stroke="#22d3ee" strokeWidth="2"/>
          <path d="M 120 540 v-20 M 120 540 h20" stroke="#22d3ee" strokeWidth="2"/>
          <path d="M 480 540 v-20 M 480 540 h-20" stroke="#22d3ee" strokeWidth="2"/>
          <text x="126" y="234" fill="#22d3ee" fontSize="8" fontFamily="monospace">52.2°N  6.9°E</text>
          <text x="126" y="255" fill="#22d3ee" fontSize="8" fontFamily="monospace">TILE_0042</text>

          {/* Imagery tile 2 — right */}
          <rect x="1320" y="500" width="360" height="300" fill="none" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="6 8"/>
          <path d="M 1320 500 v20 M 1320 500 h20" stroke="#22d3ee" strokeWidth="2"/>
          <path d="M 1680 500 v20 M 1680 500 h-20" stroke="#22d3ee" strokeWidth="2"/>
          <path d="M 1320 800 v-20 M 1320 800 h20" stroke="#22d3ee" strokeWidth="2"/>
          <path d="M 1680 800 v-20 M 1680 800 h-20" stroke="#22d3ee" strokeWidth="2"/>
          <text x="1326" y="494" fill="#22d3ee" fontSize="8" fontFamily="monospace">41.0°N  28.9°E</text>
          <text x="1326" y="515" fill="#22d3ee" fontSize="8" fontFamily="monospace">TILE_0187</text>

          {/* Crosshair 1 */}
          <line x1="820" y1="870" x2="900" y2="870" stroke="#22d3ee" strokeWidth="1"/>
          <line x1="860" y1="830" x2="860" y2="910" stroke="#22d3ee" strokeWidth="1"/>
          <circle cx="860" cy="870" r="9" fill="none" stroke="#22d3ee" strokeWidth="1"/>
          <circle cx="860" cy="870" r="2" fill="#22d3ee"/>

          {/* Crosshair 2 */}
          <line x1="1500" y1="115" x2="1580" y2="115" stroke="#3b82f6" strokeWidth="1"/>
          <line x1="1540" y1="75" x2="1540" y2="155" stroke="#3b82f6" strokeWidth="1"/>
          <circle cx="1540" cy="115" r="9" fill="none" stroke="#3b82f6" strokeWidth="1"/>
          <circle cx="1540" cy="115" r="2" fill="#3b82f6"/>

          {/* Status bar */}
          <text x="50" y="1065" fill="#6b7280" fontSize="8" fontFamily="monospace">BAND: R·G·NIR  |  GSD: 0.3 m/px  |  SRC: SENTINEL-2  |  PROJ: EPSG:4326</text>
        </svg>
      </div>

      {/* Hero */}
      <section className="relative z-10 rounded-2xl overflow-hidden mb-20 min-h-[340px] sm:min-h-[400px]">
        <Image
          src="/images/profile.jpg"
          alt="Ali Camdal"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gray-950/75" />
        <div className="relative z-10 px-5 sm:px-8 py-10 sm:py-16 md:py-20 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Ali Camdal
          </h1>
          <p className="text-xl text-gray-300 mb-6">PhD Researcher & AI Engineer</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
            <a href="https://www.utwente.nl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/60 text-blue-300 text-sm font-medium hover:bg-blue-950/80 transition-colors border border-blue-800/50">
              <span className="w-2 h-2 rounded-full bg-blue-400" aria-hidden="true" />
              University of Twente
            </a>
            <a href="https://www.baykartech.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/60 text-red-300 text-sm font-medium hover:bg-red-950/80 transition-colors border border-red-800/50">
              <span className="w-2 h-2 rounded-full bg-[#D01212]" aria-hidden="true" />
              Baykar Technology
            </a>
          </div>

          <p className="text-gray-300 leading-relaxed max-w-2xl mb-8">
            I am a PhD researcher at the University of Twente specializing in Computer Vision and Remote Sensing, investigating novel deep learning approaches for aerial and satellite image understanding. Concurrently, I work as an AI Software Engineer at Baykar Technology, building production-grade computer vision systems for real-world aerial intelligence applications.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            <a href="/research" className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors">
              View Research →
            </a>
            <a href="/industry" className="px-5 py-2.5 border border-gray-500 text-gray-200 rounded-lg font-medium hover:bg-white/10 transition-colors">
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
                className="text-sm text-gray-400 hover:text-white transition-colors"
                aria-label={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="relative z-10">
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

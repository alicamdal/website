import type { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'
import { getAllBlogPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles on Computer Vision, Remote Sensing, and AI Engineering.',
}

export default function BlogPage() {
  const posts = getAllBlogPosts()
  return (
    <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16">

      {/* Document / Writing Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" className="opacity-[0.09] dark:opacity-[0.16]">
          <defs>
            <radialGradient id="blog-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fb923c" stopOpacity="1"/>
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <ellipse cx="300" cy="800" rx="360" ry="360" fill="url(#blog-glow)" opacity="0.12"/>

          {/* Document 1 — large, center-left */}
          <rect x="180" y="120" width="340" height="440" rx="6" fill="none" stroke="#fb923c" strokeWidth="1.5"/>
          <line x1="220" y1="175" x2="480" y2="175" stroke="#fb923c" strokeWidth="1.2"/>
          <line x1="220" y1="175" x2="350" y2="175" stroke="#fb923c" strokeWidth="3" opacity="0.8"/>
          {[210,230,250,270,290,310,330,350,370,390,410,430,450,470].map((y, i) => (
            <line key={i} x1="220" y1={y} x2={i % 5 === 4 ? 380 : 480} y2={y} stroke="#fb923c" strokeWidth="0.8" opacity="0.6"/>
          ))}
          {/* Bookmark */}
          <path d="M 480 120 L 480 165 L 462 150 L 444 165 L 444 120 Z" fill="none" stroke="#fb923c" strokeWidth="1.5"/>

          {/* Document 2 — rotated, top right */}
          <g transform="rotate(-8 1450 250)">
            <rect x="1300" y="140" width="280" height="360" rx="6" fill="none" stroke="#f97316" strokeWidth="1.2"/>
            {[190,210,230,250,270,290,310,330,350,360,380,400,420].map((y, i) => (
              <line key={i} x1="1330" y1={y} x2={i % 4 === 3 ? 1480 : 1550} y2={y} stroke="#f97316" strokeWidth="0.8" opacity="0.5"/>
            ))}
          </g>

          {/* Document 3 — bottom right */}
          <g transform="rotate(5 1600 780)">
            <rect x="1480" y="680" width="260" height="320" rx="6" fill="none" stroke="#fb923c" strokeWidth="1.2"/>
            {[730,750,770,790,810,830,850,870,890,910,930,950].map((y, i) => (
              <line key={i} x1="1510" y1={y} x2={i % 3 === 2 ? 1650 : 1710} y2={y} stroke="#fb923c" strokeWidth="0.8" opacity="0.5"/>
            ))}
          </g>

          {/* Large quote mark */}
          <text x="900" y="700" fill="#fb923c" fontSize="300" fontFamily="serif" opacity="0.06">"</text>

          {/* Tag/label shapes */}
          <rect x="220" y="590" width="110" height="28" rx="14" fill="none" stroke="#f97316" strokeWidth="1.2"/>
          <text x="252" y="609" fill="#f97316" fontSize="10" fontFamily="monospace">Computer Vision</text>
          <rect x="345" y="590" width="80" height="28" rx="14" fill="none" stroke="#f97316" strokeWidth="1.2"/>
          <text x="368" y="609" fill="#f97316" fontSize="10" fontFamily="monospace">PyTorch</text>
          <rect x="220" y="628" width="90" height="28" rx="14" fill="none" stroke="#fb923c" strokeWidth="1.2"/>
          <text x="243" y="647" fill="#fb923c" fontSize="10" fontFamily="monospace">Deep Learning</text>

          <text x="50" y="1065" fill="#6b7280" fontSize="8" fontFamily="monospace">TOPICS: Computer Vision · Remote Sensing · AI Engineering · Embedded Systems  |  LANG: EN</text>
        </svg>
      </div>
      <h1 className="relative z-10 text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">Blog</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">Articles on Computer Vision, Remote Sensing, and AI Engineering.</p>
      <div className="relative z-10 space-y-4">
        {posts.map((post) => (<BlogCard key={post.slug} {...post} />))}
      </div>
    </div>
  )
}

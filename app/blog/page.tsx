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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">Blog</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">Articles on Computer Vision, Remote Sensing, and AI Engineering.</p>
      <div className="space-y-4">
        {posts.map((post) => (<BlogCard key={post.slug} {...post} />))}
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getBlogSlugs, getBlogPost } from '@/lib/mdx'
import Tag from '@/components/Tag'
import CalloutBox from '@/components/CalloutBox'

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const post = getBlogPost(params.slug)
    return { title: post.title, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, type: 'article', publishedTime: post.date } }
  } catch {
    return {}
  }
}

const mdxComponents = { CalloutBox }

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  let post
  try {
    post = getBlogPost(params.slug)
  } catch {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-8 transition-colors">← Back to Blog</Link>
      <article>
        <header className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-4 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap gap-2">{post.tags.map((tag) => (<Tag key={tag} variant="gray">{tag}</Tag>))}</div>
        </header>
        <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-pre:bg-gray-900 prose-pre:rounded-lg">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </div>
  )
}

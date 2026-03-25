import Link from 'next/link'
import Tag from './Tag'

interface BlogCardProps {
  slug: string
  title: string
  date: string
  tags: string[]
  excerpt: string
  readingTime: string
}

export default function BlogCard({ slug, title, date, tags, excerpt, readingTime }: BlogCardProps) {
  return (
    <article className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
        <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        <span>·</span>
        <span>{readingTime}</span>
      </div>
      <h2 className="font-semibold text-lg text-gray-900 dark:text-slate-100 mb-2 leading-snug">
        <Link href={`/blog/${slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          {title}
        </Link>
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{excerpt}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Tag key={tag} variant="gray">{tag}</Tag>
        ))}
      </div>
    </article>
  )
}

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { calculateReadingTime } from './reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export type BlogPost = {
  slug: string
  title: string
  date: string
  tags: string[]
  excerpt: string
  readingTime: string
  content: string
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getBlogPost(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title,
    date: data.date,
    tags: data.tags ?? [],
    excerpt: data.excerpt ?? '',
    readingTime: calculateReadingTime(content),
    content,
  }
}

export function getAllBlogPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => getBlogPost(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
